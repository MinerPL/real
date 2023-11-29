(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67581"], {
        575351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                u = n("884691"),
                r = n("446674"),
                i = n("77078"),
                a = n("679653"),
                d = n("929278"),
                o = n("347895"),
                s = n("848848"),
                c = n("735251"),
                E = n("534222"),
                f = n("592407"),
                _ = n("610730"),
                N = n("271938"),
                h = n("305961"),
                S = n("957255"),
                T = n("49111"),
                m = n("782340"),
                C = n("413075"),
                v = e => {
                    let {
                        channel: t,
                        onClose: n,
                        onConfirm: v,
                        transitionState: g
                    } = e, D = (0, a.default)(t, !0), I = t.id, R = t.isForumPost(), A = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.getGuildId())), M = (0, E.useGuildChannelScheduledEvents)(I), {
                        isSubscriptionGated: L
                    } = (0, s.default)(t.id), y = (0, c.default)(A, t), [O, p] = u.useState(null), G = (0, r.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), U = (0, r.useStateFromStores)([S.default], () => S.default.can(t.isThread() ? T.Permissions.MANAGE_THREADS : T.Permissions.MANAGE_CHANNELS, t), [t]), w = (0, r.useStateFromStores)([_.default], () => {
                        var e;
                        return null !== (e = _.default.getCount(t.id)) && void 0 !== e ? e : 0
                    }, [t.id]), H = R && (U || G && w < 1), F = M.length > 0 && (t.type === T.ChannelTypes.GUILD_VOICE || t.type === T.ChannelTypes.GUILD_STAGE_VOICE);
                    if (u.useEffect(() => {
                            (async () => {
                                let e = await (0, d.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), I);
                                if (!e) {
                                    p("default");
                                    return
                                }
                                let n = await (0, o.getBlockForChannelDeletion)(t.getGuildId(), I);
                                if (!1 !== n) {
                                    p(n);
                                    return
                                }
                            })()
                        }, [t, I]), null != O) {
                        let e;
                        let t = m.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === O ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === O ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : m.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: C.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            null != A && (f.default.open(A.id, T.GuildSettingsSections.ONBOARDING), null == n || n())
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    children: m.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == A) return null;
                    if (A.hasFeature(T.GuildFeatures.COMMUNITY) && (A.rulesChannelId === I || A.publicUpdatesChannelId === I)) {
                        let e = A.rulesChannelId === I,
                            t = e ? m.default.Messages.DELETE_RULES_CHANNEL_BODY : m.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: C.modalText,
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: C.modalText,
                                    children: m.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            f.default.open(A.id, T.GuildSettingsSections.COMMUNITY), null == n || n()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    children: m.default.Messages.OKAY
                                })
                            })]
                        })
                    } {
                        let {
                            deleteText: e,
                            deleteBody: u
                        } = (() => {
                            if (t.type === T.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: m.default.Messages.DELETE_CATEGORY,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: D
                                })
                            };
                            if (t.isForumPost()) return {
                                deleteText: H ? m.default.Messages.DELETE_FORUM_POST : m.default.Messages.DELETE_MESSAGE,
                                deleteBody: H && G && !U ? m.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: D
                                }) : H ? m.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: D
                                }) : m.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (t.isThread()) return {
                                deleteText: m.default.Messages.DELETE_THREAD,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: D
                                })
                            };
                            else if (L && y > 0) return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: D,
                                    numGuildRoleSubscriptionMembers: y
                                })
                            };
                            return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: D
                                })
                            }
                        })();
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": e,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: C.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: u
                                }), F ? (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: C.warningText,
                                    children: m.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: M.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(i.ModalFooter, {
                                children: [(0, l.jsx)(i.Button, {
                                    onClick: v,
                                    color: i.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: m.default.Messages.CANCEL
                                })]
                            })]
                        })
                    }
                }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                r = n("446674"),
                i = n("913144"),
                a = n("398604"),
                d = n("813006"),
                o = n("730647");
            let s = !1,
                c = {},
                E = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new d.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: o.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class N extends r.default.Store {
                isFetching() {
                    return s
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
            }
            N.displayName = "EventDirectoryStore";
            var h = new N(i.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    s = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    s = !1;
                    let l = u.sortBy([...n], [function(e) {
                            return (0, a.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        r = u.map(l, _);
                    c[t] = r
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    s = !1
                }
            })
        },
        929278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isDefaultChannelThresholdMetAfterDelete: function() {
                    return f
                },
                checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
                    return N
                }
            }), n("222007");
            var l = n("316693"),
                u = n("404118"),
                r = n("592407"),
                i = n("305961"),
                a = n("685829"),
                d = n("863636"),
                o = n("380710"),
                s = n("653138"),
                c = n("49111"),
                E = n("782340");
            async function f(e, t) {
                return null == e || await _(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function _(e, t, n) {
                var l;
                let u = i.default.getGuild(e);
                if (null == u) return !0;
                let r = null != u && (null === (l = u.features) || void 0 === l ? void 0 : l.has(c.GuildFeatures.GUILD_ONBOARDING));
                if (!r) return !0;
                r && d.default.shouldFetchPrompts(e) && await (0, a.fetchOnboardingPrompts)(e);
                let E = d.default.getDefaultChannelIds(e),
                    [f, _] = (0, o.getChattableDefaultChannels)(e, E),
                    N = E.includes(t);
                if (!N) return !0;
                let h = n.removingView && _.length - 1 < s.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    S = (n.removingChat || n.removingView) && f.length - 1 < s.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !h && !S
            }
            async function N(e, t, n) {
                let i = e.getGuildId();
                if (null == i) return !0;
                null != n && (t = l.default.filter(t, l.default.invert(n)));
                let a = e.permissionOverwrites[i],
                    d = null != a ? l.default.filter(a.deny, l.default.invert(a.allow)) : l.default.deserialize(0),
                    o = {
                        removingView: l.default.has(t, c.Permissions.VIEW_CHANNEL) && !l.default.has(d, c.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                if (e.isForumLikeChannel() ? o.removingChat = l.default.has(t, c.Permissions.SEND_MESSAGES_IN_THREADS) && !l.default.has(d, c.Permissions.SEND_MESSAGES_IN_THREADS) : o.removingChat = l.default.has(t, c.Permissions.SEND_MESSAGES) && !l.default.has(d, c.Permissions.SEND_MESSAGES), !o.removingChat && !o.removingView) return !0;
                let s = await _(i, e.id, o);
                return !!s || (u.default.show({
                    title: E.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: E.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            u.default.close(), r.default.open(i, c.GuildSettingsSections.ONBOARDING)
                        }
                    })
                }), !1)
            }
        },
        347895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildHomeSettings: function() {
                    return h
                },
                fetchNewMemberActions: function() {
                    return S
                },
                selectHomeResourceChannel: function() {
                    return T
                },
                selectNewMemberActionChannel: function() {
                    return m
                },
                completeNewMemberAction: function() {
                    return C
                },
                getBlockForChannelDeletion: function() {
                    return v
                }
            }), n("808653");
            var l = n("872717"),
                u = n("913144"),
                r = n("819689"),
                i = n("115718"),
                a = n("38654"),
                d = n("144491"),
                o = n("42203"),
                s = n("599110"),
                c = n("698882"),
                E = n("129092"),
                f = n("675305"),
                _ = n("290886"),
                N = n("49111");
            let h = async e => {
                u.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.default.get({
                            url: N.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        n = (0, E.settingsFromServer)(t.body);
                    return u.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: n
                    }), n
                } catch (t) {
                    u.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, S = async e => {
                if (!a.default.isFullServerPreview(e)) {
                    u.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await l.default.get({
                                url: N.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            n = (0, E.actionsFromServer)(t.body);
                        return u.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: n
                        }), n
                    } catch (t) {
                        u.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, T = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (u.default.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: t
                    }), null == t) return;
                let l = o.default.getChannel(t),
                    E = c.default.getResourceForChannel(e, t);
                null != e && !a.default.isFullServerPreview(e) && null != l && null != E && s.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, d.transitionToChannel)(t), r.default.jumpToMessage({
                    channelId: t,
                    messageId: t,
                    flash: !1,
                    jumpType: i.JumpTypes.INSTANT
                })
            }, m = (e, t) => {
                u.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let n = o.default.getChannel(t),
                    l = c.default.getActionForChannel(e, t);
                null != e && !a.default.isFullServerPreview(e) && null != n && null != l && s.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: l.actionType
                }), (0, d.transitionToChannel)(t)
            }, C = (e, t) => {
                if (u.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), a.default.isFullServerPreview(e)) return;
                let n = o.default.getChannel(t),
                    r = c.default.getActionForChannel(e, t);
                if (null != n && null != r) {
                    var i, d;
                    let t = Object.keys(null !== (i = f.default.getCompletedActions(e)) && void 0 !== i ? i : {}),
                        l = null !== (d = c.default.getNewMemberActions(e)) && void 0 !== d ? d : [];
                    s.default.track(N.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: r.actionType,
                        has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                l.default.post({
                    url: N.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function v(e, t) {
                if (null == e) return !1;
                let n = (0, _.canSeeOnboardingHome)(e);
                if (!n) return !1;
                let l = c.default.getSettings(e);
                return l === c.NO_SETTINGS && (await h(e), l = c.default.getSettings(e)), l !== c.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
            }
        },
        129092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return o
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return s
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return c
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return N
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return h
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return S
                },
                NewMemberActionTypes: function() {
                    return u
                },
                newMemberActionFromServer: function() {
                    return T
                },
                resourceChannelFromServer: function() {
                    return m
                },
                settingsFromServer: function() {
                    return C
                },
                settingsToServer: function() {
                    return v
                },
                actionsFromServer: function() {
                    return g
                },
                isWelcomeMessageEmpty: function() {
                    return D
                },
                isSettingsEmpty: function() {
                    return I
                },
                isSettingsValid: function() {
                    return R
                },
                isChannelValidForResourceChannel: function() {
                    return A
                },
                isChannelValidForNewMemberAction: function() {
                    return M
                }
            });
            var l, u, r = n("42203"),
                i = n("449008"),
                a = n("991170"),
                d = n("49111");
            let o = 7,
                s = 300,
                c = 7,
                E = 60,
                f = 5,
                _ = 1,
                N = 30,
                h = 200,
                S = 7;

            function T(e) {
                var t;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function m(e) {
                var t, n;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (t = e.description) && void 0 !== t ? t : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function C(e) {
                if (null == e) return null;
                let {
                    welcome_message: t,
                    new_member_actions: n,
                    resource_channels: l,
                    enabled: u
                } = e, a = {
                    authorIds: t.author_ids,
                    message: t.message
                }, d = n.filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channel_id))).map(T), o = l.filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channel_id))).map(m);
                return {
                    welcomeMessage: a,
                    newMemberActions: d,
                    resourceChannels: o,
                    enabled: u
                }
            }

            function v(e, t) {
                var n, l;
                if (null == t) return null;
                let {
                    welcomeMessage: u,
                    newMemberActions: a,
                    resourceChannels: d,
                    enabled: o
                } = t, s = {
                    author_ids: null !== (n = null == u ? void 0 : u.authorIds) && void 0 !== n ? n : [],
                    message: null !== (l = null == u ? void 0 : u.message) && void 0 !== l ? l : ""
                }, c = (null != a ? a : []).filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, r, i, a;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (i = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== i ? i : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                }), E = (null != d ? d : []).filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, r, i, a;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (i = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== i ? i : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: s,
                    new_member_actions: c,
                    resource_channels: E,
                    enabled: o
                }
            }(l = u || (u = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let g = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function D(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function I(e) {
                return null == e || !!D(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function R(e) {
                var t, n;
                return null != e && (!!I(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < o) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function A(e) {
                return e.type === d.ChannelTypes.GUILD_TEXT && !a.default.canEveryoneRole(d.Permissions.SEND_MESSAGES, e) && a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e)
            }

            function M(e) {
                switch (e.type) {
                    case d.ChannelTypes.GUILD_TEXT:
                    case d.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case d.ChannelTypes.GUILD_FORUM:
                    case d.ChannelTypes.GUILD_MEDIA:
                        return a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        675305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("446674"),
                u = n("913144");
            let r = {},
                i = {},
                a = new Set;
            class d extends l.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : i[e]
                }
                hasCompletedActionForChannel(e, t) {
                    let n = this.getCompletedActions(e);
                    return null != n && null != n[t]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: i[e],
                        loading: a.has(e)
                    }
                }
            }
            d.displayName = "GuildOnboardingMemberActionStore";
            var o = new d(u.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    a.add(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: t,
                        guildId: n
                    } = e;
                    if (null == t) {
                        i[n] = r;
                        return
                    }
                    i[n] = t, a.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    a.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == i[t]) return !1;
                    delete i[t]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    i = {
                        ...i,
                        [t]: {
                            ...i[t],
                            [n]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == i[t.id]) return !1;
                    delete i[t.id]
                }
            })
        },
        848848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelRoleSubscriptionStatus: function() {
                    return s
                }
            });
            var l = n("446674"),
                u = n("203288"),
                r = n("42203"),
                i = n("957255"),
                a = n("49111");
            let d = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function o(e) {
                return (0, l.useStateFromStoresObject)([r.default, u.default, i.default], () => s(e, r.default, u.default, i.default), [e])
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    o = t.getChannel(e);
                if (null == o ? void 0 : o.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == o || !n.isChannelGated(o.guild_id, o.id)) return d;
                let s = o.isGuildVocal() ? !l.can(a.Permissions.CONNECT, o) : !l.can(a.Permissions.VIEW_CHANNEL, o);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                u = n("446674"),
                r = n("895026"),
                i = n("36402");
            let a = {};

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, u.useStateFromStores)([i.default], () => i.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = a[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (a[e] = Date.now(), r.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        735251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("884691"),
                u = n("316693"),
                r = n("828674"),
                i = n("866595"),
                a = n("795228"),
                d = n("49111");

            function o(e, t) {
                let n = (0, a.default)(null == e ? void 0 : e.id);
                return l.useMemo(() => {
                    let l = null != e ? function(e, t) {
                            let n = new Set;
                            for (let l of Object.keys(t.permissionOverwrites)) {
                                let u = e.roles[l],
                                    a = t.permissionOverwrites[l];
                                (0, r.isSubscriptionRole)(u) && (0, i.isChannelAccessGrantedBy)(t, a) && n.add(u)
                            }
                            let l = e.getRole(e.id),
                                a = null != l && !u.default.has(l.permissions, d.Permissions.VIEW_CHANNEL),
                                o = (0, i.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (a && !o)
                                for (let t of Object.values(e.roles))(0, r.isSubscriptionRole)(t) && (0, i.isAllChannelsRole)(t) && n.add(t);
                            return [...n]
                        }(e, t) : [],
                        a = 0;
                    for (let e of l) {
                        let t = e.id;
                        if (null != t) {
                            let e = null == n ? void 0 : n[t];
                            null != e && (a += e)
                        }
                    }
                    return a
                }, [n, e, t])
            }
        },
        757767: function(e, t, n) {
            "use strict";
            var l, u;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (u = l || (l = {}))[u.NONE = 0] = "NONE", u[u.WEEKLY = 1] = "WEEKLY", u[u.MONTHLY = 2] = "MONTHLY", u[u.YEARLY = 3] = "YEARLY", u[u.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return a
                }
            });
            var l = n("866227"),
                u = n.n(l),
                r = n("249654"),
                i = n("745049");

            function a(e, t, n, l) {
                let a = u(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    o = {
                        start: d - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (a.isBetween(o.start, o.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(o.start, o.end),
                            r = e.isBetween(u(d).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || r && !l ? void 0 : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let s = r.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : s) + i.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    E = a.isBetween(s, c);
                if (E && null == t && !l) return i.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                u = n("913144"),
                r = n("271938"),
                i = n("398604"),
                a = n("49129"),
                d = n("745049");
            let o = {},
                s = {};

            function c(e) {
                let t = {
                    ...o
                };
                delete t[e], o = t;
                let n = {
                    ...s
                };
                delete n[e], s = n
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        o = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, s = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return o[e]
                }
                getAllEventDismissals() {
                    return o
                }
                getUpcomingNoticeSeenTime(e) {
                    return s[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return s
                }
                getState() {
                    return {
                        upcomingEventDismissals: o,
                        upcomingEventSeenTimestamps: s
                    }
                }
            }
            E.displayName = "UpcomingEventNoticesStore", E.persistKey = "UpcomingEventNotices";
            var f = new E(u.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...o
                    };
                    n[t] = Date.now(), o = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === d.GuildScheduledEventStatus.CANCELED || t.status === d.GuildScheduledEventStatus.COMPLETED) && c(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    c(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = r.default.getId();
                    if (t !== l) return;
                    let u = i.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = o[n];
                    if (null != c) return;
                    let E = s[n],
                        f = (0, a.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
                    if (f === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...o
                        };
                        e[n] = Date.now(), o = e
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    let {
                        guildEventId: t
                    } = e, n = {
                        ...s
                    };
                    n[t] = Date.now(), s = n
                }
            })
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getEventException: function() {
                    return i
                }
            });
            var l = n("446674"),
                u = n("398604");

            function r(e, t) {
                let n = (0, l.useStateFromStoresArray)([u.default], () => {
                    var e, n;
                    return null !== (n = null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return a(n, e)
            }

            function i(e, t) {
                var n, l;
                let r = null !== (l = null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return a(r, e)
            }

            function a(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getEventSchedule: function() {
                    return s
                }
            });
            var l = n("627445"),
                u = n.n(l),
                r = n("446674"),
                i = n("398604"),
                a = n("397680"),
                d = n("822516");

            function o(e, t, n) {
                var l;
                let o = null !== (l = (0, r.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                u(null != o, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(o);
                let s = (0, a.default)(t, e);
                return c(o, s, t)
            }

            function s(e, t) {
                let n = (0, a.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, d.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: u,
                        endDate: r
                    } = (0, d.getScheduleForRecurrenceWithException)(l, t);
                return {
                    startTime: u.toDate(),
                    endTime: null == r ? void 0 : r.toDate()
                }
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                },
                useActiveEvent: function() {
                    return C
                },
                useActiveEventsByChannel: function() {
                    return v
                },
                useGuildUpcomingEventsNotice: function() {
                    return g
                },
                useGuildActiveEvent: function() {
                    return D
                },
                useGuildChannelScheduledEvents: function() {
                    return I
                },
                useFirstActiveEventChannel: function() {
                    return R
                },
                useImminentUpcomingGuildEvents: function() {
                    return A
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                r = n("962199"),
                i = n("42203"),
                a = n("923959"),
                d = n("305961"),
                o = n("957255"),
                s = n("449008"),
                c = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                N = n("822516"),
                h = n("745049"),
                S = n("49111");
            let T = [];

            function m(e, t) {
                return (0, u.useStateFromStoresArray)([d.default, r.default, c.default, o.default, i.default, a.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return T;
                    let l = n.hasFeature(S.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = a.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = r.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : r.default.getCachedGuildScheduledEventById(t)
                        }).filter(s.isNotNullish)
                    }
                    let f = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = i.default.getChannel(t);
                        return o.default.can(S.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([c.default, i.default, o.default], () => {
                    let t = i.default.getChannel(e);
                    if (!o.default.can(S.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function v(e) {
                let t = (0, u.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function g(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, i.default, o.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === h.GuildScheduledEventEntityTypes.NONE || e.status !== h.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = i.default.getChannel(e.channel_id);
                            return o.default.can(S.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    r = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, N.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != d)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = r[t.id],
                            i = a[t.id],
                            o = null !== (n = d[t.id]) && void 0 !== n && n,
                            s = (0, E.getNextShownUpcomingEventNoticeType)(t, u, i, o);
                        if (null != s) return {
                            upcomingEvent: t,
                            noticeType: s
                        }
                    }
            }

            function D(e) {
                return (0, u.useStateFromStores)([c.default, i.default, o.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === h.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = i.default.getChannel(e.channel_id);
                        return o.default.can(S.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function I(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function R(e) {
                return (0, u.useStateFromStores)([i.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = i.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return i.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function A(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let r = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    i = l.useMemo(() => r.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, N.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== h.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [r]);
                return i
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return s
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return c
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return E
                },
                getInitialEventStartDate: function() {
                    return h
                },
                getEventTimeData: function() {
                    return m
                },
                getBaseScheduleForRecurrence: function() {
                    return v
                },
                getScheduleForRecurrenceWithException: function() {
                    return g
                },
                getScheduleFromEventData: function() {
                    return D
                },
                areDatesIdentical: function() {
                    return I
                },
                areSchedulesIdentical: function() {
                    return R
                },
                getRRule: function() {
                    return A
                },
                generateNextRecurrences: function() {
                    return M
                },
                getNextRecurrenceIdInEvent: function() {
                    return L
                },
                isValidRecurrence: function() {
                    return y
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return p
                },
                recurrenceRuleToOption: function() {
                    return G
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                u = n("866227"),
                r = n.n(u),
                i = n("614137"),
                a = n("249654"),
                d = n("718517"),
                o = n("757767");
            n("745049");
            let s = 365,
                c = s + 1,
                E = 4,
                f = [i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday],
                _ = [i.RRule.SU.weekday, i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday],
                N = [i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday, i.RRule.SA.weekday],
                h = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                S = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                T = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? S(e, t) : e.calendar(t)
                };

            function m(e, t, n) {
                null == n && (n = r());
                let l = r(e),
                    u = null != t && "" !== t ? r(t) : void 0,
                    i = null != t && l.isSame(u, "day");
                return {
                    startDateTimeString: T(l, n),
                    endDateTimeString: null != u ? i ? u.format("LT") : S(u, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= r().add(1, "hour"),
                    withinStartWindow: l <= r().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function C(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function v(e, t) {
                let n = function(e) {
                        return C(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    l = r(a.default.extractTimestamp(e)),
                    u = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: l,
                    endDate: u
                }
            }

            function g(e, t) {
                var n;
                if (null == t) return e;
                let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
                    endDate: null != l ? r(l) : void 0
                }
            }

            function D(e) {
                return C(e.scheduledStartTime, e.scheduledEndTime)
            }

            function I(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function R(e, t) {
                return null == e || null == t ? null == e && null == t : I(e.startDate, t.startDate) && I(e.endDate, t.endDate)
            }

            function A(e) {
                let t = new Date(e.start);
                return t.setMilliseconds(0), new i.RRule({
                    dtstart: t,
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function M(e, t, n) {
                let l = [],
                    u = null == n,
                    r = null != n ? n : new Date,
                    i = new Date;
                i.setFullYear(i.getFullYear() + E);
                let a = u ? e + 1 : e;
                for (let e = 0; e < a && r < i; e++) {
                    let n = t.after(r);
                    if (null == n) break;
                    r = new Date(n), (!u || e > 0) && l.push(n)
                }
                return l
            }

            function L(e) {
                var t;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? a.default.fromTimestamp(Math.floor(n.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND) : null
            }

            function y(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    l = a.default.extractTimestamp(t),
                    u = new Date(l);
                if (n.getUTCHours() !== u.getUTCHours() || n.getUTCMinutes() !== u.getUTCMinutes() || n.getUTCSeconds() !== u.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case i.RRule.WEEKLY:
                        return n.getUTCDay() === u.getUTCDate();
                    case i.RRule.YEARLY:
                        return n.getUTCDay() === u.getUTCDay();
                    default:
                        return !0
                }
            }

            function O(e) {
                let t = new i.Weekday(e.toDate().getDay()),
                    n = new i.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? N : n.weekday - t.weekday < 0 ? _ : f
            }

            function p(e, t) {
                let n = function(e, t) {
                    let n = O(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case o.RecurrenceOptions.NONE:
                            return null;
                        case o.RecurrenceOptions.WEEKLY:
                            return new i.RRule({
                                dtstart: l,
                                freq: i.RRule.WEEKLY
                            });
                        case o.RecurrenceOptions.YEARLY:
                            return new i.RRule({
                                dtstart: l,
                                freq: i.RRule.YEARLY
                            });
                        case o.RecurrenceOptions.WEEKDAY_ONLY:
                            return new i.RRule({
                                dtstart: l,
                                freq: i.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: u,
                    freq: r,
                    interval: a,
                    byweekday: d,
                    bymonth: s,
                    bymonthday: c,
                    byyearday: E,
                    count: f
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == u ? void 0 : u.toISOString(),
                    frequency: r,
                    interval: a,
                    byWeekday: null != d ? new Set(d) : null,
                    byMonth: null != s ? new Set(s) : null,
                    byMonthDay: null != c ? new Set(c) : null,
                    byYearDay: null != E ? new Set(E) : null,
                    count: f
                }
            }

            function G(e, t) {
                if (null == t) return o.RecurrenceOptions.NONE;
                let n = A(t);
                switch (n.options.freq) {
                    case i.RRule.WEEKLY:
                        return o.RecurrenceOptions.WEEKLY;
                    case i.RRule.YEARLY:
                        return o.RecurrenceOptions.YEARLY;
                    case i.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, O(e))) return o.RecurrenceOptions.NONE;
                        return o.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return o.RecurrenceOptions.NONE
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return f
                }
            });
            var l = n("693566"),
                u = n.n(l),
                r = n("872717"),
                i = n("913144"),
                a = n("851387"),
                d = n("36402"),
                o = n("49111");
            async function s(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await r.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                d.default.shouldFetch(e) && await s(e)
            }
            let E = new u({
                maxAge: 1e4
            });

            function f(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == E.get(l)) {
                    var u, i;
                    return E.set(l, !0), u = e, i = t, r.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(u, i)
                    }).then(e => (a.default.requestMembersById(u, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("913144");
            let r = {},
                i = {};
            class a extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? r[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            a.displayName = "GuildRoleMemberCountStore";
            var d = new a(u.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    r[t] = n, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, u = r[t];
                    if (null == u) return !1;
                    u[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, u = r[t];
                    if (null == u || null == u[n]) return !1;
                    let i = Object.keys(l).length;
                    u[n] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = r[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = r[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == r[t] && (r[t] = {}), r[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete r[t.id], delete i[t.id]
                }
            })
        }
    }
]);