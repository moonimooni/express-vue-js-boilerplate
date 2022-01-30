const { httpResponse } = require('../../utils/');

class SampleController {
  constructor(sampleService) {
    this.sampleService = sampleService;
  }

  getSample(req, res) {
    const { message } = req.params;
    const sample = this.sampleService.getSampleWithMessage(message);
    return httpResponse.ok({ res, data: { sample } });
  }
}

module.exports = { SampleController };
