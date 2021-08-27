/**
 * @file Perdurabo is the main controller for the Every Act Is A Magickal
 * Act feature set of Myriad.
 */

const DjehutiController = require('./DjehutiController');
const PerduraboController = require('./PerduraboController');

const djehuti = DjehutiController();
const perdurabo = PerduraboController();

test('should have at least one test', () => {

  expect(true).toBe(true);

});

it('should extract a wxrd template from an existing wxrd', () => {

  const opResCreate = djehuti.createWxrd('test wxrd');
  expect(opResCreate).toBeDefined();
  expect(opResCreate.payloadType).toBe('Wxrd');

  const createdWxrd = opResCreate.payload;

  createdWxrd.metaData.set('test key', 'test value');

  expect(createdWxrd.getWxrdType()).toBe('Wxrd');
  expect(opResCreate.successful).toBe(true);
  expect(opResCreate.messages.length).toBe(0);

  expect(createdWxrd.metaData.get('wxrdValue')).toBe('test wxrd');

  const opResExtract = perdurabo.extractTemplate(createdWxrd);
  expect(opResExtract).toBeDefined();
  expect(opResExtract.payloadType).toBe('Wxrd');

  const extractedTemplate = opResExtract.payload;

  expect(extractedTemplate.getWxrdType()).toBe('WxrdTemplate');
  expect(opResExtract.successful).toBe(true);
  expect(opResExtract.messages.length).toBe(0);

  const expectedTemplateWxrdValue = 'template from: {' + createdWxrd.getUuid() + '}';
  const actualTemplateWxrdValue = extractedTemplate.metaData.get('wxrdValue');

  expect(expectedTemplateWxrdValue).toBe(actualTemplateWxrdValue);
  
  const createdCreatedAtValue = createdWxrd.metaData.get('createdAt');
  const createdUuidValue = createdWxrd.getUuid();

  expect(extractedTemplate.getUuid()).not.toBe(createdUuidValue);
  expect(extractedTemplate.getCreatedAt()).not.toBe(createdCreatedAtValue);
  expect(extractedTemplate.metaData.get('test key')).toBe(createdWxrd.metaData.get('test key'));


});