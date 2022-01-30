class SampleService {
  constructor(sampleDao) {
    this.sampleDao = sampleDao;
  }

  getSampleWithMessage(message) {
    try {
      return this.sampleDao.getSample() + message;
    } catch (err) {
      // TODO: handle error and use logger
      console.error(err);
    }
  }
}

module.exports = {
  SampleService,
};
