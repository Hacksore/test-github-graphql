import { ContributionsCollection } from "./generated/graphql.js";
import { graphql } from "@octokit/graphql";

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

const GET_USER_QUERY = `
query {
  user (login: "Hacksore"){
    contributionsCollection {
      contributionCalendar {
        totalContributions,
        weeks {
          contributionDays {
            contributionCount
          }
        }
      }
    }
  }
}
`;

try {
  console.log("getting data...");
  const res: ContributionsCollection = await graphqlWithAuth(GET_USER_QUERY);
  console.log("res:", res.user.contributionsCollection.contributionCalendar.totalContributions);

} catch (error: any) {
  console.log("error:", error);
}
