            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("446674"),
                l = n("913144"),
                s = n("386451"),
                r = n("662285"),
                u = n("271938"),
                d = n("982108"),
                o = n("42203"),
                c = n("341542"),
                _ = n("26989"),
                f = n("305961"),
                h = n("945956"),
                E = n("27618"),
                g = n("18494"),
                A = n("162771"),
                m = n("49111");
            let T = new s.default((e, t) => {
                (null != f.default.getGuild(e) || c.default.isUnavailable(e)) && l.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    guildId: e,
                    subscriptions: t
                })
            });

            function S(e, t) {
                T.forEach(n => {
                    var a;
                    n !== A.default.getGuildId() && n !== h.default.getGuildId() && n !== (null === (a = o.default.getChannel(g.default.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && (null == i || i.guildId !== n) && (T.clearWithoutFlushing(n, e), t && l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: n,
                        subscriptions: T.get(n)
                    }))
                })
            }

            function p(e, t) {
                return T.subscribeToGuild(e), null != t && d.default.getSection(t) === m.ChannelSections.MEMBERS && M(e, t, s.DEFAULT_RANGES)
            }

            function M(e, t, n) {
                let i = o.default.getChannel(t);
                if (null == i) return !1;
                let a = i.getGuildId();
                return (a !== e && e === m.FAVORITES && T.subscribeToGuild(a), null != i && i.isThread()) ? i.type === m.ChannelTypes.ANNOUNCEMENT_THREAD ? T.subscribeChannel(a, i.parent_id, n) : !!i.isActiveThread() && T.subscribeThreadMemberList(a, t, g.default.getChannelId()) : T.subscribeChannel(a, t, n)
            }

            function v(e) {
                let {
                    type: t
                } = e;
                "CONNECTION_OPEN" === t && S(!0, !1);
                let n = A.default.getGuildId();
                null != n && p(n, g.default.getChannelId(n)), T.forEach(e => {
                    null == f.default.getGuild(e) ? T.clearWithoutFlushing(e, !0) : l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: T.get(e)
                    })
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, i = c.default.isUnavailable(t);
                return !i && p(t, n)
            }

            function N() {
                return p(A.default.getGuildId(), g.default.getChannelId())
            }

            function O() {
                let e = r.default.getSyncingWith();
                if (null == e) null != i && (T.unsubscribeUser(i.guildId, i.userId), i = null);
                else {
                    let {
                        userId: t
                    } = e;
                    if (null != i && i.userId === t || E.default.isFriend(t)) return !1;
                    let n = _.default.memberOf(t);
                    if (0 === n.length) return !1;
                    let [a] = n;
                    i = {
                        guildId: a,
                        userId: t
                    }, T.subscribeUser(a, t)
                }
                return !1
            }
            class R extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, A.default, g.default, h.default, u.default, d.default), this.syncWith([r.default], O), this.syncWith([d.default], N)
                }
                getSubscribedThreadIds() {
                    return T.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return T.isSubscribedToThreads(e)
                }
                isSubscribedToAnyGuildChannel(e) {
                    let t = T.get(e).channels;
                    return null != t && Object.keys(t).length > 0
                }
            }
            R.displayName = "GuildSubscriptionsStore";
            var I = new R(l.default, {
                CONNECTION_OPEN: v,
                CONNECTION_RESUMED: v,
                CONNECTION_CLOSED: function() {
                    S(!1, !1)
                },
                IDLE: function(e) {
                    let {
                        idle: t
                    } = e;
                    if (!t) return !1;
                    S(!1, !0)
                },
                LOGOUT: function() {
                    T.reset()
                },
                VOICE_CHANNEL_SELECT: C,
                CHANNEL_SELECT: C,
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.id === A.default.getGuildId() && N()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        e !== u.default.getId() && T.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        T.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ranges: i
                    } = e;
                    return M(t, n, i)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return T.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return p(t, n)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return t.isArchivedThread() ? T.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && g.default.getChannelId() === t.id && void T.subscribeThreadMemberList(t.guild_id, t.id, g.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return T.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: N
            })