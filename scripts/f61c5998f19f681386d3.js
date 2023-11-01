(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70287"], {
        506264: function(e, t, n) {
            var a = n("626849").Symbol;
            e.exports = a
        },
        60297: function(e, t, n) {
            var a = n("506264"),
                i = n("754892"),
                l = n("19797"),
                s = a ? a.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? i(e) : l(e)
            }
        },
        306551: function(e, t, n) {
            var a = n("84927"),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, a(e) + 1).replace(i, "") : e
            }
        },
        571255: function(e, t, n) {
            var a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = a
        },
        754892: function(e, t, n) {
            var a = n("506264"),
                i = Object.prototype,
                l = i.hasOwnProperty,
                s = i.toString,
                r = a ? a.toStringTag : void 0;
            e.exports = function(e) {
                var t = l.call(e, r),
                    n = e[r];
                try {
                    e[r] = void 0;
                    var a = !0
                } catch (e) {}
                var i = s.call(e);
                return a && (t ? e[r] = n : delete e[r]), i
            }
        },
        19797: function(e, t, n) {
            var a = Object.prototype.toString;
            e.exports = function(e) {
                return a.call(e)
            }
        },
        626849: function(e, t, n) {
            var a = n("571255"),
                i = "object" == typeof self && self && self.Object === Object && self,
                l = a || i || Function("return this")();
            e.exports = l
        },
        84927: function(e, t, n) {
            var a = /\s/;
            e.exports = function(e) {
                for (var t = e.length; t-- && a.test(e.charAt(t)););
                return t
            }
        },
        478098: function(e, t, n) {
            var a = n("952133"),
                i = n("645942"),
                l = n("261497"),
                s = Math.max,
                r = Math.min;
            e.exports = function(e, t, n) {
                var o, u, d, c, f, h, p = 0,
                    g = !1,
                    m = !1,
                    E = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function v(t) {
                    var n = o,
                        a = u;
                    return o = u = void 0, p = t, c = e.apply(a, n)
                }
                t = l(t) || 0, a(n) && (g = !!n.leading, d = (m = "maxWait" in n) ? s(l(n.maxWait) || 0, t) : d, E = "trailing" in n ? !!n.trailing : E);

                function S(e) {
                    var n = e - h,
                        a = e - p;
                    return void 0 === h || n >= t || n < 0 || m && a >= d
                }

                function y() {
                    var e, n, a, l, s = i();
                    if (S(s)) return C(s);
                    f = setTimeout(y, (n = (e = s) - h, a = e - p, l = t - n, m ? r(l, d - a) : l))
                }

                function C(e) {
                    return (f = void 0, E && o) ? v(e) : (o = u = void 0, c)
                }

                function I() {
                    var e, n = i(),
                        a = S(n);
                    if (o = arguments, u = this, h = n, a) {
                        if (void 0 === f) {
                            ;
                            return p = e = h, f = setTimeout(y, t), g ? v(e) : c
                        }
                        if (m) return clearTimeout(f), f = setTimeout(y, t), v(h)
                    }
                    return void 0 === f && (f = setTimeout(y, t)), c
                }
                return I.cancel = function() {
                    void 0 !== f && clearTimeout(f), p = 0, o = h = u = f = void 0
                }, I.flush = function() {
                    return void 0 === f ? c : C(i())
                }, I
            }
        },
        952133: function(e, t, n) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        346173: function(e, t, n) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        501870: function(e, t, n) {
            var a = n("60297"),
                i = n("346173");
            e.exports = function(e) {
                return "symbol" == typeof e || i(e) && "[object Symbol]" == a(e)
            }
        },
        645942: function(e, t, n) {
            var a = n("626849");
            e.exports = function() {
                return a.Date.now()
            }
        },
        229042: function(e, t, n) {
            var a = n("478098"),
                i = n("952133");
            e.exports = function(e, t, n) {
                var l = !0,
                    s = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                return i(n) && (l = "leading" in n ? !!n.leading : l, s = "trailing" in n ? !!n.trailing : s), a(e, t, {
                    leading: l,
                    maxWait: t,
                    trailing: s
                })
            }
        },
        261497: function(e, t, n) {
            var a = n("306551"),
                i = n("952133"),
                l = n("501870"),
                s = 0 / 0,
                r = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                d = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (l(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = a(e);
                var n = o.test(e);
                return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : r.test(e) ? s : +e
            }
        },
        445356: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08e581a604e6635d1424.svg"
        },
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
                    return _
                },
                default: function() {
                    return N
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                r = n("770032"),
                o = n("653047"),
                u = n("233069"),
                d = n("813006"),
                c = n("766274"),
                f = n("697218"),
                h = n("953109"),
                p = n("580357"),
                g = n("124969"),
                m = n("587974"),
                E = n("158998"),
                v = n("49111"),
                S = n("238055"),
                y = n("91366"),
                C = n("782340"),
                I = n("310042");
            let _ = () => (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(g.Avatar, {
                        src: null,
                        size: s.AvatarSizes.DEPRECATED_SIZE_100,
                        className: I.avatar
                    }), (0, a.jsx)(g.SubTitle, {
                        children: C.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, a.jsx)(g.Title, {
                        className: I.inviteResolvingGuildName,
                        children: C.default.Messages.LOADING
                    })]
                }),
                T = e => {
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
                    if (null != n) return (0, a.jsx)(g.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: s.AvatarSizes.SIZE_80,
                        className: l ? I.compactAvatar : I.avatar
                    });
                    if (null != t) return (0, a.jsx)(m.default, {
                        mask: m.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: I.guildIcon,
                        children: (0, a.jsx)(g.GuildIcon, {
                            guild: t,
                            size: g.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var N = e => {
                var t;
                let n, i, h, {
                        invite: m,
                        disableUser: _ = !1,
                        error: N,
                        flatActivityCount: A = !1,
                        isRegister: O = !1
                    } = e,
                    {
                        currentUser: L,
                        multiAccounts: x
                    } = (0, l.useStateFromStoresObject)([r.default, f.default], () => ({
                        currentUser: f.default.getCurrentUser(),
                        multiAccounts: r.default.getUsers()
                    }));
                if (null == m) return null;
                let R = null != m.guild ? new d.default(m.guild) : null,
                    M = null != m.channel ? (0, u.createChannelRecordFromInvite)(m.channel) : null,
                    D = null != m.target_application ? new o.default(m.target_application) : null,
                    k = _ || null == m.inviter ? null : new c.default(m.inviter),
                    b = null != m.approximate_member_count && m.approximate_member_count > 100 || null != R && R.hasFeature(v.GuildFeatures.COMMUNITY),
                    j = !b && null != k,
                    P = null,
                    V = !1;
                if (null != R) P = null == k ? C.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : C.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: E.default.getFormattedName(k)
                }), m.target_type === y.InviteTargetTypes.STREAM && null != m.target_user && (P = C.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: E.default.getFormattedName(m.target_user)
                })), m.target_type === y.InviteTargetTypes.EMBEDDED_APPLICATION && null != m.target_application && (P = null != k ? C.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: E.default.getFormattedName(k)
                }) : C.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), j && null == D && (n = (0, a.jsx)(g.GuildIcon, {
                    className: I.icon,
                    guild: R,
                    size: g.GuildIcon.Sizes.SMALL
                })), i = R.name, null != D && (i = D.name, h = (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(g.SubTitle, {
                        className: I.appIn,
                        children: C.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, a.jsxs)("div", {
                        className: I.guildContainer,
                        children: [(0, a.jsx)(g.GuildIcon, {
                            guild: R,
                            size: g.GuildIcon.Sizes.SMALL
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
                    if (null == k) throw Error("no inviter in group DM invite");
                    let e = E.default.getFormattedName(k);
                    null != M.name && "" !== M.name ? (P = C.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), i = M.name, null != M.icon && (n = (0, a.jsx)(g.ChannelIcon, {
                        channel: M,
                        size: s.AvatarSizes.SIZE_32
                    }))) : (P = C.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, i = e)
                } else if (null != k) {
                    let e = E.default.getFormattedName(k, !0);
                    i = C.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), V = !0, h = null != N ? null : (0, a.jsx)(g.SubTitle, {
                        className: I.directInviteSubTitle,
                        children: O ? C.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : C.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: I.container,
                    children: [(0, a.jsx)(T, {
                        application: D,
                        guild: R,
                        user: j ? k : null,
                        compact: V
                    }), null != N ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(g.SubTitle, {
                            children: C.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, a.jsx)(g.Title, {
                            children: N
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(g.SubTitle, {
                            children: P
                        }), (0, a.jsxs)(g.Title, {
                            className: I.title,
                            children: [null != R ? (0, a.jsx)(p.default, {
                                guild: R,
                                className: I.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, i]
                        })]
                    }), h, null != D || V || (null == m ? void 0 : null === (t = m.guild) || void 0 === t ? void 0 : t.id) === S.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, a.jsx)(g.ActivityCount, {
                        className: I.activityCount,
                        online: m.approximate_presence_count,
                        total: m.approximate_member_count,
                        flat: A
                    }), x.length > 1 ? (0, a.jsx)(g.JoiningAs, {
                        user: L
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
            var a = n("37983"),
                i = n("884691");
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
        910340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeAnalyticsTrackers: function() {
                    return u
                },
                getOverlayKeybind: function() {
                    return d
                }
            });
            var a = n("539405"),
                i = n("227602"),
                l = n("901165"),
                s = n("13798"),
                r = n("49111"),
                o = n("6791");

            function u(e, t) {
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

            function d() {
                let e = i.default.getOverlayKeybind();
                return null != e ? (0, s.toString)(e.shortcut, !0).split(" + ") : ["???"]
            }
        },
        415635: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("823411"),
                i = n("539405"),
                l = n("415518"),
                s = n("189771"),
                r = n("910340"),
                o = n("6791"),
                u = n("782340");

            function d(e, t, n, d, c) {
                if (null == t.activity) return null;
                let f = t.activity.type,
                    h = c.session_id;
                if (null == h) return null;
                let {
                    icon: p,
                    title: g,
                    body: m
                } = (0, s.makeTextChatNotification)(e, t, n), {
                    trackView: E,
                    trackClick: v
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
                    title: g,
                    body: m,
                    hint: e => (0, l.renderKeybindHint)(e, (0, r.getOverlayKeybind)(), u.default.Messages.OVERLAY_UNLOCK_TO_JOIN),
                    onNotificationShow: () => {
                        E()
                    },
                    confirmText: u.default.Messages.JOIN,
                    onConfirmClick: (l, s) => {
                        a.default.join({
                            userId: n.id,
                            sessionId: h,
                            applicationId: d.id,
                            channelId: e.id,
                            messageId: t.id
                        }), i.default.updateNotificationStatus(s), v("join")
                    },
                    onDismissClick: () => {
                        v("dismiss")
                    }
                }
            }
        },
        387129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("415518"),
                i = n("315102"),
                l = n("910340"),
                s = n("49111"),
                r = n("6791"),
                o = n("782340");

            function u(e, t) {
                let n = e.username,
                    u = o.default.Messages.USER_ACTIVITY_USER_JOIN.format({
                        username: ""
                    }),
                    d = (0, i.getUserAvatarURL)(e),
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
                    icon: d,
                    title: n,
                    body: u,
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
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("539405"),
                s = n("415518"),
                r = n("910340"),
                o = n("49111"),
                u = n("6791"),
                d = n("782340"),
                c = n("134333");

            function f() {
                return (0, a.jsx)("div", {
                    className: c.footer,
                    children: (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.GREEN,
                        size: i.Button.Sizes.SMALL,
                        className: c.ctaButton,
                        children: d.default.Messages.OVERLAY_NEWS_GO_LIVE_CTA
                    })
                })
            }

            function h(e) {
                switch (e.type) {
                    case u.OverlayNudgeTypes.GO_LIVE_VOICE: {
                        let {
                            game: t,
                            voiceGuild: c
                        } = e, {
                            trackView: h,
                            trackClick: p
                        } = (0, r.makeAnalyticsTrackers)(u.OverlayNotificationType.GoLiveNudge, {
                            notif_type: u.OverlayNotificationType.GoLiveNudge
                        });
                        return {
                            colorScheme: s.ColorSchemes.PRIMARY,
                            icon: n("484876"),
                            title: null,
                            body: d.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
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
                    case u.OverlayNudgeTypes.GO_LIVE_NON_VOICE: {
                        let {
                            game: t
                        } = e, {
                            trackView: c,
                            trackClick: h
                        } = (0, r.makeAnalyticsTrackers)(u.OverlayNotificationType.GoLiveNonVoiceNudge, {
                            notif_type: u.OverlayNotificationType.GoLiveNonVoiceNudge
                        });
                        return {
                            colorScheme: s.ColorSchemes.PRIMARY,
                            icon: n("484876"),
                            title: null,
                            body: d.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
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
                u = n("415518"),
                d = n("910340"),
                c = n("49111"),
                f = n("6791"),
                h = n("782340");

            function p(e) {
                let t = (0, s.computeChannelName)(e, o.default, r.default),
                    n = h.default.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
                    p = (0, l.getChannelIconURL)(e),
                    {
                        trackView: g,
                        trackClick: m
                    } = (0, d.makeAnalyticsTrackers)(f.OverlayNotificationType.IncomingCall, {
                        notif_type: f.OverlayNotificationType.IncomingCall,
                        notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
                        guild_id: e.guild_id,
                        channel_id: e.id,
                        channel_type: e.type
                    });
                return {
                    colorScheme: u.default.ColorSchemes.PRIMARY,
                    icon: p,
                    title: t,
                    body: n,
                    hint: e => (0, u.renderKeybindHint)(e, (0, d.getOverlayKeybind)(), h.default.Messages.OVERLAY_UNLOCK_TO_ANSWER),
                    confirmText: h.default.Messages.JOIN_CALL,
                    cancelText: h.default.Messages.DECLINE,
                    onNotificationShow: () => {
                        g()
                    },
                    onConfirmClick: () => {
                        i.default.callPrivateChannel(e.id), m("join"), i.default.track(c.AnalyticEvents.VOICE_CHANNEL_SELECTED, {
                            location: "Overlay Notificaiton",
                            guild_id: null,
                            channel_id: e.id,
                            video_enabled: !1
                        })
                    },
                    onCancelClick: () => {
                        a.default.stopRinging(e.id), m("decline")
                    },
                    onDismissClick: () => {
                        m("dismiss")
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
                u = n("49111"),
                d = n("6791"),
                c = n("782340");

            function f(e, t, n, f) {
                let h = t.username,
                    p = c.default.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
                        username: "",
                        game: n.name
                    }),
                    g = t.getAvatarURL(e.guild_id, 80),
                    {
                        trackView: m,
                        trackClick: E
                    } = (0, o.makeAnalyticsTrackers)(d.OverlayNotificationType.ActivityInvite, {
                        notif_type: d.OverlayNotificationType.ActivityInvite,
                        notif_user_id: t.id,
                        activity_type: u.ActivityActionTypes.JOIN_REQUEST,
                        activity_name: n.name
                    });
                return {
                    colorScheme: r.default.ColorSchemes.PRIMARY,
                    icon: g,
                    title: h,
                    body: p,
                    hint: e => (0, r.renderKeybindHint)(e, (0, o.getOverlayKeybind)(), c.default.Messages.OVERLAY_UNLOCK_TO_ANSWER),
                    confirmText: c.default.Messages.USER_ACTIVITY_RESPOND_YEAH,
                    cancelText: c.default.Messages.USER_ACTIVITY_RESPOND_NOPE,
                    onNotificationShow: () => {
                        m()
                    },
                    onConfirmClick: (t, n) => {
                        a.default.sendActivityInvite({
                            channelId: e.id,
                            type: u.ActivityActionTypes.JOIN,
                            activity: f,
                            location: s.default.isInstanceUILocked() ? u.AnalyticsLocations.LOCKED_OVERLAY : u.AnalyticsLocations.UNLOCKED_OVERLAY
                        }), E("join"), i.default.updateNotificationStatus(n)
                    },
                    onCancelClick: (t, n) => {
                        (0, l.ack)(e.id, !0, !0), i.default.updateNotificationStatus(n), E("decline")
                    },
                    onDismissClick: () => {
                        E("dismiss")
                    }
                }
            }
        },
        364864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("539405"),
                l = n("393414"),
                s = n("189857"),
                r = n("901165"),
                o = n("415518"),
                u = n("189771"),
                d = n("709681"),
                c = n("910340"),
                f = n("49111"),
                h = n("6791"),
                p = n("782340");

            function g(e, t, n, g) {
                var m;
                let {
                    icon: E,
                    title: v,
                    body: S
                } = (0, u.makeTextChatNotification)(e, t, n), {
                    trackView: y,
                    trackClick: C
                } = (0, c.makeAnalyticsTrackers)(h.OverlayNotificationType.TextChat, {
                    notif_type: h.OverlayNotificationType.TextChat,
                    notif_user_id: null === (m = t.author) || void 0 === m ? void 0 : m.id,
                    message_id: t.id,
                    message_type: t.type,
                    guild_id: e.guild_id,
                    channel_id: e.id,
                    channel_type: e.type
                });
                return {
                    colorScheme: o.ColorSchemes.PRIMARY,
                    icon: E,
                    title: v,
                    body: S,
                    renderFooter: e => e ? (0, a.jsx)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: p.default.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
                    }) : null,
                    maxBodyLines: 2,
                    onNotificationShow: () => {
                        g && (0, d.playSound)(s.MESSAGE_SOUND, s.MESSAGE_SOUND_VOLUME), y()
                    },
                    onNotificationClick: () => {
                        (0, l.transitionTo)(f.Routes.CHANNEL(e.guild_id, e.id)), C("jump"), r.default.isInstanceUILocked() && i.default.setInstanceLocked(!1)
                    },
                    onDismissClick: () => {
                        C("dismiss")
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
            var a = n("37983");
            n("884691");
            var i = n("539405"),
                l = n("901165"),
                s = n("415518"),
                r = n("910340"),
                o = n("6791"),
                u = n("782340");
            let d = () => ({
                    icon: n("307757"),
                    title: u.default.Messages.OVERLAY_LAUNCH_TITLE,
                    body: null,
                    hint: c,
                    colorScheme: s.ColorSchemes.PRIMARY,
                    notifType: o.OverlayNotificationType.WelcomeNudge
                }),
                c = e => (0, s.renderKeybindHint)(e, (0, r.getOverlayKeybind)(), u.default.Messages.OVERLAY_LAUNCH_OPEN_TIP);

            function f(e) {
                let {
                    type: t
                } = e, {
                    icon: n,
                    title: c,
                    body: f,
                    hint: h,
                    colorScheme: p,
                    notifType: g
                } = function(e, t) {
                    if (t.type === o.OverlayNudgeTypes.NEWS) {
                        var n, a, i, l, r, u, d, c;
                        return {
                            icon: null !== (r = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== r ? r : e.icon,
                            title: null !== (u = null === (a = t.news) || void 0 === a ? void 0 : a.title) && void 0 !== u ? u : e.title,
                            body: null !== (d = null === (i = t.news) || void 0 === i ? void 0 : i.body) && void 0 !== d ? d : e.body,
                            hint: null !== (c = null === (l = t.news) || void 0 === l ? void 0 : l.hint) && void 0 !== c ? c : e.hint,
                            colorScheme: null != t.news ? s.ColorSchemes.BRAND : e.colorScheme,
                            notifType: null != t.news ? o.OverlayNotificationType.NewsNudge : e.notifType
                        }
                    }
                    return e
                }(d(), e), {
                    trackView: m,
                    trackClick: E
                } = (0, r.makeAnalyticsTrackers)(g, {
                    notif_type: g
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
                        children: u.default.Messages.OVERLAY_CLICK_TO_UNLOCK
                    }),
                    onNotificationShow: () => {
                        m()
                    },
                    onNotificationClick: (e, n) => {
                        E("unlock"), t === o.OverlayNudgeTypes.NEWS && i.default.updateNotificationStatus(n), l.default.isInstanceUILocked() && i.default.setInstanceLocked(!1)
                    },
                    onDismissClick: () => {
                        E("dismiss")
                    }
                }
            }
        },
        47271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("539405"),
                s = n("990766"),
                r = n("910340"),
                o = n("415518"),
                u = n("774223"),
                d = n("162236"),
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
                    icon: (0, a.jsx)(u.default, {}),
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
                        h("unlock"), l.default.updateNotificationStatus(n), l.default.setInstanceLocked(!1), (0, d.openBroadcastingPrivacySettingsModal)(f.default.Messages.START_BROADCASTING, f.default.Messages.START_BROADCASTING_CTA, () => {
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
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("910340"),
                s = n("227602"),
                r = n("415518"),
                o = n("522049"),
                u = n("13798"),
                d = n("49111"),
                c = n("6791"),
                f = n("782340");

            function h() {
                let {
                    trackView: e,
                    trackClick: t
                } = (0, l.makeAnalyticsTrackers)(c.OverlayNotificationType.ClipsReminderNotification, {
                    notif_type: c.OverlayNotificationType.ClipsReminderNotification
                }), n = s.default.getKeybindForAction(d.GlobalKeybindActions.SAVE_CLIP);
                if (null == n) return null;
                let h = u.toString(n.shortcut, !0);
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
        569912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("65597"),
                i = n("385976"),
                l = n("867805");

            function s(e, t) {
                let n = (0, a.default)([i.default], () => null != e ? i.default.getCustomEmojiById(e) : null, [e]),
                    s = null != t ? l.default.getByName(l.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: s
                }
            }
        },
        205454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAEmojiSize: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("430568"),
                l = n("569912"),
                s = n("286667");
            let r = {
                SMALL: s.small,
                MEDIUM: s.medium,
                LARGE: s.large
            };

            function o(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: s,
                    size: o = r.MEDIUM
                } = e, {
                    customEmoji: u,
                    unicodeEmoji: d
                } = (0, l.default)(t, n);
                if (null == u && null == d) return (0, a.jsx)(a.Fragment, {
                    children: s
                });
                return (0, a.jsx)(i.default, {
                    emojiName: null != u ? null == u ? void 0 : u.name : n,
                    animated: null != u && u.animated,
                    emojiId: null == u ? void 0 : u.id,
                    autoplay: !0,
                    className: o
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("884691"),
                i = n("446674"),
                l = n("817963"),
                s = n("923959"),
                r = n("305961"),
                o = n("957255"),
                u = n("49111"),
                d = (e, t) => {
                    let n = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, l.useManageResourcePermissions)(n),
                        c = (0, i.useStateFromStores)([s.default], () => s.default.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = a.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        h = (0, i.useStateFromStores)([o.default], () => {
                            if (o.default.can(u.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, l.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, d]);
                    return h
                }
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("598532");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: l(s.image, t)
                })
            }
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
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e, t, n, i) {
                let l = null != n ? n : t,
                    s = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
                return s || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        676143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return O
                },
                getFirstRouteFor: function() {
                    return L
                },
                clearRecentChannels: function() {
                    return x
                },
                useChannelBrowserSections: function() {
                    return R
                },
                useChannelBrowserChannelCount: function() {
                    return M
                },
                getActiveAgoTimestamp: function() {
                    return D
                }
            });
            var a = n("884691"),
                i = n("448105"),
                l = n.n(i),
                s = n("866227"),
                r = n.n(s),
                o = n("249654"),
                u = n("446674"),
                d = n("151426"),
                c = n("267363"),
                f = n("320954"),
                h = n("10641"),
                p = n("290886"),
                g = n("319839"),
                m = n("194704"),
                E = n("393414"),
                v = n("42203"),
                S = n("245997"),
                y = n("660478"),
                C = n("49111"),
                I = n("724210"),
                _ = n("796618"),
                T = n("133335"),
                N = n("782340");

            function A(e, t) {
                e.index = t
            }

            function O(e, t, n, i) {
                i = i.toLowerCase();
                let s = (0, p.useCanSeeOnboardingHome)(e),
                    r = a.useCallback((e, t) => !(s && e.channel.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== C.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || l(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
                return a.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[C.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: a
                        } = n;
                        "null" === a.id && (e.null = t.null.filter(e => r(e, i))), e[a.id] = t[a.id].filter(e => r(e, i))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(A), e
                }, [t, n, r, i])
            }

            function L(e) {
                let t = e.getSections();
                if (t[g.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case _.ChannelListCommunityRow.GUILD_HOME:
                            return I.StaticChannelRoute.GUILD_HOME;
                        case _.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return I.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case _.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return I.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let a = g.SECTION_INDEX_UNCATEGORIZED_CHANNELS; a < e.voiceChannelsSectionNumber; a++)
                    if (t[a] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(a, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, m.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: T.ReadStateTypes.CHANNEL,
                    messageId: y.default.lastMessageId(e)
                }))), null != n && (0, E.transitionTo)(C.Routes.CHANNEL(e, n))
            }

            function R(e, t, n, a) {
                let i = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX),
                    l = (0, u.useStateFromStoresObject)([v.default], () => {
                        let t = {},
                            n = v.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: i
                            } = n[e];
                            if (null != i) {
                                var a;
                                t[i] = (null !== (a = t[i]) && void 0 !== a ? a : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    s = t._categories.map(e => {
                        let a = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === l[e.channel.id] ? 1 : a.length,
                            rowHeight: 0 === a.length ? 0 : n
                        }
                    });
                return !i && null != a && s.unshift({
                    rowCount: 1,
                    rowHeight: a
                }), s
            }

            function M(e) {
                var t, n;
                let a = (0, u.useStateFromStores)([S.default], () => S.default.getCategories(e)),
                    i = a._categories.length,
                    l = a._categories[a._categories.length - 1];
                if (null == l) return 0;
                let s = null !== (n = null === (t = l.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    r = a[s];
                return null == r ? 0 : 0 === r.length ? l.index + 2 - i : r[r.length - 1].index + 2 - i
            }

            function D(e) {
                var t;
                return N.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: r(o.default.extractTimestamp(null !== (t = y.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
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
                    return C
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                r = n("988738"),
                o = n("244201"),
                u = n("670984"),
                d = n("302537"),
                c = n("102999"),
                f = n("929479"),
                h = n("552067"),
                p = n("866681"),
                g = n("791106"),
                m = n("983782"),
                E = n("587974"),
                v = n("601415"),
                S = n("357506"),
                y = n("49111");
            n("551184"), n("762017"), l.default.initialize();
            var C = function() {
                return i.useEffect(() => (f.default.initialize(), u.default.initialize(), p.default.init(), h.default.init(), () => {
                    f.default.terminate(), u.default.terminate()
                }), []), (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(c.default, {
                        children: (0, a.jsxs)(v.default, {
                            children: [(0, a.jsx)(E.MaskLibrary, {}), (0, a.jsx)(g.default, {}), (0, a.jsx)(o.AppWindowContextProvider, {
                                appContext: y.AppContext.OVERLAY,
                                renderWindow: window,
                                children: (0, a.jsxs)(m.AppLayerProvider, {
                                    children: [(0, a.jsx)(S.default, {}), (0, a.jsx)(s.Modals, {}), (0, a.jsx)(r.default, {}), (0, a.jsx)(m.AppLayerContainer, {})]
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
                    return y
                }
            });
            var a = n("884691"),
                i = n("316693"),
                l = n("446674"),
                s = n("701916"),
                r = n("939398"),
                o = n("42203"),
                u = n("923959"),
                d = n("26989"),
                c = n("305961"),
                f = n("957255"),
                h = n("18494"),
                p = n("162771"),
                g = n("697218"),
                m = n("901165"),
                E = n("819068"),
                v = n("49111");
            class S extends a.Component {
                componentDidUpdate(e) {
                    if (this.props.locked) return null;
                    let {
                        selectedGuild: t,
                        selectedChannel: n,
                        isNSFWChannel: a,
                        isMemberPending: i,
                        hasPreviewEnabled: l,
                        postableChannelCount: u
                    } = this.props;
                    if (t !== e.selectedGuild || i && !e.isMemberPending) {
                        let e = i ? {
                            is_pending: i,
                            preview_enabled: l
                        } : {};
                        (0, r.trackWithOverlayMetadata)(v.AnalyticEvents.GUILD_VIEWED, {
                            ...e,
                            postable_channels: u
                        })
                    }
                    if (null != n && n !== e.selectedChannel) {
                        let e = (0, s.collectThreadMetadata)(o.default.getChannel(n), !0);
                        (0, r.trackWithOverlayMetadata)(v.AnalyticEvents.CHANNEL_OPENED, {
                            channel_is_nsfw: a,
                            ...e
                        })
                    }
                }
                render() {
                    return null
                }
            }
            var y = l.default.connectStores([p.default, h.default, o.default, c.default, g.default, m.default, d.default, u.default, f.default], () => {
                var e, t, n;
                let a = p.default.getGuildId(),
                    l = h.default.getChannelId(a),
                    s = o.default.getChannel(l),
                    r = c.default.getGuild(a),
                    S = g.default.getCurrentUser(),
                    y = null !== (t = u.default.getChannels(null == r ? void 0 : r.id)[u.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : [],
                    C = y.length > 0 ? y.filter(e => {
                        let {
                            channel: t
                        } = e;
                        return f.default.can(i.default.combine(v.Permissions.SEND_MESSAGES, v.Permissions.VIEW_CHANNEL), t)
                    }).length : 0,
                    I = null != S && null != a && null !== (n = null === (e = d.default.getMember(a, S.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
                return {
                    selectedGuild: a,
                    selectedChannel: l,
                    isNSFWChannel: null == s ? void 0 : s.nsfw,
                    locked: m.default.isUILocked((0, E.getPID)()),
                    hasPreviewEnabled: null == r ? void 0 : r.features.has(v.GuildFeatures.PREVIEW_ENABLED),
                    isMemberPending: I,
                    postableChannelCount: C
                }
            })(S)
        },
        483355: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("884691"),
                i = n("917351"),
                l = n.n(i),
                s = n("817736"),
                r = n("118810"),
                o = n("233736"),
                u = n("862337"),
                d = n("49671"),
                c = n("658530"),
                f = n("773336"),
                h = n("50885");
            let p = {
                    x: 0,
                    y: 0
                },
                g = !1;

            function m(e) {
                let {
                    clientX: t,
                    clientY: n
                } = e;
                g = !0, p.x = t, p.y = n
            }
            let E = new Map;

            function v(e, t) {
                if (null == t) E.delete(e), 0 === E.size && (window.removeEventListener("mousemove", m), g = !1);
                else {
                    let n = E.get(e);
                    if (null != n && (0, o.default)(n.zone, t.zone)) return;
                    0 === E.size && window.addEventListener("mousemove", m), E.set(e, t)
                }
                if (f.isPlatformEmbedded) {
                    var n, a, i;
                    null === (i = d.default) || void 0 === i || null === (a = i.globalOverlay) || void 0 === a || null === (n = a.setClickZones) || void 0 === n || n.call(a, Array.from(E.values()).map(e => {
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
                            zones: Array.from(E.values()).map(e => {
                                let {
                                    zone: t
                                } = e;
                                return t
                            })
                        }),
                        function() {
                            var e, t, n;
                            if (S) return;
                            let a = (e, t, n) => {
                                let a = E.get(e);
                                null != a && (!g && (p.x = t, p.y = n), a.instance.click())
                            };
                            null === (n = d.default) || void 0 === n || null === (t = n.globalOverlay) || void 0 === t || null === (e = t.setClickZoneCallback) || void 0 === e || e.call(t, a);
                            let i = h.default.requireModule("discord_overlay2");
                            i.setClickZoneCallback(a), S = !0
                        }()
                }
            }
            let S = !1;
            class y extends a.PureComponent {
                componentDidMount() {
                    this.props.observe ? this.observeZone() : this.updateZone()
                }
                componentWillUnmount() {
                    this.interval.stop(), v(this.zone, null)
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
                    super(...e), this.zone = l.uniqueId("ClickArea"), this.interval = new u.Interval, this.updateZone = () => {
                        let e = (0, s.findDOMNode)(this);
                        if ((0, r.isElement)(e)) {
                            let {
                                left: t,
                                top: n,
                                right: a,
                                bottom: i
                            } = e.getBoundingClientRect();
                            v(this.zone, {
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
            y.defaultProps = {
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
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("90915"),
                o = n("446674"),
                u = n("77078"),
                d = n("629109"),
                c = n("406189"),
                f = n("987317"),
                h = n("412026"),
                p = n("331306"),
                g = n("679653"),
                m = n("305961"),
                E = n("42887"),
                v = n("27618"),
                S = n("697218"),
                y = n("800762"),
                C = n("783419"),
                I = n("145131"),
                _ = n("293137"),
                T = n("272339"),
                N = n("200639"),
                A = n("849467"),
                O = n("97347"),
                L = n("560995"),
                x = n("962541"),
                R = n("78574"),
                M = n("49111"),
                D = n("782340"),
                k = n("79415"),
                b = n("833076");

            function j(e) {
                let {
                    lobbyId: t
                } = e, n = (0, o.useStateFromStoresObject)([C.default], () => ({
                    connectionState: C.default.getConnectionState(t),
                    hostname: C.default.getHostname(t),
                    averagePing: C.default.getAveragePing(t),
                    lastPing: C.default.getLastPing(t),
                    pings: C.default.getPings(),
                    outboundLossRate: C.default.getOutboundLossRate(t),
                    isSecureFramesEnabled: C.default.isSecureFramesEnabled(t)
                }));
                return (0, a.jsx)(p.default, {
                    ...n
                })
            }
            class P extends i.PureComponent {
                handleDisconnect() {
                    f.default.selectVoiceChannel(null)
                }
                renderLobby() {
                    return (0, a.jsx)(R.default, {
                        className: b.channel,
                        children: D.default.Messages.LOBBY
                    })
                }
                renderChannelLink(e) {
                    let {
                        guild: t
                    } = this.props, n = (0, g.computeChannelName)(e, S.default, v.default), i = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : M.ME;
                    return (0, a.jsx)(r.Link, {
                        to: M.Routes.CHANNEL(l),
                        onClick: t => {
                            t.stopPropagation(), c.default.channelListScrollTo(l, e.id)
                        },
                        children: (0, a.jsx)(R.default, {
                            className: b.channel,
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
                        hasVideo: d,
                        connectionState: c,
                        deaf: f,
                        mute: p
                    } = this.props;
                    return null == l && null == i ? null : (0, a.jsx)(L.default.Bar, {
                        className: s(e, k.controls, {
                            [k.unpinned]: !n
                        }),
                        children: (0, a.jsxs)(L.default.Content, {
                            className: s(t, k.content),
                            dynamicSize: !0,
                            children: [(0, a.jsx)("div", {
                                className: b.inner,
                                children: (0, a.jsx)(u.Popout, {
                                    renderPopout: this.renderPopout,
                                    position: "top",
                                    children: e => (0, a.jsx)(u.Clickable, {
                                        ...e,
                                        children: (0, a.jsx)(h.default, {
                                            statusTextClassName: b.statusWithPopout,
                                            quality: r,
                                            lastPing: o,
                                            hasVideo: d,
                                            state: c,
                                            children: null != l ? this.renderChannelLink(l) : this.renderLobby()
                                        })
                                    })
                                })
                            }), (0, a.jsxs)(I.default, {
                                grow: 0,
                                children: [(0, a.jsx)(x.default, {
                                    tooltipText: p ? D.default.Messages.UNMUTE : D.default.Messages.MUTE,
                                    icon: p ? O.default : A.default,
                                    iconForeground: p ? k.strikethrough : null,
                                    onClick: this.handleToggleSelfMute
                                }), (0, a.jsx)(x.default, {
                                    tooltipText: f ? D.default.Messages.UNDEAFEN : D.default.Messages.DEAFEN,
                                    icon: f ? N.default : T.default,
                                    onClick: this.handleToggleSelfDeaf,
                                    iconForeground: f ? k.strikethrough : null
                                }), null == i && (0, a.jsx)(x.default, {
                                    tooltipText: D.default.Messages.DISCONNECT_SELF,
                                    onClick: this.handleDisconnect,
                                    icon: _.default
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
                        d.default.toggleSelfMute({
                            context: e
                        })
                    }, this.handleToggleSelfDeaf = () => {
                        let {
                            context: e
                        } = this.props;
                        d.default.toggleSelfDeaf({
                            context: e
                        })
                    }, this.renderPopout = () => {
                        let {
                            lobbyId: e
                        } = this.props;
                        return (0, a.jsx)(j, {
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
                } = e, s = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(null == i ? void 0 : i.getGuildId())), r = (0, o.useStateFromStores)([y.default], () => null != i && y.default.hasVideo(i.id)), [u, d] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.isSelfMute(t) || E.default.isSelfMutedTemporarily(t), E.default.isSelfDeaf(t)]), [c, f, h] = (0, o.useStateFromStoresArray)([C.default], () => [C.default.getConnectionState(n), C.default.getLastPing(n), C.default.getQuality(n)]);
                return (0, a.jsx)(P, {
                    ...l,
                    context: t,
                    lobbyId: n,
                    channel: i,
                    guild: s,
                    hasVideo: r,
                    mute: u,
                    deaf: d,
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
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("917351"),
                o = n.n(r),
                u = n("88807"),
                d = n("721998"),
                c = n("432710"),
                f = n("77078"),
                h = n("539405"),
                p = n("121338"),
                g = n("155084"),
                m = n("393414"),
                E = n("415518"),
                v = n("720691"),
                S = n("560995"),
                y = n("286235"),
                C = n("439932"),
                I = n("819068"),
                _ = n("483355"),
                T = n("6791"),
                N = n("49111"),
                A = n("782340"),
                O = n("353306");

            function L() {
                let e = (0, I.getPID)(),
                    t = (0, I.getRPCAuthToken)();
                (0, p.send)({
                    type: N.OverlayEventTypes.DISPATCH,
                    pid: e,
                    token: t,
                    payloads: [{
                        type: "OVERLAY_SET_INPUT_LOCKED",
                        locked: !0,
                        pid: e
                    }]
                })
            }
            class x extends i.PureComponent {
                componentDidMount() {
                    this.notificationTimer = setTimeout(this.hideNotification, 1e4), h.default.track(N.AnalyticEvents.NOTIFICATION_VIEWED, {
                        notif_type: T.OverlayNotificationType.OverlayCrashed
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
                    return null == i ? null : (0, a.jsx)(_.default, {
                        observe: !1,
                        children: (0, a.jsxs)(f.Clickable, {
                            className: s((0, C.getThemeClass)(N.ThemeTypes.DARK), O.container),
                            onClick: e => e.stopPropagation(),
                            children: [(0, a.jsx)(E.default, {
                                expand: !0,
                                colorScheme: E.ColorSchemes.DANGER,
                                icon: (0, a.jsx)(v.default, {
                                    width: 40,
                                    height: 40,
                                    className: O.notificationIcon
                                }),
                                title: A.default.Messages.OVERLAY_CRASHED_TITLE,
                                confirmText: A.default.Messages.OVERLAY_RELOAD,
                                onNotificationClick: this.handleNotificationClick,
                                onConfirmClick: this.handleReload,
                                onDismissClick: this.hideNotification
                            }), n && null != e ? (0, a.jsxs)(S.default, {
                                className: O.stackTrace,
                                children: [(0, a.jsx)(S.default.Bar, {
                                    children: "Error Details"
                                }), (0, a.jsx)(S.default.Content, {
                                    className: O.stackTraceCode,
                                    children: (0, a.jsx)("code", {
                                        className: O.code,
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
                        L();
                        let {
                            notificationTimer: e
                        } = this;
                        null != e && clearTimeout(e), this.notificationTimer = null
                    }, this.handleReload = e => {
                        this.setState({
                            busy: !0
                        }), L(), h.default.track(N.AnalyticEvents.NOTIFICATION_CLICKED, {
                            notif_type: T.OverlayNotificationType.OverlayCrashed,
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
                g.default.increment({
                    name: c.MetricEvents.APP_CRASHED,
                    tags: ["reason:".concat(u.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(d.ErrorLevels.FATAL)]
                }, !0)
            }, 100, {
                trailing: !1
            });
            class M extends i.PureComponent {
                componentDidCatch(e, t) {
                    let n = (0, m.getHistory)().location;
                    this.setState({
                        error: e,
                        info: t
                    });
                    let a = (0, I.getPID)(),
                        i = (0, I.getRPCAuthToken)();
                    (0, p.send)({
                        type: N.OverlayEventTypes.DISPATCH,
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
                    }), setImmediate(() => window.addEventListener("click", L));
                    let l = y.default.captureCrash(e, {
                        extra: t
                    });
                    h.default.track(N.AnalyticEvents.APP_CRASHED, {
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
                    return null != n ? (0, a.jsx)(x, {
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
                    return y
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("446674"),
                o = n("696336"),
                u = n("162771"),
                d = n("959479"),
                c = n("560995"),
                f = n("246458"),
                h = n("637842"),
                p = n("890291"),
                g = n("758547"),
                m = n("782340"),
                E = n("893908");

            function v(e) {
                let {
                    closePopout: t
                } = e;
                return (0, a.jsx)(h.default, {
                    onClose: t
                })
            }
            class S extends i.PureComponent {
                render() {
                    let {
                        selectedGuildId: e,
                        locked: t,
                        contained: n
                    } = this.props, i = null != e ? (0, a.jsx)(f.default, {
                        guildId: e,
                        onDragStart: this.onDragStart
                    }, e) : (0, a.jsx)(g.default, {
                        title: m.default.Messages.DIRECT_MESSAGES,
                        renderSettings: v,
                        onDragStart: this.onDragStart,
                        children: (0, a.jsx)(p.default, {})
                    }), l = n ? "div" : c.default;
                    return (0, a.jsxs)(l, {
                        className: s(E.base, {
                            [E.widget]: !n
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
                        t(d.Operations.MOVE, e.clientX, e.clientY)
                    }
                }
            }
            S.defaultProps = {
                contained: !1
            };
            var y = r.default.connectStores([u.default], () => ({
                selectedGuildId: u.default.getGuildId()
            }))(S)
        },
        628480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("560995"),
                l = n("233102"),
                s = n("440899"),
                r = n("970921");

            function o(e) {
                let {
                    dragStart: t,
                    dragging: n,
                    pinned: o,
                    locked: u
                } = e;
                return (0, a.jsxs)(i.default, {
                    className: r.wrapper,
                    children: [(0, a.jsx)(l.default, {
                        contained: !0,
                        dragStart: t,
                        locked: u
                    }), (0, a.jsx)(s.default, {
                        dragStart: t,
                        locked: u,
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
                    return S
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("446674"),
                s = n("375202"),
                r = n("49040"),
                o = n("373469"),
                u = n("86878"),
                d = n("546463"),
                c = n("260320"),
                f = n("169602"),
                h = n("568307"),
                p = n("697218"),
                g = n("703370"),
                m = n("901165"),
                E = n("158998"),
                v = n("522019"),
                S = l.default.connectStores([h.default, g.default, o.default, p.default, m.default, c.default, u.default, f.default, d.default], () => {
                    let e;
                    let t = c.default.getLobbiesWithVoice().find(e => null != u.default.getApplication(e.application_id)),
                        n = [],
                        a = "";
                    if (null != t) {
                        let l = u.default.getApplication(t.application_id);
                        (null == l ? void 0 : l.name) != null && (a = l.name), e = t.application_id, i.each(f.default.getVoiceStates(t.id), e => {
                            let t = p.default.getUser(e.userId);
                            null != t && n.push({
                                voiceState: e,
                                user: t,
                                nick: t.username,
                                comparator: E.default.getName(t)
                            })
                        })
                    }
                    let l = (0, s.default)(h.default, g.default),
                        v = o.default.getCurrentUserActiveStream(),
                        S = o.default.getStreamerActiveStreamMetadata();
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
                        displayUserMode: m.default.getDisplayUserMode(),
                        displayNameMode: m.default.getDisplayNameMode(),
                        avatarSizeMode: m.default.getAvatarSizeMode(),
                        application: null != l ? d.default.getGameByGameData(l) : null,
                        streamApplication: (0, r.default)(l),
                        stream: v,
                        streamMetadata: S,
                        hasStream: !1
                    }
                })(v.VoiceWidget)
        },
        750549: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("458960"),
                s = n("539405"),
                r = n("415518"),
                o = n("483355"),
                u = n("49111"),
                d = n("906664");
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
                        translateY: u
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
                    null != t ? (0 === e ? l = 1.1 : a = 1.3, i = 0, n = t) : n = this.handleAnimationEnd, o.setValue(1), u.setValue(a), r.setValue(l), s.setValue(i), n()
                }
                getStyle() {
                    let e, t, n, a, i;
                    let {
                        opacity: l,
                        scale: s,
                        translateX: r,
                        translateY: o,
                        props: {
                            position: d,
                            zIndex: c
                        }
                    } = this;
                    switch (d) {
                        case u.OverlayNotificationPositions.TOP_LEFT:
                        case u.OverlayNotificationPositions.BOTTOM_LEFT:
                            e = "-100%", t = 0;
                            break;
                        default:
                            n = 0, e = "100%"
                    }
                    switch (d) {
                        case u.OverlayNotificationPositions.BOTTOM_LEFT:
                        case u.OverlayNotificationPositions.BOTTOM_RIGHT:
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
                                    onConfirmClick: u,
                                    onCancelClick: c,
                                    ...f
                                }
                            }
                        },
                        state: {
                            animatedIn: h
                        }
                    } = this, p = (0, a.jsx)(l.default.div, {
                        className: d.animationContainer,
                        style: this.getStyle(),
                        children: (0, a.jsx)(r.default, {
                            ...f,
                            onNotificationShow: h && 0 === t ? this.handleNotificationShow : null,
                            onDismissClick: this.handleDismissClick,
                            onNotificationClick: null != s ? this.handleNotificationClick : null,
                            onConfirmClick: null != u ? this.handleConfirmClick : null,
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
                    return g
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("446674"),
                o = n("266491"),
                u = n("786770"),
                d = n("901165"),
                c = n("750549"),
                f = n("49111"),
                h = n("246412");
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
            var g = r.default.connectStores([u.default, d.default], () => ({
                notifications: u.default.getNotifications(),
                position: d.default.getNotificationPositionMode()
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
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                o = n("499032"),
                u = n.n(o),
                d = n("483366"),
                c = n.n(d),
                f = n("969176"),
                h = n.n(f),
                p = n("446674"),
                g = n("77078"),
                m = n("404118"),
                E = n("272030"),
                v = n("539405"),
                S = n("304580"),
                y = n("175980"),
                C = n("485328"),
                I = n("827792"),
                _ = n("812204"),
                T = n("685665"),
                N = n("9759"),
                A = n("705565"),
                O = n("479788"),
                L = n("375202"),
                x = n("831773"),
                R = n("359477"),
                M = n("373469"),
                D = n("271938"),
                k = n("42203"),
                b = n("305961"),
                j = n("42887"),
                P = n("568307"),
                V = n("18494"),
                w = n("40597"),
                U = n("703370"),
                G = n("144747"),
                F = n("227602"),
                B = n("901165"),
                Y = n("471671"),
                W = n("145131");
            n("58608");
            var H = n("773336"),
                z = n("50885"),
                K = n("13798"),
                X = n("819068"),
                J = n("878624"),
                Z = n("485415"),
                q = n("206496"),
                Q = n("684325"),
                $ = n("762243"),
                ee = n("265268"),
                et = n("6791"),
                en = n("49111"),
                ea = n("782340"),
                ei = n("885971");
            p.default.PersistedStore.disableWrites = __OVERLAY__, p.default.initialize();
            let el = null;

            function es(e) {
                e.preventDefault()
            }

            function er(e) {
                (0, E.openContextMenuLazy)(e, async () => {
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
                    } = e, s = l ? g.Clickable : "div";
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
                            children: (0, i.jsx)(S.default, {
                                variant: S.default.Variants.BOLD,
                                keybind: t,
                                closeAction: n
                            })
                        })
                    })
                },
                eu = e => {
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
            class ed extends l.Component {
                handleLock() {
                    !(0, g.hasAnyModalOpen)() && !G.default.isOpen() && v.default.setLocked(!0, (0, X.getPID)())
                }
                handleDeactivate() {
                    v.default.deactivateAllRegions()
                }
                componentDidMount() {
                    v.default.startSession(), x.default.initialize(), I.default.initialize(), R.default.initialize()
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
                                v.default.track(en.AnalyticEvents.OVERLAY_LOCKED, {
                                    unlocked_duration: e
                                }), el = null
                            }
                            C.default.disable(), this.activeKeyEventShapes = [], B.default.isPinned(en.OverlayWidgets.TEXT) && (C.default.setLayout(y.OVERLAY_LOCKED_LAYOUT), C.default.enable())
                        } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", es, !1), null == el && (el = Date.now(), v.default.track(en.AnalyticEvents.OVERLAY_UNLOCKED)), C.default.disable(), this.activeKeyEventShapes = [], C.default.setLayout(y.OVERLAY_LAYOUT), C.default.enable());
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
                    v.default.track(en.AnalyticEvents.OVERLAY_INITIALIZED, {
                        voice_widget_connected: e,
                        text_widget_connected: B.default.isPinned(en.OverlayWidgets.TEXT)
                    });
                    let u = n && !a && null != s,
                        d = e && null != i && null != l,
                        c = {
                            type: et.OverlayNudgeTypes.WELCOME
                        };
                    if (u && !e && r ? (N.default.trackExposure({
                            location: "overlay_notification"
                        }), o && (c = {
                            type: et.OverlayNudgeTypes.BROADCAST,
                            game: s
                        })) : u && d ? c = {
                            type: et.OverlayNudgeTypes.GO_LIVE_VOICE,
                            game: s,
                            voiceChannelId: l,
                            voiceGuild: i
                        } : u && (c = {
                            type: et.OverlayNudgeTypes.GO_LIVE_NON_VOICE,
                            game: s
                        }), v.default.overlayMounted(c), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", es, !1), H.isPlatformEmbedded) {
                        let e = z.default.requireModule("discord_overlay2");
                        void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
                            v.default.track(en.AnalyticEvents.OVERLAY_PERF_INFO, e)
                        }), e.broadcastCommand({
                            message: "set_perf_report_interval",
                            interval: 9e5
                        })), z.default.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                            B.default.getDisableExternalLinkAlert() || t === w.default.getLastURL() ? z.default.send("OPEN_EXTERNAL_URL", t) : m.default.show({
                                title: ea.default.Messages.OVERLAY_LINK_ALERT_TITLE,
                                body: ea.default.Messages.OVERLAY_LINK_ALERT_BODY,
                                secondaryConfirmText: ea.default.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                                confirmText: ea.default.Messages.CONTINUE,
                                cancelText: ea.default.Messages.CANCEL,
                                onConfirmSecondary: () => {
                                    v.default.disableExternalLinkAlert(), z.default.send("OPEN_EXTERNAL_URL", t)
                                },
                                onConfirm: () => z.default.send("OPEN_EXTERNAL_URL", t)
                            })
                        })
                    }
                    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", es, !1), x.default.terminate(), I.default.terminate(), R.default.terminate()
                }
                renderInvalidSizeMessage() {
                    return (0, i.jsx)(W.default, {
                        justify: W.default.Justify.CENTER,
                        align: W.default.Align.CENTER,
                        className: ei.invalidContainer,
                        children: (0, i.jsx)("div", {
                            className: ei.inactiveContainer,
                            children: ea.default.Messages.OVERLAY_TOO_SMALL.format(X.OVERLAY_MIN_RESOLUTION)
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
                        windowSize: u,
                        voiceGuild: d,
                        voiceChannelId: c
                    } = this.props, {
                        width: f,
                        height: h
                    } = u;
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
                        }), (0, X.validResolution)(u) ? (0, i.jsx)(q.default, {
                            className: r({
                                [ei.layoutLocked]: e,
                                [ei.layoutUnlocked]: !e
                            })
                        }) : e ? null : this.renderInvalidSizeMessage(), (0, i.jsx)(ee.default, {}), null != d && null != c && (0, i.jsx)($.default, {
                            streamerId: p,
                            guildId: d.id,
                            channelId: c
                        }), (0, i.jsx)(Z.default, {
                            locked: e || s,
                            keybind: t
                        }), (0, i.jsx)(J.default, {})]
                    })
                }
                constructor(e) {
                    super(e), this.handleWindowResize = c(() => {
                        this.forceUpdate()
                    }, 500), this.activeKeyEventShapes = [], this.lockEventShape = (0, K.toBrowserEvents)(this.props.keybindKeyCodes), this.getActiveKeyEventIndex = e => this.activeKeyEventShapes.findIndex(t => h(t, e)), this.onKeyDownGlobal = e => {
                        let t = eu(e),
                            n = this.getActiveKeyEventIndex(t) > -1,
                            a = [16, 17, 18, 91].includes(e.keyCode);
                        !n && !a && this.activeKeyEventShapes.push(t);
                        let i = this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h(e, t)));
                        i && (e.preventDefault(), e.stopPropagation());
                        let {
                            locked: l,
                            activeRegions: s
                        } = this.props;
                        t.keyCode === u.codes.esc && l && s.has(en.OverlayActiveRegions.TEXT_WIDGET) && v.default.deactivateAllRegions()
                    }, this.onKeyUpGlobal = e => {
                        let t = eu(e),
                            n = this.getActiveKeyEventIndex(t);
                        n > -1 && this.activeKeyEventShapes.splice(n, 1)
                    };
                    let t = e.locked && B.default.isPinned(en.OverlayWidgets.TEXT);
                    C.default.setLayout(t ? y.OVERLAY_LOCKED_LAYOUT : y.OVERLAY_LAYOUT), t && C.default.enable()
                }
            }

            function ec() {
                let {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: a,
                    isPreviewingInGame: l
                } = (0, p.useStateFromStoresObject)([B.default], () => ({
                    locked: B.default.isUILocked((0, X.getPID)()),
                    initialized: B.default.initialized,
                    incompatibleApp: B.default.incompatibleApp,
                    activeRegions: B.default.getActiveRegions(),
                    isPreviewingInGame: B.default.isPreviewingInGame()
                })), s = (0, p.useStateFromStores)([Y.default], () => Y.default.windowSize()), r = (0, p.useStateFromStores)([F.default], () => F.default.getOverlayKeybind()), o = (0, p.useStateFromStores)([V.default], () => V.default.getVoiceChannelId()), u = (0, p.useStateFromStores)([k.default], () => k.default.getChannel(o)), d = (0, p.useStateFromStores)([b.default], () => null != u ? b.default.getGuild(u.guild_id) : null), c = (0, p.useStateFromStores)([P.default, U.default], () => (0, L.default)(P.default, U.default)), f = (0, p.useStateFromStores)([j.default], () => (0, O.default)(j.default)), {
                    canBroadcast: h
                } = N.default.useExperiment({
                    location: "overlay"
                }, {
                    autoTrackExposure: !1
                }), g = (0, A.default)() && null != c, m = (0, p.useStateFromStores)([M.default], () => null != M.default.getCurrentUserActiveStream()), {
                    AnalyticsLocationProvider: E
                } = (0, T.default)(_.default.OVERLAY);
                return (0, i.jsx)(E, {
                    children: (0, i.jsx)(ed, {
                        locked: e,
                        initialized: t,
                        incompatibleApp: n,
                        activeRegions: a,
                        isPreviewingInGame: l,
                        windowSize: s,
                        keybind: null != r ? (0, K.toString)(r.shortcut, !0) : "???",
                        keybindKeyCodes: null != r ? r.shortcut : [],
                        connectedToVoice: null != o,
                        voiceChannelId: null != u ? u.id : null,
                        voiceGuild: d,
                        game: c,
                        canGoLive: f,
                        isStreaming: m,
                        canBroadcast: h,
                        canStartBroadcast: g
                    })
                })
            }
        },
        206496: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("640583"),
                r = n("539405"),
                o = n("634175"),
                u = n("505507"),
                d = n("901165"),
                c = n("471671"),
                f = n("959479"),
                h = n("80687"),
                p = n("819068"),
                g = n("233102"),
                m = n("628480"),
                E = n("37207"),
                v = n("880584"),
                S = n("440899"),
                y = n("522019"),
                C = n("49111");
            let I = {
                [C.OverlayWidgets.TEXT](e) {
                    let {
                        dragging: t,
                        locked: n,
                        pinned: i,
                        dragStart: l
                    } = e;
                    return (0, a.jsx)(S.default, {
                        dragStart: l,
                        locked: n,
                        pinned: i,
                        dragging: t
                    })
                },
                [C.OverlayWidgets.GUILDS](e) {
                    let {
                        locked: t,
                        dragStart: n
                    } = e;
                    return (0, a.jsx)(g.default, {
                        dragStart: n,
                        locked: t
                    })
                },
                [C.OverlayWidgets.VOICE](e) {
                    let {
                        id: t,
                        anchor: n,
                        isPreviewingInGame: i,
                        locked: l,
                        pinned: s
                    } = e;
                    return (0, a.jsx)(y.default, {
                        anchor: n,
                        id: t,
                        locked: l,
                        pinned: s,
                        widget: C.OverlayWidgets.VOICE,
                        isPreviewingInGame: i
                    })
                },
                [C.OverlayWidgets.GUILDS_TEXT](e) {
                    let {
                        dragging: t,
                        locked: n,
                        dragStart: i
                    } = e;
                    return (0, a.jsx)(m.default, {
                        dragStart: i,
                        dragging: t,
                        locked: n,
                        pinned: !1
                    })
                },
                [C.OverlayWidgets.LOBBY_VOICE](e) {
                    let {
                        id: t,
                        anchor: n,
                        isPreviewingInGame: i,
                        locked: l,
                        pinned: s
                    } = e;
                    return (0, a.jsx)(E.default, {
                        anchor: n,
                        id: t,
                        locked: l,
                        pinned: s,
                        widget: C.OverlayWidgets.LOBBY_VOICE,
                        isPreviewingInGame: i
                    })
                }
            };
            class _ extends i.PureComponent {
                componentDidUpdate(e) {
                    this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (r.default.track(C.AnalyticEvents.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
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
                        zIndex: u,
                        size: d,
                        anchor: c
                    } = e, p = (0, h.getSizeFromLayoutSize)(d, n), g = (0, h.getAnchorCoordsFromLayoutSize)(c, n), {
                        minSize: m,
                        resizeX: E,
                        resizeY: S,
                        dragAnywhere: y
                    } = t, C = !i || s, I = (0, v.isWidgetContainerVisible)({
                        locked: i,
                        isPreviewingInGame: l,
                        pinned: o
                    }), _ = {
                        minX: 0,
                        minY: 0,
                        maxX: n.width,
                        maxY: n.height
                    };
                    return (0, a.jsx)(f.default, {
                        id: r,
                        size: p,
                        anchor: g,
                        container: _,
                        minSize: m,
                        hidden: !I,
                        resizeX: E,
                        resizeY: S,
                        style: {
                            zIndex: u
                        },
                        dragAnywhere: y,
                        active: C,
                        onUpdate: this.handleUpdate,
                        onClick: this.handleFocus,
                        onDragStart: this.handleDragStart,
                        onDragEnd: this.handleDragEnd,
                        children: this.renderWidget(e, g, p)
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
                            d = (0, h.getSizePercentageFromSize)(a, l);
                        (0, s.setTopWidget)(t), (0, s.setWidgetLayout)(t, o, d);
                        let c = e === f.Operations.MOVE,
                            g = (0, h.getFullCoordsFromAnchorCoords)(n, l.width, l.height, i.width, i.height);
                        this.setState({
                            lastLayoutUpdate: {
                                was_resized: null != r && r.was_resized || !c,
                                was_dragged: null != r && r.was_dragged || c,
                                widget_type: u.default.getWidgetType(t),
                                window_width: l.width,
                                window_height: l.height,
                                widget_width: i.width,
                                widget_height: i.height,
                                widget_left: g.left,
                                widget_top: g.top
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
            let T = l.default.connectStores([u.default, d.default], e => {
                let {
                    widgetId: t
                } = e, n = u.default.getWidget(t), a = d.default.getActiveRegions();
                return {
                    widget: n,
                    widgetConfig: null != n ? u.default.getWidgetConfig(n.type) : null,
                    locked: d.default.isInstanceUILocked(),
                    isPreviewingInGame: d.default.isPreviewingInGame(),
                    isActiveRegion: null != n && a.has(n.type)
                }
            })(_);

            function N(e, t) {
                return (0, a.jsx)(T, {
                    widgetId: e,
                    layoutSize: t
                }, e)
            }
            var A = l.default.connectStores([u.default, c.default], () => ({
                layout: u.default.getLayout(p.OVERLAY_LAYOUT_ID),
                layoutSize: c.default.windowSize(),
                renderWidget: N
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
            var a = n("37983"),
                i = n("884691"),
                l = n("90915"),
                s = n("851387"),
                r = n("987317"),
                o = n("73749"),
                u = n("838857"),
                d = n("393414"),
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
                    (0, u.isValidGuildId)(t) && (0, u.isValidChannelId)(n) ? (s.default.selectGuild(t), r.default.selectChannel({
                        guildId: t,
                        channelId: n,
                        messageId: a
                    })) : (0, d.replaceWith)(c.Routes.ME)
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
            var a = n("37983"),
                i = n("884691"),
                l = n("627445"),
                s = n.n(l),
                r = n("65597"),
                o = n("780166"),
                u = n("242260"),
                d = n("154891"),
                c = n("697218"),
                f = n("928454");

            function h(e) {
                let {
                    streamerId: t,
                    channelId: n
                } = e, l = i.useRef(null), o = (0, r.default)([c.default], () => c.default.getCurrentUser());
                return s(null != o, "user cannot be null"), (0, d.default)(l, o, t, n), (0, a.jsx)("canvas", {
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
                }), s = (0, r.default)([u.default], () => u.default.visibleOverlayCanvas);
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
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("762993"),
                s = n("570413"),
                r = n("350501"),
                o = n("42203"),
                u = n("18494"),
                d = n("360782"),
                c = n("846325"),
                f = n("739840");

            function h() {
                let [e, t] = (0, i.useStateFromStoresArray)([l.default], () => [l.default.enabled, l.default.keepOpen]), n = (0, i.useStateFromStores)([u.default], () => u.default.getVoiceChannelId()), h = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(n), [n]), p = null == h ? void 0 : h.getGuildId();
                return e && null != h ? (0, a.jsx)("div", {
                    className: f.widget,
                    children: (0, a.jsx)(r.default, {
                        width: c.SoundboardWheelSize.width,
                        height: c.SoundboardWheelSize.height,
                        guildId: p,
                        channel: h,
                        keepOpen: t,
                        onClose: function() {
                            let e = (0, d.default)();
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
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("446674"),
                d = n("77078"),
                c = n("272030"),
                f = n("295426"),
                h = n("819689"),
                p = n("539405"),
                g = n("352674"),
                m = n("125667"),
                E = n("767993"),
                v = n("738073"),
                S = n("685888"),
                y = n("533466"),
                C = n("710216"),
                I = n("348652"),
                _ = n("306588"),
                T = n("850391"),
                N = n("149022"),
                A = n("228800"),
                O = n("681060"),
                L = n("884351"),
                x = n("818950"),
                R = n("529805"),
                M = n("685841"),
                D = n("42203"),
                k = n("474643"),
                b = n("247013"),
                j = n("305961"),
                P = n("377253"),
                V = n("18494"),
                w = n("162771"),
                U = n("697218"),
                G = n("227602"),
                F = n("901165"),
                B = n("959479"),
                Y = n("62843"),
                W = n("560995"),
                H = n("659500"),
                z = n("718422"),
                K = n("13798"),
                X = n("117026"),
                J = n("880584"),
                Z = n("839878"),
                q = n("6791"),
                Q = n("49111"),
                $ = n("782340"),
                ee = n("126419");
            let et = q.OpacityBounds.TOP;
            class en extends i.Component {
                componentDidUpdate(e) {
                    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
                        focused: !0
                    })
                }
                componentWillUnmount() {
                    k.default.removeChangeListener(this.draftDidChange), H.ComponentDispatch.unsubscribe(Q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), H.ComponentDispatch.unsubscribe(Q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
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
                    } = this.state, u = (0, a.jsx)(d.Popout, {
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
                            return o(null != s, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(E.default, {
                                onClose: t,
                                ...s
                            })
                        },
                        children: () => (0, a.jsx)(O.default, {
                            ...n,
                            renderAttachButton: this.renderAttachButton,
                            channel: e,
                            type: T.ChatInputTypes.OVERLAY,
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
                        children: u
                    }, e.id) : (0, a.jsx)(_.default, {
                        channel: e,
                        children: u
                    }, e.id)
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.draftDidChange = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                            {
                                textValue: n
                            } = t.state,
                            a = k.default.getDraft(e.channel.id, k.DraftType.ChannelMessage);
                        n !== a && "" === a && t.setState((0, N.createState)(a))
                    }, this.handleTextareaKeyDown = e => {
                        if (e.which === Q.KeyboardKeys.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
                            e.preventDefault();
                            let {
                                channel: t
                            } = this.props, n = P.default.getLastEditableMessage(t.id);
                            null != n && h.default.startEditMessage(t.id, n.id, n.content)
                        }
                    }, this.handleTextareaChange = (e, t, n) => {
                        let {
                            channel: {
                                id: a
                            }
                        } = this.props;
                        f.default.changeDraft(a, this.state.textValue, k.DraftType.ChannelMessage), "" !== t ? g.default.startTyping(a) : g.default.stopTyping(a), this.setState({
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
                        }) : (0, z.applyChatRestrictions)({
                            openWarningPopout: e => this.setState({
                                contentWarningProps: e
                            }),
                            type: T.ChatInputTypes.OVERLAY,
                            content: t,
                            channel: n
                        }).then(e => {
                            let {
                                valid: l,
                                failureReason: s
                            } = e;
                            if (!l) return s === Q.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (H.ComponentDispatch.dispatch(Q.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }) : {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                            let r = h.default.getSendMessageOptionsForReply(a);
                            return (h.default.sendMessage(n.id, L.default.parse(n, t), !0, r), this.setState((0, N.createEmptyState)()), (0, R.deletePendingReply)(n.id), i) ? (p.default.deactivateAllRegions(), {
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
                    }, this.renderAttachButton = (e, t, n) => (0, a.jsx)(A.default, {
                        className: n,
                        channel: this.props.channel,
                        draftType: k.DraftType.ChannelMessage,
                        editorTextContent: this.state.textValue,
                        setValue: e => this.handleTextareaChange(null, e, (0, N.toRichValue)(e)),
                        canShowPremiumTutorial: e,
                        canOnlyUseTextCommands: t
                    }), k.default.addChangeListener(this.draftDidChange);
                    let n = k.default.getDraft(e.channel.id, k.DraftType.ChannelMessage);
                    this.state = {
                        ...(0, N.createState)(n),
                        focused: !1,
                        contentWarningProps: null
                    }, H.ComponentDispatch.subscribe(Q.ComponentActions.TEXTAREA_FOCUS, this.focusInput), H.ComponentDispatch.subscribe(Q.ComponentActions.TEXTAREA_BLUR, this.blurInput)
                }
            }
            class ea extends i.PureComponent {
                componentDidUpdate(e) {
                    let {
                        channel: t,
                        activated: n
                    } = this.props;
                    (0, J.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && p.default.track(Q.AnalyticEvents.OVERLAY_UNLOCKED, {
                        channel_id: t.id,
                        channel_type: t.type,
                        guild_id: t.guild_id
                    })
                }
                componentDidMount() {
                    (0, J.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
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
                        activated: u,
                        chatKeybind: d,
                        pinned: c,
                        isPreviewingInGame: f,
                        dragging: h,
                        pendingReply: p
                    } = this.props;
                    if (null == t) return null;
                    let g = o || f,
                        E = !l && null != t && t.isNSFW();
                    return e = E && null != r ? (0, a.jsx)(v.default, {
                        guild: r
                    }) : (0, a.jsx)(x.default, {
                        channel: t,
                        className: ee.messages,
                        forceCompact: c,
                        showNewMessagesBar: !g,
                        scrollerClassName: c ? ee.scroller : void 0,
                        showingSpamBanner: !1,
                        showingQuarantineBanner: !1
                    }, t.id), (0, a.jsx)(Y.MessagesInteractionContext.Provider, {
                        value: {
                            disableInteractions: c && o && !u,
                            disableAnimations: c && g && !u
                        },
                        children: (0, a.jsxs)(i.Fragment, {
                            children: [!o && !f && (0, a.jsx)(C.default, {
                                channel: t,
                                guild: r
                            }), (0, a.jsx)(W.default.Background, {
                                opacityOverride: o || f ? null : et,
                                children: (0, a.jsx)("div", {
                                    className: s(ee.messagesContainer, {
                                        [ee.isDragging]: h,
                                        [ee.disableHoverStates]: c && o && !u
                                    }),
                                    children: e
                                })
                            }), E ? null : (0, a.jsx)("div", {
                                children: !g || u ? (0, a.jsx)(W.default.Background, {
                                    opacityOverride: o || f ? null : et,
                                    children: (0, a.jsxs)("div", {
                                        className: ee.footerContent,
                                        children: [(0, a.jsx)(en, {
                                            channel: t,
                                            placeholder: n,
                                            isTemporarilyActive: u,
                                            pendingReply: p
                                        }), (0, a.jsx)("div", {
                                            className: ee.typingWrapper,
                                            children: (0, a.jsx)(m.default, {
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
                                                keybind: d,
                                                channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                                            }) : $.default.Messages.OVERLAY_USER_CHAT_HOTKEY.format({
                                                keybind: d
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
                    let u = t && !i || l,
                        d = (0, X.default)(r);
                    return (0, a.jsx)(W.default, {
                        className: s(d, {
                            [ee.widgetWrapper]: !n,
                            [ee.widgetWrapperPinned]: n,
                            [ee.locked]: n && u && !i,
                            [ee.inGame]: n && (u || i),
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
                        children: [(0, a.jsx)(Z.default, {
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
                        t(B.Operations.MOVE, e.clientX, e.clientY)
                    }, this.resizeDragStart = e => {
                        let {
                            dragStart: t
                        } = this.props;
                        t(B.Operations.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
                    }
                }
            }

            function ei(e) {
                let {
                    contained: t = !1,
                    ...n
                } = e, i = (0, u.useStateFromStores)([w.default], () => w.default.getGuildId()), l = (0, u.useStateFromStores)([V.default], () => V.default.getChannelId(i)), s = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(l)), r = (0, u.useStateFromStores)([G.default], () => G.default.getOverlayChatKeybind()), o = null != r ? (0, K.toString)(r.shortcut, !0) : "]", [d, c, f] = (0, u.useStateFromStoresArray)([F.default], () => [F.default.getTextWidgetOpacity(), F.default.getActiveRegions(), !t && F.default.isPreviewingInGame()]), h = (0, u.useStateFromStores)([j.default], () => j.default.getGuild(i)), p = (0, u.useStateFromStores)([b.default], () => null != i && b.default.didAgree(i)), g = null != s && s.isPrivate() ? s.getRecipientId() : null, m = (0, u.useStateFromStores)([M.default], () => null != l ? M.default.getPendingReply(l) : void 0), E = (0, u.useStateFromStores)([U.default], () => null != g ? U.default.getUser(g) : null), {
                    placeholder: v
                } = (0, S.default)(s);
                return null != s && null != h && Q.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type) ? (0, a.jsx)(y.default, {}) : (0, a.jsx)(ea, {
                    guild: h,
                    channel: s,
                    user: E,
                    opacity: d,
                    nsfwAgree: p,
                    chatKeybind: o,
                    activated: c.has(Q.OverlayActiveRegions.TEXT_WIDGET),
                    isPreviewingInGame: f,
                    pendingReply: m,
                    contained: t,
                    placeholder: v,
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
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("539405"),
                d = n("987317"),
                c = n("679653"),
                f = n("539938"),
                h = n("557809"),
                p = n("233069"),
                g = n("950104"),
                m = n("42203"),
                E = n("305961"),
                v = n("27618"),
                S = n("18494"),
                y = n("887657"),
                C = n("293137"),
                I = n("945330"),
                _ = n("673220"),
                T = n("960086"),
                N = n("519794"),
                A = n("393900"),
                O = n("560995"),
                L = n("423741"),
                x = n("782340"),
                R = n("972607");
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
                    let r = y.default,
                        u = !1;
                    return i ? l ? (e = x.default.Messages.LEAVE_CALL, r = C.default) : e = x.default.Messages.JOIN_CALL : s ? (e = x.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, t = o.Tooltip.Colors.RED, u = !0) : e = x.default.Messages.START_VOICE_CALL, (0, a.jsx)(f.default.Icon, {
                        icon: r,
                        tooltip: e,
                        onClick: this.handleClickCall,
                        tooltipColor: t,
                        disabled: u
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
                        onContextMenu: u,
                        isPreviewingInGame: d,
                        disableDragIndicator: c
                    } = this.props, {
                        showOpacitySlider: p
                    } = this.state;
                    return p && !n ? (0, a.jsxs)(O.default.Bar, {
                        className: R.opacityHeader,
                        children: [(0, a.jsx)(L.default, {}), (0, a.jsx)(f.default.Icon, {
                            icon: I.default,
                            onClick: this.handleCloseOpacitySettings,
                            tooltip: x.default.Messages.CLOSE
                        })]
                    }) : (0, a.jsx)(O.default.Background, {
                        opacityOverride: n || d ? null : 1,
                        children: (0, a.jsx)("div", {
                            className: s(e, t, R.headerContainer),
                            onMouseDown: o,
                            onContextMenu: u,
                            children: (0, a.jsxs)(f.default, {
                                guildId: i.guild_id,
                                channelId: i.id,
                                toolbar: this.renderWidgetButtons(),
                                transparent: !0,
                                children: [d || n || c ? null : (0, a.jsx)(_.default, {
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
                        if (a) n ? d.default.selectVoiceChannel(null) : u.default.callPrivateChannel(t.id, !1);
                        else {
                            let n = !a && !e.shiftKey;
                            u.default.callPrivateChannel(t.id, n)
                        }
                    }, this.handleOpenOpacitySettings = () => {
                        let {
                            pinned: e
                        } = this.props;
                        this.setState({
                            showOpacitySlider: !0
                        }), e && u.default.setPreviewInGameMode(!0)
                    }, this.handleCloseOpacitySettings = () => {
                        let {
                            pinned: e
                        } = this.props;
                        this.setState({
                            showOpacitySlider: !1
                        }), e && u.default.setPreviewInGameMode(!1)
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
                        } = this.props, l = n ? x.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : x.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
                        return e ? null : (0, a.jsxs)(i.Fragment, {
                            children: [this.renderCallButton(), n ? (0, a.jsx)(f.default.Icon, {
                                icon: T.default,
                                tooltip: x.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
                                onClick: this.handleOpenOpacitySettings
                            }) : null, (0, a.jsx)(f.default.Icon, {
                                icon: n ? A.default : N.default,
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
                } = e, i = (0, r.useStateFromStores)([S.default, m.default], () => {
                    let e = S.default.getVoiceChannelId();
                    return m.default.getChannel(e)
                }), l = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t.guild_id)), s = (0, r.useStateFromStores)([g.default], () => g.default.isCallActive(t.id)), o = (0, c.default)(t), u = (0, r.useStateFromStores)([v.default], () => !!t.isDM() && null != t.getRecipientId() && v.default.isBlocked(t.getRecipientId()));
                return (0, a.jsx)(M, {
                    channel: t,
                    channelName: o,
                    guild: l,
                    channelHasActiveCall: s,
                    userIsInChannelCall: null != i && i.id === t.id,
                    isBlocked: u,
                    ...n
                })
            }
        },
        423741: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                r = n("539405"),
                o = n("901165"),
                u = n("476765"),
                d = n("101698"),
                c = n("6791"),
                f = n("49111"),
                h = n("782340"),
                p = n("482096");
            let g = Object.values(c.OpacityBounds).map(e => 100 * e),
                m = (0, u.uid)();
            class E extends i.PureComponent {
                handleUpdateBackgroundOpacity(e) {
                    r.default.setTextWidgetOpacity((0, d.default)(e / 100)), r.default.track(f.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                        text_opacity_slider: e
                    })
                }
                handlePreviewBackgroundOpacity(e) {
                    r.default.setTextWidgetOpacity((0, d.default)(e / 100))
                }
                render() {
                    return (0, a.jsxs)("div", {
                        className: p.container,
                        children: [(0, a.jsx)(s.FormTitle, {
                            id: m,
                            tag: s.FormTitleTags.H5,
                            className: p.title,
                            children: h.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
                        }), (0, a.jsx)("div", {
                            className: p.sliderContainer,
                            children: (0, a.jsx)(s.Slider, {
                                mini: !0,
                                initialValue: this.initialValue,
                                defaultValue: this.initialValue,
                                minValue: g[0],
                                maxValue: g[g.length - 1],
                                handleSize: 10,
                                onValueChange: this.handleUpdateBackgroundOpacity,
                                asValueChanges: this.handlePreviewBackgroundOpacity,
                                markers: g,
                                onMarkerRender: f.NOOP,
                                equidistant: !0,
                                stickToMarkers: !0,
                                "aria-labelledby": m
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.initialValue = 100 * this.props.opacity
                }
            }
            var v = l.default.connectStores([o.default], () => ({
                opacity: o.default.getTextWidgetOpacity()
            }))(E)
        },
        522019: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceWidget: function() {
                    return eo
                },
                default: function() {
                    return eu
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("446674"),
                o = n("669491"),
                u = n("769846"),
                d = n("77078"),
                c = n("272030"),
                f = n("640583"),
                h = n("539405"),
                p = n("990766"),
                g = n("899633"),
                m = n("679653"),
                E = n("374014"),
                v = n("560367"),
                S = n("293383"),
                y = n("375202"),
                C = n("49040"),
                I = n("488464"),
                _ = n("998716"),
                T = n("331759"),
                N = n("857398"),
                A = n("373469"),
                O = n("271938"),
                L = n("42203"),
                x = n("546463"),
                R = n("42887"),
                M = n("568307"),
                D = n("18494"),
                k = n("280168"),
                b = n("703370"),
                j = n("316133"),
                P = n("901165"),
                V = n("145131"),
                w = n("953109"),
                U = n("673220"),
                G = n("474571"),
                F = n("519794"),
                B = n("368121"),
                Y = n("985622"),
                W = n("393900"),
                H = n("258078"),
                z = n("560995"),
                K = n("78574"),
                X = n("68148"),
                J = n("334572"),
                Z = n("158998"),
                q = n("819068"),
                Q = n("664980"),
                $ = n("880584"),
                ee = n("49111"),
                et = n("353927"),
                en = n("782340"),
                ea = n("506030");
            let ei = (e, t, n) => {
                    let a = t.isVoiceMuted();
                    return a || O.default.getId() !== t.userId ? !a && (a = n.isLocalMute(t.userId, e)) : a = !n.isEnabled() || n.isSelfMute(e) || n.isSelfMutedTemporarily(e), a
                },
                el = (e, t) => {
                    let n = t.isVoiceDeafened();
                    return !n && O.default.getId() === t.userId && (n = R.default.isSelfDeaf(e)), n
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
                        size: u,
                        speaking: d,
                        isPrioritySpeaker: c,
                        nick: f,
                        displayNameMode: h,
                        displayUserMode: p,
                        guildId: g
                    } = this.props;
                    return p === ee.OverlayDisplayUsers.ONLY_WHILE_SPEAKING && t && !d ? null : (0, a.jsx)(X.default, {
                        guildId: g,
                        onClick: t ? void 0 : this.handleClick,
                        onContextMenu: t ? void 0 : this.handleContextMenu,
                        className: s(ea.voiceUserWrapper, {
                            [ea.faded]: !d,
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
                        size: u,
                        priority: c,
                        deaf: n,
                        mute: i,
                        userNameClassName: s(ea.username, {
                            [ea.locked]: t,
                            [ea.hidden]: t && (h === ee.OverlayDisplayNames.NEVER || !d && h === ee.OverlayDisplayNames.ONLY_WHILE_SPEAKING)
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
                } = e, u = ei(t, l, R.default), d = (0, r.useStateFromStores)([A.default], () => A.default.getCurrentUserActiveStream()), c = (0, r.useStateFromStoresArray)([A.default], () => null != d ? A.default.getViewerIds(d) : []), f = (0, g.default)({
                    userId: n.id,
                    context: t
                }), h = (0, r.useStateFromStores)([k.default], () => k.default.isPrioritySpeaker(n.id, t)), p = (0, r.useStateFromStores)([O.default, R.default], () => el(t, l)), m = (0, r.useStateFromStores)([A.default], () => null != A.default.getStreamForUser(n.id, s)), E = i.useMemo(() => null != d && d.ownerId !== n.id && c.includes(n.id), [d, n.id, c]);
                return (0, a.jsx)(es, {
                    ...o,
                    muted: u,
                    context: t,
                    user: n,
                    speaking: f,
                    isPrioritySpeaker: h,
                    deafened: p,
                    streaming: m,
                    watching: E,
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
                        anchor: d,
                        avatarSizeMode: c
                    } = this.props, f = null != d.right, h = t.map(t => {
                        var s;
                        let {
                            user: u,
                            voiceState: d,
                            member: h
                        } = t;
                        return null == u || null == o || null == e ? null : (0, a.jsx)(er, {
                            guildId: null == o ? void 0 : o.guild_id,
                            user: u,
                            nick: null !== (s = null == h ? void 0 : h.nick) && void 0 !== s ? s : Z.default.getName(u),
                            channel: o,
                            flipped: f,
                            voiceState: d,
                            displayNameMode: n,
                            displayUserMode: i,
                            size: c,
                            locked: l || r,
                            onContextMenu: this.handleUserContextMenu,
                            onClick: this.handleUserContextMenu,
                            context: e
                        }, u.id)
                    });
                    return (0, a.jsx)(z.default.Body, {
                        className: s({
                            [u.default.VOICE_WIDGET_TOP_MARGIN]: l,
                            [ea.bottomMargin]: l
                        }),
                        children: (0, a.jsx)(X.VoiceUserList, {
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
                    return (0, a.jsxs)(z.default.Bar, {
                        className: s(ea.draggableStartArea, {
                            [ea.preview]: n
                        }),
                        children: [(0, a.jsxs)(z.default.Content, {
                            dynamicSize: !0,
                            className: s(ea.content, {
                                [ea.hidden]: n
                            }),
                            children: [(0, a.jsx)(U.default, {
                                color: o.default.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: s(ea.icon, ea.faded, ea.dragIcon)
                            }), (0, a.jsx)(B.default, {
                                color: o.default.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: s(ea.icon, ea.faded, ea.speakerIcon)
                            }), (0, a.jsx)(H.default, {
                                color: o.default.unsafe_rawColors.PRIMARY_200.css,
                                className: ea.title,
                                children: t
                            })]
                        }), n ? null : (0, a.jsx)(z.default.Icon, {
                            icon: G.default,
                            label: en.default.Messages.VOICE_SETTINGS,
                            onClick: this.handleOpenVoiceSettings,
                            tooltipPosition: "left",
                            size: 18
                        }), n ? null : (0, a.jsx)(z.default.Icon, {
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
                        streamApplication: u,
                        stream: c
                    } = this.props;
                    if (t || null == c || null == l) return null;
                    let {
                        sanitizedTitle: f,
                        title: h
                    } = (0, v.default)(o);
                    return (0, a.jsx)(z.default.Bar, {
                        className: s(ea.streamerControls, {
                            [ea.hidden]: i,
                            [ea.unpinned]: !n
                        }),
                        children: (0, a.jsxs)(z.default.Content, {
                            className: ea.streamerContent,
                            dynamicSize: !0,
                            children: [(0, a.jsxs)("div", {
                                className: ea.streamerInner,
                                children: [(null == u ? void 0 : u.id) != null && u.id === (null == r ? void 0 : r.id) ? (0, a.jsx)(w.default, {
                                    className: ea.gameIcon,
                                    game: r
                                }) : (0, a.jsx)(S.default, {
                                    title: f
                                }), (0, a.jsxs)(V.default, {
                                    direction: V.default.Direction.VERTICAL,
                                    justify: V.default.Justify.BETWEEN,
                                    className: ea.streamerInfo,
                                    children: [(0, a.jsx)(d.Text, {
                                        className: ea.streaming,
                                        variant: "text-sm/normal",
                                        children: en.default.Messages.STATUS_STREAMING
                                    }), (0, a.jsx)(K.default, {
                                        children: null !== (e = null == u ? void 0 : u.name) && void 0 !== e ? e : h
                                    })]
                                })]
                            }), (0, a.jsxs)(V.default, {
                                grow: 0,
                                children: [(0, a.jsx)("div", {
                                    className: ea.streamerIconWrapper,
                                    children: (0, a.jsx)(T.default, {
                                        stream: c,
                                        iconClassName: ea.streamerIcon,
                                        appContext: ee.AppContext.OVERLAY
                                    })
                                }), (0, a.jsx)("div", {
                                    className: ea.streamerIconWrapper,
                                    children: (0, a.jsx)(N.default, {
                                        stream: c,
                                        appContext: ee.AppContext.OVERLAY
                                    })
                                }), (0, a.jsx)("div", {
                                    className: ea.streamerIconWrapper,
                                    children: (0, a.jsx)(d.TooltipContainer, {
                                        text: en.default.Messages.STOP_STREAMING,
                                        children: (0, a.jsx)(d.Button, {
                                            onClick: this.handleStopStream,
                                            look: d.Button.Looks.BLANK,
                                            size: d.Button.Sizes.NONE,
                                            children: (0, a.jsx)(Y.default, {
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
                    return i && (o = ee.OverlayWidgetTypes.PINNED), l && (o = ee.OverlayWidgetTypes.IN_GAME_PREVIEW), n && (o = ee.OverlayWidgetTypes.IN_GAME), (0, a.jsxs)(z.default, {
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
                        (0, d.openModalLazy)(async () => {
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
                        null != e && p.stopStream((0, E.encodeStreamKey)(e))
                    }
                }
            }
            eo.defaultProps = {
                context: et.MediaEngineContextTypes.DEFAULT
            };

            function eu(e) {
                var t;
                let n = (0, r.useStateFromStores)([D.default, L.default], () => L.default.getChannel(D.default.getVoiceChannelId())),
                    i = (0, m.default)(n),
                    l = function(e) {
                        let [t] = (0, r.useStateFromStores)([j.default, I.default], () => null == e ? [
                            [], -1
                        ] : e.isGuildStageVoice() ? [I.default.getMutableParticipants(e.id, _.StageChannelParticipantNamedIndex.SPEAKER), I.default.getParticipantsVersion(e.id)] : [j.default.getVoiceStatesForChannel(e), j.default.getVoiceStateVersion(e.getGuildId())], [e], J.isVersionEqual);
                        return t
                    }(n),
                    s = (0, r.useStateFromStores)([A.default], () => A.default.getStreamerActiveStreamMetadata()),
                    o = (0, r.useStateFromStoresObject)([M.default, b.default, A.default, P.default, x.default], () => {
                        let e = (0, y.default)(M.default, b.default),
                            t = A.default.getCurrentUserActiveStream();
                        return {
                            displayUserMode: P.default.getDisplayUserMode(),
                            displayNameMode: P.default.getDisplayNameMode(),
                            avatarSizeMode: P.default.getAvatarSizeMode(),
                            application: null != e ? x.default.getGameByGameData(e) : null,
                            streamApplication: (null == s ? void 0 : s.pid) === (0, q.getPID)() ? (0, C.default)(e) : null,
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
                    return j
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("301165"),
                s = n("446674"),
                r = n("77078"),
                o = n("575136"),
                u = n("534222"),
                d = n("120817"),
                c = n("637667"),
                f = n("934743"),
                h = n("393027"),
                p = n("870691"),
                g = n("816092"),
                m = n("162805"),
                E = n("245997"),
                v = n("923959"),
                S = n("952451"),
                y = n("305961"),
                C = n("957255"),
                I = n("18494"),
                _ = n("282109"),
                T = n("316133"),
                N = n("474571"),
                A = n("560995"),
                O = n("637842"),
                L = n("758547"),
                x = n("49111"),
                R = n("695838"),
                M = n("782340"),
                D = n("718394");
            let k = 54;
            class b extends i.PureComponent {
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
                    } = m.default.getGuildDimensions(e);
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
                        } = m.default.getGuildDimensions(n);
                        this.setAnimatedValue(null != e ? e : 0)
                    }
                }
                renderSettings(e) {
                    let {
                        closePopout: t
                    } = e;
                    return (0, a.jsx)(O.default, {
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
                    (e >= k && a || e < k && !a) && (a = !a), (e >= 78 && !t || e < 78 && t) && (t = !t), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
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
                    } = this.state, u = n.id === R.FAVORITES_RAW_GUILD_ID ? d.FavoritesChannelList : d.GuildChannelList;
                    return (0, a.jsxs)(L.default, {
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
                                children: e => (0, a.jsx)(A.default.Icon, {
                                    icon: N.default,
                                    label: M.default.Messages.SETTINGS,
                                    ...e
                                })
                            })
                        }),
                        children: [(0, a.jsx)("div", {
                            className: D.channelList,
                            children: (0, a.jsx)(u, {
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

            function j(e) {
                var t;
                let {
                    guildId: n
                } = e, i = (0, s.useStateFromStores)([y.default], () => y.default.getGuild(n)), l = (0, s.useStateFromStores)([v.default], () => v.default.getChannels(n)), r = (0, s.useStateFromStores)([E.default], () => E.default.getCategories(n)), {
                    mutedChannels: d,
                    collapseMuted: c
                } = (0, s.useStateFromStoresObject)([_.default], () => ({
                    mutedChannels: _.default.getMutedChannels(n),
                    collapseMuted: _.default.isGuildCollapsed(n)
                })), f = (0, s.useStateFromStores)([T.default], () => T.default.getVoiceStates(n)), N = (0, s.useStateFromStores)([g.default], () => g.default.getCollapsed()), {
                    scrollTo: A
                } = (0, s.useStateFromStores)([m.default], () => m.default.getGuildDimensions(n)), O = (0, h.default)(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }), L = (0, s.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()), R = (0, s.useStateFromStores)([C.default], () => C.default.getGuildVersion(n)), M = (0, s.useStateFromStores)([p.default], () => p.default.version), D = (0, s.useStateFromStores)([S.default], () => S.default.getGuildChangeSentinel(n)), k = (0, o.useEmbeddedAppsByChannel)(null == i ? void 0 : i.id), j = (0, u.useActiveEventsByChannel)(null == i ? void 0 : i.id), P = null !== (t = null == i ? void 0 : i.hasFeature(x.GuildFeatures.COMMUNITY)) && void 0 !== t && t;
                return (0, a.jsx)(b, {
                    guildId: n,
                    guild: i,
                    channels: l,
                    categories: r,
                    mutedChannels: d,
                    scrollToChannel: A,
                    selectedChannelId: O,
                    selectedVoiceChannelId: L,
                    voiceStates: f,
                    collapsedChannels: N,
                    collapseMuted: c,
                    guildReadStateSentinel: D,
                    permissionVersion: R,
                    categoryCollapseVersion: M,
                    embeddedAppsByChannel: k,
                    activeEventsByChannel: j,
                    showNewUnreadsBar: P,
                    optInEnabled: !1
                })
            }
        },
        637842: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a, i, l = n("37983"),
                s = n("884691"),
                r = n("446674"),
                o = n("77078"),
                u = n("539405"),
                d = n("227602"),
                c = n("901165"),
                f = n("145131"),
                h = n("314892"),
                p = n("13798"),
                g = n("49111"),
                m = n("782340"),
                E = n("406638"),
                v = n("926622");
            (a = i || (i = {})).GENERAL = "GENERAL", a.VOICE = "VOICE";
            let S = () => [{
                    value: g.OverlayAvatarSizes.LARGE,
                    name: m.default.Messages.AVATAR_SIZE_OPTION_LARGE
                }, {
                    value: g.OverlayAvatarSizes.SMALL,
                    name: m.default.Messages.AVATAR_SIZE_OPTION_SMALL
                }],
                y = () => [{
                    value: g.OverlayDisplayNames.ALWAYS,
                    name: m.default.Messages.DISPLAY_OPTION_ALWAYS
                }, {
                    value: g.OverlayDisplayNames.ONLY_WHILE_SPEAKING,
                    name: m.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
                }, {
                    value: g.OverlayDisplayNames.NEVER,
                    name: m.default.Messages.DISPLAY_OPTION_NEVER
                }],
                C = () => [{
                    value: g.OverlayDisplayUsers.ALWAYS,
                    name: m.default.Messages.DISPLAY_OPTION_ALWAYS
                }, {
                    value: g.OverlayDisplayUsers.ONLY_WHILE_SPEAKING,
                    name: m.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
                }];

            function I() {
                let e = c.default.getNotificationPositionMode(),
                    t = e !== g.OverlayNotificationPositions.DISABLED,
                    n = d.default.getOverlayKeybind(),
                    a = d.default.getOverlayChatKeybind();
                u.default.track(g.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
                    enabled: !0,
                    notifications_enabled: t,
                    notifications_position: t ? e : null,
                    text_notifications_mode: c.default.getTextChatNotificationMode(),
                    text_opacity_slider: c.default.getTextWidgetOpacity(),
                    hotkey: null != n ? (0, p.toString)(n.shortcut) : null,
                    text_activation_hotkey: null != a ? (0, p.toString)(a.shortcut) : null
                })
            }
            class _ extends s.PureComponent {
                componentDidMount() {
                    u.default.track(g.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                        settings_type: "overlay",
                        destination_pane: "OVERLAY SETTINGS",
                        origin_pane: null
                    })
                }
                handleChangeNotificationPositionMode(e, t) {
                    u.default.setNotificationPositionMode(t), I()
                }
                handleChangeAvatarSizeMode(e) {
                    let {
                        value: t
                    } = e;
                    u.default.setAvatarSizeMode(t)
                }
                handleChangeDisplayNameMode(e) {
                    let {
                        value: t
                    } = e;
                    u.default.setDisplayNameMode(t)
                }
                handleChangeDisplayUserMode(e) {
                    let {
                        value: t
                    } = e;
                    u.default.setDisplayUserMode(t)
                }
                renderHeader() {
                    return (0, l.jsxs)(f.default, {
                        direction: f.default.Direction.VERTICAL,
                        grow: 0,
                        shrink: 0,
                        className: E.header,
                        children: [(0, l.jsxs)(f.default, {
                            children: [(0, l.jsx)(o.FormTitle, {
                                className: E.headerTitle,
                                tag: "h1",
                                children: m.default.Messages.OVERLAY_SETTINGS_TITLE
                            }), (0, l.jsx)(o.ModalCloseButton, {
                                className: E.headerClose,
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
                        className: E.tabBar,
                        onItemSelect: this.handleSelectSection,
                        children: [(0, l.jsx)(o.TabBar.Item, {
                            id: i.GENERAL,
                            className: E.tabBarItem,
                            children: m.default.Messages.OVERLAY_SETTINGS_GENERAL_TAB
                        }), (0, l.jsx)(o.TabBar.Item, {
                            id: i.VOICE,
                            className: E.tabBarItem,
                            children: m.default.Messages.OVERLAY_SETTINGS_VOICE_TAB
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
                        className: E.content,
                        children: e
                    }, t)
                }
                renderGeneralSettings() {
                    let {
                        textChatNotificationMode: e,
                        notificationPositionMode: t
                    } = this.props, n = t !== g.OverlayNotificationPositions.DISABLED;
                    return (0, l.jsxs)(s.Fragment, {
                        children: [(0, l.jsx)(o.FormItem, {
                            title: m.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                            className: v.marginBottom20,
                            children: (0, l.jsx)(h.default, {
                                position: t,
                                onChange: this.handleChangeNotificationPositionMode
                            })
                        }), (0, l.jsx)(o.FormSwitch, {
                            value: n && e === g.OverlayNotificationTextChatTypes.ENABLED,
                            onChange: this.handleToggleTextChatNotifications,
                            disabled: !n,
                            hideBorder: !0,
                            children: m.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
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
                            title: m.default.Messages.FORM_LABEL_AVATAR_SIZE,
                            className: v.marginBottom20,
                            children: (0, l.jsx)(o.RadioGroup, {
                                onChange: this.handleChangeAvatarSizeMode,
                                options: S(),
                                value: e,
                                size: o.RadioGroup.Sizes.SMALL
                            })
                        }), (0, l.jsx)(o.FormItem, {
                            title: m.default.Messages.FORM_LABEL_DISPLAY_NAMES,
                            className: v.marginBottom20,
                            children: (0, l.jsx)(o.RadioGroup, {
                                onChange: this.handleChangeDisplayNameMode,
                                options: y(),
                                value: t,
                                size: o.RadioGroup.Sizes.SMALL
                            })
                        }), (0, l.jsx)(o.FormItem, {
                            title: m.default.Messages.FORM_LABEL_DISPLAY_USERS,
                            className: v.marginBottom20,
                            children: (0, l.jsx)(o.RadioGroup, {
                                onChange: this.handleChangeDisplayUserMode,
                                options: C(),
                                value: n,
                                size: o.RadioGroup.Sizes.SMALL
                            })
                        })]
                    })
                }
                render() {
                    return (0, l.jsxs)(o.ModalRoot, {
                        "aria-label": m.default.Messages.OVERLAY_SETTINGS_TITLE,
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
                        } = g.OverlayNotificationTextChatTypes, n = this.props.textChatNotificationMode === e ? t : e;
                        u.default.setTextChatNotificationMode(n), I()
                    }
                }
            }
            var T = r.default.connectStores([c.default], () => ({
                avatarSizeMode: c.default.getAvatarSizeMode(),
                displayNameMode: c.default.getDisplayNameMode(),
                displayUserMode: c.default.getDisplayUserMode(),
                notificationPositionMode: c.default.getNotificationPositionMode(),
                textChatNotificationMode: c.default.getTextChatNotificationMode()
            }))(_)
        },
        890291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("631316"),
                r = n("934743"),
                o = n("104589"),
                u = n("393027"),
                d = n("901165"),
                c = n("819068"),
                f = n("49111"),
                h = n("782340"),
                p = n("572889");
            let g = () => (0, o.show)("DM_SEARCH");
            var m = i.memo(function() {
                let e = (0, l.useStateFromStores)([d.default], () => d.default.isUILocked((0, c.getPID)()) ? "true" : "false"),
                    t = (0, u.default)(e => {
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
                            onClick: g,
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
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("77078"),
                r = n("474571"),
                o = n("560995"),
                u = n("49111"),
                d = n("782340"),
                c = n("121162"),
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
                                renderPopout: null != h ? h : u.NOOP,
                                autoInvert: !1,
                                children: e => (0, a.jsx)(o.default.Icon, {
                                    ...e,
                                    icon: r.default,
                                    label: d.default.Messages.SETTINGS
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
            var a = n("37983");
            n("884691");
            var i = n("65597"),
                l = n("880731");

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
            var a = n("884691"),
                i = n("65597"),
                l = n("526887"),
                s = n("880731");

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
                            u = n(o);
                        e(a, i, u, (null !== (s = null == l ? void 0 : l.count) && void 0 !== s ? s : o.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        194704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return o
                }
            });
            var a = n("801340"),
                i = n("913144"),
                l = n("872173"),
                s = n("599110"),
                r = n("49111");
            async function o(e, t) {
                await (0, l.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = a.Timestamp.fromDate(new Date), !0), l.UserSettingsDelay.INFREQUENT_USER_ACTION), i.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), s.default.track(r.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
                })
            }
        },
        762993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
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
        786770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return X
                }
            });
            var a, i, l, s, r = n("627445"),
                o = n.n(r),
                u = n("748820"),
                d = n("446674"),
                c = n("913144"),
                f = n("539405"),
                h = n("415635"),
                p = n("387129"),
                g = n("981253"),
                m = n("931237"),
                E = n("37359"),
                v = n("364864"),
                S = n("523505"),
                y = n("47271"),
                C = n("386045"),
                I = n("969416"),
                _ = n("271938"),
                T = n("42203"),
                N = n("385649"),
                A = n("824563"),
                O = n("18494"),
                L = n("101125"),
                x = n("102985"),
                R = n("697218"),
                M = n("189857"),
                D = n("901165"),
                k = n("189771"),
                b = n("686069"),
                j = n("703370"),
                P = n("49111"),
                V = n("6791"),
                w = n("782340");
            (a = l || (l = {}))[a.GENERIC = 0] = "GENERIC", a[a.TEXT = 1] = "TEXT", a[a.INCOMING_CALL = 2] = "INCOMING_CALL", (i = s || (s = {}))[i.NORMAL = 0] = "NORMAL", i[i.HIGH = 1] = "HIGH", i[i.URGENT = 2] = "URGENT";
            let U = Object.freeze({
                    priority: s.NORMAL,
                    duration: 5e3,
                    expirationExternallyManaged: !1,
                    type: l.GENERIC
                }),
                G = [],
                F = (e, t, n) => {
                    let a = t ? P.OverlayNotificationStatus.TIMED_OUT : P.OverlayNotificationStatus.DISMISSED;
                    return setTimeout(() => f.default.updateNotificationStatus(e, a), null != n ? n : 5e3)
                };

            function B(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.OverlayNotificationStatus.DISMISSED;
                if (null == e) return !1;
                let n = G.findIndex(t => t.id === e);
                if (-1 === n) return !1;
                let a = G[n];
                clearTimeout(a.timerId), G = [...G], t === P.OverlayNotificationStatus.DISMISSED ? G.splice(n, 1) : G[n] = {
                    ...a,
                    status: t
                }
            }

            function Y(e) {
                let t = G.length;
                return (G = G.filter(t => t.type !== l.TEXT || t.channelId !== e || !1)).length !== t
            }

            function W(e) {
                let t = G.find(t => t.type === l.INCOMING_CALL && t.channelId === e);
                return null != t ? t.id : null
            }

            function H(e, t) {
                let n = {
                    ...U,
                    ...t
                };
                if (n.priority !== s.URGENT && !D.default.isInstanceFocused()) return null;
                let a = (0, u.v4)(),
                    i = {
                        id: a,
                        status: P.OverlayNotificationStatus.ACTIVE,
                        timerId: F(a, n.expirationExternallyManaged, n.duration),
                        props: e,
                        ...n
                    };
                G = [...G];
                let l = G.findIndex(e => e.priority <= n.priority);
                if (-1 === l ? G.push(i) : G.splice(l, 0, i), G.length > 10) {
                    let e = G.pop();
                    clearTimeout(e.timerId)
                }
                return a
            }

            function z(e) {
                let {
                    channelId: t,
                    ringing: n
                } = e, a = W(t), i = n.includes(_.default.getId());
                if (!i) return B(a);
                if (null != a) return !1;
                let r = T.default.getChannel(t);
                if (null == r || !r.isPrivate() || L.default.getStatus() === P.StatusTypes.DND) return !1;
                let o = G.find(e => e.type === l.TEXT && e.channelId === t && e.messageType === P.MessageTypes.CALL);
                null != o && B(o.id), H((0, m.default)(r), {
                    priority: s.HIGH,
                    expirationExternallyManaged: !0,
                    type: l.INCOMING_CALL,
                    channelId: r.id
                })
            }
            class K extends d.default.Store {
                initialize() {
                    this.waitFor(T.default, R.default)
                }
                getNotifications() {
                    return G
                }
            }
            K.displayName = "OverlayNotificationsStore";
            var X = new K(c.default, __OVERLAY__ ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
                    let {
                        notificationId: t,
                        status: n
                    } = e;
                    B(t, n)
                },
                OVERLAY_MOUNTED: function(e) {
                    let {
                        nudge: t
                    } = e, n = function(e) {
                        switch (e.type) {
                            case V.OverlayNudgeTypes.BROADCAST:
                                return (0, y.default)(e);
                            case V.OverlayNudgeTypes.GO_LIVE_VOICE:
                            case V.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
                                return (0, g.default)(e);
                            case V.OverlayNudgeTypes.NEWS:
                            default:
                                return (0, S.default)(e)
                        }
                    }(t);
                    null != n && H(n, {
                        priority: s.URGENT,
                        duration: 8e3
                    })
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t
                    } = e;
                    if (t) return !1;
                    G = G.map(e => e.status === P.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
                        ...e,
                        timerId: F(e.id, e.expirationExternallyManaged)
                    }) : e)
                },
                MESSAGE_CREATE: function(e) {
                    var t, n, a;
                    let {
                        channelId: i,
                        message: r
                    } = e, u = T.default.getChannel(i), d = R.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
                    if (null == u || null == d) return !1;
                    if ((null === (n = r.activity) || void 0 === n ? void 0 : n.type) === P.ActivityActionTypes.JOIN || (null === (a = r.activity) || void 0 === a ? void 0 : a.type) === P.ActivityActionTypes.JOIN_REQUEST) {
                        if (!(0, k.shouldNotify)(r, i, !0, !0)) return !1;
                        let e = function(e, t, n) {
                            let a, i;
                            if (o(null != t.activity, "received null message activity"), n.id === _.default.getId()) return !1;
                            let l = j.default.getGame();
                            if (null == l) return !1;
                            switch (t.activity.type) {
                                case P.ActivityActionTypes.JOIN:
                                    if (null == (a = A.default.getApplicationActivity(n.id, l.id)) || null == a.party || a.party.id !== t.activity.party_id) return !1;
                                    i = (0, h.default)(e, t, n, l, a);
                                    break;
                                case P.ActivityActionTypes.JOIN_REQUEST:
                                    if (null == (a = L.default.getApplicationActivity(l.id)) || null == a.party || a.party.id !== t.activity.party_id) return !1;
                                    i = (0, E.default)(e, n, l, a)
                            }
                            if (null == i) return !1;
                            let r = H(i, {
                                priority: s.URGENT,
                                expirationExternallyManaged: !0,
                                channelId: e.id
                            });
                            return null != r && F(r, !1, 3e4), !0
                        }(u, r, d);
                        if (!1 !== e) return e
                    }
                    if ((!D.default.isInstanceUILocked() || D.default.isPinned(P.OverlayWidgets.TEXT)) && i === O.default.getChannelId() || D.default.getTextChatNotificationMode() === P.OverlayNotificationTextChatTypes.DISABLED || x.default.disableNotifications || !(0, k.shouldNotify)(r, i)) return !1;
                    let c = !N.default.isSoundDisabled(M.MESSAGE_SOUND);
                    H((0, v.default)(u, r, d, c), {
                        type: l.TEXT,
                        channelId: u.id,
                        messageType: r.type
                    })
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && Y(t)
                },
                MESSAGE_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return Y(t)
                },
                CALL_CREATE: z,
                CALL_UPDATE: z,
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    B(W(t))
                },
                ACTIVITY_USER_ACTION: function(e) {
                    let t, {
                            actionType: n,
                            user: a,
                            applicationId: i
                        } = e,
                        r = j.default.getGame();
                    if (null == r || r.id !== i) return !1;
                    if (n === P.ActivityActionTypes.JOIN) t = (0, p.default)(a, r);
                    if (null == t) return !1;
                    H(t, {
                        priority: s.URGENT,
                        type: l.GENERIC
                    })
                },
                CLIPS_SAVE_CLIP_START: function() {
                    H((0, I.createClipsNotification)(w.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
                },
                CLIPS_SAVE_CLIP: function() {
                    H((0, I.createClipsNotification)(w.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
                        duration: (0, b.getSecondsSliderLabel)(C.default.getSettings().clipsLength / 1e3, !0)
                    })))
                },
                CLIPS_SAVE_CLIP_ERROR: function() {
                    H((0, I.createClipsNotification)(w.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
                },
                STREAM_START: function(e) {
                    let t = (0, I.createClipsReminderNotification)();
                    null != t && H(t)
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
            var a = n("446674"),
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

            function u(e) {
                let {
                    lobbyId: t
                } = e;
                delete s[t]
            }
            class d extends a.default.Store {
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
            d.displayName = "OverlayRTCConnectionStore";
            var c = new d(i.default, {
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
                LOBBY_DELETE: u,
                LOBBY_DISCONNECT: u
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
            var s, r, o = n("866227"),
                u = n.n(o),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                h = n("21121"),
                p = n("934306"),
                g = n("288518"),
                m = n("486503"),
                E = n("233069"),
                v = n("42203"),
                S = n("305961"),
                y = n("660478"),
                C = n("282109"),
                I = n("697218"),
                _ = n("299039"),
                T = n("724210");
            (s = r || (r = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let N = new c.default(e => {
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

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let a = null !== (n = null !== (t = y.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        i = e.isMessageRequestTimestamp;
                    if (null != i) {
                        let e = u(i).valueOf(),
                            t = _.default.fromTimestamp(e);
                        return _.default.compare(a, t) > 0 ? a : t
                    }
                    return a
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: C.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
                    isRequest: g.default.isMessageRequest(e.id) || m.default.isSpam(e.id)
                }
            }

            function O() {
                N.clear(), Object.values(v.default.getMutablePrivateChannels()).forEach(e => {
                    N.set(e.id, A(e))
                }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && C.default.getAddedToMessages().forEach(e => {
                    let t = v.default.getChannel(e);
                    null != t && (0, E.isGuildTextChannelType)(t.type) && N.set(t.id, A(t))
                })
            }

            function L() {
                let e = v.default.getMutablePrivateChannels();
                for (let t in e) N.set(t, A(e[t]))
            }
            let x = (a = [], i = [], l = [], () => {
                let e = N.values(r.FAVORITE),
                    t = N.values(r.DEFAULT);
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
            class R extends d.default.Store {
                initialize() {
                    this.waitFor(v.default, S.default, I.default, g.default, C.default), this.syncWith([C.default, g.default], O)
                }
                getPrivateChannelIds() {
                    return x()
                }
                getSortedChannels() {
                    return [N.values(r.FAVORITE), N.values(r.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return N.values().forEach(t => {
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
                CONNECTION_OPEN: O,
                CONNECTION_OPEN_SUPPLEMENTAL: O,
                OVERLAY_INITIALIZE: O,
                CACHE_LOADED: L,
                CACHE_LOADED_LAZY: L,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, E.isPrivate)(e.type) || N.has(e.id)) && N.set(e.id, A(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, E.isPrivate)(t.type) || t.id === T.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    N.set(t.id, A(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return N.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!N.has(t)) return !1;
                    let a = v.default.getChannel(t);
                    return null != a && N.set(t, A(a, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return N.delete(t)
                }
            })
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
            var a = n("866227"),
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