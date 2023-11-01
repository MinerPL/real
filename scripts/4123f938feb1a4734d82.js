(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79929"], {
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
        713640: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shuffleProblems: function() {
                    return n
                }
            });
            var s = a("917351"),
                l = a.n(s);
            let n = (e, t) => {
                let a = l.shuffle(e),
                    s = a.findIndex(e => e.value === t);
                if (s > -1) {
                    let e = a[s];
                    a.splice(s, 1), a.push(e)
                }
                return a
            }
        },
        194141: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                RatingsSelector: function() {
                    return B
                },
                default: function() {
                    return T
                }
            });
            var s = a("37983"),
                l = a("884691"),
                n = a("414456"),
                u = a.n(n),
                r = a("917351"),
                o = a.n(r),
                i = a("77078"),
                c = a("84339"),
                d = a("229850"),
                E = a("145131"),
                f = a("476765"),
                C = a("561744"),
                O = a("701909"),
                _ = a("713640"),
                D = a("200521"),
                N = a("782340"),
                A = a("279537");
            let R = [{
                className: A.emojiSad,
                rating: D.FeedbackRating.BAD,
                classNameSelected: A.selected
            }, {
                className: A.emojiNeutral,
                rating: D.FeedbackRating.NEUTRAL,
                classNameSelected: A.selected
            }, {
                className: A.emojiHappy,
                rating: D.FeedbackRating.GOOD,
                classNameSelected: A.selected
            }];

            function B(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: l,
                    onChangeRating: n
                } = e;
                return (0, s.jsx)(E.default, {
                    justify: E.default.Justify.BETWEEN,
                    align: E.default.Align.CENTER,
                    className: u(A.ratingsSelector, t),
                    children: (null != l ? l : R).map(e => {
                        let {
                            rating: t,
                            className: l,
                            classNameSelected: r
                        } = e;
                        return (0, s.jsx)(i.Clickable, {
                            onClick: () => n(t),
                            "aria-label": t,
                            children: (0, s.jsx)("div", {
                                className: u(l, a === t ? r : null)
                            })
                        }, t)
                    })
                })
            }

            function I() {
                return (0, s.jsx)(i.Text, {
                    className: A.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: N.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: O.default.getSubmitRequestURL()
                    })
                })
            }

            function T(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: n,
                    problems: r,
                    transitionState: O,
                    ratingConfigs: R,
                    feedbackProblems: T = [],
                    otherKey: g,
                    ratingsSelectorClassName: m,
                    hideDontShowCheckbox: h,
                    startRating: x = null,
                    onSubmit: K,
                    onClose: b
                } = e, p = (0, c.default)(r), [L, U] = l.useState(!1), [G, F] = l.useState(x), [j, k] = l.useState(null), [M, S] = l.useState(o.shuffle(r)), [v, H] = l.useState(""), y = (0, f.useUID)(), P = (0, C.default)(G), V = (0, C.default)(L), Y = (0, C.default)(j), z = (0, C.default)(K), w = (0, C.default)(v), q = null != j && T.includes(j);
                return l.useEffect(() => {
                    !o.isEqual(p, r) && S((0, _.shuffleProblems)(r, g))
                }, [r, p, g]), l.useEffect(() => () => {
                    z.current({
                        rating: P.current,
                        problem: Y.current,
                        dontShowAgain: V.current,
                        feedback: w.current
                    })
                }, []), (0, s.jsxs)(i.ModalRoot, {
                    transitionState: O,
                    className: A.modalRoot,
                    "aria-labelledby": y,
                    children: [(0, s.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: A.headerContainer,
                        children: [(0, s.jsx)(i.Heading, {
                            id: y,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, s.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: A.ratingBody,
                            children: a
                        }), q ? null : (0, s.jsx)(B, {
                            className: u(A.emojis, m),
                            selectedRating: G,
                            onChangeRating: function(e) {
                                F(e), e === D.FeedbackRating.GOOD && b()
                            },
                            ratingConfigs: R
                        })]
                    }), (0, s.jsxs)(i.ModalContent, {
                        className: A.content,
                        children: [null == G || G === D.FeedbackRating.GOOD || q ? null : (0, s.jsx)(i.FormItem, {
                            title: n,
                            className: A.problemInfo,
                            children: (0, s.jsx)(d.default, {
                                options: M,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    k(t), !T.includes(t) && b()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !T.includes(t)
                                }
                            })
                        }), q ? (0, s.jsxs)(i.FormItem, {
                            title: N.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: A.problemInfo,
                            children: [(0, s.jsx)(i.TextArea, {
                                value: v,
                                maxLength: D.FEEDBACK_FREEFORM_LENGTH,
                                onChange: H
                            }), (0, s.jsx)(I, {})]
                        }) : null]
                    }), (q || !h) && (0, s.jsx)(i.ModalFooter, {
                        className: A.footer,
                        direction: E.default.Direction.HORIZONTAL,
                        children: q ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: () => {
                                    k(null), H("")
                                },
                                children: N.default.Messages.BACK
                            }), (0, s.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                onClick: b,
                                children: N.default.Messages.SUBMIT
                            })]
                        }) : (0, s.jsx)(i.Checkbox, {
                            type: i.Checkbox.Types.INVERTED,
                            size: 18,
                            value: L,
                            onChange: () => U(!L),
                            children: (0, s.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: N.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        },
        496088: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                VideoBackgroundIssue: function() {
                    return l
                },
                default: function() {
                    return O
                }
            });
            var s, l, n = a("37983"),
                u = a("884691"),
                r = a("77078"),
                o = a("194141"),
                i = a("597517"),
                c = a("599110"),
                d = a("49111"),
                E = a("533613"),
                f = a("782340");
            (s = l || (l = {})).BAD_OUTLINE = "BAD_OUTLINE", s.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY", s.FLICKERING = "FLICKERING", s.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG", s.OTHER = "OTHER";
            let C = [l.OTHER];

            function O(e) {
                let {
                    analyticsData: t,
                    transitionState: s,
                    onClose: O
                } = e;
                return u.useEffect(() => {
                    c.default.track(d.AnalyticEvents.OPEN_MODAL, {
                        type: "Video Background Feedback"
                    })
                }, []), (0, n.jsx)(o.default, {
                    header: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
                    body: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
                    problemTitle: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
                    problems: [{
                        value: l.BAD_OUTLINE,
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE
                    }, {
                        value: l.BACKGROUND_DETECTION_ACCURACY,
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY
                    }, {
                        value: l.FLICKERING,
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING
                    }, {
                        value: l.BACKGROUND_DETECTION_LAG,
                        label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG
                    }, {
                        value: l.OTHER,
                        label: f.default.Messages.CALL_FEEDBACK_OPTION_OTHER
                    }],
                    feedbackProblems: C,
                    onSubmit: function(e) {
                        var s, l, u, o;
                        let {
                            rating: C,
                            problem: O,
                            dontShowAgain: _,
                            feedback: D
                        } = e;
                        if (_ && (0, i.hideHotspot)(E.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK), null != C) s = C, l = O, u = D, o = t, c.default.track(d.AnalyticEvents.VIDEO_BACKGROUND_FEEDBACK, {
                            ...o,
                            reason: l,
                            rating: s,
                            feedback: u
                        }), null != O && (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("874600").then(a.bind(a, "874600"));
                            return t => (0, n.jsx)(e, {
                                body: f.default.Messages.VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
                                ...t
                            })
                        })
                    },
                    onClose: O,
                    transitionState: s,
                    otherKey: l.OTHER
                })
            }
        }
    }
]);