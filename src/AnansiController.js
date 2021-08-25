/**
 * @file Anansi is the main controller for the It's All Connected 
 * feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const AnansiController = () => {

  const self = {

    something: (pathToFile) => {

      const newWxrd = djehuti.createWxrd("this should be the keep note");

      const operationResult = {
        payload: newWxrd,
        payloadType: 'Wxrd',
        successful: true,
        messages: [],
      };

      return operationResult;

    },

  };

  return self;

};

module.exports = AnansiController;
