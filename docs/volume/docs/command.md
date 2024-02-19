# コマンドラインチートシート
よく使うコマンドをまとめるページ

### host環境
| コマンド                          | 説明 |
| --------------------------------- | ---- |
| docker compose run --rm nuxt bash |      |
| git secrets --scan                |      |
| git status -uall                  |      |
| git add .                         |      |
| git commit -m 'comment'           |      |
| git push                          |      |

### コンテナ環境
いくつかのコマンドはpackage.jsonで設定しているものであることに注意。
| コマンド                            | 説明                                      |
| ----------------------------------- | ----------------------------------------- |
| yarn install                        | package.jsonのライブラリをinstall         |
| yarn add -D {libname}               | ライブラリを開発環境に追加                |
| yarn remove {libname}               | ライブラリを削除                          |
| yarn prismafix                      | .prismaファイルの整形（case + indent）    |
| yarn prisma db pull                 | 既存のDBからschema.prismaに反映          |
| yarn prisma format                  | .prismaファイルの整形（indent）           |
| yarn prisma migrate reset           | **取り扱い注意：RDB初期化（警告は出る）** |
| yarn prisma migrate dev --name init |                                           |
| yarn prisma generate                | typeとer図生成                            |
| yarn prisma studio                  |                                           |
| yarn dev                            | nuxt開発環境立ち上げ                      |
| yarn nuxi typecheck                 |                                           |
| yarn vitest                         | test実行                                  |
| yarn vitest run --coverage          | test実行（カバレッジ出力）                |
| yarn build                          | ビルド実行                                |
| yarn generate                       |                                           |
| yarn sls plugin install             | slsのプラグインinstall                    |
| yarn sls invoke local               | slsのlocal実行                            |
| yarn sls deploy                     |                                           |
| yarn sls deploy list                |                                           |
| yarn sls remove                     |                                           |