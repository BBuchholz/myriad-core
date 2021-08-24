/**
 * @file Perdurabo is the main controller for the Every Act Is A Magickal
 * Act feature set of Myriad.
 */

const PerduraboController = require('./PerduraboController');

const perdurabo = PerduraboController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should read from keep takout file', () => {

  // perdurabo.extractTemplate(wxrd)

  // Should return a Wxrd object with "wxrdType" set to "wxrdTemplate"
  // Should return that Wxrd as the payload of an OperationResult

});