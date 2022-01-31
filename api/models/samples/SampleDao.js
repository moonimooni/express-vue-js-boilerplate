const { BaseDao } = require('../../utils');

// TODO: use query builder!
class SampleDao extends BaseDao {
  constructor() {
    super();
  }

  getSample() {
    return 'You said... => ';
  }
}

module.exports = { SampleDao };
