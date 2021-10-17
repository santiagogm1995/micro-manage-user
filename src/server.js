const express = require('express');
const aConfig = require('./config/config.json');
const app = express();
let config = null;

if (process.env.ENV == undefined) {
  config= aConfig.find((elemt) => elemt.env == 'dev');
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.prop.port, () => {
  console.log(`Example app listening at http://localhost:${config.prop.port}`);
});
