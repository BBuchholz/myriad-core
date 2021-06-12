const withUniversalId = require('./withUniversalId');
const canLog = require('./canLog');

const Wxrd = defaultAlias => {

	const self = {
		metaData: new Map()
	};

	self.metaData.set("defaultAlias", defaultAlias);

	return Object.assign(
				self, 
				withUniversalId(self),
				canLog(self)
			);
};

module.exports = Wxrd;