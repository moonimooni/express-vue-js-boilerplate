const { Router } = require('express');
const { SampleRoutes } = require('./SampleRoutes');

const router = Router();
new SampleRoutes(router);

module.exports = { router };
