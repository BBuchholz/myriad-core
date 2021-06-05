const Wxrd = require('./Wxrd');

test('should have at least one test', () => {
	expect(true).toBe(true);
});

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
    expect(regexForV4UuidString.test(uuidToTest)).toBe(true);

    // ADAPTED FROM REGEX SOURCE AT: https://regexr.com/3an7c 
    const secondRegexForV4UuidString = /\b(uuid:){0,1}\s*([a-f0-9\\-]*){1}\s*/g;

    
    expect(secondRegexForV4UuidString.test(uuidToTest)).toBe(true);
});