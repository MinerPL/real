            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("145131"),
                o = n("616389");
            class u extends a.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, s.jsx)("input", {
                        ref: this.setCodeBlockRef,
                        className: r(o.input, e),
                        maxLength: 1,
                        value: null != this.props.code ? this.props.code : void 0,
                        autoFocus: this.props.autoFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange
                    })
                }
                focus() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
                }
                blur() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
                }
                constructor(...e) {
                    super(...e), this.setCodeBlockRef = e => {
                        this._codeBlockRef = e
                    }, this.handleKeyDown = e => {
                        let t = 8 === e.which || 37 === e.which || 39 === e.which,
                            n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                        !t && !n && e.preventDefault();
                        let {
                            onKeyDown: s
                        } = this.props;
                        null == s || s(e)
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null == t || t(e.currentTarget.value)
                    }
                }
            }
            u.defaultProps = {
                autoFocus: !1
            };
            class d extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        inputClassName: t
                    } = this.props, {
                        codes: n
                    } = this.state, a = [];
                    for (let e = 0; e < n.length; e++) e === n.length / 2 && a.push((0, s.jsx)("div", {
                        className: o.spacer
                    }, "spacer")), a.push((0, s.jsx)(u, {
                        ref: t => this.setCodeBlockRef(e, t),
                        code: n[e],
                        autoFocus: 0 === e,
                        onChange: t => this.handleChange(e, t),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        className: t
                    }, e));
                    return (0, s.jsx)(i.default, {
                        align: i.default.Align.CENTER,
                        justify: i.default.Justify.CENTER,
                        className: e,
                        children: a
                    })
                }
                setCodeBlockRef(e, t) {
                    this._codeBlockRefs[e] = t
                }
                handleChange(e, t) {
                    this.state.codes[e] = t;
                    let n = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof n) this.submit(n);
                    else {
                        let e = this._codeBlockRefs[n];
                        null == e || e.focus()
                    }
                }
                handleKeyDown(e, t) {
                    let {
                        codes: n
                    } = this.state;
                    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                        let t = e - 1;
                        n[t] = "";
                        let s = this._codeBlockRefs[t];
                        null == s || s.focus()
                    }
                }
                getCodeOrFirstEmptyIndex() {
                    let {
                        codes: e
                    } = this.state, t = "";
                    for (let n = 0; n < e.length; n++) {
                        if (isNaN(parseInt(e[n]))) return n;
                        t += e[n]
                    }
                    return t
                }
                submit(e) {
                    let {
                        onSubmit: t
                    } = this.props;
                    null == t || t(e)
                }
                constructor(e) {
                    super(e), this._codeBlockRefs = Array(this.props.count), this.state = {
                        codes: Array(e.count)
                    }
                }
            }
            d.defaultProps = {
                count: 6
            };
            var c = d