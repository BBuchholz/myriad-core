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
        const parsedJsonObj = JSON.parse(fileData.toString());

        console.log(parsedJsonObj);

        if('color' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteColor', parsedJsonObj.color.toString());
        }

        if('isPinned' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteIsPinned', parsedJsonObj.isPinned.toString());
        }

        if('isTrashed' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteIsTrashed', parsedJsonObj.isTrashed.toString());
        }

        if('isArchived' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteIsArchived', parsedJsonObj.isArchived.toString());
        }

        if('textContent' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteTextContent', parsedJsonObj.textContent.toString());
        }

        if('title' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteTitle', parsedJsonObj.title.toString());
        }

        if('userEditedTimestampUsec' in parsedJsonObj){
          newWxrd.metaData.set('keepNoteUserEditedTimestampUsec', parsedJsonObj.userEditedTimestampUsec.toString());
        }

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
