            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                u = n("913144"),
                a = n("49978"),
                o = n("560208"),
                d = n("42203"),
                s = n("26989");
            let E = new a.default(s.default.isMember, (e, t) => {
                u.default.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            });

            function _() {
                E.reset()
            }

            function c(e, t) {
                return E.request(e, t), !1
            }

            function I(e, t) {
                return t.forEach(t => {
                    let {
                        author: n,
                        mentions: r
                    } = t;
                    null != n && c(e, n.id), null == r || r.forEach(t => c(e, t.id))
                }), !1
            }

            function S(e) {
                let {
                    channelId: t,
                    messages: n
                } = e, r = d.default.getChannel(t);
                return null != r && null != r.guild_id && I(r.guild_id, n)
            }
            class T extends l.default.Store {
                initialize() {
                    this.waitFor(d.default, s.default)
                }
                requestMember(e, t) {
                    c(e, t)
                }
            }
            T.displayName = "GuildMemberRequesterStore";
            var f = new T(u.default, {
                CONNECTION_CLOSED: _,
                CONNECTION_OPEN: _,
                CONNECTION_RESUMED: function() {
                    return E.requestUnacknowledged(), !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: n,
                        notFound: r
                    } = e;
                    return n.forEach(e => {
                        E.acknowledge(t, e.user.id)
                    }), null != r && r.forEach(e => E.acknowledge(t, e)), !1
                },
                SEARCH_FINISH: function(e) {
                    let {
                        guildId: t,
                        messages: n
                    } = e;
                    return null != t && I(t, i.flatten(n))
                },
                LOCAL_MESSAGES_LOADED: S,
                LOAD_MESSAGES_SUCCESS: S,
                LOAD_MESSAGES_AROUND_SUCCESS: S,
                LOAD_PINNED_MESSAGES_SUCCESS: S,
                LOAD_RECENT_MENTIONS_SUCCESS: S,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        data: n
                    } = e, r = (0, o.getMessagesFromGuildFeedFetch)(n);
                    return I(t, r)
                }
            })