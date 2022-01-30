const { sampleController } = require('../controllers');

class SampleRoutes {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/sample', sampleController.getSample);
  }
}

module.exports = { SampleRoutes };
