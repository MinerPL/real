(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76381"], {
        225389: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CircleInformationIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                o = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: a = "",
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: a
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        505088: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                o = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: a = "",
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, o.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: a
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        359113: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            }), s("222007"), s("506083");
            var n, l, o = s("37983"),
                r = s("884691"),
                a = s("872717"),
                i = s("77078"),
                c = s("188525"),
                u = s("145131"),
                d = s("555158"),
                f = s("306160"),
                h = s("691898"),
                I = s("49111"),
                N = s("782340"),
                m = s("453938");

            function x(e) {
                let {
                    name: t,
                    value: s
                } = e, [n, l] = r.useState(c.CopyInputModes.DEFAULT);
                return (0, o.jsxs)("div", {
                    className: m.infoRow,
                    children: [(0, o.jsx)(i.FormTitle, {
                        className: m.infoTitle,
                        children: t
                    }), (0, o.jsx)(c.default, {
                        value: s,
                        mode: n,
                        supportsCopy: f.SUPPORTS_COPY,
                        onCopy: () => {
                            (0, f.copy)(s), l(c.CopyInputModes.SUCCESS)
                        }
                    })]
                })
            }

            function C(e) {
                let {
                    onClose: t,
                    transitionState: s
                } = e, [n, l] = r.useState(""), [c, f] = r.useState(""), [C, p] = r.useState(null), [R, O] = r.useState(!1), [v, M] = r.useState("DOMAIN"), g = () => {
                    O(!0), p(null), a.default.post({
                        url: I.Endpoints.CONNECTION(I.PlatformTypes.DOMAIN, n),
                        body: {}
                    }).then(() => {
                        t()
                    }).catch(e => {
                        var t, s, n, l, o, r, a;
                        (null === (t = e.body) || void 0 === t ? void 0 : t.proof) && "DOMAIN" === v ? (f(e.body.proof), M("PROOF_DNS")) : p((null === (r = e.body) || void 0 === r ? void 0 : null === (o = r.errors) || void 0 === o ? void 0 : null === (l = o.domain) || void 0 === l ? void 0 : null === (n = l._errors) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : s.message) || (null === (a = e.body) || void 0 === a ? void 0 : a.message) || e.message)
                    }).finally(() => {
                        O(!1)
                    })
                };
                return (0, o.jsxs)(i.ModalRoot, {
                    transitionState: s,
                    className: m.modal,
                    children: [(0, o.jsxs)(i.ModalHeader, {
                        direction: u.default.Direction.VERTICAL,
                        className: m.header,
                        separator: !1,
                        children: [(0, o.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: N.default.Messages.DOMAIN_VERIFICATION_HEADER
                        }), (0, o.jsx)(i.ModalCloseButton, {
                            className: m.closeButton,
                            onClick: t
                        })]
                    }), (0, o.jsxs)(i.Slides, {
                        activeSlide: v,
                        width: 440,
                        children: [(0, o.jsx)(i.Slide, {
                            id: "DOMAIN",
                            children: (0, o.jsxs)("form", {
                                onSubmit: e => {
                                    e.preventDefault(), g()
                                },
                                children: [(0, o.jsxs)(i.ModalContent, {
                                    className: m.content,
                                    children: [(0, o.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        className: m.description,
                                        children: N.default.Messages.DOMAIN_VERIFICATION_DESCRIPTION
                                    }), (0, o.jsx)(i.FormItem, {
                                        title: N.default.Messages.DOMAIN_VERIFICATION_LABEL,
                                        error: C,
                                        children: (0, o.jsx)(i.TextInput, {
                                            onChange: l,
                                            placeholder: h.EXAMPLE_DOMAIN,
                                            maxLength: 253,
                                            value: n,
                                            disabled: R,
                                            autoFocus: !0
                                        })
                                    })]
                                }), (0, o.jsxs)(i.ModalFooter, {
                                    className: m.footer,
                                    children: [(0, o.jsx)(i.Button, {
                                        type: "submit",
                                        submitting: R,
                                        disabled: "" === n,
                                        children: N.default.Messages.NEXT
                                    }), (0, o.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: i.Button.Colors.PRIMARY,
                                        onClick: t,
                                        children: N.default.Messages.CANCEL
                                    })]
                                })]
                            })
                        }), (0, o.jsxs)(i.Slide, {
                            id: "PROOF_DNS",
                            children: [(0, o.jsxs)(i.ModalContent, {
                                className: m.content,
                                children: [(0, o.jsxs)("ol", {
                                    className: m.list,
                                    children: [(0, o.jsx)("li", {
                                        children: (0, o.jsx)(i.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: N.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
                                        })
                                    }), (0, o.jsxs)("li", {
                                        children: [(0, o.jsx)(i.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: N.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
                                        }), (0, o.jsxs)("div", {
                                            className: m.dnsRecordContainer,
                                            children: [(0, o.jsx)(x, {
                                                name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                                value: (0, h.getDnsName)(n)
                                            }), (0, o.jsx)(x, {
                                                name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                                                value: "TXT"
                                            }), (0, o.jsx)(x, {
                                                name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                                value: c
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsx)(d.default, {
                                    messageType: d.HelpMessageTypes.INFO,
                                    className: m.text,
                                    children: N.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING
                                }), null != C && (0, o.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: m.text,
                                    children: C
                                })]
                            }), (0, o.jsxs)(i.ModalFooter, {
                                className: m.footer,
                                direction: u.default.Direction.HORIZONTAL,
                                children: [(0, o.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        M("DOMAIN"), p(null)
                                    },
                                    children: N.default.Messages.BACK
                                }), (0, o.jsxs)("div", {
                                    className: m.footerInner,
                                    children: [(0, o.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: i.Button.Colors.PRIMARY,
                                        onClick: () => {
                                            M("PROOF_HTTP"), p(null)
                                        },
                                        className: m.switchButton,
                                        children: N.default.Messages.DOMAIN_VERIFICATION_USE_HTTP
                                    }), (0, o.jsx)(i.Button, {
                                        submitting: R,
                                        onClick: g,
                                        children: N.default.Messages.VERIFY
                                    })]
                                })]
                            })]
                        }), (0, o.jsxs)(i.Slide, {
                            id: "PROOF_HTTP",
                            children: [(0, o.jsxs)(i.ModalContent, {
                                className: m.content,
                                children: [(0, o.jsx)(i.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    children: N.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
                                }), (0, o.jsxs)("div", {
                                    className: m.httpFileContainer,
                                    children: [(0, o.jsx)(x, {
                                        name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                        value: (0, h.getHttpName)(n)
                                    }), (0, o.jsx)(x, {
                                        name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                        value: c
                                    })]
                                }), null != C && (0, o.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: m.text,
                                    children: C
                                })]
                            }), (0, o.jsxs)(i.ModalFooter, {
                                className: m.footer,
                                direction: u.default.Direction.HORIZONTAL,
                                children: [(0, o.jsx)(i.Button, {
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        M("DOMAIN"), p(null)
                                    },
                                    children: N.default.Messages.BACK
                                }), (0, o.jsxs)("div", {
                                    className: m.footerInner,
                                    children: [(0, o.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: i.Button.Colors.PRIMARY,
                                        onClick: () => {
                                            M("PROOF_DNS"), p(null)
                                        },
                                        className: m.switchButton,
                                        children: N.default.Messages.DOMAIN_VERIFICATION_USE_DNS
                                    }), (0, o.jsx)(i.Button, {
                                        submitting: R,
                                        onClick: g,
                                        children: N.default.Messages.VERIFY
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }(l = n || (n = {})).DOMAIN = "DOMAIN", l.PROOF_DNS = "PROOF_DNS", l.PROOF_HTTP = "PROOF_HTTP"
        },
        188525: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return I
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                o = s("414456"),
                r = s.n(o),
                a = s("77078"),
                i = s("474293"),
                c = s("145131"),
                u = s("782340"),
                d = s("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class h extends l.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: s,
                        mode: l
                    } = this.props, o = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, n.jsx)("input", {
                        className: r((0, i.getClass)(d, "input", l), {
                            [d.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: s,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": o
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = u.default.Messages.COPY,
                        mode: s,
                        hideMessage: l,
                        className: o,
                        buttonLook: h
                    } = this.props, I = null != l;
                    switch (s) {
                        case f.SUCCESS:
                            e = a.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = a.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, n.jsx)(a.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, n.jsx)("div", {
                            className: r((0, i.getClass)(d, "copyInput", s), o),
                            ref: this.containerRef,
                            children: (0, n.jsxs)(c.default, {
                                className: d.layout,
                                children: [(0, n.jsxs)(c.default, {
                                    className: d.inputWrapper,
                                    children: [this.renderInput(I), I ? (0, n.jsx)("div", {
                                        className: d.hiddenMessage,
                                        children: l
                                    }) : null]
                                }), (0, n.jsx)(c.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, n.jsx)(a.Button, {
                                        className: d.button,
                                        onClick: this.handleButtonClick,
                                        size: a.ButtonSizes.MIN,
                                        color: e,
                                        look: h,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.containerRef = l.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            h.contextType = a.FormContext, h.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, h.Modes = f, h.ButtonColors = a.ButtonColors, h.ButtonLooks = a.ButtonLooks;
            var I = h
        },
        555158: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HelpMessageTypes: function() {
                    return l
                },
                default: function() {
                    return I
                }
            });
            var n, l, o = s("37983");
            s("884691");
            var r = s("414456"),
                a = s.n(r),
                i = s("77078"),
                c = s("36694"),
                u = s("381546"),
                d = s("68238"),
                f = s("423487"),
                h = s("557296");
            (n = l || (l = {}))[n.WARNING = 0] = "WARNING", n[n.INFO = 1] = "INFO", n[n.ERROR = 2] = "ERROR", n[n.POSITIVE = 3] = "POSITIVE";
            var I = function(e) {
                let {
                    children: t,
                    messageType: s,
                    className: n,
                    textColor: l = "text-normal",
                    textVariant: r = "text-sm/medium"
                } = e, I = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return u.default;
                        case 3:
                            return c.default
                    }
                }(s), N = function(e) {
                    switch (e) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(s);
                return (0, o.jsxs)("div", {
                    className: a(h.container, N, n),
                    children: [(0, o.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, o.jsx)(I, {
                            className: h.icon
                        })
                    }), (0, o.jsx)(i.Text, {
                        className: h.text,
                        color: l,
                        variant: r,
                        children: t
                    })]
                })
            }
        },
        381546: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                o = s("505088"),
                r = s("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: o,
                        backgroundColor: a,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, n.jsx)("path", {
                            fill: l,
                            className: o,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, o.CircleXIcon, void 0, {
                    size: 24
                })
        },
        68238: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                o = s("225389"),
                r = s("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: l = "currentColor",
                        foreground: o,
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 12 12",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: o,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, o.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        306160: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SUPPORTS_COPY: function() {
                    return r
                },
                copy: function() {
                    return a
                }
            }), s("70102");
            var n = s("281071"),
                l = s("773336"),
                o = s("50885");
            let r = (() => {
                if (l.isPlatformEmbedded) return null != o.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function a(e) {
                return !!r && (l.isPlatformEmbedded ? (o.default.copy(e), !0) : n.copy(e))
            }
        },
        474293: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getClass: function() {
                    return l
                }
            }), s("808653");
            var n = s("159885");

            function l(e, t) {
                for (var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++) l[o - 2] = arguments[o];
                let r = l.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(r),
                    i = e[a];
                if (null != i) return i
            }
        },
        281071: function(e, t, s) {
            "use strict";

            function n(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let s = document.createRange(),
                    n = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), s.selectNodeContents(l), null == n || n.removeAllRanges(), null == n || n.addRange(s), l.focus(), l.setSelectionRange(0, e.length);
                let o = document.execCommand("copy");
                return t.removeChild(l), o
            }
            s.r(t), s.d(t, {
                copy: function() {
                    return n
                }
            }), s("70102")
        }
    }
]);