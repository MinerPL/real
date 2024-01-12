            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return r
                },
                setEnabled: function() {
                    return o
                },
                setLearnedWords: function() {
                    return c
                },
                isMisspelled: function() {
                    return d
                },
                getCorrections: function() {
                    return g
                },
                replaceWithCorrection: function() {
                    return h
                },
                setAppLocale: function() {
                    return f
                },
                addResultListener: function() {
                    return p
                }
            });
            var i = n("49671"),
                l = n("852046"),
                s = n("773336");

            function a() {
                return (null === i.default || void 0 === i.default ? void 0 : i.default.spellCheck) != null
            }

            function r() {
                return (0, s.isDesktop)() && a()
            }
            let u = r() ? (0, l.install)() : null;
            async function o(e) {
                let t = await u;
                null != t && (t.enabled = e)
            }
            async function c(e) {
                let t = await u;
                null != t && t.setLearnedWords(e)
            }
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await u;
                return null != n && n.isMisspelled(e, t)
            }
            async function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = await u;
                return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function h(e) {
                let t = await u;
                null != t && t.replaceMisspelling(e)
            }
            async function f(e) {
                let t = await u;
                null != t && t.setAppLocale(e)
            }

            function p(e) {
                if (!a()) return () => {};
                let t = i.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }