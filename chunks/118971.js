            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eg
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
                p = n("685665"),
                m = n("619935"),
                g = n("731681"),
                R = n("185314"),
                O = n("453910"),
                L = n("862853"),
                v = n("10641"),
                M = n("384997"),
                P = n("149362"),
                D = n("145067"),
                y = n("754707"),
                x = n("93877"),
                b = n("167790"),
                U = n("81732"),
                G = n("518953"),
                j = n("699209"),
                k = n("341563"),
                w = n("240239"),
                F = n("6895"),
                B = n("817963"),
                H = n("1501"),
                V = n("689275"),
                Y = n("12896"),
                W = n("612246"),
                K = n("5667"),
                z = n("161778"),
                q = n("42203"),
                Q = n("350522"),
                Z = n("162805"),
                X = n("341542"),
                J = n("923959"),
                $ = n("525065"),
                ee = n("305961"),
                et = n("778588"),
                en = n("957255"),
                ea = n("945956"),
                es = n("568307"),
                ei = n("697218"),
                el = n("719923"),
                er = n("197881"),
                eo = n("120817"),
                eu = n("951568"),
                ed = n("637667"),
                ec = n("828931"),
                eE = n("89956"),
                ef = n("421595"),
                e_ = n("49111"),
                eh = n("427474"),
                eC = n("994428"),
                eT = n("695838"),
                eI = n("782340"),
                eS = n("706904");
            let eN = 64,
                eA = "server-settings",
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
            class em extends s.PureComponent {
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
                    this.setAnimatedValue(0), E.default.subscribe("LAYER_PUSH", this.closeAllHeaderNotices), this.historyUnlisten = H.default.addRouteChangeListener(this.handleHistoryChange);
                    let {
                        location: t
                    } = H.default.getHistory();
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
                        children: (0, a.jsx)(Y.default, {
                            tutorialId: eA,
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
                        text: eI.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
                        "aria-label": eI.default.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
                        children: () => this.renderGuildHeaderDropdownButton(e)
                    });
                    if (!s && !e) return i ? (0, a.jsx)(c.Popout, {
                        renderPopout: () => (0, a.jsx)("div", {
                            onClick: e => e.stopPropagation(),
                            children: (0, a.jsx)(K.default, {
                                header: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
                                content: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
                                buttonCTA: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
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
                                return (0, a.jsx)(ed.default, {
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
                    (e >= eN && a || e < eN && !a) && (a = !a), (e >= 88 && !t || e < 88 && t) && (t = !t), s = Math.max(88 - e, 0), n = a, (t !== this.state.renderBanner || a !== this.state.bannerVisible || s !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) && this.setState({
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
                    if (e || null == t) return (0, a.jsx)(ef.default, {
                        withBannerPadding: null != t && null != this.getGuildBannerHash()
                    });
                    {
                        if (t.hasFeature(e_.GuildFeatures.HUB) && !s) return (0, a.jsx)("div", {
                            className: eS.hubContainer,
                            children: (0, a.jsx)(w.default, {
                                guild: t,
                                channel: null != n ? n : J.default.getDefaultChannel(t.id)
                            })
                        });
                        let e = t.id === eT.FAVORITES_RAW_GUILD_ID ? eo.FavoritesChannelList : eo.GuildChannelList;
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
                                    return (0, a.jsx)(eu.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: eu.TutorialType.BASH_OUT
                                    });
                                case u.DismissibleContent.ACTIVITY_COACH_MARK_GARTIC_PHONE:
                                    return (0, a.jsx)(eu.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: eu.TutorialType.GARTIC_PHONE
                                    });
                                case u.DismissibleContent.ACTIVITIES_COACH_MARK_GAME_NIGHT:
                                    return (0, a.jsx)(eu.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: eu.TutorialType.GAME_NIGHT
                                    });
                                case u.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK:
                                    return (0, a.jsx)(R.default, {
                                        markAsDismissed: s
                                    });
                                case u.DismissibleContent.KRUNKER_STRIKE_COACHMARK:
                                    return (0, a.jsx)(eu.EmbeddedActivityTutorial, {
                                        channelId: null != e ? e : void 0,
                                        markAsDismissed: s,
                                        tutorialType: eu.TutorialType.KRUNKER_STRIKE
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
                        className: eS.container,
                        onContextMenu: this.handleContextMenu,
                        "aria-label": eI.default.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({
                            guildName: null != e ? e.toString() : ""
                        }),
                        children: [null != e && this.renderGuildHeader(this.state.hasGuildSubheader), null != e && (0, a.jsx)(eE.default, {
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
                            n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(e_.GuildFeatures.HUB);
                        !t && n && (0, v.markDismissibleContentAsDismissed)(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
                            dismissAction: eC.ContentDismissActionType.AUTO
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
                        null != e && t && U.default.hideGuildTemplateDirtyTooltip(e.id)
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
                        return (o && T.push(u.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && T.push(u.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && T.push(u.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && T.push(u.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), s && T.push(u.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && T.push(u.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && T.push(u.DismissibleContent.GUILD_HEADER_INVITE_SPLASH), i && T.push(u.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), r && T.push(u.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === T.length) ? this.renderGuildHeaderDropdownButton(e) : (E && T.push(u.DismissibleContent.MEDIA_CHANNEL_UPSELL), f && T.push(u.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL), _ && T.push(u.DismissibleContent.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK), (0, a.jsx)(ec.default, {
                            contentTypes: T,
                            theme: C,
                            guild: h,
                            renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                        }))
                    }, this.renderGuildHeaderDropdownButton = e => (0, a.jsx)(_.default, {
                        open: e,
                        className: eS.dropdownButton
                    }), this.pinBannerOrGuildInfo = e => {
                        let {
                            scrollTop: t
                        } = e;
                        this.setAnimatedValue(t)
                    }
                }
            }

            function eg(e) {
                var t;
                let {
                    guildId: n,
                    hideSelectedChannel: i,
                    selectedChannelId: r
                } = e, d = (0, o.useStateFromStores)([ee.default], () => ee.default.getGuild(n));
                (0, h.useGlobalTriggerDebugging)(n);
                let E = (0, P.default)(n),
                    f = (0, o.useStateFromStores)([Z.default], () => Z.default.getGuildDimensions(n).scrollTo),
                    _ = (0, o.useStateFromStores)([ea.default], () => ea.default.getChannelId()),
                    [R, M, U] = (0, o.useStateFromStoresArray)([en.default], () => [en.default.can(e_.Permissions.MANAGE_GUILD, d), en.default.can(e_.Permissions.MANAGE_ROLES, d), en.default.can(e_.Permissions.MANAGE_THREADS, d)]),
                    w = (0, o.useStateFromStores)([X.default], () => X.default.isUnavailable(n)),
                    H = (0, o.useStateFromStores)([ei.default], () => ei.default.getCurrentUser()),
                    Y = (0, o.useStateFromStores)([z.default], () => z.default.darkSidebar ? e_.ThemeTypes.DARK : z.default.theme),
                    {
                        enableStudyGroup: K
                    } = (0, k.useHubStudyGroupExperiment)(d),
                    J = (0, L.default)(e => e.currentlyShown.has(u.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
                    [eo, eu] = s.useState(!J),
                    ed = (0, T.default)(n),
                    {
                        AnalyticsLocationProvider: ec
                    } = (0, p.default)(A.default.GUILD_HEADER),
                    {
                        AnalyticsLocationProvider: eE
                    } = (0, p.default)(A.default.GUILD_CHANNEL_LIST_FOOTER);
                s.useEffect(() => {
                    n !== ed && eu(!J)
                }, [n, ed, J]);
                let [ef, eT] = (0, L.default)(e => [eh.CHANNEL_NOTICES.some(t => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eC.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS)]), eI = (0, g.default)(d), eS = (0, c.useModalsStore)(c.hasAnyModalOpenSelector), eN = (0, o.useStateFromStores)([et.default], () => et.default.hasLayers()), ep = (0, o.useStateFromStores)([W.default], () => W.default.shouldShow(eA)), eg = R && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !er.ProcessArgs.isDisallowPopupsSet(), eR = (0, o.useStateFromStores)([$.default], () => $.default.getMemberCount(n)), eO = R && null != eR && eR >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !er.ProcessArgs.isDisallowPopupsSet(), eL = M && null != d && (d.hasFeature(e_.GuildFeatures.COMMUNITY) || null != eR && eR > 50), ev = (0, b.default)(n), eM = (0, O.useLowerMemberCountRequirements)(n), eP = (null == d ? void 0 : d.hasFeature(e_.GuildFeatures.HUB)) === !0, eD = R && (null == d ? void 0 : d.hasFeature(e_.GuildFeatures.DISCOVERABLE)) === !0, ey = (0, m.useBlockedPaymentsConfig)(), ex = (R || (null == d ? void 0 : d.premiumTier) === e_.BoostedGuildTiers.NONE) && !er.ProcessArgs.isDisallowPopupsSet() && !ey, eb = (0, o.useStateFromStores)([G.default, et.default], () => null != d && null != H && R && !et.default.hasLayers() && G.default.shouldShowGuildTemplateDirtyTooltip(n)), eU = (0, o.useStateFromStores)([q.default], () => q.default.getChannel(r)), {
                    isPopoutOpen: eG
                } = (0, D.useGuildHeaderPopoutStore)(), ej = null !== (t = null == d ? void 0 : d.hasFeature(e_.GuildFeatures.COMMUNITY)) && void 0 !== t && t, ek = (0, o.useStateFromStores)([V.default], () => !l.isEmpty(V.default.getThreadsForGuild(n))), {
                    enabled: ew
                } = N.BashOutCoachMarkExperiment.useExperiment({
                    location: "91c8a9_2"
                }, {
                    autoTrackExposure: !0
                }), eF = el.default.canUsePremiumActivities(H), eB = el.default.isNewUser(H), eH = eo && ew && eF, eV = eo && !eB, {
                    enabled: eY
                } = S.ActivityCoachMarkGarticPhoneExperiment.useExperiment({
                    location: "91c8a9_3"
                }, {
                    autoTrackExposure: !0
                }), eW = eo && eY, {
                    enabled: eK
                } = I.ActivitiesGameNightExperiment.useExperiment({
                    location: "91c8a9_4"
                }, {
                    autoTrackExposure: !0
                }), ez = eo && eK, eq = (0, o.useStateFromStores)([es.default], () => es.default.getVisibleGame()), eQ = (0, o.useStateFromStores)([Q.default], () => Q.default.hasConsented(e_.Consents.PERSONALIZATION));
                (0, y.default)(d);
                let eZ = (0, v.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
                    eX = (0, F.default)(n),
                    eJ = (0, x.default)(n),
                    e$ = (0, B.useShouldShowInventoryGuildSettingsCoachmark)(d),
                    {
                        enableHangStatus: e0
                    } = j.HangStatusExperiment.useExperiment({
                        guildId: n,
                        location: "GuildSidebar"
                    }),
                    e1 = (0, C.useShowKrunkerStrikeCoachmark)();
                return (0, a.jsx)(em, {
                    guildId: n,
                    hideSelectedChannel: i,
                    guild: d,
                    scrollToChannel: f,
                    selectedChannelId: i ? null : r,
                    selectedChannel: eU,
                    selectedVoiceChannelId: _,
                    voiceStates: E,
                    isUnavailable: w,
                    theme: Y,
                    user: H,
                    hasChannelNotice: null != eI || ef,
                    anyLayerOpen: eS || eN,
                    showGuildBoostingProgressBarUpsell: eg,
                    showGuildBoostingProgressBarSizeUpsell: eO,
                    showInviteSplashUpsell: ex,
                    showDiscoveryLandingPageSettingsUpsell: eD,
                    showGuildHeaderTutorial: ep,
                    showGuildTemplateDirtyTooltip: eb,
                    showRoleSubscriptionUpsell: ev,
                    showDiscoveryTooltip: eM,
                    showHubPrivacySettingsTooltip: eP,
                    showNewUnreadsBar: ej,
                    showActiveThreadsNotice: U && null != eR && eR >= 200 && ek,
                    showGuildSoundboardPermissionUpsell: eL,
                    showMediaChannelUpsell: eX,
                    showInventoryGuildSettingsRollbackModminCoachmark: e$,
                    showTierTemplatesUpsell: eJ,
                    isHeaderPopoutOpen: eG,
                    enableStudyGroup: K,
                    isGuildHeaderDismissibleTooltipShown: eT,
                    canShowCoachMarkAtBottom: eo,
                    HeaderAnalyticsLocationProvider: ec,
                    FooterAnalyticsLocationProvider: eE,
                    shouldRenderBashOutCoachMark: eH,
                    shouldRenderGarticPhoneCoachMark: eW,
                    shouldRenderActivitiesGameNightCoachMark: ez,
                    isEligibleForClipsPremiumEarlyAccessCoachmark: null != eq && eQ,
                    isTutorialHighlightDismissed: eZ,
                    shouldRenderBurstCoachmark: eV,
                    enableHangStatus: e0,
                    showKrunkerStrikeCoachmark: e1
                })
            }