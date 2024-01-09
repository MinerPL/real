            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            }), s("222007");
            var l = s("37983"),
                a = s("884691"),
                i = s("759843"),
                n = s("77078"),
                r = s("326678"),
                d = s("622210"),
                o = s("813006"),
                u = s("439932"),
                c = s("71102"),
                C = s("694410"),
                m = s("426253"),
                f = s("640952"),
                T = s("351531"),
                E = s("926818"),
                _ = s("730647"),
                x = s("49111"),
                I = s("719223");

            function L(e) {
                let {
                    directoryChannelId: t,
                    transitionState: s,
                    initialSlide: L = _.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
                    onClose: h,
                    directoryGuildName: g,
                    directoryGuildId: N,
                    currentCategoryId: S
                } = e, [p, M] = a.useState(L), [A, j] = a.useState(null), [U, B] = a.useState(null), [D, H] = a.useState(null), [O, G] = a.useState(null), [R, y] = a.useState(null), [v, b] = a.useState(""), [F, k] = a.useState(null != S ? S : _.DirectoryEntryCategories.UNCATEGORIZED), [Z, V] = a.useState(!1), {
                    availableGuilds: w,
                    addedGuilds: P,
                    loading: z
                } = (0, C.default)(N, t);
                a.useEffect(() => {
                    M(L)
                }, [M, L]);
                let Y = async () => {
                    let e = R;
                    if (!Z) {
                        if (null == D || null == U) return;
                        let t = await r.default.createGuildFromTemplate(D, O, U);
                        y(e = new o.default(t))
                    }
                    null != e && (await c.addDirectoryGuildEntry(t, e.id, v, F), M(_.CreateOrAddGuildSlideTypes.CONFIRMATION))
                }, X = {
                    impression_group: i.ImpressionGroups.DIRECTORY_GUILD_ADD_FLOW
                };
                return (0, l.jsx)("div", {
                    className: (0, u.getThemeClass)(x.ThemeTypes.LIGHT),
                    children: (0, l.jsx)(n.ModalRoot, {
                        transitionState: s,
                        disableTrack: !0,
                        children: (0, l.jsx)("div", {
                            className: I.container,
                            children: (0, l.jsxs)(n.Slides, {
                                activeSlide: p,
                                width: 440,
                                onSlideReady: e => j(e),
                                children: [(0, l.jsx)(n.Slide, {
                                    id: _.CreateOrAddGuildSlideTypes.CHOOSE_GUILD,
                                    impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
                                    impressionProperties: X,
                                    children: (0, l.jsx)(m.default, {
                                        directoryChannelId: t,
                                        directoryGuildName: g,
                                        onGuildChosen: e => {
                                            V(!0), M(_.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD), y(e)
                                        },
                                        handleChooseCreate: () => {
                                            V(!1), M(_.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES)
                                        },
                                        onClose: h,
                                        availableGuilds: w,
                                        addedGuilds: P,
                                        loading: z
                                    })
                                }), (0, l.jsx)(n.Slide, {
                                    id: _.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES,
                                    impressionName: i.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
                                    impressionProperties: X,
                                    children: (0, l.jsx)(E.default, {
                                        directoryGuildName: g,
                                        onChooseTemplate: e => {
                                            V(!1), M(_.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD), B(e)
                                        },
                                        onClose: h,
                                        onBack: () => M(_.CreateOrAddGuildSlideTypes.CHOOSE_GUILD)
                                    })
                                }), (0, l.jsx)(n.Slide, {
                                    id: _.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD,
                                    impressionName: i.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
                                    impressionProperties: X,
                                    children: (0, l.jsx)(d.default, {
                                        guildTemplate: U,
                                        onHubGuildInfoSet: (e, t) => {
                                            H(e), G(t), M(_.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD)
                                        },
                                        onClose: h,
                                        onBack: () => M(_.CreateOrAddGuildSlideTypes.GUILD_TEMPLATES),
                                        isSlideReady: A === _.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD
                                    })
                                }), (0, l.jsx)(n.Slide, {
                                    id: _.CreateOrAddGuildSlideTypes.CUSTOMIZE_EXISTING_GUILD,
                                    impressionName: i.ImpressionNames.HUB_EXISTING_GUILD_CUSTOMIZE,
                                    impressionProperties: X,
                                    children: (0, l.jsx)(f.default, {
                                        directoryChannelId: t,
                                        description: v,
                                        onDescriptionChange: b,
                                        categoryId: F,
                                        onCategoryIdChange: k,
                                        onSubmit: Y,
                                        onBack: () => M(Z ? _.CreateOrAddGuildSlideTypes.CHOOSE_GUILD : _.CreateOrAddGuildSlideTypes.CUSTOMIZE_NEW_GUILD),
                                        onClose: h
                                    })
                                }), (0, l.jsx)(n.Slide, {
                                    id: _.CreateOrAddGuildSlideTypes.CONFIRMATION,
                                    impressionName: i.ImpressionNames.DIRECTORY_ADD_GUILD_CONFIRMATION,
                                    impressionProperties: X,
                                    children: (0, l.jsx)(T.default, {
                                        directoryGuildName: g,
                                        guildToAdd: R,
                                        isExistingGuildFlow: Z,
                                        onClose: h
                                    })
                                })]
                            })
                        })
                    })
                })
            }