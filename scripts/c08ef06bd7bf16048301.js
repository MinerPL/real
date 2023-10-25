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
            var l = s("427964"),
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
                    return x
                }
            });
            var l = s("920040"),
                a = s("773670"),
                n = s("427964"),
                u = s.n(n),
                r = s("77078"),
                o = s("84339"),
                i = s("385042"),
                d = s("229850"),
                E = s("145131"),
                c = s("476765"),
                f = s("561744"),
                D = s("258078"),
                T = s("701909"),
                _ = s("713640"),
                L = s("200521"),
                m = s("782340"),
                C = s("176252");

            function h() {
                return (0, l.jsx)(r.Text, {
                    className: C.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: m.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: T.default.getSubmitRequestURL()
                    })
                })
            }

            function x(e) {
                let {
                    header: t,
                    body: s,
                    problems: n,
                    transitionState: T,
                    feedbackProblems: x = [],
                    otherKey: I,
                    hasCloseButton: A,
                    onSubmit: M,
                    onClose: b,
                    canDismissForever: p = !0,
                    showHelpdeskLink: g = !0
                } = e, v = (0, o.default)(n), [R, N] = a.useState(!1), [O, B] = a.useState(null), [S, j] = a.useState(u.shuffle(n)), [G, k] = a.useState(""), F = (0, c.useUID)(), U = (0, f.default)(R), K = (0, f.default)(O), H = (0, f.default)(M), y = (0, f.default)(G), P = null != O && x.includes(O);
                return a.useEffect(() => {
                    !u.isEqual(v, n) && j((0, _.shuffleProblems)(n, I))
                }, [n, v, I]), a.useEffect(() => () => {
                    H.current({
                        problem: K.current,
                        dontShowAgain: U.current,
                        feedback: y.current
                    })
                }, []), (0, l.jsxs)(r.ModalRoot, {
                    transitionState: T,
                    className: C.modalRoot,
                    "aria-labelledby": F,
                    children: [(0, l.jsx)(i.default, {}), (0, l.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: C.headerContainer,
                        children: [(0, l.jsx)(D.default, {
                            id: F,
                            className: C.header,
                            color: D.default.Colors.CUSTOM,
                            size: D.default.Sizes.SIZE_24,
                            children: t
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: C.ratingBody,
                            children: s
                        }), A ? (0, l.jsx)(r.ModalCloseButton, {
                            className: C.modalCloseButton,
                            onClick: b
                        }) : null]
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: C.content,
                        children: [P ? null : (0, l.jsx)(r.FormItem, {
                            className: C.problemInfo,
                            children: (0, l.jsx)(d.default, {
                                options: S,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    B(t), !x.includes(t) && b()
                                }
                            })
                        }), P ? (0, l.jsxs)(r.FormItem, {
                            title: m.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: C.problemInfo,
                            children: [(0, l.jsx)(r.TextArea, {
                                value: G,
                                maxLength: L.FEEDBACK_FREEFORM_LENGTH,
                                onChange: k
                            }), g ? (0, l.jsx)(h, {}) : null]
                        }) : null]
                    }), p || P ? (0, l.jsx)(r.ModalFooter, {
                        className: C.footer,
                        direction: E.default.Direction.HORIZONTAL,
                        children: P ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: () => {
                                    B(null), k("")
                                },
                                children: m.default.Messages.BACK
                            }), (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                onClick: b,
                                children: m.default.Messages.SUBMIT
                            })]
                        }) : p ? (0, l.jsx)(r.Checkbox, {
                            size: 18,
                            type: r.Checkbox.Types.INVERTED,
                            value: R,
                            onChange: () => N(!R),
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.DONT_SHOW_AGAIN
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
            var l = s("773670"),
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
                    return _
                }
            });
            var l = s("920040"),
                a = s("773670"),
                n = s("365444"),
                u = s("975162"),
                r = s("77078"),
                o = s("10641"),
                i = s("866380"),
                d = s("599110"),
                E = s("705417"),
                c = s("42960"),
                f = s("49111"),
                D = s("782340");
            let T = [c.GuildDeleteReasons.OTHER];

            function _(e) {
                let {
                    transitionState: t,
                    onClose: _,
                    guildId: L
                } = e, m = (0, n.useLazyValue)(c.getGuildDeleteReasons);
                return a.useEffect(() => {
                    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
                        type: "Guild Delete Report"
                    })
                }, []), (0, l.jsx)(i.default, {
                    header: D.default.Messages.GUILD_DELETE_FEEDBACK_HEADER,
                    body: D.default.Messages.GUILD_DELETE_FEEDBACK_BODY,
                    problems: m,
                    feedbackProblems: T,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            dontShowAgain: a,
                            feedback: n
                        } = e;
                        a && (0, o.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_DELETE_FEEDBACK);
                        let i = null == t;
                        (0, E.default)(L, t, n, i), !i && (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("874600").then(s.bind(s, "874600"));
                            return t => (0, l.jsx)(e, {
                                body: D.default.Messages.GUILD_DELETE_FEEDBACK_REPORT,
                                ...t
                            })
                        })
                    },
                    onClose: _,
                    transitionState: t,
                    otherKey: c.GuildDeleteReasons.OTHER
                })
            }
        },
        229850: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var l = s("920040");
            s("773670");
            var a = s("575482"),
                n = s.n(a),
                u = s("77078"),
                r = s("461380"),
                o = s("850073");

            function i(e) {
                let {
                    options: t,
                    onClick: s,
                    className: a,
                    optionClassName: i,
                    hideCaret: d
                } = e;
                return (0, l.jsx)("div", {
                    className: n(o.root, a),
                    children: t.map((e, t) => (0, l.jsxs)(u.Clickable, {
                        onClick: () => s(e),
                        className: n(o.option, i),
                        children: [(0, l.jsx)(u.Text, {
                            className: o.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == d ? void 0 : d(e)) && (0, l.jsx)(r.default, {
                            className: o.caret,
                            direction: r.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
        }
    }
]);