import { ContributionsCollection } from "./generated/graphql.js";
import { graphql } from "@octokit/graphql";

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

// This works but is super fragile
const GET_USER_CONTRIBUTIONS = `
query GetContributions ($login: String!) {
  user (login: $login){
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
  const res = await graphqlWithAuth<ContributionsCollection>(GET_USER_CONTRIBUTIONS, { login: "Hacksore" });

  console.log("res:", res.user.contributionsCollection.contributionCalendar.totalContributions);
} catch (error: any) {
  console.log("error:", error);
}
