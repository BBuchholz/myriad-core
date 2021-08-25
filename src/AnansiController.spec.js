/**
 * @file Anansi is the main controller for the It's All Connected 
 * feature set of Myriad.
 */

const AnansiController = require('./AnansiController');

const anansi = AnansiController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should create links between wxrds', () => {

  // anansi.link(firstWxrd, secondWxrd)

  // Should produce a new wxrd with "wxrdType" value of "wxrdLink", "firstWxrd" value equal to firstWxrd uuid, and "secondWxrd" value set to secondWxrd uuid.
  // Should return that Wxrd as the payload of an OperationResult

});