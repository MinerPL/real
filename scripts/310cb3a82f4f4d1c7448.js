(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15763"], {
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("759843"),
                i = n("627929"),
                a = n("913144"),
                s = n("81732"),
                u = n("282109"),
                r = n("840707"),
                d = n("519705"),
                o = n("49111"),
                c = n("397336"),
                f = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: f,
                            permissionOverwrites: E = [],
                            bitrate: h,
                            userLimit: _,
                            parentId: C,
                            skuId: g,
                            branchId: S
                        } = e;
                        a.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let p = {
                            type: n,
                            name: f,
                            permission_overwrites: E
                        };
                        if (null != h && h !== o.BITRATE_DEFAULT && (p.bitrate = h), null != _ && _ > 0 && (p.user_limit = _), null != C && (p.parent_id = C), n === o.ChannelTypes.GUILD_STORE) {
                            if (null == g) throw Error("Unexpected missing SKU");
                            p.sku_id = g, p.branch_id = S
                        }
                        return r.default.post({
                            url: o.Endpoints.GUILD_CHANNELS(t),
                            body: p,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, i.exact)({
                                        is_private: E.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (u.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), s.default.checkGuildTemplateDirty(t), e), e => {
                            throw a.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, a) => r.default.post({
                        url: o.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, i.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("866227"),
                i = n.n(l),
                a = n("819855"),
                s = n("913144"),
                u = n("679428"),
                r = n("282109"),
                d = n("34676"),
                o = n("397336"),
                c = n("782340"),
                f = {
                    open(e) {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let l = (0, d.getCurrentGuildSettings)(e);
                        u.default.saveUserGuildSettings(e, t), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, d.trackGuildNotificationSettingsUpdate)(e, t, l, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let l = Object.keys(t.channel_overrides),
                            i = (0, d.getCurrentGuildSettings)(e),
                            a = (0, d.getManyCurrentChannelSettings)(e, l);
                        u.default.saveUserGuildSettings(e, t), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, d.trackGuildNotificationSettingsUpdate)(e, t, i, n), Object.keys(t.channel_overrides).forEach(l => {
                            let i = a.get(l);
                            (0, d.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], i, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            l = (0, d.getManyCurrentGuildSettings)(n);
                        u.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, i] = e, a = l.get(n);
                            s.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: i
                            }), (0, d.trackGuildNotificationSettingsUpdate)(n, i, a, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, l) {
                        let i = (0, d.getCurrentChannelSettings)(e, t);
                        u.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), a.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, d.trackChannelNotificationSettingsUpdate)(e, t, n, i, l)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let l = Object.keys(t),
                            i = (0, d.getManyCurrentChannelSettings)(e, l);
                        u.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(l => (0, d.trackChannelNotificationSettingsUpdate)(e, l, t[l], i.get(l), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            l = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            i = r.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: i & ~l | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, l) {
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: l.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, l) {
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: l.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let l = t > 0 ? i().add(t, "second").toISOString() : null;
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: l
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        s.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        s.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: u
                    })
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        743087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShareIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Z",
                        className: u
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        className: u
                    })]
                })
            }
        },
        374860: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToEvent: function() {
                    return c
                },
                postStartActions: function() {
                    return f
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("987317"),
                s = n("244480"),
                u = n("716214"),
                r = n("42203"),
                d = n("945956"),
                o = n("745049");
            async function c(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
                        let t = d.default.getChannelId(),
                            n = r.default.getChannel(e.channel_id);
                        i(null != n, "could not find channel"), t !== n.id && (await u.connectToStage(n, !0), await u.navigateToStage(n, null, !1)), await (0, s.audienceAckRequestToSpeak)(n, !1, !0);
                        break
                    }
                    case o.GuildScheduledEventEntityTypes.VOICE: {
                        let t = d.default.getChannelId(),
                            n = r.default.getChannel(e.channel_id);
                        i(null != n, "could not find channel"), t !== n.id && a.default.selectVoiceChannel(n.id)
                    }
                }
            }

            function f(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    case o.GuildScheduledEventEntityTypes.VOICE:
                    case o.GuildScheduledEventEntityTypes.EXTERNAL:
                        null == t || t()
                }
                return Promise.resolve()
            }
        },
        495829: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                preStartEventActions: function() {
                    return h
                },
                setEventAsActive: function() {
                    return _
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("437140"),
                s = n("738983"),
                u = n("233069"),
                r = n("42203"),
                d = n("305961"),
                o = n("322224"),
                c = n("745049"),
                f = n("49111");
            async function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    l = [];
                l.push(...n);
                let i = await a.default.createChannel({
                    guildId: e.id,
                    type: f.ChannelTypes.GUILD_STAGE_VOICE,
                    name: t.substring(0, 100),
                    permissionOverwrites: l
                });
                if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
                return (0, u.createChannelRecordFromServer)(i.body)
            }
            async function h(e, t) {
                let {
                    entity_type: n
                } = e;
                if (n === c.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
                    let n = await
                    function(e, t) {
                        let {
                            guild_id: n,
                            channel_id: l
                        } = e, i = d.default.getGuild(n);
                        if (null == i) return Promise.resolve(null);
                        let a = r.default.getChannel(l);
                        return null == a ? E(i, e.name, t) : Promise.resolve(a)
                    }(e, t);
                    i(null != n, "could not find or create channel")
                }
            }
            async function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        channel_id: n,
                        entity_type: l,
                        name: a,
                        id: u,
                        guild_id: r
                    } = e;
                switch (l) {
                    case c.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                        i(null != n, "channel_id is required"), await (0, s.startStageInstance)(n, a, c.GuildScheduledEventPrivacyLevel.GUILD_ONLY, t, u);
                        break;
                    case c.GuildScheduledEventEntityTypes.VOICE:
                        i(null != n, "channel_id is required"), await o.default.startEvent(u, r);
                        break;
                    case c.GuildScheduledEventEntityTypes.EXTERNAL:
                        await o.default.startEvent(u, r)
                }
            }
        },
        613767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelPublic: function() {
                    return d
                },
                useIsChannelPublic: function() {
                    return o
                }
            });
            var l = n("446674"),
                i = n("42203"),
                a = n("991170"),
                s = n("398604"),
                u = n("745049"),
                r = n("49111");

            function d(e, t) {
                return a.default.canEveryoneRole(r.Permissions.VIEW_CHANNEL, e) || t === u.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function o(e, t) {
                return (0, l.useStateFromStores)([i.default, s.default], () => {
                    let n = i.default.getChannel(e),
                        l = s.default.getGuildScheduledEvent(t);
                    return d(n, null == l ? void 0 : l.entity_type)
                }, [e, t])
            }
        },
        883310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                i = n("448993"),
                a = n("374860"),
                s = n("495829");
            let u = {
                onSuccess: () => {},
                permissionOverwrites: []
            };

            function r() {
                let [e, t] = l.useState(!1), [n, r] = l.useState(null);
                return [async function e(e, n) {
                    let {
                        onSuccess: l = u.onSuccess,
                        permissionOverwrites: d = u.permissionOverwrites
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u;
                    t(!0);
                    try {
                        await s.preStartEventActions(e, d), await s.setEventAsActive(e, n), await (0, a.navigateToEvent)(e, l), await (0, a.postStartActions)(e, l), t(!1)
                    } catch (n) {
                        let e = new i.APIError(n);
                        r(e), t(!1)
                    }
                    t(!1)
                }, {
                    loading: e,
                    error: n
                }]
            }
        },
        707916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventShareButton: function() {
                    return C
                },
                GuildEventInterestedButton: function() {
                    return g
                },
                GuildEventLurkerInterestedButton: function() {
                    return S
                },
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                i = n("884691"),
                a = n("862337"),
                s = n("77078"),
                u = n("660279"),
                r = n("36694"),
                d = n("83900"),
                o = n("433487"),
                c = n("491920"),
                f = n("745049"),
                E = n("782340"),
                h = n("550034");

            function _(e) {
                let {
                    text: t,
                    disabled: n,
                    onJoinClick: i
                } = e;
                return (0, l.jsx)(s.Button, {
                    className: h.button,
                    size: s.Button.Sizes.SMALL,
                    onClick: i,
                    color: s.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function C(e) {
                let {
                    onInviteClick: t,
                    canInvite: n,
                    isChannelPublic: u
                } = e, o = new a.Timeout, [f, _] = i.useState(!1);
                i.useEffect(() => () => {
                    o.stop()
                }, []);
                let C = e => {
                    null != t && t(e), _(!0), o.start(1e3, () => _(!1))
                };
                return null == t ? null : (0, l.jsx)(s.Tooltip, {
                    text: T(n, u),
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: e => n && u ? (0, l.jsxs)(s.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, l.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), E.default.Messages.SHARE]
                    }) : (0, l.jsxs)(s.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        disabled: f,
                        look: f ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                        onClick: C,
                        children: [f ? (0, l.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }) : (0, l.jsx)(d.default, {
                            width: 16,
                            height: 16
                        }), f ? E.default.Messages.COPIED : E.default.Messages.SHARE]
                    })
                })
            }

            function g(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: n,
                    onRsvpClick: i,
                    ...a
                } = e, d = t && !n;
                return (0, l.jsxs)(s.Button, {
                    ...a,
                    className: h.button,
                    innerClassName: h.innerButton,
                    size: s.Button.Sizes.SMALL,
                    onClick: i,
                    color: s.Button.Colors.PRIMARY,
                    look: d ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                    disabled: n,
                    children: [d ? (0, l.jsx)(r.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(u.default, {
                        width: 16,
                        height: 16
                    }), E.default.Messages.INDICATE_RSVP]
                })
            }

            function S(e) {
                return (0, l.jsx)(s.Tooltip, {
                    text: E.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: t => (0, l.jsx)(g, {
                        ...t,
                        ...e
                    })
                })
            }
            let p = e => null == e || e,
                T = (e, t) => p(e) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : p(t) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function N(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: i,
                    canInvite: a,
                    isChannelPublic: u = !0,
                    entityType: r,
                    onContextMenu: d,
                    onJoinClick: c,
                    onRsvpClick: p,
                    onStartClick: T,
                    onInviteClick: N,
                    onEndClick: v,
                    isJoined: I = !1
                } = e, A = void 0 !== c;
                return (0, l.jsxs)("div", {
                    className: h.container,
                    children: [null != d ? (0, l.jsx)(s.Tooltip, {
                        text: E.default.Messages.MORE,
                        position: "top",
                        "aria-label": E.default.Messages.EDIT,
                        children: e => (0, l.jsx)(s.Clickable, {
                            ...e,
                            onClick: d,
                            className: h.iconButton,
                            children: (0, l.jsx)(o.default, {
                                width: 20,
                                height: 20,
                                className: h.icon
                            })
                        })
                    }) : null, (0, l.jsx)(C, {
                        onInviteClick: N,
                        canInvite: a,
                        isChannelPublic: u
                    }), t && r !== f.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(_, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: n,
                                isVoiceChannel: l
                            } = e;
                            return n ? t ? E.default.Messages.GO_TO_CHANNEL : l ? E.default.Messages.GUILD_EVENT_JOIN : E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: I,
                            canJoin: A,
                            isVoiceChannel: r === f.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !A,
                        onJoinClick: c
                    }) : null, n && !t && (0, l.jsx)(S, {
                        isUserRsvped: i,
                        isUserLurking: n
                    }), !n && !t && null != p && (0, l.jsx)(g, {
                        isUserRsvped: i,
                        isUserLurking: n,
                        onRsvpClick: p
                    }), t || null == T ? null : (0, l.jsx)(s.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: T,
                        color: s.Button.Colors.GREEN,
                        children: E.default.Messages.START
                    }), t && null != v ? (0, l.jsx)(s.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: v,
                        color: s.Button.Colors.PRIMARY,
                        children: E.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        644189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("433487"),
                s = n("707916"),
                u = n("782340"),
                r = n("905491");

            function d(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: d,
                    onContextMenu: o,
                    onRsvpClick: c,
                    onGoToGuildClick: f,
                    isDetailsView: E = !1,
                    isMember: h,
                    onJoinGuildClick: _,
                    guildName: C,
                    onInviteClick: g,
                    canInvite: S,
                    isChannelPublic: p
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [null != o ? (0, l.jsx)(i.Tooltip, {
                        text: u.default.Messages.MORE,
                        position: "top",
                        "aria-label": u.default.Messages.EDIT,
                        children: e => (0, l.jsx)(i.Clickable, {
                            ...e,
                            onClick: o,
                            className: r.iconButton,
                            children: (0, l.jsx)(a.default, {
                                width: 20,
                                height: 20,
                                className: r.icon
                            })
                        })
                    }) : null, h && (0, l.jsx)(s.GuildEventShareButton, {
                        onInviteClick: g,
                        canInvite: S,
                        isChannelPublic: p
                    }), n && !t && (0, l.jsx)(s.GuildEventLurkerInterestedButton, {
                        isUserRsvped: d,
                        isUserLurking: n
                    }), h && !n && !t && null != c && (0, l.jsx)(s.GuildEventInterestedButton, {
                        isUserRsvped: d,
                        isUserLurking: n,
                        onRsvpClick: c
                    }), h && !n && (!E || t) ? (0, l.jsx)(i.Button, {
                        className: r.button,
                        innerClassName: r.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: f,
                        color: i.Button.Colors.GREEN,
                        children: u.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, h ? null : (0, l.jsx)(i.Button, {
                        className: r.button,
                        innerClassName: r.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: _,
                        color: i.Button.Colors.GREEN,
                        children: u.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: C
                        })
                    })]
                })
            }
        },
        298843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983"),
                i = n("884691"),
                a = n("414456"),
                s = n.n(a),
                u = n("446674"),
                r = n("77078"),
                d = n("267567"),
                o = n("817963"),
                c = n("534471"),
                f = n("42203"),
                E = n("305961"),
                h = n("476765"),
                _ = n("794352"),
                C = n("883310"),
                g = n("93550"),
                S = n("617347"),
                p = n("745049"),
                T = n("782340"),
                N = n("823020");

            function v(e) {
                var t;
                let {
                    transitionState: n,
                    event: a,
                    onSuccess: v,
                    onClose: I
                } = e, A = (0, h.useUID)(), {
                    guild_id: L,
                    privacy_level: O
                } = a, R = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(a.channel_id), [a]), y = (0, u.useStateFromStores)([E.default], () => E.default.getGuild(L), [L]), {
                    canManageGuildEvent: m
                } = (0, o.useManageResourcePermissions)(null != R ? R : y), M = m(a), G = (0, u.useStateFromStores)([d.default], () => d.default.isLurking(L), [L]), U = a.entity_type === p.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [x, w] = i.useState(U), [D, {
                    loading: P,
                    error: k
                }] = (0, C.default)();
                if (!M) return null;
                let B = O === p.GuildScheduledEventPrivacyLevel.PUBLIC ? T.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : T.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
                    b = () => {
                        null == v || v(), I(), (0, c.setIsOnStartStageScreen)(!1)
                    },
                    j = async () => {
                        await D(a, x, {
                            onSuccess: b
                        })
                    };
                return (0, l.jsx)(r.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": A,
                    children: (0, l.jsxs)(r.ModalContent, {
                        className: N.content,
                        children: [(0, l.jsx)("div", {
                            className: N.previewCard,
                            children: (0, l.jsx)(S.default, {
                                guild: y,
                                channel: R,
                                name: a.name,
                                description: null !== (t = a.description) && void 0 !== t ? t : void 0,
                                imageSource: (0, g.default)(a),
                                isActive: !1,
                                isUserLurking: G,
                                speakers: [],
                                speakerCount: 0,
                                rsvped: !0,
                                guildEventId: a.id
                            })
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            className: N.privacyLevel,
                            variant: "text-sm/normal",
                            children: T.default.Messages.START_EVENT_CONFIRMATION.format({
                                privacyLevel: B,
                                privacyLevelHook: (e, t) => O !== p.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, l.jsxs)("div", {
                                    className: N.privacyLevel,
                                    children: [(0, l.jsx)(_.default, {
                                        width: 16,
                                        height: 16,
                                        className: N.publicIcon
                                    }), (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: e
                                    })]
                                }, t)
                            })
                        }), (0, l.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            className: N.header,
                            children: a.name
                        }), U && (0, l.jsx)(r.Checkbox, {
                            className: N.verticalSpacing,
                            type: r.Checkbox.Types.INVERTED,
                            value: x,
                            onChange: e => {
                                let {
                                    currentTarget: t
                                } = e;
                                return w(t.checked)
                            },
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                            })
                        }), (0, l.jsxs)("div", {
                            className: s(N.inline, N.buttons, N.verticalSpacing),
                            children: [(0, l.jsx)(r.Button, {
                                color: r.Button.Colors.PRIMARY,
                                onClick: () => {
                                    I()
                                },
                                className: s(N.button, N.spacing),
                                children: T.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                            }), (0, l.jsx)(r.Button, {
                                color: r.Button.Colors.GREEN,
                                onClick: j,
                                submitting: P,
                                className: N.button,
                                children: T.default.Messages.START_EVENT
                            })]
                        }), null != k && null != k.getAnyErrorMessage() ? (0, l.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            className: N.errorMessage,
                            children: k.getAnyErrorMessage()
                        }) : null]
                    })
                })
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return S
                },
                inviteUserToStage: function() {
                    return p
                },
                audienceAckRequestToSpeak: function() {
                    return T
                },
                moveSelfToAudience: function() {
                    return N
                },
                setUserSuppress: function() {
                    return v
                },
                moveUserToAudience: function() {
                    return I
                },
                setEveryoneRolePermissionAllowed: function() {
                    return A
                },
                startStage: function() {
                    return L
                },
                editStage: function() {
                    return O
                },
                endStage: function() {
                    return R
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("316693"),
                s = n("872717"),
                u = n("450911");
            n("851387");
            var r = n("798609"),
                d = n("716241"),
                o = n("18494"),
                c = n("800762"),
                f = n("991170"),
                E = n("716214"),
                h = n("230324"),
                _ = n("738983"),
                C = n("808422"),
                g = n("49111");

            function S(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, h.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                i(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    u = (0, C.getAudienceRequestToSpeakState)(a);
                return u === C.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, h.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function N(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return i(null != t, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function v(e, t, n) {
                let l = e.getGuildId();
                return i(null != l, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return i(null != n, "This channel cannot be guildless."), v(t, e.id, !0), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function A(e, t, n) {
                let l = e.getGuildId();
                i(null != l, "Channel cannot be guildless");
                let s = e.permissionOverwrites[l],
                    d = {
                        id: l,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...s
                    };
                n ? (d.allow = a.default.add(d.allow, t), d.deny = a.default.remove(d.deny, t)) : (d.allow = a.default.remove(d.allow, t), d.deny = a.default.add(d.deny, t)), u.default.updatePermissionOverwrite(e.id, d)
            }
            async function L(e, t, n, l) {
                if ("" === t) return;
                let i = o.default.getVoiceChannelId() === e.id;
                !i && (0, E.connectToStage)(e);
                let a = await (0, _.startStageInstance)(e.id, t, n, l);
                return T(e, !1, !0), a
            }
            async function O(e, t, n) {
                if ("" === t) return;
                let l = await (0, _.updateStageInstance)(e.id, t, n);
                return l
            }
            async function R(e) {
                await (0, _.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("917351");
            var l = n("945956"),
                i = n("387111"),
                a = n("991170"),
                s = n("834052"),
                u = n("837979"),
                r = n("49111"),
                d = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    s = i.default.getName(e, n, a),
                    u = null != l ? l : t.length;
                return 1 === u && null != a ? s : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: s,
                    count: u - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = s.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return s
                },
                endStageInstance: function() {
                    return u
                }
            });
            var l = n("872717"),
                i = n("49111");
            async function a(e, t, n, a, s) {
                let u = await l.default.post({
                    url: i.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: s,
                        send_start_notification: a
                    }
                });
                return u.body
            }
            async function s(e, t, n) {
                let a = await l.default.patch({
                    url: i.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function u(e) {
                return l.default.delete(i.Endpoints.STAGE_INSTANCE(e))
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("917351"),
                i = n.n(l),
                a = n("872717"),
                s = n("689988"),
                u = n("605250"),
                r = n("870691"),
                d = n("42203"),
                o = n("49111");
            let c = {},
                f = new u.default("UserGuildSettingsManager"),
                E = 0;

            function h() {
                c = {
                    ...r.default.getCollapsedCategories()
                }
            }

            function _() {
                !__OVERLAY__ && (clearTimeout(E), E = setTimeout(() => C(), 15e3))
            }
            async function C(e, t) {
                await g(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function g(e) {
                clearTimeout(E);
                let t = 0 !== Object.keys(e).length,
                    n = r.default.getCollapsedCategories(),
                    l = function() {
                        let e = {},
                            t = r.default.getCollapsedCategories();
                        for (let n in t) t[n] !== c[n] && (e[n] = !0);
                        for (let n in c) t[n] !== c[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in l) {
                    let l = d.default.getChannel(i);
                    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
                        ...e[l.guild_id].channel_overrides[l.id],
                        collapsed: l.id in n
                    }, t = !0)
                }
                if (!t) return;
                c = {
                    ...n
                };
                let s = i.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; s.length > 0;) {
                    let e = s.shift();
                    if (e.guildId !== o.FAVORITES) try {
                        await a.default.patch({
                            url: o.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await S(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && s.push(e), await S(5e3)
                    }
                }
            }

            function S(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function p() {
                c = {
                    ...r.default.getCollapsedCategories()
                }
            }
            class T extends s.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: _,
                        CATEGORY_EXPAND: _,
                        CATEGORY_COLLAPSE_ALL: _,
                        CATEGORY_EXPAND_ALL: _,
                        POST_CONNECTION_OPEN: h,
                        USER_GUILD_SETTINGS_FULL_UPDATE: p
                    }, this.saveUserGuildSettings = C, this.saveUserGuildSettingsBulk = g
                }
            }
            var N = new T
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("446674"),
                i = n("913144"),
                a = n("449008"),
                s = n("42203"),
                u = n("341542"),
                r = n("923959"),
                d = n("49111");
            let o = {},
                c = 0;

            function f() {
                c += 1
            }

            function E(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class h extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default, u.default), this.removeChangeListener(f), this.addChangeListener(f), o = null != e ? e : {}
                }
                getState() {
                    return o
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!o[e] && o[e]
                }
                getCollapsedCategories() {
                    return o
                }
                get version() {
                    return c
                }
            }
            h.displayName = "CategoryCollapseStore", h.persistKey = "collapsedCategories";
            var _ = new h(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
                    for (let e in o) {
                        let t = s.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (o[t]) return !1;
                    o[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return E(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (o[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete o[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return E(t)
                }
            })
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("503420"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: a,
                                fill: i,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, a.ClockIcon)
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("304983"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, a.MoreHorizontalIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("811513"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon)
        },
        794352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("521590"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: a,
                        foreground: u,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                        })
                    })
                }, a.GlobeEarthIcon)
        },
        491920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("743087"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                            fill: i
                        })
                    })
                }, a.ShareIcon)
        }
    }
]);