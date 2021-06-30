// const myriadCore  = require('./index');
// const Wxrd = myriadCore.Wxrd;

const { Wxrd, WxrdBook } = require('./index');

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