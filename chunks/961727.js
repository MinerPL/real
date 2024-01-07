            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return ea
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                d = l("917351"),
                r = l.n(d),
                o = l("907002"),
                u = l("509043"),
                c = l("446674"),
                h = l("669491"),
                f = l("819855"),
                m = l("77078"),
                C = l("267363"),
                N = l("834897"),
                x = l("841098"),
                g = l("606292"),
                p = l("688318"),
                S = l("449918"),
                E = l("38654"),
                I = l("368639"),
                _ = l("393414"),
                T = l("506885"),
                v = l("217513"),
                A = l("19287"),
                O = l("26989"),
                R = l("305961"),
                j = l("660478"),
                b = l("697218"),
                L = l("956089"),
                M = l("449008"),
                D = l("158998"),
                y = l("50885"),
                B = l("921031"),
                w = l("685829"),
                F = l("863636"),
                H = l("380710"),
                U = l("469421"),
                k = l("126623"),
                P = l("15015"),
                G = l("771311"),
                W = l("667712"),
                z = l("469242"),
                Y = l("653138"),
                V = l("49111"),
                Z = l("724210"),
                X = l("133335"),
                q = l("782340"),
                K = l("231881"),
                Q = l("305794"),
                J = l("632215");
            let $ = m.AvatarSizes.SIZE_80,
                ee = "required";

            function et(e) {
                var t;
                let {
                    guild: l,
                    user: s
                } = e, {
                    avatarSrc: d,
                    eventHandlers: o,
                    isAvatarAnimating: h
                } = (0, A.useAnimatedAvatarSrc)({
                    user: s,
                    guildId: l.id,
                    size: 120
                }), {
                    avatarDecorationSrc: f
                } = (0, p.default)({
                    user: s,
                    size: (0, g.getDecorationSizeForAvatarSize)($),
                    animateOnHover: !h
                }), C = (0, c.useStateFromStores)([O.default], () => O.default.getSelfMember(l.id)), N = (0, c.useStateFromStoresArray)([O.default], () => O.default.getMemberRoleWithPendingUpdates(l.id, s.id)), x = r(N).filter(e => l.roles.hasOwnProperty(e)).map(e => l.roles[e]).orderBy("position", "desc").value(), S = (0, v.default)(s.id, l.id);
                a.useEffect(() => {
                    (0, T.default)(s.id, s.getAvatarURL(l.id, (0, m.getAvatarSize)($)), {
                        guildId: l.id
                    })
                }, []);
                let E = (0, I.parseBioReact)(null == S ? void 0 : S.bio),
                    _ = y.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar;
                return (0, n.jsxs)("div", {
                    className: K.profile,
                    children: [(0, n.jsx)(m.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE
                    }), (0, n.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION
                    }), (0, n.jsxs)("div", {
                        className: K.profileCard,
                        children: [(0, n.jsx)("div", {
                            ...o,
                            children: (0, n.jsx)(_, {
                                src: d,
                                avatarDecoration: f,
                                size: $,
                                "aria-label": s.username
                            })
                        }), (0, n.jsx)(m.Text, {
                            variant: "text-lg/medium",
                            color: "header-primary",
                            className: K.username,
                            children: null !== (t = null == C ? void 0 : C.nick) && void 0 !== t ? t : D.default.getName(s)
                        }), (0, n.jsx)(m.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: i(J.markup, K.bio),
                            children: E
                        }), null != x && x.length > 0 && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("hr", {
                                className: K.separator
                            }), (0, n.jsx)(m.Text, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                className: K.title,
                                children: q.default.Messages.ROLES
                            }), (0, n.jsx)("div", {
                                className: K.roles,
                                children: null == x ? void 0 : x.map(e => {
                                    var t;
                                    return (0, n.jsxs)("div", {
                                        className: K.role,
                                        children: [(0, n.jsx)(m.RoleCircle, {
                                            color: null !== (t = e.colorString) && void 0 !== t ? t : (0, u.int2hex)(V.DEFAULT_ROLE_COLOR),
                                            className: K.roleDot
                                        }), (0, n.jsx)(m.Text, {
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
                } = e, [d, r] = a.useState(null), [u, f] = a.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), N = (0, H.getSelectedRoleIds)(C), x = (0, H.getSelectedChannelIds)(C), g = (0, c.useStateFromStoresArray)([F.default], () => F.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
                    helpText: p,
                    helpTextAdditional: E
                } = (0, k.useCustomizeCommunityPromptHelpText)({
                    guild: s,
                    prompt: l,
                    selectedRoleIds: N,
                    selectedChannelIds: x,
                    itemHook: (e, t) => (0, n.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e
                    }, t)
                }), {
                    handleSelectOption: I
                } = (0, U.default)(s.id), _ = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500), T = (0, o.useSpring)({
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
                }), v = l.options.map(e => ({
                    value: e.id,
                    ...e
                })), A = l.options.filter(e => g.includes(e.id)).map(e => e.id);
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(o.animated.div, {
                        className: K.prompt,
                        style: {
                            borderColor: T.color
                        },
                        children: [l.isNew && (0, n.jsx)(L.TextBadge, {
                            color: (0, S.getColor)(V.Color.BRAND_260),
                            text: q.default.Messages.NEW,
                            className: K.newBadge
                        }), (0, n.jsxs)(m.Heading, {
                            className: K.promptTitle,
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: [l.title, l.required ? (0, n.jsx)("span", {
                                className: i(K.required, {
                                    [K.error]: (null == d ? void 0 : d.type) === ee
                                }),
                                children: "*"
                            }) : null]
                        }), (0, n.jsx)(z.default, {
                            options: v,
                            value: A,
                            onChange: e => {
                                let t = e.find(e => !g.includes(e.id)),
                                    n = e.map(e => e.id),
                                    a = null != t;
                                if (a) I(l, t, !0), l.singleSelect && l.options.forEach(e => u.delete(e.id)), u.add(t.id);
                                else {
                                    let e = g.filter(e => !n.includes(e)),
                                        t = l.options.filter(t => e.includes(t.id));
                                    if (g.length <= t.length && l.required) {
                                        r({
                                            type: ee
                                        });
                                        return
                                    }
                                    t.forEach(e => {
                                        I(l, e, !1), u.delete(e.id)
                                    })
                                }
                                f(new Set(u)), r(null)
                            },
                            canBeNew: !l.isNew
                        }), (0, n.jsxs)(m.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: K.helpText,
                            children: [p, " ", E]
                        })]
                    })
                })
            }

            function en(e) {
                var t;
                let {
                    prompt: l,
                    guild: s
                } = e, [d, r] = a.useState(null), [u, f] = a.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), N = (0, H.getSelectedRoleIds)(C), x = (0, H.getSelectedChannelIds)(C), g = (0, c.useStateFromStoresArray)([F.default], () => F.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
                    helpText: p,
                    helpTextAdditional: E
                } = (0, k.useCustomizeCommunityPromptHelpText)({
                    guild: s,
                    prompt: l,
                    selectedRoleIds: N,
                    selectedChannelIds: x,
                    itemHook: (e, t) => (0, n.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e
                    }, t)
                }), {
                    handleSelectOption: I
                } = (0, U.default)(s.id), _ = (e, t) => {
                    if (!t && 1 === g.length && l.required) {
                        r({
                            type: ee
                        });
                        return
                    }
                    I(l, e, null != t && t), l.singleSelect && t && l.options.forEach(e => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), f(new Set(u)), r(null)
                }, T = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500), v = (0, o.useSpring)({
                    from: {
                        color: l.isNew ? T.hex({
                            opacity: 1
                        }) : T.hex({
                            opacity: 0
                        })
                    },
                    color: T.hex({
                        opacity: 0
                    }),
                    config: {
                        duration: 300
                    },
                    delay: 500
                });
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(o.animated.div, {
                        className: K.prompt,
                        style: {
                            borderColor: v.color
                        },
                        children: [l.isNew && (0, n.jsx)(L.TextBadge, {
                            color: (0, S.getColor)(V.Color.BRAND_260),
                            text: q.default.Messages.NEW,
                            className: K.newBadge
                        }), (0, n.jsxs)(m.Heading, {
                            className: K.promptTitle,
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: [l.title, l.required ? (0, n.jsx)("span", {
                                className: i(K.required, {
                                    [K.error]: (null == d ? void 0 : d.type) === ee
                                }),
                                children: "*"
                            }) : null]
                        }), (0, n.jsx)("div", {
                            className: K.promptOptions,
                            children: l.options.map(e => (0, n.jsx)(W.default, {
                                hideMemberCount: !0,
                                guildId: s.id,
                                option: e,
                                onSelect: t => _(e, t),
                                selected: g.includes(e.id),
                                canBeNew: !l.isNew
                            }, e.id))
                        }), (0, n.jsxs)(m.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: K.helpText,
                            children: [p, " ", E]
                        })]
                    })
                })
            }

            function ea(e) {
                let {
                    guildId: t,
                    onBrowseChannels: l
                } = e, s = (0, f.isThemeDark)((0, x.default)()), d = (0, c.useStateFromStores)([R.default], () => R.default.getGuild(t)), r = (0, c.useStateFromStores)([b.default], () => b.default.getCurrentUser()), o = (0, N.default)("(min-width: 1344px)") && null != r, u = a.useCallback(() => {
                    (0, _.transitionTo)(V.Routes.CHANNEL(t, Z.StaticChannelRoute.CHANNEL_BROWSER)), null == l || l()
                }, [t, l]), h = (0, c.useStateFromStores)([j.default], () => j.default.hasUnread(t, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), {
                    onboardingPromptsRaw: g,
                    newOnboardingPrompts: p,
                    onboardingPromptsWithNewAnswers: I,
                    newAnswersCount: T,
                    onboardingPrompts: v
                } = (0, P.default)(t);
                a.useEffect(() => {
                    if ((null == d ? void 0 : d.id) != null) !E.default.isFullServerPreview(d.id) && (F.default.shouldFetchPrompts(d.id) || h) && (0, w.fetchOnboardingPrompts)(d.id)
                }, [null == d ? void 0 : d.id, h]), a.useEffect(() => {
                    if ((null == d ? void 0 : d.id) != null) {
                        if (!E.default.isFullServerPreview(d.id)) return () => {
                            (0, C.ackGuildFeature)(d.id, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION, F.default.ackIdForGuild(d.id)), B.default.updateOnboardingResponses(d.id)
                        }
                    }
                }, [null == d ? void 0 : d.id]);
                let A = a.useCallback(e => {
                    if (null == d) return null;
                    switch (e.type) {
                        case Y.OnboardingPromptType.MULTIPLE_CHOICE:
                            return (0, n.jsx)(en, {
                                prompt: e,
                                guild: d
                            }, e.id);
                        case Y.OnboardingPromptType.DROPDOWN:
                            return (0, n.jsx)(el, {
                                prompt: e,
                                guild: d
                            }, e.id);
                        default:
                            (0, M.assertNever)(e.type)
                    }
                }, [d]);
                if (null == d) return null;
                if (0 === g.length) {
                    let e = (0, S.getColor)(s ? V.Color.PRIMARY_300 : V.Color.PRIMARY_500),
                        t = (0, S.getColor)(s ? V.Color.PRIMARY_700 : V.Color.PRIMARY_230);
                    return (0, n.jsx)("div", {
                        className: Q.chat,
                        children: (0, n.jsx)("div", {
                            className: i(Q.content, K.emptyPage),
                            children: (0, n.jsxs)("div", {
                                className: K.emptyContainer,
                                children: [(0, n.jsx)(G.default, {
                                    className: K.emptyIcon,
                                    foregroundColor: e,
                                    backgroundColor: t
                                }), (0, n.jsx)(m.Heading, {
                                    className: K.emptyHeader,
                                    variant: "heading-md/semibold",
                                    children: q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER
                                }), (0, n.jsx)(m.Text, {
                                    variant: "text-sm/medium",
                                    children: q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
                                        onBrowseChannels: u
                                    })
                                })]
                            })
                        })
                    })
                }
                return (0, n.jsx)("div", {
                    className: i(Q.chat, K.scrollerContainer),
                    children: (0, n.jsxs)(m.AdvancedScroller, {
                        className: K.scroller,
                        fade: !0,
                        children: [(0, n.jsxs)("div", {
                            className: K.pageBody,
                            children: [(p.length > 0 || I.length > 0) && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("div", {
                                    children: (0, n.jsx)(m.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: q.default.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                                            count: p.length + T
                                        })
                                    })
                                }), p.map(A), I.map(A), (0, n.jsx)("div", {
                                    className: K.sectionSeparator
                                })]
                            }), v.length > 0 && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    children: [(0, n.jsx)(m.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        children: q.default.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format({
                                            count: v.length
                                        })
                                    }), (0, n.jsx)(m.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: q.default.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION
                                    })]
                                }), v.map(A)]
                            })]
                        }), o && (0, n.jsx)(et, {
                            guild: d,
                            user: r
                        })]
                    })
                })
            }