# testing codegen from github graphql api

🛑 Current blocker is getting a `ERR_UNKNOWN_FILE_EXTENSION` when running `npm run codegen`

```log
master ✔ $ npm run codegen

> test-github-contrib@1.0.0 codegen
> graphql-codegen-esm --config codegen.yaml

✔ Parse Configuration
⚠ Generate outputs
  ❯ Generate to src/generated/graphql.ts
    ✖
      Failed to load schema from src/generated/github-schema-loader.ts:
      Unable to load from file "/Users/hacksore/dev/test-github-graphql/src/generated/github-schema-loader.ts": TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /User…
      at new NodeError (node:internal/errors:399:5)
      at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:79:11)
      at defaultGetFormat (node:internal/modules/esm/get_format:121:38)
      at defaultLoad (node:internal/modules/esm/load:81:20)
      at nextLoad (node:internal/modules/esm/loader:163:28)
      at ESMLoader.load (node:internal/modules/esm/loader:605:26)
      at ESMLoader.moduleProvider (node:internal/modules/esm/loader:457:22)
      at new ModuleJob (node:internal/modules/esm/module_job:64:26)
      at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:480:17)
      at ESMLoader.getModuleJob (node:internal/modules/esm/loader:434:34)
      Error: Unable to load from file "/Users/hacksore/dev/test-github-graphql/src/generated/github-schema-loader.ts": TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" fo…
      at new NodeError (node:internal/errors:399:5)
      at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:79:11)
      at defaultGetFormat (node:internal/modules/esm/get_format:121:38)
      at defaultLoad (node:internal/modules/esm/load:81:20)
      at nextLoad (node:internal/modules/esm/loader:163:28)
      at ESMLoader.load (node:internal/modules/esm/loader:605:26)
      at ESMLoader.moduleProvider (node:internal/modules/esm/loader:457:22)
      at new ModuleJob (node:internal/modules/esm/module_job:64:26)
      at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:480:17)
      at ESMLoader.getModuleJob (node:internal/modules/esm/loader:434:34)
      at tryToLoadFromExport (file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/code-file-loader/esm/load-from-module.js:12:15)
      at async CodeFileLoader.handleSinglePath (file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/code-file-loader/esm/index.js:167:32)
      at async file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/code-file-loader/esm/index.js:91:32
      at async Promise.all (index 0)
      at async CodeFileLoader.load (file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/code-file-loader/esm/index.js:89:9)
      at async file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/load/esm/load-typedefs/load-file.js:12:39
      at async Promise.all (index 0)
      at async loadFile (file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/load/esm/load-typedefs/load-file.js:10:9)
      at async file:///Users/hacksore/dev/test-github-graphql/node_modules/@graphql-tools/load/esm/load-typedefs/collect-sources.js:201:25
      GraphQL Code Generator supports:
      - ES Modules and CommonJS exports (export as default or named export "schema")
      - Introspection JSON File
      - URL of GraphQL endpoint
      - Multiple files with type definitions (glob expression)
      - String in config file
      Try to use one of above options and run codegen again.
    ◼ Load GraphQL documents
    ◼ Generate
```
