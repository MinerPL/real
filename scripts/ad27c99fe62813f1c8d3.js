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
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                d = n("446674"),
                o = n("77078"),
                u = n("206230"),
                N = n("246053"),
                c = n("782340"),
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
                            children: [(0, a.jsx)(N.default, {
                                className: _.testimonialControlIcon,
                                direction: N.default.Directions.LEFT
                            }), (0, a.jsx)(o.HiddenVisually, {
                                children: c.default.Messages.BACK
                            })]
                        }), (0, a.jsxs)(o.Button, {
                            className: _.testimonialControl,
                            innerClassName: _.testimonialControlInner,
                            onClick: d,
                            size: o.Button.Sizes.MIN,
                            color: o.Button.Colors.PRIMARY,
                            children: [(0, a.jsx)(N.default, {
                                className: _.testimonialControlIcon,
                                direction: N.default.Directions.RIGHT
                            }), (0, a.jsx)(o.HiddenVisually, {
                                children: c.default.Messages.NEXT
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
                } = e, i = (0, d.useStateFromStores)([u.default], () => u.default.useReducedMotion), [N] = (0, r.useSpring)(() => {
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
                    style: N,
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
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("679653"),
                d = n("419830"),
                o = n("42203"),
                u = n("26989"),
                N = n("305961"),
                c = n("957255"),
                _ = n("593195"),
                I = n("578706"),
                E = n("904276"),
                f = n("641892"),
                O = n("315102"),
                S = n("568734"),
                T = n("347895"),
                m = n("698882"),
                D = n("675305"),
                A = n("205454"),
                g = n("49111"),
                G = n("657944"),
                L = n("782340"),
                h = n("280337");

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
                } = e, N = O.default.getNewMemberActionIconURL({
                    channelId: t,
                    icon: d
                });
                return (0, a.jsxs)("div", {
                    className: h.action,
                    children: [null != N ? (0, a.jsx)("img", {
                        src: N,
                        className: h.icon,
                        width: 32,
                        height: 32,
                        alt: "",
                        "aria-hidden": !0
                    }) : (0, a.jsx)(A.default, {
                        emojiId: s,
                        emojiName: r,
                        size: A.CTAEmojiSize.LARGE,
                        defaultComponent: (0, a.jsx)("div", {
                            className: h.channelIconContainer,
                            children: (0, a.jsx)(u, {
                                className: h.channelIcon
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: h.actionInfo,
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
                        className: h.checkCircleCompleted,
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(E.default, {
                        className: h.checkCircle,
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
                    channelId: N,
                    title: I,
                    emoji: E,
                    icon: f
                } = n, {
                    id: O,
                    name: S
                } = null != E ? E : {}, m = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(N)), D = (0, r.default)(m, !0), A = (0, s.useStateFromStores)([c.default], () => c.default.can(g.Permissions.VIEW_CHANNEL, m)), G = l.useCallback(() => {
                    if (null == m) return null;
                    (0, T.selectNewMemberActionChannel)(m.guild_id, m.id)
                }, [m]);
                if (null == m || !A) return null;
                let L = null !== (t = (0, d.getChannelIconComponent)(m)) && void 0 !== t ? t : _.default;
                return (0, a.jsx)(i.Clickable, {
                    className: h.clickableAction,
                    onClick: G,
                    children: (0, a.jsx)(R, {
                        channelId: N,
                        title: I,
                        channelName: D,
                        emojiId: O,
                        emojiName: S,
                        icon: f,
                        completed: u,
                        Icon: L
                    })
                })
            }

            function x(e) {
                let {
                    guildId: t
                } = e, n = (0, s.useStateFromStores)([m.default], () => m.default.getNewMemberActions(t), [t]), r = (0, s.useStateFromStores)([D.default], () => D.default.getCompletedActions(t)), d = (0, s.useStateFromStores)([u.default], () => u.default.getSelfMember(t)), o = (0, s.useStateFromStores)([N.default], () => N.default.getGuild(t));
                l.useEffect(() => {
                    var e;
                    null == r && (null == d ? void 0 : d.flags) != null && (0, S.hasFlag)(null !== (e = d.flags) && void 0 !== e ? e : 0, G.GuildMemberFlags.STARTED_HOME_ACTIONS) && (0, T.fetchNewMemberActions)(t)
                }, [r, t, null == d ? void 0 : d.flags]);
                let c = l.useCallback(() => {
                    null != o && null != o.rulesChannelId && (0, T.selectNewMemberActionChannel)(o.id, o.rulesChannelId)
                }, [o]);
                return null == d || null == n || 0 === n.length ? null : (0, a.jsxs)("div", {
                    className: h.container,
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: L.default.Messages.GET_STARTED
                    }), n.map(e => (0, a.jsx)(p, {
                        action: e,
                        completed: (null == r ? void 0 : r[e.channelId]) === !0,
                        guildId: t
                    }, e.channelId)), (null == o ? void 0 : o.rulesChannelId) != null && (0, a.jsxs)(i.Clickable, {
                        className: h.action,
                        onClick: c,
                        children: [(0, a.jsx)("div", {
                            className: h.rulesIconContainer,
                            children: (0, a.jsx)(f.default, {
                                className: h.rulesIcon
                            })
                        }), (0, a.jsx)("div", {
                            className: h.actionInfo,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: L.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
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
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("509043"),
                d = n("65597"),
                o = n("854588"),
                u = n("77078"),
                N = n("851387"),
                c = n("841098"),
                _ = n("206230"),
                I = n("388491"),
                E = n("506885"),
                f = n("217513"),
                O = n("528438"),
                S = n("430312"),
                T = n("305961"),
                m = n("697218"),
                D = n("928201"),
                A = n("387111"),
                g = n("158998"),
                G = n("590456"),
                L = n("933488");

            function h(e) {
                var t, n;
                let {
                    guildId: s,
                    welcomeMessage: h,
                    className: R
                } = e, p = (0, c.default)(), x = (0, d.default)([T.default], () => T.default.getGuild(s)), P = (0, d.default)([_.default], () => _.default.syncProfileThemeWithUserTheme), M = (0, d.default)([_.default], () => _.default.useReducedMotion), U = (0, d.default)([m.default], () => m.default.getUser(null == h ? void 0 : h.authorIds[0])), C = (0, d.default)([m.default], () => m.default.getCurrentUser()), v = (0, f.default)(null == U ? void 0 : U.id, s), [B] = (0, O.default)(U, v), j = P ? p : null !== (t = (0, I.getProfileTheme)(B)) && void 0 !== t ? t : p, b = o.default.meta.resolveSemanticColor(j, o.default.colors.BACKGROUND_SECONDARY), w = l.useMemo(() => null !== (n = null == h ? void 0 : h.authorIds) && void 0 !== n ? n : [], [h]);
                l.useEffect(() => {
                    N.default.requestMembersById(s, w)
                }, [s, w]), l.useEffect(() => {
                    null != U && (0, E.default)(U.id, U.getAvatarURL(s, 48), {
                        guildId: s
                    })
                }, [U, s]);
                let H = (0, g.useName)(C);
                if (null == U || null == C || null == h) return null;
                let y = null != x && x.ownerId === U.id;
                return (0, a.jsx)("div", {
                    className: i(L.welcomeMessageContainer, R),
                    children: (0, a.jsxs)(S.default, {
                        className: L.welcomeMessageProfileContainer,
                        user: U,
                        guildId: s,
                        profileType: G.UserProfileTypes.CARD,
                        forceShowPremium: !0,
                        useDefaultClientTheme: !0,
                        children: [(0, a.jsx)("div", {
                            className: L.avatarBackground
                        }), M ? (0, a.jsx)(u.Avatar, {
                            src: U.getAvatarURL(s, 48),
                            size: u.AvatarSizes.SIZE_48,
                            className: L.avatar,
                            "aria-label": U.username
                        }) : (0, a.jsx)(u.AnimatedAvatar, {
                            src: U.getAvatarURL(s, 48),
                            size: u.AvatarSizes.SIZE_48,
                            className: L.avatar,
                            "aria-label": U.username
                        }), (0, a.jsx)("div", {
                            className: L.avatarBorder,
                            style: {
                                backgroundColor: null != B ? (0, r.int2rgba)(B, 1) : b
                            }
                        }), (0, a.jsxs)("div", {
                            className: L.welcomeMessageContent,
                            children: [(0, a.jsxs)("div", {
                                className: L.adminUsernameContainer,
                                children: [(0, a.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    children: A.default.getName(s, null, U)
                                }), y ? (0, a.jsx)(D.default, {
                                    className: L.ownerIcon
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
                                }(null == h ? void 0 : h.message, null != H ? H : C.username)
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
            });
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                i = n("913144"),
                r = n("863636"),
                d = n("900938"),
                o = n("49111");
            let u = !1,
                N = null,
                c = new Set;

            function _() {
                (function() {
                    u = !1, N = null
                })(), null != (N = d.default.getGuildId()) && d.default.getSection() === o.GuildSettingsSections.ONBOARDING && (c = new Set(r.default.getDefaultChannelIds(N)))
            }
            class I extends s.default.Store {
                initialize() {
                    this.waitFor(d.default, r.default)
                }
                hasChanges() {
                    if (null == N) return !1;
                    let e = r.default.getDefaultChannelIds(N).sort(),
                        t = Array.from(c).sort();
                    return !l.isEqual(e, t)
                }
                get guildId() {
                    return N
                }
                get submitting() {
                    return u
                }
                get editedDefaultChannelIds() {
                    return c
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
                    (c = new Set(c)).has(t) ? c.delete(t) : c.add(t)
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
                    return A
                },
                toggleAdvancedSettings: function() {
                    return g
                },
                goToNextOnboardingStep: function() {
                    return G
                },
                goToPrevOnboardingStep: function() {
                    return L
                },
                startPreview: function() {
                    return h
                }
            });
            var a = n("913144"),
                l = n("404118"),
                s = n("863636"),
                i = n("471706"),
                r = n("380710"),
                d = n("937692"),
                o = n("233706"),
                u = n("479756"),
                N = n("507950"),
                c = n("42203"),
                _ = n("305961"),
                I = n("592407"),
                E = n("653274"),
                f = n("330724"),
                O = n("259483"),
                S = n("724210"),
                T = n("653138"),
                m = n("782340");

            function D(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_STEP",
                    step: e
                })
            }

            function A(e) {
                null != e && a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
                    upsellType: e
                })
            }
            async function g(e, t) {
                let n = s.default.getEnabled(e),
                    i = Array.from(E.default.editedDefaultChannelIds).filter(e => null != c.default.getChannel(e)),
                    [d, o] = (0, r.getChattableDefaultChannels)(e, [...i]);
                if (n && t === T.GuildOnboardingMode.ONBOARDING_DEFAULT && (o.length < T.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || d.length < T.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN)) {
                    l.default.show({
                        title: m.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: m.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
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

            function L(e, t) {
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
            async function h(e) {
                let t = _.default.getGuild(e);
                null != t && (I.default.close(), (0, u.startImpersonating)(t.id, {
                    type: N.ImpersonateType.NEW_MEMBER,
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
                    return T
                },
                enableGuildOnboarding: function() {
                    return m
                },
                editOnboarding: function() {
                    return D
                },
                validateOptionRoles: function() {
                    return g
                }
            });
            var a = n("872717"),
                l = n("913144"),
                s = n("404118"),
                i = n("448993"),
                r = n("385976"),
                d = n("837648"),
                o = n("42203"),
                u = n("449008"),
                N = n("136278"),
                c = n("49111"),
                _ = n("653138"),
                I = n("782340");

            function E() {
                l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
                })
            }

            function f(e, t, n) {
                S(e, N.default.editedOnboardingPrompts.map(e => e.id === t ? {
                    ...e,
                    ...n
                } : e))
            }

            function O(e, t) {
                S(e, N.default.editedOnboardingPrompts.filter(e => e.id !== t))
            }

            function S(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
                        prompts: t
                    }), n) {
                    let n = t.map(n => A(e, t, n));
                    l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
                        errors: n
                    })
                }
            }
            async function T(e, t) {
                let {
                    dropdownsAllowed: n
                } = (0, d.getOnboardingDropdownExperiment)(e.id);
                if (!N.default.hasChanges()) return;
                let a = N.default.editedOnboardingPrompts;
                null != t && t.ignoreDefaultPrompt && 1 === a.length && (0, _.isDefaultPrompt)(a[0]) && (a = []);
                let c = a.map(t => {
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
                    E = c.filter(e => e.inOnboarding),
                    f = c.filter(e => !0 !== e.inOnboarding),
                    O = c.map(t => A(e, c, t));
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
                    var T;
                    let {
                        fieldName: e,
                        error: t
                    } = null !== (T = new(0, i.APIError)(n).getAnyErrorMessageAndField()) && void 0 !== T ? T : {};
                    throw s.default.show({
                        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: [e, t].filter(u.isNotNullish).join(": ")
                    }), l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
                    }), Error("failed to save prompts")
                }
            }
            async function m(e, t) {
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
                    url: c.Endpoints.GUILD_ONBOARDING(e),
                    body: t
                })
            }

            function A(e, t, n) {
                let a = {
                        optionErrors: []
                    },
                    l = !1;
                return n.title.length <= 0 && (a.title = I.default.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED, l = !0), n.options.length <= 0 && (a.options = I.default.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED, l = !0), n.inOnboarding && t.filter(e => e.inOnboarding).length > _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING && (a.config = I.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
                    numQuestions: _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
                }), l = !0), a.optionErrors = n.options.map(a => g(e, t, n, a)), (l = l || a.optionErrors.some(e => null != e)) ? a : null
            }

            function g(e, t, n, a) {
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
            let N = !1,
                c = null,
                _ = [],
                I = !1,
                E = [];

            function f() {
                (function() {
                    N = !1, c = null, E = [], I = !1
                })(), null != (c = d.default.getGuildId()) && d.default.getSection() === o.GuildSettingsSections.ONBOARDING && (_ = r.default.getOnboardingPrompts(c), I = r.default.isAdvancedMode(c))
            }
            class O extends s.default.Store {
                initialize() {
                    this.waitFor(d.default, r.default)
                }
                hasChanges() {
                    return null != c && !l.isEqual(r.default.getOnboardingPrompts(c), _)
                }
                get guildId() {
                    return c
                }
                get submitting() {
                    return N
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
                    E = null !== (t = e.errors) && void 0 !== t ? t : [], N = !1
                },
                GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
                    let {
                        prompts: t
                    } = e;
                    _ = t
                },
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
                    N = !0, E = []
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
            let r = [a.LANDING, a.SAFETY_CHECK, a.DEFAULT_CHANNELS, a.CUSTOMIZATION_QUESTIONS, a.HOME_SETTINGS, a.REVIEW];
            (i = l || (l = {}))[i.TOGGLE_ENABLED = 0] = "TOGGLE_ENABLED", i[i.TOGGLE_DISABLED = 1] = "TOGGLE_DISABLED", i[i.PREVIEW = 2] = "PREVIEW", i[i.EDIT_DEFAULT_CHANNELS = 3] = "EDIT_DEFAULT_CHANNELS", i[i.EDIT_CUSTOMIZATION_QUESTIONS = 4] = "EDIT_CUSTOMIZATION_QUESTIONS", i[i.EDIT_HOME_SETTINGS = 5] = "EDIT_HOME_SETTINGS";
            let d = r.filter(e => e !== a.LANDING);

            function o(e) {
                switch (e) {
                    case a.SAFETY_CHECK:
                        return "Safety Check";
                    case a.DEFAULT_CHANNELS:
                        return "Default Channels";
                    case a.CUSTOMIZATION_QUESTIONS:
                        return "Customization Questions";
                    case a.HOME_SETTINGS:
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
                N = n("233706"),
                c = n("749623"),
                _ = n("768596"),
                I = n("305961"),
                E = n("697218"),
                f = n("593195"),
                O = n("36694"),
                S = n("991497"),
                T = n("733160"),
                m = n("599110"),
                D = n("900938"),
                A = n("131835"),
                g = n("259483"),
                G = n("49111"),
                L = n("782340"),
                h = n("247757");
            let R = () => [{
                    emoji: "\uD83E\uDDD9",
                    emojiDescription: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1_EMOJI,
                    title: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1,
                    selected: !0
                }, {
                    emoji: "\uD83C\uDFA4",
                    emojiDescription: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2_EMOJI,
                    title: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2,
                    selected: !1
                }, {
                    emoji: "\uD83D\uDC40",
                    emojiDescription: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3_EMOJI,
                    title: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3,
                    selected: !1
                }],
                p = () => [{
                    channelIcon: () => (0, a.jsx)(T.default, {
                        className: h.channelIcon
                    }),
                    channel: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_1,
                    selected: !0
                }, {
                    channelIcon: () => (0, a.jsx)(f.default, {
                        className: h.channelIcon
                    }),
                    channel: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_2,
                    selected: !0
                }, {
                    channelIcon: () => (0, a.jsx)(f.default, {
                        className: h.channelIcon
                    }),
                    channel: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_3,
                    selected: !1
                }, {
                    channelIcon: () => (0, a.jsx)(S.default, {
                        className: h.channelIcon
                    }),
                    channel: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_4,
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
                        children: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE_TOOLTIP
                    }) : (0, a.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE
                    }),
                    i = t ? (0, a.jsx)(r.Text, {
                        variant: "text-xxs/normal",
                        children: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE_TOOLTIP.format()
                    }) : (0, a.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        children: L.default.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE.format()
                    });
                return (0, a.jsxs)("div", {
                    className: s(h.upsellPreview, h.spacingLarge, {
                        [h.tooltip]: t
                    }),
                    children: [l, (0, a.jsx)("div", {
                        className: h.spacingSmall,
                        children: n.map((e, t) => {
                            let {
                                emoji: n,
                                emojiDescription: l,
                                title: i,
                                selected: d
                            } = e;
                            return (0, a.jsxs)("div", {
                                className: s(h.previewListItem, {
                                    [h.selected]: d
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
                                    className: h.checkboxCircle,
                                    children: (0, a.jsx)(O.default, {
                                        className: h.checkmark
                                    })
                                })]
                            }, t)
                        })
                    }), i]
                })
            }

            function P() {
                let e = [{
                    message: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_HARRY_POTTER,
                    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
                    adminTitle: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_HARRY_POTTER
                }, {
                    message: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
                    adminTitle: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES
                }, {
                    message: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
                    adminTitle: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT
                }, {
                    message: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DUNGEON_SLIMES,
                    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
                    adminTitle: L.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DUNGEON_SLIMES
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
                    } = (0, N.useOnboardingHomeAdminExperiment)(null != e ? e : "");
                return null == e || null == t || null == n ? null : (0, a.jsxs)("div", {
                    className: h.upsellContainer,
                    children: [(0, a.jsxs)("div", {
                        className: h.upsellHeader,
                        children: [(0, a.jsxs)("div", {
                            className: h.islands,
                            children: [(0, a.jsx)(o.LeftIslands, {}), (0, a.jsx)(o.MainIsland, {
                                guild: t,
                                mainIslandClassName: h.mainIsland,
                                balloonDogClassName: h.balloonDog
                            }), (0, a.jsx)(o.RightIslands, {})]
                        }), (0, a.jsxs)("div", {
                            className: h.upsellHeaderText,
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_SUBTITLE
                            })]
                        }), (0, a.jsx)("div", {
                            className: h.upsellButtons,
                            children: (0, a.jsx)(r.Button, {
                                onClick: function() {
                                    null != e && (m.default.track(G.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                        ...(0, d.collectGuildAnalyticsMetadata)(e),
                                        step: g.GuildSettingsOnboardingPage[g.GuildSettingsOnboardingPage.LANDING],
                                        back: !1,
                                        skip: !1
                                    }), (0, A.goToNextOnboardingStep)(e, g.GuildSettingsOnboardingPage.LANDING))
                                },
                                color: r.Button.Colors.BRAND,
                                disabled: !1,
                                children: L.default.Messages.CHECK_IT_OUT
                            })
                        })]
                    }), (0, a.jsx)(r.FormDivider, {}), (0, a.jsx)(P, {}), (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)("div", {
                        className: h.valuesContainer,
                        children: [(0, a.jsxs)("div", {
                            className: h.valueContainer,
                            children: [(0, a.jsx)(x, {}), (0, a.jsxs)("div", {
                                className: h.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_SUBTITLE
                                })]
                            })]
                        }), l && (0, a.jsxs)("div", {
                            className: h.valueContainer,
                            children: [(0, a.jsxs)("div", {
                                className: h.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_SUBTITLE
                                })]
                            }), (0, a.jsxs)("div", {
                                className: s(h.upsellPreview, h.spacingLarge),
                                children: [(0, a.jsx)(_.default, {
                                    guildId: e,
                                    welcomeMessage: {
                                        authorIds: [n.id],
                                        message: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_WELCOME_MESSAGE
                                    }
                                }), (0, a.jsx)(c.NewMemberAction, {
                                    channelId: e,
                                    title: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_TITLE,
                                    channelName: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_CHANNEL_NAME,
                                    completed: !0,
                                    Icon: f.default
                                }), (0, a.jsx)(c.NewMemberAction, {
                                    channelId: e,
                                    title: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_TITLE,
                                    channelName: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_CHANNEL_NAME,
                                    completed: !0,
                                    Icon: f.default
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: h.valueContainer,
                            children: [(0, a.jsx)("div", {
                                className: s(h.upsellPreview, h.spacingLarge),
                                children: p().map((e, t) => {
                                    let {
                                        channelIcon: n,
                                        channel: l,
                                        selected: i
                                    } = e;
                                    return (0, a.jsxs)("div", {
                                        className: s(h.previewListItem, h.spaceBetween, {
                                            [h.selected]: i
                                        }),
                                        children: [(0, a.jsxs)("div", {
                                            className: h.channel,
                                            children: [n(), (0, a.jsx)(r.Text, {
                                                variant: "text-md/medium",
                                                color: "header-primary",
                                                children: l
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: s(h.checkbox, {
                                                [h.selected]: i
                                            }),
                                            children: i && (0, a.jsx)(O.default, {
                                                className: h.checkmark
                                            })
                                        })]
                                    }, t)
                                })
                            }), (0, a.jsxs)("div", {
                                className: h.valueText,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_TITLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: L.default.Messages.GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_SUBTITLE
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
                }, s.BookCheckIcon)
        }
    }
]);