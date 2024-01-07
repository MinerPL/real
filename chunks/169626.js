            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                s = n.n(l),
                a = n("759843"),
                o = n("77078"),
                u = n("84339"),
                d = n("599110"),
                c = n("439932"),
                _ = n("519374"),
                E = n("818351"),
                I = n("21214"),
                f = n("622210"),
                A = n("72405"),
                p = n("110337"),
                h = n("243338"),
                R = n("49111"),
                N = n("91140");

            function S(e) {
                let {
                    transitionState: t,
                    initialSlide: n = h.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    onSuccess: l,
                    onClose: S,
                    onSlideChange: T,
                    hasJoinButton: m
                } = e, [g, C] = i.useState(n), L = (0, u.default)(g), [D, O] = i.useState(null), [M, v] = i.useState(null), [U, y] = i.useState(null), [P, G] = i.useState(!1), {
                    forceLightTheme: w
                } = (0, _.default)({
                    location: "CreateGuildModal"
                });
                i.useEffect(() => {
                    C(n)
                }, [C, n]), i.useEffect(() => {
                    g !== L && T(g)
                }, [T, g, L]);
                let b = i.useCallback(e => {
                        C(h.CreateGuildSlideTypes.CREATION_INTENT), v(e), d.default.track(R.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.id,
                            template_code: e.code
                        })
                    }, []),
                    F = i.useCallback(e => {
                        G(e), C(h.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
                    }, []),
                    x = i.useCallback(() => C(h.CreateGuildSlideTypes.JOIN_GUILD), [C]),
                    V = i.useCallback(() => {
                        if (g === h.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
                            C(h.CreateGuildSlideTypes.CREATION_INTENT);
                            return
                        }
                        C(h.CreateGuildSlideTypes.GUILD_TEMPLATES), v(null)
                    }, [g]),
                    B = i.useCallback(e => {
                        y(e), l(e)
                    }, [l, y]),
                    k = i.useCallback(() => {
                        s(null != U, "handleSuccess called before onGuildCreated"), l(U)
                    }, [l, U]),
                    j = {
                        impression_group: a.ImpressionGroups.GUILD_ADD_FLOW
                    };
                return (0, r.jsx)("div", {
                    className: w ? (0, c.getThemeClass)(R.ThemeTypes.LIGHT) : void 0,
                    children: (0, r.jsx)(o.ModalRoot, {
                        transitionState: t,
                        disableTrack: !0,
                        children: (0, r.jsx)("div", {
                            className: N.container,
                            children: (0, r.jsxs)(o.Slides, {
                                activeSlide: g,
                                width: 440,
                                onSlideReady: e => O(e),
                                children: [(0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.GUILD_TEMPLATES,
                                    impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: j,
                                    children: (0, r.jsx)(A.default, {
                                        isNewUser: !1,
                                        onJoin: m ? x : void 0,
                                        onChooseTemplate: b,
                                        onClose: S
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.CREATION_INTENT,
                                    impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: j,
                                    children: (0, r.jsx)(I.default, {
                                        onClose: S,
                                        onBack: V,
                                        onCreationIntentChosen: F
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                    impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: j,
                                    children: (0, r.jsx)(f.default, {
                                        guildTemplate: M,
                                        onGuildCreated: B,
                                        onClose: S,
                                        onBack: V,
                                        isSlideReady: D === h.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                        isCommunity: P
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.CHANNEL_PROMPT,
                                    impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: j,
                                    children: (0, r.jsx)(E.default, {
                                        createdGuildId: U,
                                        onClose: S,
                                        onChannelPromptCompleted: k,
                                        isSlideReady: D === h.CreateGuildSlideTypes.CHANNEL_PROMPT
                                    })
                                }), (0, r.jsx)(o.Slide, {
                                    id: h.CreateGuildSlideTypes.JOIN_GUILD,
                                    impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: j,
                                    children: (0, r.jsx)(p.default, {
                                        onBack: V,
                                        onClose: S,
                                        isSlideReady: D === h.CreateGuildSlideTypes.JOIN_GUILD
                                    })
                                })]
                            })
                        })
                    })
                })
            }