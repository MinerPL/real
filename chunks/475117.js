            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("917351"),
                s = a.n(n),
                i = a("446674"),
                d = a("77078"),
                r = a("537325"),
                u = a("191542"),
                o = a("697218"),
                c = a("449008"),
                f = a("299039"),
                m = a("558130"),
                h = a("154925"),
                E = a("49111"),
                g = a("782340"),
                I = a("62082");

            function _(e) {
                let {
                    guildId: t,
                    channel: a,
                    trackChannelClick: n
                } = e, _ = (0, i.useStateFromStoresArray)([m.default], () => {
                    var e;
                    return null !== (e = m.default.getChannelMessageData(a.id)) && void 0 !== e ? e : []
                }), x = s.uniq(s.map(_, "userId")), v = (0, i.useStateFromStoresArray)([o.default], () => x.map(e => o.default.getUser(e))), S = (0, i.useStateFromStores)([u.default], () => {
                    let e = u.default.getTypingUsers(a.id);
                    return Object.keys(e).length > 0
                }, [a.id]), C = _.length < m.MAX_STORED_MESSAGES ? g.default.Messages.ACTIVE_CHANNELS_FEW_MESSAGES.format({
                    count: _.length
                }) : g.default.Messages.ACTIVE_CHANNELS_MANY_MESSAGES, N = S ? (0, l.jsx)("div", {
                    className: I.typingIndicator,
                    children: (0, l.jsx)(d.Dots, {
                        className: I.ellipsis,
                        dotRadius: 2,
                        themed: !0
                    })
                }) : null;
                return (0, l.jsx)(h.ActiveChannelBase, {
                    guildId: t,
                    channel: a,
                    usersInSummary: v.filter(c.isNotNullish),
                    text: C,
                    activityIndicator: N,
                    onChannelClick: () => {
                        n(a), (0, r.default)(E.Routes.CHANNEL(a.guild_id, a.id, f.default.fromTimestamp(Date.now())))
                    }
                })
            }