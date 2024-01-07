            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("862337"),
                o = s("77078"),
                d = s("461380"),
                u = s("926633"),
                c = s("782340"),
                E = s("809102"),
                _ = function(e) {
                    let {
                        items: t,
                        carouselClassName: s,
                        paginationCaretClassName: l,
                        intervalBetweenAutomaticItemRotations: _,
                        renderItem: T
                    } = e, I = n.useMemo(() => new r.Interval, []), [S, N] = n.useState(u.SlideDirection.LEFT), [g, f] = n.useState(0), [A, L] = n.useState(!1), [m, C] = n.useState(!1), O = n.useCallback((e, t) => {
                        f(s => {
                            let a = s + t;
                            return a < 0 ? a = e.length - 1 : a > e.length - 1 && (a = 0), a
                        })
                    }, [f]), h = n.useCallback(() => {
                        !m && O(t, 1)
                    }, [O, t, m]), R = n.useCallback(() => {
                        !m && O(t, -1)
                    }, [O, t, m]);
                    return n.useEffect(() => {
                        null != _ && (A ? A && I.stop() : I.start(_, h))
                    }, [A, I, _, h]), (0, a.jsxs)("div", {
                        className: E.root,
                        onMouseEnter: () => L(!0),
                        onMouseLeave: () => L(!1),
                        children: [(0, a.jsx)(o.Clickable, {
                            className: i(E.carouselCaret, l),
                            onClick: R,
                            onMouseEnter: () => N(u.SlideDirection.RIGHT),
                            ignoreKeyPress: m,
                            children: (0, a.jsx)(d.default, {
                                direction: d.default.Directions.LEFT,
                                height: 48,
                                width: 48,
                                "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_PREVIOUS_CARD_ARIA_LABEL
                            })
                        }), (0, a.jsx)(u.default, {
                            step: g,
                            direction: S,
                            onAnimationStart: () => C(!0),
                            onAnimationEnd: () => C(!1),
                            className: i(E.carousel, s),
                            children: T(t[g])
                        }), (0, a.jsx)(o.Clickable, {
                            className: i(E.carouselCaret, l),
                            onClick: h,
                            onMouseEnter: () => N(u.SlideDirection.LEFT),
                            ignoreKeyPress: m,
                            children: (0, a.jsx)(d.default, {
                                direction: d.default.Directions.RIGHT,
                                height: 48,
                                width: 48,
                                "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_NEXT_CARD_ARIA_LABEL
                            })
                        })]
                    })
                }