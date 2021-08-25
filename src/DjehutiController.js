/**
 * @file Djehuti is the main controller for the Basecamp operations
 * of Myriad.
 */

const Wxrd = require('./Wxrd');
const WxrdBook = require('./WxrdBook');

const DjehutiController = () => {

  const self = {

    createWxrd: (multiLineStringInput) => {

      const newWxrd = Wxrd(multiLineStringInput);

      const operationResult = {
        payload: newWxrd,
        payloadType: 'Wxrd',
        successful: true,
        messages: [],
      };

      return operationResult;

    },

    createWxrdBook: (bookTitle) => {

      const newWxrd = WxrdBook(bookTitle);

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

module.exports = DjehutiController;
