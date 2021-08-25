/**
 * @file A Book of Wxrds indexed by uuid.
 */

const Wxrd = require('./Wxrd');

const WxrdBook = (wxrdBookTitle) => {

  const self = Wxrd(wxrdBookTitle);

  self.metaData.set('wxrdType', 'WxrdBook');
  self.metaData.set('wxrdBookTitle', wxrdBookTitle);

  return self;

};

module.exports = WxrdBook;
