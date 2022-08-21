const app = require("express")();
const https = require("https");
const fs = require("fs");
const PORT = process.env.PORT || 443; // HTTPS 는 443 포트를 사용합니다
const options = {
  key: fs.readFileSync(__dirname + "/인증서경로/domain_xxxxx.key.pem"),
  cert: fs.readFileSync(__dirname + "/인증서경로/domain_xxxxx.crt.pem"),
  ca: fs.readFileSync(__dirname + "/인증서경로/ca-chain-bundle.pem"),
};
// https 서버를 만들고 실행시킵니다
https.createServer(options, app).listen(PORT);

/* SSL option */
// production 모드에서는 option 이 truthy한 값이고
// development 모드에서는 option 이 falsy한 값입니다
const option =
  process.env.NODE_ENV === "production"
    ? {
        key: fs.readFileSync(
          __dirname +
            "/D:/개발/SSL인증서/ssl/publisher-v.site_20220821DD6C4.key.pem"
        ),
        cert: fs.readFileSync(
          __dirname +
            "/D:/개발/SSL인증서/ssl/publisher-v.site_20220821DD6C4.crt.pem"
        ),
        ca: fs.readFileSync(
          __dirname + "/D:/개발/SSL인증서/ssl/ca-chain-bundle.pem"
        ),
      }
    : undefined;

// production 모드에서는 https 서버를
// development 모드에서는 http 서버를 사용합니다
option
  ? https.createServer(option, app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    })
  : http.createServer(app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });

// HTTPS 서버
option
  ? https.createServer(option, app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    })
  : undefined;

// HTTPS 서버로 요청을 전달하여 자동으로 SSL 연결을 해주는 HTTP 서버
// SSL option 이 존재하지 않는 development 단계에서는 그냥 HTTP 서버만이 존재하게 됩니다.
option
  ? http
      .createServer(function (req, res) {
        res.writeHead(301, {
          Location: "https://" + req.headers["host"] + req.url,
        });
        res.end();
      })
      .listen(80)
  : http.createServer(app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
