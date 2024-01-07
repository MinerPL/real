            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("773364"),
                d = s("862337"),
                u = s("669491"),
                c = s("77078"),
                S = s("629109"),
                E = s("42887"),
                f = s("476765"),
                m = s("353927"),
                T = s("782340"),
                _ = s("675235"),
                g = s("173791"),
                h = s("926622");
            let I = (0, f.uid)();

            function N() {
                let [e, t] = n.useState(-100), [s, l] = n.useState(!1), {
                    threshold: N,
                    autoThreshold: p
                } = (0, r.useStateFromStoresObject)([E.default], () => E.default.getModeOptions()), {
                    inputMode: C,
                    automaticVADSupported: A,
                    isEnabled: O
                } = (0, r.useStateFromStoresObject)([E.default], () => ({
                    inputMode: E.default.getMode(),
                    automaticVADSupported: E.default.supports(m.Features.AUTOMATIC_VAD),
                    isEnabled: E.default.isEnabled()
                }));

                function x(e, s) {
                    t(e), l((s & m.SpeakingFlags.VOICE) === m.SpeakingFlags.VOICE)
                }

                function M(e, t) {
                    S.default.setMode(C, {
                        threshold: e,
                        autoThreshold: t
                    })
                }
                n.useEffect(() => {
                    let e = new d.Timeout;
                    return e.start(1e3, () => {
                        E.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, x), e.stop()
                    }), () => {
                        E.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, x), e.stop()
                    }
                }, []);
                let R = (0, a.jsx)("section", {
                    className: i(_.inputSensitivityToggle, _.manual),
                    children: (0, a.jsx)(c.Slider, {
                        initialValue: N + 100,
                        onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
                        onValueChange: e => M(-((100 - e) * 1), p),
                        barStyles: {
                            background: u.default.unsafe_rawColors.GREEN_360.css
                        },
                        fillStyles: {
                            background: u.default.unsafe_rawColors.YELLOW_300.css
                        },
                        "aria-labelledby": I,
                        children: (0, a.jsxs)("div", {
                            className: i(_.sliderBar, _.microphone, _.inputSensitivityBar),
                            children: [(0, a.jsx)("div", {
                                className: i(_.fill, _.inputSensitivityBarFill),
                                style: {
                                    width: e + 100 + "%"
                                }
                            }), (0, a.jsx)("div", {
                                className: "grow"
                            })]
                        })
                    })
                });
                return p && (R = (0, a.jsxs)("section", {
                    className: _.inputSensitivityToggle,
                    children: [(0, a.jsx)("div", {
                        className: _.inputSensitivitySlider,
                        children: (0, a.jsx)("div", {
                            className: i(_.inputSensitivityBar, _.sliderBar, {
                                [_.speaking]: s
                            })
                        })
                    }), (0, a.jsx)(c.FormText, {
                        type: c.FormText.Types.DESCRIPTION,
                        className: h.marginBottom8,
                        children: T.default.Messages.FORM_HELP_AUTOMATIC_VAD
                    })]
                })), (0, a.jsxs)(c.FormItem, {
                    className: _.sensitivity,
                    children: [(0, a.jsx)(c.FormTitle, {
                        id: I,
                        tag: c.FormTitleTags.H5,
                        className: h.marginBottom8,
                        children: T.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
                    }), (0, a.jsxs)("div", {
                        children: [A && (0, a.jsx)(f.UID, {
                            children: e => (0, a.jsxs)("div", {
                                className: i(g.horizontal, h.marginBottom4),
                                children: [(0, a.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H3,
                                    className: h.marginReset,
                                    children: (0, a.jsx)("label", {
                                        htmlFor: e,
                                        children: T.default.Messages.FORM_LABEL_AUTOMATIC_VAD
                                    })
                                }), (0, a.jsx)(c.Switch, {
                                    id: e,
                                    checked: p,
                                    onChange: e => M(N, e)
                                })]
                            })
                        }), R]
                    }), !O && (0, a.jsx)(c.FormText, {
                        type: c.FormText.Types.DESCRIPTION,
                        className: i(_.inputDisabledWarning, h.marginBottom8),
                        children: T.default.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({
                            onEnableClick: S.default.enable
                        })
                    })]
                })
            }