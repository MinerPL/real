            "use strict";
            s.r(t), s.d(t, {
                getGuildSettingsSections: function() {
                    return ew
                },
                default: function() {
                    return ez
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("759843"),
                i = s("446674"),
                r = s("151426"),
                o = s("77078"),
                d = s("54239"),
                u = s("800751"),
                c = s("534291"),
                E = s("812204"),
                _ = s("716241"),
                T = s("685665"),
                I = s("412707"),
                S = s("646186"),
                N = s("7331"),
                g = s("736271"),
                f = s("283167"),
                A = s("10641"),
                L = s("298878"),
                m = s("184890"),
                C = s("773372"),
                O = s("348934"),
                h = s("329606"),
                R = s("685829"),
                D = s("863636"),
                M = s("380710"),
                G = s("347895"),
                x = s("233706"),
                p = s("287883"),
                U = s("883206"),
                v = s("808388"),
                j = s("65722"),
                P = s("432153"),
                y = s("922835"),
                b = s("46166"),
                B = s("883069"),
                F = s("569808"),
                H = s("269596"),
                V = s("977169"),
                k = s("161778"),
                w = s("223170"),
                Y = s("478964"),
                K = s("59811"),
                W = s("628624"),
                z = s("923959"),
                X = s("525065"),
                Z = s("957255"),
                J = s("697218"),
                Q = s("228220"),
                q = s("659500"),
                $ = s("199938"),
                ee = s("961394"),
                et = s("592407"),
                es = s("738216"),
                ea = s("692541"),
                en = s("952943"),
                el = s("531493"),
                ei = s("900938"),
                er = s("914581"),
                eo = s("137933"),
                ed = s("397947"),
                eu = s("259483"),
                ec = s("867928"),
                eE = s("648704"),
                e_ = s("887754"),
                eT = s("614840"),
                eI = s("902273"),
                eS = s("721822"),
                eN = s("925538"),
                eg = s("631011"),
                ef = s("191329"),
                eA = s("851545"),
                eL = s("527042"),
                em = s("977887"),
                eC = s("912477"),
                eO = s("969741"),
                eh = s("849823"),
                eR = s("788831"),
                eD = s("201461"),
                eM = s("817674"),
                eG = s("187975"),
                ex = s("473126"),
                ep = s("582372"),
                eU = s("789123"),
                ev = s("78730"),
                ej = s("757120"),
                eP = s("310490"),
                ey = s("49111"),
                eb = s("533613"),
                eB = s("69741"),
                eF = s("782340"),
                eH = s("160157");

            function eV(e) {
                return "" !== e.toString() ? e.toString() : eF.default.Messages.SERVER_SETTINGS
            }

            function ek(e) {
                let {
                    guild: t,
                    canManageGuild: n,
                    canViewAuditLog: i,
                    canViewAuditLogV2: u,
                    canManageRoles: E,
                    canManageGuildExpressions: _,
                    canManageWebhooks: T,
                    canManageBans: f,
                    canAccessMembersPage: m,
                    canViewGuildAnalytics: R,
                    isOwner: G,
                    isOwnerWithRequiredMfaLevel: B,
                    showDirtyGuildTemplateIndicator: F,
                    memberCount: V,
                    isGuildAuditLogV2Enabled: k,
                    showAccessRate: w,
                    onboardingStep: K,
                    onboardingEnabled: z,
                    welcomeScreenEmpty: X,
                    guildMetadata: Z,
                    section: $
                } = e, es = () => (0, j.canSeeGuildRoleSubscriptionSettings)({
                    guild: t,
                    isOwner: G,
                    canManageGuildRoleSubscriptions: (0, j.canManageGuildRoleSubscriptions)(t),
                    isMonetizationWaitlistEnabledForGuild: (0, N.isMonetizationWaitlistEnabledForGuild)(t.id),
                    isGuildEligibleForRoleSubscriptions: (0, v.isGuildEligibleForRoleSubscriptions)(t.id),
                    isExpeditedMonetizationOnboardingGuild: (0, N.isExpeditedMonetizationOnboardingGuild)(t),
                    isUserInCreatorMonetizationEligibleCountry: (0, N.isUserInCreatorMonetizationEligibleCountry)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, g.shouldRestrictUpdatingCreatorMonetizationSettings)(t.id)
                }), ea = (0, p.isGuildEligibleForGuildProducts)(t.id, "guild_settings"), ek = !1 === t.hasFeature(ey.GuildFeatures.CREATOR_MONETIZABLE) && !1 === t.hasFeature(ey.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL), ew = ea && ek ? {
                    label: (0, a.jsx)("div", {
                        className: eH.roleSubLabel,
                        children: eF.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
                    }),
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ENABLE_MONETIZATION_TAB_TITLE
                } : {
                    label: (0, a.jsx)("div", {
                        className: eH.roleSubLabel,
                        children: eF.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                    }),
                    ariaLabel: eF.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                };
                return [{
                    section: c.SectionTypes.HEADER,
                    label: eV(t)
                }, {
                    section: ey.GuildSettingsSections.OVERVIEW,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_OVERVIEW,
                    label: eF.default.Messages.OVERVIEW,
                    ariaLabel: eF.default.Messages.OVERVIEW,
                    element: eR.default,
                    notice: {
                        stores: [ei.default],
                        element: eR.GuildSettingsOverviewNotice
                    }
                }, {
                    section: ey.GuildSettingsSections.ROLES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_ROLES,
                    label: eF.default.Messages.ROLES,
                    element: e_.default,
                    type: c.ContentTypes.MINIMAL,
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ROLE_ICON_SIDEBAR_NEW_ARIA_LABEL,
                    notice: {
                        stores: [el.default],
                        element: e_.GuildSettingsRolesNotice
                    },
                    predicate: () => E
                }, {
                    section: ey.GuildSettingsSections.EMOJI,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_EMOJI,
                    label: eF.default.Messages.EMOJI,
                    element: eL.default,
                    predicate: () => _
                }, {
                    section: ey.GuildSettingsSections.STICKERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_STICKERS,
                    label: eF.default.Messages.GUILD_SETTINGS_STICKERS,
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_STICKERS,
                    element: ep.default,
                    predicate: () => _
                }, {
                    section: ey.GuildSettingsSections.SOUNDBOARD,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SOUNDBOARD,
                    label: eF.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
                    element: ex.default,
                    predicate: () => _
                }, {
                    section: ey.GuildSettingsSections.WIDGET,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_WIDGET,
                    label: eF.default.Messages.WIDGET,
                    element: eP.default,
                    predicate: () => n
                }, {
                    section: ey.GuildSettingsSections.GUILD_TEMPLATES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_TEMPLATE,
                    label: (0, a.jsx)(ev.default, {
                        showDirtyIndicator: F
                    }),
                    ariaLabel: eF.default.Messages.GUILD_TEMPLATES,
                    element: eU.default,
                    notice: {
                        stores: [eU.GuildSettingsTemplateMetadataStore],
                        element: eU.GuildSettingsTemplateNotice
                    },
                    predicate: () => n
                }, {
                    section: ey.GuildSettingsSections.VANITY_URL,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_VANITY_URL,
                    label: eF.default.Messages.VANITY_URL,
                    element: ej.default,
                    notice: {
                        stores: [er.default],
                        element: ej.GuildSettingsVanityURLNotice
                    },
                    predicate: () => n
                }, {
                    section: c.SectionTypes.DIVIDER,
                    predicate: () => n || T
                }, {
                    section: c.SectionTypes.HEADER,
                    label: eF.default.Messages.APPS,
                    predicate: () => n || T
                }, {
                    section: ey.GuildSettingsSections.INTEGRATIONS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INTEGRATION,
                    label: eF.default.Messages.INTEGRATIONS,
                    ariaLabel: eF.default.Messages.INTEGRATIONS,
                    element: em.default,
                    notice: {
                        stores: [en.default, ei.default],
                        element: em.GuildSettingsIntegrationsNotice
                    },
                    predicate: () => n || T
                }, {
                    section: ey.GuildSettingsSections.APP_DIRECTORY,
                    label: eF.default.Messages.APP_DIRECTORY,
                    ariaLabel: eF.default.Messages.APP_DIRECTORY,
                    onClick() {
                        (0, S.goToAppDirectory)({
                            guildId: t.id,
                            entrypoint: {
                                name: I.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS,
                                guildSettingsSection: $
                            }
                        }), (0, d.popLayer)()
                    }
                }, {
                    section: c.SectionTypes.DIVIDER,
                    predicate: () => n
                }, {
                    section: c.SectionTypes.HEADER,
                    label: eF.default.Messages.MODERATION,
                    predicate: () => n
                }, {
                    section: ey.GuildSettingsSections.SAFETY,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_SAFETY,
                    label: eF.default.Messages.SAFETY_SETUP,
                    ariaLabel: eF.default.Messages.SAFETY_SETUP,
                    element: eT.default,
                    newIndicatorDismissibleContentTypes: [r.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY],
                    predicate: () => n && t.hasFeature(ey.GuildFeatures.COMMUNITY)
                }, {
                    section: ey.GuildSettingsSections.MODERATION,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_MODERATION,
                    label: eF.default.Messages.SAFETY_SETUP,
                    element: eM.default,
                    predicate: () => n && !t.hasFeature(ey.GuildFeatures.COMMUNITY)
                }, {
                    section: ey.GuildSettingsSections.GUILD_AUTOMOD,
                    label: (0, a.jsx)("div", {
                        className: eH.landingPageTabLink,
                        children: eF.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE
                    }),
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
                    element: h.default,
                    newIndicatorDismissibleContentTypes: null,
                    predicate: () => !t.hasFeature(ey.GuildFeatures.COMMUNITY) && ((0, O.canCurrentUserManageAutomod)(t.id) || (0, O.canCurrentUserManageMessageFilters)(t.id))
                }, {
                    section: ey.GuildSettingsSections.AUDIT_LOG,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG,
                    label: eF.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
                    element: eo.default,
                    type: c.ContentTypes.CUSTOM,
                    predicate: () => i
                }, {
                    section: ey.GuildSettingsSections.AUDIT_LOG_V2,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_AUDIT_LOG_V2,
                    label: eF.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG,
                    element: C.default,
                    type: c.ContentTypes.CUSTOM,
                    predicate: () => u && k
                }, {
                    section: ey.GuildSettingsSections.BANS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_BANS,
                    label: eF.default.Messages.BANS,
                    element: eS.default,
                    predicate: () => f
                }, {
                    section: c.SectionTypes.DIVIDER,
                    predicate: () => n || R
                }, {
                    section: c.SectionTypes.HEADER,
                    label: eF.default.Messages.COMMUNITY,
                    predicate: () => n || R
                }, {
                    section: ey.GuildSettingsSections.COMMUNITY,
                    impressionName: t.hasFeature(ey.GuildFeatures.COMMUNITY) ? l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_OVERVIEW : l.ImpressionNames.GUILD_SETTINGS_ENABLE_COMMUNITY,
                    label: t.hasFeature(ey.GuildFeatures.COMMUNITY) ? eF.default.Messages.OVERVIEW : eF.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
                    element: eN.default,
                    ariaLabel: t.hasFeature(ey.GuildFeatures.COMMUNITY) ? eF.default.Messages.OVERVIEW : eF.default.Messages.GUILD_SETTINGS_COMMUNITY_ENABLE_COMMUNITY,
                    newIndicator: !t.hasFeature(ey.GuildFeatures.COMMUNITY) && null != V && V >= eB.COMMUNITY_UPSELL_MINIMUM_GUILD_SIZE && H.default.hasHotspot(eb.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL),
                    notice: {
                        stores: [ei.default],
                        element: eN.GuildSettingsCommunityOverviewNotice
                    },
                    predicate: () => n
                }, {
                    section: ey.GuildSettingsSections.ONBOARDING,
                    label: eF.default.Messages.ONBOARDING,
                    element: eh.default,
                    ariaLabel: eF.default.Messages.ONBOARDING,
                    newIndicatorDismissibleContentTypes: z ? null : [r.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE],
                    notice: {
                        stores: [ed.default],
                        element: eE.default
                    },
                    predicate: () => (0, M.isGuildOnboardingSettingsAvailable)(t.id),
                    decoration: function(e, t) {
                        let {
                            homeSettingsEnabled: s
                        } = (0, x.getOnboardingHomeAdminExperiment)(e);
                        if (D.default.getEnabled(e)) return eF.default.Messages.GUILD_ONBOARDING_ON.toUpperCase();
                        if ((0, ec.isOnboardingWizardCompleted)(e)) return eF.default.Messages.GUILD_ONBOARDING_OFF.toUpperCase();
                        let a = eu.COMPLETABLE_ONBOARDING_STEPS.filter(e => !!s || e !== eu.GuildSettingsOnboardingPage.HOME_SETTINGS || !1),
                            n = a.findIndex(e => e === t);
                        if (-1 !== n) return eF.default.Messages.GUILD_ONBOARDING_SETUP_STEP_COUNTER.format({
                            count: n + 1,
                            total: a.length
                        })
                    }(t.id, K)
                }, {
                    section: ey.GuildSettingsSections.ANALYTICS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_ANALYTICS,
                    label: eF.default.Messages.SERVER_INSIGHTS,
                    ariaLabel: eF.default.Messages.SERVER_INSIGHTS,
                    element: eI.default,
                    newIndicator: H.default.hasHotspot(eb.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU),
                    newIndicatorDismissibleContentTypes: w ? [r.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW] : null,
                    predicate: () => R && t.hasFeature(ey.GuildFeatures.COMMUNITY)
                }, {
                    section: ey.GuildSettingsSections.DISCOVERY,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY,
                    label: eF.default.Messages.DISCOVERY,
                    element: ef.default,
                    notice: {
                        stores: [ei.default],
                        element: ef.GuildSettingsDiscoveryNotice
                    },
                    predicate: () => n && t.hasFeature(ey.GuildFeatures.COMMUNITY),
                    ariaLabel: t.hasFeature(ey.GuildFeatures.DISCOVERABLE) ? eF.default.Messages.DISCOVERY : eF.default.Messages.GUILD_SETTINGS_ENABLE_DISCOVERABLE
                }, {
                    section: ey.GuildSettingsSections.DISCOVERY_LANDING_PAGE,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_DISCOVERY_LANDING_PAGE,
                    label: (0, a.jsxs)("div", {
                        className: eH.landingPageTabLink,
                        children: [eF.default.Messages.DISCOVERY_LANDING_PAGE, " ", (0, a.jsx)(L.default, {})]
                    }),
                    ariaLabel: eF.default.Messages.DISCOVERY_LANDING_PAGE,
                    element: eA.default,
                    notice: {
                        stores: [ei.default],
                        element: eA.GuildSettingsDiscoveryLandingPageNotice
                    },
                    type: c.ContentTypes.CUSTOM,
                    predicate: () => n && (t.hasFeature(ey.GuildFeatures.DISCOVERABLE) || !!(null == Z ? void 0 : Z.isPublished))
                }, {
                    section: ey.GuildSettingsSections.COMMUNITY_WELCOME,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_COMMUNITY_WELCOME,
                    label: eF.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                    element: eg.default,
                    notice: {
                        stores: [Y.default],
                        element: W.default
                    },
                    predicate: () => n && t.hasFeature(ey.GuildFeatures.COMMUNITY) && !X && !t.hasFeature(ey.GuildFeatures.GUILD_SERVER_GUIDE)
                }, {
                    section: c.SectionTypes.DIVIDER,
                    predicate: es
                }, {
                    section: c.SectionTypes.HEADER,
                    label: eF.default.Messages.MONETIZATION,
                    predicate: es
                }, {
                    ...ew,
                    section: ey.GuildSettingsSections.ROLE_SUBSCRIPTIONS,
                    element: y.default,
                    type: c.ContentTypes.CUSTOM,
                    predicate: es,
                    newIndicatorDismissibleContentTypes: (0, P.isEligibleForNewBadge)(t) ? [r.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE] : null
                }, {
                    section: ey.GuildSettingsSections.GUILD_PRODUCTS,
                    label: eF.default.Messages.GUILD_PRODUCTS_TITLE,
                    ariaLabel: eF.default.Messages.GUILD_PRODUCTS_TITLE,
                    element: U.default,
                    predicate: () => es() && (0, p.isGuildEligibleForGuildProducts)(t.id, "guild_product_settings_predicate") && (0, v.hasEnabledMonetization)(t)
                }, {
                    section: ey.GuildSettingsSections.ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    impressionName: l.ImpressionNames.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_GUILD_SETTINGS,
                    newIndicator: 2022 === new Date().getFullYear(),
                    label: eF.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    ariaLabel: eF.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_STORE_PAGE,
                    element: b.default,
                    predicate: () => es() && (0, v.hasEnabledMonetization)(t)
                }, {
                    section: c.SectionTypes.DIVIDER
                }, {
                    section: ey.GuildSettingsSections.GUILD_PREMIUM,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_BOOST_STATUS,
                    label: eF.default.Messages.GUILD_PREMIUM,
                    ariaLabel: eF.default.Messages.GUILD_PREMIUM,
                    element: eD.default,
                    className: eH.serverBoostTabItem,
                    icon: (0, a.jsx)(eG.default, {
                        className: eH.icon
                    })
                }, {
                    section: c.SectionTypes.DIVIDER
                }, {
                    section: c.SectionTypes.HEADER,
                    label: eF.default.Messages.USER_MANAGEMENT
                }, {
                    section: ey.GuildSettingsSections.MEMBERS,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_MEMBERS,
                    label: (0, a.jsx)(eO.GuildSettingsMembersRow, {}),
                    ariaLabel: eF.default.Messages.MEMBERS,
                    element: eO.default,
                    type: c.ContentTypes.CUSTOM,
                    predicate: () => m
                }, {
                    section: ey.GuildSettingsSections.INSTANT_INVITES,
                    impressionName: l.ImpressionNames.GUILD_SETTINGS_INVITES,
                    label: eF.default.Messages.INVITES,
                    element: eC.default,
                    type: c.ContentTypes.CUSTOM,
                    predicate: () => n
                }, {
                    section: c.SectionTypes.DIVIDER,
                    predicate: () => B
                }, {
                    section: ey.GuildSettingsSections.DELETE,
                    onClick() {
                        let e = J.default.getCurrentUser();
                        if (null == e) return;
                        let n = t.toString(),
                            l = {
                                header: eF.default.Messages.DELETE_SERVER_TITLE.format({
                                    name: n
                                }),
                                confirmText: eF.default.Messages.DELETE_SERVER,
                                cancelText: eF.default.Messages.CANCEL,
                                onConfirm: () => {
                                    q.ComponentDispatch.subscribeOnce(ey.ComponentActions.LAYER_POP_COMPLETE, () => {
                                        et.default.deleteGuild(t.id, n).then(() => {
                                            if ((0, A.isDismissibleContentDismissed)(r.DismissibleContent.GUILD_DELETE_FEEDBACK)) return;
                                            ee.default.trackExposure({
                                                location: "e4be39_1"
                                            });
                                            let {
                                                showFeedback: e
                                            } = ee.default.getCurrentConfig({
                                                location: "e4be39_2"
                                            }, {
                                                autoTrackExposure: !1
                                            });
                                            e && (0, o.openModalLazy)(async () => {
                                                let {
                                                    default: e
                                                } = await s.el("56814").then(s.bind(s, "56814"));
                                                return s => (0, a.jsx)(e, {
                                                    ...s,
                                                    guildId: t.id
                                                })
                                            })
                                        })
                                    }), (0, d.popLayer)()
                                }
                            };
                        e.mfaEnabled ? (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
                            ...e,
                            ...l,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: eF.default.Messages.DELETE_SERVER_BODY.format({
                                    name: n
                                })
                            })
                        })) : (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("494078").then(s.bind(s, "494078"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                ...l,
                                validationText: n,
                                instructionText: eF.default.Messages.DELETE_SERVER_ENTER_NAME,
                                errorText: eF.default.Messages.DELETE_SERVER_INCORRECT_NAME,
                                children: eF.default.Messages.DELETE_SERVER_BODY.format({
                                    name: n
                                })
                            })
                        })
                    },
                    label: eF.default.Messages.DELETE_SERVER,
                    ariaLabel: eF.default.Messages.DELETE_SERVER,
                    icon: (0, a.jsx)(Q.default, {
                        width: 16,
                        height: 16
                    }),
                    predicate: () => B
                }]
            }

            function ew(e, t) {
                return ek({
                    channels: t,
                    showDirtyGuildTemplateIndicator: !1,
                    ...Z.default.getGuildPermissionProps(e),
                    isGuildAuditLogV2Enabled: !1,
                    showAccessRate: !1
                }).filter(e => {
                    let {
                        section: t
                    } = e;
                    return t !== c.SectionTypes.HEADER && t !== c.SectionTypes.DIVIDER
                }).filter(e => null == e.predicate || e.predicate())
            }

            function eY(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                _.default.trackWithMetadata(ey.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                    settings_type: "guild",
                    origin_pane: t,
                    destination_pane: e,
                    location: s
                })
            }
            let eK = {
                canManageGuild: !1,
                canManageChannels: !1,
                canManageRoles: !1,
                canManageBans: !1,
                canManageNicknames: !1,
                canManageGuildExpressions: !1,
                canViewAuditLog: !1,
                canViewAuditLogV2: !1,
                canManageWebhooks: !1,
                canAccessMembersPage: !1,
                canViewGuildAnalytics: !1,
                isOwner: !1,
                isOwnerWithRequiredMfaLevel: !1
            };
            class eW extends n.PureComponent {
                componentDidMount() {
                    eY(this.props.section, null, this.props.analyticsLocation)
                }
                componentWillUnmount() {
                    et.default.close()
                }
                componentDidUpdate(e) {
                    let {
                        section: t
                    } = e, {
                        section: s,
                        canManageGuild: a,
                        canManageRoles: n,
                        canManageBans: l,
                        canManageNicknames: i,
                        canManageGuildExpressions: r,
                        canViewAuditLog: o,
                        canViewAuditLogV2: u,
                        canManageWebhooks: c,
                        canAccessMembersPage: E,
                        canViewGuildAnalytics: _
                    } = this.props;
                    s !== t && eY(s, t), (!a && !n && !l && !i && !r && !o && !u && !E && !c || !o && s === ey.GuildSettingsSections.AUDIT_LOG || !u && s === ey.GuildSettingsSections.AUDIT_LOG_V2 || !n && s === ey.GuildSettingsSections.ROLES || !r && s === ey.GuildSettingsSections.EMOJI || !r && s === ey.GuildSettingsSections.STICKERS || !r && s === ey.GuildSettingsSections.SOUNDBOARD || !l && s === ey.GuildSettingsSections.BANS || !_ && s === ey.GuildSettingsSections.ANALYTICS || !E && s === ey.GuildSettingsSections.MEMBERS) && (0, d.popLayer)()
                }
                render() {
                    var e, t;
                    let {
                        theme: s,
                        sidebarTheme: n,
                        section: l,
                        guild: i,
                        channels: r,
                        canManageGuild: o,
                        canViewAuditLog: c,
                        canViewAuditLogV2: E,
                        canManageRoles: _,
                        canManageGuildExpressions: T,
                        canManageWebhooks: I,
                        canManageBans: S,
                        canAccessMembersPage: N,
                        canViewGuildAnalytics: g,
                        isOwner: f,
                        isOwnerWithRequiredMfaLevel: A,
                        showDirtyGuildTemplateIndicator: L,
                        memberCount: m,
                        isGuildAuditLogV2Enabled: C,
                        showAccessRate: O,
                        onboardingStep: h,
                        onboardingEnabled: R,
                        welcomeScreenEmpty: D,
                        guildMetadata: M
                    } = this.props;
                    if (null == i) return null;
                    let G = ek({
                            guild: i,
                            channels: r,
                            canManageGuild: o,
                            canViewAuditLog: c,
                            canViewAuditLogV2: E,
                            canManageRoles: _,
                            canManageGuildExpressions: T,
                            canManageWebhooks: I,
                            canManageBans: S,
                            canAccessMembersPage: N,
                            canViewGuildAnalytics: g,
                            isOwner: f,
                            isOwnerWithRequiredMfaLevel: A,
                            showDirtyGuildTemplateIndicator: L,
                            memberCount: m,
                            isGuildAuditLogV2Enabled: C,
                            showAccessRate: O,
                            onboardingStep: h,
                            onboardingEnabled: R,
                            welcomeScreenEmpty: D,
                            guildMetadata: M,
                            section: l
                        }),
                        x = (null === (t = G.find(e => e.section === l)) || void 0 === t ? void 0 : null === (e = t.predicate) || void 0 === e ? void 0 : e.call(t)) !== !1;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(u.default, {
                            theme: s,
                            sidebarTheme: n,
                            section: x && null != l ? l : ey.GuildSettingsSections.OVERVIEW,
                            onSetSection: et.default.setSection,
                            onClose: d.popLayer,
                            title: eV(i),
                            sections: G
                        }), (0, a.jsx)(V.ViewingRolesSettingsNotice, {
                            guildId: i.id
                        })]
                    })
                }
            }

            function ez() {
                var e, t;
                let {
                    guild: s,
                    section: l,
                    analyticsLocation: r,
                    guildMetadata: o,
                    isGuildMetadataLoaded: d
                } = (0, i.useStateFromStoresObject)([ei.default], () => ei.default.getProps()), {
                    AnalyticsLocationProvider: u
                } = (0, T.default)(E.default.GUILD_SETTINGS), c = (0, i.useStateFromStores)([k.default], () => k.default.theme), _ = (0, i.useStateFromStores)([k.default], () => k.default.darkSidebar ? ey.ThemeTypes.DARK : void 0), I = (0, i.useStateFromStores)([z.default], () => null != s ? z.default.getChannels(s.id).SELECTABLE : null, [s]), S = (0, i.useStateFromStoresObject)([Z.default], () => null != s ? Z.default.getGuildPermissionProps(s) : eK), N = null == s ? void 0 : s.id, g = (0, i.useStateFromStores)([Z.default], () => null != s && Z.default.canAccessGuildSettings(s)), A = null != s && (0, $.staffOnlyGuildSettingsAccess)(s.id), L = A || g, C = A || S.canViewGuildAnalytics, {
                    shouldFetchMemberInsights: O,
                    hasAccessRate: h
                } = (0, i.useStateFromStoresObject)([ea.default], () => ({
                    shouldFetchMemberInsights: null != s && ea.default.shouldFetchMemberInsights(s.id),
                    hasAccessRate: null != s && ea.default.getMemberInsights(s.id).hasAccessRate
                }));
                n.useEffect(() => {
                    !d && null != N && (0, f.fetchMetadataForGuild)(N)
                }, [d, N]), n.useEffect(() => {
                    L && C && O && null != N && (0, es.fetchMemberInsights)(N)
                }, [L, C, O, N]);
                let M = null !== (e = null == s ? void 0 : s.hasFeature(ey.GuildFeatures.COMMUNITY)) && void 0 !== e && e;
                n.useEffect(() => {
                    null != N && M && ((0, R.fetchOnboardingPrompts)(N), (0, w.fetchWelcomeScreen)(N))
                }, [N, M]);
                let {
                    homeSettingsEnabled: p
                } = (0, x.useOnboardingHomeAdminExperiment)(null != N ? N : "");
                n.useEffect(() => {
                    null != N && p && (0, G.fetchGuildHomeSettings)(N)
                }, [p, N]);
                let {
                    showAccessRate: U
                } = (0, $.useGuildAccessRateInsightExperiment)(null == s ? void 0 : s.id, !h || !C || !L), v = (0, i.useStateFromStores)([F.default], () => {
                    var e;
                    return (null == s ? void 0 : s.id) != null && (null === (e = F.default.getForGuild(s.id)) || void 0 === e ? void 0 : e.isDirty) === !0
                }, [s]), j = (0, i.useStateFromStores)([X.default], () => X.default.getMemberCount(null == s ? void 0 : s.id), [s]), P = (0, m.useGuildAuditLogV2Enabled)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "");
                n.useEffect(() => {
                    null != N && S.canManageGuild && B.default.loadTemplatesForGuild(N)
                }, [N, S.canManageGuild]), n.useEffect(() => {
                    !L && et.default.close()
                }, [L]);
                let y = (0, i.useStateFromStores)([ed.default], () => ed.default.getCurrentPage()),
                    b = (0, i.useStateFromStores)([D.default], () => null != N && D.default.getEnabled(N)),
                    H = (0, i.useStateFromStores)([K.default], () => null != N && K.default.isEmpty(N));
                return (0, a.jsx)(u, {
                    children: (0, a.jsx)(eW, {
                        guild: s,
                        section: l,
                        theme: c,
                        sidebarTheme: _,
                        channels: I,
                        showDirtyGuildTemplateIndicator: v,
                        analyticsLocation: r,
                        memberCount: j,
                        isGuildAuditLogV2Enabled: P,
                        ...S,
                        canViewGuildAnalytics: C,
                        showAccessRate: U,
                        onboardingStep: y,
                        onboardingEnabled: b,
                        welcomeScreenEmpty: H,
                        guildMetadata: o
                    })
                })
            }