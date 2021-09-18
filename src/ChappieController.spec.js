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

  expect(opResSuccess).toBeDefined();
  expect(opResSuccess.payloadType).toBe('Wxrd');
  expect(opResSuccess.payload.getWxrdType()).toBe('KeepNoteTakeout');
  expect(opResSuccess.successful).toBe(true);
  expect(opResSuccess.messages.length).toBe(0);

  const expectedRawData = 
    '{' + 
      '"color":"DEFAULT",' + 
      '"isTrashed":false,' + 
      '"isPinned":false,' + 
      '"isArchived":true,' + 
      '"textContent":"",' + 
      '"title":"",' + 
      '"userEditedTimestampUsec":1552395275747000' + 
    '}';


  const keepNoteTakeoutWxrd = opResSuccess.payload;
  expect(keepNoteTakeoutWxrd.metaData.get('rawFileData')).toBe(expectedRawData);
  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteColor')).toBe('DEFAULT');

  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteIsTrashed')).toBe('false'); 
  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteIsPinned')).toBe('false'); 
  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteIsArchived')).toBe('true'); 
  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteTextContent')).toBe(''); 
  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteTitle')).toBe(''); 
  expect(keepNoteTakeoutWxrd.metaData.get('keepNoteUserEditedTimestampUsec')).toBe('155239527574700'); 
});