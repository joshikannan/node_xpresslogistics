npm init -y // starting command -> create a package.json for node project

{
"type": "module"
} // add this in package.json to use import (es module) instead of require (common js )

npm install express mongoose dotenv

mkdir src // create folder
cd src // navigate to folder / file

mkdir config controllers services repositories models routes middlewares utils validations constants // create folders
touch app.js // create file
cd .. // back to root file
touch server.js // create a file
touch .env // create a file

// database
// mongo atlas
// connect cluster (actual database server where mongo runs) => to connect, need to select connection ip address -> from where or which ip address database can be accessed // node (server) can access the db only in this ip

// once node is deployed, the deployed server ip must update to the atlas

// Controller Handles HTTP layer req → res Status codes, validation, routing

// Service Handles business logic DB operations, rules, validations
