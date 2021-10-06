# myriad-core


[![GitHub issues](https://img.shields.io/github/issues/BBuchholz/myriad-core)](https://github.com/BBuchholz/myriad-core/issues)
[![GitHub license](https://img.shields.io/github/license/BBuchholz/myriad-core)](https://github.com/BBuchholz/myriad-core/blob/main/LICENSE)
![npm (scoped)](https://img.shields.io/npm/v/@entomdt/myriad-core)


# Basecamp
## OperationResult
- payload
- payloadType
- successful
- messages

## Wxrd
- Wxrd(initData) - Stores all metadata in a map called metaData using strings for both keys and values
Assigns the mixins withUniversalId, withTyping, withAliasing, withTransport, canLog, withMembers
Sets 'wxrdType', to 'Wxrd'
if initData is a Map uses Object.assign to copy map as is into metadata
Support for passing Json string in is deprecated
Passing in non JSON string data will call initializeUuid(), initializeCreatedAt(), setAlias(newSelf.getUuid(), initializationData);
Sets 'wxrdValue' to initData

## Mixin: withUniversalId
- getUuid()
- initializeUuid()

## Mixin: withTyping
- getWxrdType: () 
- initializeWxrdType(wxrdTypeValue) 

## Mixin: withAliasing
- getAlias(uuidToGet)
- initializeAliases()
- setAlias(uuidKey, aliasValue)

## Mixin: withTransport
- import(metaDataAsMap)
- export() 

## Mixin: canLog
- getCreatedAt()
- initializeCreatedAt()

## Mixin: withMembers
- getMember(uuidToGet)
- initializeMembers() 
- addMember(member) 
- hasMember(member)
- getAllMembers() 

## WxrdBook
- WxrdBook(title) 
Sets both 'defaultAlias' (by calling Wxrd(title) and 'wxrdBookTitle' to supplied value for title parameter
Sets 'wxrdType' to 'WxrdBook'

## XmlTransport 
- exportWxrd(wxrdToExport) 
- importWxrd(wxrdAsXmlString)

## DjehutiController
- importWxrdFromJson(jsonStringToImport)
- exportWxrdToJson(wxrdToExport)
- createWxrdBook(bookTitle)
- createWxrd(multiLineStringInput)

## MyceliaController
- digestWxrd(wxrdToDigest, linePrefixes) 

# It's All Connected
## AnansiController
- link(firstWxrd, secondWxrd)

# Deepest Of Minds
## ChappieController
- readFromKeepTakeoutFile(pathToFile)

# Rogue Scholar
## AlexController
- createSource(sourceAlias, optionalSourceType) 
- appendSources(wxrd, sources)

# Every Act Is A Magickal Act
## PerduraboController
- extractTemplate(wxrdToExtractFrom)Copies all keys and values to a template ignoring the keys 'createdAt', 'uuid', 'wxrdType', and 'wxrdValue'

# Would You Like To Play A Game
## KnechtController
- getScenarios()
- deal(currentDeck, numberToDeal)
- parseSuit(cardValue)
- parseRank(cardValue, suitKey)
- suitKeyToName(suitKey)
- rankValueToName(rankValue)
- getDynamicScenarios()
- cardToDescription(cardValue)
- createScenario(fourCardKeyArray)
- getHardCodedScenarios()
- getHDeltaFromSuit(suit)
- getMDeltaFromSuit(suit{