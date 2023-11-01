(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33533"], {
        60266: function(t, n, e) {
            t.exports = function(t, n, e, i) {
                for (var a = -1, s = null == t ? 0 : t.length; ++a < s;) {
                    var c = t[a];
                    n(i, c, e(c), t)
                }
                return i
            }
        },
        581628: function(t, n, e) {
            var i = e("978603");
            t.exports = function(t, n, e, a) {
                return i(t, function(t, i, s) {
                    n(a, t, e(t), s)
                }), a
            }
        },
        278296: function(t, n, e) {
            var i = e("60266"),
                a = e("581628"),
                s = e("698273"),
                c = e("725502");
            t.exports = function(t, n) {
                return function(e, o) {
                    var l = c(e) ? i : a,
                        r = n ? n() : {};
                    return l(e, t, s(o, 2), r)
                }
            }
        },
        816494: function(t, n, e) {
            var i = e("766665"),
                a = e("278296")(function(t, n, e) {
                    i(t, e, n)
                });
            t.exports = a
        },
        49155: function(t, n, e) {
            "use strict";
            t.exports = e.p + "495fd0002d30e7c7e4f5.png"
        },
        781324: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                getSafetyHubData: function() {
                    return c
                },
                getSafetyHubDataForClassification: function() {
                    return o
                }
            });
            var i = e("872717"),
                a = e("913144"),
                s = e("49111");
            async function c() {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: n
                    } = t, {
                        classifications: e,
                        account_standing: i
                    } = n;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: e,
                        accountStanding: i
                    })
                }).catch(t => {
                    var n, e;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (e = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Unknown error"
                    })
                })
            }
            async function o(t) {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
                    classificationId: t
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(n => {
                    let {
                        body: e
                    } = n, {
                        classifications: i,
                        account_standing: s
                    } = e, c = i.find(n => n.id === t);
                    null != c ? a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: c,
                        accountStanding: s
                    }) : a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: "Classification not found.",
                        classificationId: t
                    })
                }).catch(n => {
                    var e, i;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                        error: null !== (i = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.message) && void 0 !== i ? i : "Unknown error",
                        classificationId: t
                    })
                })
            }
        },
        908539: function(t, n, e) {
            "use strict";
            var i, a, s, c, o, l, r, E;
            e.r(n), e.d(n, {
                ActionType: function() {
                    return a
                },
                AccountStandingState: function() {
                    return s
                },
                ClassificationRequestState: function() {
                    return c
                }
            }), (o = i || (i = {}))[o.UNSPECIFIED = 0] = "UNSPECIFIED", o[o.UNKNOWN = 1] = "UNKNOWN", o[o.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", o[o.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", o[o.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", o[o.HATE_SPEECH = 220] = "HATE_SPEECH", o[o.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", o[o.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", o[o.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", o[o.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", o[o.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", o[o.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (l = a || (a = {}))[l.BAN = 0] = "BAN", l[l.TEMP_BAN = 1] = "TEMP_BAN", l[l.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", l[l.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", l[l.USER_WARNING = 4] = "USER_WARNING", l[l.USER_SPAMMER = 5] = "USER_SPAMMER", l[l.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", l[l.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", l[l.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", l[l.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", l[l.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", l[l.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", l[l.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", l[l.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", l[l.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", l[l.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", l[l.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (r = s || (s = {}))[r.ALL_GOOD = 100] = "ALL_GOOD", r[r.LIMITED = 200] = "LIMITED", r[r.VERY_LIMITED = 300] = "VERY_LIMITED", r[r.AT_RISK = 400] = "AT_RISK", r[r.SUSPENDED = 500] = "SUSPENDED", (E = c || (c = {}))[E.PENDING = 0] = "PENDING", E[E.SUCCESS = 1] = "SUCCESS", E[E.FAILED = 2] = "FAILED"
        },
        646356: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return _
                }
            });
            var i = e("816494"),
                a = e.n(i),
                s = e("446674"),
                c = e("913144"),
                o = e("908539");
            let l = {},
                r = {},
                E = {
                    state: o.AccountStandingState.ALL_GOOD
                },
                S = !1,
                u = !1,
                A = null;
            class I extends s.default.Store {
                isFetching() {
                    return S
                }
                getClassifications() {
                    return Object.values(l)
                }
                getClassification(t) {
                    return l[t]
                }
                getAccountStanding() {
                    return E
                }
                getFetchError() {
                    return A
                }
                isInitialized() {
                    return u
                }
                getClassificationRequestState(t) {
                    return r[t]
                }
            }
            I.displayName = "SafetyHubStore";
            var _ = new I(c.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    S = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: n,
                        accountStanding: e
                    } = t;
                    l = a(n, "id"), E = e, S = !1, u = !0, A = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: n
                    } = t;
                    S = !1, u = !1, A = n
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    r[t.classificationId] = o.ClassificationRequestState.PENDING, S = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: n,
                        accountStanding: e
                    } = t;
                    l[n.id] = n, r[n.id] = o.ClassificationRequestState.SUCCESS, E = e, S = !1, A = null
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: n,
                        classificationId: e
                    } = t;
                    S = !1, A = n, r[e] = o.ClassificationRequestState.FAILED
                },
                LOGOUT: function() {
                    S = !1, l = {}, E = {
                        state: o.AccountStandingState.ALL_GOOD
                    }
                }
            })
        },
        132206: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                useSafetyHubAccountStanding: function() {
                    return s
                }
            });
            var i = e("446674"),
                a = e("646356");

            function s() {
                return (0, i.useStateFromStores)([a.default], () => a.default.getAccountStanding())
            }
        },
        698609: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                useSafetyHubClassification: function() {
                    return r
                },
                useActiveSafetyHubClassifications: function() {
                    return E
                },
                useExpiredSafetyHubClassifications: function() {
                    return S
                }
            });
            var i = e("884691"),
                a = e("446674"),
                s = e("299039"),
                c = e("781324"),
                o = e("646356");

            function l() {
                let t = (0, a.useStateFromStoresArray)([o.default], () => o.default.getClassifications());
                return t.sort((t, n) => s.default.extractTimestamp(n.id) - s.default.extractTimestamp(t.id))
            }

            function r(t) {
                let n = (0, a.useStateFromStores)([o.default], () => o.default.getClassification(t)),
                    e = (0, a.useStateFromStores)([o.default], () => o.default.getClassificationRequestState(t));
                return i.useEffect(() => {
                    void 0 === n && null == e && c.getSafetyHubDataForClassification(t)
                }, [t, n, e]), {
                    classification: n,
                    classificationRequestState: e
                }
            }

            function E() {
                let t = l(),
                    n = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > n)
            }

            function S() {
                let t = l(),
                    n = new Date;
                return t.filter(t => new Date(t.max_expiration_time) <= n)
            }
        },
        792105: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return s
                }
            });
            var i = e("446674"),
                a = e("646356");

            function s() {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.isFetching());
                return t
            }
        },
        573240: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return m
                }
            });
            var i = e("37983"),
                a = e("884691"),
                s = e("77078"),
                c = e("104359"),
                o = e("4845"),
                l = e("491401"),
                r = e("945330"),
                E = e("975743"),
                S = e("772280"),
                u = e("228220"),
                A = e("364719"),
                I = e("599110"),
                _ = e("908539"),
                d = e("132206"),
                T = e("698609"),
                f = e("170213"),
                C = e("49111"),
                N = e("782340"),
                L = e("190466");
            let U = {
                    [_.ActionType.BAN]: [c.default, L.redIcon],
                    [_.ActionType.GLOBAL_QUARANTINE]: [A.default, L.warningIcon],
                    [_.ActionType.DISABLE_SUSPICIOUS_ACTIVITY]: [A.default, L.warningIcon],
                    [_.ActionType.LIMITED_ACCESS]: [l.default, L.warningIcon],
                    [_.ActionType.REQUIRE_VERIFICATION]: [A.default, L.warningIcon],
                    [_.ActionType.TEMP_BAN]: [l.default, L.warningIcon],
                    [_.ActionType.USER_MESSAGE_REMOVAL]: [u.default, L.redIcon],
                    [_.ActionType.USER_SPAMMER]: [A.default, L.warningIcon],
                    [_.ActionType.USER_USERNAME_MANGLE]: [r.default, L.warningIcon],
                    [_.ActionType.USER_WARNING]: [o.default, L.warningIcon]
                },
                O = A.default,
                R = t => {
                    let {
                        classificationTypeText: n
                    } = t;
                    return (0, i.jsx)("div", {
                        className: L.classificationHeader,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/normal",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: n,
                                classificationHook: (t, n) => (0, i.jsx)("strong", {
                                    children: t
                                }, n)
                            })
                        })
                    })
                },
                F = t => {
                    let {
                        actions: n
                    } = t, e = n.filter(t => t.descriptions.length > 0);
                    return 0 === e.length ? null : (0, i.jsxs)("div", {
                        className: L.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: L.classificationActionsTakenCard,
                            children: n.map(t => (0, i.jsx)(p, {
                                action: t
                            }, t.id))
                        })]
                    })
                },
                p = t => {
                    let {
                        action: n
                    } = t, [e, a] = n.action_type in U ? U[n.action_type] : [O, L.warningIcon];
                    return (0, i.jsx)(i.Fragment, {
                        children: n.descriptions.map((t, n) => (0, i.jsxs)("div", {
                            className: L.classificationActionsTakenRow,
                            children: [(0, i.jsx)("div", {
                                className: L.classificationActionsTakenRowIcon,
                                children: (0, i.jsx)(e, {
                                    className: a,
                                    width: 15,
                                    height: 15
                                })
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: t
                            })]
                        }, n))
                    })
                },
                x = t => {
                    let {
                        classificationTypeText: n,
                        policyExplainerLink: e
                    } = t;
                    return (0, i.jsxs)(s.Anchor, {
                        href: e,
                        className: L.classificationPolicyCard,
                        children: [(0, i.jsx)("div", {
                            className: L.classificationPolicyCardIcon,
                            children: (0, i.jsx)(E.default, {
                                className: L.shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, i.jsxs)("div", {
                            className: L.classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(s.Text, {
                                variant: "text-md/bold",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: n
                                })
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: L.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(S.default, {
                                className: L.arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                D = t => {
                    let {
                        tosLink: n,
                        communityGuidelinesLink: e,
                        appealLink: a,
                        classificationTypeText: c,
                        policyExplainerLink: o,
                        letUsKnowClick: l
                    } = t;
                    return (0, i.jsxs)("div", {
                        className: L.classificationActionExplanationContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(s.Text, {
                            className: L.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: n,
                                communityGuidelinesLink: e
                            })
                        }), (0, i.jsx)(x, {
                            classificationTypeText: c,
                            policyExplainerLink: o
                        }), (0, i.jsx)("div", {
                            className: L.classificationLetUsKnowContainer,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                                    letUsKnowHook: (t, n) => (0, i.jsx)(s.Anchor, {
                                        href: a,
                                        onClick: l,
                                        children: t
                                    }, n)
                                })
                            })
                        })]
                    })
                },
                H = t => (0, i.jsxs)("div", {
                    className: L.classificationContainer,
                    children: [(0, i.jsx)(R, {
                        classificationTypeText: t.classificationTypeText
                    }), (0, i.jsx)(F, {
                        actions: t.actions
                    }), (0, i.jsx)(D, {
                        appealLink: t.appealLink,
                        communityGuidelinesLink: t.communityGuidelinesLink,
                        tosLink: t.tosLink,
                        classificationTypeText: t.classificationTypeText,
                        policyExplainerLink: t.policyExplainerLink,
                        letUsKnowClick: t.letUsKnowClick
                    })]
                });
            var m = t => {
                let {
                    classificationId: n,
                    source: e,
                    onError: s
                } = t, {
                    classification: c,
                    classificationRequestState: o
                } = (0, T.useSafetyHubClassification)(n), l = (0, d.useSafetyHubAccountStanding)();
                return (a.useEffect(() => {
                    I.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: f.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: l.state,
                        classification_ids: [Number(n)],
                        source: e
                    })
                }, []), null == c && o === _.ClassificationRequestState.FAILED) ? (s(), null) : null == c ? null : (0, i.jsx)(H, {
                    actions: c.actions,
                    classificationTypeText: c.description,
                    tosLink: f.SafetyHubLinks.TOS_LINK,
                    communityGuidelinesLink: f.SafetyHubLinks.COMMUNITY_GUIDELINES,
                    appealLink: f.SafetyHubLinks.APPEALS_LINK,
                    policyExplainerLink: c.explainer_link,
                    letUsKnowClick: () => {
                        I.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: f.SafetyHubAnalyticsActions.ClickLetUsKnow,
                            account_standing: l.state,
                            classification_ids: [Number(n)],
                            source: e
                        })
                    }
                })
            }
        },
        825138: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return A
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("77078"),
                s = e("79112"),
                c = e("792105"),
                o = e("573240"),
                l = e("170213"),
                r = e("49111"),
                E = e("782340"),
                S = e("581935"),
                u = e("49155"),
                A = t => {
                    let {
                        transitionState: n,
                        onClose: e,
                        classificationId: A,
                        source: I
                    } = t, _ = (0, c.default)(), d = () => {
                        e(), s.default.open(r.UserSettingsSections.PRIVACY_AND_SAFETY, l.SafetyHubView.ACCOUNT_STANDING)
                    };
                    return (0, i.jsxs)(a.ModalRoot, {
                        className: S.modalRoot,
                        transitionState: n,
                        children: [(0, i.jsxs)("div", {
                            className: S.modalHeader,
                            children: [(0, i.jsx)("img", {
                                className: S.image,
                                src: u,
                                alt: ""
                            }), (0, i.jsx)(a.ModalCloseButton, {
                                className: S.modalClose,
                                onClick: e
                            })]
                        }), (0, i.jsx)(a.ModalContent, {
                            className: S.modalContent,
                            children: _ ? (0, i.jsx)(a.Spinner, {}) : (0, i.jsx)(o.default, {
                                classificationId: A,
                                source: I,
                                onError: d
                            })
                        }), (0, i.jsx)(a.ModalFooter, {
                            children: (0, i.jsx)(a.Button, {
                                className: S.button,
                                type: "button",
                                color: a.Button.Colors.BRAND,
                                onClick: d,
                                children: E.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                            })
                        })]
                    })
                }
        }
    }
]);