(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36959"], {
        497109: function(e, s, t) {
            "use strict";
            e.exports = t.p + "f2a141a285c4b6b264e8.svg"
        },
        527826: function(e, s, t) {
            "use strict";
            e.exports = t.p + "adf75861421c2a6a6269.png"
        },
        684494: function(e, s, t) {
            "use strict";
            e.exports = t.p + "9aeee910f76e58071282.png"
        },
        936380: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return x
                }
            }), t("222007");
            var a = t("37983"),
                i = t("884691"),
                r = t("77078"),
                l = t("430713"),
                n = t("663657"),
                d = t("697218"),
                o = t("145131"),
                c = t("671278"),
                u = t("222038"),
                h = t("782340"),
                f = t("364643");
            let g = e => {
                let {
                    image: s,
                    label: t,
                    text: i,
                    children: l
                } = e;
                return (0, a.jsxs)(o.default, {
                    className: f.spacing,
                    children: [(0, a.jsx)(o.default, {
                        grow: 0,
                        shrink: 0,
                        basis: "156px",
                        justify: o.default.Justify.CENTER,
                        className: f.image,
                        children: s
                    }), (0, a.jsx)(o.default, {
                        direction: o.default.Direction.VERTICAL,
                        justify: o.default.Justify.CENTER,
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.FormTitle, {
                                tag: "h5",
                                className: f.headerSpacing,
                                children: t
                            }), (0, a.jsx)(r.FormText, {
                                type: r.FormText.Types.DESCRIPTION,
                                children: i
                            }), l]
                        })
                    })]
                })
            };
            class p extends i.PureComponent {
                render() {
                    var e;
                    let {
                        transitionState: s,
                        onClose: i
                    } = this.props, {
                        totpSecret: l,
                        code: n,
                        isVerifying: p
                    } = this.state, x = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.email, m = (0, u.encodeTotpSecretAsUrl)(null != x ? x : "", l), j = (0, a.jsx)("form", {
                        onSubmit: this.handleActivate,
                        children: (0, a.jsxs)(o.default, {
                            className: f.inputContainer,
                            align: o.default.Align.START,
                            children: [(0, a.jsx)(r.TextInput, {
                                value: n,
                                className: f.input,
                                placeholder: "000 000",
                                maxLength: 7,
                                autoComplete: "one-time-code",
                                onChange: this.handleCodeChange,
                                error: this.state.error,
                                autoFocus: !0
                            }), (0, a.jsx)(o.default.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, a.jsx)(r.Button, {
                                    type: "submit",
                                    submitting: p,
                                    children: h.default.Messages.TWO_FA_ACTIVATE
                                })
                            })]
                        })
                    });
                    return (0, a.jsxs)(r.ModalRoot, {
                        transitionState: s,
                        size: r.ModalSize.DYNAMIC,
                        className: f.customWidth,
                        children: [(0, a.jsxs)(r.ModalHeader, {
                            separator: !1,
                            children: [(0, a.jsxs)(o.default.Child, {
                                grow: 1,
                                shrink: 1,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: h.default.Messages.TWO_FA_ENABLE
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    className: f.subHeader,
                                    children: h.default.Messages.TWO_FA_ENABLE_SUBHEADER
                                })]
                            }), (0, a.jsx)(o.default.Child, {
                                grow: 0,
                                children: (0, a.jsx)(r.ModalCloseButton, {
                                    onClick: i
                                })
                            })]
                        }), (0, a.jsxs)(r.ModalContent, {
                            children: [(0, a.jsx)(g, {
                                image: (0, a.jsx)("img", {
                                    alt: "",
                                    src: t("684494"),
                                    width: 100,
                                    height: 100
                                }),
                                label: h.default.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
                                text: h.default.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
                                    googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                                    authyURL: "https://www.authy.com/"
                                })
                            }), (0, a.jsx)(r.FormDivider, {
                                className: f.divider
                            }), (0, a.jsx)(g, {
                                image: (0, a.jsx)(c.default, {
                                    text: m
                                }),
                                label: h.default.Messages.TWO_FA_QR_LABEL,
                                text: h.default.Messages.TWO_FA_QR_BODY,
                                children: (0, a.jsxs)("div", {
                                    className: f.topSpacing,
                                    children: [(0, a.jsx)(r.FormTitle, {
                                        tag: "h5",
                                        className: f.headerSpacing,
                                        children: h.default.Messages.TWO_FA_KEY
                                    }), (0, a.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        className: f.secret,
                                        selectable: !0,
                                        children: l
                                    })]
                                })
                            }), (0, a.jsx)(r.FormDivider, {
                                className: f.divider
                            }), (0, a.jsx)(g, {
                                image: (0, a.jsx)("img", {
                                    alt: "",
                                    src: t("497109")
                                }),
                                label: h.default.Messages._TWO_FA_LOGIN_LABEL,
                                text: h.default.Messages.TWO_FA_LOGIN_BODY,
                                children: j
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        totpSecret: (0, u.generateTotpSecret)(),
                        error: null,
                        isVerifying: !1
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }, this.handleActivate = e => {
                        e.preventDefault();
                        let {
                            password: s,
                            emailToken: t
                        } = this.props, {
                            totpSecret: a,
                            code: i
                        } = this.state;
                        this.setState({
                            isVerifying: !0
                        }), l.default.enable({
                            password: s,
                            code: i,
                            secret: (0, u.encodeTotpSecret)(a),
                            ...(0, n.isMfaEmailVerificationEnabled)() && {
                                emailToken: t
                            }
                        }).then(this.handleActivateSuccess, e => this.setState({
                            error: e.body.message,
                            isVerifying: !1
                        }))
                    }, this.handleActivateSuccess = () => {
                        let {
                            onClose: e,
                            handleEnableMFASuccess: s
                        } = this.props;
                        this.setState({
                            isVerifying: !1
                        }), s(), null == e || e()
                    }
                }
            }
            var x = p
        },
        671278: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                QRCodeOverlaySizes: function() {
                    return i
                },
                QRCodeWithOverlay: function() {
                    return h
                },
                default: function() {
                    return f
                }
            });
            var a, i, r = t("37983"),
                l = t("884691"),
                n = t("82697"),
                d = t("56701");
            (a = i || (i = {})).SIZE_40 = "SIZE_40", a.SIZE_60 = "SIZE_60";
            let o = Object.freeze({
                    SIZE_40: "size-40",
                    SIZE_60: "size-60"
                }),
                c = t("527826");
            class u extends l.PureComponent {
                render() {
                    let {
                        className: e,
                        text: s,
                        ...t
                    } = this.props;
                    return (0, r.jsx)("div", {
                        style: {
                            padding: 8,
                            borderRadius: 4,
                            width: t.size,
                            height: t.size,
                            backgroundColor: t.bgColor
                        },
                        className: e,
                        children: (0, r.jsx)(n.default, {
                            value: s,
                            level: "M",
                            ...t
                        })
                    })
                }
            }
            u.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            class h extends l.PureComponent {
                render() {
                    let {
                        overlaySize: e
                    } = this.props, s = o[null != e ? e : "SIZE_40"];
                    return (0, r.jsxs)("div", {
                        className: d.qrCodeContainer,
                        children: [(0, r.jsx)(u, {
                            ...this.props
                        }), (0, r.jsx)("div", {
                            className: d.qrCodeOverlay,
                            children: (0, r.jsx)("img", {
                                className: d[s],
                                src: c,
                                alt: ""
                            })
                        })]
                    })
                }
            }
            h.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var f = u
        }
    }
]);