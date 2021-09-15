/**
 * @file Chappie is the main controller for the Deepest Of Minds 
 * feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const fs = require('fs');
const djehuti = DjehutiController();

const ChappieController = () => {

  const self = {

    readFromKeepTakeoutFile: (pathToFile) => {

      const newWxrd = djehuti.createWxrd("this should be the keep note").payload;

      newWxrd.metaData.set('wxrdType', 'KeepNoteTakeout');

      var operationResult;

      // adapted from: https://nodejs.dev/learn/reading-files-with-nodejs

      try {
        
        const fileData = fs.readFileSync(pathToFile, 'utf-8');

        newWxrd.metaData.set('rawFileData', fileData);

        //parse json here

        operationResult = {
          payload: newWxrd,
          payloadType: 'Wxrd',
          successful: true,
          messages: [],
        };

      } catch (err) {

        operationResult = {
          payload: newWxrd,
          payloadType: 'OpResErrorWxrd',
          successful: false,
          messages: [
            'Error: ' + err
          ],
        };

      }


      return operationResult;

    },

  };

  return self;

};

module.exports = ChappieController;
