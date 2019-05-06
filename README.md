# rocketseat
node course with typescript and sucrase

```
npm init -y 
npm install --save typescript sucrase
```

mkdir src

On file package.json add the follow lines:
```
"dev": nodemon src/server.ts
"build": "sucrase ./src -d ./dist --transforms typescript,imports"
```

Install the packages
```
npm install --save eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

then run
```
./node_modules/.bin/eslint --init
```

Install the other packages

```
npm install --save prettier eslint-config-prettier eslint-plugin-prettier
```

then config .eslint.js

```
    parser: '@typescript-eslint/parser'
    plugins: ['@typescript-eslint'],
    'extends': [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
    ]
```


On settings.json of vscode add the follow lines:
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

the structure of project is done.

now install the project dependencies.

```
npm install --save express cors mongoose
npm install --save @types/express @types/cors @types/mongoose -D
```