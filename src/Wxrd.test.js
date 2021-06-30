const Wxrd = require('./Wxrd');

test('should have a map called metaData with defaultAlias set', () => {

	const newWxrd = Wxrd("test");
	

	//console.log(newWxrd);

	expect(newWxrd.getAlias(newWxrd.getUuid())).toMatch("test");
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
	

	const uuid = newWxrd.getUuid();

	expect(newWxrd.metaData.get("uuid")).toBeDefined();
	expect(newWxrd.metaData.get("uuid")).toMatch(uuid);
})

test('should have a createdAt timestamp', () => {

	const newWxrd = Wxrd("test");

	expect(newWxrd.getCreatedAt()).toBeDefined();

    const regexForIso8601DateString = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;

	const timestampToTest = newWxrd.getCreatedAt();

	//console.log("timestamp to test: " + timestampToTest);

	expect(timestampToTest).toMatch(regexForIso8601DateString);
});


test('createdAt should be stored as metadata', () => {

	const newWxrd = Wxrd("test");

	const createdAt = newWxrd.getCreatedAt();

	expect(newWxrd.metaData.get("createdAt")).toBeDefined();
	expect(newWxrd.metaData.get("createdAt")).toMatch(createdAt);
})

test('should have a key for wxrdType that defaults to Wxrd', () => {

	const newWxrd = Wxrd("test");
	expect(newWxrd.metaData.get("wxrdType")).toBeDefined();
	expect(newWxrd.metaData.get("wxrdType")).toMatch("Wxrd");
});

test('should have equal metadata for repeated map initialization data', () => {
	// (ie. shouldn't matter if object assign has different 
	// values for methods and such, only check metadata fields
	// for equality comparison --
	// -- we want to load from and store to strings/text...)

	const mapOne = new Map();
	const mapTwo = new Map();
	mapOne.set("defaultAlias", "first");
	mapTwo.set("defaultAlias", "first");
	const firstWxrd = Wxrd(mapOne);
	const secondWxrdlookingForMatch = Wxrd(mapTwo);

	expect(firstWxrd.metaData).toEqual(secondWxrdlookingForMatch.metaData);
});

test('should accept a map as a single parameter', () => {
	// ie. should modify current defaultAlias implementation
	// everywhere it exists)

	const mapOne = new Map();
	mapOne.set("defaultAlias", "first");

	const mapTwo = new Map(JSON.parse('[["defaultAlias","first"]]'));
	
	const firstWxrd = Wxrd(mapOne);
	const secondWxrdlookingForMatch = Wxrd(mapTwo);

	expect(firstWxrd.metaData).toEqual(secondWxrdlookingForMatch.metaData);

});

test('should assume a single string as creation parameter to be the defaultAlias as is handled now', () => {
	// ie. should load normally

	const newWxrd = Wxrd("test");
	expect(newWxrd.getAlias()).toMatch("test");
});

test('should export wxrdString containing only metadata values in a parseable format', () => {
	// ie. don't attempt to serialize function maps from object.assign

	const mapOne = new Map();
	mapOne.set("defaultAlias", "first");
	const firstWxrd = Wxrd(mapOne);
	const wxrdString = firstWxrd.export();

	expect(wxrdString).toEqual('[["defaultAlias","first"]]');
});

test('should detect and parse wxrdStrings as initialization data', () => {

	const wxrdString = '[["defaultAlias","first"]]';

	const mapOne = new Map();
	mapOne.set("defaultAlias", "first");
	const firstWxrd = Wxrd(mapOne);

	const secondWxrdlookingForMatch = Wxrd(wxrdString);

	expect(firstWxrd.metaData).toEqual(secondWxrdlookingForMatch.metaData);
});


test('should export as xml', () => {
	
	const mapOne = new Map();
	mapOne.set("defaultAlias", "first");
	const firstWxrd = Wxrd(mapOne);
	const wxrdString = firstWxrd.exportXml();

	expect(wxrdString).toEqual('<wxrd><metaData key="defaultAlias">first</metadata></wxrd>');
});

test('should import from xml', () => {
	
	expect("WRITE THE TEST").toEqual("NOT WRITTEN");
	// const mapOne = new Map();
	// mapOne.set("defaultAlias", "first");
	// const firstWxrd = Wxrd(mapOne);
	// const wxrdString = firstWxrd.exportXml();

	// expect(wxrdString).toEqual('[["defaultAlias","first"]]');
});