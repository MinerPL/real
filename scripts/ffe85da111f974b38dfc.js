(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30494"], {
        59407: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5161f8a4f8050a34ef98.svg"
        },
        69927: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setPageTitleNotificationCount: function() {
                    return c
                },
                flashPageTitle: function() {
                    return d
                },
                usePageTitle: function() {
                    return E
                },
                AppPageTitle: function() {
                    return I
                },
                usePageTitleManager: function() {
                    return C
                }
            });
            var l = n("884691"),
                s = n("308503"),
                a = n("773336");
            let u = {
                    base: a.isPlatformEmbedded ? void 0 : "Discord"
                },
                r = 0,
                o = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                i = (0, s.default)(() => ({
                    titles: [u],
                    notificationCount: void 0,
                    flashQueue: []
                }));

            function c(e) {
                i.setState({
                    notificationCount: e
                })
            }

            function d(e) {
                let t = {
                    ...o,
                    ...e,
                    id: r++
                };
                return t.count = Math.max(t.count, t.messages.length), i.setState(e => ({
                    flashQueue: [...e.flashQueue, t]
                })), () => f(t.id)
            }

            function f(e) {
                i.setState(t => ({
                    flashQueue: t.flashQueue.filter(t => t.id !== e)
                }))
            }

            function E(e) {
                l.useEffect(() => {
                    var t;
                    return t = e, i.setState(e => ({
                        titles: [t, ...e.titles]
                    })), () => {
                        i.setState(e => ({
                            titles: e.titles.filter(e => e !== t)
                        }))
                    }
                }, [...Object.values(e)])
            }

            function I(e) {
                return E(e), null
            }

            function C() {
                let {
                    skipsSettingDefaultPageTitle: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                l.useEffect(() => {
                    function e() {
                        i.setState({
                            flashQueue: []
                        })
                    }
                    return document.addEventListener("focusin", e, {
                        capture: !0
                    }), () => document.removeEventListener("focusin", e, {
                        capture: !0
                    })
                }, []);
                let t = function() {
                    let [e, t] = i(e => {
                        let {
                            flashQueue: t
                        } = e, n = (function(e) {
                            let t, n, l;
                            for (let s of e.titles) {
                                if (null != t && null != n) break;
                                t = null != t ? t : s.base, n = null != n ? n : s.location, l = null != l ? l : s.subsection
                            }
                            return [t, l, n]
                        })(e).filter(e => null != e).join(" | "), l = function(e) {
                            let {
                                notificationCount: t
                            } = e;
                            return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                        }(e);
                        return ["".concat(l).concat(n), t[0]]
                    }), [n, s] = l.useState(!1), a = l.useRef(0), u = null == t ? void 0 : t.messages[a.current % t.messages.length];
                    return l.useEffect(() => {
                        if (null == t) {
                            a.current = 0, s(!1);
                            return
                        }
                        if (document.hasFocus() && t.onlyWhenBlurred) {
                            f(t.id), s(!1);
                            return
                        }
                        let e = setInterval(() => {
                            if (a.current >= t.count) {
                                f(t.id), s(!1);
                                return
                            }
                            s(e => !e || (a.current += 1, !1))
                        }, t.interval);
                        return () => clearInterval(e)
                    }, [t]), n ? u : e
                }();
                l.useEffect(() => {
                    let n = t === u.base;
                    (!e || !n) && (document.title = t)
                }, [e, t])
            }
        },
        200521: function(e, t, n) {
            "use strict";
            var l, s, a, u;
            n.r(t), n.d(t, {
                FeedbackRating: function() {
                    return l
                },
                FEEDBACK_FREEFORM_LENGTH: function() {
                    return r
                },
                FeedbackType: function() {
                    return s
                },
                FeedbackTypePrecedence: function() {
                    return o
                }
            }), (a = l || (l = {})).BAD = "bad", a.NEUTRAL = "neutral", a.GOOD = "good";
            let r = 1024;
            (u = s || (s = {}))[u.VOICE = 0] = "VOICE", u[u.STREAM = 1] = "STREAM", u[u.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", u[u.ACTIVITY = 3] = "ACTIVITY", u[u.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
            let o = [s.VIDEO_BACKGROUND, s.STREAM, s.ACTIVITY, s.VOICE, s.IN_APP_REPORTS].reduce((e, t, n) => ({
                ...e,
                [t]: n
            }), {})
        },
        713640: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shuffleProblems: function() {
                    return a
                }
            });
            var l = n("917351"),
                s = n.n(l);
            let a = (e, t) => {
                let n = s.shuffle(e),
                    l = n.findIndex(e => e.value === t);
                if (l > -1) {
                    let e = n[l];
                    n.splice(l, 1), n.push(e)
                }
                return n
            }
        },
        866380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("917351"),
                u = n.n(a),
                r = n("77078"),
                o = n("84339"),
                i = n("385042"),
                c = n("229850"),
                d = n("145131"),
                f = n("476765"),
                E = n("561744"),
                I = n("258078"),
                C = n("701909"),
                T = n("713640"),
                h = n("200521"),
                A = n("782340"),
                D = n("279537");

            function R() {
                return (0, l.jsx)(r.Text, {
                    className: D.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: A.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: C.default.getSubmitRequestURL()
                    })
                })
            }

            function _(e) {
                let {
                    header: t,
                    body: n,
                    problems: a,
                    transitionState: C,
                    feedbackProblems: _ = [],
                    otherKey: m,
                    hasCloseButton: N,
                    onSubmit: L,
                    onClose: v,
                    canDismissForever: O = !0,
                    showHelpdeskLink: g = !0
                } = e, S = (0, o.default)(a), [x, M] = s.useState(!1), [b, U] = s.useState(null), [B, p] = s.useState(u.shuffle(a)), [V, F] = s.useState(""), G = (0, f.useUID)(), j = (0, E.default)(x), P = (0, E.default)(b), k = (0, E.default)(L), K = (0, E.default)(V), y = null != b && _.includes(b);
                return s.useEffect(() => {
                    !u.isEqual(S, a) && p((0, T.shuffleProblems)(a, m))
                }, [a, S, m]), s.useEffect(() => () => {
                    k.current({
                        problem: P.current,
                        dontShowAgain: j.current,
                        feedback: K.current
                    })
                }, []), (0, l.jsxs)(r.ModalRoot, {
                    transitionState: C,
                    className: D.modalRoot,
                    "aria-labelledby": G,
                    children: [(0, l.jsx)(i.default, {}), (0, l.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: D.headerContainer,
                        children: [(0, l.jsx)(I.default, {
                            id: G,
                            className: D.header,
                            color: I.default.Colors.CUSTOM,
                            size: I.default.Sizes.SIZE_24,
                            children: t
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: D.ratingBody,
                            children: n
                        }), N ? (0, l.jsx)(r.ModalCloseButton, {
                            className: D.modalCloseButton,
                            onClick: v
                        }) : null]
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: D.content,
                        children: [y ? null : (0, l.jsx)(r.FormItem, {
                            className: D.problemInfo,
                            children: (0, l.jsx)(c.default, {
                                options: B,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    U(t), !_.includes(t) && v()
                                }
                            })
                        }), y ? (0, l.jsxs)(r.FormItem, {
                            title: A.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: D.problemInfo,
                            children: [(0, l.jsx)(r.TextArea, {
                                value: V,
                                maxLength: h.FEEDBACK_FREEFORM_LENGTH,
                                onChange: F
                            }), g ? (0, l.jsx)(R, {}) : null]
                        }) : null]
                    }), O || y ? (0, l.jsx)(r.ModalFooter, {
                        className: D.footer,
                        direction: d.default.Direction.HORIZONTAL,
                        children: y ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: () => {
                                    U(null), F("")
                                },
                                children: A.default.Messages.BACK
                            }), (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                onClick: v,
                                children: A.default.Messages.SUBMIT
                            })]
                        }) : O ? (0, l.jsx)(r.Checkbox, {
                            size: 18,
                            type: r.Checkbox.Types.INVERTED,
                            value: x,
                            onChange: () => M(!x),
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: A.default.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }
        },
        385042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                s = n("69927"),
                a = n("773336"),
                u = n("782340");

            function r() {
                return l.useEffect(() => {
                    !a.isPlatformEmbedded && (0, s.flashPageTitle)({
                        messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        732018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildLeaveReasons: function() {
                    return s
                },
                getGuildLeaveReasons: function() {
                    return u
                }
            });
            var l, s, a = n("782340");

            function u() {
                return [{
                    value: s.UNINTERESTED,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_UNINTERESTED
                }, {
                    value: s.ACCIDENT,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_ACCIDENT
                }, {
                    value: s.INACTIVE,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_INACTIVE
                }, {
                    value: s.UNCOMFORTABLE,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_UNCOMFORTABLE
                }, {
                    value: s.DISRUPTIVE,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_DISRUPTIVE
                }, {
                    value: s.OVERACTIVE,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_OVERACTIVE
                }, {
                    value: s.CONFUSING,
                    label: a.default.Messages.GUILD_LEAVE_FEEDBACK_CONFUSING
                }, {
                    value: s.OTHER,
                    label: a.default.Messages.GUILD_DELETE_FEEDBACK_OTHER
                }]
            }(l = s || (s = {})).UNINTERESTED = "UNINTERESTED", l.ACCIDENT = "ACCIDENT", l.INACTIVE = "INACTIVE", l.UNCOMFORTABLE = "UNCOMFORTABLE", l.DISRUPTIVE = "DISRUPTIVE", l.OVERACTIVE = "OVERACTIVE", l.CONFUSING = "CONFUSING", l.OTHER = "OTHER"
        },
        489505: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("599110"),
                s = n("49111");

            function a(e, t, n, a) {
                l.default.track(s.AnalyticEvents.USER_REPORT_SUBMITTED, {
                    report_name: "Guild Leave",
                    guild_id: e,
                    reason: t,
                    feedback: n,
                    skipped: a
                })
            }
        },
        953750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("775560"),
                u = n("151426"),
                r = n("77078"),
                o = n("10641"),
                i = n("866380"),
                c = n("599110"),
                d = n("489505"),
                f = n("732018"),
                E = n("49111"),
                I = n("782340");

            function C(e) {
                let {
                    transitionState: t,
                    onClose: C,
                    guildId: T,
                    guildName: h
                } = e, A = (0, a.useLazyValue)(f.getGuildLeaveReasons);
                return s.useEffect(() => {
                    c.default.track(E.AnalyticEvents.OPEN_MODAL, {
                        type: "Guild Leave Report"
                    })
                }, []), (0, l.jsx)(i.default, {
                    header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
                    body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
                        server: h
                    }),
                    problems: A,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            dontShowAgain: s,
                            feedback: a
                        } = e;
                        s && (0, o.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK);
                        let i = null == t;
                        (0, d.default)(T, t, a, i), !i && (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("874600").then(n.bind(n, "874600"));
                            return t => (0, l.jsx)(e, {
                                body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                                ...t
                            })
                        })
                    },
                    onClose: C,
                    transitionState: t,
                    otherKey: f.GuildLeaveReasons.OTHER,
                    hasCloseButton: !0
                })
            }
        },
        229850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                u = n("77078"),
                r = n("461380"),
                o = n("133251");

            function i(e) {
                let {
                    options: t,
                    onClick: n,
                    className: s,
                    optionClassName: i,
                    hideCaret: c
                } = e;
                return (0, l.jsx)("div", {
                    className: a(o.root, s),
                    children: t.map((e, t) => (0, l.jsxs)(u.Clickable, {
                        onClick: () => n(e),
                        className: a(o.option, i),
                        children: [(0, l.jsx)(u.Text, {
                            className: o.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == c ? void 0 : c(e)) && (0, l.jsx)(r.default, {
                            className: o.caret,
                            direction: r.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                u = n("384737"),
                r = n("448052"),
                o = n("748802"),
                i = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                I = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: s = 24,
                        color: I = "currentColor",
                        transition: C = f.transition,
                        className: T,
                        foreground: h,
                        expanded: A,
                        ...D
                    } = e, {
                        enabled: R
                    } = (0, c.useRedesignIconContext)(), _ = t;
                    if (!0 === A ? _ = E.DOWN : !1 === A && (_ = E.RIGHT), R) {
                        let e = {
                            [E.UP]: i.ChevronSmallUpIcon,
                            [E.DOWN]: u.ChevronSmallDownIcon,
                            [E.LEFT]: r.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [_];
                        return (0, l.jsx)(e, {
                            ...D,
                            className: T,
                            width: n,
                            height: s,
                            color: I,
                            colorClass: h
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: a(T, C, _),
                        width: n,
                        height: s,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(D),
                        children: (0, l.jsx)("path", {
                            className: h,
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
            I.Directions = E;
            var C = I
        }
    }
]);