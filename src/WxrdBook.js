const withMembers = require('./withMembers');
const Wxrd = require('./Wxrd');

const WxrdBook = defaultAlias => {

	const self = Wxrd(defaultAlias);

	const newSelf = Object.assign(
						self, 
						withMembers(self)
					);

	newSelf.initializeMembers();

	return newSelf;
};

module.exports = WxrdBook;