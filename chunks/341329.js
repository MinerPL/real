            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            }), n("222007");
            var a = n("803182"),
                l = n("811022"),
                s = n("95410"),
                u = n("913144"),
                d = n("404118"),
                r = n("819689"),
                o = n("115718"),
                c = n("689988"),
                f = n("408062"),
                p = n("619443"),
                m = n("582713"),
                _ = n("233069"),
                g = n("982108"),
                E = n("42203"),
                h = n("305961"),
                S = n("660478"),
                v = n("18494"),
                C = n("162771"),
                A = n("519841"),
                I = n("787336"),
                T = n("49111"),
                b = n("724210"),
                y = n("782340");
            let N = new l.default("MessageManager");

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    forceFetch: l,
                    isPreload: u,
                    jumpType: d,
                    skipLocalFetch: c,
                    logFailures: m
                } = e;
                if (null == n) {
                    m && N.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, b.isStaticChannelRoute)(n)) {
                    m && N.log("Skipping fetch because channelId is a static route");
                    return
                }
                let _ = E.default.getChannel(n);
                if ((null == _ ? void 0 : _.type) === T.ChannelTypes.GUILD_STORE || (null == _ ? void 0 : _.type) != null && T.ChannelTypesSets.GUILD_THREADS_ONLY.has(_.type)) {
                    m && N.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let g = f.default.getOrCreate(n);
                A.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && g.some(I.messageHasExpiredAttachmentUrl) && (N.log("Found expired attachment link, clearing messages"), f.default.clear(n), g = f.default.getOrCreate(n)), null != g.jumpTargetId && null == a && (g = g.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), f.default.commit(g)), null != g.focusTargetId && null == a && (g = g.mutate({
                    focusTargetId: null
                }), f.default.commit(g));
                let v = l;
                if (!u || p.default.isConnected() || g.loadingMore ? g.loadingMore || g.ready && !g.cached ? null != a ? v = !0 : m && N.log("Skipping fetch because no other conditions matched") : null == t || null != h.default.getGuild(t) ? v = !0 : m && N.log("Skipping fetch we are connected and have loaded messages") : v = !0, v) {
                    if (f.default.commit(g.mutate({
                            loadingMore: !0
                        })), null != a) r.default.jumpToMessage({
                        channelId: n,
                        messageId: a,
                        flash: !0,
                        isPreload: u,
                        skipLocalFetch: c,
                        jumpType: d
                    });
                    else if ((null == _ ? void 0 : _.isThread()) && function(e) {
                            if (S.default.hasOpenedThread(e)) return !1;
                            if (null == i) {
                                var t;
                                i = null !== (t = s.default.get(L, {})) && void 0 !== t ? t : {}
                            }
                            if (e in i) return !1;
                            i[e] = Date.now();
                            let n = Date.now() - 7776e6;
                            for (let e in i) i[e] < n && delete i[e];
                            return s.default.set(L, i), !0
                        }(n)) N.log("Jumping to start of thread ".concat(_.id)), r.default.fetchMessages({
                        channelId: n,
                        limit: T.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: u,
                        skipLocalFetch: c
                    });
                    else if ((null == _ ? void 0 : _.isThread()) && S.default.hasTrackedUnread(_.id) && !g.ready) {
                        let e = S.default.getTrackedAckMessageId(_.id);
                        N.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)), r.default.fetchMessages({
                            channelId: n,
                            limit: T.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: u,
                            skipLocalFetch: c
                        })
                    } else r.default.fetchMessages({
                        channelId: n,
                        limit: T.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: u,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let L = "viewedThreadIds";

            function M() {
                let e = v.default.getChannelId();
                if (null != e) {
                    let n = E.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, a.matchPath)(location.pathname, {
                            path: T.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        D({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), w(n.getGuildId(), n.id)
                    }
                }
            }

            function O() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = v.default.getChannelId();
                if (null != i) {
                    let a = E.default.getChannel(i);
                    null != a ? ((0, _.isTextChannel)(a.type) ? D({
                        guildId: a.getGuildId(),
                        channelId: a.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && N.log("Skipping fetch because the selected channel is not a text channel"), w(a.getGuildId(), a.id)) : n && N.log("Skipping fetch because channel is null")
                } else n && N.log("Skipping fetch because there is no selected channel")
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    jumpType: a
                } = e;
                D({
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    jumpType: a
                }), w(t, n)
            }

            function x(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                D({
                    guildId: t,
                    channelId: n
                })
            }

            function w(e, t) {
                let n = g.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let i = g.default.getCurrentSidebarMessageId(t);
                D({
                    guildId: e,
                    channelId: n,
                    messageId: i
                })
            }

            function P() {
                let e = v.default.getChannelId(),
                    t = C.default.getGuildId();
                if (null == t || null == e) return;
                let n = g.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== m.SidebarType.VIEW_CHANNEL && w(t, e)
            }

            function U(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: i
                } = e;
                i === T.CURRENT_APP_CONTEXT && (D({
                    guildId: t,
                    channelId: n
                }), w(t, n))
            }

            function k(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, i = t.guild_id;
                null != i && v.default.getChannelId(i) === t.id && D({
                    guildId: i,
                    channelId: t.id,
                    messageId: n
                })
            }

            function G(e) {
                let {
                    channelId: t
                } = e;
                r.default.fetchMessages({
                    channelId: t,
                    limit: T.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function F(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === T.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && d.default.show({
                        title: y.default.Messages.RATE_LIMITED,
                        body: y.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let V = {};

            function H(e) {
                var t;
                let {
                    channelId: n,
                    jump: i,
                    isStale: a,
                    isPreview: l = !1
                } = e;
                if (l) return;
                let s = null !== (t = V[n]) && void 0 !== t ? t : 0;
                if (Date.now() - s < 1e4) return;
                V[n] = Date.now();
                let u = v.default.getChannelId(),
                    d = g.default.getCurrentSidebarChannelId(u),
                    o = n === u || n === d;
                a && p.default.isConnected() && o && r.default.fetchMessages({
                    channelId: n,
                    limit: T.MAX_MESSAGES_PER_CHANNEL,
                    jump: i
                })
            }

            function B(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && u.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function j(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = v.default.getChannelId();
                if (null == n) return !1;
                r.default.fetchNewLocalMessages(n, T.MAX_MESSAGES_PER_CHANNEL)
            }
            class q extends c.default {
                _initialize() {
                    u.default.subscribe("CONNECTION_OPEN", M)
                }
                _terminate() {
                    u.default.unsubscribe("CONNECTION_OPEN", M)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = D, this.loadSelectedChannelIfNecessary = O, this.stores = new Map().set(g.default, P), this.actions = {
                        APP_STATE_UPDATE: j,
                        OVERLAY_INITIALIZE: M,
                        CHANNEL_SELECT: R,
                        VOICE_CHANNEL_SELECT: x,
                        THREAD_CREATE: k,
                        THREAD_LIST_SYNC: () => O(),
                        CHANNEL_CREATE: k,
                        CHANNEL_PRELOAD: U,
                        THREAD_CREATE_LOCAL: G,
                        GUILD_CREATE: () => O(),
                        MESSAGE_END_EDIT: F,
                        LOAD_MESSAGES_SUCCESS: H,
                        UPLOAD_FAIL: B,
                        CHANNEL_DELETE: () => O(),
                        THREAD_DELETE: () => O()
                    }
                }
            }
            var K = new q