            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("446674"),
                i = n("812204"),
                u = n("685665"),
                r = n("744568"),
                d = n("208021"),
                o = n("982108"),
                c = n("305961"),
                f = n("49111"),
                h = n("973033");

            function m(e) {
                let {
                    guildId: t
                } = e, n = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: m
                } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), S = (0, a.useStateFromStores)([o.default], () => o.default.getGuildSidebarState(t), [t]), g = s.useCallback(() => {
                    d.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != S && null != S ? (0, l.jsx)(m, {
                    children: (0, l.jsx)("div", {
                        className: h.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(r.default, {
                            userId: S.details.userId,
                            guildId: S.details.guildId,
                            onClose: g
                        })
                    })
                }) : null
            }