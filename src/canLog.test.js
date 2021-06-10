const Wxrd = require('./Wxrd');

test('should have a createdAt timestamp', () => {

	let newWxrd = new Wxrd();
	expect(newWxrd.getCreatedAt()).toBeDefined();

    const regexForIso8601DateString = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;

	const timestampToTest = newWxrd.getCreatedAt();

	console.log("timestamp to test: " + timestampToTest);
	expect(timestampToTest).toMatch(regexForIso8601DateString);
});

