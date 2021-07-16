/**
 * @file Defines a Wxrd.
 */
const withUniversalId = require('./withUniversalId');
const withTyping = require('./withTyping');
const withAliasing = require('./withAliasing');
const canLog = require('./canLog');
const withTransport = require('./withTransport');

const Wxrd = (initializationData) => {

  const self = {
    metaData: new Map(),
  };

  const newSelf = Object.assign(
    self,
    withUniversalId(self),
    withTyping(self),
    withAliasing(self),
    withTransport(self),
    canLog(self),
  );

  newSelf.initializeWxrdType('Wxrd');
  newSelf.initializeAliases();

  if (initializationData instanceof Map) {

    newSelf.metaData = Object.assign(
      initializationData,
      newSelf.metaData,
    );

  } else if (
    typeof initializationData === 'string'
    || initializationData instanceof String) {

    if (initializationData.startsWith('[[')
          && initializationData.endsWith(']]')) {

      newSelf.metaData = Object.assign(
        new Map(JSON.parse(initializationData)),
        newSelf.metaData,
      );

    } else {

      newSelf.initializeUuid();
      newSelf.initializeCreatedAt();
      newSelf.setAlias(newSelf.getUuid(), initializationData);

    }

  } else {

    throw new Error('unrecognized initialization data!');

  }

  return newSelf;

};

module.exports = Wxrd;
