            "use strict";
            n.r(t), n.d(t, {
                install: function() {
                    return D
                }
            }), n("781738"), n("222007");
            var i = n("78349"),
                l = n("917351"),
                u = n.n(l),
                r = n("118810"),
                s = n("49671"),
                _ = n("605250"),
                a = n("915639"),
                o = n("449008"),
                E = n("851234"),
                d = n("648610");
            let c = new _.default("Spellchecker"),
                I = null === s.default || void 0 === s.default ? void 0 : s.default.spellCheck;

            function N(e) {
                var t;
                e = null !== (t = d.default[e]) && void 0 !== t ? t : e;
                let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
                if (null == n || null == n.langtag.language || null == n.langtag.region) {
                    c.error("".concat(e, " is not a valid locale."));
                    return
                }
                let {
                    language: l,
                    region: u
                } = n.langtag;
                return "".concat(l.language.toLowerCase(), "-").concat(u.toUpperCase())
            }
            class T {
                get enabled() {
                    return this._enabled
                }
                set enabled(e) {
                    this._enabled = e
                }
                setLearnedWords(e) {
                    I.setLearnedWords(e)
                }
                setLocale(e) {
                    var t;
                    null === (t = I.setLocale(e)) || void 0 === t || t.then(t => {
                        c.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                    I.replaceMisspelling(e)
                }
                constructor(e) {
                    this._enabled = !0, this.misspelledWord = "", this.corrections = [];
                    let [t, n] = a.default.locale.split("-");
                    this.regionPreference = n;
                    let i = this.getAvailableLanguages(e);
                    this.languageDetector = new E.default(t, n => {
                        let l = "".concat(n, "-").concat(this.regionPreference);
                        if (-1 !== e.indexOf(l)) this.setLocale(l);
                        else {
                            var u;
                            let e = null !== (u = i[n]) && void 0 !== u ? u : d.default[t];
                            null != e && this.setLocale(e)
                        }
                    }), I.on("spellcheck-result", (e, t) => {
                        this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
                    })
                }
            }
            let A = u.debounce((e, t) => {
                let n = function(e) {
                    return null == e ? null : (0, r.isElement)(e, HTMLInputElement) || (0, r.isElement)(e, HTMLTextAreaElement) ? e.value : (0, r.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
                }(t);
                null != n && e.detectLanguage(n)
            }, 250);
            async function D() {
                var e, t;
                let n = null !== (e = await I.getAvailableDictionaries()) && void 0 !== e ? e : [],
                    i = n.map(N).filter(o.isNotNullish),
                    l = new T(i);
                return t = l, null != document.body && document.body.addEventListener("beforeinput", e => A(t, e.target), !0), l
            }