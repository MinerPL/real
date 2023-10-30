(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73864"], {
        394835: function(e, t, s) {
            var a = s("798439");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1
            }
        },
        991914: function(e, t, s) {
            e.exports = function(e, t, s) {
                for (var a = -1, l = null == e ? 0 : e.length; ++a < l;)
                    if (s(t, e[a])) return !0;
                return !1
            }
        },
        341945: function(e, t, s) {
            e.exports = function(e, t, s, a) {
                for (var l = e.length, r = s + (a ? 1 : -1); a ? r-- : ++r < l;)
                    if (t(e[r], r, e)) return r;
                return -1
            }
        },
        798439: function(e, t, s) {
            var a = s("341945"),
                l = s("506475"),
                r = s("826473");
            e.exports = function(e, t, s) {
                return t == t ? r(e, t, s) : a(e, l, s)
            }
        },
        506475: function(e, t, s) {
            e.exports = function(e) {
                return e != e
            }
        },
        700718: function(e, t, s) {
            var a = s("488063"),
                l = s("394835"),
                r = s("991914"),
                i = s("430272"),
                n = s("662504"),
                d = s("531217");
            e.exports = function(e, t, s) {
                var o = -1,
                    c = l,
                    u = e.length,
                    E = !0,
                    S = [],
                    R = S;
                if (s) E = !1, c = r;
                else if (u >= 200) {
                    var m = t ? null : n(e);
                    if (m) return d(m);
                    E = !1, c = i, R = new a
                } else R = t ? [] : S;
                e: for (; ++o < u;) {
                    var _ = e[o],
                        x = t ? t(_) : _;
                    if (_ = s || 0 !== _ ? _ : 0, E && x == x) {
                        for (var p = R.length; p--;)
                            if (R[p] === x) continue e;
                        t && R.push(x), S.push(_)
                    } else !c(R, x, s) && (R !== S && R.push(x), S.push(_))
                }
                return S
            }
        },
        662504: function(e, t, s) {
            var a = s("892933"),
                l = s("872949"),
                r = s("531217"),
                i = a && 1 / r(new a([, -0]))[1] == 1 / 0 ? function(e) {
                    return new a(e)
                } : l;
            e.exports = i
        },
        826473: function(e, t, s) {
            e.exports = function(e, t, s) {
                for (var a = s - 1, l = e.length; ++a < l;)
                    if (e[a] === t) return a;
                return -1
            }
        },
        872949: function(e, t, s) {
            e.exports = function() {}
        },
        884745: function(e, t, s) {
            var a = s("700718");
            e.exports = function(e) {
                return e && e.length ? a(e) : []
            }
        },
        864984: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d3735abaf143d4749cfd.svg"
        },
        797491: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b3fb8c64a6eb47bf8a0d.svg"
        },
        369684: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0e62a9c9a822a207e2ef.svg"
        },
        76244: function(e, t, s) {
            "use strict";
            e.exports = s.p + "667b49e32583559c2cfb.svg"
        },
        492094: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a5049a603d8eebb8d728.svg"
        },
        300933: function(e, t, s) {
            "use strict";
            e.exports = s.p + "15253e2e8b246b57f156.svg"
        },
        941089: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                n = s("716241"),
                d = s("592407"),
                o = s("900938"),
                c = s("610903"),
                u = s("476765"),
                E = s("283167"),
                S = s("495446"),
                R = s("535732"),
                m = s("95555"),
                _ = s("858555"),
                x = s("149632"),
                p = s("447621"),
                f = s("49111"),
                C = s("782340"),
                g = s("627819"),
                I = s("175717"),
                h = e => {
                    let {
                        transitionState: t,
                        onClose: h
                    } = e, {
                        guild: T,
                        guildMetadata: v
                    } = (0, r.useStateFromStoresObject)([o.default], () => o.default.getProps()), D = (0, u.useUID)(), [N, O] = l.useState(!1), [A, M] = l.useState(0), [V, j] = l.useState(!1);
                    if (l.useEffect(() => {
                            n.default.trackWithMetadata(f.AnalyticEvents.OPEN_MODAL, {
                                type: f.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL
                            })
                        }, []), null == T) return null;
                    let y = (0, a.jsx)(R.default, {
                            guild: T,
                            headerId: D
                        }),
                        L = (0, a.jsx)(S.default, {
                            guild: T,
                            guildMetadata: v,
                            headerId: D
                        }),
                        k = (0, a.jsx)(_.default, {
                            guild: T,
                            guildMetadata: v,
                            headerId: D
                        }),
                        Y = (0, a.jsx)(m.default, {
                            guild: T,
                            headerId: D,
                            onAgreedChange: j
                        }),
                        G = (0, a.jsx)("img", {
                            alt: "",
                            src: I,
                            className: g.footerImage,
                            width: 240
                        }),
                        b = async () => {
                            if (0 === A) {
                                O(!0);
                                try {
                                    await d.default.saveGuild(T.id, {
                                        description: T.description
                                    }, {
                                        isForDiscovery: !0,
                                        throwErr: !0
                                    }), M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.DESCRIPTION, x.DiscoverySetupModalSteps.CATEGORIES, T.id)
                                } catch (e) {}
                            } else if (1 === A) M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.CATEGORIES, x.DiscoverySetupModalSteps.TAGS, T.id);
                            else if (2 === A) {
                                O(!0);
                                try {
                                    await (0, E.saveGuildMetadata)({
                                        guildId: T.id,
                                        primaryCategoryId: v.primaryCategoryId,
                                        keywords: v.keywords,
                                        emojiDiscoverabilityEnabled: v.emojiDiscoverabilityEnabled,
                                        partnerActionedTimestamp: v.partnerActionedTimestamp,
                                        partnerApplicationTimestamp: v.partnerApplicationTimestamp,
                                        isPublished: v.isPublished,
                                        reasonsToJoin: v.reasonsToJoin,
                                        socialLinks: v.socialLinks,
                                        about: v.about
                                    }), M(A + 1), (0, x.trackFlowAnalytics)(x.DiscoverySetupModalSteps.TAGS, x.DiscoverySetupModalSteps.AGREE_TO_RULES, T.id)
                                } catch (e) {}
                            }
                            O(!1)
                        }, P = [{
                            modalContent: y,
                            disableNextStep: null == T.description,
                            overviewTitle: C.default.Messages.SERVER_DISCOVERY_DESCRIPTION
                        }, {
                            modalContent: L,
                            disableNextStep: v.primaryCategoryId === p.DEFAULT_DISCOVERY_CATEGORY_ID || null == v.primaryCategoryId,
                            overviewTitle: C.default.Messages.SERVER_DISCOVERY_CATEGORY
                        }, {
                            modalContent: k,
                            disableNextStep: 0 === v.keywords.length,
                            overviewTitle: C.default.Messages.SERVER_DISCOVERY_TAGS
                        }, {
                            modalContent: Y,
                            disableNextStep: !V,
                            overviewTitle: C.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
                        }];
                    return (0, a.jsx)(c.default, {
                        stepData: P,
                        title: C.default.Messages.SERVER_DISCOVERY_SETUP_SIDEBAR_HEADLINE,
                        transitionState: t,
                        onClose: h,
                        completeButtonText: C.default.Messages.ALL_DONE,
                        onNextPressed: b,
                        onPrevPressed: () => {
                            M(A - 1)
                        },
                        forceStep: A,
                        onComplete: () => {
                            let e = T.features;
                            !T.hasFeature(f.GuildFeatures.DISCOVERABLE) && e.add(f.GuildFeatures.DISCOVERABLE), d.default.saveGuild(T.id, {
                                features: e,
                                description: T.description
                            }), (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("502155").then(s.bind(s, "502155"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guild: T
                                })
                            })
                        },
                        overviewFooter: G,
                        submitting: N,
                        sequencerClassName: g.container
                    })
                }
        },
        495446: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("77078"),
                n = s("26991"),
                d = s("954419"),
                o = s("283167"),
                c = s("868246"),
                u = s("447621"),
                E = s("782340"),
                S = s("627819"),
                R = e => {
                    let {
                        guild: t,
                        guildMetadata: s,
                        headerId: l
                    } = e, R = c.default.getPrimaryCategories().map(e => {
                        let {
                            categoryId: t,
                            name: s
                        } = e;
                        return {
                            value: t,
                            label: s
                        }
                    });
                    return (0, a.jsxs)("div", {
                        className: S.container,
                        children: [(0, a.jsxs)("div", {
                            className: S.content,
                            children: [(0, a.jsx)("div", {
                                className: r(S.stepImage, S.tagImage)
                            }), (0, a.jsx)(i.Heading, {
                                variant: "heading-xl/semibold",
                                className: S.header,
                                id: l,
                                children: E.default.Messages.SERVER_DISCOVERY_CATEGORY
                            }), (0, a.jsx)(i.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: S.headerCaption,
                                children: E.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
                            })]
                        }), (0, a.jsxs)(i.FormSection, {
                            className: S.form,
                            children: [(0, a.jsx)(i.FormTitle, {
                                required: !0,
                                children: E.default.Messages.SERVER_DISCOVERY_CATEGORY
                            }), (0, a.jsx)(i.FormText, {
                                type: i.FormTextTypes.DESCRIPTION,
                                className: S.description,
                                children: E.default.Messages.SERVER_DISCOVERY_CATEGORY_INPUT_SUBLABEL
                            }), (0, a.jsx)(d.default, {
                                value: s.primaryCategoryId === u.DEFAULT_DISCOVERY_CATEGORY_ID ? null : s.primaryCategoryId,
                                placeholder: E.default.Messages.SELECT,
                                searchable: !0,
                                clearable: !1,
                                options: R,
                                onChange: e => {
                                    var s;
                                    (null == t ? void 0 : t.id) != null && o.updateGuildPrimaryCategory(null == t ? void 0 : t.id, null !== (s = null == e ? void 0 : e.value) && void 0 !== s ? s : u.DEFAULT_DISCOVERY_CATEGORY_ID)
                                },
                                maxMenuHeight: 250
                            })]
                        }), (0, a.jsxs)(i.FormSection, {
                            className: S.form,
                            children: [(0, a.jsx)(i.FormTitle, {
                                children: E.default.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_LABEL
                            }), (0, a.jsx)(i.FormText, {
                                type: i.FormTextTypes.DESCRIPTION,
                                className: S.description,
                                children: E.default.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_SUBLABEL
                            }), (0, a.jsx)(n.default, {
                                guild: t,
                                guildMetadata: s,
                                menuPlacement: d.default.MenuPlacements.TOP
                            })]
                        })]
                    })
                }
        },
        535732: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("446674"),
                n = s("77078"),
                d = s("592407"),
                o = s("900938"),
                c = s("149632"),
                u = s("49111"),
                E = s("782340"),
                S = s("627819"),
                R = e => {
                    var t;
                    let {
                        guild: s,
                        headerId: l
                    } = e, R = (0, i.useStateFromStores)([o.default], () => "description" in o.default.getErrors()), m = R ? E.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
                        onLearnMoreClick: () => {
                            (0, c.navigateToAndTrackHelpCenterClick)({
                                articleId: u.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                                guildId: s.id,
                                modalStep: c.DiscoverySetupModalSteps.DESCRIPTION
                            })
                        }
                    }) : null;
                    return (0, a.jsxs)("div", {
                        className: S.container,
                        children: [(0, a.jsxs)("div", {
                            className: S.content,
                            children: [(0, a.jsx)("div", {
                                className: r(S.stepImage, S.pencilImage)
                            }), (0, a.jsx)(n.Heading, {
                                variant: "heading-xl/semibold",
                                className: S.header,
                                id: l,
                                children: E.default.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_HEADER
                            }), (0, a.jsx)(n.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: S.headerCaption,
                                children: E.default.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_SUBHEADING
                            })]
                        }), (0, a.jsxs)(n.FormSection, {
                            className: S.form,
                            children: [(0, a.jsx)(n.FormTitle, {
                                required: !0,
                                children: E.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
                            }), (0, a.jsx)(n.FormText, {
                                type: n.FormTextTypes.DESCRIPTION,
                                className: S.description,
                                children: E.default.Messages.SERVER_DISCOVERY_SERVER_DESCRIPTION_INPUT_SUBLABEL
                            }), (0, a.jsx)(n.TextArea, {
                                autoFocus: !0,
                                value: null !== (t = s.description) && void 0 !== t ? t : "",
                                placeholder: E.default.Messages.SERVER_DESCIPTION_EMPTY,
                                onChange: e => {
                                    d.default.updateGuild({
                                        description: e
                                    })
                                },
                                maxLength: 120,
                                className: S.textArea,
                                error: m
                            })]
                        })]
                    })
                }
        },
        95555: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("414456"),
                i = s.n(r),
                n = s("77078"),
                d = s("149632"),
                o = s("49111"),
                c = s("782340"),
                u = s("627819"),
                E = e => {
                    let {
                        headerId: t,
                        guild: s,
                        onAgreedChange: r
                    } = e, [E, S] = l.useState(!1), [R, m] = l.useState(!1), [_, x] = l.useState(!1);
                    l.useEffect(() => {
                        E && R && _ ? r(!0) : r(!1)
                    }, [E, R, _, r]);
                    let p = c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES.format({
                        onCommunityGuidelinesClick: () => (0, d.navigateToAndTrackHelpCenterClick)({
                            articleId: o.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES,
                            guildId: s.id,
                            modalStep: d.DiscoverySetupModalSteps.AGREE_TO_RULES
                        }),
                        onDiscoveryGuidelinesClick: () => (0, d.navigateToAndTrackHelpCenterClick)({
                            articleId: o.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                            guildId: s.id,
                            modalStep: d.DiscoverySetupModalSteps.AGREE_TO_RULES
                        })
                    });
                    return (0, a.jsxs)("div", {
                        className: u.container,
                        children: [(0, a.jsxs)("div", {
                            className: u.content,
                            children: [(0, a.jsx)("div", {
                                className: i(u.stepImage, u.checkImage)
                            }), (0, a.jsx)(n.Heading, {
                                variant: "heading-xl/semibold",
                                className: u.header,
                                id: t,
                                children: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
                            }), (0, a.jsx)(n.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: u.headerCaption,
                                children: c.default.Messages.SERVER_DISCOVERY_RULES_PAGE_SUBHEADING
                            })]
                        }), (0, a.jsxs)("div", {
                            className: u.form,
                            children: [(0, a.jsx)(n.FormTitle, {
                                required: !0,
                                children: c.default.Messages.SERVER_DISCOVERY_RULES_FORM_LABEL
                            }), (0, a.jsx)("div", {
                                className: u.checkboxWrapper,
                                children: (0, a.jsxs)(n.Checkbox, {
                                    type: n.Checkbox.Types.ROW,
                                    value: E,
                                    align: n.Checkbox.Aligns.TOP,
                                    onChange: () => S(!E),
                                    children: [(0, a.jsx)(n.Text, {
                                        variant: "text-md/semibold",
                                        className: u.checkboxTitle,
                                        children: c.default.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_HEADING
                                    }), (0, a.jsx)(n.Text, {
                                        variant: "text-sm/normal",
                                        children: c.default.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_DESCRIPTION
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: u.checkboxWrapper,
                                children: (0, a.jsxs)(n.Checkbox, {
                                    type: n.Checkbox.Types.ROW,
                                    align: n.Checkbox.Aligns.TOP,
                                    value: R,
                                    onChange: () => m(!R),
                                    children: [(0, a.jsx)(n.Text, {
                                        variant: "text-md/semibold",
                                        className: u.checkboxTitle,
                                        children: c.default.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_HEADING
                                    }), (0, a.jsx)(n.Text, {
                                        variant: "text-sm/normal",
                                        children: c.default.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_DESCRIPTION
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: u.checkboxWrapper,
                                children: (0, a.jsxs)(n.Checkbox, {
                                    type: n.Checkbox.Types.ROW,
                                    align: n.Checkbox.Aligns.TOP,
                                    value: _,
                                    onChange: () => x(!_),
                                    children: [(0, a.jsx)(n.Text, {
                                        variant: "text-md/semibold",
                                        className: u.checkboxTitle,
                                        children: p
                                    }), (0, a.jsx)(n.Text, {
                                        variant: "text-sm/normal",
                                        children: c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES_DESCRIPTION
                                    })]
                                })
                            })]
                        })]
                    })
                }
        },
        858555: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("414456"),
                i = s.n(r),
                n = s("884745"),
                d = s.n(n),
                o = s("446674"),
                c = s("77078"),
                u = s("711622"),
                E = s("716241"),
                S = s("900938"),
                R = s("599110"),
                m = s("758276"),
                _ = s("283167"),
                x = s("149632"),
                p = s("49111"),
                f = s("53948"),
                C = s("782340"),
                g = s("627819");
            let I = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
            var h = e => {
                var t;
                let {
                    guild: s,
                    guildMetadata: r,
                    headerId: n
                } = e, [h, T] = l.useState(!1), v = (0, o.useStateFromStores)([S.default], () => "keywords" in S.default.getErrors()), D = e => {
                    if (I.test(e)) T(!1);
                    else {
                        T(!0);
                        return
                    }
                    if ((null == s ? void 0 : s.id) == null) return;
                    let {
                        keywords: t
                    } = r;
                    !(t.length >= f.MAX_KEYWORDS) && _.updateGuildKeywords(s.id, d([...t, e.toLowerCase()]))
                }, N = e => {
                    D(e), R.default.track(p.AnalyticEvents.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                        tag: e,
                        primary_category_id: r.primaryCategoryId,
                        ...(0, E.collectGuildAnalyticsMetadata)(s.id)
                    })
                }, O = h ? C.default.Messages.SERVER_DISCOVERY_TAGS_ERROR_MSG_DASHES_ONLY : v ? C.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
                    onLearnMoreClick: () => {
                        (0, x.navigateToAndTrackHelpCenterClick)({
                            articleId: p.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                            guildId: s.id,
                            modalStep: x.DiscoverySetupModalSteps.TAGS
                        })
                    }
                }) : null, A = new Set(r.keywords);
                return (0, a.jsxs)("div", {
                    className: g.container,
                    children: [(0, a.jsxs)("div", {
                        className: g.content,
                        children: [(0, a.jsx)("div", {
                            className: i(g.stepImage, g.tagImage)
                        }), (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/semibold",
                            className: g.header,
                            id: n,
                            children: C.default.Messages.SERVER_DISCOVERY_TAGS
                        }), (0, a.jsx)(c.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: g.headerCaption,
                            children: C.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
                        })]
                    }), (0, a.jsxs)(c.FormSection, {
                        className: g.form,
                        children: [(0, a.jsx)(c.FormTitle, {
                            required: !0,
                            children: C.default.Messages.SERVER_DISCOVERY_TAGS
                        }), (0, a.jsx)(c.FormText, {
                            type: c.FormTextTypes.DESCRIPTION,
                            className: g.description,
                            children: C.default.Messages.SERVER_DISCOVERY_TAGS_INPUT_SUBLABEL
                        }), (0, a.jsx)(u.default, {
                            className: i(g.tags, {
                                [g.error]: null != O
                            }),
                            tags: r.keywords,
                            onRemoveTag: e => {
                                if ((null == s ? void 0 : s.id) == null) return;
                                let t = [...r.keywords];
                                t.splice(e, 1), _.updateGuildKeywords(s.id, t)
                            },
                            onAddTag: D,
                            maxTags: f.MAX_KEYWORDS,
                            maxTaxLength: f.MAX_KEYWORD_LENGTH,
                            placeholder: (null == r ? void 0 : null === (t = r.keywords) || void 0 === t ? void 0 : t.length) === 0 ? C.default.Messages.SERVER_DISCOVERY_TAGS_INPUT_PLACEHOLDER : ""
                        }), (0, a.jsx)(c.Text, {
                            className: g.error,
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: O
                        })]
                    }), (0, a.jsx)("div", {
                        className: g.form,
                        children: (0, a.jsx)(c.FormTitle, {
                            children: C.default.Messages.SERVER_DISCOVERY_POPULAR_TAGS
                        })
                    }), (0, a.jsx)("div", {
                        className: g.tagContainer,
                        children: (0, m.getSuggestedTags)(r.primaryCategoryId).map(e => (0, a.jsx)(c.Anchor, {
                            onClick: () => N(e),
                            className: i(g.tag, {
                                [g.usedTag]: A.has(e)
                            }),
                            children: e
                        }, e))
                    })]
                })
            }
        },
        610903: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("414456"),
                i = s.n(r),
                n = s("77078"),
                d = s("476765"),
                o = s("782340"),
                c = s("40968");
            let u = e => {
                let {
                    index: t,
                    title: s,
                    selected: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(c.overviewStep, {
                        [c.selected]: l
                    }),
                    children: [(0, a.jsx)(n.Text, {
                        className: c.stepIndex,
                        variant: "text-sm/normal",
                        children: t + 1
                    }), (0, a.jsx)(n.Text, {
                        variant: "text-md/normal",
                        className: c.stepTitle,
                        children: s
                    })]
                })
            };
            var E = e => {
                let {
                    className: t,
                    title: s,
                    stepData: r,
                    transitionState: E,
                    onClose: S,
                    completeButtonText: R,
                    overviewFooter: m,
                    onNextPressed: _,
                    onPrevPressed: x,
                    onComplete: p,
                    sequencerClassName: f,
                    initialStep: C = 0,
                    forceStep: g,
                    submitting: I = !1,
                    autoCloseOnComplete: h = !0
                } = e, [T, v] = l.useState([]), [D, N] = l.useState(C), O = (0, d.useUID)();
                l.useEffect(() => {
                    v([...Array(r.length).keys()])
                }, [r.length]);
                let A = null != g ? g : D,
                    M = r[A],
                    V = 0 === A,
                    j = A === r.length - 1,
                    y = null != R ? R : o.default.Messages.DONE,
                    L = l.useCallback(() => {
                        null == x || x(), N(A - 1)
                    }, [x, A, N]);
                return (0, a.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.MEDIUM,
                    className: i(c.container, t),
                    transitionState: E,
                    "aria-labelledby": O,
                    children: [(0, a.jsxs)("div", {
                        className: c.overviewSidebar,
                        children: [(0, a.jsx)(n.Heading, {
                            id: O,
                            variant: "heading-xl/semibold",
                            className: c.header,
                            children: s
                        }), (0, a.jsx)("div", {
                            className: c.overviewSteps,
                            children: r.map((e, t) => (0, a.jsx)(u, {
                                index: t,
                                title: e.overviewTitle,
                                selected: t === A
                            }, t))
                        }), m]
                    }), (0, a.jsxs)("div", {
                        className: c.modal,
                        children: [(0, a.jsxs)(n.ModalContent, {
                            children: [(0, a.jsx)(n.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: S,
                                className: c.closeButton
                            }), (0, a.jsx)(n.Sequencer, {
                                step: A,
                                steps: T,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: i(c.sequencer, f),
                                innerClassName: c.innerSequencer,
                                children: M.modalContent
                            })]
                        }), (0, a.jsxs)(n.ModalFooter, {
                            className: c.footer,
                            children: [(0, a.jsx)(n.Button, {
                                type: "submit",
                                submitting: I,
                                onClick: () => {
                                    if (j) p(), h && S();
                                    else null == _ || _(), N(A + 1)
                                },
                                color: n.Button.Colors.GREEN,
                                disabled: M.disableNextStep,
                                children: j ? y : o.default.Messages.NEXT
                            }), V ? null : (0, a.jsx)(n.Button, {
                                look: n.Button.Looks.LINK,
                                color: n.Button.Colors.PRIMARY,
                                size: n.Button.Sizes.MIN,
                                onClick: L,
                                children: o.default.Messages.BACK
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);