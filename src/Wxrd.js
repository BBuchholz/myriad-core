const { v4: uuidv4 } = require('uuid');

class Wxrd {

	constructor(){
		this.metaData = new Map();
	}

	getUuid(){
		return uuidv4();
	}
}

module.exports = Wxrd;