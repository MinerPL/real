            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("272030"),
                i = n("982527"),
                r = n("5367"),
                o = n("162771"),
                u = n("471671"),
                d = n("198442"),
                c = n("255991"),
                f = n("49111");

            function h(e, t) {
                (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("51707").then(n.bind(n, "51707"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        guild: t
                    })
                })
            }

            function C(e) {
                let {
                    guildNode: t
                } = e, n = t.id, s = (0, r.useCurrentUserGuildBadgeStatus)(n), C = (0, a.useStateFromStores)([i.default], () => i.default.getJoinRequestGuild(n), [n]), p = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), m = (0, a.useStateFromStores)([o.default], () => o.default.getGuildId());
                return null == C ? null : (0, l.jsx)(d.default, {
                    guildNode: t,
                    guild: C,
                    animatable: p,
                    draggable: !1,
                    selected: n === m,
                    preloadOnClick: !1,
                    contextMenu: h,
                    lowerBadge: null != s ? (0, c.renderGuildJoinRequestBadge)({
                        guildJoinRequestStatus: s
                    }) : void 0,
                    route: f.Routes.GUILD_MEMBER_VERIFICATION(n)
                })
            }