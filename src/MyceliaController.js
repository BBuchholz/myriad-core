/**
 * @file MyceliaController handles breaking down and digesting of
 * metadata interspersed with wxrd content
 */

const Wxrd = require('./Wxrd');

const MyceliaController = () => {

  const self = {

    digestWxrd: (wxrdToDigest) => {

      const multiLineStringInput = wxrdToDigest.metaData.get('wxrdValue');

      const lines = multiLineStringInput.split(/\r?\n/);
      
      // console.log(lines);

      const newWxrd = Wxrd(wxrdToDigest.metaData);

      newWxrd.metaData.set('wxrdType', 'digestedWxrd');
      newWxrd.metaData.set('originalWxrd', wxrdToDigest.getUuid());

      const operationResult = {
        payload: newWxrd,
        payloadType: 'Wxrd',
        successful: true,
        messages: [],
      };

      return operationResult;

    },

    watchPrefix: (linePrefix) => {


    },

  };

  return self;

};

module.exports = MyceliaController;
