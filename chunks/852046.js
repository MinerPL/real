"use strict";
n.r(t), n.d(t, {
  install: function() {
    return b
  }
}), n("781738"), n("222007");
var i = n("78349"),
  l = n("917351"),
  s = n.n(l),
  a = n("118810"),
  r = n("49671"),
  u = n("605250"),
  o = n("915639"),
  c = n("449008"),
  d = n("851234"),
  g = n("648610");
let h = new u.default("Spellchecker"),
  f = null === r.default || void 0 === r.default ? void 0 : r.default.spellCheck;

function p(e) {
  var t;
  e = null !== (t = g.default[e]) && void 0 !== t ? t : e;
  let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
  if (null == n || null == n.langtag.language || null == n.langtag.region) {
    h.error("".concat(e, " is not a valid locale."));
    return
  }
  let {
    language: l,
    region: s
  } = n.langtag;
  return "".concat(l.language.toLowerCase(), "-").concat(s.toUpperCase())
}
class m {
  get enabled() {
    return this._enabled
  }
  set enabled(e) {
    this._enabled = e
  }
  setLearnedWords(e) {
    f.setLearnedWords(e)
  }
  setLocale(e) {
    var t;
    null === (t = f.setLocale(e)) || void 0 === t || t.then(t => {
      h.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
    })
  }
  setAppLocale(e) {
    this.regionPreference = e.split("-")[1]
  }
  detectLanguage(e) {
    this.enabled && this.languageDetector.process(e)
  }
  getAvailableLanguages(e) {
    let t = {};
    return e.forEach(e => {
      var n;
      let [i] = e.split("-");
      t[i] = null !== (n = t[i]) && void 0 !== n ? n : e
    }), t
  }
  isMisspelled(e, t) {
    return "" !== this.misspelledWord && e === this.misspelledWord
  }
  getCorrectionsForMisspelling(e, t) {
    return this.isMisspelled(e, t) ? this.corrections : []
  }
  replaceMisspelling(e) {
    f.replaceMisspelling(e)
  }
  constructor(e) {
    this._enabled = !0, this.misspelledWord = "", this.corrections = [];
    let [t, n] = o.default.locale.split("-");
    this.regionPreference = n;
    let i = this.getAvailableLanguages(e);
    this.languageDetector = new d.default(t, n => {
      let l = "".concat(n, "-").concat(this.regionPreference);
      if (-1 !== e.indexOf(l)) this.setLocale(l);
      else {
        var s;
        let e = null !== (s = i[n]) && void 0 !== s ? s : g.default[t];
        null != e && this.setLocale(e)
      }
    }), f.on("spellcheck-result", (e, t) => {
      this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
    })
  }
}
let v = s.debounce((e, t) => {
  let n = function(e) {
    return null == e ? null : (0, a.isElement)(e, HTMLInputElement) || (0, a.isElement)(e, HTMLTextAreaElement) ? e.value : (0, a.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
  }(t);
  null != n && e.detectLanguage(n)
}, 250);
async function b() {
  var e, t;
  let n = null !== (e = await f.getAvailableDictionaries()) && void 0 !== e ? e : [],
    i = n.map(p).filter(c.isNotNullish),
    l = new m(i);
  return t = l, null != document.body && document.body.addEventListener("beforeinput", e => v(t, e.target), !0), l
}