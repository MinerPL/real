            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("669491"),
                a = n("748802"),
                o = n("877585"),
                s = n("77078"),
                u = n("599110"),
                c = n("908539"),
                d = n("132206"),
                f = n("698609"),
                E = n("380676"),
                _ = n("170213"),
                p = n("49111"),
                h = n("782340"),
                I = n("383496");
            let S = e => {
                    let {
                        classificationTypeText: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: I.classificationHeader,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/normal",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: t,
                                classificationHook: (e, t) => (0, i.jsx)("strong", {
                                    children: e
                                }, t)
                            })
                        })
                    })
                },
                T = e => {
                    let {
                        actions: t
                    } = e, n = t.filter(e => e.descriptions.length > 0);
                    return 0 === n.length ? null : (0, i.jsxs)("div", {
                        className: I.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("ul", {
                            className: I.classificationActionsTakenList,
                            children: t.map(e => (0, i.jsx)(C, {
                                action: e
                            }, e.id))
                        })]
                    })
                },
                C = e => {
                    let {
                        action: t
                    } = e;
                    return (0, i.jsx)(i.Fragment, {
                        children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
                            className: I.classificationActionsTakenRow,
                            children: (0, i.jsx)(s.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children: e
                            })
                        }, t))
                    })
                },
                g = e => {
                    let {
                        classificationTypeText: t,
                        policyExplainerLink: n
                    } = e;
                    return (0, i.jsxs)(s.Anchor, {
                        href: n,
                        className: I.classificationPolicyCard,
                        useDefaultUnderlineStyles: !1,
                        children: [(0, i.jsx)("div", {
                            className: I.classificationPolicyCardIcon,
                            children: (0, i.jsx)(o.ShieldIcon, {
                                width: 24,
                                height: 24,
                                color: l.default.colors.FOCUS_PRIMARY
                            })
                        }), (0, i.jsx)("div", {
                            className: I.classificationPolicyDescriptionContainer,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: t
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: I.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(a.ChevronSmallRightIcon, {
                                width: 24,
                                height: 24,
                                color: l.default.colors.INTERACTIVE_NORMAL
                            })
                        })]
                    })
                },
                m = () => (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
                }),
                v = e => (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                        letUsKnowHook: (t, n) => (0, i.jsx)(s.Anchor, {
                            href: e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        }, n)
                    })
                }),
                A = e => (0, i.jsx)("div", {
                    className: I.classificationLetUsKnowContainer,
                    children: e.hasBeenAppealed ? (0, i.jsx)(m, {}) : (0, i.jsx)(v, {
                        appealLink: _.SafetyHubLinks.APPEALS_LINK,
                        letUsKnowClick: e.onLetUsKnowClick
                    })
                }),
                N = e => {
                    let {
                        tosLink: t,
                        communityGuidelinesLink: n,
                        classificationTypeText: r,
                        policyExplainerLink: l,
                        appealComponent: a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: I.classificationActionExplanationContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(s.Text, {
                            className: I.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: h.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: t,
                                communityGuidelinesLink: n
                            })
                        }), (0, i.jsx)(g, {
                            classificationTypeText: r,
                            policyExplainerLink: l
                        }), a]
                    })
                };
            var L = e => {
                var t;
                let {
                    classificationId: n,
                    source: l,
                    onError: a
                } = e, {
                    classification: o,
                    classificationRequestState: s
                } = (0, f.useSafetyHubClassification)(n), h = (0, d.useSafetyHubAccountStanding)(), C = null != o && null != o.flagged_content && o.flagged_content.length > 0;
                return (r.useEffect(() => {
                    u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: _.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: h.state,
                        classification_ids: [Number(n)],
                        source: l,
                        is_violative_content_shown: C
                    })
                }, []), null == o && s === c.ClassificationRequestState.FAILED) ? (a(), null) : null == o ? null : (0, i.jsxs)("div", {
                    className: I.classificationContainer,
                    children: [(0, i.jsx)(S, {
                        classificationTypeText: o.description
                    }), C && (0, i.jsx)(E.ClassificationEvidence, {
                        flaggedContent: null !== (t = o.flagged_content) && void 0 !== t ? t : []
                    }), (0, i.jsx)(T, {
                        actions: o.actions
                    }), (0, i.jsx)(N, {
                        classificationTypeText: o.description,
                        tosLink: _.SafetyHubLinks.TOS_LINK,
                        communityGuidelinesLink: _.SafetyHubLinks.COMMUNITY_GUIDELINES,
                        policyExplainerLink: o.explainer_link,
                        appealComponent: (0, i.jsx)(A, {
                            hasBeenAppealed: null != o.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
                                    action: _.SafetyHubAnalyticsActions.ClickLetUsKnow,
                                    account_standing: h.state,
                                    classification_ids: [Number(n)],
                                    source: l,
                                    is_violative_content_shown: C
                                })
                            }
                        })
                    })]
                })
            }