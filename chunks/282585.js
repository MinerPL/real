            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var r = n("37983"),
                o = n("884691"),
                l = n("77078"),
                i = n("973262"),
                a = n("782340");

            function s(e) {
                let {
                    defaultColor: t,
                    colors: n,
                    value: s,
                    onChange: c,
                    disabled: u = !1,
                    customPickerPosition: d = "bottom"
                } = e, [f, p] = o.useState(() => 0 === s || s === t || n.some(e => e === s) ? null : s);
                o.useEffect(() => {
                    p(0 === s || s === t || n.some(e => e === s) ? null : s)
                }, [s, n, t]);
                let x = o.useCallback(e => {
                        null == c || c(e), p(null)
                    }, [c, p]),
                    h = o.useCallback(e => {
                        null == c || c(e), p(e)
                    }, [c, p]),
                    v = o.useCallback(() => (0, r.jsx)(i.CustomColorPicker, {
                        onChange: h,
                        value: f
                    }), [h, f]),
                    m = o.useCallback(e => {
                        let t = (0, r.jsx)(i.CustomColorButton, {
                            ...e,
                            "aria-label": a.default.Messages.CUSTOM_COLOR
                        });
                        return u ? t : (0, r.jsx)(l.Popout, {
                            renderPopout: v,
                            position: d,
                            children: e => (0, r.jsx)(l.Tooltip, {
                                text: a.default.Messages.CUSTOM_COLOR,
                                position: "bottom",
                                children: n => (0, r.jsx)("div", {
                                    ...n,
                                    ...e,
                                    children: t
                                })
                            })
                        })
                    }, [d, u, v]),
                    g = o.useCallback(e => {
                        let t = (0, r.jsx)(i.DefaultColorButton, {
                            ...e
                        });
                        return u ? t : (0, r.jsx)(l.Tooltip, {
                            text: a.default.Messages.DEFAULT,
                            position: "bottom",
                            children: e => (0, r.jsx)("div", {
                                ...e,
                                children: t
                            })
                        })
                    }, [u]);
                return (0, r.jsx)(i.default, {
                    ...e,
                    renderDefaultButton: g,
                    renderCustomButton: m,
                    customColor: f,
                    onChange: x
                })
            }