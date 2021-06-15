const MEMBERS_KEY = "members";

const withMembers = self => ({

	getMember: (uuidToGet) => {
		return self.metaData.get(MEMBERS_KEY).get(uuidToGet);
	},

	initializeMembers: () => {

		if(!self.metaData.has(MEMBERS_KEY)){

			self.metaData.set(MEMBERS_KEY, new Map());
		}
	},

	addMember: (member) => {

		self.metaData.get(MEMBERS_KEY).set(member.getUuid(), member);
	},

	hasMember: (member) => {

		return self.metaData.get(MEMBERS_KEY).has(member.getUuid());
	}


});




module.exports = withMembers;