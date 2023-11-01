(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37651"], {
        437140: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("759843"),
                a = n("627929"),
                l = n("913144"),
                d = n("81732"),
                s = n("282109"),
                u = n("840707"),
                r = n("519705"),
                o = n("49111"),
                c = n("397336"),
                E = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: E,
                            permissionOverwrites: _ = [],
                            bitrate: f,
                            userLimit: S,
                            parentId: h,
                            skuId: g,
                            branchId: T
                        } = e;
                        l.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let p = {
                            type: n,
                            name: E,
                            permission_overwrites: _
                        };
                        if (null != f && f !== o.BITRATE_DEFAULT && (p.bitrate = f), null != S && S > 0 && (p.user_limit = S), null != h && (p.parent_id = h), n === o.ChannelTypes.GUILD_STORE) {
                            if (null == g) throw Error("Unexpected missing SKU");
                            p.sku_id = g, p.branch_id = T
                        }
                        return u.default.post({
                            url: o.Endpoints.GUILD_CHANNELS(t),
                            body: p,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, a.exact)({
                                        is_private: _.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (s.default.isOptInEnabled(t) && r.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: c.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }), d.default.checkGuildTemplateDirty(t), e), e => {
                            throw l.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, l) => u.default.post({
                        url: o.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: l
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, a.exact)({
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
                    return E
                }
            });
            var i = n("866227"),
                a = n.n(i),
                l = n("819855"),
                d = n("913144"),
                s = n("679428"),
                u = n("282109"),
                r = n("34676"),
                o = n("397336"),
                c = n("782340"),
                E = {
                    open(e) {
                        d.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        d.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, r.getCurrentGuildSettings)(e);
                        s.default.saveUserGuildSettings(e, t), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            a = (0, r.getCurrentGuildSettings)(e),
                            l = (0, r.getManyCurrentChannelSettings)(e, i);
                        s.default.saveUserGuildSettings(e, t), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, a, n), Object.keys(t.channel_overrides).forEach(i => {
                            let a = l.get(i);
                            (0, r.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], a, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, r.getManyCurrentGuildSettings)(n);
                        s.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, a] = e, l = i.get(n);
                            d.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: a
                            }), (0, r.trackGuildNotificationSettingsUpdate)(n, a, l, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let a = (0, r.getCurrentChannelSettings)(e, t);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, r.trackChannelNotificationSettingsUpdate)(e, t, n, a, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            a = (0, r.getManyCurrentChannelSettings)(e, i);
                        s.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), d.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, r.trackChannelNotificationSettingsUpdate)(e, i, t[i], a.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            a = u.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: a & ~i | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, i) {
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, i) {
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let i = t > 0 ? a().add(t, "second").toISOString() : null;
                        d.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: i
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        d.default.dispatch({
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
                        d.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        374860: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToEvent: function() {
                    return c
                },
                postStartActions: function() {
                    return E
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("987317"),
                d = n("244480"),
                s = n("716214"),
                u = n("42203"),
                r = n("945956"),
                o = n("745049");
            async function c(e, t) {
                let {
                    entity_type: n
                } = e;
                switch (n) {
                    case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
                        let t = r.default.getChannelId(),
                            n = u.default.getChannel(e.channel_id);
                        a(null != n, "could not find channel"), t !== n.id && (await s.connectToStage(n, !0), await s.navigateToStage(n, null, !1)), await (0, d.audienceAckRequestToSpeak)(n, !1, !0);
                        break
                    }
                    case o.GuildScheduledEventEntityTypes.VOICE: {
                        let t = r.default.getChannelId(),
                            n = u.default.getChannel(e.channel_id);
                        a(null != n, "could not find channel"), t !== n.id && l.default.selectVoiceChannel(n.id)
                    }
                }
            }

            function E(e, t) {
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
                    return f
                },
                setEventAsActive: function() {
                    return S
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("437140"),
                d = n("738983"),
                s = n("233069"),
                u = n("42203"),
                r = n("305961"),
                o = n("322224"),
                c = n("745049"),
                E = n("49111");
            async function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    i = [];
                i.push(...n);
                let a = await l.default.createChannel({
                    guildId: e.id,
                    type: E.ChannelTypes.GUILD_STAGE_VOICE,
                    name: t.substring(0, 100),
                    permissionOverwrites: i
                });
                if (null == a || 201 !== a.status) throw Error("Can't create channel for event");
                return (0, s.createChannelRecordFromServer)(a.body)
            }
            async function f(e, t) {
                let {
                    entity_type: n
                } = e;
                if (n === c.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
                    let n = await
                    function(e, t) {
                        let {
                            guild_id: n,
                            channel_id: i
                        } = e, a = r.default.getGuild(n);
                        if (null == a) return Promise.resolve(null);
                        let l = u.default.getChannel(i);
                        return null == l ? _(a, e.name, t) : Promise.resolve(l)
                    }(e, t);
                    a(null != n, "could not find or create channel")
                }
            }
            async function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        channel_id: n,
                        entity_type: i,
                        name: l,
                        id: s,
                        guild_id: u
                    } = e;
                switch (i) {
                    case c.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                        a(null != n, "channel_id is required"), await (0, d.startStageInstance)(n, l, c.GuildScheduledEventPrivacyLevel.GUILD_ONLY, t, s);
                        break;
                    case c.GuildScheduledEventEntityTypes.VOICE:
                        a(null != n, "channel_id is required"), await o.default.startEvent(s, u);
                        break;
                    case c.GuildScheduledEventEntityTypes.EXTERNAL:
                        await o.default.startEvent(s, u)
                }
            }
        },
        883310: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                a = n("448993"),
                l = n("374860"),
                d = n("495829");
            let s = {
                onSuccess: () => {},
                permissionOverwrites: []
            };

            function u() {
                let [e, t] = i.useState(!1), [n, u] = i.useState(null);
                return [async function e(e, n) {
                    let {
                        onSuccess: i = s.onSuccess,
                        permissionOverwrites: r = s.permissionOverwrites
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
                    t(!0);
                    try {
                        await d.preStartEventActions(e, r), await d.setEventAsActive(e, n), await (0, l.navigateToEvent)(e, i), await (0, l.postStartActions)(e, i), t(!1)
                    } catch (n) {
                        let e = new a.APIError(n);
                        u(e), t(!1)
                    }
                    t(!1)
                }, {
                    loading: e,
                    error: n
                }]
            }
        },
        298843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                d = n.n(l),
                s = n("446674"),
                u = n("77078"),
                r = n("267567"),
                o = n("817963"),
                c = n("534471"),
                E = n("42203"),
                _ = n("305961"),
                f = n("476765"),
                S = n("794352"),
                h = n("883310"),
                g = n("93550"),
                T = n("617347"),
                p = n("745049"),
                N = n("782340"),
                A = n("823020");

            function C(e) {
                var t;
                let {
                    transitionState: n,
                    event: l,
                    onSuccess: C,
                    onClose: I
                } = e, v = (0, f.useUID)(), {
                    guild_id: y,
                    privacy_level: O
                } = l, G = (0, s.useStateFromStores)([E.default], () => E.default.getChannel(l.channel_id), [l]), L = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(y), [y]), {
                    canManageGuildEvent: R
                } = (0, o.useManageResourcePermissions)(null != G ? G : L), U = R(l), m = (0, s.useStateFromStores)([r.default], () => r.default.isLurking(y), [y]), D = l.entity_type === p.GuildScheduledEventEntityTypes.STAGE_INSTANCE, [P, M] = a.useState(D), [w, {
                    loading: b,
                    error: k
                }] = (0, h.default)();
                if (!U) return null;
                let F = O === p.GuildScheduledEventPrivacyLevel.PUBLIC ? N.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : N.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
                    x = () => {
                        null == C || C(), I(), (0, c.setIsOnStartStageScreen)(!1)
                    },
                    H = async () => {
                        await w(l, P, {
                            onSuccess: x
                        })
                    };
                return (0, i.jsx)(u.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": v,
                    children: (0, i.jsxs)(u.ModalContent, {
                        className: A.content,
                        children: [(0, i.jsx)("div", {
                            className: A.previewCard,
                            children: (0, i.jsx)(T.default, {
                                guild: L,
                                channel: G,
                                name: l.name,
                                description: null !== (t = l.description) && void 0 !== t ? t : void 0,
                                imageSource: (0, g.default)(l),
                                isActive: !1,
                                isUserLurking: m,
                                speakers: [],
                                speakerCount: 0,
                                rsvped: !0,
                                guildEventId: l.id
                            })
                        }), (0, i.jsx)(u.Text, {
                            color: "header-secondary",
                            className: A.privacyLevel,
                            variant: "text-sm/normal",
                            children: N.default.Messages.START_EVENT_CONFIRMATION.format({
                                privacyLevel: F,
                                privacyLevelHook: (e, t) => O !== p.GuildScheduledEventPrivacyLevel.PUBLIC ? null : (0, i.jsxs)("div", {
                                    className: A.privacyLevel,
                                    children: [(0, i.jsx)(S.default, {
                                        width: 16,
                                        height: 16,
                                        className: A.publicIcon
                                    }), (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: e
                                    })]
                                }, t)
                            })
                        }), (0, i.jsx)(u.Heading, {
                            variant: "heading-xl/semibold",
                            className: A.header,
                            children: l.name
                        }), D && (0, i.jsx)(u.Checkbox, {
                            className: A.verticalSpacing,
                            type: u.Checkbox.Types.INVERTED,
                            value: P,
                            onChange: e => {
                                let {
                                    currentTarget: t
                                } = e;
                                return M(t.checked)
                            },
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: N.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                            })
                        }), (0, i.jsxs)("div", {
                            className: d(A.inline, A.buttons, A.verticalSpacing),
                            children: [(0, i.jsx)(u.Button, {
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    I()
                                },
                                className: d(A.button, A.spacing),
                                children: N.default.Messages.STAGE_BLOCKED_USERS_CANCEL
                            }), (0, i.jsx)(u.Button, {
                                color: u.Button.Colors.GREEN,
                                onClick: H,
                                submitting: b,
                                className: A.button,
                                children: N.default.Messages.START_EVENT
                            })]
                        }), null != k && null != k.getAnyErrorMessage() ? (0, i.jsx)(u.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            className: A.errorMessage,
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
                    return T
                },
                inviteUserToStage: function() {
                    return p
                },
                audienceAckRequestToSpeak: function() {
                    return N
                },
                moveSelfToAudience: function() {
                    return A
                },
                setUserSuppress: function() {
                    return C
                },
                moveUserToAudience: function() {
                    return I
                },
                setEveryoneRolePermissionAllowed: function() {
                    return v
                },
                startStage: function() {
                    return y
                },
                editStage: function() {
                    return O
                },
                endStage: function() {
                    return G
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("316693"),
                d = n("872717"),
                s = n("450911");
            n("851387");
            var u = n("798609"),
                r = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                _ = n("716214"),
                f = n("230324"),
                S = n("738983"),
                h = n("808422"),
                g = n("49111");

            function T(e, t) {
                let n = e.getGuildId();
                return a(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let n = e.getGuildId();
                return a(null != n, "This channel cannot be guildless."), d.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null == e ? void 0 : e.getGuildId();
                a(null != i, "This channel cannot be guildless.");
                let l = c.default.getVoiceStateForChannel(e.id),
                    s = (0, h.getAudienceRequestToSpeakState)(l);
                return s === h.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(i),
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

            function A(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return a(null != t, "This channel cannot be guildless."), d.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function C(e, t, n) {
                let i = e.getGuildId();
                return a(null != i, "This channel cannot be guildless."), d.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(i, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return a(null != n, "This channel cannot be guildless."), C(t, e.id, !0), d.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function v(e, t, n) {
                let i = e.getGuildId();
                a(null != i, "Channel cannot be guildless");
                let d = e.permissionOverwrites[i],
                    r = {
                        id: i,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...d
                    };
                n ? (r.allow = l.default.add(r.allow, t), r.deny = l.default.remove(r.deny, t)) : (r.allow = l.default.remove(r.allow, t), r.deny = l.default.add(r.deny, t)), s.default.updatePermissionOverwrite(e.id, r)
            }
            async function y(e, t, n, i) {
                if ("" === t) return;
                let a = o.default.getVoiceChannelId() === e.id;
                !a && (0, _.connectToStage)(e);
                let l = await (0, S.startStageInstance)(e.id, t, n, i);
                return N(e, !1, !0), l
            }
            async function O(e, t, n) {
                if ("" === t) return;
                let i = await (0, S.updateStageInstance)(e.id, t, n);
                return i
            }
            async function G(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return _
                }
            }), n("917351");
            var i = n("945956"),
                a = n("387111"),
                l = n("991170"),
                d = n("834052"),
                s = n("837979"),
                u = n("49111"),
                r = n("606762"),
                o = n("782340");

            function c(e, t, n, i) {
                let l = t[0],
                    d = a.default.getName(e, n, l),
                    s = null != i ? i : t.length;
                return 1 === s && null != l ? d : null == l ? o.default.Messages.SPEAKING_COUNT.format({
                    count: s
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: d,
                    count: s - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function _(e) {
                let t = d.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: l.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? s.RequestToSpeakPermissionStates.EVERYONE : s.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return l
                },
                updateStageInstance: function() {
                    return d
                },
                endStageInstance: function() {
                    return s
                }
            });
            var i = n("872717"),
                a = n("49111");
            async function l(e, t, n, l, d) {
                let s = await i.default.post({
                    url: a.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: d,
                        send_start_notification: l
                    }
                });
                return s.body
            }
            async function d(e, t, n) {
                let l = await i.default.patch({
                    url: a.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return l.body
            }

            function s(e) {
                return i.default.delete(a.Endpoints.STAGE_INSTANCE(e))
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("917351"),
                a = n.n(i),
                l = n("872717"),
                d = n("689988"),
                s = n("605250"),
                u = n("870691"),
                r = n("42203"),
                o = n("49111");
            let c = {},
                E = new s.default("UserGuildSettingsManager"),
                _ = 0;

            function f() {
                c = {
                    ...u.default.getCollapsedCategories()
                }
            }

            function S() {
                !__OVERLAY__ && (clearTimeout(_), _ = setTimeout(() => h(), 15e3))
            }
            async function h(e, t) {
                await g(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function g(e) {
                clearTimeout(_);
                let t = 0 !== Object.keys(e).length,
                    n = u.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = u.default.getCollapsedCategories();
                        for (let n in t) t[n] !== c[n] && (e[n] = !0);
                        for (let n in c) t[n] !== c[n] && (e[n] = !0);
                        return e
                    }();
                for (let a in i) {
                    let i = r.default.getChannel(a);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                c = {
                    ...n
                };
                let d = a.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; d.length > 0;) {
                    let e = d.shift();
                    if (e.guildId !== o.FAVORITES) try {
                        await l.default.patch({
                            url: o.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await T(1e3)
                    } catch (t) {
                        E.error(t), e.attempts += 1, e.attempts < 3 && d.push(e), await T(5e3)
                    }
                }
            }

            function T(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function p() {
                c = {
                    ...u.default.getCollapsedCategories()
                }
            }
            class N extends d.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: S,
                        CATEGORY_EXPAND: S,
                        CATEGORY_COLLAPSE_ALL: S,
                        CATEGORY_EXPAND_ALL: S,
                        POST_CONNECTION_OPEN: f,
                        USER_GUILD_SETTINGS_FULL_UPDATE: p
                    }, this.saveUserGuildSettings = h, this.saveUserGuildSettingsBulk = g
                }
            }
            var A = new N
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("449008"),
                d = n("42203"),
                s = n("341542"),
                u = n("923959"),
                r = n("49111");
            let o = {},
                c = 0;

            function E() {
                c += 1
            }

            function _(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class f extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default, s.default), this.removeChangeListener(E), this.addChangeListener(E), o = null != e ? e : {}
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
            f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
            var S = new f(a.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
                    for (let e in o) {
                        let t = d.default.getChannel(e);
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
                    return _(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
                    u.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
                    return _(t)
                }
            })
        }
    }
]);