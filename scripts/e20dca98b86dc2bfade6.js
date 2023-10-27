(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64788"], {
        142589: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d01131fa55b9435bb356.svg"
        },
        484876: function(e, t, n) {
            "use strict";
            e.exports = n.p + "632bfacf52e640d0e889.svg"
        },
        719451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteResolvingHeader: function() {
                    return y
                },
                default: function() {
                    return _
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                s = n("77078"),
                r = n("770032"),
                o = n("653047"),
                d = n("233069"),
                u = n("813006"),
                c = n("766274"),
                f = n("697218"),
                h = n("953109"),
                p = n("580357"),
                E = n("124969"),
                g = n("587974"),
                m = n("158998"),
                S = n("49111"),
                v = n("238055"),
                T = n("91366"),
                N = n("782340"),
                I = n("669653");
            let y = () => (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(E.Avatar, {
                        src: null,
                        size: s.AvatarSizes.DEPRECATED_SIZE_100,
                        className: I.avatar
                    }), (0, a.jsx)(E.SubTitle, {
                        children: N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, a.jsx)(E.Title, {
                        className: I.inviteResolvingGuildName,
                        children: N.default.Messages.LOADING
                    })]
                }),
                C = e => {
                    let {
                        guild: t,
                        user: n,
                        application: i,
                        compact: l
                    } = e;
                    if (null != i) return (0, a.jsx)(h.default, {
                        className: I.appIcon,
                        game: i,
                        size: I.appIconSize
                    });
                    if (null != n) return (0, a.jsx)(E.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: s.AvatarSizes.SIZE_80,
                        className: l ? I.compactAvatar : I.avatar
                    });
                    if (null != t) return (0, a.jsx)(g.default, {
                        mask: g.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: I.guildIcon,
                        children: (0, a.jsx)(E.GuildIcon, {
                            guild: t,
                            size: E.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var _ = e => {
                var t;
                let n, i, h, {
                        invite: g,
                        disableUser: y = !1,
                        error: _,
                        flatActivityCount: O = !1,
                        isRegister: A = !1
                    } = e,
                    {
                        currentUser: x,
                        multiAccounts: L
                    } = (0, l.useStateFromStoresObject)([r.default, f.default], () => ({
                        currentUser: f.default.getCurrentUser(),
                        multiAccounts: r.default.getUsers()
                    }));
                if (null == g) return null;
                let R = null != g.guild ? new u.default(g.guild) : null,
                    M = null != g.channel ? (0, d.createChannelRecordFromInvite)(g.channel) : null,
                    D = null != g.target_application ? new o.default(g.target_application) : null,
                    j = y || null == g.inviter ? null : new c.default(g.inviter),
                    k = null != g.approximate_member_count && g.approximate_member_count > 100 || null != R && R.hasFeature(S.GuildFeatures.COMMUNITY),
                    P = !k && null != j,
                    b = null,
                    V = !1;
                if (null != R) b = null == j ? N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: m.default.getFormattedName(j)
                }), g.target_type === T.InviteTargetTypes.STREAM && null != g.target_user && (b = N.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: m.default.getFormattedName(g.target_user)
                })), g.target_type === T.InviteTargetTypes.EMBEDDED_APPLICATION && null != g.target_application && (b = null != j ? N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: m.default.getFormattedName(j)
                }) : N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), P && null == D && (n = (0, a.jsx)(E.GuildIcon, {
                    className: I.icon,
                    guild: R,
                    size: E.GuildIcon.Sizes.SMALL
                })), i = R.name, null != D && (i = D.name, h = (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(E.SubTitle, {
                        className: I.appIn,
                        children: N.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, a.jsxs)("div", {
                        className: I.guildContainer,
                        children: [(0, a.jsx)(E.GuildIcon, {
                            guild: R,
                            size: E.GuildIcon.Sizes.SMALL
                        }), (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "header-primary",
                            className: I.appGuildName,
                            children: R.name
                        })]
                    })]
                }));
                else if (null != M) {
                    if (null == j) throw Error("no inviter in group DM invite");
                    let e = m.default.getFormattedName(j);
                    null != M.name && "" !== M.name ? (b = N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), i = M.name, null != M.icon && (n = (0, a.jsx)(E.ChannelIcon, {
                        channel: M,
                        size: s.AvatarSizes.SIZE_32
                    }))) : (b = N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, i = e)
                } else if (null != j) {
                    let e = m.default.getFormattedName(j, !0);
                    i = N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), V = !0, h = null != _ ? null : (0, a.jsx)(E.SubTitle, {
                        className: I.directInviteSubTitle,
                        children: A ? N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: I.container,
                    children: [(0, a.jsx)(C, {
                        application: D,
                        guild: R,
                        user: P ? j : null,
                        compact: V
                    }), null != _ ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(E.SubTitle, {
                            children: N.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, a.jsx)(E.Title, {
                            children: _
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(E.SubTitle, {
                            children: b
                        }), (0, a.jsxs)(E.Title, {
                            className: I.title,
                            children: [null != R ? (0, a.jsx)(p.default, {
                                guild: R,
                                className: I.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, i]
                        })]
                    }), h, null != D || V || (null == g ? void 0 : null === (t = g.guild) || void 0 === t ? void 0 : t.id) === v.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, a.jsx)(E.ActivityCount, {
                        className: I.activityCount,
                        online: g.approximate_presence_count,
                        total: g.approximate_member_count,
                        flat: O
                    }), L.length > 1 ? (0, a.jsx)(E.JoiningAs, {
                        user: x
                    }) : null]
                })
            }
        },
        634175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040"),
                i = n("773670");
            class l extends i.PureComponent {
                render() {
                    let {
                        layout: e,
                        layoutSize: t,
                        className: n,
                        renderWidget: i
                    } = this.props;
                    return null != e ? (0, a.jsx)("div", {
                        className: n,
                        style: {
                            width: t.width,
                            height: t.height
                        },
                        children: e.widgets.map(e => i(e, t))
                    }) : null
                }
            }
            var s = l
        },
        676665: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BrowserCheckeredIcon: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("912557"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 3a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H4Zm-2 8a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1H2Zm3-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 9v-2H5v2h2Zm2 0H7v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2Zm0 0h2v2H9v-2Zm4 0v2h2v-2h-2Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        910340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeAnalyticsTrackers: function() {
                    return d
                },
                getOverlayKeybind: function() {
                    return u
                }
            });
            var a = n("539405"),
                i = n("227602"),
                l = n("901165"),
                s = n("13798"),
                r = n("49111"),
                o = n("6791");

            function d(e, t) {
                return {
                    trackView() {
                        a.default.track(r.AnalyticEvents.NOTIFICATION_VIEWED, t), a.default.notificationEvent(e, o.OverlayNotificationAction.Viewed)
                    },
                    trackClick(n) {
                        let i = l.default.isInstanceUILocked() ? r.AnalyticsLocations.LOCKED_OVERLAY : r.AnalyticsLocations.UNLOCKED_OVERLAY;
                        a.default.track(r.AnalyticEvents.NOTIFICATION_CLICKED, {
                            ...t,
                            location: i,
                            action_type: n
                        }), a.default.notificationEvent(e, o.OverlayNotificationAction.Clicked)
                    }
                }
            }

            function u() {
                let e = i.default.getOverlayKeybind();
                return null != e ? (0, s.toString)(e.shortcut, !0).split(" + ") : ["???"]
            }
        },
        415635: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("823411"),
                i = n("539405"),
                l = n("415518"),
                s = n("189771"),
                r = n("910340"),
                o = n("6791"),
                d = n("782340");

            function u(e, t, n, u, c) {
                if (null == t.activity) return null;
                let f = t.activity.type,
                    h = c.session_id;
                if (null == h) return null;
                let {
                    icon: p,
                    title: E,
                    body: g
                } = (0, s.makeTextChatNotification)(e, t, n), {
                    trackView: m,
                    trackClick: S
                } = (0, r.makeAnalyticsTrackers)(o.OverlayNotificationType.ActivityInvite, {
                    notif_type: o.OverlayNotificationType.ActivityInvite,
                    notif_user_id: n.id,
                    message_id: t.id,
                    message_type: t.type,
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    channel_type: e.type,
                    activity_type: f,
                    activity_name: c.name
                });
                return {
                    colorScheme: l.default.ColorSchemes.PRIMARY,
                    icon: p,
                    title: E,
                    body: g,
                    hint: e => (0, l.renderKeybindHint)(e, (0, r.getOverlayKeybind)(), d.default.Messages.OVERLAY_UNLOCK_TO_JOIN),
                    onNotificationShow: () => {
                        m()
                    },
                    confirmText: d.default.Messages.JOIN,
                    onConfirmClick: (l, s) => {
                        a.default.join({
                            userId: n.id,
                            sessionId: h,
                            applicationId: u.id,
                            channelId: e.id,
                            messageId: t.id
                        }), i.default.updateNotificationStatus(s), S("join")
                    },
                    onDismissClick: () => {
                        S("dismiss")
                    }
                }
            }
        },
        387129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("415518"),
                i = n("315102"),
                l = n("910340"),
                s = n("49111"),
                r = n("6791"),
                o = n("782340");

            function d(e, t) {
                let n = e.username,
                    d = o.default.Messages.USER_ACTIVITY_USER_JOIN.format({
                        username: ""
                    }),
                    u = (0, i.getUserAvatarURL)(e),
                    {
                        trackView: c,
                        trackClick: f
                    } = (0, l.makeAnalyticsTrackers)(r.OverlayNotificationType.ActivityUserJoin, {
                        notif_type: r.OverlayNotificationType.ActivityUserJoin,
                        notif_user_id: e.id,
                        activity_type: s.ActivityActionTypes.JOIN,
                        activity_name: t.name
                    });
                return {
                    colorScheme: a.default.ColorSchemes.PRIMARY,
                    icon: u,
                    title: n,
                    body: d,
                    hint: e => (0, a.renderSubtleHint)(e, o.default.Messages.USER_ACTIVITY_USER_JOIN_HINT),
                    onNotificationShow: () => {
                        c()
                    },
                    onDismissClick: () => {
                        f("dismiss")
                    }
                }
            }
        },
        981253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("539405"),
                s = n("415518"),
                r = n("910340"),
                o = n("49111"),
                d = n("6791"),
                u = n("782340"),
                c = n("998692");

            function f() {
                return (0, a.jsx)("div", {
                    className: c.footer,
                    children: (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.GREEN,
                        size: i.Button.Sizes.SMALL,
                        className: c.ctaButton,
                        children: u.default.Messages.OVERLAY_NEWS_GO_LIVE_CTA
                    })
                })
            }

            function h(e) {
                switch (e.type) {
                    case d.OverlayNudgeTypes.GO_LIVE_VOICE: {
                        let {
                            game: t,
                            voiceGuild: c
                        } = e, {
                            trackView: h,
                            trackClick: p
                        } = (0, r.makeAnalyticsTrackers)(d.OverlayNotificationType.GoLiveNudge, {
                            notif_type: d.OverlayNotificationType.GoLiveNudge
                        });
                        return {
                            colorScheme: s.ColorSchemes.PRIMARY,
                            icon: n("484876"),
                            title: null,
                            body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
                                game: t.name,
                                server: c.toString()
                            }),
                            hint: () => (0, a.jsx)(f, {}),
                            renderFooter: () => (0, a.jsx)(f, {}),
                            onNotificationShow: () => {
                                h()
                            },
                            onNotificationClick: (e, t) => {
                                p("unlock"), l.default.updateNotificationStatus(t), l.default.setInstanceLocked(!1), (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("451863").then(n.bind(n, "451863"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        selectSource: !1,
                                        guildId: c.id,
                                        analyticsLocation: o.AnalyticsLocations.OVERLAY_NUDGE
                                    })
                                })
                            },
                            onDismissClick: () => {
                                p("dismiss")
                            }
                        }
                    }
                    case d.OverlayNudgeTypes.GO_LIVE_NON_VOICE: {
                        let {
                            game: t
                        } = e, {
                            trackView: c,
                            trackClick: h
                        } = (0, r.makeAnalyticsTrackers)(d.OverlayNotificationType.GoLiveNonVoiceNudge, {
                            notif_type: d.OverlayNotificationType.GoLiveNonVoiceNudge
                        });
                        return {
                            colorScheme: s.ColorSchemes.PRIMARY,
                            icon: n("484876"),
                            title: null,
                            body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
                                game: t.name
                            }),
                            hint: () => (0, a.jsx)(f, {}),
                            renderFooter: () => (0, a.jsx)(f, {}),
                            onNotificationShow: () => {
                                c()
                            },
                            onNotificationClick: (e, t) => {
                                h("unlock"), l.default.updateNotificationStatus(t), l.default.setInstanceLocked(!1), (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("451863").then(n.bind(n, "451863"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        selectSource: !1,
                                        selectGuild: !0,
                                        analyticsLocation: o.AnalyticsLocations.OVERLAY_NUDGE
                                    })
                                })
                            },
                            onDismissClick: () => {
                                h("dismiss")
                            }
                        }
                    }
                }
            }
        },
        931237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("561288"),
                i = n("539405"),
                l = n("843962"),
                s = n("679653"),
                r = n("27618"),
                o = n("697218"),
                d = n("415518"),
                u = n("910340"),
                c = n("49111"),
                f = n("6791"),
                h = n("782340");

            function p(e) {
                let t = (0, s.computeChannelName)(e, o.default, r.default),
                    n = h.default.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
                    p = (0, l.getChannelIconURL)(e),
                    {
                        trackView: E,
                        trackClick: g
                    } = (0, u.makeAnalyticsTrackers)(f.OverlayNotificationType.IncomingCall, {
                        notif_type: f.OverlayNotificationType.IncomingCall,
                        notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
                        guild_id: e.guild_id,
                        channel_id: e.id,
                        channel_type: e.type
                    });
                return {
                    colorScheme: d.default.ColorSchemes.PRIMARY,
                    icon: p,
                    title: t,
                    body: n,
                    hint: e => (0, d.renderKeybindHint)(e, (0, u.getOverlayKeybind)(), h.default.Messages.OVERLAY_UNLOCK_TO_ANSWER),
                    confirmText: h.default.Messages.JOIN_CALL,
                    cancelText: h.default.Messages.DECLINE,
                    onNotificationShow: () => {
                        E()
                    },
                    onConfirmClick: () => {
                        i.default.callPrivateChannel(e.id), g("join"), i.default.track(c.AnalyticEvents.VOICE_CHANNEL_SELECTED, {
                            location: "Overlay Notificaiton",
                            guild_id: null,
                            channel_id: e.id,
                            video_enabled: !1
                        })
                    },
                    onCancelClick: () => {
                        a.default.stopRinging(e.id), g("decline")
                    },
                    onDismissClick: () => {
                        g("dismiss")
                    }
                }
            }
        },
        37359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("260365"),
                i = n("539405"),
                l = n("267363"),
                s = n("901165"),
                r = n("415518"),
                o = n("910340"),
                d = n("49111"),
                u = n("6791"),
                c = n("782340");

            function f(e, t, n, f) {
                let h = t.username,
                    p = c.default.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
                        username: "",
                        game: n.name
                    }),
                    E = t.getAvatarURL(e.guild_id, 80),
                    {
                        trackView: g,
                        trackClick: m
                    } = (0, o.makeAnalyticsTrackers)(u.OverlayNotificationType.ActivityInvite, {
                        notif_type: u.OverlayNotificationType.ActivityInvite,
                        notif_user_id: t.id,
                        activity_type: d.ActivityActionTypes.JOIN_REQUEST,
                        activity_name: n.name
                    });
                return {
                    colorScheme: r.default.ColorSchemes.PRIMARY,
                    icon: E,
                    title: h,
                    body: p,
                    hint: e => (0, r.renderKeybindHint)(e, (0, o.getOverlayKeybind)(), c.default.Messages.OVERLAY_UNLOCK_TO_ANSWER),
                    confirmText: c.default.Messages.USER_ACTIVITY_RESPOND_YEAH,
                    cancelText: c.default.Messages.USER_ACTIVITY_RESPOND_NOPE,
                    onNotificationShow: () => {
                        g()
                    },
                    onConfirmClick: (t, n) => {
                        a.default.sendActivityInvite({
                            channelId: e.id,
                            type: d.ActivityActionTypes.JOIN,
                            activity: f,
                            location: s.default.isInstanceUILocked() ? d.AnalyticsLocations.LOCKED_OVERLAY : d.AnalyticsLocations.UNLOCKED_OVERLAY
                        }), m("join"), i.default.updateNotificationStatus(n)
                    },
                    onCancelClick: (t, n) => {
                        (0, l.ack)(e.id, !0, !0), i.default.updateNotificationStatus(n), m("decline")
                    },
                    onDismissClick: () => {
                        m("dismiss")
                    }
                }
            }
        },
        364864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("539405"),
                l = n("393414"),
                s = n("189857"),
                r = n("901165"),
                o = n("415518"),
                d = n("189771"),
                u = n("709681"),
                c = n("910340"),
                f = n("49111"),
                h = n("6791"),
                p = n("782340");

            function E(e, t, n, E) {
                var g;
                let {
                    icon: m,
                    title: S,
                    body: v
                } = (0, d.makeTextChatNotification)(e, t, n), {
                    trackView: T,
                    trackClick: N
                } = (0, c.makeAnalyticsTrackers)(h.OverlayNotificationType.TextChat, {
                    notif_type: h.OverlayNotificationType.TextChat,
                    notif_user_id: null === (g = t.author) || void 0 === g ? void 0 : g.id,
                    message_id: t.id,
                    message_type: t.type,
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    channel_type: e.type
                });
                return {
                    colorScheme: o.ColorSchemes.PRIMARY,
                    icon: m,
                    title: S,
                    body: v,
                    renderFooter: e => e ? (0, a.jsx)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: p.default.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
                    }) : null,
                    maxBodyLines: 2,
                    onNotificationShow: () => {
                        E && (0, u.playSound)(s.MESSAGE_SOUND, s.MESSAGE_SOUND_VOLUME), T()
                    },
                    onNotificationClick: () => {
                        (0, l.transitionTo)(f.Routes.CHANNEL(e.guild_id, e.id)), N("jump"), r.default.isInstanceUILocked() && i.default.setInstanceLocked(!1)
                    },
                    onDismissClick: () => {
                        N("dismiss")
                    }
                }
            }
        },
        523505: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("539405"),
                l = n("901165"),
                s = n("415518"),
                r = n("910340"),
                o = n("6791"),
                d = n("782340");
            let u = () => ({
                    icon: n("307757"),
                    title: d.default.Messages.OVERLAY_LAUNCH_TITLE,
                    body: null,
                    hint: c,
                    colorScheme: s.ColorSchemes.PRIMARY,
                    notifType: o.OverlayNotificationType.WelcomeNudge
                }),
                c = e => (0, s.renderKeybindHint)(e, (0, r.getOverlayKeybind)(), d.default.Messages.OVERLAY_LAUNCH_OPEN_TIP);

            function f(e) {
                let {
                    type: t
                } = e, {
                    icon: n,
                    title: c,
                    body: f,
                    hint: h,
                    colorScheme: p,
                    notifType: E
                } = function(e, t) {
                    if (t.type === o.OverlayNudgeTypes.NEWS) {
                        var n, a, i, l, r, d, u, c;
                        return {
                            icon: null !== (r = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== r ? r : e.icon,
                            title: null !== (d = null === (a = t.news) || void 0 === a ? void 0 : a.title) && void 0 !== d ? d : e.title,
                            body: null !== (u = null === (i = t.news) || void 0 === i ? void 0 : i.body) && void 0 !== u ? u : e.body,
                            hint: null !== (c = null === (l = t.news) || void 0 === l ? void 0 : l.hint) && void 0 !== c ? c : e.hint,
                            colorScheme: null != t.news ? s.ColorSchemes.BRAND : e.colorScheme,
                            notifType: null != t.news ? o.OverlayNotificationType.NewsNudge : e.notifType
                        }
                    }
                    return e
                }(u(), e), {
                    trackView: g,
                    trackClick: m
                } = (0, r.makeAnalyticsTrackers)(E, {
                    notif_type: E
                });
                return {
                    colorScheme: p,
                    icon: n,
                    title: c,
                    body: f,
                    hint: h,
                    renderFooter: () => (0, a.jsx)("div", {
                        style: {
                            textAlign: "center",
                            padding: 2
                        },
                        children: d.default.Messages.OVERLAY_CLICK_TO_UNLOCK
                    }),
                    onNotificationShow: () => {
                        g()
                    },
                    onNotificationClick: (e, n) => {
                        m("unlock"), t === o.OverlayNudgeTypes.NEWS && i.default.updateNotificationStatus(n), l.default.isInstanceUILocked() && i.default.setInstanceLocked(!1)
                    },
                    onDismissClick: () => {
                        m("dismiss")
                    }
                }
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("773670");
            let i = a.createContext(void 0);
            var l = i
        },
        47271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("539405"),
                s = n("990766"),
                r = n("910340"),
                o = n("415518"),
                d = n("774223"),
                u = n("162236"),
                c = n("6791"),
                f = n("782340");

            function h(e) {
                let {
                    game: t
                } = e, {
                    trackView: n,
                    trackClick: h
                } = (0, r.makeAnalyticsTrackers)(c.OverlayNotificationType.StartBroadcastNotification, {
                    notif_type: c.OverlayNotificationType.StartBroadcastNotification
                });
                return {
                    colorScheme: o.ColorSchemes.PRIMARY,
                    title: null,
                    body: f.default.Messages.START_BROADCAST_NOTIFICATION_BODY,
                    icon: (0, a.jsx)(d.default, {}),
                    renderFooter: () => (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.GREEN,
                        size: i.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: f.default.Messages.START_BROADCAST_NOTIFICATION_CTA
                    }),
                    onNotificationShow: () => {
                        n()
                    },
                    onNotificationClick: (e, n) => {
                        h("unlock"), l.default.updateNotificationStatus(n), l.default.setInstanceLocked(!1), (0, u.openBroadcastingPrivacySettingsModal)(f.default.Messages.START_BROADCASTING, f.default.Messages.START_BROADCASTING_CTA, () => {
                            (0, s.createBroadcastChannelOrStartStream)({
                                pid: t.pid
                            })
                        })
                    },
                    onDismissClick: () => {
                        h("dismiss")
                    }
                }
            }
        },
        969416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createClipsReminderNotification: function() {
                    return h
                },
                createClipsNotification: function() {
                    return p
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("910340"),
                s = n("227602"),
                r = n("415518"),
                o = n("522049"),
                d = n("13798"),
                u = n("49111"),
                c = n("6791"),
                f = n("782340");

            function h() {
                let {
                    trackView: e,
                    trackClick: t
                } = (0, l.makeAnalyticsTrackers)(c.OverlayNotificationType.ClipsReminderNotification, {
                    notif_type: c.OverlayNotificationType.ClipsReminderNotification
                }), n = s.default.getKeybindForAction(u.GlobalKeybindActions.SAVE_CLIP);
                if (null == n) return null;
                let h = d.toString(n.shortcut, !0);
                return {
                    colorScheme: r.ColorSchemes.PRIMARY,
                    title: f.default.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
                        keybind: h,
                        keybindHook: () => (0, a.jsx)("span", {
                            style: {
                                display: "inline-block"
                            },
                            children: (0, a.jsx)(i.KeyCombo, {
                                shortcut: h
                            })
                        })
                    }),
                    icon: (0, a.jsx)(o.default, {}),
                    onNotificationShow: () => {
                        e()
                    },
                    onDismissClick: () => {
                        t("dismiss")
                    }
                }
            }

            function p(e) {
                let {
                    trackView: t,
                    trackClick: n
                } = (0, l.makeAnalyticsTrackers)(c.OverlayNotificationType.ClipsNotification, {
                    notif_type: c.OverlayNotificationType.ClipsNotification
                });
                return {
                    colorScheme: r.ColorSchemes.PRIMARY,
                    title: e,
                    icon: (0, a.jsx)(o.default, {}),
                    onNotificationShow: () => {
                        t()
                    },
                    onDismissClick: () => {
                        n("dismiss")
                    }
                }
            }
        },
        49040: function(e, t, n) {
            "use strict";

            function a(e) {
                var t;
                return null != e ? {
                    id: e.id,
                    name: null !== (t = e.name) && void 0 !== t ? t : ""
                } : null
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        },
        238055: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                HubEmailConnectionSteps: function() {
                    return a
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return l
                }
            }), (i = a || (a = {})).STUDENT_PROMPT = "STUDENT_PROMPT", i.VERIFY_EMAIL = "VERIFY_EMAIL", i.VERIFY_PIN = "VERIFY_PIN", i.SELECT_SCHOOL = "SELECT_SCHOOL", i.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", i.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", i.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", i.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let l = "884924873015689226"
        },
        101698: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("6791");

            function i(e) {
                switch (e) {
                    case a.OpacityBounds.BOTTOM:
                        return a.OpacityBounds.BOTTOM;
                    case a.OpacityBounds.LOWER:
                        return a.OpacityBounds.LOWER;
                    case a.OpacityBounds.UPPER:
                        return a.OpacityBounds.UPPER;
                    default:
                        return a.OpacityBounds.TOP
                }
            }
        },
        117026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("6791");

            function i(e) {
                switch (e) {
                    case a.OpacityBounds.BOTTOM:
                        return a.BackgroundOpacityClasses.LOW;
                    case a.OpacityBounds.LOWER:
                        return a.BackgroundOpacityClasses.MEDIUM;
                    case a.OpacityBounds.UPPER:
                        return a.BackgroundOpacityClasses.HIGH;
                    case a.OpacityBounds.TOP:
                        return a.BackgroundOpacityClasses.FULL;
                    default:
                        return
                }
            }
        },
        476427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                s = n("77078"),
                r = n("988738"),
                o = n("244201"),
                d = n("670984"),
                u = n("302537"),
                c = n("102999"),
                f = n("929479"),
                h = n("552067"),
                p = n("866681"),
                E = n("791106"),
                g = n("983782"),
                m = n("587974"),
                S = n("601415"),
                v = n("357506"),
                T = n("49111");
            n("551184"), n("762017"), l.default.initialize();
            var N = function() {
                return i.useEffect(() => (f.default.initialize(), d.default.initialize(), p.default.init(), h.default.init(), () => {
                    f.default.terminate(), d.default.terminate()
                }), []), (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(u.default, {}), (0, a.jsx)(c.default, {
                        children: (0, a.jsxs)(S.default, {
                            children: [(0, a.jsx)(m.MaskLibrary, {}), (0, a.jsx)(E.default, {}), (0, a.jsx)(o.AppWindowContextProvider, {
                                appContext: T.AppContext.OVERLAY,
                                renderWindow: window,
                                children: (0, a.jsxs)(g.AppLayerProvider, {
                                    children: [(0, a.jsx)(v.default, {}), (0, a.jsx)(s.Modals, {}), (0, a.jsx)(r.default, {}), (0, a.jsx)(g.AppLayerContainer, {})]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        878624: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("773670"),
                i = n("754013"),
                l = n("498225"),
                s = n("701916"),
                r = n("939398"),
                o = n("42203"),
                d = n("923959"),
                u = n("26989"),
                c = n("305961"),
                f = n("957255"),
                h = n("18494"),
                p = n("162771"),
                E = n("697218"),
                g = n("901165"),
                m = n("819068"),
                S = n("49111");
            class v extends a.Component {
                componentDidUpdate(e) {
                    if (this.props.locked) return null;
                    let {
                        selectedGuild: t,
                        selectedChannel: n,
                        isNSFWChannel: a,
                        isMemberPending: i,
                        hasPreviewEnabled: l,
                        postableChannelCount: d
                    } = this.props;
                    if (t !== e.selectedGuild || i && !e.isMemberPending) {
                        let e = i ? {
                            is_pending: i,
                            preview_enabled: l
                        } : {};
                        (0, r.trackWithOverlayMetadata)(S.AnalyticEvents.GUILD_VIEWED, {
                            ...e,
                            postable_channels: d
                        })
                    }
                    if (null != n && n !== e.selectedChannel) {
                        let e = (0, s.collectThreadMetadata)(o.default.getChannel(n), !0);
                        (0, r.trackWithOverlayMetadata)(S.AnalyticEvents.CHANNEL_OPENED, {
                            channel_is_nsfw: a,
                            ...e
                        })
                    }
                }
                render() {
                    return null
                }
            }
            var T = l.default.connectStores([p.default, h.default, o.default, c.default, E.default, g.default, u.default, d.default, f.default], () => {
                var e, t, n;
                let a = p.default.getGuildId(),
                    l = h.default.getChannelId(a),
                    s = o.default.getChannel(l),
                    r = c.default.getGuild(a),
                    v = E.default.getCurrentUser(),
                    T = null !== (t = d.default.getChannels(null == r ? void 0 : r.id)[d.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : [],
                    N = T.length > 0 ? T.filter(e => {
                        let {
                            channel: t
                        } = e;
                        return f.default.can(i.default.combine(S.Permissions.SEND_MESSAGES, S.Permissions.VIEW_CHANNEL), t)
                    }).length : 0,
                    I = null != v && null != a && null !== (n = null === (e = u.default.getMember(a, v.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
                return {
                    selectedGuild: a,
                    selectedChannel: l,
                    isNSFWChannel: null == s ? void 0 : s.nsfw,
                    locked: g.default.isUILocked((0, m.getPID)()),
                    hasPreviewEnabled: null == r ? void 0 : r.features.has(S.GuildFeatures.PREVIEW_ENABLED),
                    isMemberPending: I,
                    postableChannelCount: N
                }
            })(v)
        },
        483355: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("773670"),
                i = n("427964"),
                l = n.n(i),
                s = n("865768"),
                r = n("117064"),
                o = n("708001"),
                d = n("638800"),
                u = n("49671"),
                c = n("658530"),
                f = n("773336"),
                h = n("50885");
            let p = {
                    x: 0,
                    y: 0
                },
                E = !1;

            function g(e) {
                let {
                    clientX: t,
                    clientY: n
                } = e;
                E = !0, p.x = t, p.y = n
            }
            let m = new Map;

            function S(e, t) {
                if (null == t) m.delete(e), 0 === m.size && (window.removeEventListener("mousemove", g), E = !1);
                else {
                    let n = m.get(e);
                    if (null != n && (0, o.default)(n.zone, t.zone)) return;
                    0 === m.size && window.addEventListener("mousemove", g), m.set(e, t)
                }
                if (f.isPlatformEmbedded) {
                    var n, a, i;
                    null === (i = u.default) || void 0 === i || null === (a = i.globalOverlay) || void 0 === a || null === (n = a.setClickZones) || void 0 === n || n.call(a, Array.from(m.values()).map(e => {
                        let {
                            zone: t
                        } = e, n = {
                            name: t.name,
                            x: t.left,
                            y: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        };
                        return n
                    }));
                    let e = h.default.requireModule("discord_overlay2");
                    e.broadcastCommand({
                            message: "set_click_zones",
                            zones: Array.from(m.values()).map(e => {
                                let {
                                    zone: t
                                } = e;
                                return t
                            })
                        }),
                        function() {
                            var e, t, n;
                            if (v) return;
                            let a = (e, t, n) => {
                                let a = m.get(e);
                                null != a && (!E && (p.x = t, p.y = n), a.instance.click())
                            };
                            null === (n = u.default) || void 0 === n || null === (t = n.globalOverlay) || void 0 === t || null === (e = t.setClickZoneCallback) || void 0 === e || e.call(t, a);
                            let i = h.default.requireModule("discord_overlay2");
                            i.setClickZoneCallback(a), v = !0
                        }()
                }
            }
            let v = !1;
            class T extends a.PureComponent {
                componentDidMount() {
                    this.props.observe ? this.observeZone() : this.updateZone()
                }
                componentWillUnmount() {
                    this.interval.stop(), S(this.zone, null)
                }
                componentDidUpdate(e) {
                    let {
                        observe: t
                    } = this.props;
                    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
                }
                render() {
                    return a.Children.only(this.props.children)
                }
                observeZone() {
                    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
                }
                click() {
                    let e = (0, c.createMouseEvent)("click", p.x, p.y);
                    (0, c.dispatchEventToPoint)(e, p.x, p.y)
                }
                constructor(...e) {
                    super(...e), this.zone = l.uniqueId("ClickArea"), this.interval = new d.Interval, this.updateZone = () => {
                        let e = (0, s.findDOMNode)(this);
                        if ((0, r.isElement)(e)) {
                            let {
                                left: t,
                                top: n,
                                right: a,
                                bottom: i
                            } = e.getBoundingClientRect();
                            S(this.zone, {
                                instance: this,
                                zone: {
                                    name: this.zone,
                                    left: Math.ceil(t),
                                    top: Math.ceil(n),
                                    right: Math.ceil(a),
                                    bottom: Math.ceil(i)
                                }
                            })
                        }
                    }
                }
            }
            T.defaultProps = {
                observe: !0,
                observeInterval: 1e3
            }
        },
        664980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("716984"),
                o = n("498225"),
                d = n("77078"),
                u = n("629109"),
                c = n("406189"),
                f = n("987317"),
                h = n("412026"),
                p = n("331306"),
                E = n("679653"),
                g = n("305961"),
                m = n("42887"),
                S = n("27618"),
                v = n("697218"),
                T = n("800762"),
                N = n("783419"),
                I = n("145131"),
                y = n("293137"),
                C = n("272339"),
                _ = n("200639"),
                O = n("849467"),
                A = n("97347"),
                x = n("560995"),
                L = n("962541"),
                R = n("762489"),
                M = n("49111"),
                D = n("782340"),
                j = n("76893"),
                k = n("331060");

            function P(e) {
                let {
                    lobbyId: t
                } = e, n = (0, o.useStateFromStoresObject)([N.default], () => ({
                    connectionState: N.default.getConnectionState(t),
                    hostname: N.default.getHostname(t),
                    averagePing: N.default.getAveragePing(t),
                    lastPing: N.default.getLastPing(t),
                    pings: N.default.getPings(),
                    outboundLossRate: N.default.getOutboundLossRate(t),
                    isSecureFramesEnabled: N.default.isSecureFramesEnabled(t)
                }));
                return (0, a.jsx)(p.default, {
                    ...n
                })
            }
            class b extends i.PureComponent {
                handleDisconnect() {
                    f.default.selectVoiceChannel(null)
                }
                renderLobby() {
                    return (0, a.jsx)(R.default, {
                        className: k.channel,
                        children: D.default.Messages.LOBBY
                    })
                }
                renderChannelLink(e) {
                    let {
                        guild: t
                    } = this.props, n = (0, E.computeChannelName)(e, v.default, S.default), i = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : M.ME;
                    return (0, a.jsx)(r.Link, {
                        to: M.Routes.CHANNEL(l),
                        onClick: t => {
                            t.stopPropagation(), c.default.channelListScrollTo(l, e.id)
                        },
                        children: (0, a.jsx)(R.default, {
                            className: k.channel,
                            children: i
                        })
                    })
                }
                render() {
                    let {
                        className: e,
                        contentClassName: t,
                        pinned: n,
                        lobbyId: i,
                        channel: l,
                        quality: r,
                        lastPing: o,
                        hasVideo: u,
                        connectionState: c,
                        deaf: f,
                        mute: p
                    } = this.props;
                    return null == l && null == i ? null : (0, a.jsx)(x.default.Bar, {
                        className: s(e, j.controls, {
                            [j.unpinned]: !n
                        }),
                        children: (0, a.jsxs)(x.default.Content, {
                            className: s(t, j.content),
                            dynamicSize: !0,
                            children: [(0, a.jsx)("div", {
                                className: k.inner,
                                children: (0, a.jsx)(d.Popout, {
                                    renderPopout: this.renderPopout,
                                    position: "top",
                                    children: e => (0, a.jsx)(d.Clickable, {
                                        ...e,
                                        children: (0, a.jsx)(h.default, {
                                            statusTextClassName: k.statusWithPopout,
                                            quality: r,
                                            lastPing: o,
                                            hasVideo: u,
                                            state: c,
                                            children: null != l ? this.renderChannelLink(l) : this.renderLobby()
                                        })
                                    })
                                })
                            }), (0, a.jsxs)(I.default, {
                                grow: 0,
                                children: [(0, a.jsx)(L.default, {
                                    tooltipText: p ? D.default.Messages.UNMUTE : D.default.Messages.MUTE,
                                    icon: p ? A.default : O.default,
                                    iconForeground: p ? j.strikethrough : null,
                                    onClick: this.handleToggleSelfMute
                                }), (0, a.jsx)(L.default, {
                                    tooltipText: f ? D.default.Messages.UNDEAFEN : D.default.Messages.DEAFEN,
                                    icon: f ? _.default : C.default,
                                    onClick: this.handleToggleSelfDeaf,
                                    iconForeground: f ? j.strikethrough : null
                                }), null == i && (0, a.jsx)(L.default, {
                                    tooltipText: D.default.Messages.DISCONNECT_SELF,
                                    onClick: this.handleDisconnect,
                                    icon: y.default
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleToggleSelfMute = () => {
                        let {
                            context: e
                        } = this.props;
                        u.default.toggleSelfMute({
                            context: e
                        })
                    }, this.handleToggleSelfDeaf = () => {
                        let {
                            context: e
                        } = this.props;
                        u.default.toggleSelfDeaf({
                            context: e
                        })
                    }, this.renderPopout = () => {
                        let {
                            lobbyId: e
                        } = this.props;
                        return (0, a.jsx)(P, {
                            lobbyId: e
                        })
                    }
                }
            }

            function V(e) {
                let {
                    context: t,
                    lobbyId: n,
                    channel: i,
                    ...l
                } = e, s = (0, o.useStateFromStores)([g.default], () => g.default.getGuild(null == i ? void 0 : i.getGuildId())), r = (0, o.useStateFromStores)([T.default], () => null != i && T.default.hasVideo(i.id)), [d, u] = (0, o.useStateFromStoresArray)([m.default], () => [m.default.isSelfMute(t) || m.default.isSelfMutedTemporarily(t), m.default.isSelfDeaf(t)]), [c, f, h] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.getConnectionState(n), N.default.getLastPing(n), N.default.getQuality(n)]);
                return (0, a.jsx)(b, {
                    ...l,
                    context: t,
                    lobbyId: n,
                    channel: i,
                    guild: s,
                    hasVideo: r,
                    mute: d,
                    deaf: u,
                    connectionState: c,
                    lastPing: f,
                    quality: h
                })
            }
        },
        601415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("427964"),
                o = n.n(r),
                d = n("735420"),
                u = n("8987"),
                c = n("538732"),
                f = n("77078"),
                h = n("539405"),
                p = n("121338"),
                E = n("155084"),
                g = n("393414"),
                m = n("415518"),
                S = n("720691"),
                v = n("560995"),
                T = n("286235"),
                N = n("439932"),
                I = n("819068"),
                y = n("483355"),
                C = n("6791"),
                _ = n("49111"),
                O = n("782340"),
                A = n("299070");

            function x() {
                let e = (0, I.getPID)(),
                    t = (0, I.getRPCAuthToken)();
                (0, p.send)({
                    type: _.OverlayEventTypes.DISPATCH,
                    pid: e,
                    token: t,
                    payloads: [{
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: !0,
                        pid: e
                    }]
                })
            }
            class L extends i.PureComponent {
                componentDidMount() {
                    this.notificationTimer = setTimeout(this.hideNotification, 1e4), h.default.track(_.AnalyticEvents.NOTIFICATION_VIEWED, {
                        notif_type: C.OverlayNotificationType.OverlayCrashed
                    })
                }
                componentWillUnmount() {
                    let {
                        notificationTimer: e
                    } = this;
                    null != e && clearTimeout(e)
                }
                render() {
                    let {
                        info: e,
                        error: t
                    } = this.props, {
                        showTrace: n
                    } = this.state, {
                        notificationTimer: i
                    } = this;
                    return null == i ? null : (0, a.jsx)(y.default, {
                        observe: !1,
                        children: (0, a.jsxs)(f.Clickable, {
                            className: s((0, N.getThemeClass)(_.ThemeTypes.DARK), A.container),
                            onClick: e => e.stopPropagation(),
                            children: [(0, a.jsx)(m.default, {
                                expand: !0,
                                colorScheme: m.ColorSchemes.DANGER,
                                icon: (0, a.jsx)(S.default, {
                                    width: 40,
                                    height: 40,
                                    className: A.notificationIcon
                                }),
                                title: O.default.Messages.OVERLAY_CRASHED_TITLE,
                                confirmText: O.default.Messages.OVERLAY_RELOAD,
                                onNotificationClick: this.handleNotificationClick,
                                onConfirmClick: this.handleReload,
                                onDismissClick: this.hideNotification
                            }), n && null != e ? (0, a.jsxs)(v.default, {
                                className: A.stackTrace,
                                children: [(0, a.jsx)(v.default.Bar, {
                                    children: "Error Details"
                                }), (0, a.jsx)(v.default.Content, {
                                    className: A.stackTraceCode,
                                    children: (0, a.jsx)("code", {
                                        className: A.code,
                                        children: (0, a.jsx)("pre", {
                                            children: t.stack
                                        })
                                    })
                                })]
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        showTrace: !1,
                        busy: !1
                    }, this.hideNotification = () => {
                        x();
                        let {
                            notificationTimer: e
                        } = this;
                        null != e && clearTimeout(e), this.notificationTimer = null
                    }, this.handleReload = e => {
                        this.setState({
                            busy: !0
                        }), x(), h.default.track(_.AnalyticEvents.NOTIFICATION_CLICKED, {
                            notif_type: C.OverlayNotificationType.OverlayCrashed,
                            action_type: "reload"
                        }, !0), e.stopPropagation(), setTimeout(() => location.reload(!0), 200)
                    }, this.handleNotificationClick = e => {
                        e.stopPropagation();
                        let {
                            notificationTimer: t
                        } = this;
                        null != t && clearTimeout(t), e.shiftKey && this.setState({
                            showTrace: !0
                        })
                    }
                }
            }
            let R = o.throttle(() => {
                E.default.increment({
                    name: c.MetricEvents.APP_CRASHED,
                    tags: ["reason:".concat(d.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
                }, !0)
            }, 100, {
                trailing: !1
            });
            class M extends i.PureComponent {
                componentDidCatch(e, t) {
                    let n = (0, g.getHistory)().location;
                    this.setState({
                        error: e,
                        info: t
                    });
                    let a = (0, I.getPID)(),
                        i = (0, I.getRPCAuthToken)();
                    (0, p.send)({
                        type: _.OverlayEventTypes.DISPATCH,
                        pid: (0, I.getPID)(),
                        token: i,
                        payloads: [{
                            type: "OVERLAY_CRASHED",
                            pid: a
                        }, {
                            type: "OVERLAY_SET_INPUT_LOCKED",
                            locked: !0,
                            pid: a
                        }]
                    }), setImmediate(() => window.addEventListener("click", x));
                    let l = T.default.captureCrash(e, {
                        extra: t
                    });
                    h.default.track(_.AnalyticEvents.APP_CRASHED, {
                        path: n.pathname,
                        extra: t,
                        error_message: e.message,
                        error_stack: e.stack,
                        sentry_issue_id: l
                    }), R()
                }
                render() {
                    let {
                        children: e,
                        className: t
                    } = this.props, {
                        error: n,
                        info: i
                    } = this.state;
                    return null != n ? (0, a.jsx)(L, {
                        error: n,
                        info: i
                    }) : (0, a.jsx)("div", {
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        error: null,
                        info: null
                    }
                }
            }
            var D = M
        },
        233102: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("498225"),
                o = n("696336"),
                d = n("162771"),
                u = n("959479"),
                c = n("560995"),
                f = n("246458"),
                h = n("637842"),
                p = n("890291"),
                E = n("758547"),
                g = n("782340"),
                m = n("452670");

            function S(e) {
                let {
                    closePopout: t
                } = e;
                return (0, a.jsx)(h.default, {
                    onClose: t
                })
            }
            class v extends i.PureComponent {
                render() {
                    let {
                        selectedGuildId: e,
                        locked: t,
                        contained: n
                    } = this.props, i = null != e ? (0, a.jsx)(f.default, {
                        guildId: e,
                        onDragStart: this.onDragStart
                    }, e) : (0, a.jsx)(E.default, {
                        title: g.default.Messages.DIRECT_MESSAGES,
                        renderSettings: S,
                        onDragStart: this.onDragStart,
                        children: (0, a.jsx)(p.default, {})
                    }), l = n ? "div" : c.default;
                    return (0, a.jsxs)(l, {
                        className: s(m.base, {
                            [m.widget]: !n
                        }),
                        children: [(0, a.jsx)(o.default, {
                            isOverlay: !0,
                            disableAppDownload: !0,
                            isVisible: !t
                        }), i]
                    })
                }
                constructor(...e) {
                    super(...e), this.onDragStart = e => {
                        let {
                            dragStart: t
                        } = this.props;
                        t(u.Operations.MOVE, e.clientX, e.clientY)
                    }
                }
            }
            v.defaultProps = {
                contained: !1
            };
            var T = r.default.connectStores([d.default], () => ({
                selectedGuildId: d.default.getGuildId()
            }))(v)
        },
        628480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("560995"),
                l = n("233102"),
                s = n("440899"),
                r = n("400786");

            function o(e) {
                let {
                    dragStart: t,
                    dragging: n,
                    pinned: o,
                    locked: d
                } = e;
                return (0, a.jsxs)(i.default, {
                    className: r.wrapper,
                    children: [(0, a.jsx)(l.default, {
                        contained: !0,
                        dragStart: t,
                        locked: d
                    }), (0, a.jsx)(s.default, {
                        dragStart: t,
                        locked: d,
                        pinned: o,
                        dragging: n,
                        contained: !0
                    })]
                })
            }
        },
        37207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("427964"),
                i = n.n(a),
                l = n("498225"),
                s = n("375202"),
                r = n("49040"),
                o = n("373469"),
                d = n("86878"),
                u = n("546463"),
                c = n("260320"),
                f = n("169602"),
                h = n("568307"),
                p = n("697218"),
                E = n("703370"),
                g = n("901165"),
                m = n("158998"),
                S = n("522019"),
                v = l.default.connectStores([h.default, E.default, o.default, p.default, g.default, c.default, d.default, f.default, u.default], () => {
                    let e;
                    let t = c.default.getLobbiesWithVoice().find(e => null != d.default.getApplication(e.application_id)),
                        n = [],
                        a = "";
                    if (null != t) {
                        let l = d.default.getApplication(t.application_id);
                        (null == l ? void 0 : l.name) != null && (a = l.name), e = t.application_id, i.each(f.default.getVoiceStates(t.id), e => {
                            let t = p.default.getUser(e.userId);
                            null != t && n.push({
                                voiceState: e,
                                user: t,
                                nick: t.username,
                                comparator: m.default.getName(t)
                            })
                        })
                    }
                    let l = (0, s.default)(h.default, E.default),
                        S = o.default.getCurrentUserActiveStream(),
                        v = o.default.getStreamerActiveStreamMetadata();
                    return {
                        title: a,
                        context: e,
                        sortedVoiceStates: i.sortBy(n, e => {
                            let {
                                comparator: t
                            } = e;
                            return t
                        }),
                        lobbyId: null != t ? t.id : void 0,
                        displayUserMode: g.default.getDisplayUserMode(),
                        displayNameMode: g.default.getDisplayNameMode(),
                        avatarSizeMode: g.default.getAvatarSizeMode(),
                        application: null != l ? u.default.getGameByGameData(l) : null,
                        streamApplication: (0, r.default)(l),
                        stream: S,
                        streamMetadata: v,
                        hasStream: !1
                    }
                })(S.VoiceWidget)
        },
        750549: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("28926"),
                s = n("539405"),
                r = n("415518"),
                o = n("483355"),
                d = n("49111"),
                u = n("659091");
            class c extends i.Component {
                componentWillAppear(e) {
                    let {
                        index: t
                    } = this.props;
                    e(), this.animateTo(t)
                }
                componentWillEnter(e) {
                    let {
                        index: t
                    } = this.props;
                    e(), this.animateTo(t)
                }
                componentWillLeave(e) {
                    let {
                        index: t
                    } = this.props;
                    this.animateTo(t, e)
                }
                componentDidUpdate(e) {
                    let {
                        index: t
                    } = this.props;
                    e.index !== t && this.animateTo(t)
                }
                animateTo(e, t) {
                    let n, a, i, l;
                    let {
                        opacity: s,
                        scale: r,
                        translateX: o,
                        translateY: d
                    } = this;
                    switch (e) {
                        case 0:
                            a = 0, i = 1, l = 1;
                            break;
                        case 1:
                            a = .3, i = .6, l = .98;
                            break;
                        case 2:
                            a = .6, i = .3, l = .95;
                            break;
                        default:
                            a = .6, i = 0, l = .93
                    }
                    null != t ? (0 === e ? l = 1.1 : a = 1.3, i = 0, n = t) : n = this.handleAnimationEnd, o.setValue(1), d.setValue(a), r.setValue(l), s.setValue(i), n()
                }
                getStyle() {
                    let e, t, n, a, i;
                    let {
                        opacity: l,
                        scale: s,
                        translateX: r,
                        translateY: o,
                        props: {
                            position: u,
                            zIndex: c
                        }
                    } = this;
                    switch (u) {
                        case d.OverlayNotificationPositions.TOP_LEFT:
                        case d.OverlayNotificationPositions.BOTTOM_LEFT:
                            e = "-100%", t = 0;
                            break;
                        default:
                            n = 0, e = "100%"
                    }
                    switch (u) {
                        case d.OverlayNotificationPositions.BOTTOM_LEFT:
                        case d.OverlayNotificationPositions.BOTTOM_RIGHT:
                            a = 0;
                            break;
                        default:
                            i = 0
                    }
                    return {
                        left: t,
                        right: n,
                        bottom: a,
                        top: i,
                        zIndex: c,
                        opacity: l,
                        transform: [{
                            translateX: r.interpolate({
                                inputRange: [0, 1],
                                outputRange: [e, "0%"]
                            })
                        }, {
                            translateY: o.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "20px"]
                            })
                        }, {
                            scale: s
                        }]
                    }
                }
                render() {
                    let {
                        props: {
                            locked: e,
                            index: t,
                            notification: {
                                props: {
                                    onNotificationShow: n,
                                    onDismissClick: i,
                                    onNotificationClick: s,
                                    onConfirmClick: d,
                                    onCancelClick: c,
                                    ...f
                                }
                            }
                        },
                        state: {
                            animatedIn: h
                        }
                    } = this, p = (0, a.jsx)(l.default.div, {
                        className: u.animationContainer,
                        style: this.getStyle(),
                        children: (0, a.jsx)(r.default, {
                            ...f,
                            onNotificationShow: h && 0 === t ? this.handleNotificationShow : null,
                            onDismissClick: this.handleDismissClick,
                            onNotificationClick: null != s ? this.handleNotificationClick : null,
                            onConfirmClick: null != d ? this.handleConfirmClick : null,
                            onCancelClick: null != c ? this.handleCancelClick : null,
                            expand: !e && 0 === t,
                            disabled: 0 !== t
                        })
                    });
                    return 0 === t ? (0, a.jsx)(o.default, {
                        observeInterval: 200,
                        children: p
                    }) : p
                }
                constructor(...e) {
                    super(...e), this.translateX = new l.default.Value(0), this.translateY = new l.default.Value(0), this.scale = new l.default.Value(1), this.opacity = new l.default.Value(1), this.state = {
                        animatedIn: !1
                    }, this.handleNotificationShow = () => {
                        let {
                            id: e,
                            props: {
                                onNotificationShow: t
                            }
                        } = this.props.notification;
                        t(e)
                    }, this.handleDismissClick = e => {
                        let {
                            id: t,
                            props: {
                                onDismissClick: n
                            }
                        } = this.props.notification;
                        s.default.updateNotificationStatus(t), null != n && n(e, t)
                    }, this.handleNotificationClick = e => {
                        let {
                            id: t,
                            props: {
                                onNotificationClick: n
                            }
                        } = this.props.notification;
                        null != n && n(e, t)
                    }, this.handleConfirmClick = e => {
                        let {
                            id: t,
                            props: {
                                onConfirmClick: n
                            }
                        } = this.props.notification;
                        null != n && n(e, t)
                    }, this.handleCancelClick = e => {
                        let {
                            id: t,
                            props: {
                                onCancelClick: n
                            }
                        } = this.props.notification;
                        null != n && n(e, t)
                    }, this.handleAnimationEnd = () => {
                        let {
                            animatedIn: e
                        } = this.state;
                        !e && this.setState({
                            animatedIn: !0
                        })
                    }
                }
            }
            var f = c
        },
        485415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("498225"),
                o = n("580279"),
                d = n("786770"),
                u = n("901165"),
                c = n("750549"),
                f = n("49111"),
                h = n("886019");
            class p extends i.Component {
                render() {
                    let {
                        keybind: e,
                        notifications: t,
                        position: n,
                        locked: i
                    } = this.props;
                    if (n === f.OverlayNotificationPositions.DISABLED) return null;
                    let l = -1;
                    return (0, a.jsx)(o.default, {
                        component: "div",
                        className: s(h.container, h[n]),
                        children: t.map(t => i && t.status === f.OverlayNotificationStatus.TIMED_OUT ? null : (l += 1, (0, a.jsx)(c.default, {
                            index: l,
                            zIndex: 100 - l,
                            position: n,
                            notification: t,
                            keybind: e,
                            locked: i
                        }, t.id)))
                    })
                }
            }
            var E = r.default.connectStores([d.default, u.default], () => ({
                notifications: d.default.getNotifications(),
                position: u.default.getNotificationPositionMode()
            }))(p)
        },
        357506: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return ec
                }
            });
            var i = n("920040"),
                l = n("773670"),
                s = n("575482"),
                r = n.n(s),
                o = n("32608"),
                d = n.n(o),
                u = n("858434"),
                c = n.n(u),
                f = n("850865"),
                h = n.n(f),
                p = n("498225"),
                E = n("77078"),
                g = n("404118"),
                m = n("272030"),
                S = n("539405"),
                v = n("304580"),
                T = n("175980"),
                N = n("485328"),
                I = n("827792"),
                y = n("812204"),
                C = n("685665"),
                _ = n("9759"),
                O = n("705565"),
                A = n("479788"),
                x = n("375202"),
                L = n("831773"),
                R = n("359477"),
                M = n("373469"),
                D = n("271938"),
                j = n("42203"),
                k = n("305961"),
                P = n("42887"),
                b = n("568307"),
                V = n("18494"),
                w = n("40597"),
                U = n("703370"),
                B = n("144747"),
                F = n("227602"),
                G = n("901165"),
                H = n("471671"),
                W = n("145131");
            n("58608");
            var z = n("773336"),
                Y = n("50885"),
                K = n("13798"),
                Z = n("819068"),
                X = n("878624"),
                J = n("485415"),
                q = n("206496"),
                Q = n("684325"),
                $ = n("762243"),
                ee = n("265268"),
                et = n("6791"),
                en = n("49111"),
                ea = n("782340"),
                ei = n("955637");
            p.default.PersistedStore.disableWrites = __OVERLAY__, p.default.initialize();
            let el = null;

            function es(e) {
                e.preventDefault()
            }

            function er(e) {
                (0, m.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("562353").then(n.bind(n, "562353"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
            let eo = e => {
                    let {
                        keybind: t,
                        onClick: n,
                        isPreviewingInGame: a,
                        locked: l
                    } = e, s = l ? E.Clickable : "div";
                    return (0, i.jsx)(s, {
                        className: r(ei.overlayBackground, {
                            [ei.overlayActive]: !l,
                            [ei.overlayLocked]: l,
                            [ei.previewMode]: !l && a
                        }),
                        onMouseDown: e => {
                            let {
                                currentTarget: t,
                                target: a,
                                button: i
                            } = e;
                            i === en.MouseButtons.PRIMARY && t === a && n()
                        },
                        onContextMenu: er,
                        children: l ? null : (0, i.jsx)("div", {
                            className: ei.closeContainer,
                            children: (0, i.jsx)(v.default, {
                                variant: v.default.Variants.BOLD,
                                keybind: t,
                                closeAction: n
                            })
                        })
                    })
                },
                ed = e => {
                    let {
                        keyCode: t,
                        shiftKey: n,
                        metaKey: a,
                        altKey: i,
                        ctrlKey: l
                    } = e;
                    return {
                        keyCode: t,
                        shiftKey: n,
                        metaKey: a,
                        altKey: i,
                        ctrlKey: l
                    }
                };
            class eu extends l.Component {
                handleLock() {
                    !(0, E.hasAnyModalOpen)() && !B.default.isOpen() && S.default.setLocked(!0, (0, Z.getPID)())
                }
                handleDeactivate() {
                    S.default.deactivateAllRegions()
                }
                componentDidMount() {
                    S.default.startSession(), L.default.initialize(), I.default.initialize(), R.default.initialize()
                }
                componentDidUpdate(e) {
                    let {
                        initialized: t
                    } = this.props;
                    if (t) {
                        if (t && !e.initialized) {
                            this.initialSetup();
                            return
                        }
                        if (!e.locked && this.props.locked) {
                            if (window.addEventListener("contextmenu", es, !1), null != el) {
                                let e = Date.now() - el;
                                S.default.track(en.AnalyticEvents.OVERLAY_LOCKED, {
                                    unlocked_duration: e
                                }), el = null
                            }
                            N.default.disable(), this.activeKeyEventShapes = [], G.default.isPinned(en.OverlayWidgets.TEXT) && (N.default.setLayout(T.OVERLAY_LOCKED_LAYOUT), N.default.enable())
                        } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", es, !1), null == el && (el = Date.now(), S.default.track(en.AnalyticEvents.OVERLAY_UNLOCKED)), N.default.disable(), this.activeKeyEventShapes = [], N.default.setLayout(T.OVERLAY_LAYOUT), N.default.enable());
                        e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.toBrowserEvents)(this.props.keybindKeyCodes))
                    }
                }
                initialSetup() {
                    let {
                        connectedToVoice: e,
                        locked: t,
                        canGoLive: n,
                        isStreaming: a,
                        voiceGuild: i,
                        voiceChannelId: l,
                        game: s,
                        canStartBroadcast: r,
                        canBroadcast: o
                    } = this.props;
                    S.default.track(en.AnalyticEvents.OVERLAY_INITIALIZED, {
                        voice_widget_connected: e,
                        text_widget_connected: G.default.isPinned(en.OverlayWidgets.TEXT)
                    });
                    let d = n && !a && null != s,
                        u = e && null != i && null != l,
                        c = {
                            type: et.OverlayNudgeTypes.WELCOME
                        };
                    if (d && !e && r ? (_.default.trackExposure({
                            location: "overlay_notification"
                        }), o && (c = {
                            type: et.OverlayNudgeTypes.BROADCAST,
                            game: s
                        })) : d && u ? c = {
                            type: et.OverlayNudgeTypes.GO_LIVE_VOICE,
                            game: s,
                            voiceChannelId: l,
                            voiceGuild: i
                        } : d && (c = {
                            type: et.OverlayNudgeTypes.GO_LIVE_NON_VOICE,
                            game: s
                        }), S.default.overlayMounted(c), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", es, !1), z.isPlatformEmbedded) {
                        let e = Y.default.requireModule("discord_overlay2");
                        void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
                            S.default.track(en.AnalyticEvents.OVERLAY_PERF_INFO, e)
                        }), e.broadcastCommand({
                            message: "set_perf_report_interval",
                            interval: 9e5
                        })), Y.default.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                            G.default.getDisableExternalLinkAlert() || t === w.default.getLastURL() ? Y.default.send("OPEN_EXTERNAL_URL", t) : g.default.show({
                                title: ea.default.Messages.OVERLAY_LINK_ALERT_TITLE,
                                body: ea.default.Messages.OVERLAY_LINK_ALERT_BODY,
                                secondaryConfirmText: ea.default.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                                confirmText: ea.default.Messages.CONTINUE,
                                cancelText: ea.default.Messages.CANCEL,
                                onConfirmSecondary: () => {
                                    S.default.disableExternalLinkAlert(), Y.default.send("OPEN_EXTERNAL_URL", t)
                                },
                                onConfirm: () => Y.default.send("OPEN_EXTERNAL_URL", t)
                            })
                        })
                    }
                    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", es, !1), L.default.terminate(), I.default.terminate(), R.default.terminate()
                }
                renderInvalidSizeMessage() {
                    return (0, i.jsx)(W.default, {
                        justify: W.default.Justify.CENTER,
                        align: W.default.Align.CENTER,
                        className: ei.invalidContainer,
                        children: (0, i.jsx)("div", {
                            className: ei.inactiveContainer,
                            children: ea.default.Messages.OVERLAY_TOO_SMALL.format(Z.OVERLAY_MIN_RESOLUTION)
                        })
                    })
                }
                render() {
                    let {
                        locked: e,
                        keybind: t,
                        incompatibleApp: n,
                        initialized: l,
                        isPreviewingInGame: s,
                        activeRegions: o,
                        windowSize: d,
                        voiceGuild: u,
                        voiceChannelId: c
                    } = this.props, {
                        width: f,
                        height: h
                    } = d;
                    if (0 === f || 0 === h || n || !l) return null;
                    let p = D.default.getId();
                    return (0, i.jsxs)("div", {
                        className: ei.overlay,
                        children: [(0, i.jsx)(Q.default, {}), s && (0, i.jsx)("header", {
                            className: ei.previewingInGameHeader,
                            children: ea.default.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                        }), a, (!e || o.has(en.OverlayActiveRegions.TEXT_WIDGET)) && (0, i.jsx)(eo, {
                            locked: e,
                            keybind: t,
                            onClick: e ? this.handleDeactivate : this.handleLock,
                            isPreviewingInGame: s
                        }), (0, Z.validResolution)(d) ? (0, i.jsx)(q.default, {
                            className: r({
                                [ei.layoutLocked]: e,
                                [ei.layoutUnlocked]: !e
                            })
                        }) : e ? null : this.renderInvalidSizeMessage(), (0, i.jsx)(ee.default, {}), null != u && null != c && (0, i.jsx)($.default, {
                            streamerId: p,
                            guildId: u.id,
                            channelId: c
                        }), (0, i.jsx)(J.default, {
                            locked: e || s,
                            keybind: t
                        }), (0, i.jsx)(X.default, {})]
                    })
                }
                constructor(e) {
                    super(e), this.handleWindowResize = c(() => {
                        this.forceUpdate()
                    }, 500), this.activeKeyEventShapes = [], this.lockEventShape = (0, K.toBrowserEvents)(this.props.keybindKeyCodes), this.getActiveKeyEventIndex = e => this.activeKeyEventShapes.findIndex(t => h(t, e)), this.onKeyDownGlobal = e => {
                        let t = ed(e),
                            n = this.getActiveKeyEventIndex(t) > -1,
                            a = [16, 17, 18, 91].includes(e.keyCode);
                        !n && !a && this.activeKeyEventShapes.push(t);
                        let i = this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h(e, t)));
                        i && (e.preventDefault(), e.stopPropagation());
                        let {
                            locked: l,
                            activeRegions: s
                        } = this.props;
                        t.keyCode === d.codes.esc && l && s.has(en.OverlayActiveRegions.TEXT_WIDGET) && S.default.deactivateAllRegions()
                    }, this.onKeyUpGlobal = e => {
                        let t = ed(e),
                            n = this.getActiveKeyEventIndex(t);
                        n > -1 && this.activeKeyEventShapes.splice(n, 1)
                    };
                    let t = e.locked && G.default.isPinned(en.OverlayWidgets.TEXT);
                    N.default.setLayout(t ? T.OVERLAY_LOCKED_LAYOUT : T.OVERLAY_LAYOUT), t && N.default.enable()
                }
            }

            function ec() {
                let {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: a,
                    isPreviewingInGame: l
                } = (0, p.useStateFromStoresObject)([G.default], () => ({
                    locked: G.default.isUILocked((0, Z.getPID)()),
                    initialized: G.default.initialized,
                    incompatibleApp: G.default.incompatibleApp,
                    activeRegions: G.default.getActiveRegions(),
                    isPreviewingInGame: G.default.isPreviewingInGame()
                })), s = (0, p.useStateFromStores)([H.default], () => H.default.windowSize()), r = (0, p.useStateFromStores)([F.default], () => F.default.getOverlayKeybind()), o = (0, p.useStateFromStores)([V.default], () => V.default.getVoiceChannelId()), d = (0, p.useStateFromStores)([j.default], () => j.default.getChannel(o)), u = (0, p.useStateFromStores)([k.default], () => null != d ? k.default.getGuild(d.guild_id) : null), c = (0, p.useStateFromStores)([b.default, U.default], () => (0, x.default)(b.default, U.default)), f = (0, p.useStateFromStores)([P.default], () => (0, A.default)(P.default)), {
                    canBroadcast: h
                } = _.default.useExperiment({
                    location: "overlay"
                }, {
                    autoTrackExposure: !1
                }), E = (0, O.default)() && null != c, g = (0, p.useStateFromStores)([M.default], () => null != M.default.getCurrentUserActiveStream()), {
                    AnalyticsLocationProvider: m
                } = (0, C.default)(y.default.OVERLAY);
                return (0, i.jsx)(m, {
                    children: (0, i.jsx)(eu, {
                        locked: e,
                        initialized: t,
                        incompatibleApp: n,
                        activeRegions: a,
                        isPreviewingInGame: l,
                        windowSize: s,
                        keybind: null != r ? (0, K.toString)(r.shortcut, !0) : "???",
                        keybindKeyCodes: null != r ? r.shortcut : [],
                        connectedToVoice: null != o,
                        voiceChannelId: null != d ? d.id : null,
                        voiceGuild: u,
                        game: c,
                        canGoLive: f,
                        isStreaming: g,
                        canBroadcast: h,
                        canStartBroadcast: E
                    })
                })
            }
        },
        206496: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                s = n("640583"),
                r = n("539405"),
                o = n("634175"),
                d = n("505507"),
                u = n("901165"),
                c = n("471671"),
                f = n("959479"),
                h = n("80687"),
                p = n("819068"),
                E = n("233102"),
                g = n("628480"),
                m = n("37207"),
                S = n("880584"),
                v = n("440899"),
                T = n("522019"),
                N = n("49111");
            let I = {
                [N.OverlayWidgets.TEXT](e) {
                    let {
                        dragging: t,
                        locked: n,
                        pinned: i,
                        dragStart: l
                    } = e;
                    return (0, a.jsx)(v.default, {
                        dragStart: l,
                        locked: n,
                        pinned: i,
                        dragging: t
                    })
                },
                [N.OverlayWidgets.GUILDS](e) {
                    let {
                        locked: t,
                        dragStart: n
                    } = e;
                    return (0, a.jsx)(E.default, {
                        dragStart: n,
                        locked: t
                    })
                },
                [N.OverlayWidgets.VOICE](e) {
                    let {
                        id: t,
                        anchor: n,
                        isPreviewingInGame: i,
                        locked: l,
                        pinned: s
                    } = e;
                    return (0, a.jsx)(T.default, {
                        anchor: n,
                        id: t,
                        locked: l,
                        pinned: s,
                        widget: N.OverlayWidgets.VOICE,
                        isPreviewingInGame: i
                    })
                },
                [N.OverlayWidgets.GUILDS_TEXT](e) {
                    let {
                        dragging: t,
                        locked: n,
                        dragStart: i
                    } = e;
                    return (0, a.jsx)(g.default, {
                        dragStart: i,
                        dragging: t,
                        locked: n,
                        pinned: !1
                    })
                },
                [N.OverlayWidgets.LOBBY_VOICE](e) {
                    let {
                        id: t,
                        anchor: n,
                        isPreviewingInGame: i,
                        locked: l,
                        pinned: s
                    } = e;
                    return (0, a.jsx)(m.default, {
                        anchor: n,
                        id: t,
                        locked: l,
                        pinned: s,
                        widget: N.OverlayWidgets.LOBBY_VOICE,
                        isPreviewingInGame: i
                    })
                }
            };
            class y extends i.PureComponent {
                componentDidUpdate(e) {
                    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (r.default.track(N.AnalyticEvents.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
                        lastLayoutUpdate: null
                    }))
                }
                renderWidget(e, t, n) {
                    let {
                        props: {
                            locked: a,
                            isPreviewingInGame: i
                        },
                        state: {
                            dragging: l
                        }
                    } = this, s = I[e.type];
                    if (null == s) throw Error("OverlayLayout: Widget does not exist in WidgetMap");
                    return r => s({
                        id: e.id,
                        locked: a,
                        pinned: e.pinned,
                        dragging: l,
                        isPreviewingInGame: i,
                        anchor: t,
                        size: n,
                        dragStart: r
                    })
                }
                render() {
                    let {
                        widget: e,
                        widgetConfig: t,
                        layoutSize: n,
                        locked: i,
                        isPreviewingInGame: l,
                        isActiveRegion: s
                    } = this.props;
                    if (null == e || null == t) return null;
                    let {
                        id: r,
                        pinned: o,
                        zIndex: d,
                        size: u,
                        anchor: c
                    } = e, p = (0, h.getSizeFromLayoutSize)(u, n), E = (0, h.getAnchorCoordsFromLayoutSize)(c, n), {
                        minSize: g,
                        resizeX: m,
                        resizeY: v,
                        dragAnywhere: T
                    } = t, N = !i || s, I = (0, S.isWidgetContainerVisible)({
                        locked: i,
                        isPreviewingInGame: l,
                        pinned: o
                    }), y = {
                        minX: 0,
                        minY: 0,
                        maxX: n.width,
                        maxY: n.height
                    };
                    return (0, a.jsx)(f.default, {
                        id: r,
                        size: p,
                        anchor: E,
                        container: y,
                        minSize: g,
                        hidden: !I,
                        resizeX: m,
                        resizeY: v,
                        style: {
                            zIndex: d
                        },
                        dragAnywhere: T,
                        active: N,
                        onUpdate: this.handleUpdate,
                        onClick: this.handleFocus,
                        onDragStart: this.handleDragStart,
                        onDragEnd: this.handleDragEnd,
                        children: this.renderWidget(e, E, p)
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        lastLayoutUpdate: null,
                        dragging: !1
                    }, this.handleUpdate = (e, t, n, a, i) => {
                        let {
                            props: {
                                layoutSize: l
                            },
                            state: {
                                lastLayoutUpdate: r
                            }
                        } = this;
                        if (!(0, p.validResolution)(l)) return;
                        let o = (0, h.getAnchorPercentageFromLayoutSize)(n, l),
                            u = (0, h.getSizePercentageFromSize)(a, l);
                        (0, s.setTopWidget)(t), (0, s.setWidgetLayout)(t, o, u);
                        let c = e === f.Operations.MOVE,
                            E = (0, h.getFullCoordsFromAnchorCoords)(n, l.width, l.height, i.width, i.height);
                        this.setState({
                            lastLayoutUpdate: {
                                was_resized: null != r && r.was_resized || !c,
                                was_dragged: null != r && r.was_dragged || c,
                                widget_type: d.default.getWidgetType(t),
                                window_width: l.width,
                                window_height: l.height,
                                widget_width: i.width,
                                widget_height: i.height,
                                widget_left: E.left,
                                widget_top: E.top
                            }
                        })
                    }, this.handleFocus = e => {
                        let {
                            layoutSize: t
                        } = this.props;
                        (0, p.validResolution)(t) && (0, s.setTopWidget)(e)
                    }, this.handleDragStart = () => {
                        let {
                            widget: e
                        } = this.props;
                        null != e && (e.pinned && r.default.setPreviewInGameMode(!0), this.setState({
                            dragging: !0
                        }))
                    }, this.handleDragEnd = () => {
                        let {
                            widget: e
                        } = this.props;
                        null != e && (e.pinned && r.default.setPreviewInGameMode(!1), this.setState({
                            dragging: !1
                        }))
                    }
                }
            }
            let C = l.default.connectStores([d.default, u.default], e => {
                let {
                    widgetId: t
                } = e, n = d.default.getWidget(t), a = u.default.getActiveRegions();
                return {
                    widget: n,
                    widgetConfig: null != n ? d.default.getWidgetConfig(n.type) : null,
                    locked: u.default.isInstanceUILocked(),
                    isPreviewingInGame: u.default.isPreviewingInGame(),
                    isActiveRegion: null != n && a.has(n.type)
                }
            })(y);

            function _(e, t) {
                return (0, a.jsx)(C, {
                    widgetId: e,
                    layoutSize: t
                }, e)
            }
            var O = l.default.connectStores([d.default, c.default], () => ({
                layout: d.default.getLayout(p.OVERLAY_LAYOUT_ID),
                layoutSize: c.default.windowSize(),
                renderWidget: _
            }))(o.default)
        },
        880584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isWidgetContainerVisible: function() {
                    return l
                },
                dispatchOverlayWidgetIfChanged: function() {
                    return s
                },
                dispatchOverlayWidgetChanged: function() {
                    return r
                }
            });
            var a = n("913144"),
                i = n("703370");

            function l(e) {
                return !e.isPreviewingInGame && !e.locked || e.pinned
            }

            function s(e, t, n) {
                (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && r(t, n(t))
            }

            function r(e, t) {
                var n, s;
                let r = l(e),
                    o = i.default.getGame();
                a.default.dispatch({
                    type: "OVERLAY_WIDGET_CHANGED",
                    gameName: null !== (n = null == o ? void 0 : o.name) && void 0 !== n ? n : null,
                    gameId: null !== (s = null == o ? void 0 : o.id) && void 0 !== s ? s : null,
                    widgetType: e.widget,
                    visible: r && t,
                    locked: e.locked,
                    pinned: e.pinned
                })
            }
        },
        684325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("716984"),
                s = n("851387"),
                r = n("987317"),
                o = n("73749"),
                d = n("838857"),
                u = n("393414"),
                c = n("49111");
            class f extends i.Component {
                componentDidUpdate(e) {
                    let {
                        location: t
                    } = this.props;
                    t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
                }
                checkGuildAndChannel() {
                    let {
                        match: e
                    } = this.props;
                    if (null == e) return;
                    let {
                        guildId: t,
                        channelId: n,
                        messageId: a
                    } = function(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            messageId: a
                        } = e.params;
                        return {
                            guildId: null != t && "" !== t ? t : c.ME,
                            channelId: n,
                            messageId: a
                        }
                    }(e);
                    (0, d.isValidGuildId)(t) && (0, d.isValidChannelId)(n) ? (s.default.selectGuild(t), r.default.selectChannel({
                        guildId: t,
                        channelId: n,
                        messageId: a
                    })) : (0, u.replaceWith)(c.Routes.ME)
                }
                render() {
                    return null
                }
            }
            var h = () => (0, a.jsxs)(l.Switch, {
                children: [(0, a.jsx)(o.default, {
                    path: c.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
                    component: f
                }), (0, a.jsx)(o.default, {
                    component: f
                })]
            })
        },
        762243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("161179"),
                s = n.n(l),
                r = n("744196"),
                o = n("780166"),
                d = n("242260"),
                u = n("154891"),
                c = n("697218"),
                f = n("359554");

            function h(e) {
                let {
                    streamerId: t,
                    channelId: n
                } = e, l = i.useRef(null), o = (0, r.default)([c.default], () => c.default.getCurrentUser());
                return s(null != o, "user cannot be null"), (0, u.default)(l, o, t, n), (0, a.jsx)("canvas", {
                    className: f.canvas,
                    ref: l
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    channelId: n,
                    streamerId: i
                } = e, {
                    isSharedCanvasEnabled: l
                } = o.default.useExperiment({
                    guildId: t,
                    location: "f0d1b1_1"
                }, {
                    autoTrackExposure: !0
                }), s = (0, r.default)([d.default], () => d.default.visibleOverlayCanvas);
                return l && s ? (0, a.jsx)(h, {
                    guildId: t,
                    channelId: n,
                    streamerId: i
                }) : null
            }
        },
        265268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("762993"),
                s = n("570413"),
                r = n("350501"),
                o = n("42203"),
                d = n("18494"),
                u = n("360782"),
                c = n("846325"),
                f = n("404416");

            function h() {
                let [e, t] = (0, i.useStateFromStoresArray)([l.default], () => [l.default.enabled, l.default.keepOpen]), n = (0, i.useStateFromStores)([d.default], () => d.default.getVoiceChannelId()), h = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(n), [n]), p = null == h ? void 0 : h.getGuildId();
                return e && null != h ? (0, a.jsx)("div", {
                    className: f.widget,
                    children: (0, a.jsx)(r.default, {
                        width: c.SoundboardWheelSize.width,
                        height: c.SoundboardWheelSize.height,
                        guildId: p,
                        channel: h,
                        keepOpen: t,
                        onClose: function() {
                            let e = (0, u.default)();
                            null != e && (0, s.closeSoundboardInOverlay)(e)
                        },
                        analyticsSource: "overlay"
                    })
                }) : null
            }
        },
        440899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ei
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("161179"),
                o = n.n(r),
                d = n("498225"),
                u = n("77078"),
                c = n("272030"),
                f = n("295426"),
                h = n("819689"),
                p = n("539405"),
                E = n("352674"),
                g = n("125667"),
                m = n("767993"),
                S = n("738073"),
                v = n("685888"),
                T = n("533466"),
                N = n("710216"),
                I = n("971117"),
                y = n("306588"),
                C = n("850391"),
                _ = n("149022"),
                O = n("228800"),
                A = n("681060"),
                x = n("884351"),
                L = n("818950"),
                R = n("529805"),
                M = n("685841"),
                D = n("42203"),
                j = n("474643"),
                k = n("247013"),
                P = n("305961"),
                b = n("377253"),
                V = n("18494"),
                w = n("162771"),
                U = n("697218"),
                B = n("227602"),
                F = n("901165"),
                G = n("959479"),
                H = n("62843"),
                W = n("560995"),
                z = n("659500"),
                Y = n("718422"),
                K = n("13798"),
                Z = n("117026"),
                X = n("880584"),
                J = n("839878"),
                q = n("6791"),
                Q = n("49111"),
                $ = n("782340"),
                ee = n("422921");
            let et = q.OpacityBounds.TOP;
            class en extends i.Component {
                componentDidUpdate(e) {
                    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
                        focused: !0
                    })
                }
                componentWillUnmount() {
                    j.default.removeChangeListener(this.draftDidChange), z.ComponentDispatch.unsubscribe(Q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), z.ComponentDispatch.unsubscribe(Q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
                }
                render() {
                    let {
                        channel: e,
                        placeholder: t,
                        ...n
                    } = this.props, {
                        focused: i,
                        textValue: l,
                        contentWarningProps: s,
                        richValue: r
                    } = this.state, d = (0, a.jsx)(u.Popout, {
                        position: "top",
                        onRequestClose: () => {
                            var e;
                            null == s || null === (e = s.onCancel) || void 0 === e || e.call(s), this.setState({
                                contentWarningProps: null
                            })
                        },
                        shouldShow: null != s,
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return o(null != s, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(m.default, {
                                onClose: t,
                                ...s
                            })
                        },
                        children: () => (0, a.jsx)(A.default, {
                            ...n,
                            renderAttachButton: this.renderAttachButton,
                            channel: e,
                            type: C.ChatInputTypes.OVERLAY,
                            onFocus: () => this.setState({
                                focused: !0
                            }),
                            onBlur: () => this.setState({
                                focused: !1
                            }),
                            placeholder: t,
                            textValue: l,
                            richValue: r,
                            onSubmit: this.handleSendMessage,
                            onChange: this.handleTextareaChange,
                            onKeyDown: this.handleTextareaKeyDown,
                            focused: i
                        })
                    });
                    return e.isPrivate() ? (0, a.jsx)(I.default, {
                        channel: e,
                        children: d
                    }, e.id) : (0, a.jsx)(y.default, {
                        channel: e,
                        children: d
                    }, e.id)
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.draftDidChange = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                            {
                                textValue: n
                            } = t.state,
                            a = j.default.getDraft(e.channel.id, j.DraftType.ChannelMessage);
                        n !== a && "" === a && t.setState((0, _.createState)(a))
                    }, this.handleTextareaKeyDown = e => {
                        if (e.which === Q.KeyboardKeys.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
                            e.preventDefault();
                            let {
                                channel: t
                            } = this.props, n = b.default.getLastEditableMessage(t.id);
                            null != n && h.default.startEditMessage(t.id, n.id, n.content)
                        }
                    }, this.handleTextareaChange = (e, t, n) => {
                        let {
                            channel: {
                                id: a
                            }
                        } = this.props;
                        f.default.changeDraft(a, this.state.textValue, j.DraftType.ChannelMessage), "" !== t ? E.default.startTyping(a) : E.default.stopTyping(a), this.setState({
                            textValue: t,
                            richValue: n
                        })
                    }, this.handleSendMessage = e => {
                        let {
                            value: t
                        } = e, {
                            channel: n,
                            pendingReply: a,
                            isTemporarilyActive: i
                        } = this.props;
                        return 0 === t.length ? Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0
                        }) : (0, Y.applyChatRestrictions)({
                            openWarningPopout: e => this.setState({
                                contentWarningProps: e
                            }),
                            type: C.ChatInputTypes.OVERLAY,
                            content: t,
                            channel: n
                        }).then(e => {
                            let {
                                valid: l,
                                failureReason: s
                            } = e;
                            if (!l) return s === Q.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (z.ComponentDispatch.dispatch(Q.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }) : {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                            let r = h.default.getSendMessageOptionsForReply(a);
                            return (h.default.sendMessage(n.id, x.default.parse(n, t), !0, r), this.setState((0, _.createEmptyState)()), (0, R.deletePendingReply)(n.id), i) ? (p.default.deactivateAllRegions(), {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }) : {
                                shouldClear: !0,
                                shouldRefocus: !0
                            }
                        })
                    }, this.focusInput = () => {
                        this.setState({
                            focused: !0
                        })
                    }, this.blurInput = () => {
                        this.setState({
                            focused: !1
                        })
                    }, this.renderAttachButton = (e, t, n) => (0, a.jsx)(O.default, {
                        className: n,
                        channel: this.props.channel,
                        draftType: j.DraftType.ChannelMessage,
                        editorTextContent: this.state.textValue,
                        setValue: e => this.handleTextareaChange(null, e, (0, _.toRichValue)(e)),
                        canShowPremiumTutorial: e,
                        canOnlyUseTextCommands: t
                    }), j.default.addChangeListener(this.draftDidChange);
                    let n = j.default.getDraft(e.channel.id, j.DraftType.ChannelMessage);
                    this.state = {
                        ...(0, _.createState)(n),
                        focused: !1,
                        contentWarningProps: null
                    }, z.ComponentDispatch.subscribe(Q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), z.ComponentDispatch.subscribe(Q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
                }
            }
            class ea extends i.PureComponent {
                componentDidUpdate(e) {
                    let {
                        channel: t,
                        activated: n
                    } = this.props;
                    (0, X.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && p.default.track(Q.AnalyticEvents.OVERLAY_UNLOCKED, {
                        channel_id: t.id,
                        channel_type: t.type,
                        guild_id: t.guild_id
                    })
                }
                componentDidMount() {
                    (0, X.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
                }
                getOpacity() {
                    let e;
                    let {
                        locked: t,
                        activated: n,
                        opacity: a,
                        isPreviewingInGame: i
                    } = this.props;
                    return e = t && !n || i ? a / 100 : n || !t ? Math.min(1, (a + 25) / 100) : W.DEFAULT_OPACITY
                }
                renderContent() {
                    let e;
                    let {
                        channel: t,
                        placeholder: n,
                        nsfwAgree: l,
                        guild: r,
                        locked: o,
                        activated: d,
                        chatKeybind: u,
                        pinned: c,
                        isPreviewingInGame: f,
                        dragging: h,
                        pendingReply: p
                    } = this.props;
                    if (null == t) return null;
                    let E = o || f,
                        m = !l && null != t && t.isNSFW();
                    return e = m && null != r ? (0, a.jsx)(S.default, {
                        guild: r
                    }) : (0, a.jsx)(L.default, {
                        channel: t,
                        className: ee.messages,
                        forceCompact: c,
                        showNewMessagesBar: !E,
                        scrollerClassName: c ? ee.scroller : void 0,
                        showingSpamBanner: !1,
                        showingQuarantineBanner: !1
                    }, t.id), (0, a.jsx)(H.MessagesInteractionContext.Provider, {
                        value: {
                            disableInteractions: c && o && !d,
                            disableAnimations: c && E && !d
                        },
                        children: (0, a.jsxs)(i.Fragment, {
                            children: [!o && !f && (0, a.jsx)(N.default, {
                                channel: t,
                                guild: r
                            }), (0, a.jsx)(W.default.Background, {
                                opacityOverride: o || f ? null : et,
                                children: (0, a.jsx)("div", {
                                    className: s(ee.messagesContainer, {
                                        [ee.isDragging]: h,
                                        [ee.disableHoverStates]: c && o && !d
                                    }),
                                    children: e
                                })
                            }), m ? null : (0, a.jsx)("div", {
                                children: !E || d ? (0, a.jsx)(W.default.Background, {
                                    opacityOverride: o || f ? null : et,
                                    children: (0, a.jsxs)("div", {
                                        className: ee.footerContent,
                                        children: [(0, a.jsx)(en, {
                                            channel: t,
                                            placeholder: n,
                                            isTemporarilyActive: d,
                                            pendingReply: p
                                        }), (0, a.jsx)("div", {
                                            className: ee.typingWrapper,
                                            children: (0, a.jsx)(g.default, {
                                                channel: t,
                                                className: ee.typing
                                            })
                                        })]
                                    })
                                }) : (0, a.jsx)("div", {
                                    className: ee.activateContainer,
                                    children: (0, a.jsx)(W.default.Background, {
                                        opacityOverride: q.OpacityBounds.LOWER,
                                        children: (0, a.jsx)("div", {
                                            className: s(ee.activateKeybind, ee.mediumBackgroundOpacity),
                                            children: null != t.name && t.name.length > 0 ? $.default.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                                                keybind: u,
                                                channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                                            }) : $.default.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                                                keybind: u
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }
                renderWidgetWrapper(e) {
                    let {
                        locked: t,
                        pinned: n,
                        activated: i,
                        isPreviewingInGame: l,
                        opacity: r
                    } = this.props, o = Q.OverlayWidgetTypes.UNPINNED;
                    i ? o = Q.OverlayWidgetTypes.IN_GAME_ACTIVE : n && t || l ? o = Q.OverlayWidgetTypes.IN_GAME_TEXT : n && (o = Q.OverlayWidgetTypes.PINNED);
                    let d = t && !i || l,
                        u = (0, Z.default)(r);
                    return (0, a.jsx)(W.default, {
                        className: s(u, {
                            [ee.widgetWrapper]: !n,
                            [ee.widgetWrapperPinned]: n,
                            [ee.locked]: n && d && !i,
                            [ee.inGame]: n && (d || i),
                            [ee.inGameActive]: n && i,
                            [ee.pinned]: n,
                            "overlay-unlocked": !t
                        }),
                        type: o,
                        opacity: r,
                        children: e
                    })
                }
                renderContainedWrapper(e) {
                    return (0, a.jsx)("div", {
                        className: ee.contained,
                        children: e
                    })
                }
                shouldDisplay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return null != e.channel
                }
                render() {
                    let {
                        locked: e,
                        channel: t,
                        pinned: n,
                        isPreviewingInGame: l,
                        contained: s
                    } = this.props;
                    if (null == t || !this.shouldDisplay()) return null;
                    let r = (0, a.jsxs)(i.Fragment, {
                        children: [(0, a.jsx)(J.default, {
                            draggableClassName: ee.draggableStartArea,
                            className: ee.headerDefault,
                            channel: t,
                            locked: e,
                            pinned: n,
                            disableDragIndicator: s,
                            isPreviewingInGame: l,
                            handlePin: this.handlePin,
                            onContextMenu: this.handleContextMenu,
                            onMouseDown: this.moveDragStart
                        }), this.renderContent(), e || l ? null : (0, a.jsx)("div", {
                            className: ee.resizeIcon,
                            onMouseDown: this.resizeDragStart
                        })]
                    });
                    return s ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r)
                }
                constructor(...e) {
                    super(...e), this.handlePin = () => {
                        var e, t, n;
                        let a = !this.props.pinned;
                        p.default.track(Q.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
                            pinned: a,
                            guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                            channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                            channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                            widget_type: Q.OverlayWidgets.TEXT
                        }), p.default.setPinChat(a)
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t,
                            user: i
                        } = this.props;
                        null != t && null != i && (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("130074").then(n.bind(n, "130074"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                user: i,
                                channelSelected: !0,
                                channel: t
                            })
                        })
                    }, this.moveDragStart = e => {
                        let {
                            dragStart: t
                        } = this.props;
                        t(G.Operations.MOVE, e.clientX, e.clientY)
                    }, this.resizeDragStart = e => {
                        let {
                            dragStart: t
                        } = this.props;
                        t(G.Operations.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
                    }
                }
            }

            function ei(e) {
                let {
                    contained: t = !1,
                    ...n
                } = e, i = (0, d.useStateFromStores)([w.default], () => w.default.getGuildId()), l = (0, d.useStateFromStores)([V.default], () => V.default.getChannelId(i)), s = (0, d.useStateFromStores)([D.default], () => D.default.getChannel(l)), r = (0, d.useStateFromStores)([B.default], () => B.default.getOverlayChatKeybind()), o = null != r ? (0, K.toString)(r.shortcut, !0) : "]", [u, c, f] = (0, d.useStateFromStoresArray)([F.default], () => [F.default.getTextWidgetOpacity(), F.default.getActiveRegions(), !t && F.default.isPreviewingInGame()]), h = (0, d.useStateFromStores)([P.default], () => P.default.getGuild(i)), p = (0, d.useStateFromStores)([k.default], () => null != i && k.default.didAgree(i)), E = null != s && s.isPrivate() ? s.getRecipientId() : null, g = (0, d.useStateFromStores)([M.default], () => null != l ? M.default.getPendingReply(l) : void 0), m = (0, d.useStateFromStores)([U.default], () => null != E ? U.default.getUser(E) : null), {
                    placeholder: S
                } = (0, v.default)(s);
                return null != s && null != h && Q.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type) ? (0, a.jsx)(T.default, {}) : (0, a.jsx)(ea, {
                    guild: h,
                    channel: s,
                    user: m,
                    opacity: u,
                    nsfwAgree: p,
                    chatKeybind: o,
                    activated: c.has(Q.OverlayActiveRegions.TEXT_WIDGET),
                    isPreviewingInGame: f,
                    pendingReply: g,
                    contained: t,
                    placeholder: S,
                    widget: Q.OverlayWidgets.TEXT,
                    ...n
                })
            }
        },
        839878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("498225"),
                o = n("77078"),
                d = n("539405"),
                u = n("987317"),
                c = n("679653"),
                f = n("539938"),
                h = n("557809"),
                p = n("233069"),
                E = n("950104"),
                g = n("42203"),
                m = n("305961"),
                S = n("27618"),
                v = n("18494"),
                T = n("887657"),
                N = n("293137"),
                I = n("945330"),
                y = n("673220"),
                C = n("960086"),
                _ = n("519794"),
                O = n("393900"),
                A = n("560995"),
                x = n("423741"),
                L = n("782340"),
                R = n("935745");
            class M extends i.Component {
                componentDidUpdate() {
                    this.props.locked && this.state.showOpacitySlider && this.setState({
                        showOpacitySlider: !1
                    })
                }
                renderCallButton() {
                    let e, t;
                    let {
                        channel: n,
                        channelHasActiveCall: i,
                        userIsInChannelCall: l,
                        isBlocked: s
                    } = this.props;
                    if (!(0, p.isPrivate)(n.type)) return null;
                    let r = T.default,
                        d = !1;
                    return i ? l ? (e = L.default.Messages.LEAVE_CALL, r = N.default) : e = L.default.Messages.JOIN_CALL : s ? (e = L.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, t = o.Tooltip.Colors.RED, d = !0) : e = L.default.Messages.START_VOICE_CALL, (0, a.jsx)(f.default.Icon, {
                        icon: r,
                        tooltip: e,
                        onClick: this.handleClickCall,
                        tooltipColor: t,
                        disabled: d
                    })
                }
                render() {
                    let {
                        className: e,
                        draggableClassName: t,
                        locked: n,
                        channel: i,
                        channelName: l,
                        guild: r,
                        onMouseDown: o,
                        onContextMenu: d,
                        isPreviewingInGame: u,
                        disableDragIndicator: c
                    } = this.props, {
                        showOpacitySlider: p
                    } = this.state;
                    return p && !n ? (0, a.jsxs)(A.default.Bar, {
                        className: R.opacityHeader,
                        children: [(0, a.jsx)(x.default, {}), (0, a.jsx)(f.default.Icon, {
                            icon: I.default,
                            onClick: this.handleCloseOpacitySettings,
                            tooltip: L.default.Messages.CLOSE
                        })]
                    }) : (0, a.jsx)(A.default.Background, {
                        opacityOverride: n || u ? null : 1,
                        children: (0, a.jsx)("div", {
                            className: s(e, t, R.headerContainer),
                            onMouseDown: o,
                            onContextMenu: d,
                            children: (0, a.jsxs)(f.default, {
                                guildId: i.guild_id,
                                channelId: i.id,
                                toolbar: this.renderWidgetButtons(),
                                transparent: !0,
                                children: [u || n || c ? null : (0, a.jsx)(y.default, {
                                    className: s(R.dragIcon, t),
                                    width: 20,
                                    height: 20
                                }), (0, h.renderTitle)({
                                    channel: i,
                                    channelName: l
                                }), n ? null : (0, h.renderTopic)(i, r)]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        showOpacitySlider: !1
                    }, this.handleClickCall = e => {
                        let {
                            channel: t,
                            userIsInChannelCall: n,
                            channelHasActiveCall: a
                        } = this.props;
                        if (a) n ? u.default.selectVoiceChannel(null) : d.default.callPrivateChannel(t.id, !1);
                        else {
                            let n = !a && !e.shiftKey;
                            d.default.callPrivateChannel(t.id, n)
                        }
                    }, this.handleOpenOpacitySettings = () => {
                        let {
                            pinned: e
                        } = this.props;
                        this.setState({
                            showOpacitySlider: !0
                        }), e && d.default.setPreviewInGameMode(!0)
                    }, this.handleCloseOpacitySettings = () => {
                        let {
                            pinned: e
                        } = this.props;
                        this.setState({
                            showOpacitySlider: !1
                        }), e && d.default.setPreviewInGameMode(!1)
                    }, this.handleMouseDown = e => {
                        let {
                            onMouseDown: t
                        } = this.props;
                        null != t && t(e)
                    }, this.renderWidgetButtons = () => {
                        let {
                            locked: e,
                            handlePin: t,
                            pinned: n
                        } = this.props, l = n ? L.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : L.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
                        return e ? null : (0, a.jsxs)(i.Fragment, {
                            children: [this.renderCallButton(), n ? (0, a.jsx)(f.default.Icon, {
                                icon: C.default,
                                tooltip: L.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
                                onClick: this.handleOpenOpacitySettings
                            }) : null, (0, a.jsx)(f.default.Icon, {
                                icon: n ? O.default : _.default,
                                tooltip: l,
                                selected: n,
                                onClick: t
                            })]
                        })
                    }
                }
            }

            function D(e) {
                let {
                    channel: t,
                    ...n
                } = e, i = (0, r.useStateFromStores)([v.default, g.default], () => {
                    let e = v.default.getVoiceChannelId();
                    return g.default.getChannel(e)
                }), l = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id)), s = (0, r.useStateFromStores)([E.default], () => E.default.isCallActive(t.id)), o = (0, c.default)(t), d = (0, r.useStateFromStores)([S.default], () => !!t.isDM() && null != t.getRecipientId() && S.default.isBlocked(t.getRecipientId()));
                return (0, a.jsx)(M, {
                    channel: t,
                    channelName: o,
                    guild: l,
                    channelHasActiveCall: s,
                    userIsInChannelCall: null != i && i.id === t.id,
                    isBlocked: d,
                    ...n
                })
            }
        },
        423741: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                s = n("77078"),
                r = n("539405"),
                o = n("901165"),
                d = n("476765"),
                u = n("101698"),
                c = n("6791"),
                f = n("49111"),
                h = n("782340"),
                p = n("562377");
            let E = Object.values(c.OpacityBounds).map(e => 100 * e),
                g = (0, d.uid)();
            class m extends i.PureComponent {
                handleUpdateBackgroundOpacity(e) {
                    r.default.setTextWidgetOpacity((0, u.default)(e / 100)), r.default.track(f.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                        text_opacity_slider: e
                    })
                }
                handlePreviewBackgroundOpacity(e) {
                    r.default.setTextWidgetOpacity((0, u.default)(e / 100))
                }
                render() {
                    return (0, a.jsxs)("div", {
                        className: p.container,
                        children: [(0, a.jsx)(s.FormTitle, {
                            id: g,
                            tag: s.FormTitleTags.H5,
                            className: p.title,
                            children: h.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
                        }), (0, a.jsx)("div", {
                            className: p.sliderContainer,
                            children: (0, a.jsx)(s.Slider, {
                                mini: !0,
                                initialValue: this.initialValue,
                                defaultValue: this.initialValue,
                                minValue: E[0],
                                maxValue: E[E.length - 1],
                                handleSize: 10,
                                onValueChange: this.handleUpdateBackgroundOpacity,
                                asValueChanges: this.handlePreviewBackgroundOpacity,
                                markers: E,
                                onMarkerRender: f.NOOP,
                                equidistant: !0,
                                stickToMarkers: !0,
                                "aria-labelledby": g
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.initialValue = 100 * this.props.opacity
                }
            }
            var S = l.default.connectStores([o.default], () => ({
                opacity: o.default.getTextWidgetOpacity()
            }))(m)
        },
        522019: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceWidget: function() {
                    return eo
                },
                default: function() {
                    return ed
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("498225"),
                o = n("912557"),
                d = n("769846"),
                u = n("77078"),
                c = n("272030"),
                f = n("640583"),
                h = n("539405"),
                p = n("990766"),
                E = n("899633"),
                g = n("679653"),
                m = n("374014"),
                S = n("560367"),
                v = n("293383"),
                T = n("375202"),
                N = n("49040"),
                I = n("488464"),
                y = n("998716"),
                C = n("331759"),
                _ = n("857398"),
                O = n("373469"),
                A = n("271938"),
                x = n("42203"),
                L = n("546463"),
                R = n("42887"),
                M = n("568307"),
                D = n("18494"),
                j = n("280168"),
                k = n("703370"),
                P = n("316133"),
                b = n("901165"),
                V = n("145131"),
                w = n("953109"),
                U = n("673220"),
                B = n("474571"),
                F = n("519794"),
                G = n("368121"),
                H = n("985622"),
                W = n("393900"),
                z = n("258078"),
                Y = n("560995"),
                K = n("762489"),
                Z = n("806474"),
                X = n("334572"),
                J = n("158998"),
                q = n("819068"),
                Q = n("664980"),
                $ = n("880584"),
                ee = n("49111"),
                et = n("860604"),
                en = n("782340"),
                ea = n("343731");
            let ei = (e, t, n) => {
                    let a = t.isVoiceMuted();
                    return a || A.default.getId() !== t.userId ? !a && (a = n.isLocalMute(t.userId, e)) : a = !n.isEnabled() || n.isSelfMute(e) || n.isSelfMutedTemporarily(e), a
                },
                el = (e, t) => {
                    let n = t.isVoiceDeafened();
                    return !n && A.default.getId() === t.userId && (n = R.default.isSelfDeaf(e)), n
                };
            class es extends i.PureComponent {
                render() {
                    let {
                        flipped: e,
                        locked: t,
                        deafened: n,
                        muted: i,
                        streaming: l,
                        watching: r,
                        user: o,
                        size: d,
                        speaking: u,
                        isPrioritySpeaker: c,
                        nick: f,
                        displayNameMode: h,
                        displayUserMode: p,
                        guildId: E
                    } = this.props;
                    return p === ee.OverlayDisplayUsers.ONLY_WHILE_SPEAKING && t && !u ? null : (0, a.jsx)(Z.default, {
                        guildId: E,
                        onClick: t ? void 0 : this.handleClick,
                        onContextMenu: t ? void 0 : this.handleContextMenu,
                        className: s(ea.voiceUserWrapper, {
                            [ea.faded]: !u,
                            [ea.interactive]: !t
                        }),
                        user: o,
                        nick: f,
                        speaking: !1,
                        flipped: e,
                        isStreaming: l,
                        iconClassName: s(ea.voiceIcon, {
                            [ea.locked]: t
                        }),
                        isWatching: r,
                        size: d,
                        priority: c,
                        deaf: n,
                        mute: i,
                        userNameClassName: s(ea.username, {
                            [ea.locked]: t,
                            [ea.hidden]: t && (h === ee.OverlayDisplayNames.NEVER || !u && h === ee.OverlayDisplayNames.ONLY_WHILE_SPEAKING)
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        let {
                            onClick: t,
                            user: n
                        } = this.props;
                        null != t && t(e, n)
                    }, this.handleContextMenu = e => {
                        let {
                            onContextMenu: t,
                            user: n
                        } = this.props;
                        null != t && t(e, n)
                    }
                }
            }

            function er(e) {
                let {
                    context: t,
                    user: n,
                    voiceState: l,
                    guildId: s,
                    ...o
                } = e, d = ei(t, l, R.default), u = (0, r.useStateFromStores)([O.default], () => O.default.getCurrentUserActiveStream()), c = (0, r.useStateFromStoresArray)([O.default], () => null != u ? O.default.getViewerIds(u) : []), f = (0, E.default)({
                    userId: n.id,
                    context: t
                }), h = (0, r.useStateFromStores)([j.default], () => j.default.isPrioritySpeaker(n.id, t)), p = (0, r.useStateFromStores)([A.default, R.default], () => el(t, l)), g = (0, r.useStateFromStores)([O.default], () => null != O.default.getStreamForUser(n.id, s)), m = i.useMemo(() => null != u && u.ownerId !== n.id && c.includes(n.id), [u, n.id, c]);
                return (0, a.jsx)(es, {
                    ...o,
                    muted: d,
                    context: t,
                    user: n,
                    speaking: f,
                    isPrioritySpeaker: h,
                    deafened: p,
                    streaming: g,
                    watching: m,
                    guildId: s
                })
            }
            es.defaultProps = {
                size: ee.OverlayAvatarSizes.LARGE,
                flipped: !1,
                locked: !1,
                speaking: !1,
                isPrioritySpeaker: !1,
                deafened: !1,
                muted: !1
            };
            class eo extends i.PureComponent {
                renderVoiceUsers() {
                    let {
                        context: e,
                        sortedVoiceStates: t,
                        displayNameMode: n,
                        displayUserMode: i,
                        locked: l,
                        isPreviewingInGame: r,
                        channel: o,
                        anchor: u,
                        avatarSizeMode: c
                    } = this.props, f = null != u.right, h = t.map(t => {
                        var s;
                        let {
                            user: d,
                            voiceState: u,
                            member: h
                        } = t;
                        return null == d || null == o || null == e ? null : (0, a.jsx)(er, {
                            guildId: null == o ? void 0 : o.guild_id,
                            user: d,
                            nick: null !== (s = null == h ? void 0 : h.nick) && void 0 !== s ? s : J.default.getName(d),
                            channel: o,
                            flipped: f,
                            voiceState: u,
                            displayNameMode: n,
                            displayUserMode: i,
                            size: c,
                            locked: l || r,
                            onContextMenu: this.handleUserContextMenu,
                            onClick: this.handleUserContextMenu,
                            context: e
                        }, d.id)
                    });
                    return (0, a.jsx)(Y.default.Body, {
                        className: s({
                            [d.default.VOICE_WIDGET_TOP_MARGIN]: l,
                            [ea.bottomMargin]: l
                        }),
                        children: (0, a.jsx)(Z.VoiceUserList, {
                            className: ea.voiceList,
                            children: h
                        })
                    })
                }
                renderHeader() {
                    let {
                        pinned: e,
                        title: t,
                        isPreviewingInGame: n
                    } = this.props;
                    return (0, a.jsxs)(Y.default.Bar, {
                        className: s(ea.draggableStartArea, {
                            [ea.preview]: n
                        }),
                        children: [(0, a.jsxs)(Y.default.Content, {
                            dynamicSize: !0,
                            className: s(ea.content, {
                                [ea.hidden]: n
                            }),
                            children: [(0, a.jsx)(U.default, {
                                color: o.default.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: s(ea.icon, ea.faded, ea.dragIcon)
                            }), (0, a.jsx)(G.default, {
                                color: o.default.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: s(ea.icon, ea.faded, ea.speakerIcon)
                            }), (0, a.jsx)(z.default, {
                                color: o.default.unsafe_rawColors.PRIMARY_200.css,
                                className: ea.title,
                                children: t
                            })]
                        }), n ? null : (0, a.jsx)(Y.default.Icon, {
                            icon: B.default,
                            label: en.default.Messages.VOICE_SETTINGS,
                            onClick: this.handleOpenVoiceSettings,
                            tooltipPosition: "left",
                            size: 18
                        }), n ? null : (0, a.jsx)(Y.default.Icon, {
                            icon: e ? W.default : F.default,
                            label: e ? en.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : en.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
                            onClick: this.handlePin,
                            tooltipPosition: "left",
                            size: 18,
                            isActive: e
                        })]
                    })
                }
                renderStreamerSettings() {
                    var e;
                    let {
                        locked: t,
                        pinned: n,
                        isPreviewingInGame: i,
                        channel: l,
                        application: r,
                        streamMetadata: o,
                        streamApplication: d,
                        stream: c
                    } = this.props;
                    if (t || null == c || null == l) return null;
                    let {
                        sanitizedTitle: f,
                        title: h
                    } = (0, S.default)(o);
                    return (0, a.jsx)(Y.default.Bar, {
                        className: s(ea.streamerControls, {
                            [ea.hidden]: i,
                            [ea.unpinned]: !n
                        }),
                        children: (0, a.jsxs)(Y.default.Content, {
                            className: ea.streamerContent,
                            dynamicSize: !0,
                            children: [(0, a.jsxs)("div", {
                                className: ea.streamerInner,
                                children: [(null == d ? void 0 : d.id) != null && d.id === (null == r ? void 0 : r.id) ? (0, a.jsx)(w.default, {
                                    className: ea.gameIcon,
                                    game: r
                                }) : (0, a.jsx)(v.default, {
                                    title: f
                                }), (0, a.jsxs)(V.default, {
                                    direction: V.default.Direction.VERTICAL,
                                    justify: V.default.Justify.BETWEEN,
                                    className: ea.streamerInfo,
                                    children: [(0, a.jsx)(u.Text, {
                                        className: ea.streaming,
                                        variant: "text-sm/normal",
                                        children: en.default.Messages.STATUS_STREAMING
                                    }), (0, a.jsx)(K.default, {
                                        children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : h
                                    })]
                                })]
                            }), (0, a.jsxs)(V.default, {
                                grow: 0,
                                children: [(0, a.jsx)("div", {
                                    className: ea.streamerIconWrapper,
                                    children: (0, a.jsx)(C.default, {
                                        stream: c,
                                        iconClassName: ea.streamerIcon,
                                        appContext: ee.AppContext.OVERLAY
                                    })
                                }), (0, a.jsx)("div", {
                                    className: ea.streamerIconWrapper,
                                    children: (0, a.jsx)(_.default, {
                                        stream: c,
                                        appContext: ee.AppContext.OVERLAY
                                    })
                                }), (0, a.jsx)("div", {
                                    className: ea.streamerIconWrapper,
                                    children: (0, a.jsx)(u.TooltipContainer, {
                                        text: en.default.Messages.STOP_STREAMING,
                                        children: (0, a.jsx)(u.Button, {
                                            onClick: this.handleStopStream,
                                            look: u.Button.Looks.BLANK,
                                            size: u.Button.Sizes.NONE,
                                            children: (0, a.jsx)(H.default, {
                                                className: ea.streamerIcon
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                }
                componentDidMount() {
                    (0, $.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
                }
                componentDidUpdate(e) {
                    (0, $.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay)
                }
                shouldDisplay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            context: t,
                            locked: n,
                            pinned: a,
                            sortedVoiceStates: i,
                            channel: l
                        } = e;
                    return 0 !== i.length && null != t && null != l && (!n || !!a) && !0
                }
                render() {
                    let {
                        context: e,
                        lobbyId: t,
                        locked: n,
                        pinned: i,
                        isPreviewingInGame: l,
                        channel: r
                    } = this.props;
                    if (null == r || null == e || !this.shouldDisplay()) return null;
                    let o = ee.OverlayWidgetTypes.UNPINNED;
                    return i && (o = ee.OverlayWidgetTypes.PINNED), l && (o = ee.OverlayWidgetTypes.IN_GAME_PREVIEW), n && (o = ee.OverlayWidgetTypes.IN_GAME), (0, a.jsxs)(Y.default, {
                        type: o,
                        width: 280,
                        children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, a.jsx)(Q.default, {
                            className: s({
                                [ea.preview]: l
                            }),
                            contentClassName: s({
                                [ea.hidden]: l
                            }),
                            channel: r,
                            lobbyId: t,
                            context: e,
                            pinned: i
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleUserContextMenu = (e, t) => {
                        let {
                            context: i
                        } = this.props;
                        (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: i
                            })
                        })
                    }, this.handleOpenVoiceSettings = () => {
                        let {
                            context: e,
                            channel: t,
                            title: i
                        } = this.props;
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await n.el("301450").then(n.bind(n, "301450"));
                            return n => (0, a.jsx)(l, {
                                ...n,
                                mediaEngineContext: e,
                                title: null != t ? null : i
                            })
                        })
                    }, this.handlePin = () => {
                        var e, t, n;
                        let a = !this.props.pinned;
                        h.default.track(ee.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
                            pinned: a,
                            guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                            channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                            channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                            widget_type: ee.OverlayWidgets.VOICE
                        });
                        let {
                            id: i
                        } = this.props;
                        (0, f.togglePinned)(i)
                    }, this.handleStopStream = () => {
                        let {
                            stream: e
                        } = this.props;
                        null != e && p.stopStream((0, m.encodeStreamKey)(e))
                    }
                }
            }
            eo.defaultProps = {
                context: et.MediaEngineContextTypes.DEFAULT
            };

            function ed(e) {
                var t;
                let n = (0, r.useStateFromStores)([D.default, x.default], () => x.default.getChannel(D.default.getVoiceChannelId())),
                    i = (0, g.default)(n),
                    l = function(e) {
                        let [t] = (0, r.useStateFromStores)([P.default, I.default], () => null == e ? [
                            [], -1
                        ] : e.isGuildStageVoice() ? [I.default.getMutableParticipants(e.id, y.StageChannelParticipantNamedIndex.SPEAKER), I.default.getParticipantsVersion(e.id)] : [P.default.getVoiceStatesForChannel(e), P.default.getVoiceStateVersion(e.getGuildId())], [e], X.isVersionEqual);
                        return t
                    }(n),
                    s = (0, r.useStateFromStores)([O.default], () => O.default.getStreamerActiveStreamMetadata()),
                    o = (0, r.useStateFromStoresObject)([M.default, k.default, O.default, b.default, L.default], () => {
                        let e = (0, T.default)(M.default, k.default),
                            t = O.default.getCurrentUserActiveStream();
                        return {
                            displayUserMode: b.default.getDisplayUserMode(),
                            displayNameMode: b.default.getDisplayNameMode(),
                            avatarSizeMode: b.default.getAvatarSizeMode(),
                            application: null != e ? L.default.getGameByGameData(e) : null,
                            streamApplication: (null == s ? void 0 : s.pid) === (0, q.getPID)() ? (0, N.default)(e) : null,
                            stream: t
                        }
                    });
                return (0, a.jsx)(eo, {
                    ...o,
                    ...e,
                    sortedVoiceStates: l,
                    channel: n,
                    title: null != i ? i : "",
                    streamMetadata: s,
                    streamApplication: null !== (t = o.streamApplication) && void 0 !== t ? t : {
                        id: null,
                        name: null == s ? void 0 : s.sourceName
                    }
                })
            }
        },
        246458: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("623829"),
                s = n("498225"),
                r = n("77078"),
                o = n("575136"),
                d = n("534222"),
                u = n("120817"),
                c = n("637667"),
                f = n("934743"),
                h = n("393027"),
                p = n("870691"),
                E = n("816092"),
                g = n("162805"),
                m = n("245997"),
                S = n("923959"),
                v = n("952451"),
                T = n("305961"),
                N = n("957255"),
                I = n("18494"),
                y = n("282109"),
                C = n("316133"),
                _ = n("474571"),
                O = n("560995"),
                A = n("637842"),
                x = n("758547"),
                L = n("49111"),
                R = n("695838"),
                M = n("782340"),
                D = n("630411");
            let j = 54;
            class k extends i.PureComponent {
                static getDerivedStateFromProps(e) {
                    let {
                        guild: t
                    } = e;
                    return null == t || null == t.banner ? {
                        renderBanner: !1,
                        bannerVisible: !1
                    } : null
                }
                componentDidMount() {
                    let {
                        guildId: e
                    } = this.props, {
                        scrollTop: t
                    } = g.default.getGuildDimensions(e);
                    this.setAnimatedValue(null != t ? t : 0)
                }
                componentDidUpdate(e) {
                    let {
                        guild: t,
                        guildId: n
                    } = this.props;
                    if (e.guild !== t) {
                        let {
                            scrollTop: e
                        } = g.default.getGuildDimensions(n);
                        this.setAnimatedValue(null != e ? e : 0)
                    }
                }
                renderSettings(e) {
                    let {
                        closePopout: t
                    } = e;
                    return (0, a.jsx)(A.default, {
                        onClose: t
                    })
                }
                setAnimatedValue(e) {
                    let {
                        guild: t
                    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
                    null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e))
                }
                setAnimatedValueForBanner(e) {
                    let {
                        renderBanner: t,
                        communityInfoVisible: n,
                        bannerVisible: a,
                        controller: i
                    } = this.state;
                    (e >= j && a || e < j && !a) && (a = !a), (e >= 78 && !t || e < 78 && t) && (t = !t), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
                        renderBanner: t,
                        bannerVisible: a,
                        communityInfoVisible: n
                    }), i.update({
                        value: Math.min(1, Math.max(0, 1 - e / 78)),
                        immediate: !0
                    }).start()
                }
                setAnimatedValueForCommunityInfo(e) {
                    let {
                        communityInfoVisible: t,
                        controller: n
                    } = this.state;
                    (e >= 20 && t || e < 20 && !t) && this.setState({
                        communityInfoVisible: !t
                    }), n.update({
                        value: Math.min(1, Math.max(0, 1 - e / 20)),
                        immediate: !0
                    }).start()
                }
                render() {
                    let {
                        onDragStart: e,
                        ...t
                    } = this.props, {
                        guild: n
                    } = t, {
                        controller: i,
                        renderBanner: l,
                        bannerVisible: s,
                        communityInfoVisible: o
                    } = this.state, d = n.id === R.FAVORITES_RAW_GUILD_ID ? u.FavoritesChannelList : u.GuildChannelList;
                    return (0, a.jsxs)(x.default, {
                        header: (0, a.jsx)(c.default, {
                            guild: n,
                            controller: i,
                            renderBanner: l,
                            bannerVisible: s,
                            className: D.guildHeader,
                            headerClassName: D.guildHeaderInner,
                            onMouseDown: e,
                            disableBannerAnimation: !1,
                            communityInfoVisible: o,
                            children: (0, a.jsx)(r.Popout, {
                                position: "right",
                                renderPopout: this.renderSettings,
                                children: e => (0, a.jsx)(O.default.Icon, {
                                    icon: _.default,
                                    label: M.default.Messages.SETTINGS,
                                    ...e
                                })
                            })
                        }),
                        children: [(0, a.jsx)("div", {
                            className: D.channelList,
                            children: (0, a.jsx)(d, {
                                ...t,
                                guild: n,
                                disableManageChannels: !0,
                                onScroll: null != n && null != n.banner ? this.handleScroll : null
                            })
                        }), (0, a.jsx)("section", {
                            className: D.panels,
                            "aria-label": M.default.Messages.ACCOUNT_A11Y_LABEL,
                            children: (0, a.jsx)(f.default, {
                                guildId: n.id
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        controller: new l.Controller({
                            value: 1,
                            immediate: !0
                        }),
                        renderBanner: !1,
                        bannerVisible: !1,
                        communityInfoVisible: !1
                    }, this.handleScroll = e => {
                        let {
                            scrollTop: t
                        } = e;
                        this.setAnimatedValue(t)
                    }
                }
            }

            function P(e) {
                var t;
                let {
                    guildId: n
                } = e, i = (0, s.useStateFromStores)([T.default], () => T.default.getGuild(n)), l = (0, s.useStateFromStores)([S.default], () => S.default.getChannels(n)), r = (0, s.useStateFromStores)([m.default], () => m.default.getCategories(n)), {
                    mutedChannels: u,
                    collapseMuted: c
                } = (0, s.useStateFromStoresObject)([y.default], () => ({
                    mutedChannels: y.default.getMutedChannels(n),
                    collapseMuted: y.default.isGuildCollapsed(n)
                })), f = (0, s.useStateFromStores)([C.default], () => C.default.getVoiceStates(n)), _ = (0, s.useStateFromStores)([E.default], () => E.default.getCollapsed()), {
                    scrollTo: O
                } = (0, s.useStateFromStores)([g.default], () => g.default.getGuildDimensions(n)), A = (0, h.default)(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }), x = (0, s.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()), R = (0, s.useStateFromStores)([N.default], () => N.default.getGuildVersion(n)), M = (0, s.useStateFromStores)([p.default], () => p.default.version), D = (0, s.useStateFromStores)([v.default], () => v.default.getGuildChangeSentinel(n)), j = (0, o.useEmbeddedAppsByChannel)(null == i ? void 0 : i.id), P = (0, d.useActiveEventsByChannel)(null == i ? void 0 : i.id), b = null !== (t = null == i ? void 0 : i.hasFeature(L.GuildFeatures.COMMUNITY)) && void 0 !== t && t;
                return (0, a.jsx)(k, {
                    guildId: n,
                    guild: i,
                    channels: l,
                    categories: r,
                    mutedChannels: u,
                    scrollToChannel: O,
                    selectedChannelId: A,
                    selectedVoiceChannelId: x,
                    voiceStates: f,
                    collapsedChannels: _,
                    collapseMuted: c,
                    guildReadStateSentinel: D,
                    permissionVersion: R,
                    categoryCollapseVersion: M,
                    embeddedAppsByChannel: j,
                    activeEventsByChannel: P,
                    showNewUnreadsBar: b,
                    optInEnabled: !1
                })
            }
        },
        637842: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a, i, l = n("920040"),
                s = n("773670"),
                r = n("498225"),
                o = n("77078"),
                d = n("539405"),
                u = n("227602"),
                c = n("901165"),
                f = n("145131"),
                h = n("314892"),
                p = n("13798"),
                E = n("49111"),
                g = n("782340"),
                m = n("53877"),
                S = n("84811");
            (a = i || (i = {})).GENERAL = "GENERAL", a.VOICE = "VOICE";
            let v = () => [{
                    value: E.OverlayAvatarSizes.LARGE,
                    name: g.default.Messages.AVATAR_SIZE_OPTION_LARGE
                }, {
                    value: E.OverlayAvatarSizes.SMALL,
                    name: g.default.Messages.AVATAR_SIZE_OPTION_SMALL
                }],
                T = () => [{
                    value: E.OverlayDisplayNames.ALWAYS,
                    name: g.default.Messages.DISPLAY_OPTION_ALWAYS
                }, {
                    value: E.OverlayDisplayNames.ONLY_WHILE_SPEAKING,
                    name: g.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
                }, {
                    value: E.OverlayDisplayNames.NEVER,
                    name: g.default.Messages.DISPLAY_OPTION_NEVER
                }],
                N = () => [{
                    value: E.OverlayDisplayUsers.ALWAYS,
                    name: g.default.Messages.DISPLAY_OPTION_ALWAYS
                }, {
                    value: E.OverlayDisplayUsers.ONLY_WHILE_SPEAKING,
                    name: g.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
                }];

            function I() {
                let e = c.default.getNotificationPositionMode(),
                    t = e !== E.OverlayNotificationPositions.DISABLED,
                    n = u.default.getOverlayKeybind(),
                    a = u.default.getOverlayChatKeybind();
                d.default.track(E.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    enabled: !0,
                    notifications_enabled: t,
                    notifications_position: t ? e : null,
                    text_notifications_mode: c.default.getTextChatNotificationMode(),
                    text_opacity_slider: c.default.getTextWidgetOpacity(),
                    hotkey: null != n ? (0, p.toString)(n.shortcut) : null,
                    text_activation_hotkey: null != a ? (0, p.toString)(a.shortcut) : null
                })
            }
            class y extends s.PureComponent {
                componentDidMount() {
                    d.default.track(E.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                        settings_type: "overlay",
                        destination_pane: "OVERLAY SETTINGS",
                        origin_pane: null
                    })
                }
                handleChangeNotificationPositionMode(e, t) {
                    d.default.setNotificationPositionMode(t), I()
                }
                handleChangeAvatarSizeMode(e) {
                    let {
                        value: t
                    } = e;
                    d.default.setAvatarSizeMode(t)
                }
                handleChangeDisplayNameMode(e) {
                    let {
                        value: t
                    } = e;
                    d.default.setDisplayNameMode(t)
                }
                handleChangeDisplayUserMode(e) {
                    let {
                        value: t
                    } = e;
                    d.default.setDisplayUserMode(t)
                }
                renderHeader() {
                    return (0, l.jsxs)(f.default, {
                        direction: f.default.Direction.VERTICAL,
                        grow: 0,
                        shrink: 0,
                        className: m.header,
                        children: [(0, l.jsxs)(f.default, {
                            children: [(0, l.jsx)(o.FormTitle, {
                                className: m.headerTitle,
                                tag: "h1",
                                children: g.default.Messages.OVERLAY_SETTINGS_TITLE
                            }), (0, l.jsx)(o.ModalCloseButton, {
                                className: m.headerClose,
                                onClick: this.props.onClose
                            })]
                        }), this.renderTabBar()]
                    })
                }
                renderTabBar() {
                    let {
                        selectedSection: e
                    } = this.state;
                    return (0, l.jsxs)(o.TabBar, {
                        selectedItem: e,
                        type: "top",
                        className: m.tabBar,
                        onItemSelect: this.handleSelectSection,
                        children: [(0, l.jsx)(o.TabBar.Item, {
                            id: i.GENERAL,
                            className: m.tabBarItem,
                            children: g.default.Messages.OVERLAY_SETTINGS_GENERAL_TAB
                        }), (0, l.jsx)(o.TabBar.Item, {
                            id: i.VOICE,
                            className: m.tabBarItem,
                            children: g.default.Messages.OVERLAY_SETTINGS_VOICE_TAB
                        })]
                    })
                }
                renderBody() {
                    let e;
                    let {
                        selectedSection: t
                    } = this.state;
                    switch (t) {
                        case i.VOICE:
                            e = this.renderVoiceSettings();
                            break;
                        case i.GENERAL:
                        default:
                            e = this.renderGeneralSettings()
                    }
                    return (0, l.jsx)(o.ModalContent, {
                        className: m.content,
                        children: e
                    }, t)
                }
                renderGeneralSettings() {
                    let {
                        textChatNotificationMode: e,
                        notificationPositionMode: t
                    } = this.props, n = t !== E.OverlayNotificationPositions.DISABLED;
                    return (0, l.jsxs)(s.Fragment, {
                        children: [(0, l.jsx)(o.FormItem, {
                            title: g.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                            className: S.marginBottom20,
                            children: (0, l.jsx)(h.default, {
                                position: t,
                                onChange: this.handleChangeNotificationPositionMode
                            })
                        }), (0, l.jsx)(o.FormSwitch, {
                            value: n && e === E.OverlayNotificationTextChatTypes.ENABLED,
                            onChange: this.handleToggleTextChatNotifications,
                            disabled: !n,
                            hideBorder: !0,
                            children: g.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
                        })]
                    })
                }
                renderVoiceSettings() {
                    let {
                        avatarSizeMode: e,
                        displayNameMode: t,
                        displayUserMode: n
                    } = this.props;
                    return (0, l.jsxs)(s.Fragment, {
                        children: [(0, l.jsx)(o.FormItem, {
                            title: g.default.Messages.FORM_LABEL_AVATAR_SIZE,
                            className: S.marginBottom20,
                            children: (0, l.jsx)(o.RadioGroup, {
                                onChange: this.handleChangeAvatarSizeMode,
                                options: v(),
                                value: e,
                                size: o.RadioGroup.Sizes.SMALL
                            })
                        }), (0, l.jsx)(o.FormItem, {
                            title: g.default.Messages.FORM_LABEL_DISPLAY_NAMES,
                            className: S.marginBottom20,
                            children: (0, l.jsx)(o.RadioGroup, {
                                onChange: this.handleChangeDisplayNameMode,
                                options: T(),
                                value: t,
                                size: o.RadioGroup.Sizes.SMALL
                            })
                        }), (0, l.jsx)(o.FormItem, {
                            title: g.default.Messages.FORM_LABEL_DISPLAY_USERS,
                            className: S.marginBottom20,
                            children: (0, l.jsx)(o.RadioGroup, {
                                onChange: this.handleChangeDisplayUserMode,
                                options: N(),
                                value: n,
                                size: o.RadioGroup.Sizes.SMALL
                            })
                        })]
                    })
                }
                render() {
                    return (0, l.jsxs)(o.ModalRoot, {
                        "aria-label": g.default.Messages.OVERLAY_SETTINGS_TITLE,
                        transitionState: o.ModalTransitionState.ENTERED,
                        children: [this.renderHeader(), this.renderBody()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        selectedSection: i.GENERAL
                    }, this.handleSelectSection = e => {
                        this.setState({
                            selectedSection: e
                        })
                    }, this.handleToggleTextChatNotifications = () => {
                        let {
                            ENABLED: e,
                            DISABLED: t
                        } = E.OverlayNotificationTextChatTypes, n = this.props.textChatNotificationMode === e ? t : e;
                        d.default.setTextChatNotificationMode(n), I()
                    }
                }
            }
            var C = r.default.connectStores([c.default], () => ({
                avatarSizeMode: c.default.getAvatarSizeMode(),
                displayNameMode: c.default.getDisplayNameMode(),
                displayUserMode: c.default.getDisplayUserMode(),
                notificationPositionMode: c.default.getNotificationPositionMode(),
                textChatNotificationMode: c.default.getTextChatNotificationMode()
            }))(y)
        },
        890291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                s = n("631316"),
                r = n("934743"),
                o = n("759515"),
                d = n("393027"),
                u = n("901165"),
                c = n("819068"),
                f = n("49111"),
                h = n("782340"),
                p = n("812153");
            let E = () => (0, o.show)("DM_SEARCH");
            var g = i.memo(function() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.isUILocked((0, c.getPID)()) ? "true" : "false"),
                    t = (0, d.default)(e => {
                        let {
                            channelId: t
                        } = e;
                        return t
                    });
                return (0, a.jsxs)("div", {
                    className: p.privateChannels,
                    children: [(0, a.jsx)("div", {
                        className: p.searchBar,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: p.searchBarComponent,
                            onClick: E,
                            children: h.default.Messages.DM_SEARCH_PLACEHOLDER
                        })
                    }), (0, a.jsx)(s.default, {
                        padding: 8,
                        theme: f.ThemeTypes.DARK,
                        version: e,
                        selectedChannelId: t
                    }), (0, a.jsx)("section", {
                        className: p.panels,
                        "aria-label": h.default.Messages.ACCOUNT_A11Y_LABEL,
                        children: (0, a.jsx)(r.default, {
                            guildId: null
                        })
                    })]
                })
            })
        },
        758547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("575482"),
                l = n.n(i),
                s = n("77078"),
                r = n("474571"),
                o = n("560995"),
                d = n("49111"),
                u = n("782340"),
                c = n("720480"),
                f = function(e) {
                    let t;
                    let {
                        title: n,
                        header: i,
                        children: f,
                        renderSettings: h,
                        onDragStart: p
                    } = e;
                    return t = null != n ? (0, a.jsxs)(o.default.Bar, {
                        className: l(c.header, c.draggableStartArea),
                        onMouseDown: p,
                        children: [(0, a.jsx)(o.default.Content, {
                            className: l(c.headerTitle, c.draggableStartArea),
                            dynamicSize: !0,
                            children: n
                        }), (0, a.jsx)(o.default.Content, {
                            children: (0, a.jsx)(s.Popout, {
                                position: "right",
                                renderPopout: null != h ? h : d.NOOP,
                                autoInvert: !1,
                                children: e => (0, a.jsx)(o.default.Icon, {
                                    ...e,
                                    icon: r.default,
                                    label: u.default.Messages.SETTINGS
                                })
                            })
                        })]
                    }) : i, (0, a.jsxs)("div", {
                        className: c.sidebar,
                        children: [t, (0, a.jsx)("div", {
                            className: c.children,
                            children: f
                        })]
                    })
                }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("744196"),
                l = n("719375");

            function s(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, s = (0, i.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return s ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("773670"),
                i = n("744196"),
                l = n("526887"),
                s = n("719375");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(l.ConfettiCannonContext), t = (0, i.default)([s.default], () => s.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = a.useMemo(() => ({
                    fire: (a, i, l) => {
                        var s, r;
                        let o = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            d = n(o);
                        e(a, i, d, (null !== (s = null == l ? void 0 : l.count) && void 0 !== s ? s : o.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        762993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("498225"),
                i = n("913144");
            let l = !1,
                s = !1;
            class r extends a.default.Store {
                get keepOpen() {
                    return s
                }
                get enabled() {
                    return l
                }
            }
            r.displayName = "SoundboardOverlayStore";
            var o = new r(i.default, {
                SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
                    if (l = e.enabled, e.enabled) {
                        var t;
                        s = null !== (t = e.keepOpen) && void 0 !== t && t
                    }
                }
            })
        },
        902694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("575482"),
                l = n.n(i),
                s = n("321948"),
                r = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...i
                    } = e;
                    return (0, a.jsxs)("button", {
                        type: "button",
                        className: l(s.btnHamburger, {
                            [s.btnHamburgerOpen]: t
                        }, n),
                        ...i,
                        children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                    })
                }
        },
        786770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Z
                }
            });
            var a, i, l, s, r = n("161179"),
                o = n.n(r),
                d = n("462567"),
                u = n("498225"),
                c = n("913144"),
                f = n("539405"),
                h = n("415635"),
                p = n("387129"),
                E = n("981253"),
                g = n("931237"),
                m = n("37359"),
                S = n("364864"),
                v = n("523505"),
                T = n("47271"),
                N = n("386045"),
                I = n("969416"),
                y = n("271938"),
                C = n("42203"),
                _ = n("385649"),
                O = n("824563"),
                A = n("18494"),
                x = n("101125"),
                L = n("102985"),
                R = n("697218"),
                M = n("189857"),
                D = n("901165"),
                j = n("189771"),
                k = n("686069"),
                P = n("703370"),
                b = n("49111"),
                V = n("6791"),
                w = n("782340");
            (a = l || (l = {}))[a.GENERIC = 0] = "GENERIC", a[a.TEXT = 1] = "TEXT", a[a.INCOMING_CALL = 2] = "INCOMING_CALL", (i = s || (s = {}))[i.NORMAL = 0] = "NORMAL", i[i.HIGH = 1] = "HIGH", i[i.URGENT = 2] = "URGENT";
            let U = Object.freeze({
                    priority: s.NORMAL,
                    duration: 5e3,
                    expirationExternallyManaged: !1,
                    type: l.GENERIC
                }),
                B = [],
                F = (e, t, n) => {
                    let a = t ? b.OverlayNotificationStatus.TIMED_OUT : b.OverlayNotificationStatus.DISMISSED;
                    return setTimeout(() => f.default.updateNotificationStatus(e, a), null != n ? n : 5e3)
                };

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.OverlayNotificationStatus.DISMISSED;
                if (null == e) return !1;
                let n = B.findIndex(t => t.id === e);
                if (-1 === n) return !1;
                let a = B[n];
                clearTimeout(a.timerId), B = [...B], t === b.OverlayNotificationStatus.DISMISSED ? B.splice(n, 1) : B[n] = {
                    ...a,
                    status: t
                }
            }

            function H(e) {
                let t = B.length;
                return (B = B.filter(t => t.type !== l.TEXT || t.channelId !== e || !1)).length !== t
            }

            function W(e) {
                let t = B.find(t => t.type === l.INCOMING_CALL && t.channelId === e);
                return null != t ? t.id : null
            }

            function z(e, t) {
                let n = {
                    ...U,
                    ...t
                };
                if (n.priority !== s.URGENT && !D.default.isInstanceFocused()) return null;
                let a = (0, d.v4)(),
                    i = {
                        id: a,
                        status: b.OverlayNotificationStatus.ACTIVE,
                        timerId: F(a, n.expirationExternallyManaged, n.duration),
                        props: e,
                        ...n
                    };
                B = [...B];
                let l = B.findIndex(e => e.priority <= n.priority);
                if (-1 === l ? B.push(i) : B.splice(l, 0, i), B.length > 10) {
                    let e = B.pop();
                    clearTimeout(e.timerId)
                }
                return a
            }

            function Y(e) {
                let {
                    channelId: t,
                    ringing: n
                } = e, a = W(t), i = n.includes(y.default.getId());
                if (!i) return G(a);
                if (null != a) return !1;
                let r = C.default.getChannel(t);
                if (null == r || !r.isPrivate() || x.default.getStatus() === b.StatusTypes.DND) return !1;
                let o = B.find(e => e.type === l.TEXT && e.channelId === t && e.messageType === b.MessageTypes.CALL);
                null != o && G(o.id), z((0, g.default)(r), {
                    priority: s.HIGH,
                    expirationExternallyManaged: !0,
                    type: l.INCOMING_CALL,
                    channelId: r.id
                })
            }
            class K extends u.default.Store {
                initialize() {
                    this.waitFor(C.default, R.default)
                }
                getNotifications() {
                    return B
                }
            }
            K.displayName = "OverlayNotificationsStore";
            var Z = new K(c.default, __OVERLAY__ ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
                    let {
                        notificationId: t,
                        status: n
                    } = e;
                    G(t, n)
                },
                OVERLAY_MOUNTED: function(e) {
                    let {
                        nudge: t
                    } = e, n = function(e) {
                        switch (e.type) {
                            case V.OverlayNudgeTypes.BROADCAST:
                                return (0, T.default)(e);
                            case V.OverlayNudgeTypes.GO_LIVE_VOICE:
                            case V.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
                                return (0, E.default)(e);
                            case V.OverlayNudgeTypes.NEWS:
                            default:
                                return (0, v.default)(e)
                        }
                    }(t);
                    null != n && z(n, {
                        priority: s.URGENT,
                        duration: 8e3
                    })
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t
                    } = e;
                    if (t) return !1;
                    B = B.map(e => e.status === b.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
                        ...e,
                        timerId: F(e.id, e.expirationExternallyManaged)
                    }) : e)
                },
                MESSAGE_CREATE: function(e) {
                    var t, n, a;
                    let {
                        channelId: i,
                        message: r
                    } = e, d = C.default.getChannel(i), u = R.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
                    if (null == d || null == u) return !1;
                    if ((null === (n = r.activity) || void 0 === n ? void 0 : n.type) === b.ActivityActionTypes.JOIN || (null === (a = r.activity) || void 0 === a ? void 0 : a.type) === b.ActivityActionTypes.JOIN_REQUEST) {
                        if (!(0, j.shouldNotify)(r, i, !0, !0)) return !1;
                        let e = function(e, t, n) {
                            let a, i;
                            if (o(null != t.activity, "received null message activity"), n.id === y.default.getId()) return !1;
                            let l = P.default.getGame();
                            if (null == l) return !1;
                            switch (t.activity.type) {
                                case b.ActivityActionTypes.JOIN:
                                    if (null == (a = O.default.getApplicationActivity(n.id, l.id)) || null == a.party || a.party.id !== t.activity.party_id) return !1;
                                    i = (0, h.default)(e, t, n, l, a);
                                    break;
                                case b.ActivityActionTypes.JOIN_REQUEST:
                                    if (null == (a = x.default.getApplicationActivity(l.id)) || null == a.party || a.party.id !== t.activity.party_id) return !1;
                                    i = (0, m.default)(e, n, l, a)
                            }
                            if (null == i) return !1;
                            let r = z(i, {
                                priority: s.URGENT,
                                expirationExternallyManaged: !0,
                                channelId: e.id
                            });
                            return null != r && F(r, !1, 3e4), !0
                        }(d, r, u);
                        if (!1 !== e) return e
                    }
                    if ((!D.default.isInstanceUILocked() || D.default.isPinned(b.OverlayWidgets.TEXT)) && i === A.default.getChannelId() || D.default.getTextChatNotificationMode() === b.OverlayNotificationTextChatTypes.DISABLED || L.default.disableNotifications || !(0, j.shouldNotify)(r, i)) return !1;
                    let c = !_.default.isSoundDisabled(M.MESSAGE_SOUND);
                    z((0, S.default)(d, r, u, c), {
                        type: l.TEXT,
                        channelId: d.id,
                        messageType: r.type
                    })
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && H(t)
                },
                MESSAGE_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return H(t)
                },
                CALL_CREATE: Y,
                CALL_UPDATE: Y,
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    G(W(t))
                },
                ACTIVITY_USER_ACTION: function(e) {
                    let t, {
                            actionType: n,
                            user: a,
                            applicationId: i
                        } = e,
                        r = P.default.getGame();
                    if (null == r || r.id !== i) return !1;
                    if (n === b.ActivityActionTypes.JOIN) t = (0, p.default)(a, r);
                    if (null == t) return !1;
                    z(t, {
                        priority: s.URGENT,
                        type: l.GENERIC
                    })
                },
                CLIPS_SAVE_CLIP_START: function() {
                    z((0, I.createClipsNotification)(w.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
                },
                CLIPS_SAVE_CLIP: function() {
                    z((0, I.createClipsNotification)(w.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
                        duration: (0, k.getSecondsSliderLabel)(N.default.getSettings().clipsLength / 1e3, !0)
                    })))
                },
                CLIPS_SAVE_CLIP_ERROR: function() {
                    z((0, I.createClipsNotification)(w.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
                },
                STREAM_START: function(e) {
                    let t = (0, I.createClipsReminderNotification)();
                    null != t && z(t)
                }
            } : {})
        },
        783419: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("498225"),
                i = n("913144"),
                l = n("49111");
            let s = {};

            function r(e) {
                let t = s[e = null != e ? e : "null"];
                return null == t && (t = s[e] = {
                    state: l.RTCConnectionStates.DISCONNECTED,
                    quality: l.RTCConnectionQuality.UNKNOWN,
                    pings: [],
                    hostname: null,
                    lossRate: null
                }), t
            }

            function o(e, t, n) {
                e = null != e ? e : "null";
                let a = s[e];
                return null != a ? t(a) : n
            }

            function d(e) {
                let {
                    lobbyId: t
                } = e;
                delete s[t]
            }
            class u extends a.default.Store {
                getConnectionState(e) {
                    return o(e, e => {
                        let {
                            state: t
                        } = e;
                        return t
                    }, l.RTCConnectionStates.DISCONNECTED)
                }
                getQuality(e) {
                    return o(e, e => {
                        let {
                            quality: t
                        } = e;
                        return t
                    }, l.RTCConnectionQuality.UNKNOWN)
                }
                getHostname(e) {
                    return o(e, e => {
                        let {
                            hostname: t
                        } = e;
                        return t
                    }, null)
                }
                getPings(e) {
                    return o(e, e => {
                        let {
                            pings: t
                        } = e;
                        return t
                    }, [])
                }
                getAveragePing(e) {
                    let t = this.getPings(e);
                    return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length
                }
                getLastPing(e) {
                    var t;
                    let n = this.getPings(e);
                    if (0 === n.length) return 0;
                    return null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value
                }
                getOutboundLossRate(e) {
                    return o(e, e => {
                        let {
                            lossRate: t
                        } = e;
                        return t
                    }, null)
                }
                isSecureFramesEnabled(e) {
                    return !1
                }
            }
            u.displayName = "OverlayRTCConnectionStore";
            var c = new u(i.default, {
                OVERLAY_INITIALIZE: function(e) {
                    s = e.rtcConnectionStates
                },
                RTC_CONNECTION_STATE: function(e) {
                    if (null != e.streamKey) return !1;
                    let t = r(e.lobbyId);
                    t.state = e.state, t.hostname = e.hostname
                },
                RTC_CONNECTION_PING: function(e) {
                    let t = r(e.lobbyId);
                    t.pings = e.pings, t.quality = e.quality
                },
                RTC_CONNECTION_LOSS_RATE: function(e) {
                    let t = r(e.lobbyId);
                    t.lossRate = e.lossRate
                },
                LOBBY_DELETE: d,
                LOBBY_DISCONNECT: d
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let a, i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s, r, o = n("377849"),
                d = n.n(o),
                u = n("498225"),
                c = n("810479"),
                f = n("913144"),
                h = n("21121"),
                p = n("934306"),
                E = n("288518"),
                g = n("486503"),
                m = n("233069"),
                S = n("42203"),
                v = n("305961"),
                T = n("660478"),
                N = n("282109"),
                I = n("697218"),
                y = n("299039"),
                C = n("724210");
            (s = r || (r = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let _ = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? r.FAVORITE : r.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function O(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let a = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        i = e.isMessageRequestTimestamp;
                    if (null != i) {
                        let e = d(i).valueOf(),
                            t = y.default.fromTimestamp(e);
                        return y.default.compare(a, t) > 0 ? a : t
                    }
                    return a
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: N.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
                    isRequest: E.default.isMessageRequest(e.id) || g.default.isSpam(e.id)
                }
            }

            function A() {
                _.clear(), Object.values(S.default.getMutablePrivateChannels()).forEach(e => {
                    _.set(e.id, O(e))
                }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && N.default.getAddedToMessages().forEach(e => {
                    let t = S.default.getChannel(e);
                    null != t && (0, m.isGuildTextChannelType)(t.type) && _.set(t.id, O(t))
                })
            }

            function x() {
                let e = S.default.getMutablePrivateChannels();
                for (let t in e) _.set(t, O(e[t]))
            }
            let L = (a = [], i = [], l = [], () => {
                let e = _.values(r.FAVORITE),
                    t = _.values(r.DEFAULT);
                return (a !== e || i !== t) && (l = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return l.push(t)
                }), a = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return l.push(t)
                }), i = t), l
            });
            class R extends u.default.Store {
                initialize() {
                    this.waitFor(S.default, v.default, I.default, E.default, N.default), this.syncWith([N.default, E.default], A)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [_.values(r.FAVORITE), _.values(r.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return _.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: a
                        } = t;
                        e[n] = a
                    }), e
                }
            }
            R.displayName = "PrivateChannelSortStore";
            var M = new R(f.default, {
                CONNECTION_OPEN: A,
                CONNECTION_OPEN_SUPPLEMENTAL: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, m.isPrivate)(e.type) || _.has(e.id)) && _.set(e.id, O(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, m.isPrivate)(t.type) || t.id === C.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    _.set(t.id, O(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return _.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!_.has(t)) return !1;
                    let a = S.default.getChannel(t);
                    return null != a && _.set(t, O(a, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return _.delete(t)
                }
            })
        },
        959479: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Operations: function() {
                    return i
                },
                default: function() {
                    return N
                }
            });
            var a, i, l = n("920040"),
                s = n("773670"),
                r = n("575482"),
                o = n.n(r),
                d = n("708001"),
                u = n("80687"),
                c = n("49111"),
                f = n("562804");
            let h = (e, t, n, a) => Math.pow(e - n, 2) + Math.pow(t - a, 2);
            (a = i || (i = {})).MOVE = "MOVE", a.RESIZE_NORTH = "RESIZE_NORTH", a.RESIZE_WEST = "RESIZE_WEST", a.RESIZE_EAST = "RESIZE_EAST", a.RESIZE_SOUTH = "RESIZE_SOUTH", a.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", a.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", a.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", a.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST";
            let p = new Set([i.RESIZE_NORTH, i.RESIZE_WEST, i.RESIZE_EAST, i.RESIZE_SOUTH, i.RESIZE_NORTH_WEST, i.RESIZE_NORTH_EAST, i.RESIZE_SOUTH_WEST, i.RESIZE_SOUTH_EAST]);

            function E(e, t, n) {
                let {
                    width: a,
                    height: i
                } = e;
                return {
                    width: "auto" === a ? "auto" : Math.max(t, a),
                    height: "auto" === i ? "auto" : Math.max(n, i)
                }
            }

            function g(e) {
                let {
                    top: t,
                    left: n,
                    bottom: a,
                    right: i
                } = e;
                return null == n && null == i && (n = 0), null != n && null != i && (i = null), null == t && null == a && (t = 0), null != t && null != a && (a = null), {
                    top: t,
                    left: n,
                    bottom: a,
                    right: i
                }
            }

            function m(e) {
                return "auto" === e || null == e ? "auto" : "".concat(e, "px")
            }

            function S(e, t) {
                let n = 0,
                    a = 0;
                return n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width, {
                    width: n,
                    height: a = "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
                }
            }

            function v(e, t) {
                let {
                    top: n,
                    left: a,
                    bottom: l,
                    right: s
                } = t;
                switch (e) {
                    case i.RESIZE_EAST:
                    case i.RESIZE_NORTH_EAST:
                    case i.RESIZE_NORTH:
                        return {
                            bottom: l, left: a, right: null, top: null
                        };
                    case i.RESIZE_WEST:
                    case i.RESIZE_NORTH_WEST:
                        return {
                            bottom: l, right: s, left: null, top: null
                        };
                    case i.RESIZE_SOUTH_EAST:
                        return {
                            top: n, left: a, bottom: null, right: null
                        };
                    case i.RESIZE_SOUTH:
                    case i.RESIZE_SOUTH_WEST:
                        return {
                            top: n, right: s, bottom: null, left: null
                        };
                    default:
                        throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
                }
            }
            class T extends s.Component {
                shouldComponentUpdate(e, t) {
                    return !(0, d.default)(t, this.state) || !(0, d.default)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, d.default)(e.anchor, this.props.anchor) || !(0, d.default)(e.size, this.props.size) || !(0, d.default)(e.minSize, this.props.minSize) || !(0, d.default)(e.container, this.props.container)
                }
                componentDidUpdate(e, t) {
                    null == t.operation && (!(0, d.default)(this.props.anchor, e.anchor) && this.setDOMPositions(g(this.props.anchor)), !(0, d.default)(this.props.size, e.size) && this.setDOMSize(E(this.props.size, this.props.minSize.width, this.props.minSize.height)))
                }
                componentWillUnmount() {
                    this.handleOperationEnd()
                }
                handleResizeMouseDown(e, t) {
                    let {
                        clientX: n,
                        clientY: a
                    } = e;
                    e.stopPropagation(), this.handleOperationStart(t, n, a)
                }
                handleDragMove(e, t) {
                    let {
                        ref: {
                            current: n
                        },
                        props: {
                            id: a,
                            container: {
                                maxX: l,
                                maxY: s,
                                minX: r,
                                minY: o
                            },
                            onDragStart: d,
                            onDrag: c,
                            snapOrientation: f
                        },
                        dragState: {
                            offsetX: h,
                            offsetY: p
                        },
                        state: {
                            operationStarted: E
                        }
                    } = this;
                    if (null == n) return null;
                    e = Math.max(Math.min(l, e), r), t = Math.max(Math.min(s, t), o);
                    let {
                        width: g,
                        height: m
                    } = S(n, this.size), T = t - p, N = e - h, I = (0, u.fitFullCoordsToContainer)((0, u.getFullCoordsFromAnchorCoords)({
                        top: T,
                        left: N,
                        bottom: null,
                        right: null
                    }, l, s, g, m)), y = f ? (0, u.getAnchorCoordsFromFullCoords)(I) : v(i.RESIZE_SOUTH_EAST, I);
                    this.setDOMPositions(y), !E && (null != d && d(), this.setState({
                        operationStarted: !0
                    })), null != c && c(a, i.MOVE, this.anchor, this.size)
                }
                handleResizeMove(e, t) {
                    let {
                        props: {
                            id: n,
                            minSize: a,
                            container: {
                                maxX: l,
                                maxY: s,
                                minX: r,
                                minY: o
                            },
                            onDragStart: d,
                            onDrag: u
                        },
                        state: {
                            operation: c,
                            operationStarted: f
                        }
                    } = this, {
                        startX: h,
                        startY: p,
                        offsetWidth: E,
                        offsetHeight: g
                    } = this.dragState, m = 0, S = 0;
                    if (null != c) {
                        switch (e = Math.max(Math.min(l, e), r), t = Math.max(Math.min(s, t), o), c) {
                            case i.RESIZE_EAST:
                            case i.RESIZE_SOUTH_EAST:
                            case i.RESIZE_NORTH_EAST:
                                m -= h - e;
                                break;
                            case i.RESIZE_WEST:
                            case i.RESIZE_SOUTH_WEST:
                            case i.RESIZE_NORTH_WEST:
                                m += h - e
                        }
                        switch (c) {
                            case i.RESIZE_SOUTH:
                            case i.RESIZE_SOUTH_WEST:
                            case i.RESIZE_SOUTH_EAST:
                                S -= p - t;
                                break;
                            case i.RESIZE_NORTH:
                            case i.RESIZE_NORTH_WEST:
                            case i.RESIZE_NORTH_EAST:
                                S += p - t
                        }
                        E = Math.max(E + m, a.width), g = Math.max(g + S, a.height), this.setDOMSize({
                            width: E,
                            height: g
                        }), !f && (null != d && d(), this.setState({
                            operationStarted: !0
                        })), null != u && u(n, c, this.anchor, this.size)
                    }
                }
                setDOMPositions(e) {
                    let {
                        top: t,
                        left: n,
                        bottom: a,
                        right: i
                    } = e, {
                        current: l
                    } = this.ref;
                    this.anchor = {
                        top: t,
                        left: n,
                        bottom: a,
                        right: i
                    }, null != l && (l.style.top = m(t), l.style.bottom = m(a), l.style.left = m(n), l.style.right = m(i))
                }
                setDOMSize(e) {
                    let {
                        width: t,
                        height: n
                    } = e, {
                        current: a
                    } = this.ref;
                    t = "auto" === this.size.width ? "auto" : t, n = "auto" === this.size.height ? "auto" : n, this.size = {
                        width: t,
                        height: n
                    }, null != a && (a.style.width = m(t), a.style.height = m(n))
                }
                renderResizeHandles() {
                    let {
                        resizeY: e,
                        resizeX: t,
                        active: n
                    } = this.props;
                    return (0, l.jsxs)(s.Fragment, {
                        children: [e ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: o(f.resizeNorth, {
                                    [f.resizeNSCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_NORTH)
                            }), (0, l.jsx)("div", {
                                className: o(f.resizeSouth, {
                                    [f.resizeNSCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_SOUTH)
                            })]
                        }) : null, t ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: o(f.resizeEast, {
                                    [f.resizeEWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_EAST)
                            }), (0, l.jsx)("div", {
                                className: o(f.resizeWest, {
                                    [f.resizeEWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_WEST)
                            })]
                        }) : null, t && e ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: o(f.resizeNorthWest, {
                                    [f.resizeNWSECursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_NORTH_WEST)
                            }), (0, l.jsx)("div", {
                                className: o(f.resizeNorthEast, {
                                    [f.resizeNESWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_NORTH_EAST)
                            }), (0, l.jsx)("div", {
                                className: o(f.resizeSouthWest, {
                                    [f.resizeNESWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_SOUTH_WEST)
                            }), (0, l.jsx)("div", {
                                className: o(f.resizeSouthEast, {
                                    [f.resizeNWSECursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, i.RESIZE_SOUTH_EAST)
                            })]
                        }) : null]
                    })
                }
                render() {
                    let {
                        props: {
                            children: e,
                            hidden: t,
                            onClick: n,
                            id: a,
                            style: i
                        },
                        size: s,
                        anchor: r,
                        state: {
                            operation: d,
                            operationStarted: u
                        }
                    } = this;
                    return (0, l.jsxs)("div", {
                        ref: this.ref,
                        style: {
                            ...r,
                            ...s,
                            ...i,
                            ...null != d ? {
                                zIndex: 1e3
                            } : void 0,
                            ...t ? {
                                visibility: "hidden"
                            } : void 0
                        },
                        className: o({
                            [f.wrapper]: !0,
                            [f.operation]: u
                        }),
                        onMouseDown: this.handleMouseDown,
                        onClick: null != n ? () => n(a) : void 0,
                        children: [e(this.handleOperationStart), this.renderResizeHandles()]
                    })
                }
                constructor(e) {
                    super(e), this.ref = s.createRef(), this.dragState = {
                        startX: 0,
                        startY: 0,
                        offsetX: 0,
                        offsetY: 0,
                        offsetWidth: 0,
                        offsetHeight: 0
                    }, this.state = {
                        operation: null,
                        operationStarted: !1
                    }, this.handleMouseDown = e => {
                        e.stopPropagation();
                        let {
                            dragAnywhere: t
                        } = this.props, {
                            current: n
                        } = this.ref;
                        null != n && e.button === c.MouseButtons.PRIMARY && t && this.handleOperationStart(i.MOVE, e.clientX, e.clientY)
                    }, this.handleMouseMove = e => {
                        e.preventDefault(), e.stopPropagation();
                        let {
                            clientX: t,
                            clientY: n
                        } = e, {
                            dragState: {
                                startX: a,
                                startY: l
                            },
                            state: {
                                operation: s,
                                operationStarted: r
                            }
                        } = this;
                        !(null == s || !r && 3 > h(a, l, t, n)) && (s === i.MOVE ? this.handleDragMove(t, n) : p.has(s) && this.handleResizeMove(t, n))
                    }, this.handleOperationStart = (e, t, n) => {
                        let {
                            ref: {
                                current: a
                            },
                            props: {
                                active: l,
                                container: {
                                    maxX: s,
                                    maxY: r
                                }
                            }
                        } = this;
                        if (null == a || !l) return;
                        let {
                            width: o,
                            height: d
                        } = S(a, this.size), c = (0, u.getFullCoordsFromAnchorCoords)(this.anchor, s, r, o, d);
                        if (e === i.MOVE) {
                            let {
                                x: e,
                                y: a
                            } = function(e) {
                                let {
                                    top: t,
                                    left: n
                                } = e;
                                return {
                                    x: n,
                                    y: t
                                }
                            }(c);
                            this.dragState = {
                                ...this.dragState,
                                startX: t,
                                startY: n,
                                offsetX: t - e,
                                offsetY: n - a
                            }
                        } else {
                            let a = v(e, c);
                            this.setDOMPositions(a), this.dragState = {
                                ...this.dragState,
                                startX: t,
                                startY: n,
                                offsetWidth: o,
                                offsetHeight: d
                            }
                        }
                        this.setState({
                            operation: e,
                            operationStarted: !1
                        }, () => {
                            window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleOperationEnd)
                        })
                    }, this.handleOperationEnd = () => {
                        let {
                            operation: e,
                            operationStarted: t
                        } = this.state, {
                            onDragEnd: n
                        } = this.props;
                        window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleOperationEnd);
                        let a = t ? () => {
                            let {
                                onUpdate: t,
                                id: n
                            } = this.props;
                            t(e, n, this.anchor, this.size, S(this.ref.current, this.size))
                        } : void 0;
                        if (t) {
                            let {
                                maxX: e,
                                maxY: t
                            } = this.props.container, {
                                width: a,
                                height: i
                            } = S(this.ref.current, this.size), l = (0, u.getFullCoordsFromAnchorCoords)(this.anchor, e, t, a, i), s = (0, u.getAnchorCoordsFromFullCoords)(l);
                            this.setDOMPositions(s), this.setDOMSize({
                                width: a,
                                height: i
                            }), null != n && n()
                        }
                        this.setState({
                            operation: null,
                            operationStarted: !1
                        }, a)
                    }, this.anchor = g(e.anchor), this.size = E(e.size, e.minSize.width, e.minSize.height)
                }
            }
            T.Operations = i, T.defaultProps = {
                snapOrientation: !0,
                minSize: {
                    width: 0,
                    height: 0
                },
                container: {
                    minX: 0,
                    minY: 0,
                    maxX: 1 / 0,
                    maxY: 1 / 0
                },
                resizeX: !0,
                resizeY: !0,
                hidden: !1,
                dragAnywhere: !0,
                active: !0
            };
            var N = T
        },
        942699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("51816");
            let o = e => {
                let {
                    keybind: t,
                    separator: n,
                    className: l
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: t.map((e, o) => (0, a.jsxs)(i.Fragment, {
                        children: [(0, a.jsx)("span", {
                            className: s(r.key, l),
                            children: e
                        }), o === t.length - 1 ? void 0 : n]
                    }, o))
                })
            };
            o.defaultProps = {
                separator: "+"
            };
            var d = o
        },
        415518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderKeybindHint: function() {
                    return S
                },
                renderSubtleHint: function() {
                    return v
                },
                ColorSchemes: function() {
                    return i
                },
                default: function() {
                    return N
                }
            });
            var a, i, l = n("920040"),
                s = n("773670"),
                r = n("575482"),
                o = n.n(r),
                d = n("77078"),
                u = n("942699"),
                c = n("945330"),
                f = n("782340"),
                h = n("292025"),
                p = n("84811");
            let E = e => e.stopPropagation(),
                g = () => (0, l.jsx)("div", {
                    className: h.clickBlocker,
                    onClick: E,
                    onMouseEnter: E,
                    onMouseOver: E
                }),
                m = () => (0, l.jsx)("div", {
                    className: h.divider
                }),
                S = (e, t, n) => (0, l.jsx)("div", {
                    className: h.keybindMessage,
                    children: n.format({
                        keybind: t,
                        keybindHook: (e, n) => (0, l.jsx)(u.default, {
                            keybind: t,
                            className: h.keybind
                        }, n)
                    })
                }),
                v = (e, t) => (0, l.jsx)("div", {
                    className: h.hintSubtleText,
                    children: t
                });
            (a = i || (i = {})).PRIMARY = "PRIMARY", a.BRAND = "BRAND", a.DANGER = "DANGER";
            class T extends s.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        expand: n
                    } = e, {
                        expanded: a
                    } = t;
                    return !a && n ? {
                        expanded: !0
                    } : null
                }
                componentDidMount() {
                    let {
                        onNotificationShow: e
                    } = this.props;
                    null == e || e()
                }
                componentDidUpdate(e) {
                    let {
                        onNotificationShow: t
                    } = this.props;
                    null != t && null == e.onNotificationShow && t()
                }
                renderCloseButton() {
                    return (0, l.jsx)(d.Button, {
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.NONE,
                        onClick: this.handleDismiss,
                        className: h.dismissButton,
                        "aria-label": f.default.Messages.NOTIFICATION_DISMISS,
                        children: (0, l.jsx)(c.default, {
                            width: 16,
                            height: 16,
                            className: h.dismissIcon
                        })
                    })
                }
                renderHint() {
                    let {
                        props: {
                            hint: e,
                            colorScheme: t
                        },
                        state: {
                            expanded: n
                        }
                    } = this;
                    if (null == e) return null;
                    if ("function" == typeof e) {
                        let a = e(n, t);
                        return null != a ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)(m, {}), a]
                        }, "hint-custom") : null
                    }
                    return (0, l.jsxs)(s.Fragment, {
                        children: [(0, l.jsx)(m, {}), (0, l.jsx)("div", {
                            className: "string" == typeof e ? h.hintText : void 0,
                            children: e
                        }, "hint-text")]
                    }, "hint-text")
                }
                renderFooter() {
                    let {
                        props: {
                            renderFooter: e,
                            cancelText: t,
                            confirmText: n,
                            onConfirmClick: a,
                            onCancelClick: r,
                            hint: o,
                            colorScheme: u
                        },
                        state: {
                            expanded: c
                        }
                    } = this;
                    if (!c) return null != o ? this.renderHint() : null;
                    if (null != e) {
                        let t = e(c, u);
                        return null != t ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)(m, {}), t]
                        }, "footer-custom-content") : null
                    }
                    if (null != a || null != r) {
                        let e = d.Button.Colors.GREEN,
                            o = d.Button.Colors.PRIMARY,
                            c = d.Button.Looks.FILLED;
                        switch (u) {
                            case i.DANGER:
                            case i.BRAND:
                                e = o = d.Button.Colors.WHITE, c = d.Button.Looks.OUTLINED
                        }
                        return (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)(m, {}), (0, l.jsxs)("div", {
                                className: h.buttonContainer,
                                children: [null != a ? (0, l.jsx)(d.Button, {
                                    fullWidth: !0,
                                    size: d.Button.Sizes.SMALL,
                                    color: e,
                                    onClick: this.handleConfirmClick,
                                    className: h.button,
                                    innerClassName: h.innerText,
                                    children: null != n ? n : f.default.Messages.OKAY
                                }) : null, null != r ? (0, l.jsx)(d.Button, {
                                    fullWidth: !0,
                                    size: d.Button.Sizes.SMALL,
                                    look: c,
                                    color: o,
                                    onClick: this.handleCancelClick,
                                    className: h.button,
                                    children: null != t ? t : f.default.Messages.CANCEL
                                }) : null]
                            })]
                        }, "footer-button-content")
                    }
                    return this.renderHint()
                }
                renderIcon() {
                    let {
                        icon: e
                    } = this.props;
                    return null == e ? null : "string" == typeof e ? (0, l.jsx)(d.Avatar, {
                        src: e,
                        size: d.AvatarSizes.SIZE_40,
                        className: h.avatar,
                        "aria-hidden": !0
                    }) : (0, l.jsx)("div", {
                        className: h.avatar,
                        children: e
                    })
                }
                renderContent() {
                    let {
                        body: e,
                        title: t,
                        maxBodyLines: n
                    } = this.props;
                    return (0, l.jsxs)("div", {
                        className: h.content,
                        children: [this.renderIcon(), (0, l.jsxs)("div", {
                            className: h.details,
                            children: [(0, l.jsx)("div", {
                                className: h.title,
                                children: t
                            }), null != e ? (0, l.jsx)("div", {
                                className: o(h.body, p.marginTop4),
                                style: {
                                    WebkitLineClamp: n,
                                    lineClamp: n
                                },
                                children: e
                            }) : null]
                        })]
                    })
                }
                render() {
                    let {
                        props: {
                            onNotificationClick: e,
                            colorScheme: t,
                            disabled: n
                        },
                        state: {
                            expanded: a
                        }
                    } = this, s = null != e ? d.Clickable : "div";
                    return (0, l.jsxs)(s, {
                        onMouseOver: a ? null : this.handleMouseEnter,
                        onFocus: a ? null : this.handleMouseEnter,
                        onClick: e,
                        className: o(h.container, {
                            [h.themePrimary]: t === i.PRIMARY,
                            [h.themeBrand]: t === i.BRAND,
                            [h.themeDanger]: t === i.DANGER,
                            [h.clickable]: null != e && !n
                        }),
                        children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), n ? (0, l.jsx)(g, {}) : null]
                    })
                }
                constructor(e) {
                    super(e), this.handleDismiss = e => {
                        e.stopPropagation();
                        let {
                            onDismissClick: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleConfirmClick = e => {
                        e.stopPropagation();
                        let {
                            onConfirmClick: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleCancelClick = e => {
                        e.stopPropagation();
                        let {
                            onCancelClick: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleMouseEnter = () => {
                        !this.props.disabled && this.setState({
                            expanded: !0
                        })
                    };
                    let {
                        expand: t
                    } = e;
                    this.state = {
                        expanded: t
                    }
                }
            }
            T.ColorSchemes = i, T.defaultProps = {
                maxBodyLines: void 0,
                colorScheme: i.PRIMARY,
                expand: !1,
                disabled: !1
            };
            var N = T
        },
        960086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("469563"),
                l = n("676665"),
                s = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 2H3C1.897 2 1 2.898 1 4V6H23V4C23 2.898 22.103 2 21 2ZM13 12H15V14H13V12ZM11 12H13V10H15V12H17V14H15V16H13V14H11V12ZM9 12H11V10H9V12ZM9 14V12H7V10H5V12H7V14H5V16H7V18H9V16H11V18H13V16H11V14H9ZM9 14V16H7V14H9ZM17 16V14H19V16H17ZM17 16H15V18H17V16ZM17 12H19V10H17V12ZM3 22C1.897 22 1 21.103 1 20V7H23V20C23 21.103 22.103 22 21 22H3Z"
                        })
                    })
                }, l.BrowserCheckeredIcon)
        },
        720691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: l = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 430 430",
                    children: (0, a.jsx)("path", {
                        className: s,
                        color: l,
                        d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z"
                    })
                })
            }
        },
        314892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("77078"),
                o = n("468759"),
                d = n("49111"),
                u = n("782340"),
                c = n("699074"),
                f = n("84811");
            let h = 0,
                p = () => "notification-position-selector-".concat(h++),
                E = e => {
                    switch (e) {
                        case d.OverlayNotificationPositions.TOP_LEFT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
                        case d.OverlayNotificationPositions.TOP_RIGHT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
                        case d.OverlayNotificationPositions.BOTTOM_LEFT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
                        case d.OverlayNotificationPositions.BOTTOM_RIGHT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
                        default:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_DISABLED
                    }
                },
                g = [d.OverlayNotificationPositions.DISABLED, d.OverlayNotificationPositions.TOP_LEFT, d.OverlayNotificationPositions.TOP_RIGHT, d.OverlayNotificationPositions.BOTTOM_LEFT, d.OverlayNotificationPositions.BOTTOM_RIGHT];

            function m(e) {
                let {
                    position: t,
                    onChange: n
                } = e, [l] = i.useState(() => p()), h = t === d.OverlayNotificationPositions.DISABLED ? u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
                    position: E(t)
                });
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(r.FocusRing, {
                        within: !0,
                        offset: -2,
                        children: (0, a.jsx)("div", {
                            className: s(c.wrapper, {
                                [c.disabledSelected]: t === d.OverlayNotificationPositions.DISABLED
                            }),
                            children: g.map(e => (0, a.jsxs)("label", {
                                className: s({
                                    [c.selected]: e === t,
                                    [c.disabled]: e === d.OverlayNotificationPositions.DISABLED,
                                    [c.topRight]: e === d.OverlayNotificationPositions.TOP_RIGHT,
                                    [c.topLeft]: e === d.OverlayNotificationPositions.TOP_LEFT,
                                    [c.bottomRight]: e === d.OverlayNotificationPositions.BOTTOM_RIGHT,
                                    [c.bottomLeft]: e === d.OverlayNotificationPositions.BOTTOM_LEFT
                                }),
                                children: [E(e), e === d.OverlayNotificationPositions.DISABLED ? (0, a.jsx)(o.default, {
                                    className: c.disabledIcon
                                }) : null, (0, a.jsx)("input", {
                                    type: "radio",
                                    name: l,
                                    value: e,
                                    onChange: t => n(t, e),
                                    className: c.hiddenInput
                                })]
                            }, e))
                        })
                    }), (0, a.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: f.marginTop8,
                        children: h
                    })]
                })
            }
            m.Positions = d.OverlayNotificationPositions;
            var S = m
        },
        560995: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_OPACITY: function() {
                    return p
                },
                default: function() {
                    return N
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("275023"),
                o = n.n(r),
                d = n("77078"),
                u = n("49111"),
                c = n("84299"),
                f = n("705562");
            let h = u.OverlayWidgetTypes.DEFAULT,
                p = 1,
                E = i.createContext({
                    type: h,
                    opacity: p
                }),
                g = i.createContext(void 0),
                m = e => {
                    let {
                        children: t,
                        className: n,
                        ...i
                    } = e;
                    return (0, a.jsx)(E.Consumer, {
                        children: e => {
                            let {
                                type: l
                            } = e;
                            return (0, a.jsx)(g.Consumer, {
                                children: e => (0, a.jsx)("div", {
                                    className: s(n, c.bar, c[o(l)]),
                                    style: e,
                                    ...i,
                                    children: t
                                })
                            })
                        }
                    })
                };
            class S extends i.PureComponent {
                render() {
                    let {
                        disableScroll: e,
                        children: t,
                        className: n
                    } = this.props;
                    return (0, a.jsx)(g.Consumer, {
                        children: i => (0, a.jsx)(E.Consumer, {
                            children: l => {
                                let r = s(c.body, c[o(l.type)], n);
                                return e ? (0, a.jsx)("div", {
                                    className: r,
                                    style: i,
                                    children: t
                                }) : (0, a.jsx)(d.Scroller, {
                                    fade: !0,
                                    className: r,
                                    children: t
                                })
                            }
                        })
                    })
                }
            }
            S.defaultProps = {
                disableScroll: !1
            };
            let v = e => {
                    let {
                        type: t = h,
                        width: n,
                        height: i,
                        children: l,
                        className: r,
                        opacity: d = p,
                        onClick: u
                    } = e;
                    return (0, a.jsx)(E.Provider, {
                        value: {
                            type: t,
                            opacity: d
                        },
                        children: (0, a.jsx)("div", {
                            className: s(c.widget, c[o(t)], r),
                            style: {
                                width: n,
                                height: i
                            },
                            onClick: u,
                            children: l
                        })
                    })
                },
                T = e => {
                    let {
                        children: t,
                        className: n,
                        dynamicSize: i = !1
                    } = e;
                    return (0, a.jsx)(g.Consumer, {
                        children: e => (0, a.jsx)("div", {
                            className: s(c.content, n, {
                                [c.staticSize]: !i
                            }),
                            style: e,
                            children: t
                        })
                    })
                };
            v.Background = e => {
                let {
                    children: t,
                    opacityOverride: n
                } = e;
                if (null == t) return null;
                let l = [m, S, T];
                return (0, a.jsx)(E.Consumer, {
                    children: e => {
                        let {
                            opacity: s
                        } = e, r = {
                            backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : s), ")")
                        };
                        if ("string" == typeof t.type) return i.cloneElement(t, {
                            style: r
                        });
                        {
                            if (l.includes(t.type)) return (0, a.jsx)(g.Provider, {
                                value: r,
                                children: t
                            });
                            let e = t.type.displayName;
                            throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(l.map(e => "Widget." + e.name).join(",")))
                        }
                    }
                })
            }, v.Body = S, v.Content = T, v.Icon = e => {
                let {
                    icon: t,
                    label: n,
                    onClick: i,
                    isActive: l,
                    tooltipPosition: r = "top",
                    size: o = 20,
                    isTutorial: u = !1
                } = e;
                return (0, a.jsx)(d.Tooltip, {
                    text: u ? (0, a.jsx)("div", {
                        className: c.tutorialTip,
                        children: n
                    }) : n,
                    "aria-label": n,
                    position: r,
                    forceOpen: u,
                    color: u ? d.Tooltip.Colors.BRAND : d.Tooltip.Colors.BLACK,
                    children: e => {
                        let {
                            onMouseEnter: r,
                            onMouseLeave: u
                        } = e;
                        return (0, a.jsx)(d.Button, {
                            look: d.Button.Looks.BLANK,
                            size: d.Button.Sizes.NONE,
                            onClick: i,
                            onMouseEnter: r,
                            onMouseLeave: u,
                            className: s(c.icon, {
                                [c.toggledIconOn]: l
                            }),
                            innerClassName: f.flexCenter,
                            "aria-label": n,
                            children: (0, a.jsx)(t, {
                                width: o,
                                height: o,
                                role: "img"
                            })
                        })
                    }
                })
            }, v.Bar = m;
            var N = v
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return E
                },
                Divider: function() {
                    return g
                },
                default: function() {
                    return S
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                s = n.n(l),
                r = n("902694"),
                o = n("807403"),
                d = n("77078"),
                u = n("597590"),
                c = n("980428"),
                f = n("772280"),
                h = n("587974"),
                p = n("767706");
            let E = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: i,
                        selected: l = !1,
                        disabled: r = !1,
                        showBadge: o = !1,
                        color: u,
                        foreground: c,
                        background: f,
                        icon: E,
                        onClick: g,
                        onContextMenu: m,
                        tooltip: S = null,
                        tooltipColor: v,
                        tooltipPosition: T = "bottom",
                        hideOnClick: N = !0,
                        role: I,
                        "aria-label": y,
                        "aria-hidden": C,
                        "aria-checked": _,
                        "aria-expanded": O,
                        "aria-haspopup": A
                    } = e, x = (0, a.jsx)(E, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: s(n, p.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: u
                    }), L = y;
                    return null == L && "string" == typeof S && (L = S), (0, a.jsx)(d.Tooltip, {
                        text: S,
                        color: v,
                        position: T,
                        hideOnClick: N,
                        children: e => {
                            let {
                                onMouseEnter: S,
                                onMouseLeave: v,
                                onFocus: T,
                                onBlur: N
                            } = e;
                            return null == g ? (0, a.jsx)("div", {
                                className: s(t, [p.iconWrapper]),
                                children: (0, a.jsx)(E, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: s(n, p.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: u,
                                    "aria-hidden": C,
                                    onMouseEnter: S,
                                    onMouseLeave: v,
                                    onFocus: T,
                                    onBlur: N
                                })
                            }) : (0, a.jsxs)(d.Clickable, {
                                tag: "div",
                                onClick: r ? void 0 : g,
                                onContextMenu: r ? void 0 : m,
                                onMouseEnter: S,
                                onMouseLeave: v,
                                onFocus: T,
                                onBlur: N,
                                className: s(t, {
                                    [p.iconWrapper]: !0,
                                    [p.clickable]: !r && null != g,
                                    [p.selected]: l
                                }),
                                role: I,
                                "aria-label": L,
                                "aria-hidden": C,
                                "aria-checked": _,
                                "aria-haspopup": A,
                                "aria-expanded": O,
                                tabIndex: r || null == g ? -1 : 0,
                                children: [o ? (0, a.jsx)(h.default, {
                                    mask: h.default.Masks.HEADER_BAR_BADGE,
                                    children: x
                                }) : x, o ? (0, a.jsx)("span", {
                                    className: p.iconBadge
                                }) : null, i]
                            })
                        }
                    })
                },
                g = e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: s(p.divider, t)
                    })
                },
                m = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: l,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: h,
                        "aria-label": E,
                        "aria-labelledby": g,
                        role: m,
                        scrollable: S,
                        transparent: v = !1
                    } = e, T = i.useRef(null), N = i.useContext(u.default);
                    return (0, a.jsx)("section", {
                        className: s(t, p.container, {
                            [p.themed]: !v,
                            [p.transparent]: v,
                            [p.themedMobile]: o.isMobile
                        }),
                        "aria-label": E,
                        "aria-labelledby": g,
                        role: m,
                        ref: T,
                        children: (0, a.jsxs)(d.FocusRingScope, {
                            containerRef: T,
                            children: [(0, a.jsxs)("div", {
                                className: p.upperContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: s(p.children, n, {
                                        [p.scrollable]: S
                                    }),
                                    onDoubleClick: h,
                                    children: [o.isMobile && null != N ? (0, a.jsx)(r.default, {
                                        onClick: N,
                                        className: p.hamburger
                                    }) : null, l]
                                }), null != f ? (0, a.jsx)("div", {
                                    className: p.toolbar,
                                    children: f
                                }) : null]
                            }), c]
                        })
                    })
                };
            m.Icon = E, m.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: i,
                    onContextMenu: l,
                    onClick: r,
                    id: o,
                    muted: u = !1,
                    level: c = 1
                } = e, f = (0, a.jsx)(d.HeadingLevel, {
                    forceLevel: c,
                    children: (0, a.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: u ? "header-secondary" : void 0,
                        className: s(t, p.title),
                        id: o,
                        children: i
                    })
                });
                return null != r ? (0, a.jsx)(d.Clickable, {
                    onClick: r,
                    onContextMenu: l,
                    className: s(n, p.titleWrapper),
                    children: f
                }) : (0, a.jsx)("div", {
                    className: s(n, p.titleWrapper),
                    onContextMenu: l,
                    children: f
                })
            }, m.Divider = g, m.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, a.jsx)(f.default, {
                    className: p.caret
                }) : (0, a.jsx)(c.default, {
                    className: p.caret
                })
            };
            var S = m
        },
        658530: function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                return new MouseEvent(e, {
                    screenX: t,
                    screenY: n,
                    clientX: t,
                    clientY: n,
                    bubbles: !0,
                    view: window
                })
            }

            function i(e, t, n) {
                let a = document.elementFromPoint(t, n);
                if (null == a) throw Error();
                a.dispatchEvent(e)
            }
            n.r(t), n.d(t, {
                createMouseEvent: function() {
                    return a
                },
                dispatchEventToPoint: function() {
                    return i
                }
            })
        },
        686069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSecondsSliderLabel: function() {
                    return s
                }
            });
            var a = n("377849"),
                i = n.n(a),
                l = n("782340");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.Messages.FORM_LABEL_OFF,
                    a = i.duration(e, "seconds");
                if (a.days() > 0) return (t ? l.default.Messages.DURATION_DAYS_SHORT : l.default.Messages.DURATION_DAYS).format({
                    days: a.days()
                });
                if (a.hours() > 0) return (t ? l.default.Messages.DURATION_HOURS_SHORT : l.default.Messages.DURATION_HOURS).format({
                    hours: a.hours()
                });
                if (a.minutes() > 0) return (t ? l.default.Messages.DURATION_MINUTES_SHORT : l.default.Messages.DURATION_MINUTES).format({
                    minutes: a.minutes()
                });
                else if (e > 0) return (t ? l.default.Messages.DURATION_SECONDS_SHORT : l.default.Messages.DURATION_SECONDS).format({
                    seconds: a.seconds()
                });
                else return t ? l.default.Messages.FORM_LABEL_OFF : n
            }
        }
    }
]);