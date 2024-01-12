# 構築記録
このリポジトリを作成したときの手順についての記録

### nuxt3プロジェクトの作成
```
// 初期化
npx nuxi@latest init project
```

## ライブラリ
```
// vuetify
yarn add -D vuetify sass vite-plugin-vuetify
yarn add @mdi/font
// pluginsを追加, nuxt.config.tsを編集

// pug追加
yarn add -D pug
// typescript追加 兼 導入確認
yarn add -D typescript vue-tsc
npx nuxi typecheck
// sls
yarn add -D serverless
// nuxt.config.tsを編集してaws用にビルドタイプ変更
// serverless.ymlを作成
// 認証情報を追加 .aws/credentials

// prisma
yarn add -D prisma
yarn add @prisma/client
// 初期フォルダ作成
yarn prisma init --datasource-provider sqlite

# prisma/schema.prisma 編集後
yarn prisma migrate reset
yarn prisma migrate dev --name init

```
prisma migration
https://note.com/shift_tech/n/n800e789c6984

.aws/credentials
```
[default]
aws_access_key_id=hogehoge
aws_secret_access_key=hogehoge
```



```
// vitest
yarn add --D @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core

// lint
yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @eslint/create-config eslint-plugin-vue-pug
// prettier
yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

## nuxt構築
components
composables
layouts
middleware
pages
server

plugins
