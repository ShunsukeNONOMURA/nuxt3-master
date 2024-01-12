# このgitリポジトリについて
nuxt3を用いてwebアプリケーションを構築するためのベースとするもの

## 基本方針
- コンテナ環境において動作する
- slsを用いてサーバーレスデプロイできる
    - SPA構成を取りSSRしない
    - aws lambdaで関数URL化する
- その他、開発に有用なツールをいくつか積んでおくこと

## 初回起動
```
git clone https://github.com/ShunsukeNONOMURA/nuxt3-master.git
cd nuxt3-master
./shells/bash.sh
yarn install
```
