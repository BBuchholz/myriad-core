const { Wxrd, WxrdBook, XmlTransport } = require('./index');

test('should have Wxrd defined in index', () => {

	const newWxrd = Wxrd("test");
	

	//console.log(newWxrd);

	expect(newWxrd.getAlias(newWxrd.getUuid())).toMatch("test");
});


test('should have WxrdBook defined in index', () => {

	const newWxrdBook = WxrdBook("testBook");
	

	//console.log(newWxrdBook);

	expect(newWxrdBook.getAlias(newWxrdBook.getUuid())).toMatch("test");
});


test('should have XmlTransport defined in index', () => {

	const newWxrd = Wxrd("test");
	const xmlTransporter = XmlTransport();
	const xmlString = xmlTransporter.exportWxrd(newWxrd);

	expect(xmlString).toMatch('test');
});