            "use strict";
            n.r(t), n.d(t, {
                isSupported: function() {
                    return s
                },
                setEnabled: function() {
                    return a
                },
                setLearnedWords: function() {
                    return o
                },
                isMisspelled: function() {
                    return E
                },
                getCorrections: function() {
                    return d
                },
                replaceWithCorrection: function() {
                    return c
                },
                setAppLocale: function() {
                    return I
                },
                addResultListener: function() {
                    return N
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
            let _ = s() ? (0, l.install)() : null;
            async function a(e) {
                let t = await _;
                null != t && (t.enabled = e)
            }
            async function o(e) {
                let t = await _;
                null != t && t.setLearnedWords(e)
            }
            async function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = await _;
                return null != n && n.isMisspelled(e, t)
            }
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                    i = await _;
                return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
            }
            async function c(e) {
                let t = await _;
                null != t && t.replaceMisspelling(e)
            }
            async function I(e) {
                let t = await _;
                null != t && t.setAppLocale(e)
            }

            function N(e) {
                if (!r()) return () => {};
                let t = i.default.spellCheck.on("spellcheck-result", e);
                return null != t ? t : () => {}
            }