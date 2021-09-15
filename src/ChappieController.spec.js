/**
 * @file Chappie is the main controller for the Deepest Of Minds 
 * feature set of Myriad.
 */

const ChappieController = require('./ChappieController');

const chappie = ChappieController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should read from keep takeout file', () => {

  const pathToNonExistantFile = './testData/testData.json';

  const opResFail = chappie.readFromKeepTakeoutFile(pathToNonExistantFile);

  expect(opResFail).toBeDefined();
  expect(opResFail.payloadType).toBe('OpResErrorWxrd');
  expect(opResFail.payload.getWxrdType()).toBe('KeepNoteTakeout');
  expect(opResFail.successful).toBe(false);
  expect(opResFail.messages.length).toBe(1);

  expect(opResFail.messages[0].startsWith('Error:')).toBe(true);


  const pathToExistantFile = './testData/2020-08-17T19_33_04.260-05_00.json';

  const opResSuccess = chappie.readFromKeepTakeoutFile(pathToExistantFile);

  console.log(opResSuccess);
  expect(opResSuccess).toBeDefined();
  expect(opResSuccess.payloadType).toBe('Wxrd');
  expect(opResSuccess.payload.getWxrdType()).toBe('KeepNoteTakeout');
  expect(opResSuccess.successful).toBe(true);
  expect(opResSuccess.messages.length).toBe(0);

  const keepNoteTakeoutWxrd = opResSuccess.payload;
  expect(keepNoteTakeoutWxrd.metaData.get('rawFileData')).toBe('expectedValueHere');

});