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


  // alex.appendSources(wxrd, srcWxrds)

  // Returns new Wxrd that is a copy of the supplied "wxrd" 
  // parameter with the metadata value “wxrdSource” set to the 
  // uuid of one or more Wxrds supplied as the “srcWxrds” parameter. 
  // Also, a metadata value for "replacesWxrd" set to the uuid of 
  // the previous Wxrd (Wxrds should be versioned by uuid)

  // Should log errors to opResult and fail if “srcWxrd” wxrdType 
  // isn’t “source” or a derivative (eg. “source:book”, 
  // “source:movie”, “source:url”)

  const bookSourceAlias = 'Test Book Title';
  const miscSourceAlias = 'A Misc Source';
  const logSourceAlias = '[current user] Personal Log';
  const notASourceAlias = 'This will be a regular wxrd';

  const bookSource = alex.createSource(bookSourceAlias, 'Source:Book').payload;
  const miscSource = alex.createSource(miscSourceAlias).payload;
  const logSource = alex.createSource(logSourceAlias, 'Source:Log').payload;
  const notASource = djehuti.createWxrd(notASourceAlias).payload;
  const wxrd = djehuti.createWxrd('test wxrd').payload;

  const sources = [bookSource, miscSource, logSource];

  const opResAppend = alex.appendSources(wxrd, sources);
  expect(opResAppend).toBeDefined();
  expect(opResAppend.payloadType).toBe('Wxrd');

  expect(opResAppend.payload.getWxrdType()).toBe('Source');
  expect(opResAppend.successful).toBe(true);
  expect(opResAppend.messages.length).toBe(0);

  const createdSource = opResAppend.payload;
  expect(createdSource.metaData.get('alias')).toBe(bookSourceAlias);


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