(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36643"], {
        359113: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return M
                }
            });
            var o, l, n = t("37983"),
                a = t("884691"),
                r = t("872717"),
                d = t("77078"),
                i = t("188525"),
                c = t("145131"),
                u = t("555158"),
                N = t("306160"),
                I = t("691898"),
                O = t("49111"),
                m = t("782340"),
                x = t("453938");

            function C(e) {
                let {
                    name: s,
                    value: t
                } = e, [o, l] = a.useState(i.CopyInputModes.DEFAULT);
                return (0, n.jsxs)("div", {
                    className: x.infoRow,
                    children: [(0, n.jsx)(d.FormTitle, {
                        className: x.infoTitle,
                        children: s
                    }), (0, n.jsx)(i.default, {
                        value: t,
                        mode: o,
                        supportsCopy: N.SUPPORTS_COPY,
                        onCopy: () => {
                            (0, N.copy)(t), l(i.CopyInputModes.SUCCESS)
                        }
                    })]
                })
            }

            function M(e) {
                let {
                    onClose: s,
                    transitionState: t
                } = e, [o, i] = a.useState(""), [N, M] = a.useState(""), [T, h] = a.useState(null), [R, f] = a.useState(!1), [A, _] = a.useState(l.DOMAIN), j = () => {
                    f(!0), h(null), r.default.post({
                        url: O.Endpoints.CONNECTION(O.PlatformTypes.DOMAIN, o),
                        body: {}
                    }).then(() => {
                        s()
                    }).catch(e => {
                        var s, t, o, n, a, r, d;
                        (null === (s = e.body) || void 0 === s ? void 0 : s.proof) && A === l.DOMAIN ? (M(e.body.proof), _(l.PROOF_DNS)) : h((null === (r = e.body) || void 0 === r ? void 0 : null === (a = r.errors) || void 0 === a ? void 0 : null === (n = a.domain) || void 0 === n ? void 0 : null === (o = n._errors) || void 0 === o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.message) || (null === (d = e.body) || void 0 === d ? void 0 : d.message) || e.message)
                    }).finally(() => {
                        f(!1)
                    })
                };
                return (0, n.jsxs)(d.ModalRoot, {
                    transitionState: t,
                    className: x.modal,
                    children: [(0, n.jsxs)(d.ModalHeader, {
                        direction: c.default.Direction.VERTICAL,
                        className: x.header,
                        separator: !1,
                        children: [(0, n.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.default.Messages.DOMAIN_VERIFICATION_HEADER
                        }), (0, n.jsx)(d.ModalCloseButton, {
                            className: x.closeButton,
                            onClick: s
                        })]
                    }), (0, n.jsxs)(d.Slides, {
                        activeSlide: A,
                        width: 440,
                        children: [(0, n.jsx)(d.Slide, {
                            id: l.DOMAIN,
                            children: (0, n.jsxs)("form", {
                                onSubmit: e => {
                                    e.preventDefault(), j()
                                },
                                children: [(0, n.jsxs)(d.ModalContent, {
                                    className: x.content,
                                    children: [(0, n.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        className: x.description,
                                        children: m.default.Messages.DOMAIN_VERIFICATION_DESCRIPTION
                                    }), (0, n.jsx)(d.FormItem, {
                                        title: m.default.Messages.DOMAIN_VERIFICATION_LABEL,
                                        error: T,
                                        children: (0, n.jsx)(d.TextInput, {
                                            onChange: i,
                                            placeholder: I.EXAMPLE_DOMAIN,
                                            maxLength: 253,
                                            value: o,
                                            disabled: R,
                                            autoFocus: !0
                                        })
                                    })]
                                }), (0, n.jsxs)(d.ModalFooter, {
                                    className: x.footer,
                                    children: [(0, n.jsx)(d.Button, {
                                        type: "submit",
                                        submitting: R,
                                        disabled: "" === o,
                                        children: m.default.Messages.NEXT
                                    }), (0, n.jsx)(d.Button, {
                                        look: d.Button.Looks.LINK,
                                        color: d.Button.Colors.PRIMARY,
                                        onClick: s,
                                        children: m.default.Messages.CANCEL
                                    })]
                                })]
                            })
                        }), (0, n.jsxs)(d.Slide, {
                            id: l.PROOF_DNS,
                            children: [(0, n.jsxs)(d.ModalContent, {
                                className: x.content,
                                children: [(0, n.jsxs)("ol", {
                                    className: x.list,
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)(d.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: m.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
                                        })
                                    }), (0, n.jsxs)("li", {
                                        children: [(0, n.jsx)(d.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: m.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
                                        }), (0, n.jsxs)("div", {
                                            className: x.dnsRecordContainer,
                                            children: [(0, n.jsx)(C, {
                                                name: m.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                                value: (0, I.getDnsName)(o)
                                            }), (0, n.jsx)(C, {
                                                name: m.default.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                                                value: "TXT"
                                            }), (0, n.jsx)(C, {
                                                name: m.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                                value: N
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsx)(u.default, {
                                    messageType: u.HelpMessageTypes.INFO,
                                    className: x.text,
                                    children: m.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING
                                }), null != T && (0, n.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: x.text,
                                    children: T
                                })]
                            }), (0, n.jsxs)(d.ModalFooter, {
                                className: x.footer,
                                direction: c.default.Direction.HORIZONTAL,
                                children: [(0, n.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        _(l.DOMAIN), h(null)
                                    },
                                    children: m.default.Messages.BACK
                                }), (0, n.jsxs)("div", {
                                    className: x.footerInner,
                                    children: [(0, n.jsx)(d.Button, {
                                        look: d.Button.Looks.LINK,
                                        color: d.Button.Colors.PRIMARY,
                                        onClick: () => {
                                            _(l.PROOF_HTTP), h(null)
                                        },
                                        className: x.switchButton,
                                        children: m.default.Messages.DOMAIN_VERIFICATION_USE_HTTP
                                    }), (0, n.jsx)(d.Button, {
                                        submitting: R,
                                        onClick: j,
                                        children: m.default.Messages.VERIFY
                                    })]
                                })]
                            })]
                        }), (0, n.jsxs)(d.Slide, {
                            id: l.PROOF_HTTP,
                            children: [(0, n.jsxs)(d.ModalContent, {
                                className: x.content,
                                children: [(0, n.jsx)(d.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    children: m.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
                                }), (0, n.jsxs)("div", {
                                    className: x.httpFileContainer,
                                    children: [(0, n.jsx)(C, {
                                        name: m.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                                        value: (0, I.getHttpName)(o)
                                    }), (0, n.jsx)(C, {
                                        name: m.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                                        value: N
                                    })]
                                }), null != T && (0, n.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    className: x.text,
                                    children: T
                                })]
                            }), (0, n.jsxs)(d.ModalFooter, {
                                className: x.footer,
                                direction: c.default.Direction.HORIZONTAL,
                                children: [(0, n.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: () => {
                                        _(l.DOMAIN), h(null)
                                    },
                                    children: m.default.Messages.BACK
                                }), (0, n.jsxs)("div", {
                                    className: x.footerInner,
                                    children: [(0, n.jsx)(d.Button, {
                                        look: d.Button.Looks.LINK,
                                        color: d.Button.Colors.PRIMARY,
                                        onClick: () => {
                                            _(l.PROOF_DNS), h(null)
                                        },
                                        className: x.switchButton,
                                        children: m.default.Messages.DOMAIN_VERIFICATION_USE_DNS
                                    }), (0, n.jsx)(d.Button, {
                                        submitting: R,
                                        onClick: j,
                                        children: m.default.Messages.VERIFY
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }(o = l || (l = {})).DOMAIN = "DOMAIN", o.PROOF_DNS = "PROOF_DNS", o.PROOF_HTTP = "PROOF_HTTP"
        },
        306160: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return r
                }
            });
            var o = t("281071"),
                l = t("773336"),
                n = t("50885");
            let a = (() => {
                if (l.isPlatformEmbedded) return null != n.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!a && (l.isPlatformEmbedded ? (n.default.copy(e), !0) : o.copy(e))
            }
        },
        474293: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                getClass: function() {
                    return l
                }
            });
            var o = t("159885");

            function l(e, s) {
                for (var t = arguments.length, l = Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) l[n - 2] = arguments[n];
                let a = l.reduce((e, s) => e + (0, o.upperCaseFirstChar)(s), ""),
                    r = "".concat(s).concat(a),
                    d = e[r];
                if (null != d) return d
            }
        }
    }
]);