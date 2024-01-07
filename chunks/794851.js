            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var n = s("37983"),
                i = s("884691"),
                a = s("414456"),
                o = s.n(a),
                l = s("592861"),
                r = s("77078"),
                u = s("189613"),
                d = s("145131"),
                h = s("461380"),
                c = s("782340"),
                E = s("323299"),
                R = s("212029"),
                f = s("926622");
            class p extends i.PureComponent {
                render() {
                    let {
                        countryCode: e,
                        phone: t,
                        open: s
                    } = this.state, {
                        className: i,
                        submitting: a
                    } = this.props, [, l] = e.split("+");
                    return (0, n.jsxs)(d.default, {
                        className: o(E.phoneField, R.elevationLow, i),
                        align: d.default.Align.CENTER,
                        grow: 0,
                        children: [(0, n.jsxs)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            className: E.countryButton,
                            color: r.ButtonColors.PRIMARY,
                            innerClassName: E.countryButtonInner,
                            onClick: this.handleTogglePopout,
                            children: [(0, n.jsxs)(d.default, {
                                className: o(E.countryCodeContainer, f.marginReset),
                                justify: d.default.Justify.CENTER,
                                children: [(0, n.jsx)("div", {
                                    className: E.plusSign,
                                    children: "+"
                                }), (0, n.jsx)("div", {
                                    className: E.countryCode,
                                    children: l
                                })]
                            }), (0, n.jsx)(h.default, {
                                foreground: E.phoneFieldExpand,
                                expanded: s,
                                width: 16,
                                height: 16
                            })]
                        }), (0, n.jsx)("input", {
                            "aria-label": c.default.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                            className: E.inputField,
                            value: t,
                            onChange: this.handleChange,
                            onKeyPress: this.handleKeyPress,
                            autoFocus: !0
                        }), (0, n.jsx)(r.Button, {
                            className: E.sendButton,
                            size: r.ButtonSizes.SMALL,
                            submitting: a,
                            onClick: this.handleSubmit,
                            children: c.default.Messages.SEND
                        }), s ? (0, n.jsx)(u.default, {
                            onClick: this.handleClick
                        }) : null]
                    })
                }
                closePopout() {
                    this.state.open && this.setState({
                        open: !1
                    })
                }
                constructor(e) {
                    super(e), this.handleChange = e => {
                        this.closePopout(), this.setState({
                            phone: e.currentTarget.value
                        })
                    }, this.handleKeyPress = e => {
                        this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
                    }, this.handleSubmit = () => {
                        let {
                            onSubmit: e,
                            submitting: t
                        } = this.props, {
                            countryCode: s,
                            phone: n
                        } = this.state;
                        !t && (null == e || e("".concat(s).concat(n)))
                    }, this.handleTogglePopout = () => {
                        this.setState({
                            open: !this.state.open
                        })
                    }, this.handleClick = e => {
                        let [t, s] = e.code.split(" ");
                        this.setState({
                            open: !1,
                            countryCode: t,
                            phone: null != s ? s : ""
                        })
                    };
                    let t = l.default.find(e => "United States" === e.name),
                        [s, n] = t.phoneCountryCode.split(" ");
                    this.state = {
                        countryCode: s,
                        phone: null != n ? n : "",
                        open: !1
                    }
                }
            }
            var I = p