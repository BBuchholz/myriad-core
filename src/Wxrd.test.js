const Wxrd = require('./Wxrd');

test('should have a map called metaData with defaultAlias set', () => {

	const newWxrd = Wxrd("test");

	expect(newWxrd.metaData.get("defaultAlias")).toMatch("test");
});


test('should get and set metadata by key', () => {

	const newWxrd = Wxrd("test");

	let valueToTest = newWxrd.metaData.get("testKey");

	expect(valueToTest).toBe(undefined);

	newWxrd.metaData.set("testKey", "testValue");

	valueToTest = newWxrd.metaData.get("testKey");

	expect(valueToTest).toBe("testValue");
});

test('should have a uuid', () => {
	
	const newWxrd = Wxrd("test");

	// console.log("before init : ");
	// console.log(newWxrd);

	newWxrd.initializeUuid();

	// console.log("after init : ");
	// console.log(newWxrd);

	expect(newWxrd.getUuid()).toBeDefined();

	const uuidToTest = newWxrd.getUuid();

	//NB: couldn't find a good regex so I have it checking multiple
	// this is just some prelim testing, and the uuid is library generated anyways
	// so for now this is "good enough" for me, if we run into a scenario in
	// the future that require more strictly rigid criteria we can
	// better vet and possibly update these tests


	// ADAPTED FROM REGEX SOURCE AT: https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
    const regexForV4UuidString = /\b[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/igm;

    //console.log("uuid to test: " + uuidToTest);

    expect(uuidToTest).toMatch(regexForV4UuidString);

    // ADAPTED FROM REGEX SOURCE AT: https://regexr.com/3an7c 
    const secondRegexForV4UuidString = /\b(uuid:){0,1}\s*([a-f0-9\\-]*){1}\s*/g;

    
    expect(uuidToTest).toMatch(secondRegexForV4UuidString);
});

test('uuid should be stored as metadata', () => {

	const newWxrd = Wxrd("test");
	newWxrd.initializeUuid();

	const uuid = newWxrd.getUuid();

	expect(newWxrd.metaData.get("uuid")).toBeDefined();
	expect(newWxrd.metaData.get("uuid")).toMatch(uuid);
})

test('should have a createdAt timestamp', () => {

	const newWxrd = Wxrd("test");
	newWxrd.initializeUuid();
	newWxrd.initializeCreatedAt();

	expect(newWxrd.getCreatedAt()).toBeDefined();

    const regexForIso8601DateString = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;

	const timestampToTest = newWxrd.getCreatedAt();

	//console.log("timestamp to test: " + timestampToTest);

	expect(timestampToTest).toMatch(regexForIso8601DateString);
});


test('createdAt should be stored as metadata', () => {

	const newWxrd = Wxrd("test");
	newWxrd.initializeUuid();
	newWxrd.initializeCreatedAt();

	const createdAt = newWxrd.getCreatedAt();

	expect(newWxrd.metaData.get("createdAt")).toBeDefined();
	expect(newWxrd.metaData.get("createdAt")).toMatch(createdAt);
})

test('should have a key for wxrdType that defaults to Wxrd', () => {

	const newWxrd = Wxrd("test");
	expect(newWxrd.metaData.get("wxrdType")).toBeDefined();
	expect(newWxrd.metaData.get("wxrdType")).toMatch("Wxrd");
});