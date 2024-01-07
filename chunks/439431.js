            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                n = s("414456"),
                r = s.n(n),
                o = s("759843"),
                i = s("446674"),
                c = s("77078"),
                u = s("731898"),
                d = s("818351"),
                f = s("21214"),
                E = s("622210"),
                p = s("72405"),
                h = s("697218"),
                m = s("145131"),
                N = s("476765"),
                _ = s("599110"),
                T = s("439932"),
                A = s("527441"),
                v = s("207354"),
                S = s("377052"),
                x = s("344491"),
                I = s("134760"),
                g = s("56235"),
                C = s("218971"),
                O = s("49111"),
                b = s("47212"),
                U = s("782340"),
                M = s("650067");

            function G(e) {
                let t;
                let s = (0, N.useUID)(),
                    {
                        onSlideChange: n,
                        ...G
                    } = e,
                    {
                        onClose: R
                    } = G,
                    [y, j] = l.useState(!1),
                    D = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()),
                    F = null != D && null == D.nsfwAllowed,
                    [L, k] = l.useState(F ? C.NUFSlides.AGE_GATE : C.NUFSlides.CHOOSE_TEMPLATE),
                    [P, w] = l.useState(null);
                l.useEffect(() => {
                    n(y ? C.NUFSlides.COMPLETE : L)
                }, [n, L, y]);
                let [B, H] = l.useState(null), [V, Y] = l.useState(null), [z, J] = l.useState(!1), W = (0, i.useStateFromStores)([A.default], () => A.default.getType() === g.NewUserTypes.INVITE_UNCLAIMED), K = l.useCallback(e => {
                    Y(e), k(C.NUFSlides.CREATION_INTENT), _.default.track(O.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    })
                }, [Y, k]), {
                    content: Z,
                    footer: X
                } = (0, f.useCreationIntentSlide)({
                    hasFooter: !1,
                    onBack: () => {
                        Y(null), k(C.NUFSlides.CHOOSE_TEMPLATE)
                    },
                    onCreationIntentChosen: e => {
                        J(e), k(C.NUFSlides.CUSTOMIZE_GUILD)
                    }
                }), {
                    content: q,
                    footer: Q
                } = (0, E.useCustomizeGuildSlide)({
                    guildTemplate: V,
                    titleClassName: M.customizeGuildTitle,
                    hasFooter: !1,
                    onGuildCreated: e => {
                        H(e), (null == V ? void 0 : V.id) === b.GuildTemplateId.CREATE ? k(C.NUFSlides.CHANNEL_PROMPT) : j(!0)
                    },
                    onBack: () => {
                        k(C.NUFSlides.CREATION_INTENT)
                    },
                    isSlideReady: P === C.NUFSlides.CUSTOMIZE_GUILD,
                    isCommunity: z
                }), {
                    content: $,
                    footer: ee
                } = (0, d.useChannelPromptSlide)({
                    createdGuildId: B,
                    hasFooter: !1,
                    onChannelPromptCompleted: () => {
                        j(!0)
                    },
                    isSlideReady: P === C.NUFSlides.CHANNEL_PROMPT
                }), {
                    content: et,
                    footer: es
                } = (0, x.default)({
                    onBack: () => k(C.NUFSlides.CHOOSE_TEMPLATE),
                    onComplete: () => {
                        R()
                    },
                    onConnect: R,
                    isSlideReady: P === C.NUFSlides.JOIN_GUILD
                });
                switch (L) {
                    case C.NUFSlides.CUSTOMIZE_GUILD:
                        t = Q;
                        break;
                    case C.NUFSlides.CHANNEL_PROMPT:
                        t = ee;
                        break;
                    case C.NUFSlides.JOIN_GUILD:
                        t = es;
                        break;
                    case C.NUFSlides.CREATION_INTENT:
                        t = X
                }
                let {
                    ref: ea,
                    width: el
                } = (0, u.default)();
                if (y) return (0, a.jsx)(c.ModalRoot, {
                    ...G,
                    size: c.ModalSize.MEDIUM,
                    className: r(M.modal, M.completed),
                    "aria-labelledby": s,
                    children: (0, a.jsx)(S.default, {
                        onComplete: R
                    })
                });
                let en = {
                    impression_group: o.ImpressionGroups.GUILD_ADD_NUF
                };
                return (0, a.jsxs)(c.ModalRoot, {
                    ...G,
                    size: c.ModalSize.MEDIUM,
                    className: M.modal,
                    "aria-labelledby": s,
                    children: [(0, a.jsx)("div", {
                        className: M.sidebar,
                        children: (0, a.jsx)(I.default, {
                            step: L
                        })
                    }), (0, a.jsxs)("div", {
                        className: r(M.content, (0, T.getThemeClass)(O.ThemeTypes.LIGHT)),
                        ref: ea,
                        children: [(0, a.jsx)("div", {
                            className: M.slidesContainer,
                            children: (0, a.jsxs)(c.Slides, {
                                activeSlide: L,
                                onSlideReady: e => w(e),
                                centered: !1,
                                width: el,
                                children: [(0, a.jsx)(c.Slide, {
                                    id: C.NUFSlides.AGE_GATE,
                                    children: (0, a.jsx)("div", {
                                        className: M.container,
                                        children: (0, a.jsx)(v.default, {
                                            onComplete: () => {
                                                W ? R() : k(C.NUFSlides.CHOOSE_TEMPLATE)
                                            },
                                            onClose: R
                                        })
                                    })
                                }), (0, a.jsx)(c.Slide, {
                                    id: C.NUFSlides.CHOOSE_TEMPLATE,
                                    impressionName: o.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: r(M.container, M.shortFooter),
                                        children: (0, a.jsx)(p.default, {
                                            className: M.templates,
                                            onChooseTemplate: K,
                                            isNewUser: !0
                                        })
                                    })
                                }), (0, a.jsx)(c.Slide, {
                                    id: C.NUFSlides.CREATION_INTENT,
                                    impressionName: o.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: r(M.container, M.standardFooter),
                                        children: Z
                                    })
                                }), (0, a.jsx)(c.Slide, {
                                    id: C.NUFSlides.CUSTOMIZE_GUILD,
                                    impressionName: o.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: r(M.container, M.standardFooter),
                                        children: q
                                    })
                                }), (0, a.jsx)(c.Slide, {
                                    id: C.NUFSlides.CHANNEL_PROMPT,
                                    impressionName: o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: r(M.container, M.standardFooter),
                                        children: $
                                    })
                                }), (0, a.jsx)(c.Slide, {
                                    id: C.NUFSlides.JOIN_GUILD,
                                    impressionName: o.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: r(M.container, M.standardFooter),
                                        children: et
                                    })
                                })]
                            })
                        }), L !== C.NUFSlides.AGE_GATE ? (0, a.jsx)(c.ModalCloseButton, {
                            onClick: R,
                            className: M.closeButton
                        }) : null, L === C.NUFSlides.CHOOSE_TEMPLATE ? (0, a.jsx)(c.ModalFooter, {
                            justify: m.default.Justify.BETWEEN,
                            className: r(M.footer, M.join),
                            children: (0, a.jsx)(c.Anchor, {
                                className: M.joinCTA,
                                onClick: () => {
                                    k(C.NUFSlides.JOIN_GUILD)
                                },
                                children: (0, a.jsxs)(c.Text, {
                                    variant: "text-sm/medium",
                                    className: M.joinCTA,
                                    children: [U.default.Messages.NUF_HAVE_AN_INVITE_ALREADY, " ", U.default.Messages.JOIN_SERVER_BUTTON_CTA]
                                })
                            })
                        }) : null, null != t ? (0, a.jsx)(c.ModalFooter, {
                            justify: m.default.Justify.BETWEEN,
                            className: M.footer,
                            children: t
                        }) : null]
                    })]
                })
            }