# このgitリポジトリについて
nuxt3を用いてwebアプリケーションを構築してサーバーレスデプロイするためのベースとするもの

## 基本方針
![](./00-servers.dio.png)

- コンテナ環境において開発作業する
    - SPA構成を取りSSRしない
    - Nitroでbuildする
- slsを用いてサーバーレスデプロイできる
    - aws lambdaで関数URL化する
    - api gatewayにエンドポイントを立ててアクセスできる
- その他、開発に有用なツールをいくつか積んでおくこと

## 初回起動
```
git clone https://github.com/ShunsukeNONOMURA/nuxt3-master.git
cd nuxt3-master
./shells/bash.sh
yarn install
```

## 主要な導入ソフトウェア
| ライブラリ | 用途 |
| - | - |
| docker | コンテナによる仮想環境 |
| serverless | サーバーレス環境へのホスティング |
| aws cli | awsコマンド操作 |
| nuxt3 | フルスタックwebフレームワーク |
| vuetify | マテリアルデザインコンポーネント |
| i18n | 多言語対応 |
| pug | テンプレートエンジン |
| typescript | 静的型付け |
| prisma | orm |
| eslint | 静的解析ツール |
| prettier | フォーマッター |
| vitest | テスト |

## ディレクトリ構成
components
composables
layouts
middleware
pages
server

tests

plugins
prisma

## よく使う コマンド チートシート
### host環境
| コマンド | 動作 |
| - | - |
| docker compose run --rm nuxt bash | |
| git secrets --scan | |
| git status -uall | |
| git add . | |
| git commit -m 'comment' | |
| git push | |

### コンテナ環境
| コマンド | 動作 |
| - | - |
| yarn install | |
| yarn add -D {libname} | |
| yarn remove {libname} | |
| yarn prisma format | |
| yarn prisma migrate reset | |
| yarn prisma migrate dev --name init | |
| yarn prisma generate | |
| yarn prisma studio | |
| yarn dev | |
| yarn nuxi typecheck | |
| yarn vitest | |
| yarn vitest run --coverage | |
| yarn build | |
| yarn generate | |
| yarn sls plugin install | |
| yarn sls invoke local | |
| yarn sls deploy | |
| yarn sls deploy list | |
| yarn sls remove | |


## ガイド
[Nuxt3 Guide](https://nuxt.com/docs/guide)
[Vite ガイド](https://ja.vitejs.dev/guide/)
[Nitro Getting Started](https://nitro.unjs.io/guide/getting-started)
[Serverless Framework Documentation](https://www.serverless.com/framework/docs)