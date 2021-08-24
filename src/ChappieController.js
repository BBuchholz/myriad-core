/**
 * @file Chappie is the main controller for the Deepest Of Minds 
 * feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const ChappieController = () => {

  const self = {

    readFromKeepTakeoutFile: (pathToFile) => {

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

module.exports = ChappieController;
