const { v4: uuidv4 } = require('uuid');

class Wxrd {

	constructor(){
		this.metaData = new Map();
	}

	getUuid(){
		return uuidv4();
	}

	getCreatedAt(){
		return "";
	}

	getMetaDataByKey(keyToFind){
		return "";
	}

	setMetaDataByKey(metaDataKey, metaDataValue){

	}
}

module.exports = Wxrd;