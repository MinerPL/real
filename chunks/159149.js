            "use strict";
            n.r(t), n.d(t, {
                CTAType: function() {
                    return i
                },
                default: function() {
                    return E
                }
            });
            var r, i, o = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("145131"),
                a = n("181114"),
                u = n("376641"),
                c = n("782340"),
                d = n("198699");
            (r = i || (i = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
            let f = e => {
                let {
                    onBack: t,
                    backText: n,
                    primaryIcon: r,
                    primaryCTA: i,
                    primaryType: f,
                    primaryText: E,
                    primaryTooltip: _,
                    primaryDisabled: p,
                    primarySubmitting: I,
                    onPrimary: C,
                    secondaryText: A,
                    onSecondary: h
                } = e;
                return (0, o.jsxs)(l.ModalFooter, {
                    justify: s.default.Justify.BETWEEN,
                    align: s.default.Align.CENTER,
                    children: [(() => {
                        if (null == i || null == E) return null;
                        let e = 2 === i ? a.default : l.Button,
                            t = {
                                innerClassName: d.button,
                                type: f,
                                disabled: p,
                                submitting: I,
                                color: 0 === i ? l.Button.Colors.BRAND : l.Button.Colors.GREEN,
                                onClick: C
                            };
                        return null != _ ? (0, o.jsx)(l.Tooltip, {
                            text: _,
                            children: n => (0, o.jsxs)(e, {
                                ...n,
                                ...t,
                                children: [null == r ? null : (0, o.jsx)(r, {
                                    className: d.primaryIcon
                                }), E]
                            })
                        }) : (0, o.jsxs)(e, {
                            ...t,
                            children: [null == r ? null : (0, o.jsx)(r, {
                                className: d.primaryIcon
                            }), E]
                        })
                    })(), null == A ? null : (0, o.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        onClick: h,
                        children: A
                    }), (0, o.jsx)(u.default, {}), null == t ? null : (0, o.jsx)(l.Button, {
                        className: d.back,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        onClick: t,
                        children: null != n ? n : c.default.Messages.BACK
                    })]
                })
            };
            f.CTAType = i;
            var E = f