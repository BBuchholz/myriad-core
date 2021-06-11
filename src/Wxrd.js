const Wxrd = defaultAlias => {

	const self = {
		metaData: new Map()
	};

	self.metaData["defaultAlias"] = defaultAlias;

	const wxrdCapabilities = self => ({

		getMetaDataByKey: (keyToFind) => {
			return self.metaData[keyToFind];
		},

		setMetaDataByKey: (metaDataKey, metaDataValue) => {
			self.metaData[metaDataKey] = metaDataValue;
		},

		
	});

	return Object.assign(self, wxrdCapabilities(self));
};

module.exports = Wxrd;