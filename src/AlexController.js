/**
 * @file Alex is the main controller for the Rogue Scholar 
 * feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const AlexController = () => {

  const self = {

    createSource: (sourceAlias) => {

      const opResCreate = djehuti.createWxrd("this should be the keep note");

      const newWxrd = opResCreate.payload;

      newWxrd.metaData.set('wxrdType', 'Source');
      newWxrd.metaData.set('alias', sourceAlias);

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

module.exports = AlexController;
