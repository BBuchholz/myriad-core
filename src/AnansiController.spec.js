/**
 * @file Anansi is the main controller for the It's All Connected 
 * feature set of Myriad.
 */

const AnansiController = require('./AnansiController');
const DjehutiController = require('./DjehutiController');

const anansi = AnansiController();
const djehuti = DjehutiController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should create links between wxrds', () => {

  // Should produce a new wxrd with "wxrdType" value of "wxrdLink", "firstWxrd" value equal to firstWxrd uuid, and "secondWxrd" value set to secondWxrd uuid.
  // Should return that Wxrd as the payload of an OperationResult

  const opResFirstWxrd = djehuti.createWxrd("first wxrd");
  const opResSecondWxrd = djehuti.createWxrd("second wxrd");

  const firstWxrd = opResFirstWxrd.payload;
  const secondWxrd = opResSecondWxrd.payload;

  const opRes = anansi.link(firstWxrd, secondWxrd);
  expect(opRes).toBeDefined();
  expect(opRes.payloadType).toBe('Wxrd');
  expect(opRes.payload.getWxrdType()).toBe('WxrdLink');
  expect(opRes.payload.metaData.get('firstWxrdUuid', firstWxrd.getUuid()));
  expect(opRes.payload.metaData.get('secondWxrdUuid', secondWxrd.getUuid()));
  expect(opRes.successful).toBe(true);
  expect(opRes.messages.length).toBe(0);

});