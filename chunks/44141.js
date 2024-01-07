            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                d = a("267363"),
                u = a("680986"),
                s = a("689275"),
                o = a("755624"),
                r = a("233069"),
                c = a("245997"),
                f = a("660478"),
                I = a("49111"),
                p = a("782340");

            function _(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        a = (0, l.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let a = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (a) return !0;
                                let n = new Set(t[e.id].map(e => e.channel.id)),
                                    l = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in l)
                                    if (n.has(e)) {
                                        for (let t in l[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : a
                }(e);
                return (0, n.jsx)(i.MenuItem, {
                    id: "mark-channel-read",
                    label: p.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, d.ackChannel)(e)
                    },
                    disabled: !t
                })
            }