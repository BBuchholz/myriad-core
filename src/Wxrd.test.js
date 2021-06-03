const Wxrd = require('./Wxrd');

test('should have at least one test', () => {
	expect(true).toBe(true);
});

test('should have a uuid', () => {
	let newWxrd = new Wxrd();

	expect(newWxrd.getUuid()).toBeDefined();

	const uuidToTest = newWxrd.getUuid();

	// REGEX SOURCE: https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
    const regexForV4UuidString = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

    expect(regexForV4UuidString.test(uuidToTest)).toBe(true);
});