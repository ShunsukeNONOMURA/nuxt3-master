# 一時メモ
Nuxt-plotly
https://nuxt.com/modules/nuxt-plotly
```
yarn add -D nuxt-plotly
```

opensearch JavaScript client
https://opensearch.org/docs/latest/clients/javascript/index/
```
yarn add @opensearch-project/opensearch
```

prisma lambda sqlite

## indent
https://ics.media/entry/10234/
https://maku.blog/p/avssq37/
一般的にはスペース2つ

## prisma case統一
prisma-case-format

## connection_limitを1にする
https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections

url = xxx&connection_limit=1

## 参考資料
- [【DDD入門】TypeScript × ドメイン駆動設計ハンズオン](https://zenn.dev/yamachan0625/books/ddd-hands-on)

## Lodashインポート時のファイルサイズを削減
[Lodashインポート時のファイルサイズを削減する](https://qiita.com/ykhirao/items/c3f35373267798447dba)
```
import get from "lodash/get
```

## メモ
なんちゃってアジャイル

## Vuetify: Invalid prop: custom validator check failed for prop
[Vuetify: Invalid prop: custom validator check failed for prop "value"エラーが発生する](https://qiita.com/Sicut_study/items/ed41eb541cb6a8eef410)

# minIO
S3互換のローカルストレージサーバー

```
version: '3.9'

services:
  minio:
    image: minio/minio:RELEASE.2022-10-08T20-11-00Z
    container_name: minio
    ports:
      - "9000:9000"
      - "9001:9001"
    environment:
      - MINIO_ROOT_USER=minio
      - MINIO_ROOT_PASSWORD=minio123
    entrypoint: sh
    command: -c "/opt/bin/minio server /export --address :9000 --console-address :9001"
    volumes:
      - ./docker/minio/data:/export
```

