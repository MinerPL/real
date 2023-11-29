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
            var n, a, l, r;
            s.r(t), s.d(t, {
                FeedbackRating: function() {
                    return n
                },
                FEEDBACK_FREEFORM_LENGTH: function() {
                    return u
                },
                FeedbackType: function() {
                    return a
                },
                FeedbackTypePrecedence: function() {
                    return o
                }
            }), s("808653"), (l = n || (n = {})).BAD = "bad", l.NEUTRAL = "neutral", l.GOOD = "good";
            let u = 1024;
            (r = a || (a = {}))[r.VOICE = 0] = "VOICE", r[r.STREAM = 1] = "STREAM", r[r.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", r[r.ACTIVITY = 3] = "ACTIVITY", r[r.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
            let o = [2, 1, 3, 0, 4].reduce((e, t, s) => ({
                ...e,
                [t]: s
            }), {})
        },
        713640: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                shuffleProblems: function() {
                    return l
                }
            }), s("424973");
            var n = s("917351"),
                a = s.n(n);
            let l = (e, t) => {
                let s = a.shuffle(e),
                    n = s.findIndex(e => e.value === t);
                if (n > -1) {
                    let e = s[n];
                    s.splice(n, 1), s.push(e)
                }
                return s
            }
        },
        866380: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var n = s("37983"),
                a = s("884691"),
                l = s("917351"),
                r = s.n(l),
                u = s("77078"),
                o = s("84339"),
                i = s("385042"),
                d = s("229850"),
                c = s("145131"),
                E = s("476765"),
                f = s("561744"),
                I = s("258078"),
                C = s("701909"),
                T = s("713640"),
                D = s("200521"),
                A = s("782340"),
                _ = s("279537");

            function L() {
                return (0, n.jsx)(u.Text, {
                    className: _.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: A.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: C.default.getSubmitRequestURL()
                    })
                })
            }

            function N(e) {
                let {
                    header: t,
                    body: s,
                    problems: l,
                    transitionState: C,
                    feedbackProblems: N = [],
                    otherKey: R,
                    hasCloseButton: h,
                    onSubmit: m,
                    onClose: O,
                    canDismissForever: x = !0,
                    showHelpdeskLink: v = !0
                } = e, S = (0, o.default)(l), [U, g] = a.useState(!1), [M, B] = a.useState(null), [V, b] = a.useState(r.shuffle(l)), [p, F] = a.useState(""), G = (0, E.useUID)(), j = (0, f.default)(U), k = (0, f.default)(M), K = (0, f.default)(m), P = (0, f.default)(p), H = null != M && N.includes(M);
                return a.useEffect(() => {
                    !r.isEqual(S, l) && b((0, T.shuffleProblems)(l, R))
                }, [l, S, R]), a.useEffect(() => () => {
                    K.current({
                        problem: k.current,
                        dontShowAgain: j.current,
                        feedback: P.current
                    })
                }, []), (0, n.jsxs)(u.ModalRoot, {
                    transitionState: C,
                    className: _.modalRoot,
                    "aria-labelledby": G,
                    children: [(0, n.jsx)(i.default, {}), (0, n.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: _.headerContainer,
                        children: [(0, n.jsx)(I.default, {
                            id: G,
                            className: _.header,
                            color: I.default.Colors.CUSTOM,
                            size: I.default.Sizes.SIZE_24,
                            children: t
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: _.ratingBody,
                            children: s
                        }), h ? (0, n.jsx)(u.ModalCloseButton, {
                            className: _.modalCloseButton,
                            onClick: O
                        }) : null]
                    }), (0, n.jsxs)(u.ModalContent, {
                        className: _.content,
                        children: [H ? null : (0, n.jsx)(u.FormItem, {
                            className: _.problemInfo,
                            children: (0, n.jsx)(d.default, {
                                options: V,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    B(t), !N.includes(t) && O()
                                }
                            })
                        }), H ? (0, n.jsxs)(u.FormItem, {
                            title: A.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: _.problemInfo,
                            children: [(0, n.jsx)(u.TextArea, {
                                value: p,
                                maxLength: D.FEEDBACK_FREEFORM_LENGTH,
                                onChange: F
                            }), v ? (0, n.jsx)(L, {}) : null]
                        }) : null]
                    }), x || H ? (0, n.jsx)(u.ModalFooter, {
                        className: _.footer,
                        direction: c.default.Direction.HORIZONTAL,
                        children: H ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: () => {
                                    B(null), F("")
                                },
                                children: A.default.Messages.BACK
                            }), (0, n.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                onClick: O,
                                children: A.default.Messages.SUBMIT
                            })]
                        }) : x ? (0, n.jsx)(u.Checkbox, {
                            size: 18,
                            type: u.Checkbox.Types.INVERTED,
                            value: U,
                            onChange: () => g(!U),
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: A.default.Messages.DONT_SHOW_AGAIN
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
                    return u
                }
            });
            var n = s("884691"),
                a = s("69927"),
                l = s("773336"),
                r = s("782340");

            function u() {
                return n.useEffect(() => {
                    !l.isPlatformEmbedded && (0, a.flashPageTitle)({
                        messages: [r.default.Messages.GO_LIVE_HEY, r.default.Messages.GO_LIVE_LOOK, r.default.Messages.GO_LIVE_LISTEN],
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
                    return a
                },
                getGuildLeaveReasons: function() {
                    return r
                }
            });
            var n, a, l = s("782340");

            function r() {
                return [{
                    value: "UNINTERESTED",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED
                }, {
                    value: "ACCIDENT",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT
                }, {
                    value: "INACTIVE",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE
                }, {
                    value: "UNCOMFORTABLE",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE
                }, {
                    value: "DISRUPTIVE",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE
                }, {
                    value: "OVERACTIVE",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE
                }, {
                    value: "CONFUSING",
                    label: l.default.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING
                }, {
                    value: "OTHER",
                    label: l.default.Messages.GUILD_DELETE_FEEDBACK_OTHER
                }]
            }(n = a || (a = {})).UNINTERESTED = "UNINTERESTED", n.ACCIDENT = "ACCIDENT", n.INACTIVE = "INACTIVE", n.UNCOMFORTABLE = "UNCOMFORTABLE", n.DISRUPTIVE = "DISRUPTIVE", n.OVERACTIVE = "OVERACTIVE", n.CONFUSING = "CONFUSING", n.OTHER = "OTHER"
        },
        489505: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("599110"),
                a = s("49111");

            function l(e, t, s, l) {
                n.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Leave",
                    guild_id: e,
                    reason: t,
                    feedback: s,
                    skipped: l
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
            var n = s("37983"),
                a = s("884691"),
                l = s("775560"),
                r = s("151426"),
                u = s("77078"),
                o = s("10641"),
                i = s("866380"),
                d = s("599110"),
                c = s("489505"),
                E = s("732018"),
                f = s("49111"),
                I = s("782340");

            function C(e) {
                let {
                    transitionState: t,
                    onClose: C,
                    guildId: T,
                    guildName: D
                } = e, A = (0, l.useLazyValue)(E.getGuildLeaveReasons);
                return a.useEffect(() => {
                    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
                        type: "Guild Leave Report"
                    })
                }, []), (0, n.jsx)(i.default, {
                    header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
                    body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
                        server: D
                    }),
                    problems: A,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            dontShowAgain: a,
                            feedback: l
                        } = e;
                        a && (0, o.markDismissibleContentAsDismissed)(r.DismissibleContent.GUILD_LEAVE_FEEDBACK);
                        let i = null == t;
                        (0, c.default)(T, t, l, i), !i && (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("874600").then(s.bind(s, "874600"));
                            return t => (0, n.jsx)(e, {
                                body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                                ...t
                            })
                        })
                    },
                    onClose: C,
                    transitionState: t,
                    otherKey: E.GuildLeaveReasons.OTHER,
                    hasCloseButton: !0
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
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                u = s("461380"),
                o = s("133251");

            function i(e) {
                let {
                    options: t,
                    onClick: s,
                    className: a,
                    optionClassName: i,
                    hideCaret: d
                } = e;
                return (0, n.jsx)("div", {
                    className: l(o.root, a),
                    children: t.map((e, t) => (0, n.jsxs)(r.Clickable, {
                        onClick: () => s(e),
                        className: l(o.option, i),
                        children: [(0, n.jsx)(r.Text, {
                            className: o.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == d ? void 0 : d(e)) && (0, n.jsx)(u.default, {
                            className: o.caret,
                            direction: u.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
        },
        461380: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                r = s("384737"),
                u = s("448052"),
                o = s("748802"),
                i = s("260792"),
                d = s("77078"),
                c = s("75196"),
                E = s("4177");
            let f = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                I = e => {
                    let {
                        direction: t = f.DOWN,
                        width: s = 24,
                        height: a = 24,
                        color: I = "currentColor",
                        transition: C = E.transition,
                        className: T,
                        foreground: D,
                        expanded: A,
                        ..._
                    } = e, {
                        enabled: L
                    } = (0, d.useRedesignIconContext)(), N = t;
                    if (!0 === A ? N = f.DOWN : !1 === A && (N = f.RIGHT), L) {
                        let e = {
                            [f.UP]: i.ChevronSmallUpIcon,
                            [f.DOWN]: r.ChevronSmallDownIcon,
                            [f.LEFT]: u.ChevronSmallLeftIcon,
                            [f.RIGHT]: o.ChevronSmallRightIcon
                        } [N];
                        return (0, n.jsx)(e, {
                            ..._,
                            className: T,
                            width: s,
                            height: a,
                            color: I,
                            colorClass: D
                        })
                    }
                    return (0, n.jsx)("svg", {
                        className: l(T, C, N),
                        width: s,
                        height: a,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(_),
                        children: (0, n.jsx)("path", {
                            className: D,
                            fill: "none",
                            stroke: I,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            I.Directions = f;
            var C = I
        }
    }
]);