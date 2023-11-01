(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65297"], {
        282585: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return a
                }
            });
            var u = o("37983"),
                l = o("884691"),
                n = o("77078"),
                r = o("973262"),
                s = o("782340");

            function a(t) {
                let {
                    defaultColor: e,
                    colors: o,
                    value: a,
                    onChange: i,
                    disabled: c = !1,
                    customPickerPosition: d = "bottom"
                } = t, [C, f] = l.useState(() => 0 === a || a === e || o.some(t => t === a) ? null : a);
                l.useEffect(() => {
                    f(0 === a || a === e || o.some(t => t === a) ? null : a)
                }, [a, o, e]);
                let p = l.useCallback(t => {
                        null == i || i(t), f(null)
                    }, [i, f]),
                    h = l.useCallback(t => {
                        null == i || i(t), f(t)
                    }, [i, f]),
                    x = l.useCallback(() => (0, u.jsx)(r.CustomColorPicker, {
                        onChange: h,
                        value: C
                    }), [h, C]),
                    b = l.useCallback(t => {
                        let e = (0, u.jsx)(r.CustomColorButton, {
                            ...t,
                            "aria-label": s.default.Messages.CUSTOM_COLOR
                        });
                        return c ? e : (0, u.jsx)(n.Popout, {
                            renderPopout: x,
                            position: d,
                            children: t => (0, u.jsx)(n.Tooltip, {
                                text: s.default.Messages.CUSTOM_COLOR,
                                position: "bottom",
                                children: o => (0, u.jsx)("div", {
                                    ...o,
                                    ...t,
                                    children: e
                                })
                            })
                        })
                    }, [d, c, x]),
                    v = l.useCallback(t => {
                        let e = (0, u.jsx)(r.DefaultColorButton, {
                            ...t
                        });
                        return c ? e : (0, u.jsx)(n.Tooltip, {
                            text: s.default.Messages.DEFAULT,
                            position: "bottom",
                            children: t => (0, u.jsx)("div", {
                                ...t,
                                children: e
                            })
                        })
                    }, [c]);
                return (0, u.jsx)(r.default, {
                    ...t,
                    renderDefaultButton: v,
                    renderCustomButton: b,
                    customColor: C,
                    onChange: p
                })
            }
        },
        248559: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return l
                }
            });
            var u = o("884691"),
                l = () => {
                    let [t, e] = (0, u.useState)(null);
                    return (0, u.useEffect)(() => {
                        var t;
                        (null === (t = window) || void 0 === t ? void 0 : t.EyeDropper) != null && e(new window.EyeDropper)
                    }, []), t
                }
        },
        597590: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return n
                }
            });
            var u = o("884691");
            let l = u.createContext(void 0);
            var n = l
        }
    }
]);