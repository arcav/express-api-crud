# express-api-crud
A basic  CRUD REST-API with Express,MongoDB and Babel
<h2> npm run dev</h2> for development
<h2> npm run build</h2> for transpilate in the dist folder
<h2> npm start</h2> for start dist folder


#  scripts: 
    "build": "babel src --out-dir dist",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.js --exec babel-node"

# dependencies: 
    "@babel/polyfill": "^7.8.3",
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mongodb": "^3.5.2",
    "morgan": "^1.9.1"
 
#  devDependencies: 
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "core-js": "^2.6.11",
    "nodemon": "^2.0.2"
    
    
