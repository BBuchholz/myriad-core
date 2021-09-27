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

      for (const [key, value] of wxrd.metaData){
        
        if(key != 'createdAt' && 
           key != 'uuid'){

          newWxrd.metaData.set(key, value);
        
        }
        
      }

      var uuids = [];
      var operationResult;

      for(const src of sources){
        
        if(src.getUuid){

          if(src.metaData.get('wxrdType') == 'Source' ||
             src.metaData.get('wxrdType').startsWith('Source:')){

            uuids.push(src.getUuid());  
          
          } else {

            operationResult = {
              payload: src,
              payloadType: 'UnrecognizedSource',
              successful: false,
              messages: [
                src.getUuid() + ' is a valid wxrd but is not a valid source!'
              ],
            };   

            return  operationResult; 
          
          }
          
        } else {

          operationResult = {
            payload: src,
            payloadType: 'UuidNotFound',
            successful: false,
            messages: [
              'supplied source is not a valid wxrd, no uuid found'
            ],
          };    
        
          return operationResult;
        }
        
      }

      const sortedUuids = uuids.sort();
      const stringOutput = sortedUuids.join(', ');

      newWxrd.metaData.set('wxrdSources', stringOutput);

      operationResult = {
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
