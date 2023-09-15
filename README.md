# React Monaco Editor x Kotlin Language Server (websockets) showcase
This is a sample project that demonstrates how to use [React Monaco Editor](https://github.com/react-monaco-editor/react-monaco-editor) with [Kotlin Language Server](https://github.com/fwcd/kotlin-language-server) via websocket connection.


https://github.com/yahorbarkouski/kotlin-monaco-language-server/assets/94449298/69e36a6d-f27b-4541-b4c9-f0e022a3c8c2


## Quick Start
```bash
npm i # install dependencies for both server and client
npm run start:server # run websocket server to communicate with Kotlin Language Server
npm run dev # run React app
```

## How it works
Websocket server creates a websocket connection between React app and Kotlin Language Server executable, converting json-rpc messages to websocket messages and vice versa.

### Notes
For simplicity, Kotlin Language Server executables has been git-tracked in this repository. You may also build and use the latest version from [here](https://github.com/fwcd/kotlin-language-server).
