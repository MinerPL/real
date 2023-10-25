(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84304"], {
        282585: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return r
                }
            });
            var o = l("920040"),
                s = l("773670"),
                u = l("77078"),
                n = l("973262"),
                a = l("782340");

            function r(t) {
                let {
                    defaultColor: e,
                    colors: l,
                    value: r,
                    onChange: i,
                    disabled: c = !1,
                    customPickerPosition: d = "bottom"
                } = t, [C, p] = s.useState(() => 0 === r || r === e || l.some(t => t === r) ? null : r);
                s.useEffect(() => {
                    p(0 === r || r === e || l.some(t => t === r) ? null : r)
                }, [r, l, e]);
                let f = s.useCallback(t => {
                        null == i || i(t), p(null)
                    }, [i, p]),
                    h = s.useCallback(t => {
                        null == i || i(t), p(t)
                    }, [i, p]),
                    b = s.useCallback(() => (0, o.jsx)(n.CustomColorPicker, {
                        onChange: h,
                        value: C
                    }), [h, C]),
                    x = s.useCallback(t => {
                        let e = (0, o.jsx)(n.CustomColorButton, {
                            ...t,
                            "aria-label": a.default.Messages.CUSTOM_COLOR
                        });
                        return c ? e : (0, o.jsx)(u.Popout, {
                            renderPopout: b,
                            position: d,
                            children: t => (0, o.jsx)(u.Tooltip, {
                                text: a.default.Messages.CUSTOM_COLOR,
                                position: "bottom",
                                children: l => (0, o.jsx)("div", {
                                    ...l,
                                    ...t,
                                    children: e
                                })
                            })
                        })
                    }, [d, c, b]),
                    k = s.useCallback(t => {
                        let e = (0, o.jsx)(n.DefaultColorButton, {
                            ...t
                        });
                        return c ? e : (0, o.jsx)(u.Tooltip, {
                            text: a.default.Messages.DEFAULT,
                            position: "bottom",
                            children: t => (0, o.jsx)("div", {
                                ...t,
                                children: e
                            })
                        })
                    }, [c]);
                return (0, o.jsx)(n.default, {
                    ...t,
                    renderDefaultButton: k,
                    renderCustomButton: x,
                    customColor: C,
                    onChange: f
                })
            }
        }
    }
]);