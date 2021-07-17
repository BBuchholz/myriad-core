const withTransport = (self) => ({

  import: (metaData) => {

  },

  export: () => JSON.stringify(Array.from(self.metaData.entries())),

});

module.exports = withTransport;
