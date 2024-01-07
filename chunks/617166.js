            "use strict";
            n.r(t), n.d(t, {
                useSliderState: function() {
                    return i
                }
            }), n("222007");
            var r = n("290895"),
                o = n("679750"),
                a = n("884691");

            function i(e) {
                var t;
                let {
                    isDisabled: n = !1,
                    minValue: i = 0,
                    maxValue: u = 100,
                    numberFormatter: d,
                    step: p = 1,
                    orientation: f = "horizontal"
                } = e, m = (0, a.useMemo)(() => {
                    let e = (u - i) / 10;
                    return Math.max(e = (0, r.snapValueToStep)(e, 0, e + p, p), p)
                }, [p, u, i]), h = (0, a.useMemo)(() => c(e.value), [e.value]), g = (0, a.useMemo)(() => null !== (t = c(e.defaultValue)) && void 0 !== t ? t : [i], [e.defaultValue, i]), v = l(e.value, e.defaultValue, e.onChange), y = l(e.value, e.defaultValue, e.onChangeEnd), [b, x] = (0, o.useControlledState)(h, g, v), [S, w] = (0, a.useState)(Array(b.length).fill(!1)), D = (0, a.useRef)(Array(b.length).fill(!0)), [C, P] = (0, a.useState)(void 0), k = (0, a.useRef)(b), E = (0, a.useRef)(S), T = e => {
                    k.current = e, x(e)
                }, R = e => {
                    E.current = e, w(e)
                };

                function M(e) {
                    return (e - i) / (u - i)
                }

                function O(e) {
                    return 0 === e ? i : b[e - 1]
                }

                function I(e) {
                    return e === b.length - 1 ? u : b[e + 1]
                }

                function A(e) {
                    return D.current[e]
                }

                function N(e, t) {
                    if (n || !A(e)) return;
                    let o = O(e),
                        a = I(e);
                    t = (0, r.snapValueToStep)(t, o, a, p), T(s(k.current, e, t))
                }

                function L(e) {
                    return d.format(e)
                }

                function j(e) {
                    let t = e * (u - i) + i;
                    return (0, r.clamp)(Math.round((t - i) / p) * p + i, i, u)
                }
                return {
                    values: b,
                    getThumbValue: e => b[e],
                    setThumbValue: N,
                    setThumbPercent: function(e, t) {
                        N(e, j(t))
                    },
                    isThumbDragging: e => S[e],
                    setThumbDragging: function(e, t) {
                        if (n || !A(e)) return;
                        let r = E.current[e];
                        E.current = s(E.current, e, t), R(E.current), y && r && !E.current.some(Boolean) && y(k.current)
                    },
                    focusedThumb: C,
                    setFocusedThumb: P,
                    getThumbPercent: e => M(b[e]),
                    getValuePercent: M,
                    getThumbValueLabel: e => L(b[e]),
                    getFormattedValue: L,
                    getThumbMinValue: O,
                    getThumbMaxValue: I,
                    getPercentValue: j,
                    isThumbEditable: A,
                    setThumbEditable: function(e, t) {
                        D.current[e] = t
                    },
                    incrementThumb: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = Math.max(t, p);
                        N(e, (0, r.snapValueToStep)(b[e] + n, i, u, p))
                    },
                    decrementThumb: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = Math.max(t, p);
                        N(e, (0, r.snapValueToStep)(b[e] - n, i, u, p))
                    },
                    step: p,
                    pageSize: m,
                    orientation: f,
                    isDisabled: n
                }
            }

            function s(e, t, n) {
                return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)]
            }

            function c(e) {
                if (null != e) return Array.isArray(e) ? e : [e]
            }

            function l(e, t, n) {
                return r => {
                    "number" == typeof e || "number" == typeof t ? null == n || n(r[0]) : null == n || n(r)
                }
            }