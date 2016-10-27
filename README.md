# SimpleRESTApi

The mongo DB server is hosted via Modulus Mongo (modulus.io)

Follow the steps in the link below to setup a online db host
https://docs.mongodb.com/ecosystem/platforms/modulus/#modulus-account-setup

$ npm install -g modulus

$modulus login -> provide modulus credentials when prompted

NOTE: First Login -> Create DB -> Create User for DB ( modulus mongo user create "TestUser" )

Run $ npm install in the root directory to get and install all project dependencies locally.

$npm init - set main property to server.js 

Once all dependencies are setup, run $ node server.js to start server.
