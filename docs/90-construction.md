# 構築記録
このリポジトリを作成したときの手順についての記録。

## nuxt3プロジェクトの作成
```
// 初期化
npx nuxi@latest init project
```

nuxt.config.tsの設定を更新
```typescript
export default defineNuxtConfig({
  // nuxt設定
  vite: {
      // env
      define: {
          "process.env.DEBUG": false
      },
      // Hot Module Reload
      server: {
          watch: {
              usePolling: true
          }
      },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // pathによるprefixを使用するか
    },
  ],
})
```

参考：https://qiita.com/mml/items/9936471c551ee3f15218

## vuetify導入
```
// vuetify
yarn add -D vuetify sass vite-plugin-vuetify
yarn add @mdi/font
```

plugins/nuxt.config.tsを作成。必要に応じて適宜設定する。

```typescript
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'

// theme
export const MAIN_THEME = 'mainTheme'
export const mainTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#4f46e5',
        secondary: '#9333ea',
        error: '#ef4444',
        info: '#3b82f6',
        success: '#22c55e',
        warning: '#f59e0b',
    },
}

// default
const defaults = {
    // VAppBar: {
    //   flat: true,
    //   color: 'primary',
    // },
}

export default defineNuxtPlugin( nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
        defaults,
        theme: {
            defaultTheme: MAIN_THEME,
            themes: {
                mainTheme,
            },
            // primary-darken-9 primary-lighten-9 までできるようにする
            variations: {
                colors: ['primary', 'secondary', 'accent'],
                lighten: 9,
                darken: 9,
            },
        },
        components,
    });

    nuxtApp.vueApp.use( vuetify );
});
```

nuxt.config.tsを編集
```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // vuetify設定
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"
  ],
  build: {
      transpile: ["vuetify"]
  },
})
```

## pugの追加
```
yarn add -D pug
```

## typescriptとtypecheckの追加
```
yarn add -D typescript vue-tsc
npx nuxi typecheck
```

下記のコマンドからtypecheck可能
```
yarn nuxi typecheck
```

## serverless framework の追加
```
yarn add -D serverless
```

nuxt.config.tsを編集してaws用にビルドタイプ変更。ついでにopenAPIを表示するように設定。
```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // sls設定
  nitro: {
    preset: 'aws-lambda', // lambda用のビルド指定
    serveStatic: true, // lambdaからバイナリを直接払い出す指定
    experimental: {
        openAPI : true // swagger
    },
  },
  ssr: false,
})
```

serverless.ymlを作成
```yml
service: nonomura-lambda-ssr-nuxt3
frameworkVersion: '3'

custom:
  author: ${opt:author, "nonomura"}
  stage: ${opt:stage, "dev"}
  region: ${opt:region, "ap-northeast-1"}

provider:
  name: aws
  runtime: nodejs20.x
  stage: ${self:custom.stage}
  region: ${self:custom.region}
  versionFunctions: false
  logRetentionInDays: 3 # Cloudwatchのログ保存期間日数

package:
  patterns:
    - '!**'
    - '.output/**'
    # - '.output/server/**' # nuxt run buildの出力ディレクトリのサーバーサイドのみを指定

functions:
  NuxtSsrCore:
    name: ${self:custom.author}-nuxt-${self:custom.stage}
    handler: '.output/server/index.handler'
    url: true
    events:
      # - http: # REST API
      #     method: ANY
      #     path: /{proxy+}
      - httpApi: # HTTP API
          method: ANY
          path: /{proxy+}
      # - schedule: 
      #     rate: rate(5 minutes) # 定期実行（コールド対策） 
      #     input: # health check
      #       resource: "/{proxy+}"
      #       path: "/api/health"
      #       httpMethod: "GET"
      #       requestContext: {}
```

.aws/credentialsを編集してawsへの認証情報を追加
```
[default]
aws_access_key_id=XXX
aws_secret_access_key=XXX
```

## prismaを追加
```
yarn add -D prisma
yarn add @prisma/client
```

初期フォルダ作成
```
yarn prisma init --datasource-provider sqlite
```

prisma/schema.prismaを編集
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  binaryTargets   = ["native", "rhel-openssl-3.0.x"] // lambda用にrhelを追加
}

datasource db {
  provider = "sqlite"
  //url      = env("DATABASE_URL")
  url = "file:./dev.db?connection_limit=1"
}

model TUser {
  userId String @id @map("user_id")
  userName String @map("user_name")
  userRoleId String @map("user_role_id")
  userCreationDatetime DateTime @default(now()) @map("user_creation_datetime")
  userUpdateDatetime DateTime @default(now()) @map("user_update_datetime")
  @@map("t_user")
}
```

sqliteを初期化
```
yarn prisma migrate reset
yarn prisma migrate dev --name init
```

参考：https://note.com/shift_tech/n/n800e789c6984

## 整理中
```
// vitest
yarn add --D @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core

// lint
yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @eslint/create-config eslint-plugin-vue-pug
// prettier
yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```