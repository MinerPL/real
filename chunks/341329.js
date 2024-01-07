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
                d = n("913144"),
                u = n("404118"),
                r = n("819689"),
                o = n("115718"),
                c = n("689988"),
                f = n("408062"),
                g = n("619443"),
                E = n("582713"),
                m = n("233069"),
                _ = n("982108"),
                h = n("42203"),
                S = n("305961"),
                p = n("660478"),
                T = n("18494"),
                A = n("162771"),
                I = n("519841"),
                C = n("787336"),
                N = n("49111"),
                v = n("724210"),
                D = n("782340");
            let y = new l.default("MessageManager");

            function b(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    forceFetch: l,
                    isPreload: d,
                    jumpType: u,
                    skipLocalFetch: c,
                    logFailures: E
                } = e;
                if (null == n) {
                    E && y.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, v.isStaticChannelRoute)(n)) {
                    E && y.log("Skipping fetch because channelId is a static route");
                    return
                }
                let m = h.default.getChannel(n);
                if ((null == m ? void 0 : m.type) === N.ChannelTypes.GUILD_STORE || (null == m ? void 0 : m.type) != null && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(m.type)) {
                    E && y.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let _ = f.default.getOrCreate(n);
                I.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && _.some(C.messageHasExpiredAttachmentUrl) && (y.log("Found expired attachment link, clearing messages"), f.default.clear(n), _ = f.default.getOrCreate(n)), null != _.jumpTargetId && null == a && (_ = _.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), f.default.commit(_)), null != _.focusTargetId && null == a && (_ = _.mutate({
                    focusTargetId: null
                }), f.default.commit(_));
                let T = l;
                if (!d || g.default.isConnected() || _.loadingMore ? _.loadingMore || _.ready && !_.cached ? null != a ? T = !0 : E && y.log("Skipping fetch because no other conditions matched") : null == t || null != S.default.getGuild(t) ? T = !0 : E && y.log("Skipping fetch we are connected and have loaded messages") : T = !0, T) {
                    if (f.default.commit(_.mutate({
                            loadingMore: !0
                        })), null != a) r.default.jumpToMessage({
                        channelId: n,
                        messageId: a,
                        flash: !0,
                        isPreload: d,
                        skipLocalFetch: c,
                        jumpType: u
                    });
                    else if ((null == m ? void 0 : m.isThread()) && function(e) {
                            if (p.default.hasOpenedThread(e)) return !1;
                            if (null == i) {
                                var t;
                                i = null !== (t = s.default.get(M, {})) && void 0 !== t ? t : {}
                            }
                            if (e in i) return !1;
                            i[e] = Date.now();
                            let n = Date.now() - 7776e6;
                            for (let e in i) i[e] < n && delete i[e];
                            return s.default.set(M, i), !0
                        }(n)) y.log("Jumping to start of thread ".concat(m.id)), r.default.fetchMessages({
                        channelId: n,
                        limit: N.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: d,
                        skipLocalFetch: c
                    });
                    else if ((null == m ? void 0 : m.isThread()) && p.default.hasTrackedUnread(m.id) && !_.ready) {
                        let e = p.default.getTrackedAckMessageId(m.id);
                        y.log("Jumping to most recent message in thread ".concat(m.id, " - ").concat(e)), r.default.fetchMessages({
                            channelId: n,
                            limit: N.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: d,
                            skipLocalFetch: c
                        })
                    } else r.default.fetchMessages({
                        channelId: n,
                        limit: N.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: d,
                        skipLocalFetch: c,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let M = "viewedThreadIds";

            function O() {
                let e = T.default.getChannelId();
                if (null != e) {
                    let n = h.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, a.matchPath)(location.pathname, {
                            path: N.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        b({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), U(n.getGuildId(), n.id)
                    }
                }
            }

            function L() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = T.default.getChannelId();
                if (null != i) {
                    let a = h.default.getChannel(i);
                    null != a ? ((0, m.isTextChannel)(a.type) ? b({
                        guildId: a.getGuildId(),
                        channelId: a.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && y.log("Skipping fetch because the selected channel is not a text channel"), U(a.getGuildId(), a.id)) : n && y.log("Skipping fetch because channel is null")
                } else n && y.log("Skipping fetch because there is no selected channel")
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    jumpType: a
                } = e;
                b({
                    guildId: t,
                    channelId: n,
                    messageId: i,
                    jumpType: a
                }), U(t, n)
            }

            function G(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                b({
                    guildId: t,
                    channelId: n
                })
            }

            function U(e, t) {
                let n = _.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let i = _.default.getCurrentSidebarMessageId(t);
                b({
                    guildId: e,
                    channelId: n,
                    messageId: i
                })
            }

            function k() {
                let e = T.default.getChannelId(),
                    t = A.default.getGuildId();
                if (null == t || null == e) return;
                let n = _.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && U(t, e)
            }

            function P(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: i
                } = e;
                i === N.CURRENT_APP_CONTEXT && (b({
                    guildId: t,
                    channelId: n
                }), U(t, n))
            }

            function F(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, i = t.guild_id;
                null != i && T.default.getChannelId(i) === t.id && b({
                    guildId: i,
                    channelId: t.id,
                    messageId: n
                })
            }

            function w(e) {
                let {
                    channelId: t
                } = e;
                r.default.fetchMessages({
                    channelId: t,
                    limit: N.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function x(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === N.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && u.default.show({
                        title: D.default.Messages.RATE_LIMITED,
                        body: D.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
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
                let d = T.default.getChannelId(),
                    u = _.default.getCurrentSidebarChannelId(d),
                    o = n === d || n === u;
                a && g.default.isConnected() && o && r.default.fetchMessages({
                    channelId: n,
                    limit: N.MAX_MESSAGES_PER_CHANNEL,
                    jump: i
                })
            }

            function B(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && d.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function q(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = T.default.getChannelId();
                if (null == n) return !1;
                r.default.fetchNewLocalMessages(n, N.MAX_MESSAGES_PER_CHANNEL)
            }
            class j extends c.default {
                _initialize() {
                    d.default.subscribe("CONNECTION_OPEN", O)
                }
                _terminate() {
                    d.default.unsubscribe("CONNECTION_OPEN", O)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = b, this.loadSelectedChannelIfNecessary = L, this.stores = new Map().set(_.default, k), this.actions = {
                        APP_STATE_UPDATE: q,
                        OVERLAY_INITIALIZE: O,
                        CHANNEL_SELECT: R,
                        VOICE_CHANNEL_SELECT: G,
                        THREAD_CREATE: F,
                        THREAD_LIST_SYNC: () => L(),
                        CHANNEL_CREATE: F,
                        CHANNEL_PRELOAD: P,
                        THREAD_CREATE_LOCAL: w,
                        GUILD_CREATE: () => L(),
                        MESSAGE_END_EDIT: x,
                        LOAD_MESSAGES_SUCCESS: H,
                        UPLOAD_FAIL: B,
                        CHANNEL_DELETE: () => L(),
                        THREAD_DELETE: () => L()
                    }
                }
            }
            var K = new j