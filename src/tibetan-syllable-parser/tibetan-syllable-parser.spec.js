var testGroups = [];
testGroups.push({
  name: "Only one letter",
  tests: [
    { syllable: 'བ',  prefix: undefined, superscribed: undefined, root: 'བ', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "A1) There is a written vowel",
  tests: [
    { syllable: 'ཆོས', prefix: undefined, superscribed: undefined, root: 'ཆ', subscribed: undefined, vowel: 'ོ', suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མིན', prefix: undefined, superscribed: undefined, root: 'མ', subscribed: undefined, vowel: 'ི', suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དངོས', prefix: 'ད', superscribed: undefined, root: 'ང', subscribed: undefined, vowel: 'ོ', suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "A2) There is a superscribed or subscribed letter",
  tests: [
    { syllable: 'བྱང', prefix: undefined, superscribed: undefined, root: 'བ', subscribed: 'ྱ', vowel: undefined, suffix: 'ང', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བརྒལ', prefix: 'བ', superscribed: 'ར', root: 'ག', subscribed: undefined, vowel: undefined, suffix: 'ལ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འབྲལ', prefix: 'འ', superscribed: undefined, root: 'བ', subscribed: 'ྲ', vowel: undefined, suffix: 'ལ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'སྨད', prefix: undefined, superscribed: 'ས', root: 'མ', subscribed: undefined, vowel: undefined, suffix: 'ད', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "A3) There is a combination of vowel / superscribed / subscribed",
  tests: [
    { syllable: 'བྱིན', prefix: undefined, superscribed: undefined, root: 'བ', subscribed: 'ྱ', vowel: 'ི', suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བརྙེན', prefix: 'བ', superscribed: 'ར', root: 'ཉ', subscribed: undefined, vowel: 'ེ', suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རྒྱན', prefix: undefined, superscribed: 'ར', root: 'ག', subscribed: 'ྱ', vowel: undefined, suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བརྒྱད', prefix: 'བ', superscribed: 'ར', root: 'ག', subscribed: 'ྱ', vowel: undefined, suffix: 'ད', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B1) No vowel and only two letters",
  tests: [
    { syllable: 'དམ', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'མ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཅན', prefix: undefined, superscribed: undefined, root: 'ཅ', subscribed: undefined, vowel: undefined, suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དང', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ང', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དག', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དབ', prefix:  'ད', superscribed: undefined, root: 'བ', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B1 bonus) Cases with AO at the end",
  tests: [
    { syllable: 'མང', prefix: undefined, superscribed: undefined, root: 'མ', subscribed: undefined, vowel: undefined, suffix: 'ང', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མངའ', prefix: 'མ', superscribed: undefined, root: 'ང', subscribed: undefined, vowel: undefined, suffix: 'འ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དག', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དགའ', prefix: 'ད', superscribed: undefined, root: 'ག', subscribed: undefined, vowel: undefined, suffix: 'འ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B2) No vowel and four letters in a row",
  tests: [
    { syllable: 'གཤགས', prefix: 'ག', superscribed: undefined, root: 'ཤ', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'གདམས', prefix: 'ག', superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'མ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འབངས', prefix: 'འ', superscribed: undefined, root: 'བ', subscribed: undefined, vowel: undefined, suffix: 'ང', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འབབས', prefix: 'འ', superscribed: undefined, root: 'བ', subscribed: undefined, vowel: undefined, suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B3a) No vowel, three letters, the final is NOT SA",
  tests: [
    { syllable: 'དམན', prefix: 'ད', superscribed: undefined, root: 'མ', subscribed: undefined, vowel: undefined, suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བདག', prefix: 'བ', superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འཇམ', prefix: 'འ', superscribed: undefined, root: 'ཇ', subscribed: undefined, vowel: undefined, suffix: 'མ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དཔལ', prefix: 'ད', superscribed: undefined, root: 'པ', subscribed: undefined, vowel: undefined, suffix: 'ལ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B3b) No vowel, three letters, the final is     SA and the second letter is NOT GA NGA BA MA",
  tests: [
    { syllable: 'གནས', prefix: 'ག', superscribed: undefined, root: 'ན', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བདས', prefix: 'བ', superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འདས', prefix: 'འ', superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B3c) No vowel, three letters, the final is     SA and the second letter is     GA NGA BA MA",
  tests: [
    { syllable: 'ལགས', prefix: undefined, superscribed: undefined, root: 'ལ', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཐབས', prefix: undefined, superscribed: undefined, root: 'ཐ', subscribed: undefined, vowel: undefined, suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ལངས', prefix: undefined, superscribed: undefined, root: 'ལ', subscribed: undefined, vowel: undefined, suffix: 'ང', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "B3d) No vowel, three letters, exceptions",
  tests: [
    { syllable: 'དགས', prefix: 'ད', superscribed: undefined, root: 'ག', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དྭགས', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'དམས', prefix: 'ད', superscribed: undefined, root: 'མ', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འགས', prefix: 'འ', superscribed: undefined, root: 'ག', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མངའ', prefix: 'མ', superscribed: undefined, root: 'ང', subscribed: undefined, vowel: undefined, suffix: 'འ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མངས', prefix: 'མ', superscribed: undefined, root: 'ང', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Repeated letters",
  tests: [
    { syllable: 'གཤགས', prefix: 'ག', superscribed: undefined, root: 'ཤ', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འགགས', prefix: 'འ', superscribed: undefined, root: 'ག', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བབེ', prefix: undefined, superscribed: undefined, root: 'བ', subscribed: undefined, vowel: 'ེ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འབེབས', prefix: 'འ', superscribed: undefined, root: 'བ', subscribed: undefined, vowel: 'ེ', suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'སྲས', prefix: undefined, superscribed: undefined, root: 'ས', subscribed: 'ྲ', vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "AOs and As",
  tests: [
    { syllable: 'འ', prefix: undefined, superscribed: undefined, root: 'འ', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འི', prefix: undefined, superscribed: undefined, root: 'འ', subscribed: undefined, vowel: 'ི', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འུ', prefix: undefined, superscribed: undefined, root: 'འ', subscribed: undefined, vowel: 'ུ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འམ', prefix: undefined, superscribed: undefined, root: 'འ', subscribed: undefined, vowel: undefined, suffix: 'མ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Dreldra A kiku I",
  tests: [
    { syllable: 'མའི', prefix: undefined, superscribed: undefined, root: 'མ', subscribed: undefined, vowel: undefined, suffix: 'འི', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མཁའི', prefix: 'མ', superscribed: undefined, root: 'ཁ', subscribed: undefined, vowel: undefined, suffix: 'འི', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Ending o",
  tests: [
    { syllable: 'པེའོ', prefix: undefined, superscribed: undefined, root: 'པ', subscribed: undefined, vowel: 'ེ', suffix: 'འོ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བགའོ', prefix: 'བ', superscribed: undefined, root: 'ག', subscribed: undefined, vowel: undefined, suffix: 'འོ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "And/or particle 'ang",
  tests: [
    { syllable: 'པའང', prefix: undefined, superscribed: undefined, root: 'པ', subscribed: undefined, vowel: undefined, suffix: 'འང', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Concessive particle 'am",
  tests: [
    { syllable: 'པའམ', prefix: undefined, superscribed: undefined, root: 'པ', subscribed: undefined, vowel: undefined, suffix: 'འམ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Ending u",
  tests: [
    { syllable: 'བེའུ', prefix: undefined, superscribed: undefined, root: 'བ', subscribed: undefined, vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མིའུ', prefix: undefined, superscribed: undefined, root: 'མ', subscribed: undefined, vowel: 'ི', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཀུའུ', prefix: undefined, superscribed: undefined, root: 'ཀ', subscribed: undefined, vowel: 'ུ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཀྲུའུ', prefix: undefined, superscribed: undefined, root: 'ཀ', subscribed: 'ྲ', vowel: 'ུ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཕྱུའུ', prefix: undefined, superscribed: undefined, root: 'ཕ', subscribed: 'ྱ', vowel: 'ུ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ནེའུ', prefix: undefined, superscribed: undefined, root: 'ན', subscribed: undefined, vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རྡེའུ', prefix: undefined, superscribed: 'ར', root: 'ད', subscribed: undefined, vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མདེའུ', prefix: 'མ', superscribed: undefined, root: 'ད', subscribed: undefined, vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དྲེའུ', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: 'ྲ', vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མཐེའུ', prefix: 'མ', superscribed: undefined, root: 'ཐ', subscribed: undefined, vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'སྒྱེའུ', prefix: undefined, superscribed: 'ས', root: 'ག', subscribed: 'ྱ', vowel: 'ེ', suffix: 'འུ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Wasur",
  tests: [
    { syllable: 'དྭགས', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'དྭངས་', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: undefined, vowel: undefined, suffix: 'ང', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'དྲྭཱྂངས་', prefix: undefined, superscribed: undefined, root: 'ད', subscribed: 'ྲ', vowel: undefined, suffix: 'ང', secondSuffix: 'ས', achung: 'ཱ', anusvara: 'ྂ', wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'ཁྭ', prefix: undefined, superscribed: undefined, root: 'ཁ', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'ཁྭོ', prefix: undefined, superscribed: undefined, root: 'ཁ', subscribed: undefined, vowel: 'ོ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'ཁྭས', prefix: undefined, superscribed: undefined, root: 'ཁ', subscribed: undefined, vowel: undefined, suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'ཁྭོས', prefix: undefined, superscribed: undefined, root: 'ཁ', subscribed: undefined, vowel: 'ོ', suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'གྲྭ', prefix: undefined, superscribed: undefined, root: 'ག', subscribed: 'ྲ', vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'གྲྭོ', prefix: undefined, superscribed: undefined, root: 'ག', subscribed: 'ྲ', vowel: 'ོ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'གྲྭོས', prefix: undefined, superscribed: undefined, root: 'ག', subscribed: 'ྲ', vowel: 'ོ', suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
    { syllable: 'མགྲྭོདས', prefix: 'མ', superscribed: undefined, root: 'ག', subscribed: 'ྲ', vowel: 'ོ', suffix: 'ད', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: 'ྭ', honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: "Achung",
  tests: [
    { syllable: 'ཧཱུ', prefix: undefined, superscribed: undefined, root: 'ཧ', subscribed: undefined, vowel: 'ུ', suffix: undefined, secondSuffix: undefined, achung: 'ཱ', anusvara: undefined, wasur: undefined , honorificMarker: undefined, chego: undefined },
    { syllable: 'ཧཱུ', prefix: undefined, superscribed: undefined, root: 'ཧ', subscribed: undefined, vowel: 'ུ', suffix: undefined, secondSuffix: undefined, achung: 'ཱ' , anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: 'Anusvara',
  tests: [
    { syllable: 'ཨོཾ', prefix: undefined, superscribed: undefined, root: 'ཨ', subscribed: undefined, vowel: 'ོ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: 'ཾ', wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཨོྃ', prefix: undefined, superscribed: undefined, root: 'ཨ', subscribed: undefined, vowel: 'ོ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: 'ྃ', wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཨོྂ', prefix: undefined, superscribed: undefined, root: 'ཨ', subscribed: undefined, vowel: 'ོ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: 'ྂ', wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});
testGroups.push({
  name: 'Honorific marker',
  tests: [
    { syllable: 'མཁྱེ༵ན', prefix: 'མ', superscribed: undefined, root: 'ཁ', subscribed: 'ྱ', vowel: 'ེ', suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: '༵', chego: undefined },
    { syllable: 'བརྩེ༵འི', prefix: 'བ', superscribed: 'ར', root: 'ཙ', subscribed: undefined, vowel: 'ེ', suffix: 'འི', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: '༵', chego: undefined },
  ]
});
testGroups.push({
  name: 'Chego',
  tests: [
    { syllable: '༸པ', prefix: undefined, superscribed: undefined, root: 'པ', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: '༸' },
    { syllable: '༸ཞབས', prefix: undefined, superscribed: undefined, root: 'ཞ', subscribed: undefined, vowel: undefined, suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: '༸' },
    { syllable: '༸སྐྱབས', prefix: undefined, superscribed: 'ས', root: 'ཀ', subscribed: 'ྱ', vowel: undefined, suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: '༸' },
  ]
});
testGroups.push({
  name: "Added cases",
  tests: [
    { syllable: 'དབུ', prefix: 'ད', superscribed: undefined, root: 'བ', subscribed: undefined, vowel: 'ུ', suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'དབུས', prefix: 'ད', superscribed: undefined, root: 'བ', subscribed: undefined, vowel: 'ུ', suffix: 'ས', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རྒ', prefix: undefined, superscribed: 'ར', root: 'ག', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'གླ', prefix: undefined, superscribed: undefined, root: 'ག', subscribed: 'ླ', vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རྒྱ', prefix: undefined, superscribed: 'ར', root: 'ག', subscribed: 'ྱ', vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མཁའ', prefix: 'མ', superscribed: undefined, root: 'ཁ', subscribed: undefined, vowel: undefined, suffix: 'འ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'མཁྱེན', prefix: 'མ', superscribed: undefined, root: 'ཁ', subscribed: 'ྱ', vowel: 'ེ', suffix: 'ན', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འདེབས', prefix: 'འ', superscribed: undefined, root: 'ད', subscribed: undefined, vowel: 'ེ', suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'སྤྱོད', prefix: undefined, superscribed: 'ས', root: 'པ', subscribed: 'ྱ', vowel: 'ོ', suffix: 'ད', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'གསུམ', prefix: 'ག', superscribed: undefined, root: 'ས', subscribed: undefined, vowel: 'ུ', suffix: 'མ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཆགས', prefix: undefined, superscribed: undefined, root: 'ཆ', subscribed: undefined, vowel: undefined, suffix: 'ག', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རློབས', prefix: undefined, superscribed: undefined, root: 'ར', subscribed: 'ླ', vowel: 'ོ', suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'སློབས', prefix: undefined, superscribed: undefined, root: 'ས', subscribed: 'ླ', vowel: 'ོ', suffix: 'བ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ཀློག', prefix: undefined, superscribed: undefined, root: 'ཀ', subscribed: 'ླ', vowel: 'ོ', suffix: 'ག', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'གླིང', prefix: undefined, superscribed: undefined, root: 'ག', subscribed: 'ླ', vowel: 'ི', suffix: 'ང', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བློང', prefix: undefined, superscribed: undefined, root: 'བ', subscribed: 'ླ', vowel: 'ོ', suffix: 'ང', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རྣམས', prefix: undefined, superscribed: 'ར', root: 'ན', subscribed: undefined, vowel: undefined, suffix: 'མ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'བསྒྲིམས', prefix: 'བ', superscribed: 'ས', root: 'ག', subscribed: 'ྲ', vowel: 'ི', suffix: 'མ', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'རྒྱངས', prefix: undefined, superscribed: 'ར', root: 'ག', subscribed: 'ྱ', vowel: undefined, suffix: 'ང', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'འགྱུར', prefix: 'འ', superscribed: undefined, root: 'ག', subscribed: 'ྱ', vowel: 'ུ', suffix: 'ར', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'སྒྲོལ', prefix: undefined, superscribed: 'ས', root: 'ག', subscribed: 'ྲ', vowel: 'ོ', suffix: 'ལ', secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'གྲངས', prefix: undefined, superscribed: undefined, root: 'ག', subscribed: 'ྲ', vowel: undefined, suffix: 'ང', secondSuffix: 'ས', achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
    { syllable: 'ལྷ', prefix: undefined, superscribed: 'ལ', root: 'ཧ', subscribed: undefined, vowel: undefined, suffix: undefined, secondSuffix: undefined, achung: undefined, anusvara: undefined, wasur: undefined, honorificMarker: undefined, chego: undefined },
  ]
});

import _ from 'underscore';
import { TibetanSyllableParser } from '../../lib/esm/tibetan-syllable-parser/tibetan-syllable-parser';

_(testGroups).each(function(testGroup) {

  describe(testGroup.name, function() {

    _(testGroup.tests).each(function(test) {

      it(test.syllable, function() {
        var parsed = new TibetanSyllableParser(test.syllable).parse();
        expect(parsed).toEqual(_(test).omit('syllable'));
      })

    })

  })

});
