/**
 * @file Handles all xml import and export capabilities.
 */

const DjehutiController = require('./DjehutiController');

const djehuti = DjehutiController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

test('should create wxrd from multiline string input', () => {

  const multiLineInput = `Something I wrote down to remember... 
  alias: Test String
  tags: testing, test`;

  const opRes = djehuti.createWxrd(multiLineInput);
  expect(opRes).toBeDefined();
  expect(opRes.payloadType).toBe('Wxrd');
  expect(opRes.payload.getWxrdType()).toBe('Wxrd');
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

  const createdWxrd = opRes.payload;
  expect(createdWxrd.metaData.get('alias')).toBe('Test String');
  expect(createdWxrd.metaData.get('tags')).toBe('testing, test');
  expect(createdWxrd.metaData.get('content')).toBe('Something I wrote down to rembember...');

});

test('should create wxrdbook from input', () => {

  const opRes = djehuti.createWxrdBook('some title');
  expect(opRes).toBeDefined();

  // Should return a new WxrdBook with the title and description set
  // Should return that WxrdBook as the payload of an OperationResult

});
