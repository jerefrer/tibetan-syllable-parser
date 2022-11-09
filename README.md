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

License
-----------

This software is licensed under the MIT License.

Copyright Jeremy FRERE, 2021-present.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
