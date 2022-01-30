const { sampleDao } = require('../../daos');
const { SampleService } = require('./SampleService');

const sampleService = new SampleService({ sampleDao });

module.exports = { sampleService };
