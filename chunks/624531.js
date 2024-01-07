            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("5367"),
                r = n("100835"),
                o = n("393027"),
                u = n("341542"),
                d = n("952451"),
                c = n("305961"),
                f = n("471671"),
                h = n("480381"),
                C = n("21841"),
                p = n("198442"),
                m = n("321308"),
                E = a.memo(function(e) {
                    let {
                        guildNode: t,
                        lowerBadge: n
                    } = e, E = t.id, g = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(E)), I = (0, i.useCurrentUserGuildBadgeStatus)(E), S = (0, s.useStateFromStores)([f.default], () => f.default.isFocused()), _ = (0, s.useStateFromStores)([u.default], () => u.default.isUnavailable(E)), N = (0, o.default)(e => e.guildId), T = (0, C.default)(E), {
                        badge: A,
                        unread: L
                    } = (0, s.useStateFromStoresObject)([d.default], () => ({
                        badge: d.default.getMentionCount(E),
                        unread: d.default.hasUnread(E)
                    })), v = (0, r.useShouldShowInvitesDisabledNotif)(g) && 0 === A, x = a.useMemo(() => null != n ? n : v ? (0, l.jsx)("div", {
                        className: m.pauseBackground,
                        children: (0, l.jsx)(h.default, {
                            className: m.pause,
                            width: 10,
                            height: 10
                        })
                    }) : null, [n, v]);
                    return (0, l.jsx)(p.default, {
                        ...e,
                        guild: g,
                        unavailable: _,
                        animatable: S,
                        selected: N === E,
                        badge: A,
                        lowerBadge: x,
                        unread: L,
                        mediaState: T,
                        guildJoinRequestStatus: I
                    })
                })