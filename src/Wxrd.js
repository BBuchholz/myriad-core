const withUniversalId = require('./withUniversalId');
const withTyping = require('./withTyping');
const withAliasing = require('./withAliasing');
const canLog = require('./canLog');

const Wxrd = defaultAlias => {

	const self = {
		metaData: new Map()
	};

	const newSelf = Object.assign(
						self, 
						withUniversalId(self),
						withTyping(self),
						withAliasing(self),
						canLog(self)
					);

	newSelf.initializeWxrdType("Wxrd");
	newSelf.initializeUuid();
	newSelf.initializeCreatedAt();
	newSelf.initializeAliases();
	newSelf.setAlias(newSelf.getUuid(), defaultAlias);

	return newSelf;
};

module.exports = Wxrd;