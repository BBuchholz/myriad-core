const WxrdBook = require('./WxrdBook');

test('should have at least one test', () => {
	expect(true).toBe(true);
});

test('should have a members metadata entry', () => {

	const newWxrdBook = WxrdBook("test");

	//console.log(newWxrdBook);

	expect(newWxrdBook.metaData.get("members")).toBeDefined();
});


////////////////////////////////////////////////////////////////
// THESE ARE FROM THE PLANNING DOC, UNCOMMENT AS WE IMPLEMENT //
////////////////////////////////////////////////////////////////

// test('should have getAllMembers() returning all members', () => {

// 	expect("WRITE THE TEST").toMatch("TEST HAS BEEN WRITTEN");
// });


// test('should test for inclusion of a member with hasMember(uuid)', () => {

// 	expect("WRITE THE TEST").toMatch("TEST HAS BEEN WRITTEN");
// });


// test('should throw error if addMember(member) is called on an object without a uuid', () => {

// 	expect("WRITE THE TEST").toMatch("TEST HAS BEEN WRITTEN");
// });
