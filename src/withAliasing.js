/**
 * @file Encapsulates capabilities related to aliases.
 *
 * NB: ALIASES ARE A MAP ON PURPOSE
 * EACH WXRD, REGARDLESS OF WXRDTYPE, CAN ACTUALLY
 * HOLD/IMPLY/EMPLOY DIFFERENT
 * ALIASES FOR OTHER WXRDS, REGARDLESS OF WXRDTYPE,
 * THIS IS BY DESIGN!!!
 */

const withAliasing = (self) => ({

  getAlias: (uuidToGet) => {

    let uuidToReturnAliasFor = uuidToGet;

    if (!uuidToGet) {

      uuidToReturnAliasFor = self.getUuid();

    }

    return self.aliases.get(uuidToReturnAliasFor);

  },

  initializeAliases: () => {

    if (!self.aliases) {

      self.aliases = new Map();

    }

  },

  setAlias: (uuidKey, aliasValue) => {

    self.aliases.set(uuidKey, aliasValue);

  },

});

module.exports = withAliasing;
