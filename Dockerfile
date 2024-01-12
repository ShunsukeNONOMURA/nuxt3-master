# slim系のnodeから構築することを定義
FROM node:20.5.1-bullseye

# npm更新
RUN npm install -g npm@9.8.1

# serve追加
RUN npm install --global serve

# コンテナ内の作業ディレクトリを作成
WORKDIR /project
