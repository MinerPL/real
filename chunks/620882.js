            "use strict";
            n.r(t), n.d(t, {
                FavoriteAddedTooltip: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                o = n("120590"),
                u = n("77078"),
                d = n("986373"),
                c = n("49111"),
                f = n("782340"),
                h = n("45912"),
                C = n("455547"),
                p = n("805959");

            function m() {
                return (0, l.jsx)("div", {
                    className: i(C.row, C.rowGuildName),
                    children: (0, l.jsx)("span", {
                        className: i(C.guildNameText, C.guildNameTextLimitedSize),
                        children: f.default.Messages.FAVORITE_ADDED
                    })
                })
            }
            let E = a.memo(function(e) {
                let {
                    "aria-label": t = !1,
                    children: n
                } = e, s = function() {
                    let {
                        favoriteAdded: e,
                        clearFavoriteAdded: t
                    } = (0, d.useFavoriteAdded)();
                    return a.useEffect(() => {
                        if (e) {
                            let e = setTimeout(() => {
                                t()
                            }, 1500);
                            return () => {
                                t(), clearTimeout(e)
                            }
                        }
                    }, [e, t]), e
                }(), i = (0, r.useSpring)({
                    config: o.TOOLTIP_SPRING_CONFIG,
                    opacity: s ? 1 : 0
                });
                return (0, l.jsx)(u.Tooltip, {
                    forceOpen: s,
                    color: u.TooltipColors.GREEN,
                    hideOnClick: !0,
                    spacing: 20,
                    position: "right",
                    align: "center",
                    text: (0, l.jsx)(m, {}),
                    "aria-label": t,
                    tooltipClassName: p.listItemTooltip,
                    children: e => (0, l.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [(0, l.jsx)(r.animated.div, {
                            className: h.ring,
                            style: {
                                opacity: i.opacity
                            }
                        }), (0, l.jsx)("div", {
                            ...e,
                            onMouseEnter: c.NOOP,
                            onMouseLeave: c.NOOP,
                            children: n
                        })]
                    })
                })
            })