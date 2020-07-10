const express = require("express");
const cors = require("cors");
const requestIp = require('request-ip');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  const clientIp = requestIp.getClientIp(req); 
  res.send(clientIp);
});

app.listen(process.env.PORT || 4000);