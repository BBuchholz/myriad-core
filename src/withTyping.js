const WXRD_TYPE_KEY = "wxrdType";

const withTyping = self => ({

	getWxrdType: () => {
		return self.metaData.get(WXRD_TYPE_KEY);
	},

	initializeWxrdType: (wxrdTypeValue) => {

		if(!self.metaData.has(WXRD_TYPE_KEY)){

			self.metaData.set(WXRD_TYPE_KEY, wxrdTypeValue);
		}
	}

});




module.exports = withTyping;