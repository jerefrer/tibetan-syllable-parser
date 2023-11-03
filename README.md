# tibetan-syllable-parser

A parser to deconstruct a single Unicode Tibetan syllable into its different
parts: root, vowel, prefix, superscribed, achung, ...

For now it works perfectly if the syllable is properly built and does not
include any punctuation, but it isn't yet able to detect when a syllable is
malformed.


Usage
-----------

```js
import { TibetanSyllableParser } from 'tibetan-syllable-parser';

new TibetanSyllableParser('མཁྱེན').parse()
=> {
  prefix: "མ",
  superscribed: null,
  root: "ཁ",
  subscribed: "ྱ",
  wasur: undefined,
  achung: undefined,
  vowel: "ེ",
  anusvara: undefined,
  suffix: "ན",
  secondSuffix: undefined,
  honorificMarker: undefined
}
```

Testing
-----------

`npm run test`.

Credits
-----------

The rules used to deconstruct the syllables into parts (root, prefix, ...)
are almost entirely based on John Rockwell's *A Primer for Classical Literary
Tibetan, Volume 1*, so kudos to everyone involved in the production of this
great book.

A zillion thanks also to:

* Joe B. Wilson and everybody involved in publishing *Translating Tibetan from
  Buddhism* which is equally great.
* Tony Duff and friends for producing all these beautiful Tibetan fonts.
* Everybody involved in building an maintaining all these great libraries that
  make development so easy and enjoyable.

Through the virtue coming from this work, may all beings human or
otherwise reach absolute freedom.
