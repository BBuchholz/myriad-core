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

    exportWxrdToJson: (wxrdToExport) => {

      // source for functions: https://stackoverflow.com/a/56150320
      function replacer(key, value) {
        if(value instanceof Map) {
          return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
          };
        } else {
          return value;
        }
      }

      const jsonString = JSON.stringify(wxrdToExport, replacer);

      const operationResult = {
        payload: jsonString,
        payloadType: 'jsonString',
        successful: true,
        messages: [],
      };

      return operationResult;  
    },

    importWxrdFromJson: (jsonStringToImport) => {

      // source for functions: https://stackoverflow.com/a/56150320
      function reviver(key, value) {
        if(typeof value === 'object' && value !== null) {
          if (value.dataType === 'Map') {
            return new Map(value.value);
          }
        }
        return value;
      }

      const importedJson = JSON.parse(jsonStringToImport, reviver);

      const importedWxrd = Wxrd(importedJson);

      const operationResult = {
        payload: importedWxrd,
        payloadType: 'Wxrd',
        successful: true,
        messages: [],
      };

      return operationResult;  
    }

  };

  return self;

};

module.exports = DjehutiController;
