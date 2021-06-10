const Wxrd = require('./Wxrd');

test('should have a uuid', () => {
	let newWxrd = new Wxrd();

	expect(newWxrd.getUuid()).toBeDefined();

	const uuidToTest = newWxrd.getUuid();

	//NB: couldn't find a good regex so I have it checking multiple
	// this is just some prelim testing, and the uuid is library generated anyways
	// so for now this is "good enough" for me, if we run into a scenario in
	// the future that require more strictly rigid criteria we can
	// better vet and possibly update these tests


	// ADAPTED FROM REGEX SOURCE AT: https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
    const regexForV4UuidString = /\b[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/igm;

    console.log("uuid to test: " + uuidToTest);

    expect(uuidToTest).toMatch(regexForV4UuidString);

    // ADAPTED FROM REGEX SOURCE AT: https://regexr.com/3an7c 
    const secondRegexForV4UuidString = /\b(uuid:){0,1}\s*([a-f0-9\\-]*){1}\s*/g;

    
    expect(uuidToTest).toMatch(secondRegexForV4UuidString);
});

test('should have a createdAt timestamp', () => {

	let newWxrd = new Wxrd();
	expect(newWxrd.getCreatedAt()).toBeDefined();

    const regexForIso8601DateString = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;

	const timestampToTest = newWxrd.getCreatedAt();

	console.log("timestamp to test: " + timestampToTest);
	expect(timestampToTest).toMatch(regexForIso8601DateString);
});

test('should get and set metadata by key', () => {

	let newWxrd = new Wxrd();

	let valueToTest = newWxrd.getMetaDataByKey("testKey");

	expect(valueToTest).toBe(undefined);

	newWxrd.setMetaDataByKey("testKey", "testValue");

	valueToTest = newWxrd.getMetaDataByKey("testKey");

	expect(valueToTest).toBe("testValue");
});