            "use strict";
            n.r(t), n.d(t, {
                useNumberFieldState: function() {
                    return i
                }
            }), n("222007");
            var r = n("679750"),
                o = n("676231"),
                a = n("884691");

            function i(e) {
                let {
                    minValue: t,
                    maxValue: n,
                    step: i,
                    formatOptions: c,
                    value: l,
                    defaultValue: u,
                    onChange: d,
                    locale: p,
                    isDisabled: f,
                    isReadOnly: m
                } = e, [h, g] = (0, r.useControlledState)(l, isNaN(u) ? NaN : u, d), [v, y] = (0, a.useState)(() => isNaN(h) ? "" : new(0, o.NumberFormatter)(p, c).format(h)), b = (0, a.useMemo)(() => new o.NumberParser(p, c), [p, c]), x = (0, a.useMemo)(() => b.getNumberingSystem(v), [b, v]), S = (0, a.useMemo)(() => new o.NumberFormatter(p, {
                    ...c,
                    numberingSystem: x
                }), [p, c, x]), w = (0, a.useMemo)(() => S.resolvedOptions(), [S]), D = (0, a.useCallback)(e => isNaN(e) || null === e ? "" : S.format(e), [S]), C = isNaN(i) ? 1 : i;
                "percent" === w.style && isNaN(i) && (C = .01);
                let [P, k] = (0, a.useState)(h), [E, T] = (0, a.useState)(p), [R, M] = (0, a.useState)(c);
                (!Object.is(h, P) || p !== E || c !== R) && (y(D(h)), k(h), T(p), M(c));
                let O = (0, a.useMemo)(() => b.parse(v), [b, v]),
                    I = (e, o) => {
                        if (isNaN(O)) {
                            let e = isNaN(o) ? 0 : o;
                            return (0, r.snapValueToStep)(e, t, n, C)
                        } {
                            let o = (0, r.snapValueToStep)(O, t, n, C);
                            return "+" === e && o > O || "-" === e && o < O ? o : (0, r.snapValueToStep)(s(e, O, C), t, n, C)
                        }
                    },
                    A = (0, a.useMemo)(() => !f && !m && (isNaN(O) || isNaN(n) || (0, r.snapValueToStep)(O, t, n, C) > O || s("+", O, C) <= n), [f, m, t, n, C, O]),
                    N = (0, a.useMemo)(() => !f && !m && (isNaN(O) || isNaN(t) || (0, r.snapValueToStep)(O, t, n, C) < O || s("-", O, C) >= t), [f, m, t, n, C, O]);
                return {
                    validate: e => b.isValidPartialNumber(e, t, n),
                    increment: () => {
                        let e = I("+", t);
                        e === h && y(D(e)), g(e)
                    },
                    incrementToMax: () => {
                        null != n && g((0, r.snapValueToStep)(n, t, n, C))
                    },
                    decrement: () => {
                        let e = I("-", n);
                        e === h && y(D(e)), g(e)
                    },
                    decrementToMin: () => {
                        null != t && g(t)
                    },
                    canIncrement: A,
                    canDecrement: N,
                    minValue: t,
                    maxValue: n,
                    numberValue: O,
                    setNumberValue: g,
                    setInputValue: y,
                    inputValue: v,
                    commit: () => {
                        let e;
                        if (!v.length) {
                            g(NaN), y(void 0 === l ? "" : D(h));
                            return
                        }
                        if (isNaN(O)) {
                            y(D(h));
                            return
                        }
                        e = isNaN(i) ? (0, r.clamp)(O, t, n) : (0, r.snapValueToStep)(O, t, n, i), g(e = b.parse(D(e))), y(D(void 0 === l ? e : h))
                    }
                }
            }

            function s(e, t, n) {
                let r = "+" === e ? t + n : t - n;
                if (t % 1 != 0 || n % 1 != 0) {
                    let o = t.toString().split("."),
                        a = n.toString().split("."),
                        i = o[1] && o[1].length || 0,
                        s = a[1] && a[1].length || 0,
                        c = Math.pow(10, Math.max(i, s));
                    t = Math.round(t * c), n = Math.round(n * c), r = ("+" === e ? t + n : t - n) / c
                }
                return r
            }