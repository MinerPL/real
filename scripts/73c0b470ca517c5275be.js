(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99636"], {
        838446: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("901582");

            function l(e, t) {
                return function(a) {
                    return (0, n.jsx)(i.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, n.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        158534: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("685665");

            function l(e, t) {
                return function(a) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, n.jsx)(l, {
                        children: (0, n.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        846883: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return w
                }
            }), a("222007"), a("424973");
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                l = a("77078"),
                d = a("260365"),
                u = a("823411"),
                s = a("997289"),
                o = a("685665"),
                r = a("442939"),
                c = a("662285"),
                f = a("782911"),
                I = a("629414"),
                p = a("53887"),
                _ = a("486150"),
                A = a("555759"),
                T = a("271938"),
                y = a("42203"),
                E = a("525065"),
                S = a("305961"),
                v = a("957255"),
                N = a("824563"),
                M = a("27618"),
                h = a("18494"),
                m = a("101125"),
                C = a("697218"),
                g = a("800762"),
                O = a("953998"),
                b = a("387111"),
                j = a("550766"),
                G = a("191225"),
                L = a("706508"),
                x = a("612696"),
                U = a("871388"),
                V = a("152311"),
                R = a("407908"),
                F = a("698372"),
                D = a("141962"),
                Y = a("954016"),
                P = a("49111"),
                J = a("450484"),
                k = a("782340");

            function w(e, t) {
                let {
                    analyticsLocations: w
                } = (0, o.default)(), H = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), X = (0, i.useStateFromStores)([G.default], () => G.default.getSelfEmbeddedActivities()), B = (0, i.useStateFromStoresArray)([m.default], () => m.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), K = (0, i.useStateFromStoresArray)([N.default], () => null != t ? N.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), z = (0, i.useStateFromStoresArray)([G.default], () => {
                    let a = (null == e ? void 0 : e.id) != null ? G.default.getEmbeddedActivitiesForChannel(e.id) : G.NO_ACTIVITIES;
                    return null != t ? a.filter(e => {
                        let {
                            connections: a
                        } = e;
                        return a.has(t.id)
                    }) : a
                }, [t, e]), Q = (0, F.default)(), q = (0, i.useStateFromStores)([v.default], () => null == e || e.isPrivate() || v.default.can(P.Permissions.SEND_MESSAGES, e), [e]), W = (0, i.useStateFromStoresArray)([O.default], () => [...K.map(e => null != e.application_id && O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...z.map(e => O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [K, z]), Z = (0, r.default)([...K.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...z.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, i.useStateFromStoresArray)([y.default, S.default, E.default, M.default, h.default, g.default, v.default], () => [...K.map(e => (0, x.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: (0, V.default)(e),
                    ChannelStore: y.default,
                    GuildStore: S.default,
                    GuildMemberCountStore: E.default,
                    RelationshipStore: M.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: g.default,
                    PermissionStore: v.default
                })), ...z.map(e => (0, x.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: !0,
                    ChannelStore: y.default,
                    GuildStore: S.default,
                    GuildMemberCountStore: E.default,
                    RelationshipStore: M.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: g.default,
                    PermissionStore: v.default
                }))], [K, Z, $, H, z, t]), et = (0, i.useStateFromStoresArray)([c.default, T.default], () => K.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, T.default, t, e) : void 0), [t, K]), ea = (0, s.useAnalyticsContext)();
                if (!q) return null;
                let en = (a, n) => {
                        null != e ? d.default.sendActivityInvite({
                            type: a,
                            channelId: e.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: a,
                            userId: t.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ei = (i, d) => {
                        let u = y.default.getChannel(i),
                            s = null == u ? void 0 : S.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return j.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("310688").then(a.bind(a, "310688"));
                                return a => (0, n.jsx)(t, {
                                    ...a,
                                    guild: s,
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return j.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var a;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: h.default.getVoiceChannelId(),
                            messageId: null,
                            intent: Y.ActivityIntent.PLAY,
                            embedded: (0, U.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, R.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                            locationObject: ea.location,
                            analyticsLocations: w
                        })
                    }, ed = async t => {
                        await (0, L.default)({
                            activity: t,
                            currentEmbeddedApplication: Q,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: ea.location,
                            embeddedActivitiesManager: D.default,
                            analyticsLocations: w
                        })
                    }, eu = [];
                return null == X || X.forEach(a => {
                    let i = (null == t ? void 0 : t.id) != null && a.connections.has(null == t ? void 0 : t.id),
                        d = v.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != a.activity_id && !i && d && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: a.name,
                        action: () => {
                            ei(a.channelId, a.application_id)
                        }
                    }, "self-embedded-".concat(a.application_id)))
                }), B.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, U.default)(e, P.ActivityFlags.JOIN) ? eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, U.default)(e, P.ActivityFlags.SYNC) && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, n.jsx)(l.MenuSeparator, {})), K.forEach((a, i) => {
                    if (a.type === P.ActivityTypes.PLAYING && (0, U.default)(a, P.ActivityFlags.JOIN) && null != a.session_id && null != a.application_id) {
                        if (ee[i]) {
                            let e = W[i];
                            eu.push((0, n.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? k.default.Messages.USER_ACTIVITY_JOINING : k.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, n.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: a.name,
                                action: () => el(a)
                            }, i))
                        } else eu.push((0, n.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: a.name,
                            action: () => en(P.ActivityActionTypes.JOIN_REQUEST, a)
                        }, i))
                    } else if (a.type === P.ActivityTypes.LISTENING && (0, U.default)(a, P.ActivityFlags.SYNC) && null != et[i]) {
                        let d = et[i],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            T = o || r || c;
                        eu.push((0, n.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(a.session_id),
                            action: () => (0, A.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(a.session_id)), (0, n.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(a.session_id),
                            action: () => (0, _.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: T ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: T
                        }, "spotify-sync-".concat(a.session_id)))
                    }
                }), z.forEach((e, t) => {
                    var a;
                    let i = e.connections.has(null !== (a = null == H ? void 0 : H.id) && void 0 !== a ? a : ""),
                        d = t + K.length,
                        u = W[d] || i,
                        s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    i ? s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : W[d] && (s = k.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: W[d] ? (0, n.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => ed(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), eu
            }
        },
        493015: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("77078"),
                l = a("450911"),
                d = a("272030"),
                u = a("838446"),
                s = a("158534"),
                o = a("846883"),
                r = a("812204"),
                c = a("861370"),
                f = a("972701"),
                I = a("390008"),
                p = a("271938"),
                _ = a("136207"),
                A = a("44141"),
                T = a("531674"),
                y = a("49111"),
                E = a("782340"),
                S = (0, s.default)((0, u.default)(function(e) {
                    let {
                        channel: t,
                        selected: u,
                        onSelect: s
                    } = e, r = t.isOwner(p.default.getId()), y = (0, A.default)(t), S = (0, T.default)(t), v = (0, _.default)(t, u), N = (0, c.default)({
                        id: t.id,
                        label: E.default.Messages.COPY_ID_CHANNEL
                    }), M = (0, o.default)(t), h = (0, f.default)(t), m = (0, I.default)(t);
                    return null == t || t.isManaged() ? null : (0, n.jsxs)(i.Menu, {
                        navId: "gdm-context",
                        "aria-label": E.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onClose: d.closeContextMenu,
                        onSelect: s,
                        children: [(0, n.jsx)(i.MenuGroup, {
                            children: y
                        }), (0, n.jsxs)(i.MenuGroup, {
                            children: [h, m]
                        }), (0, n.jsxs)(i.MenuGroup, {
                            children: [r ? (0, n.jsx)(i.MenuItem, {
                                id: "instant-invites",
                                label: E.default.Messages.INSTANT_INVITES,
                                action: () => (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("84279").then(a.bind(a, "84279"));
                                    return a => (0, n.jsx)(e, {
                                        channelId: t.id,
                                        ...a
                                    })
                                })
                            }) : null, (0, n.jsx)(i.MenuControlItem, {
                                id: "change-icon",
                                showDefaultFocus: !0,
                                control: (e, a) => (0, n.jsx)(i.MenuImageUploadControl, {
                                    onChange: a => {
                                        var n;
                                        l.default.setIcon(t.id, a), null === (n = e.onClose) || void 0 === n || n.call(e)
                                    },
                                    multiple: !1,
                                    "aria-label": E.default.Messages.CHANGE_ICON,
                                    ...e,
                                    ref: a
                                }),
                                label: E.default.Messages.CHANGE_ICON
                            }), null != t.icon ? (0, n.jsx)(i.MenuItem, {
                                id: "remove-icon",
                                label: E.default.Messages.REMOVE_ICON,
                                action: () => l.default.setIcon(t.id, null)
                            }) : null]
                        }), (0, n.jsx)(i.MenuGroup, {
                            children: M
                        }), (0, n.jsx)(i.MenuGroup, {
                            children: S
                        }), (0, n.jsx)(i.MenuGroup, {
                            children: v
                        }), (0, n.jsx)(i.MenuGroup, {
                            children: N
                        })]
                    })
                }, {
                    object: y.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])
        },
        136207: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983"),
                i = a("884691"),
                l = a("77078"),
                d = a("450911"),
                u = a("254167"),
                s = a("679653"),
                o = a("782340");

            function r(e, t) {
                let a = (0, s.default)(e),
                    r = i.useCallback(() => {
                        let i = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: a
                            }),
                            s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: a
                            });
                        e.isManaged() && (i = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: a
                        }), s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: a
                        }));
                        let r = function(a) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            d.default.closePrivateChannel(e.id, t, n)
                        };
                        (0, l.openModal)(e => (0, n.jsx)(u.default, {
                            header: i,
                            body: s,
                            onSubmit: r,
                            ...e
                        }))
                    }, [e, a, t]);
                return (0, n.jsx)(l.MenuItem, {
                    id: "leave-channel",
                    label: o.default.Messages.LEAVE_GROUP_DM,
                    action: r,
                    color: "danger"
                })
            }
        },
        44141: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                l = a("77078"),
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
                        a = (0, i.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
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
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (n.has(e)) {
                                        for (let t in i[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : a
                }(e);
                return (0, n.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: p.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, d.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        972701: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                l = a("77078"),
                d = a("923959"),
                u = a("379881"),
                s = a("200008"),
                o = a("498139"),
                r = a("49111"),
                c = a("782340");

            function f(e, t) {
                return e.type === r.ChannelTypes.GROUP_DM ? t ? c.default.Messages.UNFAVORITE_GDM : c.default.Messages.FAVORITE_GDM : e.type === r.ChannelTypes.DM ? t ? c.default.Messages.UNFAVORITE_DM : c.default.Messages.FAVORITE_DM : t ? c.default.Messages.UNFAVORITE_CHANNEL : c.default.Messages.FAVORITE_CHANNEL
            }

            function I(e) {
                var t;
                let a = (0, i.useStateFromStores)([u.default], () => u.default.isFavorite(e.id)),
                    c = function(e) {
                        let t = (0, i.useStateFromStores)([d.default], () => d.default.getChannels(r.FAVORITES))[r.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: a
                            } = (0, o.useFavoritesServerExperiment)("58e21a_1");
                        if (!a) return null;

                        function u(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, n.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null)
                        }) : (0, n.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null),
                            children: t.map(e => (0, n.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => u(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let I = (t = e, (0, n.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : a ? I : c
            }
        },
        390008: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                l = a("77078"),
                d = a("162771"),
                u = a("49111"),
                s = a("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, n.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("353228").then(a.bind(a, "353228"));
                            return a => (0, n.jsx)(t, {
                                ...a,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        }
    }
]);