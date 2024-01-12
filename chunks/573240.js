            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("669491"),
                o = n("748802"),
                a = n("877585"),
                s = n("77078"),
                u = n("599110"),
                c = n("667963"),
                d = n("908539"),
                f = n("132206"),
                E = n("698609"),
                _ = n("57242"),
                p = n("380676"),
                h = n("170213"),
                S = n("49111"),
                I = n("782340"),
                T = n("383496");
            let C = e => {
                    let {
                        classificationTypeText: t,
                        guildName: n
                    } = e, l = (0, c.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
                    return (0, i.jsx)("div", {
                        className: T.classificationHeader,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/normal",
                            children: l && null != n ? I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
                                guildName: n,
                                classification_type: t,
                                classificationHook: (e, t) => (0, i.jsx)("strong", {
                                    children: e
                                }, t)
                            }) : I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: t,
                                classificationHook: (e, t) => (0, i.jsx)("strong", {
                                    children: e
                                }, t)
                            })
                        })
                    })
                },
                g = e => {
                    let {
                        actions: t
                    } = e, n = t.filter(e => e.descriptions.length > 0);
                    return 0 === n.length ? null : (0, i.jsxs)("div", {
                        className: T.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("ul", {
                            className: T.classificationActionsTakenList,
                            children: t.map(e => (0, i.jsx)(m, {
                                action: e
                            }, e.id))
                        })]
                    })
                },
                m = e => {
                    let {
                        action: t
                    } = e;
                    return (0, i.jsx)(i.Fragment, {
                        children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
                            className: T.classificationActionsTakenRow,
                            children: (0, i.jsx)(s.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children: e
                            })
                        }, t))
                    })
                },
                v = e => {
                    let {
                        classificationTypeText: t,
                        policyExplainerLink: n
                    } = e;
                    return (0, i.jsxs)(s.Anchor, {
                        href: n,
                        className: T.classificationPolicyCard,
                        useDefaultUnderlineStyles: !1,
                        children: [(0, i.jsx)("div", {
                            className: T.classificationPolicyCardIcon,
                            children: (0, i.jsx)(a.ShieldIcon, {
                                width: 24,
                                height: 24,
                                color: r.default.colors.FOCUS_PRIMARY
                            })
                        }), (0, i.jsx)("div", {
                            className: T.classificationPolicyDescriptionContainer,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: t
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: T.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(o.ChevronSmallRightIcon, {
                                width: 24,
                                height: 24,
                                color: r.default.colors.INTERACTIVE_NORMAL
                            })
                        })]
                    })
                },
                A = () => (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
                }),
                N = e => (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                        letUsKnowHook: (t, n) => (0, i.jsx)(s.Anchor, {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        }, n)
                    })
                }),
                L = e => (0, i.jsx)("div", {
                    className: T.classificationLetUsKnowContainer,
                    children: e.hasBeenAppealed ? (0, i.jsx)(A, {}) : (0, i.jsx)(N, {
                        appealLink: h.SafetyHubLinks.APPEALS_LINK,
                        letUsKnowClick: e.onLetUsKnowClick,
                        isAppealEligible: e.isAppealEligible
                    })
                }),
                U = e => {
                    let {
                        tosLink: t,
                        communityGuidelinesLink: n,
                        classificationTypeText: l,
                        policyExplainerLink: r,
                        appealComponent: o
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: T.classificationActionExplanationContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(s.Text, {
                            className: T.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: t,
                                communityGuidelinesLink: n
                            })
                        }), (0, i.jsx)(v, {
                            classificationTypeText: l,
                            policyExplainerLink: r
                        }), o]
                    })
                };
            var y = e => {
                var t, n;
                let {
                    classificationId: r,
                    source: o,
                    onError: a
                } = e, {
                    classification: s,
                    classificationRequestState: c,
                    isAppealEligible: I
                } = (0, E.useSafetyHubClassification)(r), m = (0, f.useSafetyHubAccountStanding)(), v = null != s && null != s.flagged_content && s.flagged_content.length > 0;
                return (l.useEffect(() => {
                    u.default.track(S.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: h.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: m.state,
                        classification_ids: [Number(r)],
                        source: o,
                        is_violative_content_shown: v
                    })
                }, []), null == s && c === d.ClassificationRequestState.FAILED) ? (a(), null) : null == s ? null : (0, i.jsxs)("div", {
                    className: T.classificationContainer,
                    children: [(0, i.jsx)(C, {
                        classificationTypeText: s.description,
                        guildName: null == s ? void 0 : null === (t = s.guild_metadata) || void 0 === t ? void 0 : t.guild_name
                    }), v && null == s.guild_metadata && (0, i.jsx)(p.ClassificationEvidence, {
                        flaggedContent: null !== (n = s.flagged_content) && void 0 !== n ? n : []
                    }), (0, i.jsx)(g, {
                        actions: s.actions
                    }), (0, i.jsx)(U, {
                        classificationTypeText: s.description,
                        tosLink: h.SafetyHubLinks.TOS_LINK,
                        communityGuidelinesLink: h.SafetyHubLinks.COMMUNITY_GUIDELINES,
                        policyExplainerLink: s.explainer_link,
                        appealComponent: (0, i.jsx)(L, {
                            hasBeenAppealed: null != s.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(S.AnalyticEvents.SAFETY_HUB_ACTION, {
                                    action: h.SafetyHubAnalyticsActions.ClickLetUsKnow,
                                    account_standing: m.state,
                                    classification_ids: [Number(r)],
                                    source: o,
                                    is_violative_content_shown: v
                                }), I && _.default.open(r)
                            },
                            isAppealEligible: I
                        })
                    })]
                })
            }