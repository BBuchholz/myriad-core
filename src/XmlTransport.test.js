const XmlTransport = require('./XmlTransport');
const Wxrd = require('./Wxrd');

test('should export a Wxrd as xml', () => {
	
	//TODO: i think we are gonna go with elementtree (already added to npm)
	// NB: with a good test suite (developed here), we can migrate to 
	// something else in the future if need be, and get the basic
	// functionality going with something familiar

	const xmlTransporter = XmlTransport();
	const testWxrd = Wxrd("test");
	//console.log(testWxrd);
	const xmlString = xmlTransporter.exportWxrd(testWxrd);

	expect(xmlString).toEqual('<wxrd xmlns="http://www.w3.org/2005/Atom"><metaData key="defaultAlias">test</metaData></wxrd>');
});

// test('should import from xml', () => {
	
// 	expect("FINISH THE EXPORT TEST FIRST").toEqual("NOW WRITE THIS ONE");
// 	// const mapOne = new Map();
// 	// mapOne.set("defaultAlias", "first");
// 	// const firstWxrd = Wxrd(mapOne);
// 	// const wxrdString = firstWxrd.exportXml();

// 	// expect(wxrdString).toEqual('[["defaultAlias","first"]]');
// });

//TODO: add tests for different types (eg. WxrdBook, AliasLists) cuz each will have special cases (like looking for nested members and aliases)


//TODO: should throw error if an unexpected root element is encountered (should only accept recognized root elements, <wxrd>, <wxrdBook>, etc.) this will allow us to know when to look for members and aliases