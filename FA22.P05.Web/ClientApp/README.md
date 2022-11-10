## Description

This is a template made by [reecewbourgeois](https://github.com/reecewbourgeois)

## Setup (VS Code)

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
2. Install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension
3. Create a folder called `.vscode` in the root of your project
4. Create a file called `tasks.json` in the `.vscode` folder with the following code:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "start",
      "group": {
        "kind": "test",
        "isDefault": true
      },
      "isBackground": true, // This prevents the launch.json to wait for the completion of the task
      "problemMatcher": {
        "owner": "custom", // This is not needed but, required by the problemMatcher Object
        "pattern": {
          "regexp": "^$" // This is not needed but, required by the problemMatcher Object
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "Compiling...", // Signals the begin of the Task
          "endsPattern": "Compiled .*" // Signals that now the initialization of the task is complete
        }
      }
    }
  ]
}
```

5. Create a file called `launch.json` in the `.vscode` folder with the following code:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug in Edge",
      "type": "msedge", // I use Edge, but you can use whatever you want. Intellisense will show you the options.
      "request": "launch",
      "url": "http://localhost:3000", // create-react-app's default port 3000
      "webRoot": "${workspaceRoot}/src",
      "preLaunchTask": "npm: start" // Add prelaunch Task npm: start (defined in tasks.json)
    }
  ]
}
```

6. Create a file called `.env` in the root of your project with the following code:

```bash
BROWSER=none
```
**Note:** In the browser window that opens when you launch this task, I would recommend installing the `React Developer Tools` extension. This will allow you to inspect the React components in the browser more seamlessly. Also, you will need to manually kill the terminal that opens in VS Code when you want to stop debugging.

## How to Run

1. Run `npm i` to install dependencies
2. Run `npm start` to start the application
