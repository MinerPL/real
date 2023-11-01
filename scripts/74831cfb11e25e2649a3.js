(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30494"], {
        59407: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, s) {
            "use strict";
            e.exports = s.p + "5161f8a4f8050a34ef98.svg"
        },
        200521: function(e, t, s) {
            "use strict";
            var a, l, n, u;
            s.r(t), s.d(t, {
                FeedbackRating: function() {
                    return a
                },
                FEEDBACK_FREEFORM_LENGTH: function() {
                    return E
                },
                FeedbackType: function() {
                    return l
                },
                FeedbackTypePrecedence: function() {
                    return r
                }
            }), (n = a || (a = {})).BAD = "bad", n.NEUTRAL = "neutral", n.GOOD = "good";
            let E = 1024;
            (u = l || (l = {}))[u.VOICE = 0] = "VOICE", u[u.STREAM = 1] = "STREAM", u[u.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", u[u.ACTIVITY = 3] = "ACTIVITY", u[u.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
            let r = [l.VIDEO_BACKGROUND, l.STREAM, l.ACTIVITY, l.VOICE, l.IN_APP_REPORTS].reduce((e, t, s) => ({
                ...e,
                [t]: s
            }), {})
        },
        713640: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                shuffleProblems: function() {
                    return n
                }
            });
            var a = s("917351"),
                l = s.n(a);
            let n = (e, t) => {
                let s = l.shuffle(e),
                    a = s.findIndex(e => e.value === t);
                if (a > -1) {
                    let e = s[a];
                    s.splice(a, 1), s.push(e)
                }
                return s
            }
        },
        866380: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("917351"),
                u = s.n(n),
                E = s("77078"),
                r = s("84339"),
                o = s("385042"),
                d = s("229850"),
                i = s("145131"),
                c = s("476765"),
                f = s("561744"),
                I = s("258078"),
                C = s("701909"),
                A = s("713640"),
                _ = s("200521"),
                T = s("782340"),
                D = s("279537");

            function R() {
                return (0, a.jsx)(E.Text, {
                    className: D.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: T.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: C.default.getSubmitRequestURL()
                    })
                })
            }

            function L(e) {
                let {
                    header: t,
                    body: s,
                    problems: n,
                    transitionState: C,
                    feedbackProblems: L = [],
                    otherKey: N,
                    hasCloseButton: O,
                    onSubmit: m,
                    onClose: M,
                    canDismissForever: S = !0,
                    showHelpdeskLink: V = !0
                } = e, h = (0, r.default)(n), [B, U] = l.useState(!1), [x, g] = l.useState(null), [b, F] = l.useState(u.shuffle(n)), [v, G] = l.useState(""), p = (0, c.useUID)(), K = (0, f.default)(B), P = (0, f.default)(x), k = (0, f.default)(m), j = (0, f.default)(v), y = null != x && L.includes(x);
                return l.useEffect(() => {
                    !u.isEqual(h, n) && F((0, A.shuffleProblems)(n, N))
                }, [n, h, N]), l.useEffect(() => () => {
                    k.current({
                        problem: P.current,
                        dontShowAgain: K.current,
                        feedback: j.current
                    })
                }, []), (0, a.jsxs)(E.ModalRoot, {
                    transitionState: C,
                    className: D.modalRoot,
                    "aria-labelledby": p,
                    children: [(0, a.jsx)(o.default, {}), (0, a.jsxs)(E.ModalHeader, {
                        separator: !1,
                        className: D.headerContainer,
                        children: [(0, a.jsx)(I.default, {
                            id: p,
                            className: D.header,
                            color: I.default.Colors.CUSTOM,
                            size: I.default.Sizes.SIZE_24,
                            children: t
                        }), (0, a.jsx)(E.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: D.ratingBody,
                            children: s
                        }), O ? (0, a.jsx)(E.ModalCloseButton, {
                            className: D.modalCloseButton,
                            onClick: M
                        }) : null]
                    }), (0, a.jsxs)(E.ModalContent, {
                        className: D.content,
                        children: [y ? null : (0, a.jsx)(E.FormItem, {
                            className: D.problemInfo,
                            children: (0, a.jsx)(d.default, {
                                options: b,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    g(t), !L.includes(t) && M()
                                }
                            })
                        }), y ? (0, a.jsxs)(E.FormItem, {
                            title: T.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: D.problemInfo,
                            children: [(0, a.jsx)(E.TextArea, {
                                value: v,
                                maxLength: _.FEEDBACK_FREEFORM_LENGTH,
                                onChange: G
                            }), V ? (0, a.jsx)(R, {}) : null]
                        }) : null]
                    }), S || y ? (0, a.jsx)(E.ModalFooter, {
                        className: D.footer,
                        direction: i.default.Direction.HORIZONTAL,
                        children: y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(E.Button, {
                                size: E.Button.Sizes.SMALL,
                                look: E.Button.Looks.LINK,
                                color: E.Button.Colors.PRIMARY,
                                onClick: () => {
                                    g(null), G("")
                                },
                                children: T.default.Messages.BACK
                            }), (0, a.jsx)(E.Button, {
                                size: E.Button.Sizes.SMALL,
                                onClick: M,
                                children: T.default.Messages.SUBMIT
                            })]
                        }) : S ? (0, a.jsx)(E.Checkbox, {
                            size: 18,
                            type: E.Checkbox.Types.INVERTED,
                            value: B,
                            onChange: () => U(!B),
                            children: (0, a.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        385042: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("884691"),
                l = s("69927"),
                n = s("773336"),
                u = s("782340");

            function E() {
                return a.useEffect(() => {
                    !n.isPlatformEmbedded && (0, l.flashPageTitle)({
                        messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        732018: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GuildLeaveReasons: function() {
                    return l
                },
                getGuildLeaveReasons: function() {
                    return u
                }
            });
            var a, l, n = s("782340");

            function u() {
                return [{
                    value: l.UNINTERESTED,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED
                }, {
                    value: l.ACCIDENT,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT
                }, {
                    value: l.INACTIVE,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE
                }, {
                    value: l.UNCOMFORTABLE,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE
                }, {
                    value: l.DISRUPTIVE,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE
                }, {
                    value: l.OVERACTIVE,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE
                }, {
                    value: l.CONFUSING,
                    label: n.default.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING
                }, {
                    value: l.OTHER,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_OTHER
                }]
            }(a = l || (l = {})).UNINTERESTED = "UNINTERESTED", a.ACCIDENT = "ACCIDENT", a.INACTIVE = "INACTIVE", a.UNCOMFORTABLE = "UNCOMFORTABLE", a.DISRUPTIVE = "DISRUPTIVE", a.OVERACTIVE = "OVERACTIVE", a.CONFUSING = "CONFUSING", a.OTHER = "OTHER"
        },
        489505: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("599110"),
                l = s("49111");

            function n(e, t, s, n) {
                a.default.track(l.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Leave",
                    guild_id: e,
                    reason: t,
                    feedback: s,
                    skipped: n
                })
            }
        },
        953750: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("775560"),
                u = s("151426"),
                E = s("77078"),
                r = s("10641"),
                o = s("866380"),
                d = s("599110"),
                i = s("489505"),
                c = s("732018"),
                f = s("49111"),
                I = s("782340");

            function C(e) {
                let {
                    transitionState: t,
                    onClose: C,
                    guildId: A,
                    guildName: _
                } = e, T = (0, n.useLazyValue)(c.getGuildLeaveReasons);
                return l.useEffect(() => {
                    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
                        type: "Guild Leave Report"
                    })
                }, []), (0, a.jsx)(o.default, {
                    header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
                    body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
                        server: _
                    }),
                    problems: T,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            dontShowAgain: l,
                            feedback: n
                        } = e;
                        l && (0, r.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK);
                        let o = null == t;
                        (0, i.default)(A, t, n, o), !o && (0, E.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("874600").then(s.bind(s, "874600"));
                            return t => (0, a.jsx)(e, {
                                body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                                ...t
                            })
                        })
                    },
                    onClose: C,
                    transitionState: t,
                    otherKey: c.GuildLeaveReasons.OTHER,
                    hasCloseButton: !0
                })
            }
        }
    }
]);