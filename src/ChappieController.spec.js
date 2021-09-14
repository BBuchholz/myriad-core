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

  const pathToFile = './testData/testData.json';

  const opRes = chappie.readFromKeepTakeoutFile(pathToFile);

  expect(opRes).toBeDefined();
  expect(opRes.payloadType).toBe('Wxrd');
  expect(opRes.payload.getWxrdType()).toBe('KeepNoteTakeout');
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

  const keepNoteTakeoutWxrd = opRes.payload;
  expect(keepNoteTakeoutWxrd.metaData.get('expectedKeyHere')).toBe('expectedValueHere');

  // use this link: https://nodejs.dev/learn/reading-files-with-nodejs
});