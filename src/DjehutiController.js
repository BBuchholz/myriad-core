/**
 * @file Djehuti is the main controller for the Basecamp operations
 * of Myriad.
 */

const Wxrd = require('./Wxrd');
const WxrdBook = require('./WxrdBook');

const DjehutiController = () => {

  const self = {

    createWxrd: (multiLineStringInput) => {

      const lines = multiLineStringInput.split(/\r?\n/);
      
      console.log(lines);
      const newWxrd = Wxrd(multiLineStringInput);

      const operationResult = {
        payload: newWxrd,
        payloadType: 'Wxrd',
        successful: true,
        messages: [],
      };

      return operationResult;

    },

    createWxrdBook: (bookTitle) => (

      WxrdBook(bookTitle)

    ),
  };

  return self;

};

module.exports = DjehutiController;
