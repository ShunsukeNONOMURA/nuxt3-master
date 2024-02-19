# 一時メモ

人員変動
開発、設計の各工程

# 設計
何を作ることを決めた後、どうやってそれを作るかを考えていく。  

## 設計のステップ
1. データの洗い出し
1. データをリソースに分割
1. リソースにURIを割り当てる
1. リソースにIFを割り当てる
1. クライアントに送受信するメディアタイプを決める
1. 接続性を高める
1. 正常系を考える
1. 例外処理を考える


フィジビリティスタディ（F/S）
「実行可能性調査」「企業化調査」「投資調査」「採算性調査」

バックログの単位

opensearch JavaScript client
https://opensearch.org/docs/latest/clients/javascript/index/
```
yarn add @opensearch-project/opensearch
```

prisma lambda sqlite動かない

## indent
https://ics.media/entry/10234/
https://maku.blog/p/avssq37/
一般的にはスペース2つ

## 参考資料
- typescript ddd
    - [【DDD入門】TypeScript × ドメイン駆動設計ハンズオン](https://zenn.dev/yamachan0625/books/ddd-hands-on)

## Lodashインポート時のファイルサイズを削減
[Lodashインポート時のファイルサイズを削減する](https://qiita.com/ykhirao/items/c3f35373267798447dba)
```
import get from "lodash/get
```

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


## フロント
tailwind
[利用者爆増中 初めてでもわかるTailwind CSS入門 基礎編](https://reffect.co.jp/html/tailwindcss-for-beginners/)

cloudflare
ウェブホスティングサービス

## nuxt github
https://qiita.com/kira_puka/items/46a10a5dd353c1d4ad4b

```
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  app: {
    baseURL: '/<reponame>'
  }
})
```


## リンク
[リビルドか，リファクタか](https://www.infoq.com/jp/news/2015/12/rebuild-refactor-software/)
[ソフトウェアやシステム開発の工程、英語で言える？](https://freelance-meikan.com/freelance/1040/blog/526)