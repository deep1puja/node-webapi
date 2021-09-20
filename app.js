var express = require("express");
var properties = require("./config/properties");
var db = require("./config/database");
var app = express();
const https = require('https');
var log = require("morgan")("dev");
var bodyParser = require("body-parser");
var router = express.Router();
const cors = require("cors");
const boom = require("express-boom");
var fileUpload = require("express-fileupload");
var _ = require("lodash");
var path = require('path');
const axios = require('axios');
const fs = require('fs');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
// app.use(axios);
app.use(
  fileUpload({
    createParentPath:true,
    limits: {
      fileSize: 50 * 1024 * 1024,
    },
  })
);

app.use("/api/static",express.static(__dirname + '/public'))
// app.use();
app.use(cors());
app.use(boom());

db();
app.use(log);
const options = {
  key: fs.readFileSync('yaari.com.key'),
  cert: fs.readFileSync('yaarissl-bundle.crt')
  // key: fs.readFileSync('/etc/nginx/yaari.com.key'),
  // cert: fs.readFileSync('/etc/nginx/yaarissl-bundle.crt')
  

  
  
};
const httpsServer = https.createServer({
  key: fs.readFileSync('yaari.com.key'),
  cert: fs.readFileSync('yaarissl-bundle.crt')
}, app);

httpsServer.listen(4400, () => {
  console.log('HTTPS Server running on port 443');
}); 

 
app.listen(properties.port, (req, res) => {
    console.log(`Server is running on ${properties.port} port.`);
});

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
    );
    next();
});

app.use("/api", router);

require("./app/routes/faqs.route")(router);
require("./app/routes/user.route")(router);
require("./app/routes/blog.route")(router);
require("./app/routes/contactUs.route")(router);
require("./app/routes/rolesRoute")(router);
require("./app/routes/investor.route")(router);
require("./app/routes/home.route")(router);
require("./app/routes/files.route")(router);
require("./app/routes/privacyAndTerms.route")(router);
 
require("./app/routes/eventTracker.route")(router);

//eventTracker.route

