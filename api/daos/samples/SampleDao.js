const { BaseDao } = require('../../utils');

class SampleDao extends BaseDao {
  constructor() {}

  getSample() {
    return 'this is a sample';
  }
}

module.exports = { SampleDao };
