const { v4: uuidv4 } = require('uuid');
const UUID_KEY = "uuid";

const withUniversalId = self => ({

	getUuid: () => {
		return self.metaData.get(UUID_KEY);
	},

	initializeUuid: () => {

		if(!self.metaData.has(UUID_KEY)){

			self.metaData.set(UUID_KEY, uuidv4());
		}
	}

});




module.exports = withUniversalId;