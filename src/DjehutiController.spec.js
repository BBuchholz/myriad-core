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

  // from planning doc:
  // Should create a Wxrd as is currently done with
  // “Wxrd(initializationData)” but parsing from
  // stringInput as we originally intended (everything
  // roundtrips to the parser, so when features are turned off
  // its just text, and when they get turned on, parts of that
  // text takes on special significance)

  // Should return that Wxrd as the payload of an OperationResult

});

test('should create wxrdbook from input', () => {

  const opRes = djehuti.createWxrdBook('some title');
  expect(opRes).toBeDefined();

  // Should return a new WxrdBook with the title and description set
  // Should return that WxrdBook as the payload of an OperationResult

});
