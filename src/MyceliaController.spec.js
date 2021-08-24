/**
 * @file MyceliaController handles breaking down and digesting of
 * metadata interspersed with wxrd content
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
  const opRes = mycelia.digestWxrd(testWxrd);
  expect(opRes).toBeDefined();
  // expect(opRes.payloadType).toBe('Wxrd');
  // expect(opRes.payload.getWxrdType()).toBe('digestedWxrd');
  // expect(opRes.successful).toBe(true);
  // expect(opRes.messages.length).toBe(0);

  // const digestedWxrd = opRes.payload;
  // expect(digestedWxrd.metaData.get('originalWxrd')).toBe(testWxrd.getUuid());
  // expect(digestedWxrd.metaData.get('alias')).toBe('Test String');
  // expect(digestedWxrd.metaData.get('tags')).toBe('testing, test');
  // expect(digestedWxrd.metaData.get('content')).toBe('Something I wrote down to rembember...');

  // Should parse wxrd.wxrdValue for all currently watched linePrefixes
  // Should return a new Wxrd with a new uuid, parsed values set to relevant metadata in the original wxrd, and “replacesWxrd” set to the uuid of the previous wxrd
  // Should return that Wxrd as the payload of an OperationResult

});

test('should register watch prefixes', () => {

  // mycelia.watchPrefix(linePrefix)
  // Should register prefixes as one to watch for
});
