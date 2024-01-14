"use strict";
n.r(t), n.d(t, {
  caseInsensitiveLangRegex: function() {
    return s
  },
  isKnownLang: function() {
    return a
  },
  findBackticks: function() {
    return u
  }
}), n("222007"), n("70102"), n("424973");
var l = n("436443");
n("86256");
let i = l.default.listLanguages(),
  r = {};
for (let e of i) {
  e = e.toLowerCase();
  let t = l.default.getLanguage(e);
  if (null == t) continue;
  let n = t.aliases;
  if (r[e] = e, null != n)
    for (let t of n) r[t.toLowerCase()] = e
}
let o = /^[a-z0-9_+\-.#]+$/,
  s = /^[a-z0-9_+\-.#]+$/i;
for (let e in r)
  if (null == e.match(o)) throw Error("Language name does not match regex: ".concat(e));

function a(e) {
  return e.toLowerCase() in r
}

function u(e) {
  let t;
  let n = [],
    l = /\\|```/g;
  for (; null != (t = l.exec(e));) {
    if ("\\" === t[0]) {
      l.lastIndex += 1;
      continue
    }
    n.push(t.index)
  }
  return n
}