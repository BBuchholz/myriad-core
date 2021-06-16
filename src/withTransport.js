const withTransport = self => ({

	importMetaData: (metaData) => {
		
	},

	exportMetaData: () => {

		return self.metaData;
	}

});




module.exports = withTransport;