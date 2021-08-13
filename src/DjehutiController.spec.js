/**
 * @file Handles all xml import and export capabilities.
 */

const djehuti = require('./DjehutiController');
const Wxrd = require('./Wxrd');

test('should have at least one test', () => {

  expect(true).toBe(true);
});

test('should create wxrd from multiline string input', ()=>{

  const opRes = djehuti.createWxrd("Some text");
  expect(opRes).toBeDefined();

  // from planning doc:
  // Should create a Wxrd as is currently done with 
  // “Wxrd(initializationData)” but parsing from 
  // stringInput as we originally intended (everything 
  // roundtrips to the parser, so when features are turned off
  // its just text, and when they get turned on, parts of that
  // text takes on special significance)
  
  // Should return that Wxrd as the payload of an OperationResult

});

test('should create wxrdbook from input', ()=>{

  const opRes = djehuti.createWxrdBook("some title", "some description");
  expect(opRes).toBeDefined();

  // Should return a new WxrdBook with the title and description set
  // Should return that WxrdBook as the payload of an OperationResult


});