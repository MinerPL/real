            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("446674"),
                a = n("95410"),
                s = n("913144"),
                u = n("749866");
            let r = "SpellcheckStore",
                c = !0,
                i = new Set;

            function o() {
                a.default.set(r, {
                    enabled: c,
                    learnedWords: i
                })
            }
            class d extends l.default.Store {
                initialize() {
                    let e = a.default.get(r);
                    null != e && (c = e.enabled, i = new Set(e.learnedWords), (0, u.setEnabled)(c), (0, u.setLearnedWords)(i))
                }
                isEnabled() {
                    return c
                }
                hasLearnedWord(e) {
                    return i.has(e.toLocaleLowerCase())
                }
            }
            d.displayName = "SpellcheckStore";
            var f = new d(s.default, {
                SPELLCHECK_TOGGLE() {
                    c = !c, (0, u.setEnabled)(c), o()
                },
                SPELLCHECK_LEARN_WORD(e) {
                    let {
                        word: t
                    } = e;
                    i.add(t.toLocaleLowerCase()), (0, u.setLearnedWords)(i), o()
                },
                SPELLCHECK_UNLEARN_WORD(e) {
                    let {
                        word: t
                    } = e;
                    i.delete(t.toLocaleLowerCase()), (0, u.setLearnedWords)(i), o()
                },
                I18N_LOAD_SUCCESS(e) {
                    let {
                        locale: t
                    } = e;
                    (0, u.setAppLocale)(t)
                }
            })