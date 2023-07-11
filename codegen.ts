import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "src/query/**/*.gql",
  schema: {
    "https://api.github.com/graphql": {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, "User-Agent": "codegen" },
    },
  },
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers", "typescript-document-nodes"],
    },
  },
};

export default config;
