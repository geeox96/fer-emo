const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressip = require('express-ip');
const requestIp = require('request-ip');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(expressip().getIpInfoMiddleware);

app.get('/', function (req, res) {
  const clientIp = requestIp.getClientIp(req); 
  const ipInfo = req.ipInfo;
  var message = `hum, ${clientIp}          ${ipInfo.city}, ${ipInfo.country}, ip: ${ipInfo.ip}`;
  res.send(message);
});

app.listen(process.env.PORT || 4000);