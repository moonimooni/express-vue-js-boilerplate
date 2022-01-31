const { BaseDao } = require('../../../utils');
const { SampleDao } = require('../../samples');

describe('SampleDao', () => {
  const sampleDao = new SampleDao();

  test('sampleDao instance', () => {
    expect(sampleDao).toBeInstanceOf(SampleDao);
    expect(sampleDao).toBeInstanceOf(BaseDao);
  });
});
