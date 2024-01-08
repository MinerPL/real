            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                s = n("587974"),
                o = n("315102"),
                u = n("524768"),
                d = n("616674"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: a,
                    height: f,
                    className: h,
                    selectable: E = !1,
                    onFocus: _,
                    onBlur: p,
                    onMouseOver: I,
                    onMouseLeave: C,
                    ...T
                } = e, [S, N] = l.useState(!1), v = l.useCallback(() => {
                    N(!0), null == _ || _()
                }, [_]), g = l.useCallback(() => {
                    N(!1), null == p || p()
                }, [p]), m = l.useCallback(() => {
                    N(!0), null == I || I()
                }, [I]), A = l.useCallback(() => {
                    N(!1), null == C || C()
                }, [C]), M = l.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return o.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: a
                        })
                    }
                    return c
                }, [t, a]);
                return (0, i.jsx)("div", {
                    ...T,
                    className: r(d.wrapper, h, {
                        [d.selectable]: E,
                        [d.selected]: E && n
                    }),
                    onFocus: v,
                    onBlur: g,
                    onMouseOver: m,
                    onMouseLeave: A,
                    children: (0, i.jsx)(s.default, {
                        className: d.mask,
                        mask: E && (n || S) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: a,
                                height: f
                            },
                            src: M
                        })
                    })
                })
            }