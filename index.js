const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressip = require('express-ip');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(expressip().getIpInfoMiddleware);

app.get('/', function (req, res) {
  const ipInfo = req.ipInfo;
  var message = `${ipInfo.city}, ${ipInfo.country}, FULL: ${ipInfo}`;
  res.send(message);
});

app.listen(process.env.PORT || 4000);