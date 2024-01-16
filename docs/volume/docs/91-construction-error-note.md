# 構築時に詰まったこと
環境構築の際にエラーが発生した。  
防備録としてエラーメッセージとその回避方法について記述する。

## ERROR  require() of ES Module /project/node_modules/string-width/index.js from /project/node_modules/wide-align/align.js not supported.
vite由来のバグらしい。
package.jsonに下記を記述すると回避できる。
```json
{
  "resolutions": {
    "string-width": "4.2.3"
  }
}
```
https://github.com/nuxt/nuxt/issues/21231

## DevTools failed to load source map: Could not load content for chrome-extension://cofdbpoegempjloogbagkncekinflcnj/build/content.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
DeepLなど、chromeの拡張機能によってはnuxtの開発環境とのかみ合わせが悪く、デバッグのコンソールにwarningが表示される場合がある。  
特定のプラグインがない場合、warning表示されない。
https://zenn.dev/marumarumeruru/scraps/c682954603c228

## Prisma Client could not locate the Query Engine for runtime \"rhel-openssl-3.0.x\"
ビルド環境とランタイム環境で使っているquery engineに違いがあるときに生じるエラー
```
"\nInvalid `prisma.tUser.findUnique()` invocation:\n\n\nPrisma Client could not locate the Query Engine for runtime \"rhel-openssl-3.0.x\".\n\nThis happened because Prisma Client was generated for \"debian-openssl-1.1.x\", but the actual deployment required \"rhel-openssl-3.0.x\".\nAdd \"rhel-openssl-3.0.x\" to `binaryTargets` in the \"schema.prisma\" file and run `prisma generate` after saving it:\n\ngenerator client {\n  provider      = \"prisma-client-js\"\n  binaryTargets = [\"native\", \"rhel-openssl-3.0.x\"]\n}\n\nThe following locations have been searched:\n  /var/task/.output/server/node_modules/.prisma/client\n  /var/task/.output/server/node_modules/@prisma/client\n  /project/node_modules/@prisma/client\n  /tmp/prisma-engines"
```

prisma/schema.prismaにruntimeを追加すれば解消
```
generator client {
  provider = "prisma-client-js"
  binaryTargets   = ["native", "rhel-openssl-3.0.x"] // lambda用にrhelを追加
}
```

https://www.prisma.io/docs/orm/prisma-client/deployment/serverless/deploy-to-aws-lambda#binary-targets-in-schemaprisma

## Error querying the database: Error code 14: Unable to open the database file
**調査中**
lambda上でsqliteのdatabase fileが開けない模様