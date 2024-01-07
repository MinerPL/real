            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return h
                }
            }), a("222007");
            var t = a("37983"),
                l = a("884691"),
                i = a("446674"),
                r = a("77078"),
                d = a("716241"),
                n = a("592407"),
                o = a("900938"),
                c = a("610903"),
                u = a("476765"),
                E = a("283167"),
                S = a("495446"),
                R = a("535732"),
                m = a("95555"),
                _ = a("858555"),
                x = a("149632"),
                C = a("447621"),
                p = a("49111"),
                I = a("782340"),
                g = a("627819"),
                T = a("175717"),
                h = e => {
                    let {
                        transitionState: s,
                        onClose: h
                    } = e, {
                        guild: f,
                        guildMetadata: v
                    } = (0, i.useStateFromStoresObject)([o.default], () => o.default.getProps()), D = (0, u.useUID)(), [N, O] = l.useState(!1), [A, M] = l.useState(0), [V, j] = l.useState(!1);
                    if (l.useEffect(() => {
                            d.default.trackWithMetadata(p.AnalyticEvents.OPEN_MODAL, {
                                type: p.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                            })
                        }, []), null == f) return null;
                    let y = (0, t.jsx)(R.default, {
                            guild: f,
                            headerId: D
                        }),
                        L = (0, t.jsx)(S.default, {
                            guild: f,
                            guildMetadata: v,
                            headerId: D
                        }),
                        k = (0, t.jsx)(_.default, {
                            guild: f,
                            guildMetadata: v,
                            headerId: D
                        }),
                        Y = (0, t.jsx)(m.default, {
                            guild: f,
                            headerId: D,
                            onAgreedChange: j
                        }),
                        G = (0, t.jsx)("img", {
                            alt: "",
                            src: T,
                            className: g.footerImage,
                            width: 240
                        }),
                        b = async () => {
                            if (0 === A) {
                                O(!0);
                                try {
                                    await n.default.saveGuild(f.id, {
                                        description: f.description
                                    }, {
                                        isForDiscovery: !0,
                                        throwErr: !0
                                    }), M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.DESCRIPTION, x.DiscoverySetupModalSteps.CATEGORIES, f.id)
                                } catch (e) {}
                            } else if (1 === A) M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.CATEGORIES, x.DiscoverySetupModalSteps.TAGS, f.id);
                            else if (2 === A) {
                                O(!0);
                                try {
                                    await (0, E.saveGuildMetadata)({
                                        guildId: f.id,
                                        primaryCategoryId: v.primaryCategoryId,
                                        keywords: v.keywords,
                                        emojiDiscoverabilityEnabled: v.emojiDiscoverabilityEnabled,
                                        partnerActionedTimestamp: v.partnerActionedTimestamp,
                                        partnerApplicationTimestamp: v.partnerApplicationTimestamp,
                                        isPublished: v.isPublished,
                                        reasonsToJoin: v.reasonsToJoin,
                                        socialLinks: v.socialLinks,
                                        about: v.about
                                    }), M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.TAGS, x.DiscoverySetupModalSteps.AGREE_TO_RULES, f.id)
                                } catch (e) {}
                            }
                            O(!1)
                        }, P = [{
                            modalContent: y,
                            disableNextStep: null == f.description,
                            overviewTitle: I.default.Messages.SERVER_DISCOVERY_DESCRIPTION
                        }, {
                            modalContent: L,
                            disableNextStep: v.primaryCategoryId === C.DEFAULT_DISCOVERY_CATEGORY_ID || null == v.primaryCategoryId,
                            overviewTitle: I.default.Messages.SERVER_DISCOVERY_CATEGORY
                        }, {
                            modalContent: k,
                            disableNextStep: 0 === v.keywords.length,
                            overviewTitle: I.default.Messages.SERVER_DISCOVERY_TAGS
                        }, {
                            modalContent: Y,
                            disableNextStep: !V,
                            overviewTitle: I.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
                        }];
                    return (0, t.jsx)(c.default, {
                        stepData: P,
                        title: I.default.Messages.SERVER_DISCOVERY_SETUP_SIDEBAR_HEADLINE,
                        transitionState: s,
                        onClose: h,
                        completeButtonText: I.default.Messages.ALL_DONE,
                        onNextPressed: b,
                        onPrevPressed: () => {
                            M(A - 1)
                        },
                        forceStep: A,
                        onComplete: () => {
                            let e = f.features;
                            !f.hasFeature(p.GuildFeatures.DISCOVERABLE) && e.add(p.GuildFeatures.DISCOVERABLE), n.default.saveGuild(f.id, {
                                features: e,
                                description: f.description
                            }), (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("502155").then(a.bind(a, "502155"));
                                return s => (0, t.jsx)(e, {
                                    ...s,
                                    guild: f
                                })
                            })
                        },
                        overviewFooter: G,
                        submitting: N,
                        sequencerClassName: g.container
                    })
                }