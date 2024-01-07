            "use strict";
            n.r(t), n.d(t, {
                VIOLATION_ATTRIBUTE_NAME: function() {
                    return v
                },
                useAccessibilityChecker: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var r, i, a = n("884691"),
                l = n("456254"),
                s = n("786908"),
                u = n("699667"),
                o = n("439308"),
                c = n("274059"),
                d = n("321307"),
                f = n("698085"),
                h = n("618068"),
                b = n("992397");
            let m = [u.default, o.default, c.default, f.default, d.default, b.default, h.default],
                v = "data-accessibility-violation",
                p = "function" == typeof(null === (i = navigator) || void 0 === i ? void 0 : null === (r = i.scheduling) || void 0 === r ? void 0 : r.isInputPending),
                A = null,
                g = null,
                w = 0,
                I = 0,
                _ = null,
                T = {
                    hash: 0,
                    violations: new Map
                },
                y = () => {},
                E = document.body;

            function k() {
                w = 0, I = 0, _ = null, T = {
                    hash: 0,
                    violations: new Map
                }
            }

            function R() {
                g = requestIdleCallback(N)
            }

            function P() {
                _ = null, I = 0, w < m.length - 1 ? (w += 1, R()) : (y(T), k())
            }

            function N() {
                let e = m[w];
                if (null == _ && (_ = null != e.selector ? Array.from(E.querySelectorAll(e.selector)) : e.select(E)), 0 === _.length) return P();
                let t = performance.now() + 16,
                    n = {
                        includeContinuous: !0
                    };
                for (; I < _.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t);) {
                    ;
                    let t = _[I++],
                        n = e.check(t);
                    if (n !== s.Pass) {
                        var r, i;
                        let a = (0, l.getComponentStackTraceFromElement)(t),
                            s = x("".concat(n, "_").concat(e.id, "_").concat(null == a ? function(e) {
                                let t = "",
                                    n = e;
                                for (; null != n;) t += n.className, n = n.parentElement;
                                return x(t)
                            }(t) : a.join("\n")));
                        T.hash = x("".concat(T.hash).concat(s));
                        let u = "".concat(e.id, "_").concat(s),
                            o = null !== (r = T.violations.get(e.id)) && void 0 !== r ? r : {
                                rule: e,
                                instances: new Map
                            },
                            c = null !== (i = o.instances.get(u)) && void 0 !== i ? i : [];
                        c.push({
                            element: t,
                            message: n,
                            trace: null != a ? a : [],
                            hash: s
                        }), o.instances.set(u, c), T.violations.set(e.id, o)
                    }
                }
                let a = I < _.length - 1;
                if (a) return R();
                P()
            }
            let S = e => {
                let t = e.filter(e => ("attributes" !== e.type || e.attributeName !== v) && !0);
                0 !== t.length && (k(), null != A && (clearTimeout(A), A = null), null != g && (clearTimeout(g), g = null), A = setTimeout(R, 250))
            };

            function M(e, t) {
                (0, a.useLayoutEffect)(() => {
                    if (p && null != e) {
                        y = t, E = e;
                        let n = function(e) {
                            let t = new MutationObserver(S);
                            return t.observe(e, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }), t
                        }(e);
                        return () => {
                            y = () => {}, n.disconnect()
                        }
                    }
                }, [e])
            }

            function x(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 3735928559 ^ t,
                    r = 1103547991 ^ t;
                for (let t = 0, i; t < e.length; t++) n = Math.imul(n ^ (i = e.charCodeAt(t)), 2654435761), r = Math.imul(r ^ i, 1597334677);
                return n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), 4294967296 * (2097151 & (r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909))) + (n >>> 0)
            }