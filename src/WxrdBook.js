/**
 * @file A Book of Wxrds indexed by uuid.
 */

const withMembers = require('./withMembers');
const Wxrd = require('./Wxrd');

const WxrdBook = (defaultAlias) => {

  const self = Wxrd(defaultAlias);

  const newSelf = Object.assign(
    self,
    withMembers(self),
  );

  newSelf.initializeMembers();
  newSelf.metaData.set('wxrdType', 'WxrdBook');

  return newSelf;

};

module.exports = WxrdBook;
