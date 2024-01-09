            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                i = n("788220"),
                r = n("894282"),
                u = n("186503");

            function o(e) {
                let {
                    renderPopout: t,
                    onMouseEnter: n,
                    onMouseLeave: s,
                    closePopout: i,
                    isHovered: r,
                    ...u
                } = e;
                return l.useEffect(() => {
                    !r && i()
                }, [i, r]), (0, a.jsx)("div", {
                    onMouseEnter: n,
                    onMouseLeave: s,
                    children: t({
                        closePopout: i,
                        ...u
                    })
                })
            }

            function d(e) {
                let {
                    renderPopout: t,
                    children: n
                } = e, [d, c] = l.useState(!1), {
                    isHovered: f,
                    setIsHovered: h,
                    onMouseEnter: p,
                    onMouseLeave: m,
                    cancelTimers: E
                } = (0, i.default)(200, 300);

                function C(e) {
                    "focus" !== e.type && !d && p()
                }

                function g() {
                    !d && m()
                }

                function S(e) {
                    E(), c(!d), (!f || d) && e()
                }
                let _ = f || d;
                return (0, a.jsx)(s.Popout, {
                    shouldShow: _,
                    animationPosition: "top",
                    position: "top",
                    align: "left",
                    spacing: 16,
                    onRequestClose: () => {
                        h(!1), c(!1)
                    },
                    renderPopout: e => (0, a.jsx)(o, {
                        isHovered: _,
                        onFocus: () => c(!0),
                        onMouseEnter: p,
                        onMouseLeave: g,
                        renderPopout: t,
                        ...e
                    }),
                    children: e => {
                        let {
                            onClick: t,
                            onKeyDown: l
                        } = e;
                        return (0, a.jsx)(a.Fragment, {
                            children: n({
                                onClick: e => S(() => t(e)),
                                onKeyDown: e => {
                                    var t, n;
                                    return t = e, n = l, void((t.key === r.KeyboardKeysUpdated.ENTER || t.key === r.KeyboardKeysUpdated.SPACE) && S(() => n(t)))
                                },
                                className: u.actionBarButton,
                                onMouseEnter: C,
                                onMouseLeave: g,
                                isActive: _
                            })
                        })
                    }
                })
            }