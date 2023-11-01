(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77606"], {
        497109: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f2a141a285c4b6b264e8.svg"
        },
        527826: function(e, t, s) {
            "use strict";
            e.exports = s.p + "adf75861421c2a6a6269.png"
        },
        684494: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9aeee910f76e58071282.png"
        },
        936380: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var a = s("37983"),
                i = s("884691"),
                l = s("77078"),
                r = s("430713"),
                n = s("663657"),
                d = s("697218"),
                c = s("145131"),
                o = s("671278"),
                h = s("222038"),
                u = s("782340"),
                f = s("364643");
            let g = e => {
                let {
                    image: t,
                    label: s,
                    text: i,
                    children: r
                } = e;
                return (0, a.jsxs)(c.default, {
                    className: f.spacing,
                    children: [(0, a.jsx)(c.default, {
                        grow: 0,
                        shrink: 0,
                        basis: "156px",
                        justify: c.default.Justify.CENTER,
                        className: f.image,
                        children: t
                    }), (0, a.jsx)(c.default, {
                        direction: c.default.Direction.VERTICAL,
                        justify: c.default.Justify.CENTER,
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(l.FormTitle, {
                                tag: "h5",
                                className: f.headerSpacing,
                                children: s
                            }), (0, a.jsx)(l.FormText, {
                                type: l.FormText.Types.DESCRIPTION,
                                children: i
                            }), r]
                        })
                    })]
                })
            };
            class x extends i.PureComponent {
                render() {
                    var e;
                    let {
                        transitionState: t,
                        onClose: i
                    } = this.props, {
                        totpSecret: r,
                        code: n,
                        isVerifying: x
                    } = this.state, p = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.email, m = (0, h.encodeTotpSecretAsUrl)(null != p ? p : "", r), j = (0, a.jsx)("form", {
                        onSubmit: this.handleActivate,
                        children: (0, a.jsxs)(c.default, {
                            className: f.inputContainer,
                            align: c.default.Align.START,
                            children: [(0, a.jsx)(l.TextInput, {
                                value: n,
                                className: f.input,
                                placeholder: "000 000",
                                maxLength: 7,
                                autoComplete: "one-time-code",
                                onChange: this.handleCodeChange,
                                error: this.state.error,
                                autoFocus: !0
                            }), (0, a.jsx)(c.default.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, a.jsx)(l.Button, {
                                    type: "submit",
                                    submitting: x,
                                    children: u.default.Messages.TWO_FA_ACTIVATE
                                })
                            })]
                        })
                    });
                    return (0, a.jsxs)(l.ModalRoot, {
                        transitionState: t,
                        size: l.ModalSize.DYNAMIC,
                        className: f.customWidth,
                        children: [(0, a.jsxs)(l.ModalHeader, {
                            separator: !1,
                            children: [(0, a.jsxs)(c.default.Child, {
                                grow: 1,
                                shrink: 1,
                                children: [(0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: u.default.Messages.TWO_FA_ENABLE
                                }), (0, a.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    className: f.subHeader,
                                    children: u.default.Messages.TWO_FA_ENABLE_SUBHEADER
                                })]
                            }), (0, a.jsx)(c.default.Child, {
                                grow: 0,
                                children: (0, a.jsx)(l.ModalCloseButton, {
                                    onClick: i
                                })
                            })]
                        }), (0, a.jsxs)(l.ModalContent, {
                            children: [(0, a.jsx)(g, {
                                image: (0, a.jsx)("img", {
                                    alt: "",
                                    src: s("684494"),
                                    width: 100,
                                    height: 100
                                }),
                                label: u.default.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
                                text: u.default.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
                                    googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                                    authyURL: "https://www.authy.com/"
                                })
                            }), (0, a.jsx)(l.FormDivider, {
                                className: f.divider
                            }), (0, a.jsx)(g, {
                                image: (0, a.jsx)(o.default, {
                                    text: m
                                }),
                                label: u.default.Messages.TWO_FA_QR_LABEL,
                                text: u.default.Messages.TWO_FA_QR_BODY,
                                children: (0, a.jsxs)("div", {
                                    className: f.topSpacing,
                                    children: [(0, a.jsx)(l.FormTitle, {
                                        tag: "h5",
                                        className: f.headerSpacing,
                                        children: u.default.Messages.TWO_FA_KEY
                                    }), (0, a.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        className: f.secret,
                                        selectable: !0,
                                        children: r
                                    })]
                                })
                            }), (0, a.jsx)(l.FormDivider, {
                                className: f.divider
                            }), (0, a.jsx)(g, {
                                image: (0, a.jsx)("img", {
                                    alt: "",
                                    src: s("497109")
                                }),
                                label: u.default.Messages._TWO_FA_LOGIN_LABEL,
                                text: u.default.Messages.TWO_FA_LOGIN_BODY,
                                children: j
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        totpSecret: (0, h.generateTotpSecret)(),
                        error: null,
                        isVerifying: !1
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }, this.handleActivate = e => {
                        e.preventDefault();
                        let {
                            password: t,
                            emailToken: s
                        } = this.props, {
                            totpSecret: a,
                            code: i
                        } = this.state;
                        this.setState({
                            isVerifying: !0
                        }), r.default.enable({
                            password: t,
                            code: i,
                            secret: (0, h.encodeTotpSecret)(a),
                            ...(0, n.isMfaEmailVerificationEnabled)() && {
                                emailToken: s
                            }
                        }).then(this.handleActivateSuccess, e => this.setState({
                            error: e.body.message,
                            isVerifying: !1
                        }))
                    }, this.handleActivateSuccess = () => {
                        let {
                            onClose: e,
                            handleEnableMFASuccess: t
                        } = this.props;
                        this.setState({
                            isVerifying: !1
                        }), t(), null == e || e()
                    }
                }
            }
            var p = x
        }
    }
]);