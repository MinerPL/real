(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29910"], {
        59407: function(e, t, a) {
            "use strict";
            e.exports = a.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, a) {
            "use strict";
            e.exports = a.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, a) {
            "use strict";
            e.exports = a.p + "5161f8a4f8050a34ef98.svg"
        },
        575057: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var l = a("954016"),
                n = a("782340");

            function s(e) {
                let t = [{
                    value: l.ActivityFeedbackReasons.FAILED_LOAD,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
                }, {
                    value: l.ActivityFeedbackReasons.LAGGING,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
                }, {
                    value: l.ActivityFeedbackReasons.CONFUSING,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
                }, {
                    value: l.ActivityFeedbackReasons.NOT_FUN,
                    label: e ? n.default.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : n.default.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
                }, {
                    value: l.ActivityFeedbackReasons.OTHER,
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_OTHER
                }];
                return t
            }
        },
        646559: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var l = a("599110"),
                n = a("49111");

            function s(e) {
                let {
                    problem: t,
                    channel: a,
                    feedback: s,
                    activityApplication: i,
                    analyticsData: c,
                    location: u,
                    rating: d = null
                } = e;
                l.default.track(n.AnalyticEvents.ACTIVITY_REPORT_PROBLEM, {
                    reason: t,
                    guild_id: a.getGuildId(),
                    channel_id: a.id,
                    application_id: null == i ? void 0 : i.id,
                    application_name: null == i ? void 0 : i.name,
                    location: u,
                    rating: d,
                    feedback: s,
                    ...c
                })
            }
        },
        959350: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("77078"),
                i = a("194141"),
                c = a("597517"),
                u = a("599110"),
                d = a("575057"),
                o = a("646559"),
                r = a("954016"),
                f = a("49111"),
                T = a("533613"),
                I = a("782340");
            let _ = [r.ActivityFeedbackReasons.OTHER, r.ActivityFeedbackReasons.NOT_FUN];

            function A(e) {
                let {
                    channel: t,
                    activityApplication: A,
                    onClose: E,
                    transitionState: R,
                    analyticsData: C
                } = e;
                return n.useEffect(() => {
                    u.default.track(f.AnalyticEvents.OPEN_MODAL, {
                        type: "Activity Feedback Modal",
                        application_id: A.id,
                        application_name: A.name,
                        game_id: A.id,
                        source: "Activity End"
                    })
                }, [A]), (0, l.jsx)(i.default, {
                    header: I.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
                        applicationName: A.name
                    }),
                    body: I.default.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
                    problemTitle: I.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
                    problems: (0, d.default)(!0),
                    feedbackProblems: _,
                    onSubmit: function(e) {
                        let {
                            rating: n,
                            problem: i,
                            dontShowAgain: d,
                            feedback: r
                        } = e;
                        if (d && ! function(e) {
                                let {
                                    applicationId: t,
                                    rating: a
                                } = e;
                                u.default.track(f.AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, {
                                    application_id: t,
                                    rating: a
                                }), (0, c.hideHotspot)(T.HotspotLocations.POST_ACTIVITY_FEEDBACK)
                            }({
                                rating: n,
                                applicationId: A.id
                            }), null != n)(0, o.default)({
                            problem: i,
                            channel: t,
                            feedback: r,
                            activityApplication: A,
                            analyticsData: C,
                            location: "Activity End",
                            rating: n
                        }), null != i && (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("874600").then(a.bind(a, "874600"));
                            return t => (0, l.jsx)(e, {
                                body: I.default.Messages.ACTIVITY_REPORTED_BODY,
                                ...t
                            })
                        })
                    },
                    onClose: E,
                    transitionState: R,
                    otherKey: r.ActivityFeedbackReasons.OTHER
                })
            }
        },
        713640: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shuffleProblems: function() {
                    return s
                }
            });
            var l = a("917351"),
                n = a.n(l);
            let s = (e, t) => {
                let a = n.shuffle(e),
                    l = a.findIndex(e => e.value === t);
                if (l > -1) {
                    let e = a[l];
                    a.splice(l, 1), a.push(e)
                }
                return a
            }
        },
        194141: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                RatingsSelector: function() {
                    return N
                },
                default: function() {
                    return g
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                c = a("917351"),
                u = a.n(c),
                d = a("77078"),
                o = a("84339"),
                r = a("229850"),
                f = a("145131"),
                T = a("476765"),
                I = a("561744"),
                _ = a("701909"),
                A = a("713640"),
                E = a("200521"),
                R = a("782340"),
                C = a("279537");
            let m = [{
                className: C.emojiSad,
                rating: E.FeedbackRating.BAD,
                classNameSelected: C.selected
            }, {
                className: C.emojiNeutral,
                rating: E.FeedbackRating.NEUTRAL,
                classNameSelected: C.selected
            }, {
                className: C.emojiHappy,
                rating: E.FeedbackRating.GOOD,
                classNameSelected: C.selected
            }];

            function N(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: n,
                    onChangeRating: s
                } = e;
                return (0, l.jsx)(f.default, {
                    justify: f.default.Justify.BETWEEN,
                    align: f.default.Align.CENTER,
                    className: i(C.ratingsSelector, t),
                    children: (null != n ? n : m).map(e => {
                        let {
                            rating: t,
                            className: n,
                            classNameSelected: c
                        } = e;
                        return (0, l.jsx)(d.Clickable, {
                            onClick: () => s(t),
                            "aria-label": t,
                            children: (0, l.jsx)("div", {
                                className: i(n, a === t ? c : null)
                            })
                        }, t)
                    })
                })
            }

            function O() {
                return (0, l.jsx)(d.Text, {
                    className: C.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: R.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: _.default.getSubmitRequestURL()
                    })
                })
            }

            function g(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: s,
                    problems: c,
                    transitionState: _,
                    ratingConfigs: m,
                    feedbackProblems: g = [],
                    otherKey: p,
                    ratingsSelectorClassName: b,
                    hideDontShowCheckbox: h,
                    startRating: x = null,
                    onSubmit: v,
                    onClose: k
                } = e, F = (0, o.default)(c), [M, D] = n.useState(!1), [S, L] = n.useState(x), [y, Y] = n.useState(null), [j, V] = n.useState(u.shuffle(c)), [P, B] = n.useState(""), G = (0, T.useUID)(), H = (0, I.default)(S), U = (0, I.default)(M), K = (0, I.default)(y), z = (0, I.default)(v), w = (0, I.default)(P), W = null != y && g.includes(y);
                return n.useEffect(() => {
                    !u.isEqual(F, c) && V((0, A.shuffleProblems)(c, p))
                }, [c, F, p]), n.useEffect(() => () => {
                    z.current({
                        rating: H.current,
                        problem: K.current,
                        dontShowAgain: U.current,
                        feedback: w.current
                    })
                }, []), (0, l.jsxs)(d.ModalRoot, {
                    transitionState: _,
                    className: C.modalRoot,
                    "aria-labelledby": G,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        className: C.headerContainer,
                        children: [(0, l.jsx)(d.Heading, {
                            id: G,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, l.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: C.ratingBody,
                            children: a
                        }), W ? null : (0, l.jsx)(N, {
                            className: i(C.emojis, b),
                            selectedRating: S,
                            onChangeRating: function(e) {
                                L(e), e === E.FeedbackRating.GOOD && k()
                            },
                            ratingConfigs: m
                        })]
                    }), (0, l.jsxs)(d.ModalContent, {
                        className: C.content,
                        children: [null == S || S === E.FeedbackRating.GOOD || W ? null : (0, l.jsx)(d.FormItem, {
                            title: s,
                            className: C.problemInfo,
                            children: (0, l.jsx)(r.default, {
                                options: j,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    Y(t), !g.includes(t) && k()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !g.includes(t)
                                }
                            })
                        }), W ? (0, l.jsxs)(d.FormItem, {
                            title: R.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: C.problemInfo,
                            children: [(0, l.jsx)(d.TextArea, {
                                value: P,
                                maxLength: E.FEEDBACK_FREEFORM_LENGTH,
                                onChange: B
                            }), (0, l.jsx)(O, {})]
                        }) : null]
                    }), (W || !h) && (0, l.jsx)(d.ModalFooter, {
                        className: C.footer,
                        direction: f.default.Direction.HORIZONTAL,
                        children: W ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.PRIMARY,
                                onClick: () => {
                                    Y(null), B("")
                                },
                                children: R.default.Messages.BACK
                            }), (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: k,
                                children: R.default.Messages.SUBMIT
                            })]
                        }) : (0, l.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => D(!M),
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: R.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        }
    }
]);