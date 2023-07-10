import { GraphqlResponseError, graphql } from "@octokit/graphql";

// https://github.com/octokit/graphql.js#typescript
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

const GET_USER_QUERY = `
  query {
    viewer {
      login
    }
  }
`;

try {
  console.log("getting data...")

  const res = await graphqlWithAuth(GET_USER_QUERY);

  console.log("got data:", res.viewer.login)

} catch (error: any) {
  if (error instanceof GraphqlResponseError) {
    console.log("Request failed:", error.request); // { query, variables: {}, headers: { authorization: 'token secret123' } }
    console.log(error.message); // Field 'bioHtml' doesn't exist on type 'User'
  } else {
    // handle non-GraphQL error
  }
}
