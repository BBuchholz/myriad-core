const et = require('elementtree');
const XML = et.XML;
const ElementTree = et.ElementTree;
const Element = et.Element;
const SubElement = et.SubElement;

const XmlTransport = () => {


	const self = {
		
		exportWxrd: (wxrdToExport) => {

			var root = Element('wxrd');
			root.set('xmlns', 'http://www.w3.org/2005/Atom');

			var defaultAliasEl = SubElement(root, 'metaData');
			defaultAliasEl.set('key', 'defaultAlias');
			defaultAliasEl.text = wxrdToExport.getAlias();

			var etree = new ElementTree(root);
			var xml = etree.write({'xml_declaration': false});
			return xml;
		}
	};
	

	return self;
}

module.exports = XmlTransport;