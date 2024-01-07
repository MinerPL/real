            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("222007");
            var a = s("884691"),
                n = s("917351"),
                l = s("454686"),
                i = s("314865");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    s = arguments.length > 2 ? arguments[2] : void 0,
                    [r, o] = a.useState((0, i.getKeywordStringFromKeywordFilter)(t)),
                    {
                        errorMessage: d,
                        handleValidateKeywords: u
                    } = function(e) {
                        let [t, s] = a.useState(null), i = a.useRef(null), r = a.useCallback(() => (0, n.debounce)(t => {
                            clearTimeout(i.current), i.current = setTimeout(() => {
                                try {
                                    (0, l.validateKeywordsOrThrow)(t, e), s(null)
                                } catch (e) {
                                    s(e.message)
                                }
                                clearTimeout(i.current)
                            }, 500)
                        }, 300, {
                            leading: !0,
                            trailing: !0
                        }), [e]);
                        return {
                            errorMessage: t,
                            handleValidateKeywords: r
                        }
                    }(s),
                    c = a.useCallback(e => 0 !== e.length && (0, i.isKeywordParseableString)(e) ? (0, i.getKeywordStringFromKeywordFilter)((0, i.getKeywordsFromString)(e)) : e, []),
                    E = a.useCallback(t => {
                        let s = t.currentTarget.value,
                            a = "insertFromPaste" === t.nativeEvent.inputType;
                        a && (s = c(s));
                        let n = (0, i.getKeywordsFromString)(s);
                        o(s), e(n), u()(n)
                    }, [u, c, e]);
                return {
                    value: r,
                    errorMessage: d,
                    onChange: E
                }
            }