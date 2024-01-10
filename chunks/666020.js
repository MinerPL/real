            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return s
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            }), n("424973");
            var i = n("913144"),
                a = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: r
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
                }
                let o = [];

                function d(e) {
                    let t = e + (a.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let c = u(.5 * l),
                    E = u(i, -c),
                    f = u(i + l, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= f;) E = d(E);
                s(t, n, o)
            }