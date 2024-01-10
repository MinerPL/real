            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Q
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                u = n.n(r),
                o = n("446674"),
                d = n("77078"),
                c = n("327037"),
                f = n("841098"),
                h = n("699209"),
                p = n("252063"),
                m = n("724110"),
                E = n("373469"),
                C = n("42203"),
                g = n("957255"),
                S = n("824563"),
                _ = n("102985"),
                I = n("697218"),
                T = n("800762"),
                v = n("387111"),
                x = n("158998"),
                N = n("713135"),
                A = n("765698"),
                M = n("506885"),
                R = n("217513"),
                j = n("893980"),
                L = n("58351"),
                O = n("430312"),
                y = n("789321"),
                b = n("627601"),
                P = n("10532"),
                D = n("915712"),
                U = n("369869"),
                w = n("802279"),
                F = n("465215"),
                k = n("301998"),
                V = n("491250"),
                B = n("453649"),
                H = n("849674"),
                G = n("817080"),
                W = n("390413"),
                Y = n("104649"),
                z = n("80615"),
                K = n("80531"),
                Z = n("590456"),
                X = n("49111"),
                J = n("782340"),
                q = n("666204"),
                Q = e => {
                    var t;
                    let {
                        channel: n,
                        showCall: s
                    } = e, r = n.recipients[0], [Q, $] = l.useState(!1), ee = l.useRef(0), et = (0, L.default)(), en = (0, o.useStateFromStores)([I.default], () => I.default.getUser(r)), ea = null == en ? void 0 : en.isNonUserBot();
                    u(null != en, "Profile Panel: user cannot be undefined");
                    let el = (0, R.default)(en.id),
                        {
                            installedIntegrations: es,
                            fetched: ei,
                            appsInGDMEnabled: er,
                            availableApplications: eu
                        } = (0, p.usePrivateChannelIntegrationState)({
                            channelId: n.id
                        }),
                        eo = !et && !s,
                        ed = (0, o.useStateFromStores)([T.default, C.default], () => {
                            var e;
                            return null != en ? C.default.getChannel(null === (e = T.default.getVoiceStateForUser(en.id)) || void 0 === e ? void 0 : e.channelId) : null
                        }),
                        {
                            enableHangStatus: ec
                        } = h.HangStatusExperiment.useExperiment({
                            guildId: null == ed ? void 0 : ed.guild_id,
                            location: "ActivityStatus"
                        }),
                        {
                            activity: ef,
                            hangStatusActivity: eh,
                            customStatusActivity: ep,
                            isApplicationStreaming: em,
                            isMobile: eE,
                            status: eC
                        } = (0, o.useStateFromStoresObject)([E.default, S.default, g.default], () => {
                            let e = null != E.default.getAnyStreamForUser(en.id);
                            return {
                                activity: S.default.findActivity(en.id, t => {
                                    let {
                                        type: n
                                    } = t;
                                    return e ? n === X.ActivityTypes.PLAYING : n !== X.ActivityTypes.CUSTOM_STATUS && n !== X.ActivityTypes.HANG_STATUS
                                }),
                                hangStatusActivity: ec && null != ed && g.default.can(X.Permissions.CONNECT, ed) ? S.default.findActivity(en.id, e => {
                                    let {
                                        type: t
                                    } = e;
                                    return t === X.ActivityTypes.HANG_STATUS
                                }) : null,
                                customStatusActivity: S.default.findActivity(en.id, e => {
                                    let {
                                        type: t
                                    } = e;
                                    return t === X.ActivityTypes.CUSTOM_STATUS
                                }),
                                isApplicationStreaming: e,
                                isMobile: S.default.isMobileOnline(en.id),
                                status: ea ? null : S.default.getStatus(en.id)
                            }
                        }),
                        eg = null != ef || null != eh || em,
                        eS = null !== (t = v.default.getNickname(null, n.id, en)) && void 0 !== t ? t : x.default.getName(en),
                        e_ = (0, o.useStateFromStores)([_.default], () => _.default.hidePersonalInformation),
                        [eI, eT, ev, ex, eN] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.getMutualFriendsCount(en.id), N.default.getMutualFriends(en.id), N.default.getMutualGuilds(en.id), N.default.isFetchingProfile(en.id), N.default.isFetchingFriends(en.id)]),
                        eA = (0, B.useGetVoiceChannelInfoForVoiceActivitySection)(en.id),
                        eM = null != eA && !em,
                        {
                            showVoiceActivityInProfile: eR
                        } = A.VoiceActivityProfileExperiment.useExperiment({
                            location: "user DM panel"
                        }, {
                            autoTrackExposure: eM && eo
                        }),
                        ej = !en.bot && null != ev && ev.length > 0,
                        eL = !en.bot && null != eI && eI > 0,
                        eO = (0, H.useShouldShowUserPopoutCollectiblesUpsell)({
                            popoutUser: en,
                            source: b.UserPopoutUpsellSource.PROFILE_PANEL
                        }),
                        ey = (0, f.default)();
                    l.useEffect(() => {
                        ee.current = Date.now()
                    }, []), l.useEffect(() => {
                        (0, M.default)(en.id, en.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !en.bot,
                            withMutualFriendsCount: !en.bot
                        })
                    }, [en]), l.useEffect(() => {
                        null != el && eo && (0, j.trackProfilePanelViewed)({
                            displayProfile: el,
                            isMobile: eE,
                            loadDurationMs: Date.now() - ee.current,
                            activity: ef,
                            customStatusActivity: ep,
                            status: eC
                        })
                    }, [el, eE, ef, ep, eC, eo]);
                    let eb = null == ev ? void 0 : ev.map(e => (0, a.jsx)(z.default, {
                            connection: e,
                            user: en,
                            theme: ey
                        }, e.guild.id)),
                        eP = null == eT ? void 0 : eT.map(e => (0, a.jsx)(Y.default, {
                            connection: e
                        }, e.key)),
                        eD = es.map(e => (0, a.jsx)(G.default, {
                            channel: n,
                            integration: e
                        }, e.application.id)),
                        eU = l.useCallback(() => {
                            !en.bot && !eN && null == eP && (0, c.fetchMutualFriends)(en.id)
                        }, [eN, eP, en.id, en.bot]),
                        ew = l.useCallback(() => $(!0), []),
                        eF = l.useCallback(() => $(!1), []);
                    return eo ? (0, a.jsx)("aside", {
                        className: q.profilePanel,
                        onMouseEnter: ew,
                        onMouseLeave: eF,
                        children: (0, a.jsxs)(O.default, {
                            user: en,
                            profileType: Z.UserProfileTypes.PANEL,
                            useDefaultClientTheme: !0,
                            children: [eO.shouldShow && (0, a.jsx)(y.default, {
                                user: en,
                                upsellSource: b.UserPopoutUpsellSource.PROFILE_PANEL,
                                displayProfile: el,
                                isInSidebar: !0,
                                ...eO
                            }, en.id), (0, a.jsxs)(d.ScrollerNone, {
                                children: [(0, a.jsx)(K.default, {
                                    user: en,
                                    displayProfile: el,
                                    channel: n,
                                    animateAssets: Q,
                                    forceShowPremiumBadge: Q
                                }), (0, a.jsxs)(O.default.Inner, {
                                    children: [(0, a.jsx)(V.default, {
                                        user: en,
                                        nickname: eS,
                                        pronouns: null == el ? void 0 : el.pronouns
                                    }), (0, a.jsx)(w.default, {
                                        customStatusActivity: ep,
                                        animate: Q
                                    }), (0, a.jsx)(P.default, {}), (0, a.jsx)(U.default, {
                                        bio: null == el ? void 0 : el.bio,
                                        hidePersonalInformation: e_,
                                        animateOnHover: !0,
                                        isHovering: Q
                                    }), !en.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(F.default, {
                                            userId: r
                                        }), (0, a.jsx)(P.default, {})]
                                    }), (0, a.jsx)(k.default, {
                                        user: en,
                                        setNote: !1,
                                        hideNote: !1
                                    })]
                                }), eR && eM ? (0, a.jsx)(O.default.Inner, {
                                    children: (0, a.jsx)(B.default, {
                                        voiceGuild: eA.voiceGuild,
                                        voiceChannel: eA.voiceChannel,
                                        color: q.appButtonColor
                                    })
                                }) : null, eg ? (0, a.jsx)(O.default.Inner, {
                                    children: (0, a.jsx)(D.default, {
                                        activity: null != ef ? ef : eh,
                                        user: en,
                                        channelId: n.id
                                    })
                                }) : null, (0, a.jsxs)(O.default.Inner, {
                                    className: q.profilePanelConnections,
                                    children: [ej ? (0, a.jsx)(W.default, {
                                        className: q.mutualGuildsList,
                                        header: J.default.Messages.MUTUAL_GUILDS_COUNT.format({
                                            count: null == ev ? void 0 : ev.length
                                        }),
                                        isLoadingHeader: ex,
                                        children: eb
                                    }) : null, eL ? (0, a.jsx)(W.default, {
                                        className: i(q.mutualFriendsList, {
                                            [q.mutualFriendsDivider]: ej
                                        }),
                                        header: J.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                                            count: eI
                                        }),
                                        isLoadingHeader: ex,
                                        isLoadingContents: eN,
                                        loadingContentsCount: eI,
                                        onFocus: eU,
                                        onHover: eU,
                                        itemType: W.ListType.MutualFriendsList,
                                        children: eP
                                    }) : null]
                                }), (0, a.jsx)(O.default.Inner, {
                                    className: i(q.profilePanelConnections, q.appListThemedContainer),
                                    children: er && (0, a.jsxs)(W.default, {
                                        header: eD.length > 0 ? J.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                                            count: eD.length
                                        }) : J.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                                        isLoadingContents: !ei,
                                        isLoadingHeader: !1,
                                        itemType: W.ListType.AppsList,
                                        children: [eD, eu.length > 0 && (0, a.jsxs)("div", {
                                            className: q.appButtonContainer,
                                            children: [0 === es.length && (0, a.jsx)(d.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: J.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                                            }), (0, a.jsx)(d.Button, {
                                                onClick: () => {
                                                    (0, d.openModal)(e => (0, a.jsx)(m.default, {
                                                        channelId: n.id,
                                                        ...e
                                                    }))
                                                },
                                                color: q.appButtonColor,
                                                className: q.appButton,
                                                fullWidth: !0,
                                                size: d.ButtonSizes.SMALL,
                                                children: J.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    }) : null
                }