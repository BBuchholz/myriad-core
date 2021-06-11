const { v4: uuidv4 } = require('uuid');
const UUID_KEY = "uuid";
const CREATED_AT_KEY = "createdAt";

class Wxrd {

	constructor(){
		const currentTime = new Date();
		this.metaData = new Map();
		this.setMetaDataByKey(UUID_KEY, uuidv4());
		this.setMetaDataByKey(CREATED_AT_KEY, currentTime.toISOString());
	}

	getUuid(){
		return this.getMetaDataByKey(UUID_KEY);
	}

	getCreatedAt(){
		return this.getMetaDataByKey(CREATED_AT_KEY);
	}

	getMetaDataByKey(keyToFind){
		return this.metaData[keyToFind];
	}

	setMetaDataByKey(metaDataKey, metaDataValue){
		this.metaData[metaDataKey] = metaDataValue;
	}
}

const withUniversalId = self => ({

	getUuid: () => {

	}
});

const withStringMap = self => ({
	
})



module.exports = Wxrd;