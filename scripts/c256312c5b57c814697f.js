(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51152"], {
        48174: function(e, t, n) {
            "use strict";

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return s.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var s = n("14716"),
                l = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("884691");

            function l() {
                let [, e] = (0, s.useState)({});
                return (0, s.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691");
            let l = {};

            function a(e) {
                let t = (0, s.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("884691"),
                l = n("48174");
            let a = [];

            function i(e, t) {
                let n = (0, s.useRef)(),
                    i = (0, s.useRef)(a);
                return i.current === a ? (n.current = e(), i.current = t) : !(0, l.default)(t, i.current) && (n.current = e(), i.current = t), n.current
            }
        },
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("499032"),
                i = n.n(a),
                r = n("312165"),
                o = n("3958"),
                u = n("773336"),
                d = n("50885"),
                c = n("49111");
            let h = u.isPlatformEmbedded && null != d.default.getDiscordUtils().inputCaptureRegisterElement;
            class f extends l.PureComponent {
                componentDidMount() {
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1, this.cleanUp()
                }
                componentDidUpdate(e) {
                    this.props.defaultValue !== e.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                }
                cleanUp() {
                    u.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === o.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: l
                    } = this.state, {
                        disabled: a
                    } = this.props;
                    return h ? (t = d.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !u.isPlatformEmbedded && (e = this.handleComboKeys), (0, s.jsx)(o.default, {
                        disabled: a,
                        value: n,
                        mode: l,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: h
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        u.isPlatformEmbedded && !h && (this.gs = new r.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: o.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: o.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === o.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, i(e), c.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: s
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return s === t
                            }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, s, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
                        }
                    }, this.handleGSChange = e => {
                        if (!1 === this._mounted) return;
                        let t = [...e.combo];
                        this.handleComboChange(t)
                    }, this.handleNativeChange = e => {
                        e.length > 0 && this.handleComboChange(e), this.recordEnd()
                    };
                    let {
                        defaultValue: t
                    } = e;
                    this.state = {
                        codes: t,
                        mode: o.RecordModes.DEFAULT
                    }
                }
            }
            var m = f
        },
        301450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("917351"),
                i = n.n(a),
                r = n("446674"),
                o = n("77078"),
                u = n("629109"),
                d = n("278108"),
                c = n("996808"),
                h = n("42887"),
                f = n("145131"),
                m = n("476765"),
                g = n("829536"),
                p = n("49111"),
                E = n("353927"),
                T = n("782340"),
                _ = n("686084"),
                C = n("926622");
            let M = (0, m.uid)(),
                O = (0, m.uid)(),
                v = (0, m.uid)();
            class S extends l.PureComponent {
                handleValueRender(e) {
                    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
                }
                renderAutomaticVADToggle() {
                    let {
                        autoThreshold: e
                    } = this.props;
                    return (0, s.jsx)(m.UID, {
                        children: t => (0, s.jsxs)(f.default, {
                            className: C.marginBottom4,
                            children: [(0, s.jsx)(o.FormTitle, {
                                tag: o.FormTitleTags.H3,
                                children: (0, s.jsx)("label", {
                                    htmlFor: t,
                                    children: T.default.Messages.FORM_LABEL_AUTOMATIC_VAD
                                })
                            }), (0, s.jsx)(o.Switch, {
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
                    if (!e) return (0, s.jsx)(o.Slider, {
                        initialValue: t + 100,
                        onValueRender: this.handleValueRender,
                        onValueChange: this.handleSensitivityChange,
                        "aria-label": T.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
                    })
                }
                render() {
                    return (0, s.jsxs)(o.FormItem, {
                        title: T.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
                        className: C.marginBottom8,
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
            let x = r.default.connectStores([h.default], e => {
                let {
                    mediaEngineContext: t
                } = e;
                return {
                    inputVolume: h.default.getInputVolume(),
                    outputVolume: h.default.getOutputVolume(),
                    inputDeviceId: h.default.getInputDeviceId(),
                    inputDevices: h.default.getInputDevices(),
                    outputDevices: h.default.getOutputDevices(),
                    outputDeviceId: h.default.getOutputDeviceId(),
                    inputMode: h.default.getMode(t),
                    shortcut: h.default.getModeOptions(t).shortcut,
                    vadThreshold: h.default.getModeOptions(t).threshold,
                    vadAutoThreshold: h.default.getModeOptions(t).autoThreshold,
                    delay: h.default.getModeOptions(t).delay
                }
            })(e => {
                let t, {
                        mediaEngineContext: n,
                        inputMode: a,
                        shortcut: r,
                        delay: c,
                        vadThreshold: h,
                        vadAutoThreshold: f,
                        inputDevices: m,
                        inputDeviceId: E,
                        inputVolume: _,
                        outputDeviceId: x,
                        outputDevices: I,
                        outputVolume: R,
                        speaking: b = !1
                    } = e,
                    D = i.first(m),
                    V = null != D && D.disabled,
                    A = i.first(I),
                    L = null != A && A.disabled,
                    N = [{
                        value: p.InputModes.VOICE_ACTIVITY,
                        name: T.default.Messages.INPUT_MODE_VAD
                    }, {
                        value: p.InputModes.PUSH_TO_TALK,
                        name: T.default.Messages.INPUT_MODE_PTT
                    }];
                return t = a === p.InputModes.PUSH_TO_TALK ? (0, s.jsxs)(l.Fragment, {
                    children: [(0, s.jsx)(o.FormItem, {
                        title: T.default.Messages.FORM_LABEL_SHORTCUT,
                        className: C.marginBottom20,
                        children: (0, s.jsx)(d.default, {
                            defaultValue: r,
                            onChange: e => u.default.setMode(a, {
                                shortcut: e
                            }, n)
                        })
                    }), (0, s.jsxs)(o.FormItem, {
                        className: C.marginBottom8,
                        children: [(0, s.jsx)(o.FormTitle, {
                            id: M,
                            children: T.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                        }), (0, s.jsx)(o.Slider, {
                            initialValue: c,
                            onValueChange: e => u.default.setMode(a, {
                                delay: e
                            }, n),
                            onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
                            maxValue: p.MAX_PTT_RELEASE_DELAY,
                            "aria-labelledby": M
                        })]
                    })]
                }) : (0, s.jsx)(S, {
                    speaking: b,
                    inputMode: a,
                    threshold: h,
                    autoThreshold: f,
                    onThresholdChange: (e, t) => u.default.setMode(a, {
                        threshold: e,
                        autoThreshold: t
                    }, n)
                }), (0, s.jsxs)(l.Fragment, {
                    children: [(0, s.jsx)(o.FormItem, {
                        title: T.default.Messages.FORM_LABEL_INPUT_DEVICE,
                        className: C.marginBottom20,
                        children: (0, s.jsx)(o.SingleSelect, {
                            value: E,
                            onChange: e => u.default.setInputDevice(e, "Voice Settings"),
                            options: i.map(m, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: V
                        })
                    }), (0, s.jsxs)(o.FormItem, {
                        className: C.marginBottom20,
                        children: [(0, s.jsx)(o.FormTitle, {
                            id: O,
                            children: T.default.Messages.FORM_LABEL_INPUT_VOLUME
                        }), (0, s.jsx)(o.Slider, {
                            initialValue: (0, g.amplitudeToPerceptual)(_),
                            asValueChanges: e => u.default.setInputVolume((0, g.perceptualToAmplitude)(e)),
                            "aria-labelledby": O
                        })]
                    }), (0, s.jsx)(o.FormItem, {
                        title: T.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
                        className: C.marginBottom20,
                        children: (0, s.jsx)(o.SingleSelect, {
                            value: x,
                            onChange: e => u.default.setOutputDevice(e, "Voice Settings"),
                            options: i.map(I, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: L
                        })
                    }), (0, s.jsxs)(o.FormItem, {
                        className: C.marginBottom20,
                        children: [(0, s.jsx)(o.FormTitle, {
                            id: v,
                            children: T.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                        }), (0, s.jsx)(o.Slider, {
                            initialValue: (0, g.amplitudeToPerceptual)(R),
                            maxValue: 200,
                            asValueChanges: e => u.default.setOutputVolume((0, g.perceptualToAmplitude)(e)),
                            "aria-labelledby": v
                        })]
                    }), (0, s.jsx)(o.FormItem, {
                        title: T.default.Messages.FORM_LABEL_INPUT_MODE,
                        className: C.marginBottom20,
                        children: (0, s.jsx)(o.RadioGroup, {
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return u.default.setMode(t, {}, n)
                            },
                            options: N,
                            value: a
                        })
                    }), t]
                })
            });

            function I(e) {
                var t;
                return (0, c.default)(() => {
                    null != p.CURRENT_APP_CONTEXT && e.onClose()
                }), (0, s.jsxs)(o.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-label": T.default.Messages.VOICE_SETTINGS,
                    children: [(0, s.jsxs)(o.ModalHeader, {
                        children: [(0, s.jsxs)(f.default.Child, {
                            children: [(0, s.jsx)(o.FormTitle, {
                                tag: "h1",
                                className: C.marginReset,
                                children: T.default.Messages.VOICE_SETTINGS
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: _.title,
                                children: e.title
                            })]
                        }), (0, s.jsx)(f.default.Child, {
                            grow: 0,
                            children: (0, s.jsx)(o.ModalCloseButton, {
                                onClick: e.onClose
                            })
                        })]
                    }), (0, s.jsx)(o.ModalContent, {
                        children: (0, s.jsx)(x, {
                            mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : E.MediaEngineContextTypes.DEFAULT
                        })
                    })]
                })
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("44170"),
                l = n("773336"),
                a = n("50885"),
                i = n("13798"),
                r = n("49111");
            let o = [],
                u = (e, t, n) => {
                    let s = (0, l.isWindows)() ? 0 : 1;
                    (e !== r.KeyboardDeviceTypes.MOUSE_BUTTON || n !== s) && o.forEach(s => s._handleEvent(e, t, n))
                };
            class d extends s.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && a.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, i.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [s, l] = t;
                        return !(s === e && l === n)
                    }) : (this.combo.push([e, n, (0, i.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], o.push(this), 1 === o.length && a.default.setOnInputEventCallback(u)
                }
            }
        },
        996808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691"),
                l = n("913144");

            function a(e) {
                let t = (0, s.useRef)(e);
                (0, s.useEffect)(() => {
                    t.current = e
                }, [e]), (0, s.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return l.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            l.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("49111");

            function l(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(s.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(s.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("845579"),
                l = n("42887"),
                a = n("829536");

            function i(e) {
                let t = function() {
                        var e;
                        let t = s.SoundboardSettings.getSetting();
                        return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(l.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        }
    }
]);