(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33533"], {
        60266: function(t, n, e) {
            t.exports = function(t, n, e, i) {
                for (var a = -1, s = null == t ? 0 : t.length; ++a < s;) {
                    var o = t[a];
                    n(i, o, e(o), t)
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
                o = e("725502");
            t.exports = function(t, n) {
                return function(e, c) {
                    var l = o(e) ? i : a,
                        r = n ? n() : {};
                    return l(e, t, s(c, 2), r)
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
                    return o
                },
                getSafetyHubDataForClassification: function() {
                    return c
                }
            });
            var i = e("872717"),
                a = e("913144"),
                s = e("49111");
            async function o() {
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
            async function c(t) {
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
                    } = e, o = i.find(n => n.id === t);
                    null != o ? a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                        classification: o,
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
            var i, a, s, o, c, l, r, S;
            e.r(n), e.d(n, {
                ActionType: function() {
                    return a
                },
                AccountStandingState: function() {
                    return s
                },
                ClassificationRequestState: function() {
                    return o
                }
            }), (c = i || (i = {}))[c.UNSPECIFIED = 0] = "UNSPECIFIED", c[c.UNKNOWN = 1] = "UNKNOWN", c[c.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", c[c.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", c[c.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", c[c.HATE_SPEECH = 220] = "HATE_SPEECH", c[c.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", c[c.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", c[c.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", c[c.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", c[c.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", c[c.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (l = a || (a = {}))[l.BAN = 0] = "BAN", l[l.TEMP_BAN = 1] = "TEMP_BAN", l[l.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", l[l.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", l[l.USER_WARNING = 4] = "USER_WARNING", l[l.USER_SPAMMER = 5] = "USER_SPAMMER", l[l.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", l[l.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", l[l.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", l[l.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", l[l.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", l[l.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", l[l.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", l[l.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", l[l.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", l[l.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", l[l.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (r = s || (s = {}))[r.ALL_GOOD = 100] = "ALL_GOOD", r[r.LIMITED = 200] = "LIMITED", r[r.VERY_LIMITED = 300] = "VERY_LIMITED", r[r.AT_RISK = 400] = "AT_RISK", r[r.SUSPENDED = 500] = "SUSPENDED", (S = o || (o = {}))[S.PENDING = 0] = "PENDING", S[S.SUCCESS = 1] = "SUCCESS", S[S.FAILED = 2] = "FAILED"
        },
        646356: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return I
                }
            });
            var i = e("816494"),
                a = e.n(i),
                s = e("446674"),
                o = e("913144"),
                c = e("908539");
            let l = {},
                r = {},
                S = {
                    state: c.AccountStandingState.ALL_GOOD
                },
                A = !1,
                E = !1,
                u = null;
            class _ extends s.default.Store {
                isFetching() {
                    return A
                }
                getClassifications() {
                    return Object.values(l)
                }
                getClassification(t) {
                    return l[t]
                }
                getAccountStanding() {
                    return S
                }
                getFetchError() {
                    return u
                }
                isInitialized() {
                    return E
                }
                getClassificationRequestState(t) {
                    return r[t]
                }
            }
            _.displayName = "SafetyHubStore";
            var I = new _(o.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    A = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: n,
                        accountStanding: e
                    } = t;
                    l = a(n, "id"), S = e, A = !1, E = !0, u = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: n
                    } = t;
                    A = !1, E = !1, u = n
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
                    r[t.classificationId] = c.ClassificationRequestState.PENDING, A = !0
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
                    let {
                        classification: n,
                        accountStanding: e
                    } = t;
                    l[n.id] = n, r[n.id] = c.ClassificationRequestState.SUCCESS, S = e, A = !1, u = null
                },
                SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
                    let {
                        error: n,
                        classificationId: e
                    } = t;
                    A = !1, u = n, r[e] = c.ClassificationRequestState.FAILED
                },
                LOGOUT: function() {
                    A = !1, l = {}, S = {
                        state: c.AccountStandingState.ALL_GOOD
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
                    return S
                },
                useExpiredSafetyHubClassifications: function() {
                    return A
                }
            });
            var i = e("884691"),
                a = e("446674"),
                s = e("299039"),
                o = e("781324"),
                c = e("646356");

            function l() {
                let t = (0, a.useStateFromStoresArray)([c.default], () => c.default.getClassifications());
                return t.sort((t, n) => s.default.extractTimestamp(n.id) - s.default.extractTimestamp(t.id))
            }

            function r(t) {
                let n = (0, a.useStateFromStores)([c.default], () => c.default.getClassification(t)),
                    e = (0, a.useStateFromStores)([c.default], () => c.default.getClassificationRequestState(t));
                return i.useEffect(() => {
                    void 0 === n && null == e && o.getSafetyHubDataForClassification(t)
                }, [t, n, e]), {
                    classification: n,
                    classificationRequestState: e
                }
            }

            function S() {
                let t = l(),
                    n = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > n)
            }

            function A() {
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
                    return h
                }
            });
            var i = e("37983"),
                a = e("884691"),
                s = e("669491"),
                o = e("167338"),
                c = e("426383"),
                l = e("165984"),
                r = e("503420"),
                S = e("803027"),
                A = e("877585"),
                E = e("47693"),
                u = e("779807"),
                _ = e("77078"),
                I = e("599110"),
                T = e("908539"),
                d = e("132206"),
                C = e("698609"),
                f = e("170213"),
                N = e("49111"),
                L = e("782340"),
                R = e("190466");
            let U = {
                    [T.ActionType.BAN]: [l.CircleExclamationPointIcon, s.default.colors.STATUS_DANGER],
                    [T.ActionType.GLOBAL_QUARANTINE]: [u.WarningIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.DISABLE_SUSPICIOUS_ACTIVITY]: [u.WarningIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.LIMITED_ACCESS]: [r.ClockIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.REQUIRE_VERIFICATION]: [u.WarningIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.TEMP_BAN]: [r.ClockIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.USER_MESSAGE_REMOVAL]: [E.TrashIcon, s.default.colors.STATUS_DANGER],
                    [T.ActionType.USER_SPAMMER]: [u.WarningIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.USER_USERNAME_MANGLE]: [S.CloseSmallIcon, s.default.colors.STATUS_WARNING],
                    [T.ActionType.USER_WARNING]: [o.ChatAlertIcon, s.default.colors.STATUS_WARNING]
                },
                O = u.WarningIcon,
                F = t => {
                    let {
                        classificationTypeText: n
                    } = t;
                    return (0, i.jsx)("div", {
                        className: R.classificationHeader,
                        children: (0, i.jsx)(_.Heading, {
                            variant: "heading-xl/normal",
                            children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: n,
                                classificationHook: (t, n) => (0, i.jsx)("strong", {
                                    children: t
                                }, n)
                            })
                        })
                    })
                },
                x = t => {
                    let {
                        actions: n
                    } = t, e = n.filter(t => t.descriptions.length > 0);
                    return 0 === e.length ? null : (0, i.jsxs)("div", {
                        className: R.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(_.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: R.classificationActionsTakenCard,
                            children: n.map(t => (0, i.jsx)(p, {
                                action: t
                            }, t.id))
                        })]
                    })
                },
                p = t => {
                    let {
                        action: n
                    } = t, [e, a] = n.action_type in U ? U[n.action_type] : [O, s.default.colors.STATUS_WARNING];
                    return (0, i.jsx)(i.Fragment, {
                        children: n.descriptions.map((t, n) => (0, i.jsxs)("div", {
                            className: R.classificationActionsTakenRow,
                            children: [(0, i.jsx)("div", {
                                className: R.classificationActionsTakenRowIcon,
                                children: (0, i.jsx)(e, {
                                    width: 15,
                                    height: 15,
                                    color: a,
                                    style: {
                                        marginLeft: 1
                                    }
                                })
                            }), (0, i.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: t
                            })]
                        }, n))
                    })
                },
                D = t => {
                    let {
                        classificationTypeText: n,
                        policyExplainerLink: e
                    } = t;
                    return (0, i.jsxs)(_.Anchor, {
                        href: e,
                        className: R.classificationPolicyCard,
                        children: [(0, i.jsx)("div", {
                            className: R.classificationPolicyCardIcon,
                            children: (0, i.jsx)(A.ShieldIcon, {
                                width: 32,
                                height: 32,
                                color: s.default.colors.FOCUS_PRIMARY
                            })
                        }), (0, i.jsxs)("div", {
                            className: R.classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(_.Text, {
                                variant: "text-md/bold",
                                children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: n
                                })
                            }), (0, i.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: R.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(c.ChevronLargeRightIcon, {
                                width: 24,
                                height: 24,
                                color: s.default.colors.INTERACTIVE_NORMAL
                            })
                        })]
                    })
                },
                H = t => {
                    let {
                        tosLink: n,
                        communityGuidelinesLink: e,
                        appealLink: a,
                        classificationTypeText: s,
                        policyExplainerLink: o,
                        letUsKnowClick: c
                    } = t;
                    return (0, i.jsxs)("div", {
                        className: R.classificationActionExplanationContainer,
                        children: [(0, i.jsx)(_.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
                        }), (0, i.jsx)(_.Text, {
                            className: R.guidelinesExplanation,
                            variant: "text-sm/normal",
                            children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
                                tosLink: n,
                                communityGuidelinesLink: e
                            })
                        }), (0, i.jsx)(D, {
                            classificationTypeText: s,
                            policyExplainerLink: o
                        }), (0, i.jsx)("div", {
                            className: R.classificationLetUsKnowContainer,
                            children: (0, i.jsx)(_.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: L.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                                    letUsKnowHook: (t, n) => (0, i.jsx)(_.Anchor, {
                                        href: a,
                                        onClick: c,
                                        children: t
                                    }, n)
                                })
                            })
                        })]
                    })
                },
                m = t => (0, i.jsxs)("div", {
                    className: R.classificationContainer,
                    children: [(0, i.jsx)(F, {
                        classificationTypeText: t.classificationTypeText
                    }), (0, i.jsx)(x, {
                        actions: t.actions
                    }), (0, i.jsx)(H, {
                        appealLink: t.appealLink,
                        communityGuidelinesLink: t.communityGuidelinesLink,
                        tosLink: t.tosLink,
                        classificationTypeText: t.classificationTypeText,
                        policyExplainerLink: t.policyExplainerLink,
                        letUsKnowClick: t.letUsKnowClick
                    })]
                });
            var h = t => {
                let {
                    classificationId: n,
                    source: e,
                    onError: s
                } = t, {
                    classification: o,
                    classificationRequestState: c
                } = (0, C.useSafetyHubClassification)(n), l = (0, d.useSafetyHubAccountStanding)();
                return (a.useEffect(() => {
                    I.default.track(N.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: f.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: l.state,
                        classification_ids: [Number(n)],
                        source: e
                    })
                }, []), null == o && c === T.ClassificationRequestState.FAILED) ? (s(), null) : null == o ? null : (0, i.jsx)(m, {
                    actions: o.actions,
                    classificationTypeText: o.description,
                    tosLink: f.SafetyHubLinks.TOS_LINK,
                    communityGuidelinesLink: f.SafetyHubLinks.COMMUNITY_GUIDELINES,
                    appealLink: f.SafetyHubLinks.APPEALS_LINK,
                    policyExplainerLink: o.explainer_link,
                    letUsKnowClick: () => {
                        I.default.track(N.AnalyticEvents.SAFETY_HUB_ACTION, {
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
                    return u
                }
            });
            var i = e("37983");
            e("884691");
            var a = e("77078"),
                s = e("79112"),
                o = e("792105"),
                c = e("573240"),
                l = e("170213"),
                r = e("49111"),
                S = e("782340"),
                A = e("581935"),
                E = e("49155"),
                u = t => {
                    let {
                        transitionState: n,
                        onClose: e,
                        classificationId: u,
                        source: _
                    } = t, I = (0, o.default)(), T = () => {
                        e(), s.default.open(r.UserSettingsSections.PRIVACY_AND_SAFETY, l.SafetyHubView.ACCOUNT_STANDING)
                    };
                    return (0, i.jsxs)(a.ModalRoot, {
                        className: A.modalRoot,
                        transitionState: n,
                        children: [(0, i.jsxs)("div", {
                            className: A.modalHeader,
                            children: [(0, i.jsx)("img", {
                                className: A.image,
                                src: E,
                                alt: ""
                            }), (0, i.jsx)(a.ModalCloseButton, {
                                className: A.modalClose,
                                onClick: e
                            })]
                        }), (0, i.jsx)(a.ModalContent, {
                            className: A.modalContent,
                            children: I ? (0, i.jsx)(a.Spinner, {}) : (0, i.jsx)(c.default, {
                                classificationId: u,
                                source: _,
                                onError: T
                            })
                        }), (0, i.jsx)(a.ModalFooter, {
                            children: (0, i.jsx)(a.Button, {
                                className: A.button,
                                type: "button",
                                color: a.Button.Colors.BRAND,
                                onClick: T,
                                children: S.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                            })
                        })]
                    })
                }
        }
    }
]);