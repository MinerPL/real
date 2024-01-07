            "use strict";
            n.r(t), n.d(t, {
                InputError: function() {
                    return p
                },
                TextInput: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("907002"),
                l = n("718776"),
                u = n("516826"),
                c = n("577776"),
                d = n("634634"),
                f = n("782340"),
                E = n("905518");
            let h = {
                DEFAULT: E.inputDefault,
                MINI: E.inputMini
            };

            function p(e) {
                let {
                    error: t
                } = e, n = (0, o.useTransition)(t, {
                    config: {
                        tension: 250,
                        clamp: !0
                    },
                    from: {
                        marginTop: 0,
                        height: 0,
                        opacity: 0,
                        transform: "translate3d(0, -100%, 0)"
                    },
                    enter: {
                        marginTop: 4,
                        height: "auto",
                        opacity: 1,
                        transform: "translate3d(0, -0px, 0)"
                    },
                    leave: {
                        marginTop: 0,
                        height: 0,
                        opacity: 0,
                        transform: "translate3d(0, -100%, 0)"
                    }
                }), r = (0, d.default)(t);
                return (0, i.jsx)(i.Fragment, {
                    children: n((e, n, s) => {
                        let {
                            key: a
                        } = s, {
                            transform: l,
                            ...u
                        } = e;
                        return null != n && "" !== n ? (0, i.jsx)(o.animated.div, {
                            style: {
                                ...u,
                                overflow: "hidden"
                            },
                            children: (0, i.jsx)(o.animated.div, {
                                style: {
                                    transform: l
                                },
                                children: (0, i.jsx)(c.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    children: null != t && "" !== t ? t : r
                                })
                            })
                        }, a) : null
                    })
                })
            }
            class _ extends r.Component {
                render() {
                    var e, t;
                    let {
                        className: n,
                        inputClassName: r,
                        inputPrefix: s,
                        disabled: o,
                        size: u,
                        editable: c,
                        inputRef: d,
                        prefixElement: f,
                        focusProps: h,
                        ..._
                    } = this.props, S = null !== (t = _["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
                    return (0, i.jsxs)("div", {
                        className: a(E.inputWrapper, n),
                        children: [null != f && f, null != s ? (0, i.jsx)("span", {
                            className: E.inputPrefix,
                            children: s
                        }) : null, (0, i.jsx)(l.FocusRing, {
                            ...h,
                            children: (0, i.jsx)("input", {
                                className: a(u, r, {
                                    [E.error]: this.hasError(),
                                    [E.disabled]: o,
                                    [E.editable]: c
                                }),
                                disabled: o,
                                readOnly: !1 === c || void 0,
                                ..._,
                                "aria-labelledby": S,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                ref: d
                            })
                        }), (0, i.jsx)(p, {
                            error: this.getError()
                        })]
                    })
                }
                constructor(e) {
                    var t;
                    super(e), this.hasError = () => null != this.props.error && !!(this.props.error.length > 0) || !1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()), this.getError = () => {
                        let {
                            error: e,
                            minLength: t,
                            maxLength: n
                        } = this.props, i = this.getIsUnderFlowing() ? f.default.Messages.MINIMUM_LENGTH_ERROR.format({
                            minLength: t
                        }) : null, r = this.getIsOverFlowing() ? f.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                            maxLength: n
                        }) : null;
                        return null != e && e.length < 1 || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != i ? i : r
                    }, this.getIsUnderFlowing = () => {
                        var e;
                        let {
                            value: t,
                            minLength: n
                        } = this.props;
                        return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) < n
                    }, this.getIsOverFlowing = () => {
                        var e;
                        let {
                            value: t,
                            maxLength: n
                        } = this.props;
                        return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) > n
                    }, this.onChange = e => {
                        var t, n;
                        null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, e.currentTarget.value, this.props.name), this.setState({
                            dirty: !0
                        })
                    }, this.onFocus = e => {
                        var t, n;
                        null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e, this.props.name)
                    }, this.onBlur = e => {
                        var t, n;
                        null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e, this.props.name)
                    }, this.state = {
                        dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
                    }
                }
            }
            _.Sizes = h, _.contextType = u.FormContext, _.defaultProps = {
                name: "",
                size: h.DEFAULT,
                disabled: !1,
                type: "text",
                placeholder: "",
                autoFocus: !1,
                maxLength: 999
            }