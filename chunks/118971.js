            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eR
                }
            }), n("424973"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("917351"),
                l = n.n(i),
                r = n("907002"),
                o = n("446674"),
                u = n("151426"),
                d = n("862337"),
                c = n("77078"),
                E = n("913144"),
                f = n("272030"),
                _ = n("366634"),
                h = n("241845"),
                C = n("656464"),
                T = n("84339"),
                I = n("614175"),
                S = n("180065"),
                N = n("768613"),
                A = n("812204"),
                m = n("685665"),
                p = n("619935"),
                g = n("731681"),
                R = n("185314"),
                O = n("453910"),
                L = n("862853"),
                v = n("10641"),
                M = n("509802"),
                P = n("149362"),
                D = n("145067"),
                y = n("580362"),
                x = n("754707"),
                b = n("93877"),
                U = n("167790"),
                G = n("81732"),
                j = n("518953"),
                k = n("699209"),
                w = n("341563"),
                F = n("240239"),
                B = n("6895"),
                H = n("817963"),
                V = n("1501"),
                Y = n("689275"),
                W = n("12896"),
                K = n("612246"),
                z = n("5667"),
                q = n("161778"),
                Q = n("42203"),
                Z = n("350522"),
                X = n("162805"),
                J = n("341542"),
                $ = n("923959"),
                ee = n("525065"),
                et = n("305961"),
                en = n("778588"),
                ea = n("957255"),
                es = n("945956"),
                ei = n("568307"),
                el = n("697218"),
                er = n("719923"),
                eo = n("197881"),
                eu = n("120817"),
                ed = n("951568"),
                ec = n("637667"),
                eE = n("828931"),
                ef = n("89956"),
                e_ = n("421595"),
                eh = n("49111"),
                eC = n("427474"),
                eT = n("994428"),
                eI = n("695838"),
                eS = n("782340"),
                eN = n("706904");
            let eA = 64,
                em = "server-settings",
                ep = {
                    origin: {
                        x: -8,
                        y: -48
                    },
                    targetWidth: 40,
                    targetHeight: 40,
                    offset: {
                        x: 0,
                        y: 0
                    }
                };
            class eg extends s.PureComponent {
                static getDerivedStateFromProps(e) {
                    let {
                        guild: t,
                        hasChannelNotice: n
                    } = e;
                    return null == t || null == t.banner || n ? {
                        renderBanner: !1,
                        bannerVisible: !1
                    } : null
                }
                componentDidMount() {
                    var e;
                    this.setAnimatedValue(0), E.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = V.default.addRouteChangeListener(this.handleHistoryChange);
                    let {
                        location: t
                    } = V.default.getHistory();
                    (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1e3, () => this.setState({
                        shouldShowSubscribeTooltip: !0
                    }))
                }
                componentWillUnmount() {
                    this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), E.default.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices)
                }
                getGuildBannerHash() {
                    let {
                        guild: e,
                        hasChannelNotice: t
                    } = this.props;
                    return null == e || t ? null : e.banner
                }
                renderGuildHeaderNotices(e) {
                    let {
                        showGuildTemplateDirtyTooltip: t,
                        showGuildHeaderTutorial: n,
                        anyLayerOpen: s
                    } = this.props, {
                        shouldShowSubscribeTooltip: i
                    } = this.state;
                    if (n) return (0, a.jsx)("div", {
                        onClick: t => e ? null : t.stopPropagation(),
                        children: (0, a.jsx)(W.default, {
                            tutorialId: em,
                            position: "bottom",
                            inlineSpecs: ep,
                            children: this.renderGuildHeaderDropdownButton(e)
                        })
                    });
                    if (t) return (0, a.jsx)(c.Tooltip, {
                        forceOpen: !0,
                        color: c.TooltipColors.BRAND,
                        position: "bottom",
                        shouldShow: !e && !s,
                        text: eS.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
                        "aria-label": eS.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
                        children: () => this.renderGuildHeaderDropdownButton(e)
                    });
                    if (!s && !e) return i ? (0, a.jsx)(c.Popout, {
                        renderPopout: () => (0, a.jsx)("div", {
                            onClick: e => e.stopPropagation(),
                            children: (0, a.jsx)(z.default, {
                                header: eS.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
                                content: eS.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
                                buttonCTA: eS.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
                                onClick: this.handleCloseSubscribeTooltip
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: c.Popout.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => this.renderGuildHeaderDropdownButton(e)
                    }) : this.renderGuildHeaderUpsellPopout(e);
                    return this.renderGuildHeaderDropdownButton(e)
                }
                renderGuildHeader(e) {
                    let {
                        guild: t,
                        isHeaderPopoutOpen: n,
                        showGuildHeaderTutorial: s,
                        showGuildTemplateDirtyTooltip: i,
                        isGuildHeaderDismissibleTooltipShown: l,
                        HeaderAnalyticsLocationProvider: r
                    } = this.props, {
                        controller: o,
                        renderBanner: u,
                        bannerVisible: d,
                        bannerVisibleHeight: E,
                        communityInfoVisible: f
                    } = this.state, _ = s || i || l;
                    return null == t ? null : (0, a.jsx)(r, {
                        children: (0, a.jsx)(c.LazyPopout, {
                            renderPopout: this.renderMenuPopout,
                            position: "bottom",
                            align: "center",
                            animation: c.Popout.Animation.SCALE,
                            shouldShow: n,
                            onRequestClose: () => {
                                (0, D.showGuildHeaderPopout)(!1)
                            },
                            children: s => {
                                let {
                                    onClick: i,
                                    ...l
                                } = s;
                                return (0, a.jsx)(ec.default, {
                                    guild: t,
                                    controller: o,
                                    renderBanner: u,
                                    hasSubheader: e,
                                    bannerVisible: d,
                                    communityInfoVisible: f,
                                    guildBanner: this.getGuildBannerHash(),
                                    onClick: this.handleHeaderMenuToggle,
                                    onContextMenu: this.handleHeaderContextMenu,
                                    disableBannerAnimation: _,
                                    animationOverlayHeight: E,
                                    ...l,
                                    children: this.renderGuildHeaderNotices(n)
                                })
                            }
                        })
                    })
                }
                setAnimatedValue(e) {
                    let {
                        guild: t
                    } = this.props, n = null != this.getGuildBannerHash(), a = null == t ? void 0 : t.hasCommunityInfoSubheader();
                    null != t && (n || a) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e))
                }
                setAnimatedValueForBanner(e) {
                    let {
                        renderBanner: t,
                        communityInfoVisible: n,
                        bannerVisible: a,
                        bannerVisibleHeight: s,
                        controller: i
                    } = this.state;
                    (e >= eA && a || e < eA && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
                        renderBanner: t,
                        bannerVisible: a,
                        bannerVisibleHeight: s,
                        communityInfoVisible: n
                    }), i.update({
                        value: Math.min(1, Math.max(0, 1 - e / 88)),
                        immediate: !0
                    }).start()
                }
                setAnimatedValueForGuildInfo(e) {
                    let {
                        communityInfoVisible: t,
                        controller: n
                    } = this.state;
                    (e >= 20 && t || e < 20 && !t) && (t = !t), t !== this.state.communityInfoVisible && this.setState({
                        communityInfoVisible: t
                    }), n.update({
                        value: Math.min(1, Math.max(0, 1 - e / 20)),
                        immediate: !0
                    }).start()
                }
                renderChannelList() {
                    let {
                        isUnavailable: e,
                        guild: t,
                        selectedChannel: n,
                        enableStudyGroup: s,
                        ...i
                    } = this.props;
                    if (e || null == t) return (0, a.jsx)(e_.default, {
                        withBannerPadding: null != t && null != this.getGuildBannerHash()
                    });
                    {
                        if (t.hasFeature(eh.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
                            className: eN.hubContainer,
                            children: (0, a.jsx)(F.default, {
                                guild: t,
                                channel: null != n ? n : $.default.getDefaultChannel(t.id)
                            })
                        });
                        let e = t.id === eI.FAVORITES_RAW_GUILD_ID ? eu.FavoritesChannelList : eu.GuildChannelList;
                        return (0, a.jsx)(e, {
                            guild: t,
                            ...i,
                            guildBanner: this.getGuildBannerHash(),
                            hasGuildSubheader: this.state.hasGuildSubheader,
                            onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
                        })
                    }
                }
                renderFooter() {
                    let {
                        selectedChannelId: e,
                        shouldRenderBashOutCoachMark: t,
                        shouldRenderGarticPhoneCoachMark: n,
                        shouldRenderActivitiesGameNightCoachMark: s,
                        isEligibleForClipsPremiumEarlyAccessCoachmark: i,
                        showKrunkerStrikeCoachmark: l
                    } = this.props, r = [];
                    return t && r.push(u.DismissibleContent.BASH_OUT_COACH_MARK), n && r.push(u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE), s && r.push(u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT), i && r.push(u.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK), l && r.push(u.DismissibleContent.KRUNKER_STRIKE_COACHMARK), (0, a.jsx)(M.default, {
                        contentTypes: r,
                        children: t => {
                            let {
                                visibleContent: n,
                                markAsDismissed: s
                            } = t;
                            switch (n) {
                                case u.DismissibleContent.BASH_OUT_COACH_MARK:
                                    return (0, a.jsx)(ed.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: ed.TutorialType.BASH_OUT
                                    });
                                case u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE:
                                    return (0, a.jsx)(ed.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: ed.TutorialType.GARTIC_PHONE
                                    });
                                case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
                                    return (0, a.jsx)(ed.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: ed.TutorialType.GAME_NIGHT
                                    });
                                case u.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK:
                                    return (0, a.jsx)(R.default, {
                                        markAsDismissed: s
                                    });
                                case u.DismissibleContent.KRUNKER_STRIKE_COACHMARK:
                                    return (0, a.jsx)(ed.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: ed.TutorialType.KRUNKER_STRIKE
                                    });
                                default:
                                    return (0, a.jsx)(a.Fragment, {})
                            }
                        }
                    })
                }
                render() {
                    let {
                        guild: e,
                        FooterAnalyticsLocationProvider: t
                    } = this.props;
                    return (0, a.jsxs)("nav", {
                        className: eN.container,
                        onContextMenu: this.handleContextMenu,
                        "aria-label": eS.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
                            guildName: null != e ? e.toString() : ""
                        }),
                        children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(ef.default, {
                            guild: e,
                            setHasSubheader: e => this.setState({
                                hasGuildSubheader: e
                            })
                        }), this.renderChannelList(), (0, a.jsx)(t, {
                            children: this.renderFooter()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.historyUnlisten = () => {}, this.showTimeout = new d.Timeout, this.state = {
                        controller: new r.Controller({
                            value: 1,
                            immediate: !0
                        }),
                        renderBanner: !1,
                        bannerVisible: !1,
                        communityInfoVisible: !1,
                        shouldShowSubscribeTooltip: !1,
                        bannerVisibleHeight: 88,
                        hasGuildSubheader: !1
                    }, this.handleHistoryChange = e => {
                        null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1e3, () => this.setState({
                            shouldShowSubscribeTooltip: !0
                        }))
                    }, this.handleHeaderMenuToggle = e => {
                        let {
                            isHeaderPopoutOpen: t
                        } = this.props;
                        e.stopPropagation(), (0, D.showGuildHeaderPopout)(!t), this.closeAllHeaderNotices()
                    }, this.handleContextMenu = e => {
                        let {
                            guild: t
                        } = this.props;
                        null != t && (0, f.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("358060").then(n.bind(n, "358060"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                guild: t
                            })
                        })
                    }, this.handleHeaderContextMenu = e => {
                        let {
                            guild: t
                        } = this.props;
                        null != t && (0, f.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("374705").then(n.bind(n, "374705"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                guild: t
                            })
                        })
                    }, this.closeAllHeaderNotices = () => {
                        this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip()
                    }, this.handleCloseStudentHubPrivacySettingsTooltip = () => {
                        var e;
                        let t = (0, v.isDismissibleContentDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                            n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eh.GuildFeatures.HUB);
                        !t && n && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
                            dismissAction: eT.ContentDismissActionType.AUTO
                        })
                    }, this.handleCloseSubscribeTooltip = () => {
                        this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({
                            shouldShowSubscribeTooltip: !1
                        })
                    }, this.handleCloseTemplateDirtyTooltip = () => {
                        let {
                            guild: e,
                            showGuildTemplateDirtyTooltip: t
                        } = this.props;
                        null != e && t && G.default.hideGuildTemplateDirtyTooltip(e.id)
                    }, this.renderMenuPopout = async () => {
                        let {
                            default: e
                        } = await n.el("992996").then(n.bind(n, "992996"));
                        return t => {
                            let {
                                closePopout: n
                            } = t, {
                                guild: s
                            } = this.props;
                            return null != s && (0, a.jsx)(e, {
                                onClose: n,
                                guild: s
                            })
                        }
                    }, this.renderGuildHeaderUpsellPopout = e => {
                        let {
                            showGuildBoostingProgressBarUpsell: t,
                            showGuildBoostingProgressBarSizeUpsell: n,
                            showRoleSubscriptionUpsell: s,
                            showDiscoveryTooltip: i,
                            showInviteSplashUpsell: l,
                            showDiscoveryLandingPageSettingsUpsell: r,
                            showHubPrivacySettingsTooltip: o,
                            showActiveThreadsNotice: d,
                            showGuildSoundboardPermissionUpsell: c,
                            showMediaChannelUpsell: E,
                            showTierTemplatesUpsell: f,
                            showInventoryGuildSettingsRollbackModminCoachmark: _,
                            guild: h,
                            theme: C
                        } = this.props;
                        if (null == h) return this.renderGuildHeaderDropdownButton(e);
                        let T = [];
                        return (o && T.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && T.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && T.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && T.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && T.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && T.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && T.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), i && T.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && T.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === T.length) ? this.renderGuildHeaderDropdownButton(e) : (E && T.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), f && T.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), _ && T.push(u.DismissibleContent.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK), (0, a.jsx)(eE.default, {
                            contentTypes: T,
                            theme: C,
                            guild: h,
                            renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                        }))
                    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(_.default, {
                        open: e,
                        className: eN.dropdownButton
                    }), this.pinBannerOrGuildInfo = e => {
                        let {
                            scrollTop: t
                        } = e;
                        this.setAnimatedValue(t)
                    }
                }
            }

            function eR(e) {
                var t;
                let {
                    guildId: n,
                    hideSelectedChannel: i,
                    selectedChannelId: r
                } = e, d = (0, o.useStateFromStores)([et.default], () => et.default.getGuild(n));
                (0, h.useGlobalTriggerDebugging)(n);
                let E = (0, P.default)(n),
                    f = (0, o.useStateFromStores)([X.default], () => X.default.getGuildDimensions(n).scrollTo),
                    _ = (0, o.useStateFromStores)([es.default], () => es.default.getChannelId()),
                    [R, M, G] = (0, o.useStateFromStoresArray)([ea.default], () => [ea.default.can(eh.Permissions.MANAGE_GUILD, d), ea.default.can(eh.Permissions.MANAGE_ROLES, d), ea.default.can(eh.Permissions.MANAGE_THREADS, d)]),
                    F = (0, o.useStateFromStores)([J.default], () => J.default.isUnavailable(n)),
                    V = (0, o.useStateFromStores)([el.default], () => el.default.getCurrentUser()),
                    W = (0, o.useStateFromStores)([q.default], () => q.default.darkSidebar ? eh.ThemeTypes.DARK : q.default.theme),
                    {
                        enableStudyGroup: z
                    } = (0, w.useHubStudyGroupExperiment)(d),
                    $ = (0, L.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
                    [eu, ed] = s.useState(!$),
                    ec = (0, T.default)(n),
                    {
                        AnalyticsLocationProvider: eE
                    } = (0, m.default)(A.default.GUILD_HEADER),
                    {
                        AnalyticsLocationProvider: ef
                    } = (0, m.default)(A.default.GUILD_CHANNEL_LIST_FOOTER);
                s.useEffect(() => {
                    n !== ec && ed(!$)
                }, [n, ec, $]);
                let [e_, eI] = (0, L.default)(e => [eC.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eT.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eS = (0, y.useIsGuildDismissibleContentChannelNoticeShown)(n), eN = (0, g.default)(d), eA = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), ep = (0, o.useStateFromStores)([en.default], () => en.default.hasLayers()), eR = (0, o.useStateFromStores)([K.default], () => K.default.shouldShow(em)), eO = R && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !eo.ProcessArgs.isDisallowPopupsSet(), eL = (0, o.useStateFromStores)([ee.default], () => ee.default.getMemberCount(n)), ev = R && null != eL && eL >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !eo.ProcessArgs.isDisallowPopupsSet(), eM = M && null != d && (d.hasFeature(eh.GuildFeatures.COMMUNITY) || null != eL && eL > 50), eP = (0, U.default)(n), eD = (0, O.useLowerMemberCountRequirements)(n), ey = (null == d ? void 0 : d.hasFeature(eh.GuildFeatures.HUB)) === !0, ex = R && (null == d ? void 0 : d.hasFeature(eh.GuildFeatures.DISCOVERABLE)) === !0, eb = (0, p.useBlockedPaymentsConfig)(), eU = (R || (null == d ? void 0 : d.premiumTier) === eh.BoostedGuildTiers.NONE) && !eo.ProcessArgs.isDisallowPopupsSet() && !eb, eG = (0, o.useStateFromStores)([j.default, en.default], () => null != d && null != V && R && !en.default.hasLayers() && j.default.shouldShowGuildTemplateDirtyTooltip(n)), ej = (0, o.useStateFromStores)([Q.default], () => Q.default.getChannel(r)), {
                    isPopoutOpen: ek
                } = (0, D.useGuildHeaderPopoutStore)(), ew = null !== (t = null == d ? void 0 : d.hasFeature(eh.GuildFeatures.COMMUNITY)) && void 0 !== t && t, eF = (0, o.useStateFromStores)([Y.default], () => !l.isEmpty(Y.default.getThreadsForGuild(n))), {
                    enabled: eB
                } = N.BashOutCoachMarkExperiment.useExperiment({
                    location: "91c8a9_2"
                }, {
                    autoTrackExposure: !0
                }), eH = er.default.canUsePremiumActivities(V), eV = er.default.isNewUser(V), eY = eu && eB && eH, eW = eu && !eV, {
                    enabled: eK
                } = S.ActivityCoachMarkGarticPhoneExperiment.useExperiment({
                    location: "91c8a9_3"
                }, {
                    autoTrackExposure: !0
                }), ez = eu && eK, {
                    enabled: eq
                } = I.ActivitiesGameNightExperiment.useExperiment({
                    location: "91c8a9_4"
                }, {
                    autoTrackExposure: !0
                }), eQ = eu && eq, eZ = (0, o.useStateFromStores)([ei.default], () => ei.default.getVisibleGame()), eX = (0, o.useStateFromStores)([Z.default], () => Z.default.hasConsented(eh.Consents.PERSONALIZATION));
                (0, x.default)(d);
                let eJ = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
                    e$ = (0, B.default)(n),
                    e0 = (0, b.default)(n),
                    e1 = (0, H.useShouldShowInventoryGuildSettingsCoachmark)(d),
                    {
                        enableHangStatus: e2
                    } = k.HangStatusExperiment.useExperiment({
                        guildId: n,
                        location: "GuildSidebar"
                    }),
                    e4 = (0, C.useShowKrunkerStrikeCoachmark)();
                return (0, a.jsx)(eg, {
                    guildId: n,
                    hideSelectedChannel: i,
                    guild: d,
                    scrollToChannel: f,
                    selectedChannelId: i ? null : r,
                    selectedChannel: ej,
                    selectedVoiceChannelId: _,
                    voiceStates: E,
                    isUnavailable: F,
                    theme: W,
                    user: V,
                    hasChannelNotice: null != eN || e_ || eS,
                    anyLayerOpen: eA || ep,
                    showGuildBoostingProgressBarUpsell: eO,
                    showGuildBoostingProgressBarSizeUpsell: ev,
                    showInviteSplashUpsell: eU,
                    showDiscoveryLandingPageSettingsUpsell: ex,
                    showGuildHeaderTutorial: eR,
                    showGuildTemplateDirtyTooltip: eG,
                    showRoleSubscriptionUpsell: eP,
                    showDiscoveryTooltip: eD,
                    showHubPrivacySettingsTooltip: ey,
                    showNewUnreadsBar: ew,
                    showActiveThreadsNotice: G && null != eL && eL >= 200 && eF,
                    showGuildSoundboardPermissionUpsell: eM,
                    showMediaChannelUpsell: e$,
                    showInventoryGuildSettingsRollbackModminCoachmark: e1,
                    showTierTemplatesUpsell: e0,
                    isHeaderPopoutOpen: ek,
                    enableStudyGroup: z,
                    isGuildHeaderDismissibleTooltipShown: eI,
                    canShowCoachMarkAtBottom: eu,
                    HeaderAnalyticsLocationProvider: eE,
                    FooterAnalyticsLocationProvider: ef,
                    shouldRenderBashOutCoachMark: eY,
                    shouldRenderGarticPhoneCoachMark: ez,
                    shouldRenderActivitiesGameNightCoachMark: eQ,
                    isEligibleForClipsPremiumEarlyAccessCoachmark: null != eZ && eX,
                    isTutorialHighlightDismissed: eJ,
                    shouldRenderBurstCoachmark: eW,
                    enableHangStatus: e2,
                    showKrunkerStrikeCoachmark: e4
                })
            }