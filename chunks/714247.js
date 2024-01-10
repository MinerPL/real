            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("812204"),
                u = n("685665"),
                d = n("744568"),
                o = n("208021"),
                r = n("982108"),
                c = n("305961"),
                f = n("49111"),
                h = n("973033");

            function m(e) {
                let {
                    guildId: t
                } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: m
                } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), S = (0, s.useStateFromStores)([r.default], () => r.default.getGuildSidebarState(t), [t]), g = a.useCallback(() => {
                    o.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != S && null != S ? (0, l.jsx)(m, {
                    children: (0, l.jsx)("div", {
                        className: h.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(d.default, {
                            userId: S.details.userId,
                            guildId: S.details.guildId,
                            onClose: g
                        })
                    })
                }) : null
            }