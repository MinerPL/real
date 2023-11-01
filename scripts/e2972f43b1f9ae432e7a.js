(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71780"], {
        652720: function(e, t, l) {
            "use strict";
            e.exports = l.p + "d2231aa1ae2abe2df3bc.svg"
        },
        462998: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return y
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("446674"),
                i = l("272030"),
                r = l("264732"),
                d = l("738073"),
                o = l("716241"),
                u = l("850391"),
                c = l("347895"),
                f = l("698882"),
                m = l("778613"),
                h = l("934288"),
                C = l("353054"),
                x = l("557809"),
                g = l("267567"),
                N = l("393414"),
                p = l("208021"),
                S = l("42203"),
                v = l("474643"),
                E = l("247013"),
                _ = l("305961"),
                I = l("377253"),
                T = l("957255"),
                O = l("697218"),
                j = l("945330"),
                A = l("664336"),
                R = l("679653"),
                b = l("176347"),
                M = l("49111"),
                L = l("782340"),
                D = l("768922");

            function y(e) {
                let {
                    channelId: t,
                    baseChannelId: y,
                    channelViewSource: B = "Split View",
                    isResourceChannelView: w
                } = e, H = (0, s.useStateFromStores)([S.default], () => S.default.getChannel(t)), k = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(null == H ? void 0 : H.getGuildId())), F = (0, s.useStateFromStores)([O.default], () => O.default.getCurrentUser()), U = (0, s.useStateFromStores)([E.default], () => E.default.didAgree(null == H ? void 0 : H.guild_id)), P = (null == F ? void 0 : F.nsfwAllowed) === !0, G = (0, R.default)(H), W = (0, s.useStateFromStores)([g.default], () => (null == k ? void 0 : k.id) != null && g.default.isLurking(k.id), [k]), Y = (0, s.useStateFromStores)([T.default], () => T.default.can(M.Permissions.SEND_MESSAGES, H)), z = (0, m.useHasPendingMemberAction)(null == k ? void 0 : k.id, null == H ? void 0 : H.id), V = (0, h.default)(t), Z = (0, s.useStateFromStores)([f.default], () => {
                    var e;
                    return null === (e = f.default.getResourceForChannel(null == k ? void 0 : k.id, t)) || void 0 === e ? void 0 : e.title
                }), X = n.useRef(!1);
                if (n.useEffect(() => {
                        null != H && !X.current && (X.current = !0, (0, o.trackWithMetadata)(M.AnalyticEvents.CHANNEL_OPENED, {
                            channel_id: H.id,
                            guild_id: H.guild_id,
                            parent_id: H.parent_id,
                            channel_view: B,
                            can_send_message: Y,
                            has_pending_member_action: z
                        }))
                    }, [H, B, Y, z]), null == H || null == k) return null;
                let q = [];
                return (!W && q.push((0, a.jsx)(C.default, {
                    channel: H
                }, "notifications")), q.push((0, a.jsx)(A.default.Icon, {
                    icon: j.default,
                    tooltip: L.default.Messages.CLOSE,
                    onClick: () => p.default.closeChannelSidebar(y)
                }, "close")), !H.isNSFW() || P && U) ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.default, {
                        channel: H,
                        draftType: v.DraftType.ChannelMessage
                    }), (0, a.jsx)(A.default, {
                        toolbar: q,
                        "aria-label": L.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                        children: (0, x.renderTitle)({
                            channel: H,
                            channelName: V ? Z : G,
                            guild: k,
                            inSidebar: !0,
                            handleContextMenu: e => {
                                (0, i.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await l.el("229233").then(l.bind(l, "229233"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        channel: H,
                                        guild: k
                                    })
                                })
                            },
                            handleClick: () => {
                                let e = I.default.getMessages(H.id);
                                if (w) {
                                    (0, N.transitionTo)(M.Routes.CHANNEL(H.guild_id, H.id)), (0, c.selectHomeResourceChannel)(H.guild_id, null);
                                    return
                                }(0, N.transitionToGuild)(H.guild_id, H.id, e.jumpTargetId)
                            }
                        })
                    }), (0, a.jsx)("div", {
                        className: D.chat,
                        children: (0, a.jsx)(b.default, {
                            channel: H,
                            guild: k,
                            chatInputType: u.ChatInputTypes.SIDEBAR
                        }, t)
                    })]
                }) : (0, a.jsx)(d.default, {
                    guild: k
                })
            }
        },
        469421: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("884691"),
                n = l("917351"),
                s = l.n(n),
                i = l("446674"),
                r = l("913144"),
                d = l("986003"),
                o = l("282109"),
                u = l("568734"),
                c = l("449008"),
                f = l("921031"),
                m = l("863636"),
                h = l("397336");

            function C(e) {
                r.default.dispatch({
                    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
                    guildId: e
                })
            }
            let x = {};

            function g(e) {
                var t;
                let l = (0, i.useStateFromStores)([m.default], () => null !== (t = m.default.getPendingResponseOptions(e)) && void 0 !== t ? t : x, [e]);
                a.useEffect(() => (C(e), () => C(e)), [e]), a.useEffect(() => {
                    null != l && 0 !== Object.keys(l).length && f.default.updateOnboardingResponses(e)
                }, [e, l]);
                let n = a.useCallback((t, l, a) => {
                    let n = m.default.getOnboardingResponses(e),
                        {
                            addedRoleIds: i,
                            removedRoleIds: C
                        } = function(e, t, l, a) {
                            var n, i, r, d, o;
                            let u = [],
                                f = [];
                            if (e.singleSelect && l) {
                                let l = e.options.find(e => a.includes(e.id));
                                u = s.difference(null !== (n = t.roleIds) && void 0 !== n ? n : [], null !== (i = null == l ? void 0 : l.roleIds) && void 0 !== i ? i : []), f = s.difference(null !== (r = null == l ? void 0 : l.roleIds) && void 0 !== r ? r : [], null !== (d = t.roleIds) && void 0 !== d ? d : [])
                            } else if (l) u = null !== (o = t.roleIds) && void 0 !== o ? o : [], f = [];
                            else {
                                let l = e.options.filter(e => a.includes(e.id)),
                                    n = l.filter(e => t.id !== e.id),
                                    i = l.map(e => e.roleIds).flat().filter(c.isNotNullish),
                                    r = n.map(e => e.roleIds).flat().filter(c.isNotNullish);
                                u = [], f = s.difference(i, r)
                            }
                            return {
                                addedRoleIds: u,
                                removedRoleIds: f
                            }
                        }(t, l, a, n),
                        {
                            addedChannelIds: x,
                            removedChannelIds: g
                        } = function(e) {
                            var t, l, a, n, i;
                            let {
                                guildId: r,
                                prompt: o,
                                option: u,
                                selected: f,
                                responses: h
                            } = e, C = [], x = [];
                            if (o.singleSelect && f) {
                                let e = o.options.find(e => h.includes(e.id));
                                C = s.difference(null !== (t = u.channelIds) && void 0 !== t ? t : [], null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : []), x = s.difference(null !== (a = null == e ? void 0 : e.channelIds) && void 0 !== a ? a : [], null !== (n = u.channelIds) && void 0 !== n ? n : [])
                            } else if (f) C = null !== (i = u.channelIds) && void 0 !== i ? i : [], x = [];
                            else {
                                let e = o.options.filter(e => h.includes(e.id)),
                                    t = e.filter(e => u.id !== e.id),
                                    l = e.map(e => e.channelIds).flat().filter(c.isNotNullish),
                                    a = t.map(e => e.channelIds).flat().filter(c.isNotNullish);
                                C = [], x = s.difference(l, a)
                            }
                            return (0, d.hasNotSetUpChannelOptIn)(r) && C.push(...m.default.getDefaultChannelIds(r)), {
                                addedChannelIds: C,
                                removedChannelIds: x
                            }
                        }({
                            guildId: e,
                            prompt: t,
                            option: l,
                            selected: a,
                            responses: n
                        }),
                        N = x.reduce((t, l) => {
                            let a = o.default.getGuildChannelFlags(e, l);
                            return t[l] = {
                                flags: (0, u.setFlag)(a, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                            }, t
                        }, {}),
                        p = g.reduce((t, l) => {
                            let a = o.default.getGuildChannelFlags(e, l);
                            return t[l] = {
                                flags: (0, u.setFlag)(a, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !1)
                            }, t
                        }, {}),
                        S = {
                            ...N,
                            ...p
                        };
                    f.default.selectOption(e, t.id, l.id, a), r.default.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: S
                    }), f.default.updateRolesLocal(e, i, C)
                }, [e]);
                return {
                    handleSelectOption: n
                }
            }
        },
        126623: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                },
                useCustomizeCommunityPromptHelpText: function() {
                    return f
                }
            });
            var a = l("446674"),
                n = l("679653"),
                s = l("42203"),
                i = l("27618"),
                r = l("697218"),
                d = l("449008"),
                o = l("782340");

            function u(e, t, l) {
                return 0 === e.length ? "" : (l ? o.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO : o.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES).format({
                    count: e.length,
                    extraCount: Math.max(e.length - 2, 0),
                    role1: e[0],
                    role2: e[1],
                    itemHook: t
                })
            }

            function c(e) {
                var t, l, c;
                let {
                    guild: f,
                    prompt: m,
                    selectedRoleIds: h,
                    selectedChannelIds: C,
                    itemHook: x
                } = e, g = (0, a.useStateFromStoresArray)([s.default, r.default, i.default], () => Array.from(C).map(e => s.default.getChannel(e)).filter(d.isNotNullish).map(e => (0, n.computeChannelName)(e, r.default, i.default, !0))), N = Array.from(h).map(e => {
                    var l;
                    return null === (l = (null !== (t = null == f ? void 0 : f.roles) && void 0 !== t ? t : {})[e]) || void 0 === l ? void 0 : l.name
                }).filter(d.isNotNullish).map(e => "@".concat(e)), p = (null == m ? void 0 : m.singleSelect) ? "" : o.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS, S = "";
                if (0 === g.length && N.length > 0) p = u(N, x);
                else if (g.length > 0) {
                    ;
                    l = g, c = x, p = 0 === l.length ? "" : o.default.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                        count: l.length,
                        extraCount: Math.max(l.length - 2, 0),
                        channel1: l[0],
                        channel2: l[1],
                        itemHook: c
                    }), N.length > 0 && (S = u(N, x, !0))
                }
                return {
                    helpText: p,
                    helpTextAdditional: S
                }
            }

            function f(e) {
                var t;
                let {
                    guild: l,
                    prompt: u,
                    selectedRoleIds: c,
                    selectedChannelIds: f,
                    itemHook: m
                } = e, h = (0, a.useStateFromStoresArray)([s.default, r.default, i.default], () => Array.from(f).map(e => s.default.getChannel(e)).filter(d.isNotNullish).map(e => (0, n.computeChannelName)(e, r.default, i.default, !0))), C = Array.from(c).map(e => {
                    var a;
                    return null === (a = (null !== (t = null == l ? void 0 : l.roles) && void 0 !== t ? t : {})[e]) || void 0 === a ? void 0 : a.name
                }).filter(d.isNotNullish).map(e => "@".concat(e)), x = (null == u ? void 0 : u.singleSelect) ? "" : o.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
                return 0 === h.length && C.length > 0 ? x = o.default.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                    count: C.length,
                    extraCount: Math.max(C.length - 2, 0),
                    role1: C[0],
                    role2: C[1],
                    itemHook: m
                }) : h.length > 0 && 0 === C.length ? x = o.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
                    count: h.length,
                    extraCount: Math.max(h.length - 2, 0),
                    channel1: h[0],
                    channel2: h[1],
                    itemHook: m
                }) : h.length > 0 && C.length > 0 && (x = o.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format({
                    channelCount: h.length,
                    extraChannelCount: Math.max(h.length - 2, 0),
                    channel1: h[0],
                    channel2: h[1],
                    itemHook: m,
                    roleCount: C.length,
                    extraRoleCount: Math.max(C.length - 2, 0),
                    role1: C[0],
                    role2: C[1]
                })), {
                    helpText: x,
                    helpTextAdditional: ""
                }
            }
        },
        15015: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("884691"),
                n = l("65597"),
                s = l("863636");

            function i(e) {
                let t = (0, n.useStateFromStoresArray)([s.default], () => s.default.getEnabledOnboardingPrompts(e));
                return a.useMemo(() => {
                    let e = 0,
                        l = [],
                        a = [],
                        n = [],
                        s = [];
                    for (var i = 0; i < t.length; i++) {
                        let r = t[i];
                        r.isNew ? l.push(r) : r.hasNewAnswers ? (a.push(r), e += r.options.filter(e => e.isUnseen).length) : r.inOnboarding ? s.push(r) : n.push(r)
                    }
                    return {
                        onboardingPromptsRaw: t,
                        newOnboardingPrompts: l,
                        onboardingPromptsWithNewAnswers: a,
                        newAnswersCount: e,
                        onboardingPrompts: n.concat(s)
                    }
                }, [t])
            }
        },
        534702: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                d = l("151426"),
                o = l("669491"),
                u = l("77078"),
                c = l("69927"),
                f = l("10641"),
                m = l("41594"),
                h = l("539938"),
                C = l("676143"),
                x = l("5973"),
                g = l("15684"),
                N = l("393414"),
                p = l("982108"),
                S = l("42203"),
                v = l("305961"),
                E = l("18494"),
                _ = l("98292"),
                I = l("446685"),
                T = l("956089"),
                O = l("361776"),
                j = l("961727"),
                A = l("653138"),
                R = l("724210"),
                b = l("994428"),
                M = l("782340"),
                L = l("168393"),
                D = l("305794");

            function y(e) {
                let {
                    guild: t,
                    previousChannel: l
                } = e, s = (0, O.default)(t);
                n.useEffect(() => {
                    (0, f.markDismissibleContentAsDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, {
                        dismissAction: b.ContentDismissActionType.DISMISS
                    })
                });
                let i = s ? M.default.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
                        guildName: t.name
                    }) : M.default.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
                        guildName: t.name
                    }),
                    r = s ? M.default.Messages.CHANNELS_AND_ROLES : M.default.Messages.CHANNEL_BROWSER_TITLE;
                return (0, c.usePageTitle)({
                    location: i
                }), (0, a.jsxs)(h.default, {
                    className: L.header,
                    innerClassname: L.innerHeader,
                    hideSearch: !0,
                    channelId: R.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
                    guildId: t.id,
                    toolbar: null != l ? (0, a.jsx)(u.Button, {
                        className: L.returnButton,
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != l && (0, N.transitionToGuild)(t.id, l.id)
                        },
                        children: (0, a.jsx)(u.Text, {
                            className: L.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: M.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == l ? null : (0, a.jsxs)(n.Fragment, {
                                    children: [(0, a.jsx)(m.ChannelItemIcon, {
                                        className: L.returnIcon,
                                        guild: t,
                                        channel: l
                                    }), (0, a.jsx)(_.default, {
                                        children: (0, a.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: l.name
                                        })
                                    })]
                                }, l.id)
                            })
                        })
                    }) : [],
                    children: [(0, a.jsx)(h.default.Icon, {
                        icon: I.default,
                        "aria-hidden": !0
                    }), (0, a.jsx)(h.default.Title, {
                        children: r
                    })]
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    selectedSection: l
                } = e, s = (0, r.useStateFromStores)([v.default], () => v.default.getGuild(t)), d = (0, O.default)(s), [c, f] = n.useState(null != l ? l : A.GuildOnboardingTab.CUSTOMIZE);
                n.useEffect(() => {
                    null != l && f(l)
                }, [l]);
                let m = (0, r.useStateFromStores)([E.default], () => E.default.getLastSelectedChannelId(t)),
                    h = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(R.StaticChannelRoute.CHANNEL_BROWSER)),
                    N = null != h && c === A.GuildOnboardingTab.BROWSE,
                    _ = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(m)),
                    I = (0, r.useStateFromStores)([g.default], () => g.default.getNewChannelIds(t).size > 0),
                    b = (0, C.useChannelBrowserChannelCount)(t);
                return null == s ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: i(D.chat, {
                            [D.threadSidebarOpen]: N
                        }),
                        children: [(0, a.jsx)(y, {
                            guild: s,
                            previousChannel: _
                        }), (0, a.jsxs)("div", {
                            className: i(D.content, L.container),
                            children: [d && (0, a.jsxs)(u.TabBar, {
                                className: L.tabBar,
                                type: "top",
                                look: "brand",
                                selectedItem: c,
                                onItemSelect: e => f(e),
                                children: [(0, a.jsx)(u.TabBar.Item, {
                                    className: L.tabBarItem,
                                    id: A.GuildOnboardingTab.CUSTOMIZE,
                                    children: M.default.Messages.OPT_IN_GUILD_NOTICE_CTA
                                }, A.GuildOnboardingTab.CUSTOMIZE), (0, a.jsxs)(u.TabBar.Item, {
                                    className: L.tabBarItem,
                                    id: A.GuildOnboardingTab.BROWSE,
                                    "aria-label": M.default.Messages.CHANNEL_BROWSER_TITLE,
                                    children: [M.default.Messages.CHANNEL_BROWSER_TITLE, (0, a.jsx)(T.TextBadge, {
                                        text: I ? M.default.Messages.CHANNEL_TYPE_NEW : b,
                                        color: I ? o.default.unsafe_rawColors.BRAND_260.css : o.default.colors.BACKGROUND_ACCENT.css,
                                        className: i({
                                            [L.newBadge]: I
                                        })
                                    })]
                                }, A.GuildOnboardingTab.BROWSE)]
                            }), (() => {
                                switch (c) {
                                    case A.GuildOnboardingTab.CUSTOMIZE:
                                        return (0, a.jsx)(j.default, {
                                            guildId: t,
                                            onBrowseChannels: () => f(A.GuildOnboardingTab.BROWSE)
                                        });
                                    case A.GuildOnboardingTab.BROWSE:
                                    default:
                                        return (0, a.jsx)(x.default, {
                                            guildId: t
                                        })
                                }
                            })()]
                        })]
                    }), N && (0, a.jsx)(x.ChannelBrowserSidebar, {
                        channelId: h
                    })]
                })
            }
        },
        961727: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return en
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("917351"),
                d = l.n(r),
                o = l("301165"),
                u = l("509043"),
                c = l("446674"),
                f = l("669491"),
                m = l("819855"),
                h = l("77078"),
                C = l("267363"),
                x = l("834897"),
                g = l("841098"),
                N = l("606292"),
                p = l("688318"),
                S = l("449918"),
                v = l("38654"),
                E = l("368639"),
                _ = l("393414"),
                I = l("506885"),
                T = l("217513"),
                O = l("19287"),
                j = l("26989"),
                A = l("305961"),
                R = l("660478"),
                b = l("697218"),
                M = l("956089"),
                L = l("449008"),
                D = l("158998"),
                y = l("50885"),
                B = l("921031"),
                w = l("685829"),
                H = l("863636"),
                k = l("380710"),
                F = l("469421"),
                U = l("126623"),
                P = l("15015"),
                G = l("771311"),
                W = l("667712"),
                Y = l("469242"),
                z = l("653138"),
                V = l("49111"),
                Z = l("724210"),
                X = l("133335"),
                q = l("782340"),
                K = l("231881"),
                Q = l("305794"),
                J = l("632215");
            let $ = h.AvatarSizes.SIZE_80,
                ee = "required";

            function et(e) {
                var t;
                let {
                    guild: l,
                    user: s
                } = e, {
                    avatarSrc: r,
                    eventHandlers: o,
                    isAvatarAnimating: f
                } = (0, O.useAnimatedAvatarSrc)({
                    user: s,
                    guildId: l.id,
                    size: 120
                }), {
                    avatarDecorationSrc: m
                } = (0, p.default)({
                    user: s,
                    size: (0, N.getDecorationSizeForAvatarSize)($),
                    animateOnHover: !f
                }), C = (0, c.useStateFromStores)([j.default], () => j.default.getSelfMember(l.id)), x = (0, c.useStateFromStoresArray)([j.default], () => j.default.getMemberRoleWithPendingUpdates(l.id, s.id)), g = d(x).filter(e => l.roles.hasOwnProperty(e)).map(e => l.roles[e]).orderBy("position", "desc").value(), S = (0, T.default)(s.id, l.id);
                n.useEffect(() => {
                    (0, I.default)(s.id, s.getAvatarURL(l.id, (0, h.getAvatarSize)($)), {
                        guildId: l.id
                    })
                }, []);
                let v = (0, E.parseBioReact)(null == S ? void 0 : S.bio),
                    _ = y.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar;
                return (0, a.jsxs)("div", {
                    className: K.profile,
                    children: [(0, a.jsx)(h.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE
                    }), (0, a.jsx)(h.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION
                    }), (0, a.jsxs)("div", {
                        className: K.profileCard,
                        children: [(0, a.jsx)("div", {
                            ...o,
                            children: (0, a.jsx)(_, {
                                src: r,
                                avatarDecoration: m,
                                size: $,
                                "aria-label": s.username
                            })
                        }), (0, a.jsx)(h.Text, {
                            variant: "text-lg/medium",
                            color: "header-primary",
                            className: K.username,
                            children: null !== (t = null == C ? void 0 : C.nick) && void 0 !== t ? t : D.default.getName(s)
                        }), (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: i(J.markup, K.bio),
                            children: v
                        }), null != g && g.length > 0 && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("hr", {
                                className: K.separator
                            }), (0, a.jsx)(h.Text, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                className: K.title,
                                children: q.default.Messages.ROLES
                            }), (0, a.jsx)("div", {
                                className: K.roles,
                                children: null == g ? void 0 : g.map(e => {
                                    var t;
                                    return (0, a.jsxs)("div", {
                                        className: K.role,
                                        children: [(0, a.jsx)(h.RoleCircle, {
                                            color: null !== (t = e.colorString) && void 0 !== t ? t : (0, u.int2hex)(V.DEFAULT_ROLE_COLOR),
                                            className: K.roleDot
                                        }), (0, a.jsx)(h.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: e.name
                                        })]
                                    }, e.id)
                                })
                            })]
                        })]
                    })]
                })
            }

            function el(e) {
                var t;
                let {
                    prompt: l,
                    guild: s
                } = e, [r, d] = n.useState(null), [u, m] = n.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), x = (0, k.getSelectedRoleIds)(C), g = (0, k.getSelectedChannelIds)(C), N = (0, c.useStateFromStoresArray)([H.default], () => H.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
                    helpText: p,
                    helpTextAdditional: v
                } = (0, U.useCustomizeCommunityPromptHelpText)({
                    guild: s,
                    prompt: l,
                    selectedRoleIds: x,
                    selectedChannelIds: g,
                    itemHook: (e, t) => (0, a.jsx)(h.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e
                    }, t)
                }), {
                    handleSelectOption: E
                } = (0, F.default)(s.id), _ = (0, h.useToken)(f.default.unsafe_rawColors.BRAND_500), I = (0, o.useSpring)({
                    from: {
                        color: l.isNew ? _.hex({
                            opacity: 1
                        }) : _.hex({
                            opacity: 0
                        })
                    },
                    color: _.hex({
                        opacity: 0
                    }),
                    config: {
                        duration: 300
                    },
                    delay: 500
                }), T = l.options.map(e => ({
                    value: e.id,
                    ...e
                })), O = l.options.filter(e => N.includes(e.id)).map(e => e.id);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(o.animated.div, {
                        className: K.prompt,
                        style: {
                            borderColor: I.color
                        },
                        children: [l.isNew && (0, a.jsx)(M.TextBadge, {
                            color: (0, S.getColor)(V.Color.BRAND_260),
                            text: q.default.Messages.NEW,
                            className: K.newBadge
                        }), (0, a.jsxs)(h.Heading, {
                            className: K.promptTitle,
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: [l.title, l.required ? (0, a.jsx)("span", {
                                className: i(K.required, {
                                    [K.error]: (null == r ? void 0 : r.type) === ee
                                }),
                                children: "*"
                            }) : null]
                        }), (0, a.jsx)(Y.default, {
                            options: T,
                            value: O,
                            onChange: e => {
                                let t = e.find(e => !N.includes(e.id)),
                                    a = e.map(e => e.id),
                                    n = null != t;
                                if (n) E(l, t, !0), l.singleSelect && l.options.forEach(e => u.delete(e.id)), u.add(t.id);
                                else {
                                    let e = N.filter(e => !a.includes(e)),
                                        t = l.options.filter(t => e.includes(t.id));
                                    if (N.length <= t.length && l.required) {
                                        d({
                                            type: ee
                                        });
                                        return
                                    }
                                    t.forEach(e => {
                                        E(l, e, !1), u.delete(e.id)
                                    })
                                }
                                m(new Set(u)), d(null)
                            },
                            canBeNew: !l.isNew
                        }), (0, a.jsxs)(h.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: K.helpText,
                            children: [p, " ", v]
                        })]
                    })
                })
            }

            function ea(e) {
                var t;
                let {
                    prompt: l,
                    guild: s
                } = e, [r, d] = n.useState(null), [u, m] = n.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), x = (0, k.getSelectedRoleIds)(C), g = (0, k.getSelectedChannelIds)(C), N = (0, c.useStateFromStoresArray)([H.default], () => H.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
                    helpText: p,
                    helpTextAdditional: v
                } = (0, U.useCustomizeCommunityPromptHelpText)({
                    guild: s,
                    prompt: l,
                    selectedRoleIds: x,
                    selectedChannelIds: g,
                    itemHook: (e, t) => (0, a.jsx)(h.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e
                    }, t)
                }), {
                    handleSelectOption: E
                } = (0, F.default)(s.id), _ = (e, t) => {
                    if (!t && 1 === N.length && l.required) {
                        d({
                            type: ee
                        });
                        return
                    }
                    E(l, e, null != t && t), l.singleSelect && t && l.options.forEach(e => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), m(new Set(u)), d(null)
                }, I = (0, h.useToken)(f.default.unsafe_rawColors.BRAND_500), T = (0, o.useSpring)({
                    from: {
                        color: l.isNew ? I.hex({
                            opacity: 1
                        }) : I.hex({
                            opacity: 0
                        })
                    },
                    color: I.hex({
                        opacity: 0
                    }),
                    config: {
                        duration: 300
                    },
                    delay: 500
                });
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(o.animated.div, {
                        className: K.prompt,
                        style: {
                            borderColor: T.color
                        },
                        children: [l.isNew && (0, a.jsx)(M.TextBadge, {
                            color: (0, S.getColor)(V.Color.BRAND_260),
                            text: q.default.Messages.NEW,
                            className: K.newBadge
                        }), (0, a.jsxs)(h.Heading, {
                            className: K.promptTitle,
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: [l.title, l.required ? (0, a.jsx)("span", {
                                className: i(K.required, {
                                    [K.error]: (null == r ? void 0 : r.type) === ee
                                }),
                                children: "*"
                            }) : null]
                        }), (0, a.jsx)("div", {
                            className: K.promptOptions,
                            children: l.options.map(e => (0, a.jsx)(W.default, {
                                hideMemberCount: !0,
                                guildId: s.id,
                                option: e,
                                onSelect: t => _(e, t),
                                selected: N.includes(e.id),
                                canBeNew: !l.isNew
                            }, e.id))
                        }), (0, a.jsxs)(h.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: K.helpText,
                            children: [p, " ", v]
                        })]
                    })
                })
            }

            function en(e) {
                let {
                    guildId: t,
                    onBrowseChannels: l
                } = e, s = (0, m.isThemeDark)((0, g.default)()), r = (0, c.useStateFromStores)([A.default], () => A.default.getGuild(t)), d = (0, c.useStateFromStores)([b.default], () => b.default.getCurrentUser()), o = (0, x.default)("(min-width: 1344px)") && null != d, u = n.useCallback(() => {
                    (0, _.transitionTo)(V.Routes.CHANNEL(t, Z.StaticChannelRoute.CHANNEL_BROWSER)), null == l || l()
                }, [t, l]), f = (0, c.useStateFromStores)([R.default], () => R.default.hasUnread(t, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), {
                    onboardingPromptsRaw: N,
                    newOnboardingPrompts: p,
                    onboardingPromptsWithNewAnswers: E,
                    newAnswersCount: I,
                    onboardingPrompts: T
                } = (0, P.default)(t);
                n.useEffect(() => {
                    if ((null == r ? void 0 : r.id) != null) !v.default.isFullServerPreview(r.id) && (H.default.shouldFetchPrompts(r.id) || f) && (0, w.fetchOnboardingPrompts)(r.id)
                }, [null == r ? void 0 : r.id, f]), n.useEffect(() => {
                    if ((null == r ? void 0 : r.id) != null) {
                        if (!v.default.isFullServerPreview(r.id)) return () => {
                            (0, C.ackGuildFeature)(r.id, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION, H.default.ackIdForGuild(r.id)), B.default.updateOnboardingResponses(r.id)
                        }
                    }
                }, [null == r ? void 0 : r.id]);
                let O = n.useCallback(e => {
                    if (null == r) return null;
                    switch (e.type) {
                        case z.OnboardingPromptType.MULTIPLE_CHOICE:
                            return (0, a.jsx)(ea, {
                                prompt: e,
                                guild: r
                            }, e.id);
                        case z.OnboardingPromptType.DROPDOWN:
                            return (0, a.jsx)(el, {
                                prompt: e,
                                guild: r
                            }, e.id);
                        default:
                            (0, L.assertNever)(e.type)
                    }
                }, [r]);
                if (null == r) return null;
                if (0 === N.length) {
                    let e = (0, S.getColor)(s ? V.Color.PRIMARY_300 : V.Color.PRIMARY_500),
                        t = (0, S.getColor)(s ? V.Color.PRIMARY_700 : V.Color.PRIMARY_230);
                    return (0, a.jsx)("div", {
                        className: Q.chat,
                        children: (0, a.jsx)("div", {
                            className: i(Q.content, K.emptyPage),
                            children: (0, a.jsxs)("div", {
                                className: K.emptyContainer,
                                children: [(0, a.jsx)(G.default, {
                                    className: K.emptyIcon,
                                    foregroundColor: e,
                                    backgroundColor: t
                                }), (0, a.jsx)(h.Heading, {
                                    className: K.emptyHeader,
                                    variant: "heading-md/semibold",
                                    children: q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER
                                }), (0, a.jsx)(h.Text, {
                                    variant: "text-sm/medium",
                                    children: q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
                                        onBrowseChannels: u
                                    })
                                })]
                            })
                        })
                    })
                }
                return (0, a.jsx)("div", {
                    className: i(Q.chat, K.scrollerContainer),
                    children: (0, a.jsxs)(h.AdvancedScroller, {
                        className: K.scroller,
                        fade: !0,
                        children: [(0, a.jsxs)("div", {
                            className: K.pageBody,
                            children: [(p.length > 0 || E.length > 0) && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    children: (0, a.jsx)(h.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: q.default.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                                            count: p.length + I
                                        })
                                    })
                                }), p.map(O), E.map(O), (0, a.jsx)("div", {
                                    className: K.sectionSeparator
                                })]
                            }), T.length > 0 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsx)(h.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: q.default.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format({
                                            count: T.length
                                        })
                                    }), (0, a.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: q.default.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION
                                    })]
                                }), T.map(O)]
                            })]
                        }), o && (0, a.jsx)(et, {
                            guild: r,
                            user: d
                        })]
                    })
                })
            }
        },
        771311: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("75196");

            function s(e) {
                let {
                    width: t = 120,
                    height: l = 80,
                    backgroundColor: s,
                    foregroundColor: i,
                    ...r
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, n.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 120 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("circle", {
                        cx: "60",
                        cy: "40",
                        r: "32",
                        fill: s
                    }), (0, a.jsx)("path", {
                        d: "M75.0832 29.8546L75.0835 29.8548C75.1362 29.884 75.1683 29.9391 75.1683 29.9983C75.1683 30.5369 75.1197 37.4409 73.0784 44.1629C71.005 50.9907 67.1615 56.8317 60.0016 56.8317C52.8418 56.8317 48.9982 50.9907 46.9248 44.1629C44.8836 37.4409 44.835 30.5369 44.835 29.9983C44.835 29.9391 44.8671 29.884 44.9197 29.8548L44.9201 29.8546L59.919 21.5218C59.9191 21.5218 59.9193 21.5217 59.9194 21.5216C59.9718 21.4928 60.0316 21.4928 60.0839 21.5217C60.084 21.5217 60.0842 21.5218 60.0843 21.5218L75.0832 29.8546ZM52.2516 46.6667V48.1667H53.7516H66.2516H67.7516V46.6667C67.7516 44.43 67.0409 42.4584 65.6254 41.0429C64.7687 40.1861 63.7082 39.5876 62.5086 39.2485C64.3809 38.3237 65.6683 36.3949 65.6683 34.165C65.6683 31.0349 63.1317 28.4983 60.0016 28.4983C56.8715 28.4983 54.335 31.0349 54.335 34.165C54.335 36.3949 55.6224 38.3237 57.4947 39.2485C56.295 39.5876 55.2346 40.1861 54.3778 41.0429C52.9623 42.4584 52.2516 44.43 52.2516 46.6667Z",
                        fill: i,
                        stroke: i,
                        strokeWidth: "3"
                    }), (0, a.jsx)("path", {
                        d: "M103.67 1.80634C103.67 0.808724 102.862 0 101.864 0C100.866 0 100.058 0.808724 100.058 1.80634V3.64278C100.058 4.64039 100.866 5.44911 101.864 5.44911C102.862 5.44911 103.67 4.64039 103.67 3.64278V1.80634Z",
                        fill: "#58F287"
                    }), (0, a.jsx)("path", {
                        d: "M103.67 16.3574C103.67 15.3597 102.862 14.551 101.864 14.551C100.866 14.551 100.058 15.3597 100.058 16.3574V18.1938C100.058 19.1914 100.866 20.0001 101.864 20.0001C102.862 20.0001 103.67 19.1914 103.67 18.1938V16.3574Z",
                        fill: "#58F287"
                    }), (0, a.jsx)("path", {
                        d: "M110.194 11.8412C111.191 11.8412 112 11.0325 112 10.0349C112 9.03724 111.191 8.22852 110.194 8.22852H108.357C107.36 8.22852 106.551 9.03724 106.551 10.0349C106.551 11.0325 107.36 11.8412 108.357 11.8412H110.194Z",
                        fill: "#58F287"
                    }), (0, a.jsx)("path", {
                        d: "M95.6429 11.7413C96.6405 11.7413 97.4492 10.9326 97.4492 9.935C97.4492 8.93739 96.6405 8.12866 95.6429 8.12866H93.8064C92.8088 8.12866 92.0001 8.93739 92.0001 9.935C92.0001 10.9326 92.8088 11.7413 93.8064 11.7413H95.6429Z",
                        fill: "#58F287"
                    }), (0, a.jsx)("path", {
                        d: "M19.1501 74.4573L23.3147 73.0684C23.5192 72.9747 23.6925 72.8241 23.814 72.6347C23.9354 72.4454 24 72.225 24 72C24 71.775 23.9354 71.5546 23.814 71.3653C23.6925 71.1759 23.5192 71.0253 23.3147 70.9316L19.1501 69.5427C18.8657 69.4142 18.6378 69.1862 18.5094 68.9016L17.0145 64.7348C16.9442 64.521 16.8083 64.3349 16.6262 64.203C16.444 64.071 16.2249 64 16 64C15.7751 64 15.556 64.071 15.3738 64.203C15.1917 64.3349 15.0558 64.521 14.9855 64.7348L13.4906 68.9016C13.3622 69.1862 13.1343 69.4142 12.8499 69.5427L8.68528 70.9316C8.4808 71.0253 8.30752 71.1759 8.18604 71.3653C8.06457 71.5546 8 71.775 8 72C8 72.225 8.06457 72.4454 8.18604 72.6347C8.30752 72.8241 8.4808 72.9747 8.68528 73.0684L12.8499 74.4573C13.0011 74.5032 13.1387 74.5858 13.2505 74.6976C13.3622 74.8094 13.4447 74.9471 13.4906 75.0984L14.9855 79.2652C15.0558 79.479 15.1917 79.6651 15.3738 79.797C15.556 79.929 15.7751 80 16 80C16.2249 80 16.444 79.929 16.6262 79.797C16.8083 79.6651 16.9442 79.479 17.0145 79.2652L18.5094 75.0984C18.5553 74.9471 18.6378 74.8094 18.7495 74.6976C18.8613 74.5858 18.9989 74.5032 19.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        667712: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("301165"),
                d = l("65597"),
                o = l("669491"),
                u = l("819855"),
                c = l("77078"),
                f = l("430568"),
                m = l("841098"),
                h = l("385976"),
                C = l("795228"),
                x = l("695284"),
                g = l("956089"),
                N = l("782340"),
                p = l("489319");

            function S(e) {
                var t;
                let {
                    guildId: l,
                    option: s,
                    selected: S,
                    onSelect: v,
                    hideMemberCount: E,
                    canBeNew: _
                } = e, I = (0, u.isThemeDark)((0, m.default)()), [T, O] = n.useState(!1), j = T && !E, A = n.useRef(null), {
                    reducedMotion: R
                } = n.useContext(c.AccessibilityPreferencesContext), b = (0, d.default)([h.default], () => {
                    var e, l, a;
                    return (null === (e = s.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (t = null === (l = h.default.getCustomEmojiById(null === (a = s.emoji) || void 0 === a ? void 0 : a.id)) || void 0 === l ? void 0 : l.animated) && void 0 !== t && t
                }), M = (0, C.default)(l, 1e3), L = null == M || null == s.roleIds ? 0 : Math.max(...s.roleIds.map(e => M[e])), D = _ && !S && s.isUnseen, y = (0, r.useSpring)({
                    transform: S || R.enabled ? "scale(1)" : "scale(0.7)",
                    opacity: S ? 1 : 0,
                    config: {
                        duration: 150
                    }
                }), B = (0, c.useToken)(o.default.colors.BACKGROUND_MODIFIER_ACCENT), w = (0, c.useToken)(o.default.unsafe_rawColors.BRAND_500), H = (0, r.useSpring)({
                    from: {
                        color: w.spring()
                    },
                    color: B.spring({
                        opacity: I ? .5 : .25
                    }),
                    config: {
                        duration: 300
                    },
                    delay: 500
                }), k = (0, r.useTransition)(j, {
                    from: {
                        transform: R.enabled ? "translateX(0)" : "translateX(8px)",
                        opacity: 0
                    },
                    enter: {
                        transform: "translateX(0)",
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    trail: 400,
                    config: {
                        duration: 150
                    }
                }), [F, U] = n.useState(!1);
                n.useEffect(() => {
                    if (j) return A.current = setTimeout(() => {
                        O(!1), A.current = null
                    }, 3e3), () => {
                        null != A.current && clearTimeout(A.current)
                    }
                }, [j]);
                let P = i(p.optionButtonWrapper, {
                        [p.selected]: S,
                        [p.pressed]: F
                    }),
                    G = D ? {
                        borderColor: H.color
                    } : {};
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(r.animated.div, {
                        style: G,
                        className: P,
                        children: (0, a.jsxs)(c.Clickable, {
                            className: i(p.optionButton),
                            onClick: () => {
                                O(!S), v(!S)
                            },
                            onMouseDown: () => U(!0),
                            onMouseUp: () => U(!1),
                            children: [null != s.emoji && (null != s.emoji.id || null != s.emoji.name) ? (0, a.jsx)(f.default, {
                                animated: s.emoji.animated || b,
                                className: p.buttonEmoji,
                                emojiId: s.emoji.id,
                                emojiName: s.emoji.name
                            }) : null, (0, a.jsxs)("div", {
                                className: p.buttonText,
                                children: [(0, a.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: s.title
                                }), s.description.length > 0 ? (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: s.description
                                }) : null]
                            }), (0, a.jsx)(r.animated.div, {
                                className: p.checkIcon,
                                style: y,
                                children: (0, a.jsx)(x.default, {
                                    width: 10,
                                    height: 10,
                                    color: o.default.unsafe_rawColors.WHITE_500.css
                                })
                            }), k((e, t) => L > 0 && t && (0, a.jsx)(r.animated.div, {
                                className: p.memberCount,
                                style: e,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: N.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                                        memberCount: L
                                    })
                                })
                            })), D && (0, a.jsx)(g.TextBadge, {
                                color: o.default.unsafe_rawColors.BRAND_260.css,
                                text: N.default.Messages.NEW,
                                className: p.newBadge
                            })]
                        })
                    })
                })
            }
        },
        469242: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("448105"),
                i = l.n(s),
                r = l("669491"),
                d = l("77078"),
                o = l("430568"),
                u = l("954419"),
                c = l("945330"),
                f = l("956089"),
                m = l("782340"),
                h = l("191134");

            function C(e) {
                return null != e && (null != e.id || null != e.name)
            }
            let x = {
                ...u.DEFAULT_SELECT_STYLES,
                control: (e, t) => {
                    let {
                        isDisabled: l,
                        menuIsOpen: a
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: l ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: a ? "8px 8px 0 0" : "8px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: l ? "not-allowed" : void 0,
                        pointerEvents: l ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                valueContainer: e => ({
                    ...e,
                    padding: "8px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    cursor: "text"
                }),
                indicatorsContainer: e => ({
                    ...e,
                    alignItems: "flex-start",
                    paddingTop: 4
                }),
                option: (e, t) => {
                    let {
                        isSelected: l,
                        isFocused: a
                    } = t;
                    return {
                        ...e,
                        ...l ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : a ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        },
                        cursor: "pointer",
                        display: "flex",
                        padding: 12,
                        alignItems: "center",
                        minHeight: 40,
                        "&:active": {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        },
                        "&:hover [data-hover=true]": {
                            opacity: 1
                        }
                    }
                }
            };

            function g(e) {
                let {
                    options: t,
                    value: l,
                    onChange: s,
                    canBeNew: g,
                    memberCounts: N
                } = e, p = e => {
                    e.preventDefault(), e.stopPropagation()
                }, S = n.useCallback(e => {
                    var n, i, r, u;
                    return (0, a.jsxs)("div", {
                        className: h.selectValuePill,
                        onMouseDown: p,
                        children: [C(e.emoji) && (0, a.jsx)(o.default, {
                            emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                            emojiName: null === (i = e.emoji) || void 0 === i ? void 0 : i.name,
                            animated: null !== (u = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== u && u
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: e.title
                        }), (0, a.jsx)(d.Clickable, {
                            className: h.selectValuePillClose,
                            onClick: () => {
                                s(t.filter(t => l.includes(t.id) && t.id !== e.id))
                            },
                            children: (0, a.jsx)(c.default, {
                                className: h.selectValuePillCloseIcon
                            })
                        })]
                    })
                }, [s, t, l]), v = n.useCallback(e => {
                    var t, l, n, s;
                    let i = null == N || null == e.roleIds ? 0 : Math.max(...e.roleIds.map(e => N[e])),
                        u = null != N && i > 0;
                    return (0, a.jsxs)("div", {
                        className: h.selectOption,
                        children: [(0, a.jsxs)("div", {
                            className: h.selectOptionTitle,
                            children: [C(e.emoji) && (0, a.jsx)(o.default, {
                                emojiId: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                                emojiName: null === (l = e.emoji) || void 0 === l ? void 0 : l.name,
                                animated: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.animated) && void 0 !== s && s
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: e.title
                            })]
                        }), g && e.isUnseen && (0, a.jsx)(f.TextBadge, {
                            color: r.default.unsafe_rawColors.BRAND_260.css,
                            text: m.default.Messages.NEW,
                            className: h.optionNewBadge
                        }), u && (0, a.jsx)("div", {
                            className: h.selectOptionMemberCount,
                            "data-hover": !0,
                            children: (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: m.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                                    memberCount: i
                                })
                            })
                        })]
                    })
                }, [g, N]), E = n.useCallback((e, t) => {
                    let {
                        data: l
                    } = e;
                    return 0 === t.length || i(t.toLowerCase(), l.title.toLowerCase())
                }, []);
                return (0, a.jsx)(u.default, {
                    styleOverrides: x,
                    clearable: !1,
                    isMulti: !0,
                    options: t,
                    onChange: s,
                    value: l,
                    closeMenuOnSelect: !1,
                    multiValueRenderer: S,
                    optionRenderer: v,
                    filterOption: E
                })
            }
        },
        986003: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                hasNotSetUpChannelOptIn: function() {
                    return c
                },
                toggleShowAllChannels: function() {
                    return f
                },
                optIntoAllChannelsForExistingMember: function() {
                    return m
                }
            }), l("151426");
            var a = l("921031");
            l("374363");
            var n = l("923959"),
                s = l("26989"),
                i = l("282109"),
                r = l("568734"),
                d = l("629220"),
                o = l("512395"),
                u = l("657944");

            function c(e) {
                var t, l;
                let a = (0, o.isOptInEnabledForGuild)(e),
                    n = null !== (l = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== l ? l : 0,
                    d = (0, r.hasFlag)(n, u.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = i.default.getOptedInChannels(e).size > 0;
                return !a && !d && !c
            }

            function f(e) {
                if (c(e)) {
                    m(e);
                    return
                } {
                    let t = (0, o.isOptInEnabledForGuild)(e);
                    (0, d.setGuildOptIn)(e, !t)
                }
            }

            function m(e) {
                let {
                    include: t = new Set,
                    exclude: l = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = n.default.getChannels(e), i = [...s[0, n.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, n.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isThread() && !l.has(t.id)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                t.forEach(e => i.push(e)), a.default.onboardExistingMember(e, new Set(i))
            }
        },
        61845: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("884691"),
                n = l("446674"),
                s = l("913144"),
                i = l("820542"),
                r = l("870691"),
                d = l("282109"),
                o = l("629220"),
                u = l("986003"),
                c = l("49111");

            function f(e) {
                s.default.dispatch({
                    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
                    guildId: e
                })
            }

            function m(e) {
                let t = (0, n.useStateFromStores)([d.default], () => d.default.getPendingChannelUpdates(e));
                a.useEffect(() => (f(e), () => f(e)), [e]), a.useEffect(() => {
                    null != t && (0, o.updateOptInChannelsBatched)(e, t)
                }, [e, t]);
                let l = a.useCallback((e, t, l) => {
                    let a = d.default.isChannelOptedIn(e, t),
                        n = t === l;
                    !a && r.default.isCollapsed(l) && null != l && (0, i.categoryExpand)(l), (0, u.hasNotSetUpChannelOptIn)(e) ? n ? (0, u.optIntoAllChannelsForExistingMember)(e, {
                        include: new Set([t])
                    }) : (0, u.optIntoAllChannelsForExistingMember)(e, {
                        exclude: new Set([t])
                    }) : (0, o.updateOptInChannelsImmediate)(e, t, !a, {
                        section: c.AnalyticsSections.CHANNEL_BROWSER
                    })
                }, []);
                return {
                    onChannelClick: l
                }
            }
        },
        5973: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ChannelBrowserSidebar: function() {
                    return O
                },
                default: function() {
                    return j
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                d = l("77078"),
                o = l("665182"),
                u = l("462998"),
                c = l("982108"),
                f = l("245997"),
                m = l("923959"),
                h = l("305961"),
                C = l("957255"),
                x = l("810567"),
                g = l("689476"),
                N = l("599110"),
                p = l("676143"),
                S = l("724268"),
                v = l("49111"),
                E = l("724210"),
                _ = l("782340"),
                I = l("505658"),
                T = l("305794");

            function O(e) {
                let {
                    channelId: t
                } = e;
                return (0, a.jsx)(o.default, {
                    sidebarType: o.ChatSidebarType.ThreadSidebar,
                    maxWidth: 600,
                    children: (0, a.jsx)(u.default, {
                        channelId: t,
                        baseChannelId: E.StaticChannelRoute.CHANNEL_BROWSER
                    })
                })
            }

            function j(e) {
                let {
                    guildId: t
                } = e, [s, o] = n.useState(""), u = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t)), O = (0, r.useStateFromStores)([m.default], () => m.default.getChannels(t)), j = (0, r.useStateFromStores)([f.default], () => f.default.getCategories(t)), A = (0, p.useFilterCategoriesByQuery)(t, j, O, s), R = (0, r.useStateFromStores)([C.default], () => C.default.canWithPartialContext(v.Permissions.MANAGE_CHANNELS, {
                    guildId: t
                })), b = (0, r.useStateFromStores)([c.default], () => null != c.default.getCurrentSidebarChannelId(E.StaticChannelRoute.CHANNEL_BROWSER)), M = n.useCallback(() => o(""), [o]), L = n.useCallback(() => {
                    (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("581354").then(l.bind(l, "581354"));
                        return l => (0, a.jsx)(e, {
                            ...l,
                            channelType: null,
                            guildId: t
                        })
                    })
                }, [t]);
                return null == u ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: i(T.chat, I.container),
                        children: (0, a.jsxs)("div", {
                            className: i(I.pageBody),
                            children: [(0, a.jsxs)("div", {
                                className: I.header,
                                children: [(0, a.jsx)(x.default, {
                                    className: I.search,
                                    size: x.default.Sizes.MEDIUM,
                                    query: s,
                                    onChange: e => {
                                        "" === s && "" !== e && N.default.track(v.AnalyticEvents.SEARCH_STARTED, {
                                            search_type: "channel browser"
                                        }), o(e.toLowerCase())
                                    },
                                    onClear: M,
                                    placeholder: _.default.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
                                }), R ? (0, a.jsxs)(d.Button, {
                                    className: I.createButton,
                                    innerClassName: I.createButtonInner,
                                    onClick: L,
                                    children: [(0, a.jsx)(g.default, {
                                        className: I.createIcon
                                    }), _.default.Messages.CREATE]
                                }) : null]
                            }), (0, a.jsx)(S.default, {
                                className: I.browser,
                                channels: O,
                                categories: A,
                                guild: u,
                                hasSidebar: b
                            })]
                        })
                    })
                })
            }
        },
        341258: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIsChecked: function() {
                    return r
                },
                useIsDisabled: function() {
                    return d
                },
                useDisabledTooltip: function() {
                    return o
                }
            });
            var a = l("446674"),
                n = l("282109"),
                s = l("986003"),
                i = l("782340");

            function r(e, t, l) {
                return (0, a.useStateFromStores)([n.default], () => {
                    var a, i, r;
                    if (t === l) return n.default.isChannelOptedIn(e, t, !0);
                    return a = e, i = t, r = n.default, !!(0, s.hasNotSetUpChannelOptIn)(a) || r.isChannelOptedIn(a, i, !0) || null != l && n.default.isChannelOptedIn(e, l, !0)
                })
            }

            function d(e, t, l) {
                return (0, a.useStateFromStores)([n.default], () => t !== l && null != l && n.default.isChannelOptedIn(e, l, !0))
            }

            function o(e, t) {
                return (0, a.useStateFromStores)([n.default], () => {
                    if (null != t && n.default.isChannelOptedIn(e, t, !0)) return i.default.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY
                })
            }
        },
        724268: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return F
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                d = l("151426"),
                o = l("669491"),
                u = l("77078"),
                c = l("272030"),
                f = l("483038"),
                m = l("10641"),
                h = l("848848"),
                C = l("915675"),
                x = l("41594"),
                g = l("367376"),
                N = l("15684"),
                p = l("393414"),
                S = l("208021"),
                v = l("716214"),
                E = l("401690"),
                _ = l("98292"),
                I = l("956089"),
                T = l("676143"),
                O = l("61845"),
                j = l("341258"),
                A = l("9108"),
                R = l("49111"),
                b = l("724210"),
                M = l("782340"),
                L = l("360330");
            let D = new Set([R.ChannelTypes.GUILD_FORUM, R.ChannelTypes.GUILD_MEDIA]),
                y = new Set([R.ChannelTypes.GUILD_VOICE, R.ChannelTypes.GUILD_STAGE_VOICE]);

            function B(e) {
                let {
                    guild: t,
                    channel: n,
                    onCategoryClick: s
                } = e, r = (0, j.useIsChecked)(t.id, n.id, n.id), d = (0, j.useIsDisabled)(t.id, n.id, n.id);
                return (0, a.jsxs)("div", {
                    className: i(L.categoryRow, {
                        [L.uncategorized]: "null" === n.id
                    }),
                    onContextMenu: e => {
                        (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await l.el("142047").then(l.bind(l, "142047"));
                            return l => (0, a.jsx)(e, {
                                ...l,
                                channel: n,
                                guild: t
                            })
                        })
                    },
                    children: [(0, a.jsx)(u.Text, {
                        className: L.categoryText,
                        color: "text-muted",
                        variant: "text-xs/semibold",
                        lineClamp: 1,
                        children: n.name
                    }), "null" !== n.id && !d && (0, a.jsxs)(u.Clickable, {
                        className: L.selectAll,
                        onClick: () => {
                            !d && s(t.id, n.id, n.id)
                        },
                        children: [(0, a.jsx)(u.Checkbox, {
                            className: L.selectAllCheckbox,
                            size: 14,
                            shape: u.Checkbox.Shapes.SMALL_BOX,
                            value: r,
                            type: u.Checkbox.Types.INVERTED,
                            displayOnly: !0
                        }), (0, a.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: M.default.Messages.CHANNEL_BROWSER_SELECT_ALL
                        })]
                    })]
                })
            }
            let w = n.memo(function() {
                    return (0, a.jsx)("div", {
                        className: L.separator
                    })
                }),
                H = n.memo(function(e) {
                    let {
                        index: t
                    } = e;
                    return (0, a.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: L.subtitleSeparator,
                        children: "\xb7"
                    }, "separator-".concat(t))
                }),
                k = n.memo(function(e) {
                    let {
                        channel: t,
                        category: n,
                        guild: s,
                        isFirstChannel: d,
                        isLastChannel: m,
                        onChannelClick: O,
                        tooltipDirection: A = "right"
                    } = e, {
                        isSubscriptionGated: B
                    } = (0, h.default)(t.id), k = (0, j.useIsChecked)(s.id, t.id, n.id), F = (0, j.useIsDisabled)(s.id, t.id, n.id), U = (0, j.useDisabledTooltip)(s.id, n.id), P = (0, r.useStateFromStores)([E.default], () => E.default.getActiveThreadCount(s.id, t.id)), G = (0, r.useStateFromStores)([f.default], () => f.default.getHighlightedMessageIdCount(t.id)), W = (0, r.useStateFromStores)([N.default], () => N.default.shouldIndicateNewChannel(s.id, t.id)), Y = e => {
                        if (!F) return e.stopPropagation(), O(s.id, t.id, n.id), !0
                    }, z = e => {
                        t.isGuildVocal() ? (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await l.el("168003").then(l.bind(l, "168003"));
                            return l => (0, a.jsx)(e, {
                                ...l,
                                channel: t,
                                guild: s
                            })
                        }) : (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await l.el("327241").then(l.bind(l, "327241"));
                            return l => (0, a.jsx)(e, {
                                ...l,
                                channel: t,
                                guild: s
                            })
                        })
                    }, V = function(e, t, l) {
                        let n = [];
                        return l > 0 && n.push((0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            className: L.channelSubtitle,
                            color: "text-brand",
                            children: M.default.Messages.CHANNEL_HIGHLIGHTS_COUNT.format({
                                count: l
                            })
                        }, "thread-count")), R.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.type) && t >= 1 && n.push((0, a.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            className: L.channelSubtitle,
                            children: M.default.Messages.ACTIVE_FORUM_POST_COUNT.format({
                                count: t
                            })
                        }, "thread-count")), !y.has(e.type) && n.push((0, a.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            className: L.channelSubtitle,
                            children: (0, T.getActiveAgoTimestamp)(e.id)
                        }, "active")), null != e.topic && e.topic.length > 0 && n.push((0, a.jsx)(_.default, {
                            children: (0, a.jsx)(u.Text, {
                                className: L.topic,
                                variant: "text-xs/normal",
                                children: g.default.parseTopic(e.topic, !0, {
                                    channelId: e.id
                                })
                            })
                        }, "topic")), [n.map((e, t) => [e, (0, a.jsx)(H, {
                            index: t
                        }, "subtitle-separator-".concat(t))])].flat(2).slice(0, -1)
                    }(t, P, G), Z = e => (e.stopPropagation(), D.has(t.type) || e.shiftKey) ? ((0, p.transitionToGuild)(s.id, t.id), !0) : t.isGuildStageVoice() || t.isGuildVoice() ? ((0, v.connectAndOpen)(t), !0) : (S.default.openChannelAsSidebar({
                        guildId: t.guild_id,
                        channelId: t.id,
                        baseChannelId: b.StaticChannelRoute.CHANNEL_BROWSER
                    }), !0), X = M.default.Messages.CHANNEL_BROWSER_VIEW;
                    t.isGuildStageVoice() || t.isGuildVoice() ? X = M.default.Messages.JOIN : t.isForumLikeChannel() && (X = M.default.Messages.OPEN);
                    let q = F ? "text-muted" : "text-normal",
                        K = (0, u.useToken)(F ? o.default.colors.TEXT_MUTED : o.default.colors.TEXT_NORMAL).hex();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.Tooltip, {
                            text: U,
                            delay: 500,
                            position: A,
                            children: e => (0, a.jsxs)(u.Clickable, {
                                className: i(L.channelRow, {
                                    [L.firstChannel]: d,
                                    [L.lastChannel]: m,
                                    [L.disabled]: F
                                }),
                                ...e,
                                onClick: Y,
                                onContextMenu: z,
                                children: [(0, a.jsxs)("div", {
                                    className: L.channelInfo,
                                    children: [(0, a.jsxs)("div", {
                                        className: L.channelName,
                                        children: [(0, a.jsx)(x.ChannelItemIcon, {
                                            channel: t,
                                            guild: s
                                        }), (0, a.jsx)(_.default, {
                                            className: L.name,
                                            children: (0, a.jsx)(u.Text, {
                                                className: L.channelText,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: q,
                                                children: t.name
                                            })
                                        }), B ? (0, a.jsx)(C.default, {
                                            color: K,
                                            className: L.premiumIcon
                                        }) : null, W ? (0, a.jsx)(I.TextBadge, {
                                            text: M.default.Messages.NEW,
                                            color: o.default.unsafe_rawColors.BRAND_260.css,
                                            className: L.titleBadge
                                        }) : null]
                                    }), (0, a.jsx)("div", {
                                        className: L.channelSubtitles,
                                        children: V
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: L.channelActions,
                                    children: [(0, a.jsx)(u.Button, {
                                        look: u.ButtonLooks.OUTLINED,
                                        color: u.ButtonColors.PRIMARY,
                                        size: u.ButtonSizes.SMALL,
                                        className: L.viewChannelButton,
                                        onClick: Z,
                                        children: X
                                    }), (0, a.jsx)(u.Checkbox, {
                                        "aria-checked": k,
                                        value: k,
                                        type: u.Checkbox.Types.INVERTED,
                                        disabled: F,
                                        innerClassName: L.checkboxInner,
                                        displayOnly: !0
                                    })]
                                })]
                            })
                        }), !m && (0, a.jsx)(w, {})]
                    })
                });

            function F(e) {
                let {
                    categories: t,
                    guild: l,
                    className: s,
                    innerClassName: r,
                    hasSidebar: o
                } = e, {
                    onChannelClick: c
                } = (0, O.default)(l.id), f = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX), h = f ? 0 : -1, C = n.useCallback(e => {
                    let {
                        section: n
                    } = e;
                    if (0 === n && -1 === h) return null;
                    let s = t._categories[n + h];
                    return (0, a.jsx)(B, {
                        channel: s.channel,
                        guild: l,
                        onCategoryClick: c
                    }, s.channel.id)
                }, [t, l, h, c]), x = n.useCallback(e => {
                    let {
                        section: n,
                        row: s
                    } = e;
                    if (0 === n && -1 === h) return (0, a.jsx)(A.default, {
                        guild: l
                    });
                    let i = t._categories[n + h],
                        r = t[i.channel.id][s];
                    return null == r ? null : (0, a.jsx)(k, {
                        category: i.channel,
                        channel: r.channel,
                        guild: l,
                        isFirstChannel: 0 === s,
                        isLastChannel: t[i.channel.id].length - 1 === s,
                        tooltipDirection: o ? "right" : "top",
                        onChannelClick: c
                    }, r.channel.id)
                }, [t, l, h, o, c]), g = (0, A.useNuxCardHeight)(l.id), N = (0, T.useChannelBrowserSections)(l.id, t, 64, g);
                return (0, a.jsx)(u.ListAuto, {
                    className: s,
                    innerClassName: i(r, L.scrollerInner),
                    sectionHeight: 48,
                    rowHeight: e => N[e].rowHeight,
                    renderSection: C,
                    renderRow: x,
                    sections: N.map(e => e.rowCount)
                }, "channel-browser-list")
            }
        },
        9108: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useNuxCardHeight: function() {
                    return N
                },
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                i = l("151426"),
                r = l("77078"),
                d = l("10641"),
                o = l("592407"),
                u = l("584027"),
                c = l("945330"),
                f = l("512395"),
                m = l("49111"),
                h = l("994428"),
                C = l("782340"),
                x = l("20458"),
                g = l("652720");

            function N(e) {
                let t = (0, f.useShouldShowOnboardingAdminUpsellForGuild)(e);
                return t ? 250 : 152
            }

            function p(e) {
                let {
                    guild: t
                } = e, l = (0, f.useShouldShowOnboardingAdminUpsellForGuild)(t.id), n = (0, d.useIsDismissibleContentDismissed)(i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), N = l && !n ? i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.DismissibleContent.CHANNEL_BROWSER_NUX;
                (0, d.requestMarkDismissibleContentAsShown)(N);
                let p = l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)(r.Heading, {
                            className: x.heading,
                            color: "always-white",
                            variant: "heading-lg/semibold",
                            children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION
                        }), (0, a.jsx)(r.Button, {
                            className: x.checkItOut,
                            onClick: () => {
                                o.default.open(t.id, m.GuildSettingsSections.ONBOARDING), (0, d.markDismissibleContentAsDismissed)(N, {
                                    dismissAction: h.ContentDismissActionType.PRIMARY
                                })
                            },
                            look: r.Button.Looks.INVERTED,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "none",
                                children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA
                            })
                        })]
                    }), (0, a.jsx)(u.OnboardingPreview, {
                        isTooltip: !0
                    })]
                }) : (0, a.jsxs)("div", {
                    className: x.nuxContent,
                    children: [(0, a.jsx)("img", {
                        width: 180,
                        className: x.image,
                        src: g,
                        alt: "",
                        "aria-hidden": !0
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(r.Heading, {
                            className: x.heading,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            children: C.default.Messages.CHANNEL_BROWSER_NUX_TITLE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION
                        }), (0, a.jsx)(r.Text, {
                            className: x.tip,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format()
                        })]
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: s(x.container, {
                        [x.adminUpsell]: l
                    }),
                    children: [(0, a.jsx)(r.Clickable, {
                        className: x.closeButton,
                        onClick: () => {
                            (0, d.markDismissibleContentAsDismissed)(N, {
                                dismissAction: h.ContentDismissActionType.DISMISS
                            })
                        },
                        children: (0, a.jsx)(c.default, {})
                    }), p]
                })
            }
        }
    }
]);