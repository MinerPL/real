            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("463928"),
                l = r.n(n),
                i = r("515557");

            function a(e, t, r, n, l) {
                let a;
                return !r && (t += "\n\n"), a = e(t, {
                    inline: r,
                    ...n
                }), a = (0, i.flattenAst)(a), a = (0, i.constrainAst)(a), null != l && (a = l(a, r)), a
            }
            var s = {
                reactParserFor(e) {
                    let t = l.parserFor(e),
                        r = l.reactFor(l.ruleOutput(e, "react"));
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return r(a(t, e, n, l, i), l)
                    }
                },
                astParserFor(e) {
                    let t = l.parserFor(e);
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return a(t, e, r, n, l)
                    }
                }
            }