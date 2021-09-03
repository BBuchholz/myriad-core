/**
 * @file MyceliaController handles breaking down and digesting of
 * metadata interspersed with wxrd content.
 */

const MyceliaController = require('./MyceliaController');
const DjehutiController = require('./DjehutiController');

const mycelia = MyceliaController();
const djehuti = DjehutiController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

test('should extract metadata interspersed with string content', () => {

  const multiLineInput = `Something I wrote down to remember... 
  alias: Test String
  tags: testing, test`;

  const testWxrd = djehuti.createWxrd(multiLineInput).payload;

  // console.log(testWxrd);

  const linePrefixes = ['alias', 'tags'];

  const opRes = mycelia.digestWxrd(testWxrd, linePrefixes);
  expect(opRes).toBeDefined();
  expect(opRes.payloadType).toBe('Wxrd');
  expect(opRes.payload.getWxrdType()).toBe(testWxrd.getWxrdType());
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

  const digestedWxrd = opRes.payload;
  expect(digestedWxrd.getUuid()).not.toBe(testWxrd.getUuid());
  expect(digestedWxrd.metaData.get('digestedWxrd')).toBe(testWxrd.getUuid());
  expect(digestedWxrd.metaData.get('alias')).toBe('Test String');
  expect(digestedWxrd.metaData.get('tags')).toBe('testing, test');
  expect(digestedWxrd.metaData.get('digestedContent')).toBe('Something I wrote down to remember...');

});
