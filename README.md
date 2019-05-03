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