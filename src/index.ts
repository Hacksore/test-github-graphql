import { GetUserContributionsQuery, GetUserContributions } from "./generated/graphql.js";
import { githubClient } from "./client.js";

async function getUserContributions() {
  const result = await githubClient().query<GetUserContributionsQuery>({
    query: GetUserContributions,
    variables: {
      login: "Hacksore",
    },
  });

  return result;
}

const main = async () => {
  try {
    console.log("getting data...");
    const contributions = await getUserContributions();

    // This works and if you need to change the type of the data
    // you mutate the query/get-contribution.gql file and run "npm run codegen" but make sure you have auth token in env
    console.log(contributions.data.user?.contributionsCollection.contributionCalendar.totalContributions);
  } catch (error: any) {
    console.log("error:", error);
  }
};

main();
