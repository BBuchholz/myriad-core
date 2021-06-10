const Wxrd = require('./Wxrd');

test('should get and set metadata by key', () => {

	let newWxrd = new Wxrd();

	let valueToTest = newWxrd.getMetaDataByKey("testKey");

	expect(valueToTest).toBe(undefined);

	newWxrd.setMetaDataByKey("testKey", "testValue");

	valueToTest = newWxrd.getMetaDataByKey("testKey");

	expect(valueToTest).toBe("testValue");
});