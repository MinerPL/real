(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13977"], {
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
        464667: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("229353"),
                o = a.n(n),
                u = a("194141"),
                i = a("597517"),
                d = a("41645"),
                c = a("246429"),
                r = a("533613"),
                _ = a("782340");
            let E = [o.CALL_FEEDBACK_OPTION_OTHER];

            function f(e) {
                let {
                    onClose: t,
                    transitionState: n,
                    analyticsData: f
                } = e;
                return (0, l.jsx)(u.default, {
                    header: _.default.Messages.CALL_FEEDBACK_SHEET_TITLE,
                    body: _.default.Messages.CALL_FEEDBACK_PROMPT,
                    problemTitle: _.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
                    problems: (0, d.default)(!1),
                    feedbackProblems: E,
                    onSubmit: function(e) {
                        var t, n, o;
                        let {
                            rating: u,
                            problem: E,
                            dontShowAgain: O,
                            feedback: A
                        } = e;
                        if (O && (0, i.hideHotspot)(r.HotspotLocations.VOICE_CALL_FEEDBACK), null != u)(0, c.default)(u, (t = E, null !== (o = null === (n = (0, d.default)(!1).find(e => e.label === t)) || void 0 === n ? void 0 : n.code) && void 0 !== o ? o : null), E, A, f), null != E && (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("874600").then(a.bind(a, "874600"));
                            return t => (0, l.jsx)(e, {
                                body: _.default.Messages.CALL_FEEDBACK_CONFIRMATION,
                                ...t
                            })
                        })
                    },
                    onClose: t,
                    transitionState: n,
                    otherKey: o.CALL_FEEDBACK_OPTION_OTHER
                })
            }
        },
        713640: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shuffleProblems: function() {
                    return n
                }
            });
            var l = a("917351"),
                s = a.n(l);
            let n = (e, t) => {
                let a = s.shuffle(e),
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
                    return g
                },
                default: function() {
                    return N
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                o = a.n(n),
                u = a("917351"),
                i = a.n(u),
                d = a("77078"),
                c = a("84339"),
                r = a("229850"),
                _ = a("145131"),
                E = a("476765"),
                f = a("561744"),
                O = a("701909"),
                A = a("713640"),
                C = a("200521"),
                D = a("782340"),
                m = a("279537");
            let L = [{
                className: m.emojiSad,
                rating: C.FeedbackRating.BAD,
                classNameSelected: m.selected
            }, {
                className: m.emojiNeutral,
                rating: C.FeedbackRating.NEUTRAL,
                classNameSelected: m.selected
            }, {
                className: m.emojiHappy,
                rating: C.FeedbackRating.GOOD,
                classNameSelected: m.selected
            }];

            function g(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: s,
                    onChangeRating: n
                } = e;
                return (0, l.jsx)(_.default, {
                    justify: _.default.Justify.BETWEEN,
                    align: _.default.Align.CENTER,
                    className: o(m.ratingsSelector, t),
                    children: (null != s ? s : L).map(e => {
                        let {
                            rating: t,
                            className: s,
                            classNameSelected: u
                        } = e;
                        return (0, l.jsx)(d.Clickable, {
                            onClick: () => n(t),
                            "aria-label": t,
                            children: (0, l.jsx)("div", {
                                className: o(s, a === t ? u : null)
                            })
                        }, t)
                    })
                })
            }

            function h() {
                return (0, l.jsx)(d.Text, {
                    className: m.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: D.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: O.default.getSubmitRequestURL()
                    })
                })
            }

            function N(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: n,
                    problems: u,
                    transitionState: O,
                    ratingConfigs: L,
                    feedbackProblems: N = [],
                    otherKey: I,
                    ratingsSelectorClassName: p,
                    hideDontShowCheckbox: b,
                    startRating: T = null,
                    onSubmit: v,
                    onClose: R
                } = e, B = (0, c.default)(u), [S, x] = s.useState(!1), [M, U] = s.useState(T), [F, H] = s.useState(null), [K, j] = s.useState(i.shuffle(u)), [k, P] = s.useState(""), y = (0, E.useUID)(), w = (0, f.default)(M), G = (0, f.default)(S), V = (0, f.default)(F), z = (0, f.default)(v), Y = (0, f.default)(k), q = null != F && N.includes(F);
                return s.useEffect(() => {
                    !i.isEqual(B, u) && j((0, A.shuffleProblems)(u, I))
                }, [u, B, I]), s.useEffect(() => () => {
                    z.current({
                        rating: w.current,
                        problem: V.current,
                        dontShowAgain: G.current,
                        feedback: Y.current
                    })
                }, []), (0, l.jsxs)(d.ModalRoot, {
                    transitionState: O,
                    className: m.modalRoot,
                    "aria-labelledby": y,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        className: m.headerContainer,
                        children: [(0, l.jsx)(d.Heading, {
                            id: y,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, l.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: m.ratingBody,
                            children: a
                        }), q ? null : (0, l.jsx)(g, {
                            className: o(m.emojis, p),
                            selectedRating: M,
                            onChangeRating: function(e) {
                                U(e), e === C.FeedbackRating.GOOD && R()
                            },
                            ratingConfigs: L
                        })]
                    }), (0, l.jsxs)(d.ModalContent, {
                        className: m.content,
                        children: [null == M || M === C.FeedbackRating.GOOD || q ? null : (0, l.jsx)(d.FormItem, {
                            title: n,
                            className: m.problemInfo,
                            children: (0, l.jsx)(r.default, {
                                options: K,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    H(t), !N.includes(t) && R()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !N.includes(t)
                                }
                            })
                        }), q ? (0, l.jsxs)(d.FormItem, {
                            title: D.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: m.problemInfo,
                            children: [(0, l.jsx)(d.TextArea, {
                                value: k,
                                maxLength: C.FEEDBACK_FREEFORM_LENGTH,
                                onChange: P
                            }), (0, l.jsx)(h, {})]
                        }) : null]
                    }), (q || !b) && (0, l.jsx)(d.ModalFooter, {
                        className: m.footer,
                        direction: _.default.Direction.HORIZONTAL,
                        children: q ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.PRIMARY,
                                onClick: () => {
                                    H(null), P("")
                                },
                                children: D.default.Messages.BACK
                            }), (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: R,
                                children: D.default.Messages.SUBMIT
                            })]
                        }) : (0, l.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.INVERTED,
                            size: 18,
                            value: S,
                            onChange: () => x(!S),
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: D.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        },
        41645: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l, s, n = a("782340");

            function o(e) {
                let t = [{
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_COULD_NOT_HEAR_AUDIO,
                    code: 2,
                    value: s.COULD_NOT_HEAR_AUDIO
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_NOBODY_COULD_HEAR_ME,
                    code: 3,
                    value: s.NOBODY_COULD_HEAR_ME
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ECHOS,
                    code: 4,
                    value: s.AUDIO_ECHOS
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ROBOTIC,
                    code: 5,
                    value: s.AUDIO_ROBOTIC
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_CUT,
                    code: 6,
                    value: s.AUDIO_CUT
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_BAD_VOLUME,
                    code: 7,
                    value: s.BAD_VOLUME
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_BACKGROUND_NOISE,
                    code: 8,
                    value: s.BACKGROUND_NOISE
                }];
                return e && t.push({
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_SPEAKERPHONE,
                    code: 9,
                    value: s.SPEAKERPHONE
                }), t.push({
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_HEADSET,
                    code: 10,
                    value: s.HEADSET
                }, {
                    label: n.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
                    code: 1,
                    value: s.OTHER
                }), t
            }(l = s || (s = {})).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all", l.NOBODY_COULD_HEAR_ME = "Nobody could hear me", l.AUDIO_ECHOS = "Audio had echos or feedback", l.AUDIO_ROBOTIC = "Audio was robotic or distorted", l.AUDIO_CUT = "Audio cut in and out", l.BAD_VOLUME = "Volume was too low or high", l.BACKGROUND_NOISE = "Background noise was too loud", l.SPEAKERPHONE = "Issues with speakerphone", l.HEADSET = "Issues with headset/bluetooth", l.OTHER = "Other"
        },
        246429: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("42887"),
                s = a("599110"),
                n = a("49111");

            function o(e, t, a, o, u) {
                let i = l.default.getSettings(),
                    d = l.default.getInputDeviceId(),
                    c = l.default.getInputDevices()[d],
                    r = l.default.getOutputDeviceId(),
                    _ = l.default.getOutputDevices()[r],
                    E = l.default.getVideoDeviceId(),
                    f = l.default.getVideoDevices()[E],
                    O = l.default.getNoiseCancellation();
                s.default.track(n.AnalyticEvents.CALL_REPORT_PROBLEM, {
                    rating: null != e ? e : "no response",
                    reason_code: t,
                    reason_description: a,
                    feedback: o,
                    audio_input_mode: i.mode,
                    automatic_audio_input_sensitivity_enabled: i.modeOptions.autoThreshold,
                    audio_input_sensitivity: i.modeOptions.threshold,
                    echo_cancellation_enabled: i.echoCancellation,
                    noise_suppression_enabled: i.noiseSuppression,
                    automatic_gain_control_enabled: i.automaticGainControl,
                    voice_output_volume: i.outputVolume,
                    noise_cancellation_enabled: O,
                    input_device_name: null == c ? void 0 : c.name,
                    output_device_name: null == _ ? void 0 : _.name,
                    video_device_name: null == f ? void 0 : f.name,
                    ...u
                })
            }
        }
    }
]);