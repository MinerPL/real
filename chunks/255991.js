            "use strict";
            n.r(t), n.d(t, {
                renderMentionBadge: function() {
                    return N
                },
                renderUnavailableBadge: function() {
                    return T
                },
                renderMediaBadge: function() {
                    return A
                },
                renderGuildJoinRequestBadge: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("449918"),
                r = n("567054"),
                o = n("104359"),
                u = n("943232"),
                d = n("437825"),
                c = n("36694"),
                f = n("945330"),
                h = n("841811"),
                C = n("267675"),
                p = n("987772"),
                m = n("82636"),
                E = n("368121"),
                g = n("228427"),
                I = n("956089"),
                S = n("49111"),
                _ = n("823660");

            function N(e, t) {
                return (0, l.jsx)(I.NumberBadge, {
                    count: e,
                    color: t
                })
            }

            function T() {
                return (0, l.jsx)(I.IconBadge, {
                    icon: o.default,
                    disableColor: !0,
                    className: _.unavailableBadge
                })
            }

            function A(e) {
                let t, {
                    audio: n,
                    video: l,
                    screenshare: a,
                    isCurrentUserConnected: s,
                    liveStage: i,
                    activeEvent: r,
                    activity: o
                } = e;
                if (r) t = u.default;
                else if (i) t = g.default;
                else if (o) t = m.default;
                else if (a) t = C.default;
                else if (l) t = d.default;
                else {
                    if (!n) return null;
                    t = E.default
                }
                return v({
                    icon: t,
                    isCurrentUserConnected: s
                })
            }

            function L(e) {
                let {
                    guildJoinRequestStatus: t
                } = e, [n, l] = function(e) {
                    switch (e) {
                        case r.GuildJoinRequestApplicationStatuses.SUBMITTED:
                            return [void 0, h.default];
                        case r.GuildJoinRequestApplicationStatuses.REJECTED:
                            return [S.Color.RED_400, f.default];
                        case r.GuildJoinRequestApplicationStatuses.APPROVED:
                            return [S.Color.GREEN_360, c.default];
                        default:
                            return [void 0, p.default]
                    }
                }(t);
                return v({
                    icon: l,
                    color: n
                })
            }

            function v(e) {
                let {
                    icon: t,
                    color: n,
                    isCurrentUserConnected: a
                } = e, r = null == n ? {
                    disableColor: !0
                } : {
                    color: (0, i.getColor)(n)
                };
                return (0, l.jsx)(I.IconBadge, {
                    icon: t,
                    className: s(_.iconBadge, {
                        [_.isCurrentUserConnected]: a
                    }),
                    ...r
                })
            }