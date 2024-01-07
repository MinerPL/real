            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return s
                },
                default: function() {
                    return D
                }
            }), n("222007");
            var s, i, a = n("37983"),
                u = n("884691"),
                o = n("414456"),
                d = n.n(o),
                r = n("800648"),
                l = n.n(r),
                c = n("917351"),
                p = n.n(c),
                f = n("77078"),
                _ = n("13798"),
                m = n("145131"),
                h = n("782340"),
                E = n("523192");
            (i = s || (s = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
            let g = {
                DEFAULT: E.default,
                RECORDING: E.recording
            };
            class S extends u.PureComponent {
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
                        activeElement: i
                    } = document;
                    "DEFAULT" === t && s.current === i && s.current.blur(), "RECORDING" === t && s.current !== i && s.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: s
                    } = this.props, i = (0, _.toString)(n, !0);
                    e = "RECORDING" === t ? h.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? h.default.Messages.SHORTCUT_RECORDER_BUTTON : h.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let u = "DEFAULT" === t && n.length > 0;
                    return (0, a.jsx)(f.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, a.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: d(E.container, g[t], {
                                [E.hasValue]: u,
                                [E.disabled]: s
                            }),
                            children: (0, a.jsxs)(m.default, {
                                className: E.layout,
                                children: [(0, a.jsx)(m.default.Child, {
                                    className: E.input,
                                    children: (0, a.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: h.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: i,
                                        disabled: "RECORDING" !== this.props.mode || s
                                    })
                                }), (0, a.jsx)(m.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, a.jsxs)(f.Button, {
                                        className: E.button,
                                        disabled: s,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: f.Button.Sizes.MIN,
                                        color: f.ButtonColors.PRIMARY,
                                        children: [(0, a.jsx)("span", {
                                            className: E.text,
                                            children: e
                                        }), (0, a.jsx)("span", {
                                            className: E.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = p.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = u.createRef(), this._containerRef = u.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: s
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != s) this._unregisterNativeRecorder = n(e.id, s);
                            else if (null != s) {
                                let t = new l(e);
                                t.handleKey = s
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || "RECORDING" !== this._mousedownMode) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var D = S