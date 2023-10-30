(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55677"], {
        311340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackReportRaidViewed: function() {
                    return A
                },
                setGuildRaidAlerts: function() {
                    return E
                },
                setGuildIncidentActions: function() {
                    return _
                },
                handleResolveRaid: function() {
                    return I
                },
                handleReportRaid: function() {
                    return f
                }
            });
            var i = n("866227"),
                l = n.n(i),
                o = n("872717"),
                u = n("716241"),
                a = n("592407"),
                r = n("305961"),
                d = n("599110"),
                s = n("610174"),
                c = n("49111");

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && d.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, u.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function E(e, t) {
                let n = new Set(e.features);
                n.has(c.GuildFeatures.COMMUNITY) ? t ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await a.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function _(e, t, n, i) {
                let u = l().add(i, "hours").toISOString(),
                    a = await o.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? u : null,
                            dms_disabled_until: n ? u : null
                        }
                    });
                return a
            }
            async function I(e, t, n) {
                let {
                    showAlertMode: i
                } = (0, s.getGuildAlertModeEnabled)(e), l = r.default.getGuild(e), u = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!i || null == u) return null;
                let a = await o.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return a
            }
            async function f(e) {
                let {
                    showAlertMode: t
                } = (0, s.getGuildAlertModeEnabled)(e), n = r.default.getGuild(e), i = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == i) return null;
                let l = await o.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }
        },
        701203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanReportRaid: function() {
                    return A
                },
                useCanEnableRaidAlerts: function() {
                    return E
                },
                useShowEnableRaidAlertsUpsell: function() {
                    return _
                },
                useShowMentionRaidLimitUpsell: function() {
                    return I
                }
            });
            var i = n("884691"),
                l = n("446674"),
                o = n("926809"),
                u = n("957255"),
                a = n("610174"),
                r = n("413476"),
                d = n("311161"),
                s = n("54346"),
                c = n("49111");

            function A(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    {
                        enableRaidReporting: o
                    } = r.ReportRaidExperiment.useExperiment({
                        guildId: n,
                        location: "4467c7_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = (0, l.useStateFromStores)([u.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
                        return t.can(c.Permissions.BAN_MEMBERS, e) || t.can(c.Permissions.KICK_MEMBERS, e) || t.can(c.Permissions.MANAGE_GUILD, e)
                    })(e, u.default), [e]),
                    A = (0, l.useStateFromStores)([s.default], () => null != e ? s.default.getGuildIncident(e.id) : null, [e]),
                    E = null != A && (0, d.hasDetectedActivity)(A);
                return i.useEffect(() => {
                    !E && a && r.ReportRaidExperiment.trackExposure({
                        guildId: n,
                        location: "4467c7_2"
                    })
                }, [E, a, n]), !E && a && o
            }

            function E(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    i = (0, l.useStateFromStores)([u.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
                        return t.can(c.Permissions.MANAGE_GUILD, e)
                    })(e, u.default), [e]),
                    {
                        enableRaidAlerts: o
                    } = r.RaidAlertExperiment.useExperiment({
                        guildId: n,
                        location: "4467c7_3"
                    }, {
                        autoTrackExposure: i
                    }),
                    {
                        showAlertMode: d
                    } = (0, a.useGuildAlertModeEnabled)(n);
                return i && (o || d)
            }

            function _(e) {
                let t = E(e),
                    n = (null == e ? void 0 : e.hasFeature(c.GuildFeatures.RAID_ALERTS_DISABLED)) === !0;
                return t && n
            }

            function I(e) {
                var t;
                let n = (0, l.useStateFromStores)([u.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
                        return t.can(c.Permissions.MANAGE_GUILD, e)
                    })(e, u.default), [e]),
                    i = (0, o.useIsMentionRaidExperimentEnabled)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !1);
                return i && n
            }
        },
        982537: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                l = n("884691"),
                o = n("298386"),
                u = n("446674"),
                a = n("77078"),
                r = n("716241"),
                d = n("679653"),
                s = n("85448"),
                c = n("592407"),
                A = n("923959"),
                E = n("305961"),
                _ = n("27618"),
                I = n("697218"),
                f = n("311340"),
                m = n("701203"),
                R = n("49111"),
                T = n("782340"),
                N = n("456793");

            function S(e) {
                var t, n;
                let {
                    guildId: S,
                    transitionState: M,
                    onClose: C
                } = e, L = (0, u.useStateFromStores)([E.default], () => E.default.getGuild(S), [S]), D = null !== (t = null == L ? void 0 : L.safetyAlertsChannelId) && void 0 !== t ? t : null, [p, g] = l.useState(!!(null == L ? void 0 : L.hasFeature(R.GuildFeatures.RAID_ALERTS_DISABLED))), b = (0, m.useCanEnableRaidAlerts)(L), [h, G] = l.useState(null != D ? D : null !== (n = null == L ? void 0 : L.publicUpdatesChannelId) && void 0 !== n ? n : null), [x, v] = l.useState(!1), y = (0, u.useStateFromStoresArray)([A.default, I.default, _.default], () => {
                    let e = A.default.getChannels(S),
                        t = e[0, A.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return t.type === o.ChannelTypes.GUILD_TEXT
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return {
                                value: t.id,
                                label: (0, d.computeChannelName)(t, I.default, _.default, !0)
                            }
                        });
                    return null != D ? t : [...t]
                }, [S, D]), O = async () => {
                    if (null == L) {
                        (0, a.showToast)((0, a.createToast)(T.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, a.ToastType.FAILURE));
                        return
                    }
                    try {
                        v(!0), p !== L.hasFeature(R.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, f.setGuildRaidAlerts)(L, !p), h !== D && (await c.default.saveGuild(S, {
                            safetyAlertsChannelId: h
                        }, {
                            throwErr: !0
                        }), c.default.updateGuild({
                            safetyAlertsChannelId: h
                        }));
                        let e = null != h ? h : D;
                        if (null != e) {
                            let t = {
                                raid_alert_type: s.RaidAlertType.JOIN_RAID,
                                enabled: p,
                                raid_alert_channel_id: e,
                                guild_id: S,
                                channel_id: e
                            };
                            (0, r.trackWithMetadata)(R.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
                        }
                        C()
                    } catch (e) {
                        (0, a.showToast)((0, a.createToast)(T.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, a.ToastType.FAILURE))
                    } finally {
                        v(!1)
                    }
                };
                return (0, i.jsxs)(a.ModalRoot, {
                    transitionState: M,
                    size: a.ModalSize.SMALL,
                    children: [(0, i.jsx)(a.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(a.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: T.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
                        })
                    }), (0, i.jsxs)(a.ModalContent, {
                        children: [(0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: T.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
                        }), (0, i.jsx)("div", {
                            className: N.mainChannelContainer,
                            children: (0, i.jsxs)(a.Clickable, {
                                className: N.enableAlertsContainer,
                                onClick: () => {
                                    b && g(!p)
                                },
                                children: [(0, i.jsx)(a.Text, {
                                    variant: "text-md/medium",
                                    color: "text-normal",
                                    children: T.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
                                }), (0, i.jsx)(a.Checkbox, {
                                    value: !p,
                                    className: N.enabledAlertsCheckbox,
                                    type: a.Checkbox.Types.INVERTED,
                                    disabled: !b
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: N.mainChannelContainer,
                            children: [(0, i.jsx)(a.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: T.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                            }), (0, i.jsx)(a.SearchableSelect, {
                                options: y,
                                onChange: e => {
                                    G(e)
                                },
                                value: h,
                                className: N.channelSelect,
                                maxVisibleItems: 4
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: T.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
                            })]
                        })]
                    }), (0, i.jsxs)(a.ModalFooter, {
                        children: [(0, i.jsx)(a.Button, {
                            onClick: O,
                            color: a.Button.Colors.BRAND_NEW,
                            look: a.Button.Looks.FILLED,
                            submitting: x,
                            children: T.default.Messages.SAVE
                        }), (0, i.jsx)(a.Button, {
                            onClick: C,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            disabled: x,
                            children: T.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return l
                },
                AutomodMentionRaidLimit: function() {
                    return o
                },
                AutomodMentionRaidNotice: function() {
                    return u
                },
                AutomodCustomMessage: function() {
                    return a
                },
                AutomodServerPolicy: function() {
                    return r
                },
                AutomodUserProfile: function() {
                    return d
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                r = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        85448: function(e, t, n) {
            "use strict";
            var i, l, o, u, a, r, d, s;

            function c(e) {
                return e.includes(o.LEGITIMATE_ACTIVITY) ? o.LEGITIMATE_ACTIVITY : e.includes(o.DM_SPAM) ? o.DM_SPAM : e.includes(o.JOIN_RAID) ? o.JOIN_RAID : o.OTHER
            }
            n.r(t), n.d(t, {
                Feedback: function() {
                    return i
                },
                RaidAlertType: function() {
                    return l
                },
                RaidResolutionType: function() {
                    return o
                },
                getMostImportantRaidResolutionType: function() {
                    return c
                },
                RaidLockdownFeedbackType: function() {
                    return u
                }
            }), n("782340"), (a = i || (i = {})).BUG = "BUG", a.ALLOWED = "ALLOWED", a.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (r = l || (l = {})).JOIN_RAID = "JOIN_RAID", r.MENTION_RAID = "MENTION_RAID", (d = o || (o = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", d.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", d.LEGITIMATE_DMS = "LEGITIMATE_DMS", d.DM_SPAM = "DM_SPAM", d.JOIN_RAID = "JOIN_RAID", d.OTHER = "OTHER", (s = u || (u = {})).DM_SPAM = "DM_SPAM", s.MENTION_SPAM = "MENTION_SPAM", s.CHANNEL_SPAM = "CHANNEL_SPAM", s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", s.CHANGING_SETTINGS = "CHANGING_SETTINGS", s.OTHER = "OTHER"
        },
        926809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInNonCommunityGuildsRollout: function() {
                    return l
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return o
                },
                isInMentionRaidExperiment: function() {
                    return u
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return a
                },
                isInMentionRaidNoticeExperiment: function() {
                    return r
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return d
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return s
                },
                useIsUserProfileRuleExperimentEnabled: function() {
                    return c
                }
            });
            var i = n("831585");

            function l(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                });
                return t
            }

            function o(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function u(e) {
                let {
                    enabled: t
                } = i.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = i.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function r(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = i.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodCustomMessage.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodUserProfile.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        }
    }
]);