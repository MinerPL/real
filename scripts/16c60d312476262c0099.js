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
            var l = a("920040");
            a("773670");
            var n = a("77078"),
                s = a("229353"),
                o = a.n(s),
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
                    transitionState: s,
                    analyticsData: f
                } = e;
                return (0, l.jsx)(u.default, {
                    header: _.default.Messages.CALL_FEEDBACK_SHEET_TITLE,
                    body: _.default.Messages.CALL_FEEDBACK_PROMPT,
                    problemTitle: _.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
                    problems: (0, d.default)(!1),
                    feedbackProblems: E,
                    onSubmit: function(e) {
                        var t, s, o;
                        let {
                            rating: u,
                            problem: E,
                            dontShowAgain: O,
                            feedback: A
                        } = e;
                        if (O && (0, i.hideHotspot)(r.HotspotLocations.VOICE_CALL_FEEDBACK), null != u)(0, c.default)(u, (t = E, null !== (o = null === (s = (0, d.default)(!1).find(e => e.label === t)) || void 0 === s ? void 0 : s.code) && void 0 !== o ? o : null), E, A, f), null != E && (0, n.openModalLazy)(async () => {
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
                    transitionState: s,
                    otherKey: o.CALL_FEEDBACK_OPTION_OTHER
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
            var l = a("427964"),
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
            var l = a("920040"),
                n = a("773670"),
                s = a("575482"),
                o = a.n(s),
                u = a("427964"),
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
                m = a("782340"),
                D = a("176252");
            let h = [{
                className: D.emojiSad,
                rating: C.FeedbackRating.BAD,
                classNameSelected: D.selected
            }, {
                className: D.emojiNeutral,
                rating: C.FeedbackRating.NEUTRAL,
                classNameSelected: D.selected
            }, {
                className: D.emojiHappy,
                rating: C.FeedbackRating.GOOD,
                classNameSelected: D.selected
            }];

            function N(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: n,
                    onChangeRating: s
                } = e;
                return (0, l.jsx)(_.default, {
                    justify: _.default.Justify.BETWEEN,
                    align: _.default.Align.CENTER,
                    className: o(D.ratingsSelector, t),
                    children: (null != n ? n : h).map(e => {
                        let {
                            rating: t,
                            className: n,
                            classNameSelected: u
                        } = e;
                        return (0, l.jsx)(d.Clickable, {
                            onClick: () => s(t),
                            "aria-label": t,
                            children: (0, l.jsx)("div", {
                                className: o(n, a === t ? u : null)
                            })
                        }, t)
                    })
                })
            }

            function L() {
                return (0, l.jsx)(d.Text, {
                    className: D.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: m.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: O.default.getSubmitRequestURL()
                    })
                })
            }

            function g(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: s,
                    problems: u,
                    transitionState: O,
                    ratingConfigs: h,
                    feedbackProblems: g = [],
                    otherKey: I,
                    ratingsSelectorClassName: p,
                    hideDontShowCheckbox: v,
                    startRating: b = null,
                    onSubmit: T,
                    onClose: R
                } = e, x = (0, c.default)(u), [B, S] = n.useState(!1), [M, U] = n.useState(b), [j, F] = n.useState(null), [H, k] = n.useState(i.shuffle(u)), [K, P] = n.useState(""), y = (0, E.useUID)(), w = (0, f.default)(M), G = (0, f.default)(B), V = (0, f.default)(j), z = (0, f.default)(T), Y = (0, f.default)(K), q = null != j && g.includes(j);
                return n.useEffect(() => {
                    !i.isEqual(x, u) && k((0, A.shuffleProblems)(u, I))
                }, [u, x, I]), n.useEffect(() => () => {
                    z.current({
                        rating: w.current,
                        problem: V.current,
                        dontShowAgain: G.current,
                        feedback: Y.current
                    })
                }, []), (0, l.jsxs)(d.ModalRoot, {
                    transitionState: O,
                    className: D.modalRoot,
                    "aria-labelledby": y,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        className: D.headerContainer,
                        children: [(0, l.jsx)(d.Heading, {
                            id: y,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, l.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: D.ratingBody,
                            children: a
                        }), q ? null : (0, l.jsx)(N, {
                            className: o(D.emojis, p),
                            selectedRating: M,
                            onChangeRating: function(e) {
                                U(e), e === C.FeedbackRating.GOOD && R()
                            },
                            ratingConfigs: h
                        })]
                    }), (0, l.jsxs)(d.ModalContent, {
                        className: D.content,
                        children: [null == M || M === C.FeedbackRating.GOOD || q ? null : (0, l.jsx)(d.FormItem, {
                            title: s,
                            className: D.problemInfo,
                            children: (0, l.jsx)(r.default, {
                                options: H,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    F(t), !g.includes(t) && R()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !g.includes(t)
                                }
                            })
                        }), q ? (0, l.jsxs)(d.FormItem, {
                            title: m.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: D.problemInfo,
                            children: [(0, l.jsx)(d.TextArea, {
                                value: K,
                                maxLength: C.FEEDBACK_FREEFORM_LENGTH,
                                onChange: P
                            }), (0, l.jsx)(L, {})]
                        }) : null]
                    }), (q || !v) && (0, l.jsx)(d.ModalFooter, {
                        className: D.footer,
                        direction: _.default.Direction.HORIZONTAL,
                        children: q ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.PRIMARY,
                                onClick: () => {
                                    F(null), P("")
                                },
                                children: m.default.Messages.BACK
                            }), (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: R,
                                children: m.default.Messages.SUBMIT
                            })]
                        }) : (0, l.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => S(!B),
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.DONT_SHOW_AGAIN
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
            var l, n, s = a("782340");

            function o(e) {
                let t = [{
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_COULD_NOT_HEAR_AUDIO,
                    code: 2,
                    value: n.COULD_NOT_HEAR_AUDIO
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_NOBODY_COULD_HEAR_ME,
                    code: 3,
                    value: n.NOBODY_COULD_HEAR_ME
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ECHOS,
                    code: 4,
                    value: n.AUDIO_ECHOS
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ROBOTIC,
                    code: 5,
                    value: n.AUDIO_ROBOTIC
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_CUT,
                    code: 6,
                    value: n.AUDIO_CUT
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_BAD_VOLUME,
                    code: 7,
                    value: n.BAD_VOLUME
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_BACKGROUND_NOISE,
                    code: 8,
                    value: n.BACKGROUND_NOISE
                }];
                return e && t.push({
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_SPEAKERPHONE,
                    code: 9,
                    value: n.SPEAKERPHONE
                }), t.push({
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_HEADSET,
                    code: 10,
                    value: n.HEADSET
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
                    code: 1,
                    value: n.OTHER
                }), t
            }(l = n || (n = {})).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all", l.NOBODY_COULD_HEAR_ME = "Nobody could hear me", l.AUDIO_ECHOS = "Audio had echos or feedback", l.AUDIO_ROBOTIC = "Audio was robotic or distorted", l.AUDIO_CUT = "Audio cut in and out", l.BAD_VOLUME = "Volume was too low or high", l.BACKGROUND_NOISE = "Background noise was too loud", l.SPEAKERPHONE = "Issues with speakerphone", l.HEADSET = "Issues with headset/bluetooth", l.OTHER = "Other"
        },
        246429: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("42887"),
                n = a("599110"),
                s = a("49111");

            function o(e, t, a, o, u) {
                let i = l.default.getSettings(),
                    d = l.default.getInputDeviceId(),
                    c = l.default.getInputDevices()[d],
                    r = l.default.getOutputDeviceId(),
                    _ = l.default.getOutputDevices()[r],
                    E = l.default.getVideoDeviceId(),
                    f = l.default.getVideoDevices()[E],
                    O = l.default.getNoiseCancellation();
                n.default.track(s.AnalyticEvents.CALL_REPORT_PROBLEM, {
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
        },
        229850: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("920040");
            a("773670");
            var n = a("575482"),
                s = a.n(n),
                o = a("77078"),
                u = a("461380"),
                i = a("850073");

            function d(e) {
                let {
                    options: t,
                    onClick: a,
                    className: n,
                    optionClassName: d,
                    hideCaret: c
                } = e;
                return (0, l.jsx)("div", {
                    className: s(i.root, n),
                    children: t.map((e, t) => (0, l.jsxs)(o.Clickable, {
                        onClick: () => a(e),
                        className: s(i.option, d),
                        children: [(0, l.jsx)(o.Text, {
                            className: i.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == c ? void 0 : c(e)) && (0, l.jsx)(u.default, {
                            className: i.caret,
                            direction: u.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
        }
    }
]);