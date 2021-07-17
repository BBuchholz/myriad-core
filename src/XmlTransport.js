/**
 * @file Handles all xml import and export functionality.
 */

const et = require('elementtree');

const { ElementTree } = et;
const { Element } = et;
const { SubElement } = et;
const Wxrd = require('./Wxrd');

const XmlTransport = () => {

  const self = {

    exportWxrd: (wxrdToExport) => {

      const root = Element('wxrd');
      root.set('xmlns', 'http://www.w3.org/2005/Atom');

      wxrdToExport.metaData.forEach((value, key) => {

        const metaDataEl = SubElement(root, 'metaData');
        metaDataEl.set('key', key);
        metaDataEl.text = value;

      });

      wxrdToExport.aliases.forEach((value, key) => {

        const aliasEl = SubElement(root, 'alias');
        aliasEl.set('key', key);
        aliasEl.text = value;

      });

      const etree = new ElementTree(root);
      const xml = etree.write({ xml_declaration: false });
      return xml;

    },

    importWxrd: (wxrdAsXmlString) => {

      const etree = et.parse(wxrdAsXmlString);

      const metaDataEls = etree.findall('./metaData');
      const metaDataMap = new Map();
      let i;

      for (i = 0; i < metaDataEls.length; i += 1) {

        const metaDataEl = metaDataEls[i];

        const thisKey = metaDataEl.get('key');
        const thisValue = metaDataEl.text;
        metaDataMap.set(thisKey, thisValue);

      }

      const importedWxrd = Wxrd(metaDataMap);

      const aliasEls = etree.findall('./alias');
      // console.log(aliasEls);
      for (i = 0; i < aliasEls.length; i += 1) {

        const aliasEl = aliasEls[i];
        const thisKey = aliasEl.get('key');
        const thisValue = aliasEl.text;
        importedWxrd.setAlias(thisKey, thisValue);

      }

      return importedWxrd;

    },
  };

  return self;

};

module.exports = XmlTransport;
