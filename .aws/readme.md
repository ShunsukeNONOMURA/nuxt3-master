# aws認証ファイル設定

## creadentials
- 下記のような .aws/credentials を作成し同ディレクトリに配置してaws認証情報を設定する。
- .gitignoreでpushしないように設定し、docker-compose.yml上で/root/.aws似マウントする設定。

```
[default]
aws_access_key_id=xxx
aws_secret_access_key=yyy
```