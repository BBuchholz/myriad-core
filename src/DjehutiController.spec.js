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

it('should export and import wxrd to and from JSON string format', () => {

  const opResCreate = djehuti.createWxrd('test wxrd');
  const testWxrd = opResCreate.payload;
  expect(testWxrd).toBeDefined();
  
  const opResExport = djehuti.exportWxrdToJson(testWxrd);

  expect(opResExport.payloadType).toBe('jsonString');
  
  const jsonString = opResExport.payload;

  // console.log(jsonString);

  const opResImport = djehuti.importWxrdFromJson(jsonString);

  expect(opResImport.payloadType).toBe('Wxrd');

  const importedWxrd = opResImport.payload;

  expect(importedWxrd.getUuid()).toBe(testWxrd.getUuid());

  // test again by roundtripping back to a string (should be identical)
  const opResExportAgain = djehuti.exportWxrdToJson(importedWxrd);

  const jsonStringTwo = opResExportAgain.payload;

  expect(jsonStringTwo).toBe(jsonString);
});
