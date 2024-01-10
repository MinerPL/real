            "use strict";
            s.r(t), s.d(t, {
                GuildExplicitContentFilter: function() {
                    return Y
                },
                toggleModerationExperienceGuildFeature: function() {
                    return K
                },
                default: function() {
                    return X
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s("446674"),
                d = s("77078"),
                u = s("79112"),
                c = s("642950"),
                E = s("716241"),
                _ = s("679653"),
                T = s("419830"),
                I = s("298878"),
                S = s("610174"),
                N = s("413476"),
                g = s("413266"),
                f = s("926809"),
                A = s("466818"),
                L = s("42203"),
                m = s("957255"),
                C = s("102985"),
                O = s("697218"),
                h = s("555158"),
                R = s("593195"),
                D = s("139011"),
                M = s("412131"),
                G = s("935351"),
                x = s("599110"),
                p = s("701909"),
                U = s("62418"),
                v = s("592407"),
                j = s("900938"),
                P = s("797944"),
                y = s("380993"),
                b = s("378826"),
                B = s("998728"),
                F = s("49111"),
                H = s("782340"),
                V = s("761356");

            function k(e) {
                let {
                    guild: t
                } = e, s = t.canHaveRaidActivityAlerts(), l = (0, o.useStateFromStores)([m.default], () => null != t && m.default.can(F.Permissions.MANAGE_GUILD, t), [t]), {
                    enableRaidAlerts: i
                } = N.RaidAlertExperiment.useExperiment({
                    guildId: t.id,
                    location: "1a2662_1"
                }, {
                    autoTrackExposure: l
                }), r = (0, f.useIsMentionRaidExperimentEnabled)(t.id), u = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t.safetyAlertsChannelId), [t.safetyAlertsChannelId]), c = (0, _.default)(u), S = null != u, A = n.useMemo(() => {
                    let e = (null == u ? void 0 : u.type) != null ? (0, T.getSimpleChannelIconComponent)(u.type) : null;
                    return null != e ? e : R.default
                }, [u]);

                function C() {
                    i && (0, g.openSafetyChannelSetupModal)(t.id)
                }
                return l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.FormDivider, {
                        className: V.divider
                    }), (0, a.jsxs)("div", {
                        className: V.setupContainer,
                        children: [(0, a.jsxs)("div", {
                            className: V.switchItemTextContent,
                            children: [(0, a.jsxs)(d.Text, {
                                color: "header-primary",
                                variant: "text-md/semibold",
                                children: [H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_TITLE, " ", (0, a.jsx)(I.default, {
                                    className: V.betaTag
                                })]
                            }), (0, a.jsx)(d.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_DESCRIPTION
                            })]
                        }), (0, a.jsx)(B.default, {
                            title: (0, a.jsxs)("div", {
                                className: V.settingsRowHeader,
                                children: [(0, a.jsx)(D.default, {
                                    width: 20,
                                    height: 20
                                }), (0, a.jsx)(d.Text, {
                                    color: "text-normal",
                                    variant: "text-sm/medium",
                                    children: H.default.Messages.GUILD_ANTIRAID_SAFETY_JOIN_RAIDS_TITLE
                                })]
                            }),
                            highlightColor: P.HighlightColors.GREEN,
                            action: i ? (0, a.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                color: d.Button.Colors.LINK,
                                children: s ? H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MANAGE_ACTION : H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_SETUP_ACTION
                            }) : (0, a.jsx)(d.Text, {
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_NO_EXPERIMENT_ACTION
                            }),
                            onClick: i ? C : void 0,
                            subsection: i ? (0, a.jsxs)("div", {
                                className: V.settingsRowSubsection,
                                children: [(0, a.jsxs)("div", {
                                    className: V.settingsRowSubsectionItem,
                                    children: [(0, a.jsx)(d.Text, {
                                        color: "text-normal",
                                        variant: "text-xs/semibold",
                                        children: H.default.Messages.GUILD_ANTIRAID_SETTING_PROTECTION_LABEL
                                    }), (0, a.jsx)(d.Text, {
                                        color: "text-muted",
                                        variant: "text-xs/medium",
                                        children: S && s ? H.default.Messages.GUILD_ANTIRAID_SETTING_ENABLED_ALERTS : H.default.Messages.GUILD_ANTIRAID_SETTING_ENABLED
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: V.settingsRowSubsectionItem,
                                    children: S && s ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(d.Text, {
                                            color: "text-normal",
                                            variant: "text-xs/semibold",
                                            children: H.default.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_LABEL
                                        }), (0, a.jsxs)(d.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            className: V.channelContainer,
                                            children: [(0, a.jsx)(A, {
                                                className: V.channelIcon,
                                                width: 12,
                                                height: 12
                                            }), " ", c]
                                        })]
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(d.Text, {
                                            color: "text-normal",
                                            variant: "text-xs/semibold",
                                            children: H.default.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE_LABEL
                                        }), (0, a.jsx)(d.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: H.default.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE
                                        })]
                                    })
                                })]
                            }) : null
                        }), !S && i ? (0, a.jsx)(h.default, {
                            messageType: h.HelpMessageTypes.INFO,
                            textVariant: "text-xs/normal",
                            children: H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ENABLE_TIP.format({
                                onClick: C
                            })
                        }) : null, r ? (0, a.jsx)(B.default, {
                            title: (0, a.jsxs)("div", {
                                className: V.settingsRowHeader,
                                children: [(0, a.jsx)(M.default, {
                                    width: 20,
                                    height: 20
                                }), (0, a.jsx)(d.Text, {
                                    color: "text-normal",
                                    variant: "text-sm/medium",
                                    children: H.default.Messages.GUILD_ANTIRAID_SAFETY_MENTION_RAIDS_TITLE
                                })]
                            }),
                            highlightColor: P.HighlightColors.GREEN,
                            action: (0, a.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                color: d.Button.Colors.LINK,
                                onClick: function() {
                                    x.default.track(F.AnalyticEvents.GUILD_SAFETY_MENTION_RAID_SETUP_CTA_CLICKED, {
                                        ...(0, E.collectGuildAnalyticsMetadata)(t.id)
                                    }), v.default.setSection(F.GuildSettingsSections.GUILD_AUTOMOD, F.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM)
                                },
                                children: (0, a.jsxs)("div", {
                                    className: V.setupAutomodButton,
                                    children: [H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_IN_AUTOMOD_ACTION, (0, a.jsx)(G.default, {
                                        className: V.setupAutomodIcon,
                                        width: 16,
                                        height: 16
                                    })]
                                })
                            })
                        }) : null]
                    })]
                }) : null
            }

            function w(e) {
                let {
                    guild: t
                } = e, s = (0, o.useStateFromStores)([m.default], () => null != t && m.default.can(F.Permissions.MANAGE_GUILD, t), [t]), l = n.useCallback(async e => {
                    let {
                        value: s
                    } = e;
                    try {
                        await v.default.saveGuild(t.id, {
                            verificationLevel: s
                        }), v.default.updateGuild({
                            verificationLevel: s
                        })
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE))
                    }
                }, [t]), i = n.useMemo(() => {
                    let e = (0, U.generateVerificationLevelOptions)(null == t ? void 0 : t.hasFeature(F.GuildFeatures.COMMUNITY)).map(e => ({
                        ...e,
                        tooltipPosition: "left"
                    }));
                    return (0, U.mapOptionToHighlightedRowOptions)(e)
                }, [t]), r = n.useMemo(() => i.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [t, i]);
                return (0, a.jsxs)("div", {
                    className: V.setupContainer,
                    children: [(0, a.jsxs)("div", {
                        className: V.switchItemTextContent,
                        children: [(0, a.jsx)(d.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: H.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
                        }), (0, a.jsx)(d.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: H.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
                        })]
                    }), (0, a.jsx)(b.default, {
                        changeTitle: H.default.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
                        value: null == r ? void 0 : r.value,
                        options: i,
                        disabled: !s,
                        onChange: l
                    })]
                })
            }

            function Y(e) {
                let {
                    guild: t,
                    className: s,
                    withDivider: l = !0
                } = e, r = (0, o.useStateFromStores)([m.default], () => null != t && m.default.can(F.Permissions.MANAGE_GUILD, t), [t]), u = n.useCallback(async e => {
                    let {
                        value: s
                    } = e;
                    try {
                        await v.default.saveGuild(t.id, {
                            explicitContentFilter: s
                        }), v.default.updateGuild({
                            explicitContentFilter: s
                        })
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE))
                    }
                }, [t.id]), c = n.useMemo(() => {
                    let e = (0, U.generateContentFilterHighlightedOptions)(null == t ? void 0 : t.hasFeature(F.GuildFeatures.COMMUNITY)).map(e => ({
                        ...e,
                        tooltipPosition: "left"
                    }));
                    return (0, U.mapOptionToHighlightedRowOptions)(e)
                }, [t]), E = n.useMemo(() => c.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, c]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [l && (0, a.jsx)(d.FormDivider, {
                        className: V.divider
                    }), (0, a.jsxs)("div", {
                        className: i(V.setupContainer, s),
                        children: [(0, a.jsxs)("div", {
                            className: V.switchItemTextContent,
                            children: [(0, a.jsx)(d.Text, {
                                color: "header-primary",
                                variant: "text-md/semibold",
                                children: H.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
                            }), (0, a.jsx)(d.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: H.default.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({
                                    helpdeskArticle: p.default.getArticleURL(F.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
                                })
                            })]
                        }), (0, a.jsx)(b.default, {
                            changeTitle: H.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
                            value: null == E ? void 0 : E.value,
                            options: c,
                            disabled: !r,
                            onChange: u
                        })]
                    })]
                })
            }
            async function K(e, t) {
                let s = e.hasFeature(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
                if (s === t) return;
                let a = e.features;
                return t ? a.add(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : a.delete(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await v.default.saveGuild(e.id, {
                    features: a
                })
            }

            function W(e) {
                let {
                    guild: t
                } = e, s = (0, o.useStateFromStores)([m.default], () => null != t && m.default.can(F.Permissions.MANAGE_GUILD, t), [t]), l = t.hasFeature(F.GuildFeatures.COMMUNITY), i = (0, A.useCanAccessMemberSafetyPage)(t.id), [r, u] = n.useState(t.hasFeature(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), c = n.useCallback(async e => {
                    u(e), await K(t, e)
                }, [t]);
                return l || !i ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: V.setupContainer,
                        children: [(0, a.jsx)(d.FormSwitch, {
                            value: r,
                            onChange: c,
                            className: V.switchItem,
                            disabled: !s,
                            hideBorder: !0,
                            children: (0, a.jsxs)("div", {
                                className: V.switchItemTextContent,
                                children: [(0, a.jsxs)(d.Text, {
                                    color: "header-primary",
                                    variant: "text-md/semibold",
                                    children: [H.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE, (0, a.jsx)(I.default, {
                                        className: V.betaTag
                                    })]
                                }), (0, a.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: H.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
                                })]
                            })
                        }), (0, a.jsx)(h.default, {
                            messageType: h.HelpMessageTypes.INFO,
                            textVariant: "text-xs/normal",
                            children: H.default.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
                        })]
                    }), (0, a.jsx)(d.FormDivider, {
                        className: V.divider
                    })]
                })
            }

            function z(e) {
                let {
                    guild: t,
                    mfaLevel: s
                } = e, l = (0, o.useStateFromStores)([m.default], () => null != t && m.default.can(F.Permissions.MANAGE_GUILD, t), [t]), i = (0, o.useStateFromStores)([O.default], () => O.default.getCurrentUser()), {
                    isGuildOwnerWithMFA: c,
                    showMFAUserTooltip: E
                } = n.useMemo(() => {
                    if (null == i) return {
                        canChangeMFALevel: !1,
                        showMFAUserTooltip: !1
                    };
                    let e = t.isOwnerWithRequiredMfaLevel(i);
                    return {
                        isGuildOwnerWithMFA: e,
                        showMFAUserTooltip: !i.mfaEnabled && t.isOwner(i)
                    }
                }, [i, t]), _ = s === F.MFALevels.ELEVATED, T = (0, r.throttle)(async e => {
                    if (!!c) !E && await v.default.updateMFALevel({
                        guildId: t.id,
                        level: e ? F.MFALevels.ELEVATED : F.MFALevels.NONE,
                        isEnabled: !e
                    })
                }, 1e3);
                return l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.FormDivider, {
                        className: V.divider
                    }), (0, a.jsxs)("div", {
                        className: V.setupContainer,
                        children: [(0, a.jsx)(d.FormSwitch, {
                            value: _,
                            onChange: T,
                            className: V.switchItem,
                            disabled: !c,
                            hideBorder: !0,
                            children: (0, a.jsxs)("div", {
                                className: V.switchItemTextContent,
                                children: [(0, a.jsx)(d.Text, {
                                    color: "header-primary",
                                    variant: "text-md/semibold",
                                    children: H.default.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
                                }), (0, a.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: H.default.Messages.GUILD_SETTINGS_REQ_MFA_BODY
                                })]
                            })
                        }), E && (0, a.jsx)(h.default, {
                            messageType: h.HelpMessageTypes.INFO,
                            textVariant: "text-xs/normal",
                            children: H.default.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
                                onClick: function() {
                                    u.default.open(F.UserSettingsSections.ACCOUNT)
                                }
                            })
                        })]
                    })]
                }) : null
            }

            function X() {
                var e;
                let {
                    guild: t,
                    mfaLevel: s
                } = (0, o.useStateFromStoresObject)([j.default], () => j.default.getProps(), []), n = (0, o.useStateFromStores)([C.default], () => C.default.enabled, []), {
                    showAlertMode: l
                } = (0, S.useGuildAlertModeEnabled)(null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "");
                return null == t ? null : n ? (0, a.jsx)(c.default, {}) : (0, a.jsxs)(d.FormSection, {
                    title: H.default.Messages.SAFETY_SETUP,
                    tag: d.FormTitleTags.H1,
                    titleClassName: V.headerContainer,
                    children: [(0, a.jsx)(W, {
                        guild: t
                    }), (0, a.jsx)(w, {
                        guild: t
                    }), (0, a.jsx)(z, {
                        guild: t,
                        mfaLevel: s
                    }), (0, a.jsx)(Y, {
                        guild: t
                    }), l ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(d.FormDivider, {
                            className: V.divider
                        }), (0, a.jsx)("div", {
                            className: i(V.setupContainer),
                            children: (0, a.jsx)(y.RaidAlertsSection, {
                                guild: t
                            })
                        })]
                    }) : (0, a.jsx)(k, {
                        guild: t
                    })]
                })
            }