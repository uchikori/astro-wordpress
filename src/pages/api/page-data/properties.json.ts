import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query AllPropertiesQuery {
            properties(first: 1000) {
                nodes {
                    databaseId
                    uri
                    title
                    featuredImage {
                        node {
                            sourceUrl
                            mediaDetails {
                                height
                                width
                            }
                            altText
                        }
                    }
                    propertyDetails {
                        bathrooms
                        bedrooms
                        fieldGroupName
                        price
                    }
                }
            }
        }
        `,
    }),
  });

  const { data } = await response.json();

  return new Response(JSON.stringify({ properties: data.properties.nodes }));
};
