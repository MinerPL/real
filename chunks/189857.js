            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_SOUND: function() {
                    return B
                },
                MESSAGE_SOUND_VOLUME: function() {
                    return V
                }
            }), n("424973");
            var l = n("316693"),
                a = n("446674"),
                s = n("95410"),
                i = n("913144"),
                r = n("450911"),
                o = n("255397"),
                u = n("851387"),
                d = n("193990"),
                c = n("987317"),
                f = n("679653"),
                h = n("680986"),
                C = n("374021"),
                p = n("288518"),
                m = n("393414"),
                E = n("144491"),
                g = n("716214"),
                I = n("834052"),
                S = n("967241"),
                _ = n("42203"),
                N = n("305961"),
                T = n("385649"),
                A = n("957255"),
                L = n("27618"),
                v = n("18494"),
                x = n("101125"),
                R = n("102985"),
                M = n("697218"),
                O = n("800762"),
                y = n("387111"),
                D = n("189771"),
                b = n("566673"),
                j = n("773336"),
                G = n("709681"),
                U = n("158998"),
                P = n("49111"),
                w = n("745049"),
                F = n("782340");
            let B = "message1",
                V = .4,
                H = "discord_dismissed_notification_shown",
                k = document.hasFocus(),
                Y = null,
                K = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
                W = new class {
                    track(e, t) {
                        let n = this._channels[e];
                        for (null == n && (n = [], this._channels[e] = n), n.push(t); n.length > 1;) {
                            let e = n.shift();
                            null != e && null != e.close && e.close()
                        }
                    }
                    clearChannel(e) {
                        let t = this._channels[e];
                        null != t && (delete this._channels[e], t.forEach(e => e.close()))
                    }
                    constructor() {
                        this._channels = {}
                    }
                };

            function Z() {
                return T.default.getDesktopType() === P.DesktopNotificationTypes.NEVER || x.default.getStatus() === P.StatusTypes.DND || !1
            }

            function z(e) {
                let t = O.default.getVoiceStateForChannel(e);
                return null != t
            }
            class X extends a.default.Store {
                initialize() {
                    this.waitFor(M.default, _.default, T.default, N.default, I.default, L.default, A.default, O.default, p.default)
                }
            }
            X.displayName = "NotificationStore", new X(i.default, __OVERLAY__ ? {} : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t
                    } = e;
                    t === P.NotificationPermissionTypes.ENABLED && !j.isPlatformEmbedded && b.default.showNotification(n("348044"), F.default.Messages.NOTIFICATION_TITLE_DISCORD, F.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
                        notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
                    }, {
                        omitViewTracking: !0,
                        sound: B,
                        volume: V,
                        tag: "hello",
                        onClick: () => {
                            window.focus()
                        }
                    })
                },
                NOTIFICATION_CREATE: function(e) {
                    let {
                        icon: t,
                        title: n,
                        body: l,
                        trackingProps: a,
                        options: s
                    } = e;
                    return !Z() && (b.default.showNotification(t, n, l, a, s), !1)
                },
                WINDOW_FOCUS: function(e) {
                    if (k = e.focused) {
                        let e = v.default.getChannelId();
                        null != e && W.clearChannel(e)
                    }
                },
                MESSAGE_CREATE: function(e) {
                    var t, l;
                    let {
                        channelId: a,
                        message: s,
                        optimistic: r
                    } = e;
                    if (r) return !1;
                    let u = _.default.getChannel(a),
                        c = M.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
                    if (null == u || null == c || u.isBroadcastChannel()) return !1;
                    let f = (0, D.shouldNotify)(s, a, !k),
                        h = T.default.getNotifyMessagesInSelectedChannel(),
                        C = h && (0, D.shouldNotifyForSelectedChannel)(s, a);
                    if (!f && !C) return !1;
                    let p = !T.default.isSoundDisabled(B);
                    if (C && (p && G.playSound("message3", .4), !k) || !f) return !1;
                    let m = n("860957").default,
                        g = n("901165").default;
                    if (null != m.getFocusedPID() && g.getTextChatNotificationMode() === P.OverlayNotificationTextChatTypes.ENABLED && !R.default.disableNotifications) return !1;
                    let {
                        icon: I,
                        title: S,
                        body: N
                    } = (0, D.makeTextChatNotification)(u, s, c);
                    if (i.default.dispatch({
                            type: "RPC_NOTIFICATION_CREATE",
                            channelId: u.id,
                            message: s,
                            icon: I,
                            title: S,
                            body: N
                        }), T.default.getDesktopType() === P.DesktopNotificationTypes.NEVER) return p && G.playSound(B, V), !1;
                    let A = b.default.showNotification(I, S, N, {
                        notif_type: "MESSAGE_CREATE",
                        notif_user_id: null === (l = s.author) || void 0 === l ? void 0 : l.id,
                        message_id: s.id,
                        message_type: s.type,
                        channel_id: u.id,
                        channel_type: u.type,
                        guild_id: u.guild_id
                    }, {
                        omitViewTracking: !0,
                        tag: s.id,
                        sound: p ? B : void 0,
                        volume: V,
                        onClick() {
                            (0, E.transitionToChannel)(u.id), (u.type === P.ChannelTypes.GUILD_VOICE || u.type === P.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(u.id, !0), d.default.clickedNotification()
                        }
                    });
                    null != A && W.track(u.id, A)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && W.clearChannel(t), !1
                },
                MESSAGE_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return W.clearChannel(t), !1
                },
                ACTIVITY_START: function(e) {
                    let {
                        userId: t,
                        activity: n
                    } = e;
                    if (Z()) return !1;
                    if (n.type === P.ActivityTypes.PLAYING) {
                        let e = M.default.getUser(t);
                        if (null == e) return !1;
                        let l = U.default.getName(e),
                            a = n.name,
                            s = e.getAvatarURL(void 0, 128),
                            i = F.default.Messages.NOTIFICATION_TITLE_START_GAME,
                            o = F.default.Messages.NOTIFICATION_BODY_START_GAME.format({
                                username: l,
                                gameName: a
                            });
                        return b.default.showNotification(s, i, o, {
                            notif_type: "ACTIVITY_START",
                            activity_type: P.ActivityTypes.PLAYING,
                            notif_user_id: t,
                            activity_name: a
                        }, {
                            sound: "message2",
                            playSoundIfDisabled: !1,
                            volume: .4,
                            onClick() {
                                r.default.openPrivateChannel(t)
                            }
                        }), !1
                    }
                    return !1
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    if (Z()) return;
                    let n = M.default.getCurrentUser();
                    if (null == n) return;
                    let l = t.find(e => e.userId === n.id);
                    if (null == l) return;
                    let {
                        channelId: a,
                        guildId: s,
                        suppress: i,
                        requestToSpeakTimestamp: r
                    } = l;
                    if (null == a || null == s || !(!i && null != r)) return;
                    let o = N.default.getGuild(s),
                        u = _.default.getChannel(a),
                        d = I.default.getStageInstanceByChannel(a);
                    null != o && null != u && null != d && b.default.showNotification(o.getIconURL(128), u.name, F.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, f.computeChannelName)(u, M.default, L.default),
                        channelTopic: null == d ? void 0 : d.topic
                    }), {
                        notif_type: "Stage Speak Invite"
                    }, {})
                },
                STAGE_INSTANCE_UPDATE: function(e) {
                    let {
                        instance: t
                    } = e;
                    if (Z() || !t.send_start_notification || z(t.channel_id)) return !1;
                    let n = M.default.getCurrentUser(),
                        a = N.default.getGuild(t.guild_id),
                        s = _.default.getChannel(t.channel_id),
                        i = M.default.getUser(t.host_id);
                    if (null == n || null == s || null == a || null == i || !(0, D.shouldNotifyBase)(n, i, s) || !A.default.can(l.default.combine(P.Permissions.CONNECT, P.Permissions.VIEW_CHANNEL), s)) return !1;
                    b.default.showNotification(a.getIconURL(128), F.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: a.name
                    }), F.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                        username: y.default.getName(a.id, s.id, i),
                        topic: t.topic
                    }), {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: a.id,
                        channel_id: s.id
                    }, {
                        onClick() {
                            (0, g.connectAndOpen)(s)
                        }
                    })
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    if (Z() || null == t.notification_type) return !1;
                    t.notification_type === w.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === w.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === w.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
                        if (Z()) return !1;
                        let t = e.channel_id;
                        if (null == t || z(t)) return !1;
                        let n = M.default.getCurrentUser(),
                            a = N.default.getGuild(e.guild_id),
                            s = _.default.getChannel(e.channel_id),
                            i = M.default.getUser(e.host_id);
                        if (null == n || null == s || null == a || null == i || !A.default.can(l.default.combine(P.Permissions.CONNECT, P.Permissions.VIEW_CHANNEL), s)) return !1;
                        b.default.showNotification(a.getIconURL(128), F.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
                            guildName: a.name
                        }), F.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                            topic: e.name,
                            username: y.default.getName(a.id, s.id, i)
                        }), {
                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guild_id: a.id,
                            channel_id: s.id
                        }, {
                            onClick() {
                                e.entity_type === w.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, g.connectAndOpen)(s), e.entity_type === w.GuildScheduledEventEntityTypes.VOICE && c.default.selectVoiceChannel(s.id)
                            }
                        })
                    }(t) : t.entity_type === w.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
                        if (Z()) return !1;
                        let t = M.default.getCurrentUser(),
                            n = N.default.getGuild(e.guild_id);
                        if (null == t || null == n) return !1;
                        b.default.showNotification(n.getIconURL(128), F.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
                            guildName: n.name
                        }), F.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
                            topic: e.name
                        }), {
                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guild_id: n.id
                        }, {
                            onClick() {
                                u.default.transitionToGuildSync(e.guild_id), (0, C.openGuildEventDetails)({
                                    eventId: e.id
                                })
                            }
                        })
                    }(t))
                },
                THREAD_CREATE: function(e) {
                    var t;
                    let {
                        channel: n,
                        isNewlyCreated: l
                    } = e;
                    if (Z()) return !1;
                    let a = _.default.getChannel(n.parent_id);
                    if (null == a || !P.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) || !l || !(0, D.shouldNotifyForForumThreadCreation)(n, a, !k)) return !1;
                    let {
                        author: s,
                        user: i
                    } = (0, h.getForumPostAuthor)(n);
                    if (null == i) return !1;
                    let r = N.default.getGuild(a.guild_id);
                    if (null == r) return !1;
                    let o = F.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                            channelName: a.name,
                            guildName: r.name
                        }),
                        u = F.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                            channelName: n.name,
                            userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == i ? void 0 : i.username
                        }),
                        d = i.getAvatarURL(void 0, 128);
                    b.default.showNotification(d, o, u, {
                        notif_type: "THREAD_CREATE",
                        notif_user_id: i.id
                    }, {
                        onClick() {
                            (0, S.openThreadSidebarForViewing)(n)
                        }
                    })
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
                    let {
                        icon: t,
                        title: n,
                        body: l,
                        route: a,
                        trackingType: s,
                        tag: i
                    } = e;
                    return !Z() && null != n && null != l && null != s && (b.default.showNotification(t, n, l, {
                        notif_type: s
                    }, {
                        onClick() {
                            null != a && (0, m.transitionTo)(a)
                        },
                        tag: i
                    }), !1)
                },
                WINDOW_HIDDEN: function() {
                    let e = (0, j.isWindows)(),
                        t = (0, j.isLinux)(),
                        l = s.default.get(H, !1),
                        a = !l && j.isPlatformEmbedded && (e || t);
                    if (!a) return !1;
                    let i = !1;
                    return null != Y && (i = K.includes(Y)), !!i && (b.default.showNotification(n("599964"), F.default.Messages.NOTIFICATION_TITLE_DISCORD, F.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
                        notif_type: "WINDOW_HIDDEN"
                    }, {
                        overrideStreamerMode: !0,
                        onClick: () => {
                            (0, m.transitionTo)(P.Routes.SETTINGS(e ? "windows" : "linux"))
                        },
                        onShown: () => {
                            s.default.set(H, !0)
                        }
                    }), !1)
                },
                LOGOUT: function() {
                    return s.default.remove(H), !1
                },
                CONNECTION_OPEN: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    Y = t
                }
            })