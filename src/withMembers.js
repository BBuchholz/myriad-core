const MEMBERS_KEY = "members";

const withMembers = self => ({

	getMember: (uuidToGet) => {
		return self.metaData.get(MEMBERS_KEY).get(uuidToGet);
	},

	initializeMembers: () => {

		if(!self.members){

			self.members = new Map();
		}
	},

	addMember: (member) => {

		if(!member.getUuid()){
			throw("function getUuid() not defined for member");
		}

		self.members.set(member.getUuid(), member);
	},

	hasMember: (member) => {

		return self.members.has(member.getUuid());
	},

	getAllMembers: () => {

		return self.members;
	}


});




module.exports = withMembers;