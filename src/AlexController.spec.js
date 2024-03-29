/**
 * @file Alex is the main controller for the Rogue Scholar 
 * feature set of Myriad.
 */

const AlexController = require('./AlexController');
const DjehutiController = require('./DjehutiController');

const alex = AlexController();
const djehuti = DjehutiController();

it('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should append sources to an existing wxrd', () => {

  const bookSourceAlias = 'Test Book Title';
  const miscSourceAlias = 'A Misc Source';
  const logSourceAlias = '[current user] Personal Log';
  const notASourceAlias = 'This will be a regular wxrd';

  const bookSource = alex.createSource(bookSourceAlias, 'Book').payload;
  const miscSource = alex.createSource(miscSourceAlias).payload;
  const logSource = alex.createSource(logSourceAlias, 'Personal Log').payload;
  const notASource = djehuti.createWxrd(notASourceAlias).payload;
  const originalWxrd = djehuti.createWxrd('test wxrd').payload;

  const sources = [bookSource, miscSource, logSource];

  const opResAppend = alex.appendSources(originalWxrd, sources);
  expect(opResAppend).toBeDefined();
  expect(opResAppend.payloadType).toBe('Wxrd');

  const appendedWxrd = opResAppend.payload;
  expect(appendedWxrd.getWxrdType()).toBe(originalWxrd.getWxrdType());
  expect(appendedWxrd.getUuid()).not.toBe(originalWxrd.getUuid());
  expect(opResAppend.successful).toBe(true);
  expect(opResAppend.messages.length).toBe(0);

  //should sort the list alphabetically
  const uuids = [bookSource.getUuid(), miscSource.getUuid(), logSource.getUuid()];
  const sortedUuids = uuids.sort();
  const stringOutput = sortedUuids.join(', ');

  expect(appendedWxrd.metaData.get('wxrdSources')).toBe(stringOutput);

  //this one should cause the operation to fail (all wxrds but not all sources)
  sources.push(notASource);

  const opResAppendFailure = alex.appendSources(originalWxrd, sources);
  expect(opResAppendFailure).toBeDefined();
  expect(opResAppendFailure.payloadType).toBe('UnrecognizedSource');

  const appendedWxrdFailure = opResAppendFailure.payload;
  expect(appendedWxrdFailure.getWxrdType()).toBe(originalWxrd.getWxrdType());
  expect(appendedWxrdFailure.getUuid()).not.toBe(originalWxrd.getUuid());
  expect(opResAppendFailure.successful).toBe(false);
  expect(opResAppendFailure.messages.length).toBe(1);
  expect(opResAppendFailure.messages[0]).toBe(notASource.getUuid() + ' is a valid wxrd but is not a valid source!');

  //this one should cause the operation to fail differently (not all wxrds)
  sources.pop(notASource);
  sources.push(notASourceAlias);

  const opResAppendFailureTwo = alex.appendSources(originalWxrd, sources);
  expect(opResAppendFailureTwo).toBeDefined();
  expect(opResAppendFailureTwo.payloadType).toBe('UuidNotFound');

  const appendedWxrdFailureTwo = opResAppendFailureTwo.payload;
  expect(opResAppendFailureTwo.successful).toBe(false);
  expect(opResAppendFailureTwo.messages.length).toBe(1);
  expect(opResAppendFailureTwo.messages[0]).toBe('supplied source is not a valid wxrd, no uuid found');

});

it('should create sources', () => {

  const sourceAlias = '[current user] Personal Log'
  const opRes = alex.createSource(sourceAlias);
  expect(opRes).toBeDefined();
  expect(opRes.payloadType).toBe('Wxrd');

  expect(opRes.payload.getWxrdType()).toBe('Source');
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

  const createdSource = opRes.payload;
  expect(createdSource.metaData.get('alias')).toBe(sourceAlias);

});


it('should create typed sources if a source type is supplied', () => {

  const sourceAlias = '[current user] Personal Log';
  const sourceType = 'Personal Log';
  const opRes = alex.createSource(sourceAlias, sourceType);
  expect(opRes).toBeDefined();
  expect(opRes.payloadType).toBe('Wxrd');

  expect(opRes.payload.getWxrdType()).toBe('Source:Personal Log');
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

  const createdSource = opRes.payload;
  expect(createdSource.metaData.get('alias')).toBe(sourceAlias);

});