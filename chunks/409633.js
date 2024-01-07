            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("145131"),
                o = s("166499"),
                d = s("926622");
            class u extends n.PureComponent {
                render() {
                    let {
                        focused: e
                    } = this.state, {
                        value: t,
                        placeholder: s,
                        error: n,
                        className: l,
                        maxLength: u,
                        autoFocus: c,
                        prefix: E,
                        disabled: _
                    } = this.props;
                    return (0, a.jsxs)(r.default, {
                        align: r.default.Align.CENTER,
                        justify: r.default.Justify.START,
                        className: i(o.prefixInput, l, {
                            [o.focused]: e,
                            [o.error]: n
                        }),
                        onClick: this.handleFocusInput,
                        children: [(0, a.jsx)(r.default.Child, {
                            grow: 0,
                            className: o.prefixInputPrefix,
                            children: E
                        }), (0, a.jsx)(r.default.Child, {
                            className: d.marginReset,
                            children: (0, a.jsx)("input", {
                                ref: this.setInputRef,
                                className: o.prefixInputInput,
                                value: t,
                                placeholder: s,
                                maxLength: u,
                                onChange: this.handleChange,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                autoFocus: c,
                                disabled: _
                            })
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.setInputRef = e => {
                        this._inputRef = e
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        t(e.currentTarget.value)
                    }, this.handleFocus = () => {
                        this.setState({
                            focused: !0
                        })
                    }, this.handleBlur = () => {
                        this.setState({
                            focused: !1
                        })
                    }, this.handleFocusInput = () => {
                        null != this._inputRef && this._inputRef.focus()
                    };
                    let {
                        autoFocus: t
                    } = this.props;
                    this.state = {
                        focused: null != t && t
                    }
                }
            }
            var c = u