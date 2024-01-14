# 一時メモ
i18n
https://nuxt.com/modules/i18n

vitest
https://nuxt.com/docs/getting-started/testing
```
yarn add -D @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core
```

eslint prettier
https://nuxt.com/modules/eslint

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

typescript ddd

## indent
https://ics.media/entry/10234/
https://maku.blog/p/avssq37/
一般的にはスペース2つ

# 考察
環境構築に当たり、気がついたことや詰まったことについて記録するページ

## DevTools failed to load source map: Could not load content for chrome-extension://cofdbpoegempjloogbagkncekinflcnj/build/content.js.map: System error: net::ERR_BLOCKED_BY_CLIENT
DeepLなど、chromeの拡張機能によってはnuxtの開発環境とのかみ合わせが悪く、デバッグのコンソールにwarningが表示される場合がある。  
https://zenn.dev/marumarumeruru/scraps/c682954603c228


## prisma case統一
prisma-case-format

## connection_limitを1にする
https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections

url = xxx&connection_limit=1

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
調査中
sqliteのdatabase fileが開けない模様