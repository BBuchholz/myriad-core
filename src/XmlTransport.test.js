const XmlTransport = require('./XmlTransport');
const Wxrd = require('./Wxrd');

test('should export a Wxrd as xml', () => {
	
	const xmlTransporter = XmlTransport();
	const testWxrd = Wxrd("test");
	//console.log(testWxrd);
	const xmlString = xmlTransporter.exportWxrd(testWxrd);
	const uuid = testWxrd.getUuid();
	const createdAt = testWxrd.getCreatedAt();
	const expectedString = 	'<wxrd xmlns="http://www.w3.org/2005/Atom">' +
								'<metaData key="wxrdType">Wxrd</metaData>' +
								'<metaData key="uuid">' + uuid + '</metaData>' +
								'<metaData key="createdAt">' + createdAt + '</metaData>' +
								'<alias key="' + uuid + '">test</alias>' +
							'</wxrd>';

	expect(xmlString).toEqual(expectedString);
});

test('should import from xml', () => {

	const testUuid = 'c1be2f19-e12c-4cc5-b880-dff2db8b07e7';	
	const testCreatedAt = '2021-07-03T16:08:35.134Z';
	const importString = '<wxrd xmlns="http://www.w3.org/2005/Atom">' +
							'<metaData key="wxrdType">Wxrd</metaData>' +
							'<metaData key="uuid">' + testUuid + '</metaData>' +
							'<metaData key="createdAt">' + testCreatedAt + '</metaData>' +
							'<alias key="' + testUuid + '">test</alias>' +
						 '</wxrd>';
	const testMap = new Map();
	testMap.set('wxrdType', 'Wxrd');
	testMap.set('uuid', testUuid);
	testMap.set('createdAt', testCreatedAt);
	const firstWxrd = Wxrd(testMap);
	firstWxrd.setAlias(testUuid, 'test');
	//console.log(firstWxrd);
	const xmlTransporter = XmlTransport();

	const secondWxrdlookingForMatch = xmlTransporter.importWxrd(importString);

	expect(firstWxrd.metaData).toEqual(secondWxrdlookingForMatch.metaData);
	expect(firstWxrd.aliases).toEqual(secondWxrdlookingForMatch.aliases);
});

//TODO: add tests for different types (eg. WxrdBook, AliasLists) cuz each will have special cases (like looking for nested members and aliases)


//TODO: should throw error if an unexpected root element is encountered (should only accept recognized root elements, <wxrd>, <wxrdBook>, etc.) this will allow us to know when to look for members and aliases