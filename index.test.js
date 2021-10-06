const { 
	Wxrd, 
	WxrdBook, 
	XmlTransport, 
	PerduraboController, 
	ChappieController,
	AnansiController,
	MyceliaController,
	DjehutiController,
	AlexController,
	KnechtController 
} = require('./index');

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

it('should have DjehutiController defined in index', () => {

	const testController = DjehutiController();
	expect(testController).toBeDefined();
});

it('should have MyceliaController defined in index', () => {

	const testController = MyceliaController();
	expect(testController).toBeDefined();
});


it('should have AnansiController defined in index', () => {

	const testController = AnansiController();
	expect(testController).toBeDefined();
});	
	
it('should have ChappieController defined in index', () => {

	const testController = ChappieController();
	expect(testController).toBeDefined();
});	

it('should have AlexController defined in index', () => {

	const testController = AlexController();
	expect(testController).toBeDefined();
});	

it('should have PerduraboController defined in index', () => {

	const testController = PerduraboController();
	expect(testController).toBeDefined();
});	

it('should have KnechtController defined in index', () => {

	const testController = KnechtController();
	expect(testController).toBeDefined();
});	