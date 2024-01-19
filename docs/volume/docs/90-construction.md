# 構築記録
このリポジトリを作成したときの手順についての記録。  
作業を羅列的に記述するに留める。

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

### vuetify3のVDatePickerの日本語化
[Vuetify3のVDatePickerの日本語化](https://zenn.dev/iandcinc/articles/0a9cffe7012711)
```
yarn add @date-io/date-fns date-fns
```

```ts
import DateFnsAdapter from '@date-io/date-fns'
import { ja } from 'date-fns/locale'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    date: {
      adapter: new DateFnsAdapter({
        formats: {
          year: 'yyyy年',
          monthAndYear: 'yyyy年M月',
          normalDateWithWeekday: 'M月d日(E)',
        },
        locale: ja,
      }),
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
```

### v-data-table系の日本語化
createVuetifyする際に下記のようなdefaultを指定する。

```ts
const defaults = {
  VDataTableServer: {
    noDataText: 'データがありません。',
    itemsPerPageText: '1ページあたりの表示数',
    itemsPerPageOptions: [
      { value: 5, title: '5件' },
      { value: 10, title: '10件' },
      { value: 25, title: '25件' },
      { value: 50, title: '50件' },
      { value: 100, title: '100件' },
      // { value: -1, title: 'すべて' }
    ],
    pageText: '{0}-{1} 件 / {2} 件中',
  },
}
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

### ER図出力
```
yarn add -D prisma-erd-generator @mermaid-js/mermaid-cli
```

schema.prisma に追記
```
generator erd {
  provider = "prisma-erd-generator"
}
```

## i18n追加
https://nuxt.com/modules/i18n
```
yarn add -D @nuxtjs/i18n@next
```

locales/ja.yml追加
```
domain:
    welcome: ようこそ
```

nuxt.config.ts更新
```
export default defineNuxtConfig({
  modules: [
    // i18n
    [
      "@nuxtjs/i18n",
      {
        // デフォルト言語を除くすべてのルートにロケールプレフィックスを追加
        strategy: 'prefix_except_default',
        // 使用する言語
        locales: [
          { code: 'ja', file: 'ja.yml', iso: 'ja-JP' },
  	    ],
        // デフォルトの言語
        defaultLocale: 'ja',
        // 翻訳ファイルの置き場所
        langDir: 'locales/',
      }
    ]
  ],
})
```

## eslint/prettier 追加
```
yarn add -D @nuxtjs/eslint-config-typescript eslint
yarn add -D eslint-plugin-vue eslint-plugin-vue-pug
yarn add -D prettier eslint-config-prettier @vue/eslint-config-prettier
yarn add -D @prettier/plugin-pug
```

.eslintrc.ymlを作成
```
root: true
env: { node: true, es2021: true }
extends:
  - 'eslint:recommended'
  - '@nuxtjs/eslint-config-typescript'
  - 'plugin:vue-pug/vue3-recommended'
  - 'prettier'
  - '@vue/prettier'
parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
plugins: ['vue', '@typescript-eslint']
rules: {
    # コンソールログの出力に関して
    no-console: off,
    # 複合語のみコンポーネント名とするか
    vue/multi-word-component-names: off,
  }
```

.prettierrc.ymlを作成
```
singleQuote: true
semi: false
tabWidth: 2
vueIndentScriptAndStyle: true
trailingComma: 'es5'
plugins: ['@prettier/plugin-pug']
```

- [Nuxt3系プロジェクトセットアップ手順](https://diary-shoone.hatenablog.com/entry/nuxt3)
- [Prettierの設定オプションについてまとめてみた](https://zenn.dev/rescuenow/articles/c07dd571dfe10f#vueindentscriptandstyle-script%E3%82%BF%E3%82%B0%E3%81%A8style%E3%82%BF%E3%82%B0%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%87%E3%83%B3%E3%83%88)
- [Prettier Plugin Pug Guide](https://prettier.github.io/plugin-pug/guide/)

## vitest 追加
```
yarn add -D @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core
yarn add -D @vitest/coverage-v8
```
参考：https://nuxt.com/docs/getting-started/testing

## lodash 追加
```
yarn add -D nuxt-lodash
```

nuxt.config.ts を更新
```
export default defineNuxtConfig({
  modules: ["nuxt-lodash"],
});
```

[nuxt lodash](https://nuxt.com/modules/lodash)

## nuxt-plotly 追加
```
yarn add -D nuxt-plotly
```

nuxt.config.ts を編集
```
export default defineNuxtConfig({
  /**
   * Add nuxt-plotly module
   */
  modules: ["nuxt-plotly"],
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
});
```

https://nuxt.com/modules/nuxt-plotly