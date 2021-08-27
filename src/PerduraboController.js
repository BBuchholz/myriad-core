/**
 * @file Perdurabo is the main controller for the Every Act Is A Magickal
 * Act feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const PerduraboController = () => {

  const self = {

    extractTemplate: (wxrdToExtractFrom) => {

      
      const defaultAlias = "template from: {" + 
                           wxrdToExtractFrom.getUuid() + "}";
      const opResNewWxrd = djehuti.createWxrd(defaultAlias);
      const newWxrd = opResNewWxrd.payload;
      newWxrd.metaData.set('wxrdType', 'WxrdTemplate');

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

module.exports = PerduraboController;
