            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("587974"),
                o = n("315102"),
                u = n("524768"),
                d = n("616674"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: f,
                    className: h,
                    selectable: E = !1,
                    onFocus: _,
                    onBlur: p,
                    onMouseOver: I,
                    onMouseLeave: T,
                    ...C
                } = e, [S, N] = l.useState(!1), g = l.useCallback(() => {
                    N(!0), null == _ || _()
                }, [_]), v = l.useCallback(() => {
                    N(!1), null == p || p()
                }, [p]), m = l.useCallback(() => {
                    N(!0), null == I || I()
                }, [I]), A = l.useCallback(() => {
                    N(!1), null == T || T()
                }, [T]), L = l.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return o.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return c
                }, [t, r]);
                return (0, i.jsx)("div", {
                    ...C,
                    className: s(d.wrapper, h, {
                        [d.selectable]: E,
                        [d.selected]: E && n
                    }),
                    onFocus: g,
                    onBlur: v,
                    onMouseOver: m,
                    onMouseLeave: A,
                    children: (0, i.jsx)(a.default, {
                        className: d.mask,
                        mask: E && (n || S) ? a.MaskIDs.SQUIRCLE : a.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: r,
                                height: f
                            },
                            src: L
                        })
                    })
                })
            }