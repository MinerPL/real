(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46250"], {
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
        713640: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                shuffleProblems: function() {
                    return n
                }
            });
            var l = s("917351"),
                a = s.n(l);
            let n = (e, t) => {
                let s = a.shuffle(e),
                    l = s.findIndex(e => e.value === t);
                if (l > -1) {
                    let e = s[l];
                    s.splice(l, 1), s.push(e)
                }
                return s
            }
        },
        866380: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var l = s("37983"),
                a = s("884691"),
                n = s("917351"),
                u = s.n(n),
                r = s("77078"),
                o = s("84339"),
                i = s("385042"),
                E = s("229850"),
                d = s("145131"),
                c = s("476765"),
                f = s("561744"),
                D = s("258078"),
                _ = s("701909"),
                T = s("713640"),
                L = s("200521"),
                C = s("782340"),
                m = s("279537");

            function h() {
                return (0, l.jsx)(r.Text, {
                    className: m.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: C.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: _.default.getSubmitRequestURL()
                    })
                })
            }

            function I(e) {
                let {
                    header: t,
                    body: s,
                    problems: n,
                    transitionState: _,
                    feedbackProblems: I = [],
                    otherKey: A,
                    hasCloseButton: x,
                    onSubmit: M,
                    onClose: g,
                    canDismissForever: b = !0,
                    showHelpdeskLink: p = !0
                } = e, R = (0, o.default)(n), [O, v] = a.useState(!1), [B, N] = a.useState(null), [S, G] = a.useState(u.shuffle(n)), [j, k] = a.useState(""), F = (0, c.useUID)(), U = (0, f.default)(O), K = (0, f.default)(B), y = (0, f.default)(M), H = (0, f.default)(j), P = null != B && I.includes(B);
                return a.useEffect(() => {
                    !u.isEqual(R, n) && G((0, T.shuffleProblems)(n, A))
                }, [n, R, A]), a.useEffect(() => () => {
                    y.current({
                        problem: K.current,
                        dontShowAgain: U.current,
                        feedback: H.current
                    })
                }, []), (0, l.jsxs)(r.ModalRoot, {
                    transitionState: _,
                    className: m.modalRoot,
                    "aria-labelledby": F,
                    children: [(0, l.jsx)(i.default, {}), (0, l.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: m.headerContainer,
                        children: [(0, l.jsx)(D.default, {
                            id: F,
                            className: m.header,
                            color: D.default.Colors.CUSTOM,
                            size: D.default.Sizes.SIZE_24,
                            children: t
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: m.ratingBody,
                            children: s
                        }), x ? (0, l.jsx)(r.ModalCloseButton, {
                            className: m.modalCloseButton,
                            onClick: g
                        }) : null]
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: m.content,
                        children: [P ? null : (0, l.jsx)(r.FormItem, {
                            className: m.problemInfo,
                            children: (0, l.jsx)(E.default, {
                                options: S,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    N(t), !I.includes(t) && g()
                                }
                            })
                        }), P ? (0, l.jsxs)(r.FormItem, {
                            title: C.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: m.problemInfo,
                            children: [(0, l.jsx)(r.TextArea, {
                                value: j,
                                maxLength: L.FEEDBACK_FREEFORM_LENGTH,
                                onChange: k
                            }), p ? (0, l.jsx)(h, {}) : null]
                        }) : null]
                    }), b || P ? (0, l.jsx)(r.ModalFooter, {
                        className: m.footer,
                        direction: d.default.Direction.HORIZONTAL,
                        children: P ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: () => {
                                    N(null), k("")
                                },
                                children: C.default.Messages.BACK
                            }), (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                onClick: g,
                                children: C.default.Messages.SUBMIT
                            })]
                        }) : b ? (0, l.jsx)(r.Checkbox, {
                            size: 18,
                            type: r.Checkbox.Types.INVERTED,
                            value: O,
                            onChange: () => v(!O),
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: C.default.Messages.DONT_SHOW_AGAIN
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
                    return r
                }
            });
            var l = s("884691"),
                a = s("69927"),
                n = s("773336"),
                u = s("782340");

            function r() {
                return l.useEffect(() => {
                    !n.isPlatformEmbedded && (0, a.flashPageTitle)({
                        messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        42960: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GuildDeleteReasons: function() {
                    return a
                },
                getGuildDeleteReasons: function() {
                    return u
                }
            });
            var l, a, n = s("782340");

            function u() {
                return [{
                    value: a.TOO_HARD,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_TOO_HARD
                }, {
                    value: a.TEST,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_TEST
                }, {
                    value: a.ACCIDENT,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_ACCIDENT
                }, {
                    value: a.TEMPLATE,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_TEMPLATE
                }, {
                    value: a.LONELY,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_LONELY
                }, {
                    value: a.INACTIVE,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_INACTIVE
                }, {
                    value: a.OTHER,
                    label: n.default.Messages.GUILD_DELETE_FEEDBACK_OTHER
                }]
            }(l = a || (a = {})).TOO_HARD = "Too hard", l.TEST = "Testing purposes", l.ACCIDENT = "Created on accident", l.TEMPLATE = "Curious about server/template", l.LONELY = "Empty server", l.INACTIVE = "Inactive server", l.OTHER = "Other"
        },
        705417: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var l = s("599110"),
                a = s("49111");

            function n(e, t, s, n) {
                l.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Deletion",
                    guild_id: e,
                    reason: t,
                    feedback: s,
                    skipped: n
                })
            }
        },
        56814: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var l = s("37983"),
                a = s("884691"),
                n = s("775560"),
                u = s("151426"),
                r = s("77078"),
                o = s("10641"),
                i = s("866380"),
                E = s("599110"),
                d = s("705417"),
                c = s("42960"),
                f = s("49111"),
                D = s("782340");
            let _ = [c.GuildDeleteReasons.OTHER];

            function T(e) {
                let {
                    transitionState: t,
                    onClose: T,
                    guildId: L
                } = e, C = (0, n.useLazyValue)(c.getGuildDeleteReasons);
                return a.useEffect(() => {
                    E.default.track(f.AnalyticEvents.OPEN_MODAL, {
                        type: "Guild Delete Report"
                    })
                }, []), (0, l.jsx)(i.default, {
                    header: D.default.Messages.GUILD_DELETE_FEEDBACK_HEADER,
                    body: D.default.Messages.GUILD_DELETE_FEEDBACK_BODY,
                    problems: C,
                    feedbackProblems: _,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            dontShowAgain: a,
                            feedback: n
                        } = e;
                        a && (0, o.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_DELETE_FEEDBACK);
                        let i = null == t;
                        (0, d.default)(L, t, n, i), !i && (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("874600").then(s.bind(s, "874600"));
                            return t => (0, l.jsx)(e, {
                                body: D.default.Messages.GUILD_DELETE_FEEDBACK_REPORT,
                                ...t
                            })
                        })
                    },
                    onClose: T,
                    transitionState: t,
                    otherKey: c.GuildDeleteReasons.OTHER
                })
            }
        }
    }
]);