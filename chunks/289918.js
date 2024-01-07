            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return J
                }
            }), r("222007");
            var l, i, o = r("37983"),
                n = r("884691"),
                s = r("414456"),
                a = r.n(s),
                u = r("509043"),
                d = r("446674"),
                c = r("669491"),
                f = r("77078"),
                E = r("79112"),
                p = r("812204"),
                P = r("685665"),
                T = r("462274"),
                _ = r("618017"),
                O = r("190045"),
                C = r("335031"),
                S = r("252063"),
                L = r("38766"),
                I = r("845579"),
                h = r("271938"),
                y = r("42203"),
                U = r("305961"),
                m = r("18494"),
                A = r("697218"),
                v = r("471671"),
                g = r("275623"),
                R = r("945330"),
                N = r("474571"),
                B = r("216422"),
                b = r("987772"),
                M = r("956089"),
                D = r("599110"),
                w = r("315102"),
                H = r("719923"),
                F = r("713135"),
                k = r("581295"),
                x = r("878569"),
                G = r("236100"),
                j = r("590456"),
                W = r("49111"),
                z = r("646718"),
                V = r("782340"),
                Y = r("220817");
            (i = l || (l = {}))[i.SHOULD_LOAD = 0] = "SHOULD_LOAD", i[i.LOADING = 1] = "LOADING", i[i.COMPLETE = 2] = "COMPLETE";
            let X = {
                    [j.UserProfileTypes.POPOUT]: 18,
                    [j.UserProfileTypes.MODAL]: 24,
                    [j.UserProfileTypes.SETTINGS]: 0,
                    [j.UserProfileTypes.PANEL]: 18,
                    [j.UserProfileTypes.POMELO_POPOUT]: 18,
                    [j.UserProfileTypes.CANCEL_MODAL]: 0
                },
                Z = {
                    [j.UserProfileTypes.MODAL]: W.AnalyticsPages.USER_PROFILE,
                    [j.UserProfileTypes.POPOUT]: W.AnalyticsPages.USER_POPOUT,
                    [j.UserProfileTypes.SETTINGS]: W.AnalyticsPages.USER_POPOUT,
                    [j.UserProfileTypes.PANEL]: W.AnalyticsPages.DM_CHANNEL,
                    [j.UserProfileTypes.POMELO_POPOUT]: W.AnalyticsPages.POMELO_POPOUT,
                    [j.UserProfileTypes.CANCEL_MODAL]: W.AnalyticsPages.USER_POPOUT
                };

            function K(e) {
                let {
                    type: t,
                    shown: l,
                    onClick: i
                } = e, s = (0, d.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return H.default.canUsePremiumProfileCustomization(e)
                }), u = n.useRef(!1), {
                    analyticsLocations: c
                } = (0, P.default)(p.default.BADGE);
                return n.useEffect(() => {
                    l && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                        location: {
                            page: Z[t],
                            section: W.AnalyticsSections.NITRO_BANNER,
                            object: W.AnalyticsObjects.NITRO_BADGE
                        },
                        location_stack: c
                    }))
                }, [c, l, t]), (0, o.jsx)(f.Tooltip, {
                    tooltipContentClassName: Y.premiumIconTooltipContent,
                    text: s ? V.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : V.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
                    children: e => (0, o.jsx)(f.Clickable, {
                        ...e,
                        onClick: s ? void 0 : () => {
                            var e;
                            e = c, (0, f.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await r.el("292890").then(r.bind(r, "292890"));
                                return r => {
                                    let {
                                        onClose: l,
                                        ...i
                                    } = r;
                                    return (0, o.jsx)(t, {
                                        analyticsLocations: e,
                                        title: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                        description: V.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                            onAndMoreWithPremiumClick: () => {
                                                l(), E.default.open(W.UserSettingsSections.PREMIUM, null, {
                                                    analyticsLocations: e
                                                })
                                            }
                                        }),
                                        onClose: l,
                                        ...i
                                    })
                                }
                            }), null == i || i()
                        },
                        className: a(Y.premiumIconWrapper, {
                            [Y.visible]: l,
                            [Y.clickable]: !s
                        }),
                        children: (0, o.jsx)(M.TextBadge, {
                            color: "rgba(32, 34, 37, 0.8)",
                            text: (0, o.jsx)(B.default, {
                                width: 16,
                                height: 16,
                                className: Y.premiumIcon
                            })
                        })
                    })
                })
            }

            function q(e) {
                let {
                    darkenOnHover: t,
                    profileType: r,
                    profileLabel: l,
                    icon: i,
                    ...n
                } = e, s = X[r], a = "pencil" === i ? b.default : N.default;
                return (0, o.jsx)(f.Clickable, {
                    ...n,
                    "aria-label": l,
                    className: t ? Y.pencilContainerDark : Y.pencilContainer,
                    children: (0, o.jsx)(f.Tooltip, {
                        text: l,
                        children: e => (0, o.jsx)(a, {
                            ...e,
                            width: s,
                            height: s,
                            className: Y.editIcon
                        })
                    })
                })
            }

            function J(e) {
                var t, r, l;
                let {
                    user: i,
                    displayProfile: s,
                    bannerSrc: E,
                    onClose: p,
                    guildId: P,
                    profileType: A = j.UserProfileTypes.POPOUT,
                    isHovering: N,
                    animateOnHover: B,
                    allowEdit: b = !0,
                    showPremiumBadgeUpsell: M = !0,
                    hasProfileEffect: D = !1
                } = e, [X, Z] = n.useState((null == s ? void 0 : s.banner) == null ? 2 : 0), J = (0, d.useStateFromStores)([U.default], () => U.default.getGuild(P)), Q = (0, d.useStateFromStores)([h.default], () => h.default.getId()), $ = Q === i.id && b || i.isClyde() && null != J && (0, _.canEditClydeAIProfile)(J), ee = H.default.isPremiumAtLeast(null == s ? void 0 : s.premiumType, z.PremiumTypes.TIER_2), [et, er] = n.useState(!1), el = (0, d.useStateFromStores)([v.default], () => v.default.isFocused()), ei = I.GifAutoPlay.getSetting(), eo = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), en = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), es = (0, u.hex2int)((0, T.default)(i.getAvatarURL(P, en), eo, !1)), ea = (0, C.default)(null !== (t = null == s ? void 0 : s.primaryColor) && void 0 !== t ? t : es).hsl, eu = (0, x.getUserBannerSize)(A), ed = null != E ? E : null == s ? void 0 : s.getBannerURL({
                    size: eu,
                    canAnimate: B || !ei ? et : el
                }), ec = null != ed, ef = (0, d.useStateFromStores)([F.default], () => F.default.getUserProfile(i.id)), eE = y.default.getChannel(m.default.getChannelId()), {
                    appsInGDMEnabled: ep,
                    availableApplications: eP
                } = (0, S.usePrivateChannelIntegrationState)({
                    channelId: null !== (r = null == eE ? void 0 : eE.id) && void 0 !== r ? r : ""
                }), eT = null == ef ? void 0 : ef.application, e_ = ep && null != eP.find(e => e.id === (null == eT ? void 0 : eT.id));
                (0, n.useEffect)(() => {
                    if (ec && (ee || i.isClyde()) && 0 === X) {
                        Z(1);
                        let e = new Image;
                        e.src = ed, e.onload = () => Z(2)
                    }
                }, [i, ec, ee, ed, X]), n.useEffect(() => {
                    if (ei || !ee) return;
                    let e = null != E ? E : null == s ? void 0 : s.getBannerURL({
                        size: eu,
                        canAnimate: !0
                    });
                    if (null == e) return;
                    let t = new Image;
                    t.src = e
                }, [ei, ee, E, s, eu]);
                let eO = (0, L.default)({
                    analyticsLocation: {
                        page: W.AnalyticsPages.USER_POPOUT,
                        section: W.AnalyticsSections.PROFILE_POPOUT
                    }
                });
                return (0, o.jsx)(k.default, {
                    isPremium: ee,
                    hasThemeColors: null !== (l = null == s ? void 0 : s.canEditThemes) && void 0 !== l && l,
                    profileType: A,
                    hasBanner: ec,
                    hasProfileEffect: D,
                    children: (0, o.jsxs)("div", {
                        className: a(Y.banner, (0, x.getUserBannerStyles)({
                            profileType: A,
                            user: {
                                hasBanner: ec,
                                isPremium: ee,
                                hasProfileEffect: D
                            }
                        }), {
                            [Y.reducedMotion]: !ei
                        }),
                        onMouseMove: () => er(!0),
                        onMouseLeave: () => er(!1),
                        style: {
                            backgroundImage: ec && ee ? "url(".concat(ed, ")") : void 0,
                            backgroundColor: 2 !== X ? c.default.unsafe_rawColors.PRIMARY_800.css : ea
                        },
                        children: [$ ? null != J || i.isClyde() ? null != J && i.isClyde() && (0, _.canEditClydeAIProfile)(J) ? (0, o.jsx)(q, {
                            profileType: A,
                            profileLabel: V.default.Messages.CLYDE_SETTINGS,
                            icon: "gear",
                            onClick: () => {
                                null == p || p(), (0, O.default)(J.id)
                            }
                        }) : null == J ? null : (0, o.jsx)(f.Popout, {
                            spacing: 6,
                            position: "bottom",
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, o.jsx)(G.default, {
                                    onClose: t,
                                    onSelect: p,
                                    guild: J
                                })
                            },
                            children: e => (0, o.jsx)(q, {
                                darkenOnHover: D && N,
                                profileLabel: V.default.Messages.EDIT_PROFILE,
                                icon: "pencil",
                                ...e,
                                profileType: A
                            })
                        }) : (0, o.jsx)(q, {
                            darkenOnHover: D && N,
                            profileType: A,
                            profileLabel: V.default.Messages.EDIT_PROFILE,
                            icon: "pencil",
                            onClick: () => {
                                null == p || p(), eO()
                            }
                        }) : (() => {
                            let e = M && ec && A !== j.UserProfileTypes.SETTINGS;
                            return e ? (0, o.jsx)(K, {
                                type: A,
                                shown: void 0 === N ? et : N,
                                onClick: p
                            }) : null
                        })(), e_ ? A !== j.UserProfileTypes.MODAL ? null : (0, o.jsx)(f.Clickable, {
                            onClick: p,
                            "aria-label": V.default.Messages.BACK,
                            className: Y.pencilContainer,
                            children: (0, o.jsx)(f.Tooltip, {
                                text: V.default.Messages.BACK,
                                children: e => (0, o.jsx)(R.default, {
                                    ...e,
                                    className: Y.closeIcon,
                                    color: "white"
                                })
                            })
                        }) : null, !ei && (0, w.isAnimatedImageURL)(ed) && (0, o.jsx)(g.default, {
                            className: Y.gifTag
                        })]
                    })
                })
            }