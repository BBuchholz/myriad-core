/**
 * @file A Book of Wxrds indexed by uuid.
 */

const Wxrd = require('./Wxrd');

const WxrdBook = (defaultAlias) => {

  const self = Wxrd(defaultAlias);

  self.metaData.set('wxrdType', 'WxrdBook');

  return self;

};

module.exports = WxrdBook;
