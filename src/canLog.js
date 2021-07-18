/**
 * @file Encapsulates all capabilities related to logging,
 * such as timestamping.
 */

const CREATED_AT_KEY = 'createdAt';

const canLog = (self) => ({

  getCreatedAt: () => self.metaData.get(CREATED_AT_KEY),

  initializeCreatedAt: () => {

    if (!self.metaData.has(CREATED_AT_KEY)) {

      const currentTime = new Date();
      self.metaData.set(CREATED_AT_KEY, currentTime.toISOString());

    }

  },

});

module.exports = canLog;
