            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return s
                },
                setEnabled: function() {
                    return o
                },
                setLearnedWords: function() {
                    return d
                },
                isMisspelled: function() {
                    return c
                },
                getCorrections: function() {
                    return g
                },
                replaceWithCorrection: function() {
                    return f
                },
                setAppLocale: function() {
                    return h
                },
                addResultListener: function() {
                    return S
                }
            });
            var i = n("49671"),
                l = n("852046"),
                u = n("773336");

            function r() {
                return (null === i.default || void 0 === i.default ? void 0 : i.default.spellCheck) != null
            }

            function s() {
                return (0, u.isDesktop)() && r()
            }
            let a = s() ? (0, l.install)() : null;
            async function o(e) {
                let t = await a;
                null != t && (t.enabled = e)
            }
            async function d(e) {
                let t = await a;
                null != t && t.setLearnedWords(e)
            }
            async function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await a;
                return null != n && n.isMisspelled(e, t)
            }
            async function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = await a;
                return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function f(e) {
                let t = await a;
                null != t && t.replaceMisspelling(e)
            }
            async function h(e) {
                let t = await a;
                null != t && t.setAppLocale(e)
            }

            function S(e) {
                if (!r()) return () => {};
                let t = i.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }