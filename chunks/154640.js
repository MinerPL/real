            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("15542"),
                o = n("458960"),
                u = n("355262"),
                d = n("401642"),
                c = n("49111"),
                E = n("721578"),
                f = e => {
                    let {
                        userId: t,
                        children: n,
                        isLast: i,
                        className: f
                    } = e, [_, h] = s.useState(!1), C = s.useCallback(() => {
                        (0, d.openUserProfileModal)({
                            userId: t,
                            analyticsLocation: {
                                section: c.AnalyticsSections.FAMILY_CENTER
                            }
                        })
                    }, [t]), T = () => {
                        h(!0)
                    }, I = () => {
                        h(!1)
                    };
                    return (0, a.jsx)(u.ListNavigatorItem, {
                        id: t,
                        children: e => (0, a.jsx)(r.FocusRing, {
                            offset: {
                                left: -8,
                                right: -8
                            },
                            children: (0, a.jsx)(o.default.div, {
                                style: {
                                    opacity: 1
                                },
                                className: l(E.rowItem, f, {
                                    [E.last]: i,
                                    [E.active]: _
                                }),
                                onMouseEnter: T,
                                onMouseLeave: I,
                                onClick: C,
                                ...e,
                                children: n(_)
                            })
                        })
                    })
                }