const ALIASES_KEY = "aliases";

//NB: ALIASES ARE A MAP ON PURPOSE
//    EACH WXRD, REGARDLESS OF WXRDTYPE, CAN ACTUALLY 
//    HOLD/IMPLY/EMPLOY DIFFERENT
//    ALIASES FOR OTHER WXRDS, REGARDLESS OF WXRDTYPE,
//	  THIS IS BY DESIGN!!!
const withAliasing = self => ({

	getAlias: (uuidToGet) => {

		if(!uuidToGet){
			uuidToGet = self.getUuid();
		}
		
		return self.metaData.get(ALIASES_KEY).get(uuidToGet);
	},

	initializeAliases: () => {

		if(!self.metaData.has(ALIASES_KEY)){

			self.metaData.set(ALIASES_KEY, new Map());
		}
	},

	setAlias: (uuidKey, aliasValue) => {

		self.metaData.get(ALIASES_KEY).set(uuidKey, aliasValue);
	}


});




module.exports = withAliasing;