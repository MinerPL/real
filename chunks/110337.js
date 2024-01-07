            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("77078"),
                d = n("970728"),
                c = n("448993"),
                _ = n("393414"),
                E = n("145131"),
                I = n("476765"),
                f = n("883029"),
                A = n("49111"),
                p = n("782340"),
                h = n("479030"),
                R = n("529861"),
                N = n("156465");
            let S = "hTKzmak",
                T = (0, I.uid)();
            let m = (r = window.GLOBAL_ENV.INVITE_HOST, i = "", null == r && (r = location.host, i = A.Routes.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(i, "/")),
                g = [S, "".concat(m).concat(S), "".concat(m).concat("cool-people")],
                C = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsxs)(u.Clickable, {
                        className: h.rowContainer,
                        onClick: () => {
                            t(), (0, _.transitionTo)(A.Routes.GUILD_DISCOVERY)
                        },
                        children: [(0, l.jsx)("img", {
                            width: 40,
                            height: 40,
                            className: h.rowIcon,
                            alt: "",
                            src: N
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(u.Heading, {
                                className: h.rowText,
                                variant: "heading-md/semibold",
                                children: p.default.Messages.DISCOVERY_UPSELL_HEADER
                            }), (0, l.jsx)(u.Text, {
                                className: h.rowText,
                                variant: "text-xs/normal",
                                children: p.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
                            })]
                        }), (0, l.jsx)("img", {
                            className: h.rowArrow,
                            alt: "",
                            src: R
                        })]
                    })
                };

            function L(e) {
                let {
                    onBack: t,
                    onClose: n,
                    isSlideReady: r
                } = e, [i, a] = s.useState(""), [_, I] = s.useState(!1), [A, R] = s.useState(null), N = s.useRef(null);
                s.useEffect(() => {
                    var e;
                    r && (null === (e = N.current) || void 0 === e || e.focus())
                }, [r]);
                let L = e => {
                    e.preventDefault();
                    let t = i.trim();
                    if ("" === t) {
                        R(p.default.Messages.INVALID_INVITE_LINK_ERROR);
                        return
                    }
                    R(null), I(!0);
                    let r = t.split("/"),
                        l = r[r.length - 1];
                    d.default.resolveInvite(l, "Join Guild", {
                        inputValue: t
                    }).then(e => {
                        let {
                            invite: t
                        } = e;
                        if (I(!1), null == t) {
                            R(p.default.Messages.INSTANT_INVITE_EXPIRED);
                            return
                        }
                        if (null != t.channel) {
                            let e = d.default.getInviteContext("Join Guild", t);
                            d.default.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: e => {
                                    n(), d.default.transitionToInvite(e)
                                }
                            }).then(() => {}, e => {
                                if (e instanceof c.V6OrEarlierAPIError || e instanceof c.APIError) {
                                    let t = (0, f.getInviteError)(e.code);
                                    R(t)
                                } else R(p.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
                            })
                        }
                    }, e => {
                        I(!1);
                        let t = new c.V6OrEarlierAPIError(e),
                            n = (0, f.getInviteError)(t.code);
                        R(n)
                    })
                };
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: h.header,
                        direction: E.default.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            className: h.title,
                            variant: "heading-xl/semibold",
                            children: p.default.Messages.JOIN_SERVER_TITLE
                        }), (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: p.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            className: h.closeButton,
                            onClick: n
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: h.content,
                        children: [(0, l.jsx)("form", {
                            onSubmit: L,
                            className: h.inputForm,
                            children: (0, l.jsxs)(u.FormItem, {
                                children: [(0, l.jsx)(u.FormTitle, {
                                    id: T,
                                    error: A,
                                    className: o(h.formTitle, {
                                        [h.error]: null != A
                                    }),
                                    required: !0,
                                    children: p.default.Messages.FORM_LABEL_INVITE_LINK
                                }), (0, l.jsx)(u.TextInput, {
                                    value: i,
                                    onChange: a,
                                    className: h.input,
                                    inputClassName: h.inputInner,
                                    placeholder: "".concat(m).concat(S),
                                    inputRef: N,
                                    required: !0,
                                    "aria-labelledby": T
                                })]
                            })
                        }), (0, l.jsx)(u.FormItem, {
                            title: p.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                            titleClassName: h.formTitle,
                            className: h.examplesForm,
                            children: g.map(e => (0, l.jsx)(u.Clickable, {
                                className: h.sampleLink,
                                onClick: () => a(e),
                                children: e
                            }, e))
                        }), (0, l.jsx)(C, {
                            onClick: n
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: h.footer,
                        children: [(0, l.jsx)(u.Button, {
                            color: u.Button.Colors.BRAND,
                            submitting: _,
                            onClick: L,
                            children: p.default.Messages.NUF_JOIN_SERVER_BUTTON
                        }), (0, l.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.MIN,
                            onClick: t,
                            children: p.default.Messages.BACK
                        })]
                    })]
                })
            }