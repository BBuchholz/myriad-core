/**
 * @file Encapsulates capabilities related to members.
 */

const MEMBERS_KEY = 'members';

const withMembers = (self) => ({

  getMember: (uuidToGet) => self.metaData.get(MEMBERS_KEY).get(uuidToGet),

  initializeMembers: () => {

    if (!self.members) {

      self.members = new Map();

    }

  },

  addMember: (member) => {

    if (!member.getUuid()) {

      throw Error('function getUuid() not defined for member');

    }

    self.members.set(member.getUuid(), member);

  },

  hasMember: (member) => self.members.has(member.getUuid()),

  getAllMembers: () => self.members,

});

module.exports = withMembers;
