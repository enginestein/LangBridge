# LangBridge

LangBridge is a language translating framework written in TypeScript for Node.js LangBridge can translate into bunch of well known languages. It also has automatic language detection if a language is not specified in the code.

### To install Langbridge:

```bash
npm install langbridge
```

### After installing, start translating into languages:

In the below example it's shown how to use LangBridge. The one arguement 'from' should be specified with the language text is being translated from and then the 'to' arguement takes the language it must be translated to.

```js
const { translate } = require('langbridge');

(async () => {
  const translatedText = await translate('Hello World!', { from: 'en', to: 'de' });

  console.log(translatedText); // Hallo Welt!
})();
```

### Automatic Language Detection

In the below example it's shown translating an English text into German without specifying the 'from' arguement using the automatic language detection.

```js
const { translate } = require('langbridge');

(async () => {
  const translatedText = await translate('Hello World!', { to: 'de' });

  console.log(translatedText); // Hallo Welt!
})();
```

### Supported Languages:

- en - English
- pt - Portuguese
- pt-BR - Portuguese (Brazil)
- af - Afrikaans
- sq - Albanian
- am - Amharic
- ar - Arabic
- hy - Armenian
- az - Azerbaijani
- eu - Basque
- be - Belarusian
- bn - Bengali
- bs - Bosnian
- bg - Bulgarian
- ca - Catalan
- ceb - Cebuano
- ny - Chichewa
- zh-CN - Chinese (Simplified)
- zh-TW - Chinese (Traditional)
- co - Corsican
- hr - Croatian
- cs - Czech
- da - Danish
- nl - Dutch
- en - English
- eo - Esperanto
- et - Estonian
- tl - Filipino
- fi - Finnish
- fr - French
- fy - Frisian
- gl - Galician
- ka - Georgian
- de - German
- el - Greek
- gu - Gujarati
- ht - Haitian Creole
- ha - Hausa
- haw - Hawaiian
- iw - Hebrew
- hi - Hindi
- hmn - Hmong
- hu - Hungarian
- is - Icelandic
- ig - Igbo
- id - Indonesian
- ga - Irish
- it - Italian
- ja - Japanese
- jw - Javanese
- kn - Kannada
- kk - Kazakh
- km - Khmer
- rw - Kinyarwanda
- ko - Korean
- ku - Kurdish
- ky - Kyrgyz
- lo - Lao
- la - Latin
- lv - Latvian
- lt - Lithuanian
- lb - Luxembourgish
- mk - Macedonian
- mg - Malagasy
- ms - Malay
- ml - Malayalam
- mt - Maltese
- mi - Maori
- mr - Marathi
- mn - Mongolian
- my - Burmese
- ne - Nepali
- no - Norwegian
- or - Odia
- ps - Pashto
- fa - Persian
- pl - Polish
- pt - Portuguese
- pa - Punjabi
- ro - Romanian
- ru - Russian
- sm - Samoan
- gd - Scottish Gaelic
- sr - Serbian
- st - Sesotho
- sn - Shona
- sd - Sindhi
- si - Sinhala
- sk - Slovak
- sl - Slovenian
- so - Somali
- es - Spanish
- su - Sundanese
- sw - Swahili
- sv - Swedish
- tg - Tajik
- ta - Tamil
- tt - Tatar
- te - Telugu
- th - Thai
- tr - Turkish
- tk - Turkmen
- uk - Ukrainian
- ur - Urdu
- ug - Uyghur
- uz - Uzbek
- vi - Vietnamese
- cy - Welsh
- xh - Xhosa
- yi - Yiddish
- yo - Yoruba
- zu - Zulu
