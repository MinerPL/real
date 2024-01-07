            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("974667"),
                i = n("446674"),
                r = n("450911"),
                o = n("677315"),
                u = n("827298"),
                d = n("290886"),
                c = n("393414"),
                f = n("660478"),
                h = n("223383"),
                C = n("620193"),
                p = n("708402"),
                m = n("49111"),
                E = n("724210"),
                g = n("133335"),
                I = n("782340");

            function S(e) {
                let {
                    guild: t,
                    selected: n
                } = e, S = (0, s.useListItem)("home-tab-".concat(t.id)), {
                    showBadge: _
                } = o.GuildHomeBadgeExperiment.useExperiment({
                    location: "487e85_1"
                }, {
                    autoTrackExposure: !1
                });
                a.useEffect(() => {
                    o.GuildHomeBadgeExperiment.trackExposure({
                        location: "487e85_2"
                    })
                }, []);
                let N = (0, d.useCanSeeOnboardingHome)(t.id),
                    T = (0, i.useStateFromStores)([f.default], () => f.default.hasUnread(t.id, g.ReadStateTypes.GUILD_HOME) && _, [t.id, _]);
                return (0, l.jsx)(p.default, {
                    ...S,
                    renderIcon: e => N ? (0, l.jsx)(C.default, {
                        className: e
                    }) : (0, l.jsx)(h.default, {
                        className: e
                    }),
                    text: N ? I.default.Messages.SERVER_GUIDE : I.default.Messages.GUILD_HOME,
                    showUnread: T,
                    selected: n,
                    onMouseDown: function() {
                        r.default.preload(t.id, E.StaticChannelRoute.GUILD_HOME)
                    },
                    onClick: function() {
                        (0, u.ackGuildHome)(t.id), (0, c.transitionTo)(m.Routes.CHANNEL(t.id, E.StaticChannelRoute.GUILD_HOME))
                    }
                })
            }