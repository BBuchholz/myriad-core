/**
 * @file Djehuti is the main controller for the Basecamp operations
 * of Myriad.
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
  expect(createdWxrd.metaData.get('wxrdValue')).toBe(multiLineInput);

});

test('should create wxrdbook from input', () => {

  const opRes = djehuti.createWxrdBook('some title');
  expect(opRes).toBeDefined();

  expect(opRes.payloadType).toBe('Wxrd');
  expect(opRes.payload.getWxrdType()).toBe('WxrdBook');
  expect(opRes.payload.metaData.get('wxrdBookTitle')).toBe('some title');
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

});

it('should export wxrd to JSON string format', () => {

  // djehuti.exportWxrdToJSON(wxrd)

  // Should return a JSON string ready to be written to a text document
  // Should return that JSON string as the payload of an OperationResult
  // Should roundtrip with importWxrdFromJSON(...)


});

it('should read data from a JSON string and convert it to a valid Wxrd', () => {

  // djehuti.importWxrdFromJSON(jsonString)

  // Should read from a JSON string (such as one taken from a file) and convert it to a valid Wxrd. 
  // Should return that Wxrd as the payload of an OperationResult
  // Should roundtrip with exportWxrdToJSON(...)

});