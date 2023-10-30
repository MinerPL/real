(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33533"], {
        60266: function(t, e, n) {
            t.exports = function(t, e, n, i) {
                for (var a = -1, s = null == t ? 0 : t.length; ++a < s;) {
                    var c = t[a];
                    e(i, c, n(c), t)
                }
                return i
            }
        },
        581628: function(t, e, n) {
            var i = n("978603");
            t.exports = function(t, e, n, a) {
                return i(t, function(t, i, s) {
                    e(a, t, n(t), s)
                }), a
            }
        },
        278296: function(t, e, n) {
            var i = n("60266"),
                a = n("581628"),
                s = n("698273"),
                c = n("725502");
            t.exports = function(t, e) {
                return function(n, r) {
                    var l = c(n) ? i : a,
                        o = e ? e() : {};
                    return l(n, t, s(r, 2), o)
                }
            }
        },
        816494: function(t, e, n) {
            var i = n("766665"),
                a = n("278296")(function(t, e, n) {
                    i(t, n, e)
                });
            t.exports = a
        },
        49155: function(t, e, n) {
            "use strict";
            t.exports = n.p + "495fd0002d30e7c7e4f5.png"
        },
        167338: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatAlertIcon: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let c = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: c = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...l
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M12.032 21.505c-.05.27-.269.495-.544.495H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .542-.043 1.073-.126 1.591-.019.117-.17.142-.229.04-1.163-2.027-4.127-2.027-5.29 0l-3.96 6.897a3.071 3.071 0 0 0-.363.977Zm6.057-6.878c.395-.688 1.427-.688 1.822 0l3.959 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.465 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        781324: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getSafetyHubData: function() {
                    return c
                }
            });
            var i = n("872717"),
                a = n("913144"),
                s = n("49111");
            async function c() {
                a.default.dispatch({
                    type: "SAFETY_HUB_FETCH_START"
                }), await i.default.get({
                    url: s.Endpoints.SAFETY_HUB
                }).then(t => {
                    let {
                        body: e
                    } = t, {
                        classifications: n,
                        account_standing: i
                    } = e;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_SUCCESS",
                        classifications: n,
                        accountStanding: i
                    })
                }).catch(t => {
                    var e, n;
                    a.default.dispatch({
                        type: "SAFETY_HUB_FETCH_FAILURE",
                        error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : "Unknown error"
                    })
                })
            }
        },
        908539: function(t, e, n) {
            "use strict";
            var i, a, s, c, r, l;
            n.r(e), n.d(e, {
                ActionType: function() {
                    return a
                },
                AccountStandingState: function() {
                    return s
                }
            }), (c = i || (i = {}))[c.UNSPECIFIED = 0] = "UNSPECIFIED", c[c.UNKNOWN = 1] = "UNKNOWN", c[c.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", c[c.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", c[c.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", c[c.HATE_SPEECH = 220] = "HATE_SPEECH", c[c.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", c[c.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", c[c.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", c[c.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", c[c.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", c[c.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (r = a || (a = {}))[r.BAN = 0] = "BAN", r[r.TEMP_BAN = 1] = "TEMP_BAN", r[r.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", r[r.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", r[r.USER_WARNING = 4] = "USER_WARNING", r[r.USER_SPAMMER = 5] = "USER_SPAMMER", r[r.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", r[r.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", r[r.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", r[r.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", r[r.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", r[r.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", r[r.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", r[r.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", r[r.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", r[r.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", r[r.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (l = s || (s = {}))[l.ALL_GOOD = 100] = "ALL_GOOD", l[l.LIMITED = 200] = "LIMITED", l[l.VERY_LIMITED = 300] = "VERY_LIMITED", l[l.AT_RISK = 400] = "AT_RISK", l[l.SUSPENDED = 500] = "SUSPENDED"
        },
        646356: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                }
            });
            var i = n("816494"),
                a = n.n(i),
                s = n("446674"),
                c = n("913144"),
                r = n("908539");
            let l = {},
                o = {
                    state: r.AccountStandingState.ALL_GOOD
                },
                u = !1,
                E = !1,
                A = null;
            class d extends s.default.Store {
                isFetching() {
                    return u
                }
                getClassifications() {
                    return Object.values(l)
                }
                getClassification(t) {
                    return l[t]
                }
                getAccountStanding() {
                    return o
                }
                getFetchError() {
                    return A
                }
                isInitialized() {
                    return E
                }
            }
            d.displayName = "SafetyHubStore";
            var S = new d(c.default, {
                SAFETY_HUB_FETCH_START: function(t) {
                    u = !0
                },
                SAFETY_HUB_FETCH_SUCCESS: function(t) {
                    let {
                        classifications: e,
                        accountStanding: n
                    } = t;
                    l = a(e, "id"), o = n, u = !1, E = !0, A = null
                },
                SAFETY_HUB_FETCH_FAILURE: function(t) {
                    let {
                        error: e
                    } = t;
                    u = !1, E = !1, A = e
                },
                LOGOUT: function() {
                    u = !1, l = {}, o = {
                        state: r.AccountStandingState.ALL_GOOD
                    }
                }
            })
        },
        132206: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSafetyHubAccountStanding: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("646356");

            function s() {
                return (0, i.useStateFromStores)([a.default], () => a.default.getAccountStanding())
            }
        },
        698609: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSafetyHubClassification: function() {
                    return o
                },
                useActiveSafetyHubClassifications: function() {
                    return u
                },
                useExpiredSafetyHubClassifications: function() {
                    return E
                }
            });
            var i = n("884691"),
                a = n("446674"),
                s = n("299039"),
                c = n("781324"),
                r = n("646356");

            function l() {
                let t = (0, a.useStateFromStoresArray)([r.default], () => r.default.getClassifications());
                return t.sort((t, e) => s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id))
            }

            function o(t) {
                let [e, n] = i.useState(!1), s = (0, a.useStateFromStores)([r.default], () => r.default.getClassification(t));
                return i.useEffect(() => {
                    void 0 === s && !e && (n(!0), c.getSafetyHubData())
                }, [t, s, e]), s
            }

            function u() {
                let t = l(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) > e)
            }

            function E() {
                let t = l(),
                    e = new Date;
                return t.filter(t => new Date(t.max_expiration_time) <= e)
            }
        },
        422671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSafetyHubInitialized: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("646356");

            function s() {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.isInitialized());
                return t
            }
        },
        792105: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("646356");

            function s() {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.isFetching());
                return t
            }
        },
        573240: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return g
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                c = n("104359"),
                r = n("4845"),
                l = n("491401"),
                o = n("945330"),
                u = n("975743"),
                E = n("772280"),
                A = n("228220"),
                d = n("364719"),
                S = n("599110"),
                f = n("908539"),
                I = n("132206"),
                _ = n("698609"),
                T = n("170213"),
                C = n("49111"),
                N = n("782340"),
                L = n("190466");
            let x = {
                    [f.ActionType.BAN]: [c.default, L.redIcon],
                    [f.ActionType.GLOBAL_QUARANTINE]: [d.default, L.warningIcon],
                    [f.ActionType.DISABLE_SUSPICIOUS_ACTIVITY]: [d.default, L.warningIcon],
                    [f.ActionType.LIMITED_ACCESS]: [l.default, L.warningIcon],
                    [f.ActionType.REQUIRE_VERIFICATION]: [d.default, L.warningIcon],
                    [f.ActionType.TEMP_BAN]: [l.default, L.warningIcon],
                    [f.ActionType.USER_MESSAGE_REMOVAL]: [A.default, L.redIcon],
                    [f.ActionType.USER_SPAMMER]: [d.default, L.warningIcon],
                    [f.ActionType.USER_USERNAME_MANGLE]: [o.default, L.warningIcon],
                    [f.ActionType.USER_WARNING]: [r.default, L.warningIcon]
                },
                O = d.default,
                h = t => {
                    let {
                        classificationTypeText: e
                    } = t;
                    return (0, i.jsx)("div", {
                        className: L.classificationHeader,
                        children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xl/normal",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
                                classification_type: e,
                                classificationHook: (t, e) => (0, i.jsx)("strong", {
                                    children: t
                                }, e)
                            })
                        })
                    })
                },
                p = t => {
                    let {
                        actions: e
                    } = t, n = e.filter(t => t.descriptions.length > 0);
                    return 0 === n.length ? null : (0, i.jsxs)("div", {
                        className: L.classificationActionsTakenContainer,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "text-muted",
                            children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
                        }), (0, i.jsx)("div", {
                            className: L.classificationActionsTakenCard,
                            children: e.map(t => (0, i.jsx)(R, {
                                action: t
                            }, t.id))
                        })]
                    })
                },
                R = t => {
                    let {
                        action: e
                    } = t, [n, a] = e.action_type in x ? x[e.action_type] : [O, L.warningIcon];
                    return (0, i.jsx)(i.Fragment, {
                        children: e.descriptions.map((t, e) => (0, i.jsxs)("div", {
                            className: L.classificationActionsTakenRow,
                            children: [(0, i.jsx)("div", {
                                className: L.classificationActionsTakenRowIcon,
                                children: (0, i.jsx)(n, {
                                    className: a,
                                    width: 15,
                                    height: 15
                                })
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-normal",
                                children: t
                            })]
                        }, e))
                    })
                },
                m = t => {
                    let {
                        classificationTypeText: e,
                        policyExplainerLink: n
                    } = t;
                    return (0, i.jsxs)(s.Anchor, {
                        href: n,
                        className: L.classificationPolicyCard,
                        children: [(0, i.jsx)("div", {
                            className: L.classificationPolicyCardIcon,
                            children: (0, i.jsx)(u.default, {
                                className: L.shieldIcon,
                                width: 32,
                                height: 32
                            })
                        }), (0, i.jsxs)("div", {
                            className: L.classificationPolicyDescriptionContainer,
                            children: [(0, i.jsx)(s.Text, {
                                variant: "text-md/bold",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
                                    classificationDescription: e
                                })
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_SUBTEXT
                            })]
                        }), (0, i.jsx)("div", {
                            className: L.classificationPolicyLinkIcon,
                            children: (0, i.jsx)(E.default, {
                                className: L.arrowIcon,
                                width: "24px",
                                height: "24px"
                            })
                        })]
                    })
                },
                U = t => {
                    let {
                        tosLink: e,
                        communityGuidelinesLink: n,
                        appealLink: a,
                        classificationTypeText: c,
                        policyExplainerLink: r,
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
                                tosLink: e,
                                communityGuidelinesLink: n
                            })
                        }), (0, i.jsx)(m, {
                            classificationTypeText: c,
                            policyExplainerLink: r
                        }), (0, i.jsx)("div", {
                            className: L.classificationLetUsKnowContainer,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                                    letUsKnowHook: (t, e) => (0, i.jsx)(s.Anchor, {
                                        href: a,
                                        onClick: l,
                                        children: t
                                    }, e)
                                })
                            })
                        })]
                    })
                },
                H = t => (0, i.jsxs)("div", {
                    className: L.classificationContainer,
                    children: [(0, i.jsx)(h, {
                        classificationTypeText: t.classificationTypeText
                    }), (0, i.jsx)(p, {
                        actions: t.actions
                    }), (0, i.jsx)(U, {
                        appealLink: t.appealLink,
                        communityGuidelinesLink: t.communityGuidelinesLink,
                        tosLink: t.tosLink,
                        classificationTypeText: t.classificationTypeText,
                        policyExplainerLink: t.policyExplainerLink,
                        letUsKnowClick: t.letUsKnowClick
                    })]
                });
            var g = t => {
                let {
                    classificationId: e,
                    source: n
                } = t, s = (0, _.useSafetyHubClassification)(e), c = (0, I.useSafetyHubAccountStanding)();
                return (a.useEffect(() => {
                    S.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
                        action: T.SafetyHubAnalyticsActions.ViewViolationDetail,
                        account_standing: c.state,
                        classification_ids: [Number(e)],
                        source: n
                    })
                }, []), null == s) ? null : (0, i.jsx)(H, {
                    actions: s.actions,
                    classificationTypeText: s.description,
                    tosLink: T.SafetyHubLinks.TOS_LINK,
                    communityGuidelinesLink: T.SafetyHubLinks.COMMUNITY_GUIDELINES,
                    appealLink: T.SafetyHubLinks.APPEALS_LINK,
                    policyExplainerLink: s.explainer_link,
                    letUsKnowClick: () => {
                        S.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: T.SafetyHubAnalyticsActions.ClickLetUsKnow,
                            account_standing: c.state,
                            classification_ids: [Number(e)],
                            source: n
                        })
                    }
                })
            }
        },
        825138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                c = n("79112"),
                r = n("781324"),
                l = n("422671"),
                o = n("792105"),
                u = n("573240"),
                E = n("170213"),
                A = n("49111"),
                d = n("782340"),
                S = n("581935"),
                f = n("49155"),
                I = t => {
                    let {
                        transitionState: e,
                        onClose: n,
                        classificationId: I,
                        source: _
                    } = t, T = (0, o.default)(), C = (0, l.useSafetyHubInitialized)();
                    return a.useEffect(() => {
                        !C && r.getSafetyHubData()
                    }, [C]), (0, i.jsxs)(s.ModalRoot, {
                        className: S.modalRoot,
                        transitionState: e,
                        children: [(0, i.jsxs)("div", {
                            className: S.modalHeader,
                            children: [(0, i.jsx)("img", {
                                className: S.image,
                                src: f,
                                alt: ""
                            }), (0, i.jsx)(s.ModalCloseButton, {
                                className: S.modalClose,
                                onClick: n
                            })]
                        }), (0, i.jsx)(s.ModalContent, {
                            className: S.modalContent,
                            children: T ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(u.default, {
                                classificationId: I,
                                source: _
                            })
                        }), (0, i.jsx)(s.ModalFooter, {
                            children: (0, i.jsx)(s.Button, {
                                className: S.button,
                                type: "button",
                                color: s.Button.Colors.BRAND,
                                onClick: () => {
                                    n(), c.default.open(A.UserSettingsSections.PRIVACY_AND_SAFETY, E.SafetyHubView.ACCOUNT_STANDING)
                                },
                                children: d.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                            })
                        })]
                    })
                }
        },
        104359: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function s(t) {
                let {
                    width: e = 32,
                    height: n = 32,
                    color: s = "currentColor",
                    ...c
                } = t;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(c),
                    width: e,
                    height: n,
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M7.25 1H4.75V7.25H7.25V1Z",
                        fill: s
                    }), (0, i.jsx)("path", {
                        d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
                        fill: s
                    })]
                })
            }
        },
        4845: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("167338"),
                c = n("75196"),
                r = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, c.default)(r),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            d: "M19.1989 4H4.79814C3.80539 4 2.99805 4.80734 2.99805 5.80009V16.6006C2.99805 17.5934 3.80539 18.4007 4.79814 18.4007H6.59823V22.0009L11.3982 18.4007H19.198C20.1907 18.4007 20.998 17.5934 20.998 16.6006V5.80009C20.9989 4.80734 20.1916 4 19.1989 4ZM11.9985 14.8005C11.5017 14.8005 11.0985 14.3982 11.0985 13.9005C11.0985 13.4028 11.5017 13.0005 11.9985 13.0005C12.4953 13.0005 12.8985 13.4028 12.8985 13.9005C12.8985 14.3982 12.4953 14.8005 11.9985 14.8005ZM12.8985 12.1004H11.0985V7.60018H12.8985V12.1004Z",
                            fill: a,
                            className: s
                        })
                    })
                }, s.ChatAlertIcon)
        },
        975743: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("877585"),
                c = n("75196"),
                r = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, c.default)(r),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                        })
                    })
                }, s.ShieldIcon)
        }
    }
]);