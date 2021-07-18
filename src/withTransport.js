/**
 * @file Encapsulates string based,
 * non-xml, import and export capabilities.
 */

const withTransport = (self) => ({

  import: (metaDataAsMap) => {

    metaDataAsMap.forEach((value, key) => {

      self.metaData[key] = value;

    });

  },

  export: () => JSON.stringify(Array.from(self.metaData.entries())),

});

module.exports = withTransport;
