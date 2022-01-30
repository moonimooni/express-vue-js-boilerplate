const express = require('express');
const config = require('../config');
const { router } = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', router);
app.listen(config.api.port, () => {
  console.log(`server on ${config.api.port}`);
});
