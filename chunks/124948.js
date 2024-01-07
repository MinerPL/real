            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("49978"),
                u = n("560208"),
                o = n("42203"),
                d = n("26989");
            let c = new r.default(d.default.isMember, (e, t) => {
                s.default.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            });

            function _() {
                c.reset()
            }

            function E(e, t) {
                return c.request(e, t), !1
            }

            function f(e, t) {
                return t.forEach(t => {
                    let {
                        author: n,
                        mentions: i
                    } = t;
                    null != n && E(e, n.id), null == i || i.forEach(t => E(e, t.id))
                }), !1
            }

            function h(e) {
                let {
                    channelId: t,
                    messages: n
                } = e, i = o.default.getChannel(t);
                return null != i && null != i.guild_id && f(i.guild_id, n)
            }
            class p extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, d.default)
                }
                requestMember(e, t) {
                    E(e, t)
                }
            }
            p.displayName = "GuildMemberRequesterStore";
            var T = new p(s.default, {
                CONNECTION_CLOSED: _,
                CONNECTION_OPEN: _,
                CONNECTION_RESUMED: function() {
                    return c.requestUnacknowledged(), !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n,
                        notFound: i
                    } = e;
                    return n.forEach(e => {
                        c.acknowledge(t, e.user.id)
                    }), null != i && i.forEach(e => c.acknowledge(t, e)), !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        guildId: t,
                        messages: n
                    } = e;
                    return null != t && f(t, a.flatten(n))
                },
                LOCAL_MESSAGES_LOADED: h,
                LOAD_MESSAGES_SUCCESS: h,
                LOAD_MESSAGES_AROUND_SUCCESS: h,
                LOAD_PINNED_MESSAGES_SUCCESS: h,
                LOAD_RECENT_MENTIONS_SUCCESS: h,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e, i = (0, u.getMessagesFromGuildFeedFetch)(n);
                    return f(t, i)
                }
            })