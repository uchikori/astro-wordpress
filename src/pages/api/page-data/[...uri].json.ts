import type { Block } from "@wp-block-tools/styles";
import type { APIRoute } from "astro";
//ページデータをGraphQL API経由で取得し、そのデータを返すAPIルートを定義
export const GET: APIRoute = async ({ params }) => {
  const uri = params.uri;
  const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query PageQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on ContentNode {
          databaseId
          blocks
          seo {
            metaDesc
            title
          }
        }
      }
    }`,
      variables: {
        uri: uri || "/",
      },
    }),
  });
  const { data } = await response.json();

  return new Response(JSON.stringify({ data: data.nodeByUri }));
};

// /buying/all-propertyページのみを取得し静的パスを生成
export async function getStaticPaths() {
  //api/buying/all-properties.json
  const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query AllPagesQuery {
        pages(first: 10000) {
          nodes {
            uri
            blocks(attributes: false)
          }
        }
        properties(first: 10000) {
          nodes {
            uri
            blocks(attributes: false)
          }
        }
      }
      `,
    }),
  });
  const { data } = await response.json();

  //全てのページとプロパティページを取得しフィルター
  return [...data.pages.nodes, ...data.properties.nodes]
    .filter((page: any) => {
      let found = false; //[astroestates/property-search]が存在するかどうかのフラグ

      //[astroestates/property-search]が存在するかどうかの検証関数
      const hasPropertySearch = (blocks: Block[]) => {
        //blocks配列の各ブロックを順に検証
        for (let block of blocks) {
          //block名が[astroestates/property-search]の場合
          if (block.name === "astroestates/property-search") {
            //フラグを立てる
            found = true;
            //検証を終了
            break;
          }

          //blockにinnerBlocksが存在する場合
          if (block.innerBlocks) {
            //再帰的に検証
            hasPropertySearch(block.innerBlocks);
          }
        }
      };

      //検証関数を実行
      hasPropertySearch(page.blocks);

      //検証結果を返す([astroestates/property-search]が含まれていなければtrueとなり、含まれている場合はfalseとなる)
      return found;
    })
    .map((page: any) => {
      return {
        params: { uri: page.uri === "/" ? undefined : page.uri.substring(1, page.uri.length - 1) },
      };
    });
}

// /buying/all-property
// api/page-data/buying/all-properties.json
