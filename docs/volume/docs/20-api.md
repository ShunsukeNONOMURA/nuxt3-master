# API設計
REST(REpresentational State Transfer) API として設計することを目指す。

- 統一インターフェース
- アドレス可能性
- 接続性
- ステートレス性


## API Code

## html status code

4xx Client Error
5xx Server Error


| HTTPステータスコード | 説明 |
| - | - |
| 400 Bad Request | 一般的なクライアントエラー |
| 401 Unauthorized | アクセス権が無い、または認証に失敗 |
| 403 Forbidden | 閲覧権限が無い |
| 404 Not Found | 見つからない |
| 500 Internal Server Error | 何らかのサーバ内で起きたエラー |


## URI (Uniformed Resource Identifier)
覚えやすく、どんな機能を持つURIなのかがひと目でわかるルールに統一されていることが望ましい

- 短くて入力しやすい
    - 長い場合、不要な情報があったり、重複するものがあったりするかも
- 名詞を用いる
- バージョン番号が含まれている
    - hostname/api/{version}/collection
- 命名規則（ケース）は特に決まっていない
    - 開発言語に寄せるのがシンプル
    - [youtube data apiはキャメルケース](https://developers.google.com/youtube/v3/docs?hl=ja)
- クエリやタスクはどうするか？

リソースを示す構成は概ね下記のようなパターン

| リソース                    | 説明                                           |
| --------------------------- | ---------------------------------------------- |
| /collection                 | 特定のコレクション                             |
| /collection/{id}            | 特定のコレクションの中の一つ                   |
| /collection/{id}/collection | 特定のコレクションの中の一つが持つコレクション |


### HTTP メソッド操作例
| リソース      | POST                        | GET                           | PUT                                           | DELETE                        |
| ------------- | --------------------------- | ----------------------------- | --------------------------------------------- | ----------------------------- |
| /user         | 新しいユーザを作成          | すべてのユーザを取得          | ユーザを一括更新                              | すべてのユーザを削除          |
| /user/1       | エラー                      | ユーザ 1 の詳細を取得         | ユーザ 1 の詳細を更新 (顧客 1 が存在する場合) | ユーザ 1 を削除               |
| /user/1/order | ユーザ 1 の新しい注文を作成 | ユーザ 1 のすべての注文を取得 | ユーザ1 の注文を一括更新                      | ユーザ 1 のすべての注文を削除 |
| /order        | 新しい注文を作成            | すべての注文を取得            | 注文を一括更新                                | すべての注文を削除            |
| /order/1      | エラー                      | 注文 1 の詳細を取得           | 注文 1 の詳細を更新                           | 注文 1 を削除                 |

## 参考
- [HTTP メソッドに関する API 操作の定義](https://learn.microsoft.com/ja-jp/azure/architecture/best-practices/api-design#define-api-operations-in-terms-of-http-methods)

