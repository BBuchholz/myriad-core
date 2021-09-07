/**
 * @file Alex is the main controller for the Rogue Scholar 
 * feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const AlexController = () => {

  const self = {

    createSource: (sourceAlias, optionalSourceType) => {

      const opResCreate = djehuti.createWxrd("this should be the keep note");

      const newWxrd = opResCreate.payload;

      newWxrd.metaData.set('alias', sourceAlias);

      if(optionalSourceType){
      
        newWxrd.metaData.set('wxrdType', 'Source:' + optionalSourceType);
      
      }else{

        newWxrd.metaData.set('wxrdType', 'Source');  
      }

      const operationResult = {
        payload: newWxrd,
        payloadType: 'Wxrd',
        successful: true,
        messages: [],
      };

      return operationResult;

    },

    appendSources: (wxrd, sources) => {

      const opResNewWxrd = djehuti.createWxrd("appending sources to " + wxrd.getUuid() + "... this should get replaced");
      const newWxrd = opResNewWxrd.payload;

      for (let [key, value] of wxrd.metaData){
        
        if(key != 'createdAt' && 
           key != 'uuid'){

          newWxrd.metaData.set(key, value);
        
        }
        
      }

      var uuids = [];
      for(let src of sources){
        console.log(src);
        uuids.push(src.getUuid());
      }
      const sortedUuids = uuids.sort();
      const stringOutput = sortedUuids.join(', ');

      newWxrd.metaData.set('wxrdSources', stringOutput);

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
