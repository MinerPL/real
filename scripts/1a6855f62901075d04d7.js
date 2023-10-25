(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["98695"], {
        962429: function(e, t, n) {
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
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return s.default
                },
                useStableMemo: function() {
                    return l.default
                },
                useLazyValue: function() {
                    return r.default
                }
            });
            var s = n("732427"),
                l = n("866490"),
                r = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("773670");

            function l() {
                let [, e] = (0, s.useState)({});
                return (0, s.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("773670");
            let l = {};

            function r(e) {
                let t = (0, s.useRef)(l);
                return t.current === l && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("773670"),
                l = n("962429");
            let r = [];

            function i(e, t) {
                let n = (0, s.useRef)(),
                    i = (0, s.useRef)(r);
                return i.current === r ? (n.current = e(), i.current = t) : !(0, l.default)(t, i.current) && (n.current = e(), i.current = t), n.current
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
            var s = n("920040"),
                l = n("773670"),
                r = n("32608"),
                i = n.n(r),
                a = n("312165"),
                u = n("3958"),
                o = n("773336"),
                d = n("50885"),
                c = n("49111");
            let h = o.isPlatformEmbedded && null != d.default.getDiscordUtils().inputCaptureRegisterElement;
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
                    o.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === u.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: l
                    } = this.state, {
                        disabled: r
                    } = this.props;
                    return h ? (t = d.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !o.isPlatformEmbedded && (e = this.handleComboKeys), (0, s.jsx)(u.default, {
                        disabled: r,
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
                        o.isPlatformEmbedded && !h && (this.gs = new a.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: u.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: u.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === u.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
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
                        mode: u.RecordModes.DEFAULT
                    }
                }
            }
            var m = f
        },
        301450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var s = n("920040"),
                l = n("773670"),
                r = n("427964"),
                i = n.n(r),
                a = n("498225"),
                u = n("77078"),
                o = n("629109"),
                d = n("278108"),
                c = n("996808"),
                h = n("42887"),
                f = n("145131"),
                m = n("476765"),
                p = n("829536"),
                g = n("49111"),
                E = n("860604"),
                R = n("782340"),
                T = n("752730"),
                _ = n("84811");
            let C = (0, m.uid)(),
                M = (0, m.uid)(),
                O = (0, m.uid)();
            class D extends l.PureComponent {
                handleValueRender(e) {
                    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
                }
                renderAutomaticVADToggle() {
                    let {
                        autoThreshold: e
                    } = this.props;
                    return (0, s.jsx)(m.UID, {
                        children: t => (0, s.jsxs)(f.default, {
                            className: _.marginBottom4,
                            children: [(0, s.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H3,
                                children: (0, s.jsx)("label", {
                                    htmlFor: t,
                                    children: R.default.Messages.FORM_LABEL_AUTOMATIC_VAD
                                })
                            }), (0, s.jsx)(u.Switch, {
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
                    if (!e) return (0, s.jsx)(u.Slider, {
                        initialValue: t + 100,
                        onValueRender: this.handleValueRender,
                        onValueChange: this.handleSensitivityChange,
                        "aria-label": R.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
                    })
                }
                render() {
                    return (0, s.jsxs)(u.FormItem, {
                        title: R.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
                        className: _.marginBottom8,
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
            let I = a.default.connectStores([h.default], e => {
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
                        inputMode: r,
                        shortcut: a,
                        delay: c,
                        vadThreshold: h,
                        vadAutoThreshold: f,
                        inputDevices: m,
                        inputDeviceId: E,
                        inputVolume: T,
                        outputDeviceId: I,
                        outputDevices: v,
                        outputVolume: x,
                        speaking: N = !1
                    } = e,
                    b = i.first(m),
                    S = null != b && b.disabled,
                    U = i.first(v),
                    j = null != U && U.disabled,
                    A = [{
                        value: g.InputModes.VOICE_ACTIVITY,
                        name: R.default.Messages.INPUT_MODE_VAD
                    }, {
                        value: g.InputModes.PUSH_TO_TALK,
                        name: R.default.Messages.INPUT_MODE_PTT
                    }];
                return t = r === g.InputModes.PUSH_TO_TALK ? (0, s.jsxs)(l.Fragment, {
                    children: [(0, s.jsx)(u.FormItem, {
                        title: R.default.Messages.FORM_LABEL_SHORTCUT,
                        className: _.marginBottom20,
                        children: (0, s.jsx)(d.default, {
                            defaultValue: a,
                            onChange: e => o.default.setMode(r, {
                                shortcut: e
                            }, n)
                        })
                    }), (0, s.jsxs)(u.FormItem, {
                        className: _.marginBottom8,
                        children: [(0, s.jsx)(u.FormTitle, {
                            id: C,
                            children: R.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                        }), (0, s.jsx)(u.Slider, {
                            initialValue: c,
                            onValueChange: e => o.default.setMode(r, {
                                delay: e
                            }, n),
                            onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
                            maxValue: g.MAX_PTT_RELEASE_DELAY,
                            "aria-labelledby": C
                        })]
                    })]
                }) : (0, s.jsx)(D, {
                    speaking: N,
                    inputMode: r,
                    threshold: h,
                    autoThreshold: f,
                    onThresholdChange: (e, t) => o.default.setMode(r, {
                        threshold: e,
                        autoThreshold: t
                    }, n)
                }), (0, s.jsxs)(l.Fragment, {
                    children: [(0, s.jsx)(u.FormItem, {
                        title: R.default.Messages.FORM_LABEL_INPUT_DEVICE,
                        className: _.marginBottom20,
                        children: (0, s.jsx)(u.SingleSelect, {
                            value: E,
                            onChange: e => o.default.setInputDevice(e, "Voice Settings"),
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
                            isDisabled: S
                        })
                    }), (0, s.jsxs)(u.FormItem, {
                        className: _.marginBottom20,
                        children: [(0, s.jsx)(u.FormTitle, {
                            id: M,
                            children: R.default.Messages.FORM_LABEL_INPUT_VOLUME
                        }), (0, s.jsx)(u.Slider, {
                            initialValue: (0, p.amplitudeToPerceptual)(T),
                            asValueChanges: e => o.default.setInputVolume((0, p.perceptualToAmplitude)(e)),
                            "aria-labelledby": M
                        })]
                    }), (0, s.jsx)(u.FormItem, {
                        title: R.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
                        className: _.marginBottom20,
                        children: (0, s.jsx)(u.SingleSelect, {
                            value: I,
                            onChange: e => o.default.setOutputDevice(e, "Voice Settings"),
                            options: i.map(v, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: j
                        })
                    }), (0, s.jsxs)(u.FormItem, {
                        className: _.marginBottom20,
                        children: [(0, s.jsx)(u.FormTitle, {
                            id: O,
                            children: R.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                        }), (0, s.jsx)(u.Slider, {
                            initialValue: (0, p.amplitudeToPerceptual)(x),
                            maxValue: 200,
                            asValueChanges: e => o.default.setOutputVolume((0, p.perceptualToAmplitude)(e)),
                            "aria-labelledby": O
                        })]
                    }), (0, s.jsx)(u.FormItem, {
                        title: R.default.Messages.FORM_LABEL_INPUT_MODE,
                        className: _.marginBottom20,
                        children: (0, s.jsx)(u.RadioGroup, {
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return o.default.setMode(t, {}, n)
                            },
                            options: A,
                            value: r
                        })
                    }), t]
                })
            });

            function v(e) {
                var t;
                return (0, c.default)(() => {
                    null != g.CURRENT_APP_CONTEXT && e.onClose()
                }), (0, s.jsxs)(u.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-label": R.default.Messages.VOICE_SETTINGS,
                    children: [(0, s.jsxs)(u.ModalHeader, {
                        children: [(0, s.jsxs)(f.default.Child, {
                            children: [(0, s.jsx)(u.FormTitle, {
                                tag: "h1",
                                className: _.marginReset,
                                children: R.default.Messages.VOICE_SETTINGS
                            }), (0, s.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: T.title,
                                children: e.title
                            })]
                        }), (0, s.jsx)(f.default.Child, {
                            grow: 0,
                            children: (0, s.jsx)(u.ModalCloseButton, {
                                onClick: e.onClose
                            })
                        })]
                    }), (0, s.jsx)(u.ModalContent, {
                        children: (0, s.jsx)(I, {
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
            var s = n("813361"),
                l = n("773336"),
                r = n("50885"),
                i = n("13798"),
                a = n("49111");
            let u = [],
                o = (e, t, n) => {
                    let s = (0, l.isWindows)() ? 0 : 1;
                    (e !== a.KeyboardDeviceTypes.MOUSE_BUTTON || n !== s) && u.forEach(s => s._handleEvent(e, t, n))
                };
            class d extends s.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (u = u.filter(e => e !== this)).length && r.default.setOnInputEventCallback(null)
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
                    super(), this.combo = [], u.push(this), 1 === u.length && r.default.setOnInputEventCallback(o)
                }
            }
        },
        996808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("773670"),
                l = n("913144");

            function r(e) {
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
        3958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return l
                },
                default: function() {
                    return _
                }
            });
            var s, l, r = n("920040"),
                i = n("773670"),
                a = n("575482"),
                u = n.n(a),
                o = n("503976"),
                d = n.n(o),
                c = n("427964"),
                h = n.n(c),
                f = n("77078"),
                m = n("13798"),
                p = n("145131"),
                g = n("782340"),
                E = n("293492");
            (s = l || (l = {})).DEFAULT = "DEFAULT", s.RECORDING = "RECORDING";
            let R = {
                [l.DEFAULT]: E.default,
                [l.RECORDING]: E.recording
            };
            class T extends i.PureComponent {
                componentWillUnmount() {
                    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                }
                componentDidUpdate(e) {
                    let {
                        mode: t
                    } = this.props, {
                        mode: n
                    } = e;
                    if (n === t) return;
                    let {
                        _inputRef: s
                    } = this;
                    if (null == s.current) return;
                    let {
                        activeElement: r
                    } = document;
                    t === l.DEFAULT && s.current === r && s.current.blur(), t === l.RECORDING && s.current !== r && s.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: s
                    } = this.props, i = (0, m.toString)(n, !0);
                    e = t === l.RECORDING ? g.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? g.default.Messages.SHORTCUT_RECORDER_BUTTON : g.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let a = t === l.DEFAULT && n.length > 0;
                    return (0, r.jsx)(f.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, r.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: u(E.container, R[t], {
                                [E.hasValue]: a,
                                [E.disabled]: s
                            }),
                            children: (0, r.jsxs)(p.default, {
                                className: E.layout,
                                children: [(0, r.jsx)(p.default.Child, {
                                    className: E.input,
                                    children: (0, r.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: g.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: i,
                                        disabled: this.props.mode !== l.RECORDING || s
                                    })
                                }), (0, r.jsx)(p.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, r.jsxs)(f.Button, {
                                        className: E.button,
                                        disabled: s,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: f.Button.Sizes.MIN,
                                        color: f.ButtonColors.PRIMARY,
                                        children: [(0, r.jsx)("span", {
                                            className: E.text,
                                            children: e
                                        }), (0, r.jsx)("span", {
                                            className: E.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = h.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = i.createRef(), this._containerRef = i.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: s
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != s) this._unregisterNativeRecorder = n(e.id, s);
                            else if (null != s) {
                                let t = new d(e);
                                t.handleKey = s
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || this._mousedownMode !== l.RECORDING) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var _ = T
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return i
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return u
                }
            });
            var s = n("552473"),
                l = n.n(s),
                r = n("365444");
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                a = () => (0, r.useLazyValue)(() => i()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        }
    }
]);