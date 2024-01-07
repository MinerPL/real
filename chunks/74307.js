            "use strict";
            n.r(t), n.d(t, {
                TextArea: function() {
                    return T
                }
            }), n("424973");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("748820"),
                l = n("718776"),
                u = n("516826"),
                c = n("741662"),
                d = n("324584"),
                f = n("782340"),
                E = n("253469"),
                h = n("905518"),
                p = n("862839");
            let _ = (0, o.v4)(),
                S = (0, o.v4)(),
                m = (0, o.v4)();
            class T extends r.Component {
                getPaddingRight() {
                    let {
                        maxLength: e
                    } = this.props;
                    return null == e ? 10 : 7.23 * "".concat(e).length + 10
                }
                getCharsLeftLength() {
                    let {
                        maxLength: e,
                        value: t
                    } = this.props;
                    if (null == e) return null;
                    let n = null != t ? t.length : 0;
                    return e - n
                }
                getIsOverflowing() {
                    let e = this.getCharsLeftLength();
                    return null != e && e < 0
                }
                getIsUnderflowing() {
                    let {
                        minLength: e,
                        value: t
                    } = this.props;
                    if (null == e) return !1;
                    let n = null != t ? t.length : 0;
                    return n < e
                }
                renderCharacterCount() {
                    if (this.props.showCharacterCount) {
                        var e;
                        let {
                            value: t,
                            maxLength: n
                        } = this.props;
                        return (0, i.jsxs)("div", {
                            className: a(E.maxLength, {
                                [E.errorOverflow]: this.hasError()
                            }),
                            "aria-hidden": "true",
                            children: [null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0, " ", null != n && "/ ".concat(n)]
                        })
                    }
                    return null
                }
                renderMaxLength() {
                    if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
                    let e = this.getCharsLeftLength();
                    return null == e ? null : (0, i.jsx)("div", {
                        className: a(E.maxLength, {
                            [E.errorOverflow]: e < 0
                        }),
                        "aria-hidden": "true",
                        children: e
                    })
                }
                hasError() {
                    return null != this.props.error || null != this.context.error || !1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1)
                }
                getErrorMessage() {
                    let {
                        error: e,
                        maxLength: t,
                        minLength: n
                    } = this.props, i = this.getIsOverflowing() ? f.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                        maxLength: t
                    }) : null, r = this.getIsUnderflowing() ? f.default.Messages.MINIMUM_LENGTH_ERROR.format({
                        minLength: n
                    }) : null;
                    return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : r
                }
                renderErrorMessage() {
                    let e = this.getErrorMessage();
                    return null == e ? null : (0, i.jsx)("div", {
                        id: _,
                        className: E.errorMessage,
                        children: e
                    })
                }
                render() {
                    var e, t;
                    let {
                        disabled: n,
                        value: r,
                        placeholder: s,
                        autoFocus: o,
                        minLength: u,
                        maxLength: _,
                        allowOverflow: T,
                        spellCheck: g,
                        resizeable: I,
                        className: C,
                        id: v,
                        rows: A,
                        flex: R,
                        autosize: N,
                        required: O,
                        onInvalid: D,
                        inputRef: y
                    } = this.props, P = N ? d.TextAreaAutosize : "textarea", L = this.hasError(), b = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, M = this.getAriaDescribedBy();
                    return (0, i.jsxs)("div", {
                        className: a(h.inputWrapper, {
                            [E.flex]: R
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: a(E.inputMaxLength, {
                                [E.flex]: R
                            }),
                            children: [(0, i.jsx)(l.FocusRing, {
                                children: (0, i.jsx)(P, {
                                    type: "text",
                                    className: a(h.inputDefault, E.textArea, p.scrollbarDefault, C, {
                                        [h.error]: L,
                                        [h.disabled]: n,
                                        [E.resizeable]: I
                                    }),
                                    "aria-labelledby": b,
                                    "aria-describedby": M,
                                    "aria-invalid": L,
                                    style: {
                                        paddingRight: this.getPaddingRight()
                                    },
                                    id: v,
                                    disabled: n,
                                    placeholder: s,
                                    value: r,
                                    autoFocus: o,
                                    minLength: u,
                                    maxLength: T ? void 0 : _,
                                    spellCheck: g,
                                    required: O,
                                    onChange: this.onChange,
                                    onBlur: this.onBlur,
                                    onFocus: this.onFocus,
                                    onKeyDown: this.onKeyDown,
                                    onInvalid: D,
                                    rows: A,
                                    ref: y
                                })
                            }), null != u && (0, i.jsx)(c.HiddenVisually, {
                                id: S,
                                children: f.default.Messages.MINIMUM_LENGTH.format({
                                    minLength: u
                                })
                            }), null != _ && (0, i.jsx)(c.HiddenVisually, {
                                id: m,
                                children: f.default.Messages.MAXIMUM_LENGTH.format({
                                    maxLength: _
                                })
                            }), this.renderCharacterCount(), this.renderMaxLength()]
                        }), this.renderErrorMessage()]
                    })
                }
                constructor(e) {
                    var t;
                    super(e), this.getAriaDescribedBy = () => {
                        var e;
                        let {
                            maxLength: t,
                            minLength: n,
                            error: i
                        } = this.props, r = [], s = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
                        return null != s && r.push(s), null != i ? r.push(i) : (null != t && r.push(m), null != n && r.push(S)), r.length > 0 ? r.join(" ") : void 0
                    }, this.onChange = e => {
                        let {
                            onChange: t,
                            name: n
                        } = this.props;
                        null == t || t(e.currentTarget.value, n), this.setState({
                            dirty: !0
                        })
                    }, this.onFocus = e => {
                        let {
                            onFocus: t,
                            name: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.onBlur = e => {
                        let {
                            onBlur: t,
                            name: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.onKeyDown = e => {
                        let {
                            onKeyDown: t
                        } = this.props;
                        null == t || t(e)
                    }, this.state = {
                        dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
                    }
                }
            }
            T.contextType = u.FormContext, T.defaultProps = {
                name: "",
                disabled: !1,
                placeholder: "",
                autoFocus: !1,
                resizeable: !1,
                flex: !1,
                autosize: !1,
                rows: 3,
                allowOverflow: !1
            }