const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  const ip = req.connection.remoteAddress;
  console.log(ip)
  res.send(`Seu ip é ${ip}`);
});

app.listen(process.env.PORT || 4000);