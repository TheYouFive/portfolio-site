const https = require("https");
const express = require("express");
const fs = require("fs");

const app = express();

const options = {
  key: fs.readFileSync(
    "/node_modules/express/keys/publisher-v.site_20220821DD6C4.key.pem"
  ),
  cert: fs.readFileSync(
    "/node_modules/express/keys/publisher-v.site_20220821DD6C4.crt.pem"
  ),
  ca: fs.readFileSync("/node_modules/express/keys/ca-chain-bundle.pem"),
};

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log("HTTPS server listening on port " + port);
});
