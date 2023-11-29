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
                    return T
                }
            }), n("222007");
            var l = n("866227"),
                a = n.n(l),
                i = n("872717"),
                r = n("716241"),
                u = n("592407"),
                d = n("305961"),
                o = n("599110"),
                s = n("610174"),
                c = n("49111");

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && o.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function E(e, t) {
                let n = new Set(e.features);
                n.has(c.GuildFeatures.COMMUNITY) ? t ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await u.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function _(e, t, n, l) {
                let r = a().add(l, "hours").toISOString(),
                    u = await i.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? r : null,
                            dms_disabled_until: n ? r : null
                        }
                    });
                return u
            }
            async function I(e, t, n) {
                let {
                    showAlertMode: l
                } = (0, s.getGuildAlertModeEnabled)(e), a = d.default.getGuild(e), r = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!l || null == r) return null;
                let u = await i.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return u
            }
            async function T(e) {
                let {
                    showAlertMode: t
                } = (0, s.getGuildAlertModeEnabled)(e), n = d.default.getGuild(e), l = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == l) return null;
                let a = await i.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return a
            }
        },
        701203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanReportRaid: function() {
                    return c
                },
                useCanEnableRaidAlerts: function() {
                    return A
                }
            });
            var l = n("884691"),
                a = n("446674");
            n("926809");
            var i = n("957255"),
                r = n("610174"),
                u = n("413476"),
                d = n("311161"),
                o = n("54346"),
                s = n("49111");

            function c(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    {
                        enableRaidReporting: r
                    } = u.ReportRaidExperiment.useExperiment({
                        guildId: n,
                        location: "4467c7_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    c = (0, a.useStateFromStores)([i.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
                        return t.can(s.Permissions.BAN_MEMBERS, e) || t.can(s.Permissions.KICK_MEMBERS, e) || t.can(s.Permissions.MANAGE_GUILD, e)
                    })(e, i.default), [e]),
                    A = (0, a.useStateFromStores)([o.default], () => null != e ? o.default.getGuildIncident(e.id) : null, [e]),
                    E = null != A && (0, d.hasDetectedActivity)(A);
                return l.useEffect(() => {
                    !E && c && u.ReportRaidExperiment.trackExposure({
                        guildId: n,
                        location: "4467c7_2"
                    })
                }, [E, c, n]), !E && c && r
            }

            function A(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    l = (0, a.useStateFromStores)([i.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
                        return t.can(s.Permissions.MANAGE_GUILD, e)
                    })(e, i.default), [e]),
                    {
                        enableRaidAlerts: d
                    } = u.RaidAlertExperiment.useExperiment({
                        guildId: n,
                        location: "4467c7_3"
                    }, {
                        autoTrackExposure: l
                    }),
                    {
                        showAlertMode: o
                    } = (0, r.useGuildAlertModeEnabled)(n);
                return l && (d || o)
            }
        },
        982537: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                i = n("298386"),
                r = n("446674"),
                u = n("77078"),
                d = n("716241"),
                o = n("679653"),
                s = n("85448"),
                c = n("592407"),
                A = n("923959"),
                E = n("305961"),
                _ = n("27618"),
                I = n("697218"),
                T = n("311340"),
                R = n("701203"),
                f = n("49111"),
                S = n("782340"),
                N = n("456793");

            function M(e) {
                var t, n;
                let {
                    guildId: M,
                    transitionState: L,
                    onClose: D
                } = e, m = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(M), [M]), C = null !== (t = null == m ? void 0 : m.safetyAlertsChannelId) && void 0 !== t ? t : null, [h, p] = a.useState(!!(null == m ? void 0 : m.hasFeature(f.GuildFeatures.RAID_ALERTS_DISABLED))), G = (0, R.useCanEnableRaidAlerts)(m), [v, x] = a.useState(null != C ? C : null !== (n = null == m ? void 0 : m.publicUpdatesChannelId) && void 0 !== n ? n : null), [O, b] = a.useState(!1), g = (0, r.useStateFromStoresArray)([A.default, I.default, _.default], () => {
                    let e = A.default.getChannels(M),
                        t = e[0, A.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return t.type === i.ChannelTypes.GUILD_TEXT
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return {
                                value: t.id,
                                label: (0, o.computeChannelName)(t, I.default, _.default, !0)
                            }
                        });
                    return null != C ? t : [...t]
                }, [M, C]), y = async () => {
                    if (null == m) {
                        (0, u.showToast)((0, u.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE));
                        return
                    }
                    try {
                        b(!0), h !== m.hasFeature(f.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(m, !h), v !== C && (await c.default.saveGuild(M, {
                            safetyAlertsChannelId: v
                        }, {
                            throwErr: !0
                        }), c.default.updateGuild({
                            safetyAlertsChannelId: v
                        }));
                        let e = null != v ? v : C;
                        if (null != e) {
                            let t = {
                                raid_alert_type: s.RaidAlertType.JOIN_RAID,
                                enabled: h,
                                raid_alert_channel_id: e,
                                guild_id: M,
                                channel_id: e
                            };
                            (0, d.trackWithMetadata)(f.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
                        }
                        D()
                    } catch (e) {
                        (0, u.showToast)((0, u.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE))
                    } finally {
                        b(!1)
                    }
                };
                return (0, l.jsxs)(u.ModalRoot, {
                    transitionState: L,
                    size: u.ModalSize.SMALL,
                    children: [(0, l.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, l.jsx)(u.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
                        })
                    }), (0, l.jsxs)(u.ModalContent, {
                        children: [(0, l.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: N.mainChannelContainer,
                            children: (0, l.jsxs)(u.Clickable, {
                                className: N.enableAlertsContainer,
                                onClick: () => {
                                    G && p(!h)
                                },
                                children: [(0, l.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
                                }), (0, l.jsx)(u.Checkbox, {
                                    value: !h,
                                    className: N.enabledAlertsCheckbox,
                                    type: u.Checkbox.Types.INVERTED,
                                    disabled: !G
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: N.mainChannelContainer,
                            children: [(0, l.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: S.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                            }), (0, l.jsx)(u.SearchableSelect, {
                                options: g,
                                onChange: e => {
                                    x(e)
                                },
                                value: v,
                                className: N.channelSelect,
                                maxVisibleItems: 4
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            onClick: y,
                            color: u.Button.Colors.BRAND_NEW,
                            look: u.Button.Looks.FILLED,
                            submitting: O,
                            children: S.default.Messages.SAVE
                        }), (0, l.jsx)(u.Button, {
                            onClick: D,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            disabled: O,
                            children: S.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodMentionRaidLimit: function() {
                    return a
                },
                AutomodServerPolicy: function() {
                    return i
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
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
                i = (0, l.createExperiment)({
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
                })
        },
        85448: function(e, t, n) {
            "use strict";
            var l, a, i, r, u, d, o, s;

            function c(e) {
                return e.includes("LEGITIMATE_ACTIVITY") ? "LEGITIMATE_ACTIVITY" : e.includes("DM_SPAM") ? "DM_SPAM" : e.includes("JOIN_RAID") ? "JOIN_RAID" : "OTHER"
            }
            n.r(t), n.d(t, {
                Feedback: function() {
                    return l
                },
                RaidAlertType: function() {
                    return a
                },
                RaidResolutionType: function() {
                    return i
                },
                getMostImportantRaidResolutionType: function() {
                    return c
                },
                RaidLockdownFeedbackType: function() {
                    return r
                }
            }), n("782340"), (u = l || (l = {})).BUG = "BUG", u.ALLOWED = "ALLOWED", u.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (d = a || (a = {})).JOIN_RAID = "JOIN_RAID", d.MENTION_RAID = "MENTION_RAID", (o = i || (i = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", o.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", o.LEGITIMATE_DMS = "LEGITIMATE_DMS", o.DM_SPAM = "DM_SPAM", o.JOIN_RAID = "JOIN_RAID", o.OTHER = "OTHER", (s = r || (r = {})).DM_SPAM = "DM_SPAM", s.MENTION_SPAM = "MENTION_SPAM", s.CHANNEL_SPAM = "CHANNEL_SPAM", s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", s.CHANGING_SETTINGS = "CHANGING_SETTINGS", s.OTHER = "OTHER"
        },
        926809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInMentionRaidExperiment: function() {
                    return a
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return i
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return r
                }
            });
            var l = n("831585");

            function a(e) {
                let {
                    enabled: t
                } = l.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = l.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = l.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        }
    }
]);