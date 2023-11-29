(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38969"], {
        837648: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOnboardingDropdownExperiment: function() {
                    return s
                },
                getOnboardingDropdownExperiment: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-02_onboardingdropdowns",
                label: "Enables dropdown selections from onboarding prompts",
                defaultConfig: {
                    dropdownsAllowed: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        dropdownsAllowed: !0
                    }
                }]
            });

            function s(e) {
                return l.useExperiment({
                    guildId: e,
                    location: "a12ce7_1"
                }, {
                    autoTrackExposure: !1
                })
            }

            function i(e) {
                return l.getCurrentConfig({
                    guildId: e,
                    location: "a12ce7_2"
                })
            }
        },
        75061: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                TestimonialHero: function() {
                    return O
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                d = n("446674"),
                o = n("77078"),
                u = n("206230"),
                c = n("246053"),
                N = n("782340"),
                _ = n("545446");

            function I(e) {
                let {
                    message: t,
                    adminTitle: n,
                    profilePic: l,
                    emphasisColor: s = "interactive-normal",
                    arrowPosition: r,
                    className: d
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(_.testimonialContainer, d),
                    children: [(0, a.jsx)(E, {
                        testimonial: {
                            message: t,
                            adminTitle: n,
                            profilePic: l,
                            emphasisColor: s
                        }
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-lg/bold",
                        className: _.quotes,
                        children: "“"
                    }), (0, a.jsx)("div", {
                        className: i(_.arrow, {
                            [_.arrowRight]: "right" === r,
                            [_.arrowLeft]: "left" === r
                        }),
                        children: (0, a.jsx)(f, {})
                    })]
                })
            }

            function E(e) {
                let {
                    testimonial: t,
                    className: n
                } = e, {
                    message: l,
                    profilePic: s,
                    adminTitle: i,
                    emphasisColor: r = "interactive-normal"
                } = t;
                return (0, a.jsxs)("div", {
                    className: n,
                    children: [(0, a.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: l.format({
                            testimonialHook: (e, t) => (0, a.jsx)(o.Text, {
                                tag: "span",
                                variant: "text-sm/bold",
                                color: r,
                                children: e
                            }, t)
                        })
                    }), (0, a.jsxs)("div", {
                        className: _.userContainer,
                        children: [(0, a.jsx)(o.Avatar, {
                            src: s,
                            size: o.AvatarSizes.SIZE_16,
                            "aria-hidden": !0
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: i
                        })]
                    })]
                })
            }

            function f() {
                return (0, a.jsx)("svg", {
                    width: "12",
                    height: "20",
                    viewBox: "0 0 12 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M11.5 0.662598H0L11.5 19.1626V0.662598Z",
                        fill: "#2B2D31"
                    })
                })
            }

            function O(e) {
                let {
                    testimonials: t
                } = e, [
                    [n, s], i
                ] = l.useState([0, "right"]), r = l.useCallback(() => {
                    i(e => {
                        let [n] = e;
                        return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"]
                    })
                }, [i, t.length]), d = l.useCallback(() => {
                    i(e => {
                        let [n] = e;
                        return [(n + 1) % t.length, "right"]
                    })
                }, [i, t.length]), u = t[n], I = l.useCallback((e, t, n, l) => (0, a.jsx)(S, {
                    item: t,
                    state: n,
                    cleanup: l,
                    direction: s
                }, e), [s]);
                return (0, a.jsxs)("div", {
                    className: _.testimonialHeroContainer,
                    children: [(0, a.jsx)("div", {
                        className: _.animatedContainer,
                        children: (0, a.jsx)(o.TransitionGroup, {
                            items: [u],
                            renderItem: I,
                            getItemKey: e => e.adminTitle
                        })
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-lg/bold",
                        className: _.heroQuotes,
                        children: "“"
                    }), (0, a.jsxs)("div", {
                        className: _.testimonialsControls,
                        children: [(0, a.jsxs)(o.Button, {
                            className: _.testimonialControl,
                            innerClassName: _.testimonialControlInner,
                            onClick: r,
                            size: o.Button.Sizes.MIN,
                            color: o.Button.Colors.PRIMARY,
                            children: [(0, a.jsx)(c.default, {
                                className: _.testimonialControlIcon,
                                direction: c.default.Directions.LEFT
                            }), (0, a.jsx)(o.HiddenVisually, {
                                children: N.default.Messages.BACK
                            })]
                        }), (0, a.jsxs)(o.Button, {
                            className: _.testimonialControl,
                            innerClassName: _.testimonialControlInner,
                            onClick: d,
                            size: o.Button.Sizes.MIN,
                            color: o.Button.Colors.PRIMARY,
                            children: [(0, a.jsx)(c.default, {
                                className: _.testimonialControlIcon,
                                direction: c.default.Directions.RIGHT
                            }), (0, a.jsx)(o.HiddenVisually, {
                                children: N.default.Messages.NEXT
                            })]
                        })]
                    })]
                })
            }

            function S(e) {
                let {
                    item: t,
                    state: n,
                    cleanup: l,
                    direction: s
                } = e, i = (0, d.useStateFromStores)([u.default], () => u.default.useReducedMotion), [c] = (0, r.useSpring)(() => {
                    switch (n) {
                        case o.TransitionStates.ENTERED:
                            return {
                                from: {
                                    transform: "right" === s ? "translateX(150%)" : "translate(-150%)"
                                }, to: {
                                    transform: "translateX(0%)"
                                }, immediate: i
                            };
                        case o.TransitionStates.YEETED:
                            return {
                                from: {
                                    transform: "translateX(0%)"
                                }, to: {
                                    transform: "right" === s ? "translateX(-150%)" : "translate(150%)"
                                }, immediate: i, onRest: l
                            };
                        default:
                            return {}
                    }
                }, [n]);
                return (0, a.jsx)(r.animated.div, {
                    style: c,
                    children: (0, a.jsx)(E, {
                        className: _.testimonial,
                        testimonial: t
                    })
                })
            }
        },
        749623: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NewMemberAction: function() {
                    return R
                },
                default: function() {
                    return x
                }
            }), n("702976");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("679653"),
                d = n("419830"),
                o = n("42203"),
                u = n("26989"),
                c = n("305961"),
                N = n("957255"),
                _ = n("593195"),
                I = n("578706"),
                E = n("904276"),
                f = n("641892"),
                O = n("315102"),
                S = n("568734"),
                m = n("347895"),
                T = n("698882"),
                D = n("675305"),
                g = n("205454"),
                A = n("49111"),
                G = n("657944"),
                h = n("782340"),
                L = n("280337");

            function R(e) {
                let {
                    channelId: t,
                    title: n,
                    channelName: l,
                    emojiId: s,
                    emojiName: r,
                    icon: d,
                    completed: o,
                    Icon: u
                } = e, c = O.default.getNewMemberActionIconURL({
                    channelId: t,
                    icon: d
                });
                return (0, a.jsxs)("div", {
                    className: L.action,
                    children: [null != c ? (0, a.jsx)("img", {
                        src: c,
                        className: L.icon,
                        width: 32,
                        height: 32,
                        alt: "",
                        "aria-hidden": !0
                    }) : (0, a.jsx)(g.default, {
                        emojiId: s,
                        emojiName: r,
                        size: g.CTAEmojiSize.LARGE,
                        defaultComponent: (0, a.jsx)("div", {
                            className: L.channelIconContainer,
                            children: (0, a.jsx)(u, {
                                className: L.channelIcon
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: L.actionInfo,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: n
                        }), null != l ? (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: l
                        }) : null]
                    }), o ? (0, a.jsx)(I.default, {
                        backgroundColor: "#fff",
                        className: L.checkCircleCompleted,
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(E.default, {
                        className: L.checkCircle,
                        width: 24,
                        height: 24
                    })]
                })
            }

            function p(e) {
                var t;
                let {
                    action: n,
                    completed: u
                } = e, {
                    channelId: c,
                    title: I,
                    emoji: E,
                    icon: f
                } = n, {
                    id: O,
                    name: S
                } = null != E ? E : {}, T = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(c)), D = (0, r.default)(T, !0), g = (0, s.useStateFromStores)([N.default], () => N.default.can(A.Permissions.VIEW_CHANNEL, T)), G = l.useCallback(() => {
                    if (null == T) return null;
                    (0, m.selectNewMemberActionChannel)(T.guild_id, T.id)
                }, [T]);
                if (null == T || !g) return null;
                let h = null !== (t = (0, d.getChannelIconComponent)(T)) && void 0 !== t ? t : _.default;
                return (0, a.jsx)(i.Clickable, {
                    className: L.clickableAction,
                    onClick: G,
                    children: (0, a.jsx)(R, {
                        channelId: c,
                        title: I,
                        channelName: D,
                        emojiId: O,
                        emojiName: S,
                        icon: f,
                        completed: u,
                        Icon: h
                    })
                })
            }

            function x(e) {
                let {
                    guildId: t
                } = e, n = (0, s.useStateFromStores)([T.default], () => T.default.getNewMemberActions(t), [t]), r = (0, s.useStateFromStores)([D.default], () => D.default.getCompletedActions(t)), d = (0, s.useStateFromStores)([u.default], () => u.default.getSelfMember(t)), o = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t));
                l.useEffect(() => {
                    var e;
                    null == r && (null == d ? void 0 : d.flags) != null && (0, S.hasFlag)(null !== (e = d.flags) && void 0 !== e ? e : 0, G.GuildMemberFlags.STARTED_HOME_ACTIONS) && (0, m.fetchNewMemberActions)(t)
                }, [r, t, null == d ? void 0 : d.flags]);
                let N = l.useCallback(() => {
                    null != o && null != o.rulesChannelId && (0, m.selectNewMemberActionChannel)(o.id, o.rulesChannelId)
                }, [o]);
                return null == d || null == n || 0 === n.length ? null : (0, a.jsxs)("div", {
                    className: L.container,
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: h.default.Messages.GET_STARTED
                    }), n.map(e => (0, a.jsx)(p, {
                        action: e,
                        completed: (null == r ? void 0 : r[e.channelId]) === !0,
                        guildId: t
                    }, e.channelId)), (null == o ? void 0 : o.rulesChannelId) != null && (0, a.jsxs)(i.Clickable, {
                        className: L.action,
                        onClick: N,
                        children: [(0, a.jsx)("div", {
                            className: L.rulesIconContainer,
                            children: (0, a.jsx)(f.default, {
                                className: L.rulesIcon
                            })
                        }), (0, a.jsx)("div", {
                            className: L.actionInfo,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: h.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
                            })
                        })]
                    })]
                })
            }
        },
        768596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("509043"),
                d = n("65597"),
                o = n("854588"),
                u = n("77078"),
                c = n("851387"),
                N = n("841098"),
                _ = n("206230"),
                I = n("388491"),
                E = n("506885"),
                f = n("217513"),
                O = n("528438"),
                S = n("430312"),
                m = n("305961"),
                T = n("697218"),
                D = n("928201"),
                g = n("387111"),
                A = n("158998"),
                G = n("590456"),
                h = n("933488");

            function L(e) {
                var t;
                let {
                    guildId: n,
                    welcomeMessage: s,
                    className: L
                } = e, R = (0, N.default)(), p = (0, d.default)([m.default], () => m.default.getGuild(n)), x = (0, d.default)([_.default], () => _.default.syncProfileThemeWithUserTheme), P = (0, d.default)([_.default], () => _.default.useReducedMotion), M = (0, d.default)([T.default], () => T.default.getUser(null == s ? void 0 : s.authorIds[0])), U = (0, d.default)([T.default], () => T.default.getCurrentUser()), v = (0, f.default)(null == M ? void 0 : M.id, n), [C] = (0, O.default)(M, v), B = x ? R : null !== (t = (0, I.getProfileTheme)(C)) && void 0 !== t ? t : R, j = o.default.meta.resolveSemanticColor(B, o.default.colors.BACKGROUND_SECONDARY), b = l.useMemo(() => {
                    var e;
                    return null !== (e = null == s ? void 0 : s.authorIds) && void 0 !== e ? e : []
                }, [s]);
                l.useEffect(() => {
                    c.default.requestMembersById(n, b)
                }, [n, b]), l.useEffect(() => {
                    null != M && (0, E.default)(M.id, M.getAvatarURL(n, 48), {
                        guildId: n
                    })
                }, [M, n]);
                let w = (0, A.useName)(U);
                if (null == M || null == U || null == s) return null;
                let H = null != p && p.ownerId === M.id;
                return (0, a.jsx)("div", {
                    className: i(h.welcomeMessageContainer, L),
                    children: (0, a.jsxs)(S.default, {
                        className: h.welcomeMessageProfileContainer,
                        user: M,
                        guildId: n,
                        profileType: G.UserProfileTypes.CARD,
                        forceShowPremium: !0,
                        useDefaultClientTheme: !0,
                        children: [(0, a.jsx)("div", {
                            className: h.avatarBackground
                        }), P ? (0, a.jsx)(u.Avatar, {
                            src: M.getAvatarURL(n, 48),
                            size: u.AvatarSizes.SIZE_48,
                            className: h.avatar,
                            "aria-label": M.username
                        }) : (0, a.jsx)(u.AnimatedAvatar, {
                            src: M.getAvatarURL(n, 48),
                            size: u.AvatarSizes.SIZE_48,
                            className: h.avatar,
                            "aria-label": M.username
                        }), (0, a.jsx)("div", {
                            className: h.avatarBorder,
                            style: {
                                backgroundColor: null != C ? (0, r.int2rgba)(C, 1) : j
                            }
                        }), (0, a.jsxs)("div", {
                            className: h.welcomeMessageContent,
                            children: [(0, a.jsxs)("div", {
                                className: h.adminUsernameContainer,
                                children: [(0, a.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    children: g.default.getName(n, null, M)
                                }), H ? (0, a.jsx)(D.default, {
                                    className: h.ownerIcon
                                }) : null]
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-md/medium",
                                children: function(e, t) {
                                    let n = e.split(/\[@username\]/g);
                                    return (0, a.jsx)("span", {
                                        children: n.map((e, l) => (0, a.jsxs)(a.Fragment, {
                                            children: [e, l < n.length - 1 ? (0, a.jsx)(u.Text, {
                                                tag: "span",
                                                variant: "text-md/semibold",
                                                children: "@".concat(t)
                                            }) : null]
                                        }))
                                    })
                                }(null == s ? void 0 : s.message, null != w ? w : U.username)
                            })]
                        })]
                    })
                })
            }
        },
        653274: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                i = n("913144"),
                r = n("863636"),
                d = n("900938"),
                o = n("49111");
            let u = !1,
                c = null,
                N = new Set;

            function _() {
                (function() {
                    u = !1, c = null
                })(), null != (c = d.default.getGuildId()) && d.default.getSection() === o.GuildSettingsSections.ONBOARDING && (N = new Set(r.default.getDefaultChannelIds(c)))
            }
            class I extends s.default.Store {
                initialize() {
                    this.waitFor(d.default, r.default)
                }
                hasChanges() {
                    if (null == c) return !1;
                    let e = r.default.getDefaultChannelIds(c).sort(),
                        t = Array.from(N).sort();
                    return !l.isEqual(e, t)
                }
                get guildId() {
                    return c
                }
                get submitting() {
                    return u
                }
                get editedDefaultChannelIds() {
                    return N
                }
            }
            I.displayName = "GuildSettingsDefaultChannelsStore";
            var E = new I(i.default, {
                GUILD_SETTINGS_INIT: _,
                GUILD_SETTINGS_SET_SECTION: _,
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: _,
                GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: _,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: _,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
                    u = !1
                },
                GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    (N = new Set(N)).has(t) ? N.delete(t) : N.add(t)
                },
                GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
                    u = !0
                }
            })
        },
        131835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setOnboardingStep: function() {
                    return D
                },
                dismissEducationUpsell: function() {
                    return g
                },
                toggleAdvancedSettings: function() {
                    return A
                },
                goToNextOnboardingStep: function() {
                    return G
                },
                goToPrevOnboardingStep: function() {
                    return h
                },
                startPreview: function() {
                    return L
                }
            }), n("222007");
            var a = n("913144"),
                l = n("404118"),
                s = n("863636"),
                i = n("471706"),
                r = n("380710"),
                d = n("937692"),
                o = n("233706"),
                u = n("479756"),
                c = n("507950"),
                N = n("42203"),
                _ = n("305961"),
                I = n("592407"),
                E = n("653274"),
                f = n("330724"),
                O = n("259483"),
                S = n("724210"),
                m = n("653138"),
                T = n("782340");

            function D(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_STEP",
                    step: e
                })
            }

            function g(e) {
                null != e && a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
                    upsellType: e
                })
            }
            async function A(e, t) {
                let n = s.default.getEnabled(e),
                    i = Array.from(E.default.editedDefaultChannelIds).filter(e => null != N.default.getChannel(e)),
                    [d, o] = (0, r.getChattableDefaultChannels)(e, [...i]);
                if (n && t === m.GuildOnboardingMode.ONBOARDING_DEFAULT && (o.length < m.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || d.length < m.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN)) {
                    l.default.show({
                        title: T.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: T.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
                    });
                    return
                }
                await (0, f.editOnboarding)(e, {
                    mode: t
                }), a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
                    guildId: e,
                    mode: t
                })
            }

            function G(e, t) {
                let {
                    homeSettingsEnabled: n
                } = (0, o.getOnboardingHomeAdminExperiment)(e), a = O.ONBOARDING_STEPS.findIndex(e => e === t);
                if (-1 !== a && a !== O.ONBOARDING_STEPS.length - 1) {
                    if (!n && O.ONBOARDING_STEPS[a + 1] === O.GuildSettingsOnboardingPage.HOME_SETTINGS) {
                        D(O.ONBOARDING_STEPS[a + 2]);
                        return
                    }
                    D(O.ONBOARDING_STEPS[a + 1])
                }
            }

            function h(e, t) {
                let {
                    homeSettingsEnabled: n
                } = (0, o.getOnboardingHomeAdminExperiment)(e), a = O.ONBOARDING_STEPS.findIndex(e => e === t);
                if (-1 !== a && 0 !== a) {
                    if (!n && O.ONBOARDING_STEPS[a - 1] === O.GuildSettingsOnboardingPage.HOME_SETTINGS) {
                        D(O.ONBOARDING_STEPS[a - 2]);
                        return
                    }
                    D(O.ONBOARDING_STEPS[a - 1])
                }
            }
            async function L(e) {
                let t = _.default.getGuild(e);
                null != t && (I.default.close(), (0, u.startImpersonating)(t.id, {
                    type: c.ImpersonateType.NEW_MEMBER,
                    roles: {},
                    optInChannels: new Set,
                    optInEnabled: !1,
                    onboardingResponses: new Set,
                    onboardingEnabled: !0,
                    memberOptions: {
                        isPending: t.hasVerificationGate(),
                        flags: 0
                    }
                }), i.default.resetOnboardingStatus(t.id), (0, d.discardOnboardingPromise)(t.id), await (0, d.default)({
                    guildId: t.id,
                    isPreview: !0,
                    returnChannelId: S.StaticChannelRoute.GUILD_HOME
                }))
            }
        },
        330724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resetGuildOnboardingPrompts: function() {
                    return E
                },
                editGuildOnboardingPrompt: function() {
                    return f
                },
                deleteGuildOnboardingPrompt: function() {
                    return O
                },
                editGuildOnboardingPrompts: function() {
                    return S
                },
                saveGuildOnboardingPrompts: function() {
                    return m
                },
                enableGuildOnboarding: function() {
                    return T
                },
                editOnboarding: function() {
                    return D
                },
                validateOptionRoles: function() {
                    return A
                }
            }), n("70102"), n("222007");
            var a = n("872717"),
                l = n("913144"),
                s = n("404118"),
                i = n("448993"),
                r = n("385976"),
                d = n("837648"),
                o = n("42203"),
                u = n("449008"),
                c = n("136278"),
                N = n("49111"),
                _ = n("653138"),
                I = n("782340");

            function E() {
                l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
                })
            }

            function f(e, t, n) {
                S(e, c.default.editedOnboardingPrompts.map(e => e.id === t ? {
                    ...e,
                    ...n
                } : e))
            }

            function O(e, t) {
                S(e, c.default.editedOnboardingPrompts.filter(e => e.id !== t))
            }

            function S(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
                        prompts: t
                    }), n) {
                    let n = t.map(n => g(e, t, n));
                    l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
                        errors: n
                    })
                }
            }
            async function m(e, t) {
                let {
                    dropdownsAllowed: n
                } = (0, d.getOnboardingDropdownExperiment)(e.id);
                if (!c.default.hasChanges()) return;
                let a = c.default.editedOnboardingPrompts;
                null != t && t.ignoreDefaultPrompt && 1 === a.length && (0, _.isDefaultPrompt)(a[0]) && (a = []);
                let N = a.map(t => {
                        let a = t.options.map(t => {
                            var n;
                            let a = null == t.roleIds ? t.roleIds : t.roleIds.filter(t => null != e.getRole(t)),
                                l = null == t.channelIds ? t.channelIds : t.channelIds.filter(e => null != o.default.getChannel(e)),
                                s = (null == t ? void 0 : null === (n = t.emoji) || void 0 === n ? void 0 : n.id) == null || null == r.default.getCustomEmojiById(t.emoji.id) ? void 0 : t.emoji.id;
                            return {
                                ...t,
                                roleIds: a,
                                channelIds: l,
                                emojiId: s
                            }
                        });
                        return {
                            ...t,
                            options: a,
                            type: a.length >= _.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD && n ? _.OnboardingPromptType.DROPDOWN : _.OnboardingPromptType.MULTIPLE_CHOICE
                        }
                    }),
                    E = N.filter(e => e.inOnboarding),
                    f = N.filter(e => !0 !== e.inOnboarding),
                    O = N.map(t => g(e, N, t));
                if (O.filter(u.isNotNullish).length > 0) throw l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
                    errors: O
                }), Error("failed to locally validate prompts");
                if (E.length > _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING) throw s.default.show({
                    title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                    body: I.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
                        numQuestions: _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
                    })
                }), l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
                    errors: O
                }), Error("too many prompts in onboarding");
                let S = [...E, ...f];
                l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT"
                });
                try {
                    await D(e.id, {
                        prompts: S.map(_.clientPromptToServerPrompt)
                    }), l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                        guildId: e.id,
                        updates: {
                            prompts: S
                        }
                    })
                } catch (n) {
                    var m;
                    let {
                        fieldName: e,
                        error: t
                    } = null !== (m = new(0, i.APIError)(n).getAnyErrorMessageAndField()) && void 0 !== m ? m : {};
                    throw s.default.show({
                        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: [e, t].filter(u.isNotNullish).join(": ")
                    }), l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
                    }), Error("failed to save prompts")
                }
            }
            async function T(e, t) {
                l.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
                    guildId: e,
                    updates: {
                        enabled: t
                    }
                });
                try {
                    await D(e, {
                        enabled: t
                    })
                } catch (a) {
                    var n;
                    let {
                        fieldName: e,
                        error: t
                    } = null !== (n = new(0, i.APIError)(a).getAnyErrorMessageAndField()) && void 0 !== n ? n : {};
                    s.default.show({
                        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: [e, t].filter(u.isNotNullish).join(": ")
                    })
                }
            }
            async function D(e, t) {
                await a.default.put({
                    url: N.Endpoints.GUILD_ONBOARDING(e),
                    body: t
                })
            }

            function g(e, t, n) {
                let a = {
                        optionErrors: []
                    },
                    l = !1;
                return n.title.length <= 0 && (a.title = I.default.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED, l = !0), n.options.length <= 0 && (a.options = I.default.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED, l = !0), n.inOnboarding && t.filter(e => e.inOnboarding).length > _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING && (a.config = I.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
                    numQuestions: _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
                }), l = !0), a.optionErrors = n.options.map(a => A(e, t, n, a)), (l = l || a.optionErrors.some(e => null != e)) ? a : null
            }

            function A(e, t, n, a) {
                var l, s, i;
                if (n.singleSelect) {
                    let e = new Set(null !== (l = a.roleIds) && void 0 !== l ? l : []);
                    for (let a of t)
                        if (a.id !== n.id) {
                            for (let t of a.options)
                                if (null != t.roleIds && t.roleIds.some(t => e.has(t))) return I.default.Messages.ONBOARDING_PROMPT_SINGLE_SELECT_UNIQUE_ROLES
                        }
                }
                let r = (null !== (s = a.roleIds) && void 0 !== s ? s : []).filter(t => null != e.getRole(t)),
                    d = (null !== (i = a.channelIds) && void 0 !== i ? i : []).filter(e => null != o.default.getChannel(e));
                return 0 === r.length && 0 === d.length ? I.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_REQUIRED : null
            }
        },
        136278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                i = n("913144"),
                r = n("863636"),
                d = n("900938"),
                o = n("49111"),
                u = n("653138");
            let c = !1,
                N = null,
                _ = [],
                I = !1,
                E = [];

            function f() {
                (function() {
                    c = !1, N = null, E = [], I = !1
                })(), null != (N = d.default.getGuildId()) && d.default.getSection() === o.GuildSettingsSections.ONBOARDING && (_ = r.default.getOnboardingPrompts(N), I = r.default.isAdvancedMode(N))
            }
            class O extends s.default.Store {
                initialize() {
                    this.waitFor(d.default, r.default)
                }
                hasChanges() {
                    return null != N && !l.isEqual(r.default.getOnboardingPrompts(N), _)
                }
                get guildId() {
                    return N
                }
                get submitting() {
                    return c
                }
                get errors() {
                    return E
                }
                get editedOnboardingPrompts() {
                    return _
                }
                get advancedMode() {
                    return I
                }
            }
            O.displayName = "GuildSettingsOnboardingPromptsStore";
            var S = new O(i.default, {
                GUILD_SETTINGS_INIT: f,
                GUILD_SETTINGS_SET_SECTION: f,
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: f,
                GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: f,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: f,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
                    var t;
                    E = null !== (t = e.errors) && void 0 !== t ? t : [], c = !1
                },
                GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
                    let {
                        prompts: t
                    } = e;
                    _ = t
                },
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
                    c = !0, E = []
                },
                GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
                    var t;
                    E = null !== (t = e.errors) && void 0 !== t ? t : []
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
                    let {
                        mode: t
                    } = e;
                    I = t === u.GuildOnboardingMode.ONBOARDING_ADVANCED
                }
            })
        },
        259483: function(e, t, n) {
            "use strict";
            var a, l, s, i;
            n.r(t), n.d(t, {
                GuildSettingsOnboardingPage: function() {
                    return a
                },
                ONBOARDING_STEPS: function() {
                    return r
                },
                GuildSettingsCTAs: function() {
                    return l
                },
                COMPLETABLE_ONBOARDING_STEPS: function() {
                    return d
                },
                pageToEducationUpsellType: function() {
                    return o
                }
            }), (s = a || (a = {}))[s.LANDING = 0] = "LANDING", s[s.SAFETY_CHECK = 1] = "SAFETY_CHECK", s[s.DEFAULT_CHANNELS = 2] = "DEFAULT_CHANNELS", s[s.WELCOME_CARD = 3] = "WELCOME_CARD", s[s.CUSTOMIZATION_QUESTIONS = 4] = "CUSTOMIZATION_QUESTIONS", s[s.REVIEW = 5] = "REVIEW", s[s.HOME_SETTINGS = 6] = "HOME_SETTINGS";
            let r = [0, 1, 2, 4, 6, 5];
            (i = l || (l = {}))[i.TOGGLE_ENABLED = 0] = "TOGGLE_ENABLED", i[i.TOGGLE_DISABLED = 1] = "TOGGLE_DISABLED", i[i.PREVIEW = 2] = "PREVIEW", i[i.EDIT_DEFAULT_CHANNELS = 3] = "EDIT_DEFAULT_CHANNELS", i[i.EDIT_CUSTOMIZATION_QUESTIONS = 4] = "EDIT_CUSTOMIZATION_QUESTIONS", i[i.EDIT_HOME_SETTINGS = 5] = "EDIT_HOME_SETTINGS";
            let d = r.filter(e => 0 !== e);

            function o(e) {
                switch (e) {
                    case 1:
                        return "Safety Check";
                    case 2:
                        return "Default Channels";
                    case 4:
                        return "Customization Questions";
                    case 6:
                        return "Home Settings";
                    default:
                        return null
                }
            }
        },
        584027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OnboardingPreview: function() {
                    return x
                },
                default: function() {
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                d = n("716241"),
                o = n("798796"),
                u = n("75061"),
                c = n("233706"),
                N = n("749623"),
                _ = n("768596"),
                I = n("305961"),
                E = n("697218"),
                f = n("593195"),
                O = n("36694"),
                S = n("991497"),
                m = n("733160"),
                T = n("599110"),
                D = n("900938"),
                g = n("131835"),
                A = n("259483"),
                G = n("49111"),
                h = n("782340"),
                L = n("247757");
            let R = () => [{
                    emoji: "\uD83E\uDDD9",
                    emojiDescription: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1_EMOJI,
                    title: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1,
                    selected: !0
                }, {
                    emoji: "\uD83C\uDFA4",
                    emojiDescription: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2_EMOJI,
                    title: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2,
                    selected: !1
                }, {
                    emoji: "\uD83D\uDC40",
                    emojiDescription: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3_EMOJI,
                    title: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3,
                    selected: !1
                }],
                p = () => [{
                    channelIcon: () => (0, a.jsx)(m.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_1,
                    selected: !0
                }, {
                    channelIcon: () => (0, a.jsx)(f.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_2,
                    selected: !0
                }, {
                    channelIcon: () => (0, a.jsx)(f.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_3,
                    selected: !1
                }, {
                    channelIcon: () => (0, a.jsx)(S.default, {
                        className: L.channelIcon
                    }),
                    channel: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_4,
                    selected: !0
                }];

            function x(e) {
                let {
                    isTooltip: t = !1
                } = e, n = R();
                t && n.pop();
                let l = t ? (0, a.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        color: "header-primary",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE_TOOLTIP
                    }) : (0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE
                    }),
                    i = t ? (0, a.jsx)(r.Text, {
                        variant: "text-xxs/normal",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE_TOOLTIP.format()
                    }) : (0, a.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        children: h.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE.format()
                    });
                return (0, a.jsxs)("div", {
                    className: s(L.upsellPreview, L.spacingLarge, {
                        [L.tooltip]: t
                    }),
                    children: [l, (0, a.jsx)("div", {
                        className: L.spacingSmall,
                        children: n.map((e, t) => {
                            let {
                                emoji: n,
                                emojiDescription: l,
                                title: i,
                                selected: d
                            } = e;
                            return (0, a.jsxs)("div", {
                                className: s(L.previewListItem, {
                                    [L.selected]: d
                                }),
                                children: [(0, a.jsx)("span", {
                                    role: "img",
                                    "aria-label": l,
                                    children: n
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-primary",
                                    children: i
                                }), d && (0, a.jsx)("div", {
                                    className: L.checkboxCircle,
                                    children: (0, a.jsx)(O.default, {
                                        className: L.checkmark
                                    })
                                })]
                            }, t)
                        })
                    }), i]
                })
            }

            function P() {
                let e = [{
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_HARRY_POTTER,
                    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_HARRY_POTTER
                }, {
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES
                }, {
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT
                }, {
                    message: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DUNGEON_SLIMES,
                    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
                    adminTitle: h.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DUNGEON_SLIMES
                }];
                return (0, a.jsx)(u.TestimonialHero, {
                    testimonials: e
                })
            }

            function M() {
                let e = (0, i.useStateFromStores)([D.default], () => D.default.getGuildId()),
                    t = (0, i.useStateFromStores)([I.default], () => I.default.getGuild(e)),
                    n = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
                    {
                        homeSettingsEnabled: l
                    } = (0, c.useOnboardingHomeAdminExperiment)(null != e ? e : "");
                return null == e || null == t || null == n ? null : (0, a.jsxs)("div", {
                    className: L.upsellContainer,
                    children: [(0, a.jsxs)("div", {
                        className: L.upsellHeader,
                        children: [(0, a.jsxs)("div", {
                            className: L.islands,
                            children: [(0, a.jsx)(o.LeftIslands, {}), (0, a.jsx)(o.MainIsland, {
                                guild: t,
                                mainIslandClassName: L.mainIsland,
                                balloonDogClassName: L.balloonDog
                            }), (0, a.jsx)(o.RightIslands, {})]
                        }), (0, a.jsxs)("div", {
                            className: L.upsellHeaderText,
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_SUBTITLE
                            })]
                        }), (0, a.jsx)("div", {
                            className: L.upsellButtons,
                            children: (0, a.jsx)(r.Button, {
                                onClick: function() {
                                    null != e && (T.default.track(G.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                        ...(0, d.collectGuildAnalyticsMetadata)(e),
                                        step: A.GuildSettingsOnboardingPage[A.GuildSettingsOnboardingPage.LANDING],
                                        back: !1,
                                        skip: !1
                                    }), (0, g.goToNextOnboardingStep)(e, A.GuildSettingsOnboardingPage.LANDING))
                                },
                                color: r.Button.Colors.BRAND,
                                disabled: !1,
                                children: h.default.Messages.CHECK_IT_OUT
                            })
                        })]
                    }), (0, a.jsx)(r.FormDivider, {}), (0, a.jsx)(P, {}), (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)("div", {
                        className: L.valuesContainer,
                        children: [(0, a.jsxs)("div", {
                            className: L.valueContainer,
                            children: [(0, a.jsx)(x, {}), (0, a.jsxs)("div", {
                                className: L.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_SUBTITLE
                                })]
                            })]
                        }), l && (0, a.jsxs)("div", {
                            className: L.valueContainer,
                            children: [(0, a.jsxs)("div", {
                                className: L.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_SUBTITLE
                                })]
                            }), (0, a.jsxs)("div", {
                                className: s(L.upsellPreview, L.spacingLarge),
                                children: [(0, a.jsx)(_.default, {
                                    guildId: e,
                                    welcomeMessage: {
                                        authorIds: [n.id],
                                        message: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_WELCOME_MESSAGE
                                    }
                                }), (0, a.jsx)(N.NewMemberAction, {
                                    channelId: e,
                                    title: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_TITLE,
                                    channelName: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_CHANNEL_NAME,
                                    completed: !0,
                                    Icon: f.default
                                }), (0, a.jsx)(N.NewMemberAction, {
                                    channelId: e,
                                    title: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_TITLE,
                                    channelName: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_CHANNEL_NAME,
                                    completed: !0,
                                    Icon: f.default
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: L.valueContainer,
                            children: [(0, a.jsx)("div", {
                                className: s(L.upsellPreview, L.spacingLarge),
                                children: p().map((e, t) => {
                                    let {
                                        channelIcon: n,
                                        channel: l,
                                        selected: i
                                    } = e;
                                    return (0, a.jsxs)("div", {
                                        className: s(L.previewListItem, L.spaceBetween, {
                                            [L.selected]: i
                                        }),
                                        children: [(0, a.jsxs)("div", {
                                            className: L.channel,
                                            children: [n(), (0, a.jsx)(r.Text, {
                                                variant: "text-md/medium",
                                                color: "header-primary",
                                                children: l
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: s(L.checkbox, {
                                                [L.selected]: i
                                            }),
                                            children: i && (0, a.jsx)(O.default, {
                                                className: L.checkmark
                                            })
                                        })]
                                    }, t)
                                })
                            }), (0, a.jsxs)("div", {
                                className: L.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_SUBTITLE
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        641892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("797350"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        className: s,
                        foreground: i
                    } = e;
                    return (0, a.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.5 17.2916V3.74996H17.5V18.3333H4.5C3.3955 18.3333 2.5 17.4005 2.5 16.25V3.74996C2.5 2.59944 3.3955 1.66663 4.5 1.66663H15.5V15.2083H4.5C3.94775 15.2083 3.5 15.6742 3.5 16.25C3.5 16.8257 3.94775 17.2916 4.5 17.2916H16.5ZM11.9859 4.99996L7.94446 8.9957L6.35432 7.42204L5 8.75288L7.94427 11.6666L13.3333 6.33344L11.9859 4.99996Z"
                        })
                    })
                }, s.BookCheckIcon, void 0, {
                    size: 16
                })
        }
    }
]);