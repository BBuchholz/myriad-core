/**
 * @file Contains all the tests related to the WxrdBook entity.
 */

const WxrdBook = require('./WxrdBook');
const Wxrd = require('./Wxrd');

test('should have at least one test', () => {

  expect(true).toBe(true);

});

test('should have a members map', () => {

  const newWxrdBook = WxrdBook('test');

  // console.log(newWxrdBook);

  expect(newWxrdBook.members).toBeDefined();

});

test('should have getAllMembers() returning all members', () => {

  const newWxrdBook = WxrdBook('testBook');

  expect(newWxrdBook.getAllMembers()).toBeDefined();

  // console.log(newWxrdBook);

  expect(newWxrdBook.getAllMembers().size).toBe(0);

  const newWxrd = Wxrd('test');

  newWxrdBook.addMember(newWxrd);

  // console.log(newWxrdBook);

  expect(newWxrdBook.getAllMembers().size).toBe(1);

});

test('should test for inclusion of a member with hasMember(uuid)', () => {

  const newWxrdBook = WxrdBook('testBook');
  const newWxrd = Wxrd('test');

  // console.log(newWxrd);
  // console.log(newWxrdBook);

  expect(newWxrdBook.hasMember(newWxrd)).toBe(false);

  newWxrdBook.addMember(newWxrd);

  // console.log(newWxrd);
  // console.log(newWxrdBook);

  expect(newWxrdBook.hasMember(newWxrd)).toBe(true);

});

test('should throw error if addMember(member) is called on an object without a uuid', () => {

  /**
   * Adds an member with an empty uuid string.
   */
  function addEmptyUuid() {

    const newWxrdBook = WxrdBook('testBook');
    const newWxrd = Wxrd('test');

    newWxrd.metaData.set('uuid', '');

    newWxrdBook.addMember(newWxrd);

  }

  expect(addEmptyUuid).toThrowError('function getUuid() not defined for member');

});
