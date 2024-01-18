# API設計

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


## Usecase
```mermaid
graph TB
    subgraph "システム"
        User((ユーザー))
        subgraph "ユーザ管理"
            QueryUser[ユーザ問い合わせ]
            GetUser[ユーザを一人取得]
            CreateUser[ユーザを作成]
            DeleteUser[ユーザを削除]
        end
    end
    User --> QueryUser
    User --> GetUser
    User --> CreateUser
    User --> DeleteUser
```

## ER図