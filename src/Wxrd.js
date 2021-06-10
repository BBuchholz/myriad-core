const { v4: uuidv4 } = require('uuid');

class Wxrd {

	constructor(){
		this.metaData = new Map();
	}

	getUuid(){
		return uuidv4();
	}

	getCreatedAt(){
		const currentTime = new Date();
		return currentTime.toISOString();
	}

	getMetaDataByKey(keyToFind){
		return this.metaData[keyToFind];
	}

	setMetaDataByKey(metaDataKey, metaDataValue){
		this.metaData[metaDataKey] = metaDataValue;
	}
}

module.exports = Wxrd;