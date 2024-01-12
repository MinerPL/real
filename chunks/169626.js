            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                o = n.n(l),
                u = n("759843"),
                a = n("77078"),
                s = n("84339"),
                c = n("599110"),
                d = n("439932"),
                f = n("519374"),
                h = n("818351"),
                p = n("21214"),
                I = n("622210"),
                m = n("72405"),
                E = n("110337"),
                _ = n("243338"),
                g = n("49111"),
                T = n("91140");

            function S(e) {
                let {
                    transitionState: t,
                    initialSlide: n = _.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    onSuccess: l,
                    onClose: S,
                    onSlideChange: C,
                    hasJoinButton: v
                } = e, [N, A] = i.useState(n), L = (0, s.default)(N), [w, R] = i.useState(null), [M, D] = i.useState(null), [O, b] = i.useState(null), [U, G] = i.useState(!1), {
                    forceLightTheme: y
                } = (0, f.default)({
                    location: "CreateGuildModal"
                });
                i.useEffect(() => {
                    A(n)
                }, [A, n]), i.useEffect(() => {
                    N !== L && C(N)
                }, [C, N, L]);
                let x = i.useCallback(e => {
                        A(_.CreateGuildSlideTypes.CREATION_INTENT), D(e), c.default.track(g.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.id,
                            template_code: e.code
                        })
                    }, []),
                    k = i.useCallback(e => {
                        G(e), A(_.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
                    }, []),
                    F = i.useCallback(() => A(_.CreateGuildSlideTypes.JOIN_GUILD), [A]),
                    P = i.useCallback(() => {
                        if (N === _.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
                            A(_.CreateGuildSlideTypes.CREATION_INTENT);
                            return
                        }
                        A(_.CreateGuildSlideTypes.GUILD_TEMPLATES), D(null)
                    }, [N]),
                    j = i.useCallback(e => {
                        b(e), l(e)
                    }, [l, b]),
                    z = i.useCallback(() => {
                        o(null != O, "handleSuccess called before onGuildCreated"), l(O)
                    }, [l, O]),
                    V = {
                        impression_group: u.ImpressionGroups.GUILD_ADD_FLOW
                    };
                return (0, r.jsx)("div", {
                    className: y ? (0, d.getThemeClass)(g.ThemeTypes.LIGHT) : void 0,
                    children: (0, r.jsx)(a.ModalRoot, {
                        transitionState: t,
                        disableTrack: !0,
                        children: (0, r.jsx)("div", {
                            className: T.container,
                            children: (0, r.jsxs)(a.Slides, {
                                activeSlide: N,
                                width: 440,
                                onSlideReady: e => R(e),
                                children: [(0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.GUILD_TEMPLATES,
                                    impressionName: u.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(m.default, {
                                        isNewUser: !1,
                                        onJoin: v ? F : void 0,
                                        onChooseTemplate: x,
                                        onClose: S
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.CREATION_INTENT,
                                    impressionName: u.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(p.default, {
                                        onClose: S,
                                        onBack: P,
                                        onCreationIntentChosen: k
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                    impressionName: u.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(I.default, {
                                        guildTemplate: M,
                                        onGuildCreated: j,
                                        onClose: S,
                                        onBack: P,
                                        isSlideReady: w === _.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                        isCommunity: U
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.CHANNEL_PROMPT,
                                    impressionName: u.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(h.default, {
                                        createdGuildId: O,
                                        onClose: S,
                                        onChannelPromptCompleted: z,
                                        isSlideReady: w === _.CreateGuildSlideTypes.CHANNEL_PROMPT
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.JOIN_GUILD,
                                    impressionName: u.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(E.default, {
                                        onBack: P,
                                        onClose: S,
                                        isSlideReady: w === _.CreateGuildSlideTypes.JOIN_GUILD
                                    })
                                })]
                            })
                        })
                    })
                })
            }