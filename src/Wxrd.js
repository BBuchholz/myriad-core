const withUniversalId = require('./withUniversalId');
const withTyping = require('./withTyping');
const canLog = require('./canLog');

const Wxrd = defaultAlias => {

	const self = {
		metaData: new Map()
	};

	self.metaData.set("defaultAlias", defaultAlias);
	//self.metaData.set("wxrdType", "Wxrd");

	const newSelf = Object.assign(
						self, 
						withUniversalId(self),
						withTyping(self),
						canLog(self)
					);

	newSelf.initializeWxrdType("Wxrd");

	return newSelf;
};

module.exports = Wxrd;