const { BaseDao } = require('../../utils');

class SampleDao extends BaseDao {
  constructor() {
    super();
  }

  getSample() {
    return 'You said... => ';
  }
}

module.exports = { SampleDao };
