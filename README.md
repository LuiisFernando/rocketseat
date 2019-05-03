# rocketseat
node course with typescript and sucrase

npm init -y 

npm install --save typescript sucrase

mkdir src

package.json:

"dev": nodemon src/server.ts
"build": "sucrase ./src -d ./dist --transforms typescript,imports"

npm install --save eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

./node_modules/.bin/eslint --init

then config .eslint.js

npm install --save prettier eslint-config-prettier eslint-plugin-prettier

on settings.json of vscode add the follow lines:
```javascript
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },

    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true },
        { "language": "javascriptreact", "autoFix": true }
    ]
```
