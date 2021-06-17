const withTransport = self => ({

	import: (metaData) => {
		
	},

	export: () => {
		
		return JSON.stringify(Array.from(self.metaData.entries()));
	}

});




module.exports = withTransport;