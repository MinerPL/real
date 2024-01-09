            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("917351"),
                u = n.n(a),
                o = n("446674"),
                d = n("77078"),
                r = n("629109"),
                l = n("278108"),
                c = n("996808"),
                p = n("42887"),
                f = n("145131"),
                _ = n("476765"),
                m = n("829536"),
                h = n("49111"),
                E = n("353927"),
                g = n("782340"),
                S = n("686084"),
                D = n("926622");
            let T = (0, _.uid)(),
                I = (0, _.uid)(),
                O = (0, _.uid)();
            class A extends i.PureComponent {
                handleValueRender(e) {
                    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
                }
                renderAutomaticVADToggle() {
                    let {
                        autoThreshold: e
                    } = this.props;
                    return (0, s.jsx)(_.UID, {
                        children: t => (0, s.jsxs)(f.default, {
                            className: D.marginBottom4,
                            children: [(0, s.jsx)(d.FormTitle, {
                                tag: d.FormTitleTags.H3,
                                children: (0, s.jsx)("label", {
                                    htmlFor: t,
                                    children: g.default.Messages.FORM_LABEL_AUTOMATIC_VAD
                                })
                            }), (0, s.jsx)(d.Switch, {
                                id: t,
                                checked: e,
                                onChange: this.handleAutoThresholdChange
                            })]
                        })
                    })
                }
                renderSlider() {
                    let {
                        autoThreshold: e,
                        threshold: t
                    } = this.props;
                    if (!e) return (0, s.jsx)(d.Slider, {
                        initialValue: t + 100,
                        onValueRender: this.handleValueRender,
                        onValueChange: this.handleSensitivityChange,
                        "aria-label": g.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
                    })
                }
                render() {
                    return (0, s.jsxs)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
                        className: D.marginBottom8,
                        children: [this.renderAutomaticVADToggle(), this.renderSlider()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleAutoThresholdChange = e => {
                        let {
                            onThresholdChange: t,
                            threshold: n
                        } = this.props;
                        null == t || t(n, e)
                    }, this.handleSensitivityChange = e => {
                        let {
                            onThresholdChange: t,
                            autoThreshold: n
                        } = this.props;
                        null == t || t(-((100 - e) * 1), n)
                    }
                }
            }
            let v = o.default.connectStores([p.default], e => {
                let {
                    mediaEngineContext: t
                } = e;
                return {
                    inputVolume: p.default.getInputVolume(),
                    outputVolume: p.default.getOutputVolume(),
                    inputDeviceId: p.default.getInputDeviceId(),
                    inputDevices: p.default.getInputDevices(),
                    outputDevices: p.default.getOutputDevices(),
                    outputDeviceId: p.default.getOutputDeviceId(),
                    inputMode: p.default.getMode(t),
                    shortcut: p.default.getModeOptions(t).shortcut,
                    vadThreshold: p.default.getModeOptions(t).threshold,
                    vadAutoThreshold: p.default.getModeOptions(t).autoThreshold,
                    delay: p.default.getModeOptions(t).delay
                }
            })(e => {
                let t, {
                        mediaEngineContext: n,
                        inputMode: a,
                        shortcut: o,
                        delay: c,
                        vadThreshold: p,
                        vadAutoThreshold: f,
                        inputDevices: _,
                        inputDeviceId: E,
                        inputVolume: S,
                        outputDeviceId: v,
                        outputDevices: b,
                        outputVolume: N,
                        speaking: C = !1
                    } = e,
                    x = u.first(_),
                    M = null != x && x.disabled,
                    U = u.first(b),
                    R = null != U && U.disabled,
                    y = [{
                        value: h.InputModes.VOICE_ACTIVITY,
                        name: g.default.Messages.INPUT_MODE_VAD
                    }, {
                        value: h.InputModes.PUSH_TO_TALK,
                        name: g.default.Messages.INPUT_MODE_PTT
                    }];
                return t = a === h.InputModes.PUSH_TO_TALK ? (0, s.jsxs)(i.Fragment, {
                    children: [(0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_SHORTCUT,
                        className: D.marginBottom20,
                        children: (0, s.jsx)(l.default, {
                            defaultValue: o,
                            onChange: e => r.default.setMode(a, {
                                shortcut: e
                            }, n)
                        })
                    }), (0, s.jsxs)(d.FormItem, {
                        className: D.marginBottom8,
                        children: [(0, s.jsx)(d.FormTitle, {
                            id: T,
                            children: g.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                        }), (0, s.jsx)(d.Slider, {
                            initialValue: c,
                            onValueChange: e => r.default.setMode(a, {
                                delay: e
                            }, n),
                            onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
                            maxValue: h.MAX_PTT_RELEASE_DELAY,
                            "aria-labelledby": T
                        })]
                    })]
                }) : (0, s.jsx)(A, {
                    speaking: C,
                    inputMode: a,
                    threshold: p,
                    autoThreshold: f,
                    onThresholdChange: (e, t) => r.default.setMode(a, {
                        threshold: e,
                        autoThreshold: t
                    }, n)
                }), (0, s.jsxs)(i.Fragment, {
                    children: [(0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_INPUT_DEVICE,
                        className: D.marginBottom20,
                        children: (0, s.jsx)(d.SingleSelect, {
                            value: E,
                            onChange: e => r.default.setInputDevice(e, "Voice Settings"),
                            options: u.map(_, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: M
                        })
                    }), (0, s.jsxs)(d.FormItem, {
                        className: D.marginBottom20,
                        children: [(0, s.jsx)(d.FormTitle, {
                            id: I,
                            children: g.default.Messages.FORM_LABEL_INPUT_VOLUME
                        }), (0, s.jsx)(d.Slider, {
                            initialValue: (0, m.amplitudeToPerceptual)(S),
                            asValueChanges: e => r.default.setInputVolume((0, m.perceptualToAmplitude)(e)),
                            "aria-labelledby": I
                        })]
                    }), (0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
                        className: D.marginBottom20,
                        children: (0, s.jsx)(d.SingleSelect, {
                            value: v,
                            onChange: e => r.default.setOutputDevice(e, "Voice Settings"),
                            options: u.map(b, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: R
                        })
                    }), (0, s.jsxs)(d.FormItem, {
                        className: D.marginBottom20,
                        children: [(0, s.jsx)(d.FormTitle, {
                            id: O,
                            children: g.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                        }), (0, s.jsx)(d.Slider, {
                            initialValue: (0, m.amplitudeToPerceptual)(N),
                            maxValue: 200,
                            asValueChanges: e => r.default.setOutputVolume((0, m.perceptualToAmplitude)(e)),
                            "aria-labelledby": O
                        })]
                    }), (0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_INPUT_MODE,
                        className: D.marginBottom20,
                        children: (0, s.jsx)(d.RadioGroup, {
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return r.default.setMode(t, {}, n)
                            },
                            options: y,
                            value: a
                        })
                    }), t]
                })
            });

            function b(e) {
                var t;
                return (0, c.default)(() => {
                    null != h.CURRENT_APP_CONTEXT && e.onClose()
                }), (0, s.jsxs)(d.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-label": g.default.Messages.VOICE_SETTINGS,
                    children: [(0, s.jsxs)(d.ModalHeader, {
                        children: [(0, s.jsxs)(f.default.Child, {
                            children: [(0, s.jsx)(d.FormTitle, {
                                tag: "h1",
                                className: D.marginReset,
                                children: g.default.Messages.VOICE_SETTINGS
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: S.title,
                                children: e.title
                            })]
                        }), (0, s.jsx)(f.default.Child, {
                            grow: 0,
                            children: (0, s.jsx)(d.ModalCloseButton, {
                                onClick: e.onClose
                            })
                        })]
                    }), (0, s.jsx)(d.ModalContent, {
                        children: (0, s.jsx)(v, {
                            mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : E.MediaEngineContextTypes.DEFAULT
                        })
                    })]
                })
            }