/**
 * @file Anansi is the main controller for the It's All Connected 
 * feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const AnansiController = () => {

  const self = {

    link: (firstWxrd, secondWxrd) => {

      const defaultAlias = "wxrdLink: {" + 
                           firstWxrd.getUuid() + "} <=> {" + 
                           secondWxrd.getUuid() + "}" ;
      const opResNewWxrd = djehuti.createWxrd(defaultAlias);
      const newWxrd = opResNewWxrd.payload;
      newWxrd.metaData.set('wxrdType', 'WxrdLink');
      newWxrd.metaData.set('firstWxrdUuid', firstWxrd.getUuid());
      newWxrd.metaData.set('secondWxrdUuid', secondWxrd.getUuid());

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
