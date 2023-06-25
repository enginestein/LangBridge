# LangBridge

LangBridge is a language translating framework written in TypeScript for Node.js LangBridge can translate into over 400 languages. It also has automatic language detection if a language is not specified in the code.

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

### To Do

- Add roman text in the translation

- Add more languages

### Supported Languages:

en
pt
pt-BR
af
sq
am
ar
hy
az
eu
be
bn
bs
bg
ca
ceb
ny
zh-CN
co
hr
cs
da
nl
en
eo
et
tl
fi
fr
fy
gl
ka
de
el
gu
ht
ha
haw
iw
hi
hmn
hu
is
ig
id
ga
it
ja
jw
kn
kk
km
rw
ko
ku
ky
lo
la
lv
lt
lb
mk
mg
ms
ml
mt
mi
mr
mn
my
ne
no
or
ps
fa
pl
pt
pa
ro
ru
sm
gd
sr
st
sn
sd
si
sk
sl
so
es
su
sw
sv
tg
ta
tt
te
th
tr
tk
uk
ur
ug
uz
vi
cy
xh
yi
yo
zu
ja
pt
en
af
sq
am
ar
hy
az
eu
be
bn
bs
bg
ca
ceb
ny
zh-CN
zh-TW
co
hr
cs
da
nl
en
eo
et
tl
fi
fr
fy
gl
ka
de
el
gu
ht
ha
haw
iw
hi
hmn
hu
is
ig
id
ga
it
ja
jw
kn
kk
km
rw
ko
ku
ky
lo
la
lv
lt
lb
mk
mg
ms
ml
mt
mi
mr
mn
my
ne
no
or
ps
fa
pl
pt
pa
ro
ru
sm
gd
sr
st
sn
sd
si
sk
sl
so
es
su
sw
sv
tg
ta
tt
te
th
tr
tk
uk
ur
ug
uz
vi
cy
xh
yi
yo
zu
en
pt
af
sq
am
ar
hy
az
eu
be
bn
bs
bg
ca
ceb
ny
zh-CN
co
hr
cs
da
nl
en
eo
et
tl
fi
fr
fy
gl
ka
de
el
gu
ht
ha
haw
iw
hi
hmn
hu
is
ig
id
ga
it
ja
jw
kn
kk
km
rw
ko
ku
ky
lo
la
lv
lt
lb
mk
mg
ms
ml
mt
mi
mr
mn
my
ne
no
or
ps
fa
pl
pt
pa
ro
ru
sm
gd
sr
st
sn
sd
si
sk
sl
so
es
su
sw
sv
tg
ta
tt
te
th
tr
tk
uk
ur
ug
uz
vi
cy
xh
yi
yo
zu
ja
pt
en
af
sq
am
ar
hy
az
eu
be
bn
bs
bg
ca
ceb
ny
zh-CN
zh-TW
co
hr
cs
da
nl
en
eo
et
tl
fi
fr
fy
gl
ka
de
el
gu
ht
ha
haw
iw
hi
hmn
hu
is
ig
id
ga
it
ja
jw
kn
kk
km
rw
ko
ku
ky
lo
la
lv
lt
lb
mk
mg
ms
ml
mt
mi
mr
mn
my
ne
no
or
ps
fa
pl
pt
pa
ro
ru
sm
gd
sr
st
sn
sd
si
sk
sl
so
es
su
sw
sv
tg
ta
tt
te
th
tr
tk
uk
ur
ug
uz
vi
cy
xh
yi
yo
zu