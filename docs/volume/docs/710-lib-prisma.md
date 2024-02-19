# （記述中）ライブラリ：prisma

## prisma
- ビュー対応がpreview段階
    - https://www.prisma.io/docs/orm/prisma-schema/data-model/views
    - prismaからcreate viewできない
    - includeでjoinはできる
        - https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries#nested-reads
- フラット対応がない
    - https://github.com/prisma/prisma/discussions/2414


# memo
- create(connect)


## prisma case統一
prisma-case-format
https://www.npmjs.com/package/prisma-case-format
https://github.com/iiian/prisma-case-format?tab=readme-ov-file

```
// snake_caseのmapを追加する設定
yarn prisma-case-format -f ./prisma/schema.prisma --map-table-case snake --map-field-case snake
// package.json で prisma formatとまとめて実行する設定
prisma-case-format -f ./prisma/schema.prisma --map-table-case snake --map-field-case snake && prisma format
```

## prisma-erd-generator
- er図の生成プラグイン
- https://www.npmjs.com/package/prisma-erd-generator
- 0.11.5-0より後のバージョンだと不要なリレーションが出力される不具合
    - https://github.com/keonik/prisma-erd-generator/issues/219

## connection_limitを1にする
https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections

url = xxx&connection_limit=1

## 参考
- [【データベース設計】 テーブル名、カラム名の名前の付け方（命名規則）](https://www.softel.co.jp/blogs/tech/archives/627)
- [データベースの命名規則](https://avinton.com/academy/database-naming-conventions/)
- [SQLアンチパターン勉強会　第五回：EAV(エンティティ・アトリビュート・バリュー)](https://qiita.com/skyc_lin/items/37365a36416d0dc42431)

- [prisma docs](https://www.prisma.io/docs)
- [prisma docs generators](https://www.prisma.io/docs/orm/prisma-schema/overview/generators)
- [Prisma ER Diagram](https://prisma-erd.simonknott.de/)