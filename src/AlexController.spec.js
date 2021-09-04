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

  // Should return that Wxrd as the payload of an OperationResult
  
  // Should log errors to opResult and fail if “srcWxrd” wxrdType 
  // isn’t “source” or a derivative (eg. “source:book”, 
  // “source:movie”, “source:url”)

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