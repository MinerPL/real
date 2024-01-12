            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                s = n("386451"),
                r = n("662285"),
                u = n("271938"),
                d = n("19766"),
                o = n("982108"),
                c = n("42203"),
                _ = n("341542"),
                f = n("26989"),
                h = n("305961"),
                E = n("945956"),
                g = n("27618"),
                m = n("18494"),
                A = n("162771"),
                T = n("49111");
            let p = new s.default((e, t) => {
                (null != h.default.getGuild(e) || _.default.isUnavailable(e)) && a.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    guildId: e,
                    subscriptions: t
                })
            });

            function S(e, t) {
                p.forEach(n => {
                    var l;
                    n !== A.default.getGuildId() && n !== E.default.getGuildId() && n !== (null === (l = c.default.getChannel(m.default.getChannelId())) || void 0 === l ? void 0 : l.getGuildId()) && (null == i || i.guildId !== n) && (p.clearWithoutFlushing(n, e), t && a.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: n,
                        subscriptions: p.get(n)
                    }))
                })
            }

            function M(e, t) {
                return p.subscribeToGuild(e), null != t && o.default.getSection(t) === T.ChannelSections.MEMBERS && v(e, t, s.DEFAULT_RANGES)
            }

            function v(e, t, n) {
                if (t === d.EVERYONE_CHANNEL_ID) return p.subscribeChannel(e, t, n);
                let i = c.default.getChannel(t);
                if (null == i) return !1;
                let l = i.getGuildId();
                return (l !== e && e === T.FAVORITES && p.subscribeToGuild(l), null != i && i.isThread()) ? i.type === T.ChannelTypes.ANNOUNCEMENT_THREAD ? p.subscribeChannel(l, i.parent_id, n) : !!i.isActiveThread() && p.subscribeThreadMemberList(l, t, m.default.getChannelId()) : p.subscribeChannel(l, t, n)
            }

            function N(e) {
                let {
                    type: t
                } = e;
                "CONNECTION_OPEN" === t && S(!0, !1);
                let n = A.default.getGuildId();
                null != n && M(n, m.default.getChannelId(n)), p.forEach(e => {
                    null == h.default.getGuild(e) ? p.clearWithoutFlushing(e, !0) : a.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: p.get(e)
                    })
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, i = _.default.isUnavailable(t);
                return !i && M(t, n)
            }

            function O() {
                return M(A.default.getGuildId(), m.default.getChannelId())
            }

            function R() {
                let e = r.default.getSyncingWith();
                if (null == e) null != i && (p.unsubscribeUser(i.guildId, i.userId), i = null);
                else {
                    let {
                        userId: t
                    } = e;
                    if (null != i && i.userId === t || g.default.isFriend(t)) return !1;
                    let n = f.default.memberOf(t);
                    if (0 === n.length) return !1;
                    let [l] = n;
                    i = {
                        guildId: l,
                        userId: t
                    }, p.subscribeUser(l, t)
                }
                return !1
            }
            class I extends l.default.Store {
                initialize() {
                    this.waitFor(c.default, h.default, A.default, m.default, E.default, u.default, o.default), this.syncWith([r.default], R), this.syncWith([o.default], O)
                }
                getSubscribedThreadIds() {
                    return p.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return p.isSubscribedToThreads(e)
                }
                isSubscribedToAnyGuildChannel(e) {
                    let t = p.get(e).channels;
                    return null != t && Object.keys(t).length > 0
                }
            }
            I.displayName = "GuildSubscriptionsStore";
            var D = new I(a.default, {
                CONNECTION_OPEN: N,
                CONNECTION_RESUMED: N,
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
                    p.reset()
                },
                VOICE_CHANNEL_SELECT: C,
                CHANNEL_SELECT: C,
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.id === A.default.getGuildId() && O()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    p.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        e !== u.default.getId() && p.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        p.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ranges: i
                    } = e;
                    return v(t, n, i)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return p.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return M(t, n)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return t.isArchivedThread() ? p.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && m.default.getChannelId() === t.id && void p.subscribeThreadMemberList(t.guild_id, t.id, m.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return p.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: O
            })