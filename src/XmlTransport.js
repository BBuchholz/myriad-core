const et = require('elementtree');
const XML = et.XML;
const ElementTree = et.ElementTree;
const Element = et.Element;
const SubElement = et.SubElement;
const Wxrd = require('./Wxrd');

const XmlTransport = () => {


	const self = {
		
		exportWxrd: (wxrdToExport) => {

			var root = Element('wxrd');
			root.set('xmlns', 'http://www.w3.org/2005/Atom');

			wxrdToExport.metaData.forEach((value, key) => {
				var metaDataEl = SubElement(root, 'metaData');
				metaDataEl.set('key', key);
				metaDataEl.text = value;
			});

			wxrdToExport.aliases.forEach((value, key) => {
				var aliasEl = SubElement(root, 'alias');
				aliasEl.set('key', key);
				aliasEl.text = value;
			});

			var etree = new ElementTree(root);
			var xml = etree.write({'xml_declaration': false});
			return xml;
		},

		importWxrd: (wxrdAsXmlString) => {

			const etree = et.parse(wxrdAsXmlString);
			
			const metaDataEls = etree.findall('./metaData');
			const metaDataMap = new Map();

			for(var i = 0; i < metaDataEls.length; i++){

				var metaDataEl = metaDataEls[i];

				const thisKey = metaDataEl.get('key');
				const thisValue = metaDataEl.text;
				metaDataMap.set(thisKey, thisValue);
			}

			const importedWxrd = Wxrd(metaDataMap);

			const aliasEls = etree.findall('./alias');
			//console.log(aliasEls);
			for(var i = 0; i < aliasEls.length; i++){

				var aliasEl = aliasEls[i];
				const thisKey = aliasEl.get('key');
				const thisValue = aliasEl.text;
				importedWxrd.setAlias(thisKey, thisValue);
			}

			return importedWxrd;
		}
	};
	

	return self;
}

module.exports = XmlTransport;