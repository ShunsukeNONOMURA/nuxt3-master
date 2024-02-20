# （記述中）nuxt3

## ガイド
[Nuxt3 Guide](https://nuxt.com/docs/guide)
[Vite ガイド](https://ja.vitejs.dev/guide/)
[Nitro Getting Started](https://nitro.unjs.io/guide/getting-started)
[Serverless Framework Documentation](https://www.serverless.com/framework/docs)

## サーバーサイドJavascriptのメリット・デメリット
- Webフロントエンドの知識や実装をバックエンドに応用しやすい
    - 歴史的経緯からWebフロントエンドでは結局javascriptの知識が求められる
    - 別言語でバックエンド書くと学習時間が分散してしまうので学習コストの削減をしたい
    - typescriptで作成したデータ型等を流用したい
    - 命名規則を統一できる
        - RDB間はprismaを使うとマッピングで対応できる
- 他言語独自のライブラリが使えない
    - とはいえ、大抵のライブラリはjsに揃っているはず
    - [ORM：prisma](https://www.prisma.io/)
    - [検索エンジン：opensearch](https://www.npmjs.com/package/@opensearch-project/opensearch)
    - [AWS:AWS SDK for JavaScript](https://aws.amazon.com/jp/sdk-for-javascript/)
    - [LLM：langchain](https://js.langchain.com/docs/get_started/installation)
    - [機械学習：PyTorch](https://pytorch.org/docs/stable/jit.html)

## 参考
- [【Vue 3】Composition API の基本](https://b1san-blog.com/post/vue/vue-3-composition-api/)
- [Vue コンポーザブル](https://ja.vuejs.org/guide/reusability/composables)



## components

## composables
- useXXXという名前
- テスト対象に置くとコンポーネントテスト
- 単体 or 検索

## middleware

## layouts

## locals

## env
必須じゃないはず

## tests
- vitests
- praywright

https://vuejs.org/guide/scaling-up/testing
https://nuxt.com/docs/getting-started/testing

- 評価項目
    - 変更が難しい
- テスト対象
    - バックエンドのAPI単位
    - storybook : コンポーネントの単体テスト
    - コンポーザブル：結合テスト
        - 検索条件単位　→　検索結果を受ける　：　
    - E2E
        - praywrite

