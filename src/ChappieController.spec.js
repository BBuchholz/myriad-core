/**
 * @file Chappie is the main controller for the Deepest Of Minds 
 * feature set of Myriad.
 */

const ChappieController = require('./ChappieController');

const chappie = ChappieController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should read from keep takout file', () => {

  // chappie.readFromKeepTakeoutFile(pathToFile)
  // Should import from keep takeout file and create a Wxrd of type “keepNote”
  // Should return that Wxrd as the payload of an OperationResult

});