/**
 * @file MyceliaController handles breaking down and digesting of
 * metadata interspersed with wxrd content
 */

const Wxrd = require('./Wxrd');
const DjehutiController = require('./DjehutiController');
const djehuti = DjehutiController();

const MyceliaController = () => {

  const self = {

    linePrefixes: [],

    digestWxrd: (wxrdToDigest, linePrefixes) => {

      const opResNewWxrd = djehuti.createWxrd("digesting " + wxrdToDigest.getUuid() + "... this should get replaced");
      const newWxrd = opResNewWxrd.payload;

      for (let [key, value] of wxrdToDigest.metaData){
        
        if(key != 'createdAt' && 
           key != 'uuid'){

          newWxrd.metaData.set(key, value);
        
        }
        
      }

      const multiLineStringInput = wxrdToDigest.metaData.get('wxrdValue');

      const lines = multiLineStringInput.split(/\r?\n/);
      
      const contentLines = [];

      for(const line of lines){
        
        const trimmedLine = line.trim();
        var prefixFound = false;
        
        for(const linePrefix of linePrefixes){
          
          const prefixToTrim = linePrefix + ':';

          if(trimmedLine.startsWith(prefixToTrim)){
            
            prefixFound = true;

            const trimmedValue = trimmedLine.replace(prefixToTrim, '').trim();

            newWxrd.metaData.set(linePrefix, trimmedValue);
          }
        }  

        if(!prefixFound){
          contentLines.push(trimmedLine);
        }
      }


      var digestedContent = '';

      for(const contentLine of contentLines){

        if(digestedContent.length > 0){
          digestedContent += '\n';
        }

        digestedContent += contentLine;
      }

      newWxrd.metaData.set('digestedContent', digestedContent);

      newWxrd.metaData.set('digestedWxrd', wxrdToDigest.getUuid());

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

module.exports = MyceliaController;
