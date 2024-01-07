            "use strict";
            n.r(t), n.d(t, {
                MFAModal: function() {
                    return v
                },
                MFASlides: function() {
                    return g
                },
                openMFAModal: function() {
                    return M
                }
            }), n("222007"), n("781738"), n("506083"), n("70102");
            var s = n("37983"),
                o = n("884691"),
                l = n("376507"),
                a = n("872717"),
                i = n("77078"),
                d = n("145131"),
                r = n("772280"),
                u = n("773336"),
                c = n("286235"),
                E = n("50885"),
                _ = n("695501"),
                p = n("49111"),
                f = n("782340"),
                h = n("992279");

            function A(e) {
                let {
                    subtitle: t,
                    onClose: n
                } = e;
                return (0, s.jsxs)(i.ModalHeader, {
                    direction: d.default.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [(0, s.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.default.Messages.MFA_V2_HEADER
                    }), null != t && (0, s.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: h.subtitle,
                        children: t
                    }), (0, s.jsx)(i.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: n
                    })]
                })
            }

            function S(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsx)(i.ModalContent, {
                    className: h.content,
                    children: t
                })
            }

            function O(e) {
                let {
                    error: t
                } = e;
                return null == t ? null : (0, s.jsx)(i.Text, {
                    className: h.error,
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: t
                })
            }

            function I(e) {
                let {
                    request: t,
                    setSlide: n,
                    showConfirm: o = !1,
                    ...l
                } = e, a = t.methods.length > 1;
                return a || o ? (0, s.jsxs)(i.ModalFooter, {
                    className: h.footer,
                    direction: o && !a ? d.default.Direction.HORIZONTAL_REVERSE : d.default.Direction.HORIZONTAL,
                    children: [a && (0, s.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        onClick: () => n("select"),
                        color: i.Button.Colors.PRIMARY,
                        children: f.default.Messages.MFA_V2_GO_TO_SELECT
                    }), o && (0, s.jsx)(i.Button, {
                        type: "submit",
                        ...l,
                        children: f.default.Messages.CONFIRM
                    })]
                }) : null
            }

            function N(e) {
                let {
                    request: t,
                    setSlide: n,
                    onClose: o
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(A, {
                        subtitle: f.default.Messages.MFA_V2_SELECT_HEADER,
                        onClose: o
                    }), (0, s.jsx)(S, {
                        children: t.methods.map(e => (0, s.jsxs)(i.Clickable, {
                            className: h.listItemContainer,
                            onClick: () => {
                                n(e.type)
                            },
                            children: [(0, s.jsx)(i.Text, {
                                className: h.listItemText,
                                variant: "text-md/semibold",
                                children: _.SELECT_NAMES[e.type]
                            }), (0, s.jsx)(r.default, {
                                width: 20,
                                height: 20,
                                className: h.listItemArrow
                            })]
                        }, e.type))
                    })]
                })
            }

            function C(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: a,
                    onClose: d
                } = e, [r, _] = o.useState(!1), [h, N] = o.useState(null), {
                    challenge: C
                } = t.methods.find(e => "webauthn" === e.type), m = async () => {
                    _(!0), N(null);
                    let e = u.isPlatformEmbedded && E.default.supportsFeature(p.NativeFeatures.WEBAUTHN) ? E.default.webAuthnAuthenticate(C) : l.get(JSON.parse(C)).then(e => JSON.stringify(e));
                    try {
                        let t = await e;
                        await n({
                            mfaType: "webauthn",
                            data: t
                        })
                    } catch (e) {
                        c.default.captureException(e), N(f.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
                    } finally {
                        _(!1)
                    }
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(A, {
                        onClose: d
                    }), (0, s.jsxs)(S, {
                        children: [(0, s.jsx)(i.Button, {
                            submitting: r,
                            onClick: m,
                            children: f.default.Messages.MFA_V2_WEBAUTHN_CTA
                        }), (0, s.jsx)(O, {
                            error: h
                        })]
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: a
                    })]
                })
            }

            function m(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: d
                } = e, [r, u] = o.useState(!1), [c, E] = o.useState(null), [_, p] = o.useState(""), h = o.useRef(null), N = f.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, C = f.default.Messages.TWO_FA_BACKUP_CODE, m = o.useCallback(e => {
                    p(e), E(null)
                }, [p, E]);
                return o.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [d]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), n({
                            mfaType: "backup",
                            data: _.replace(/-/g, "")
                        }).catch(e => {
                            var t, n;
                            E(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(A, {
                        onClose: a
                    }), (0, s.jsx)(S, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: N,
                            children: [(0, s.jsx)(i.TextInput, {
                                inputRef: h,
                                onChange: m,
                                placeholder: C,
                                maxLength: 9,
                                minLength: 8,
                                value: _,
                                spellCheck: "false",
                                disabled: r
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: _.length < 8,
                        submitting: r
                    })]
                })
            }

            function T(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: d
                } = e, [r, u] = o.useState(!1), [c, E] = o.useState(null), [_, p] = o.useState(""), h = o.useRef(null);
                return o.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [d]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), n({
                            mfaType: "totp",
                            data: _
                        }).catch(e => {
                            var t, n;
                            E(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(A, {
                        onClose: a
                    }), (0, s.jsx)(S, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, s.jsx)(i.TextInput, {
                                inputRef: h,
                                onChange: p,
                                placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                maxLength: 6,
                                minLength: 6,
                                value: _,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: r
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: r
                    })]
                })
            }

            function R(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: d,
                    isSlideReady: r
                } = e, [u, c] = o.useState(!1), [E, _] = o.useState(null), [N, C] = o.useState(!1), [m, T] = o.useState(null), [R, y] = o.useState(""), v = o.useRef(null);
                o.useEffect(() => {
                    c(!0), a.default.post({
                        url: p.Endpoints.LOGIN_SMS_SEND,
                        body: {
                            ticket: t.ticket
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        _(e.body.phone)
                    }).catch(e => {
                        var t;
                        T(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                    }).finally(() => {
                        c(!1)
                    })
                }, [t.ticket]), o.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }, [r]);
                let g = null == E ? f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                    phoneNumber: E
                });
                return (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), C(!0), n({
                            mfaType: "sms",
                            data: R
                        }).catch(e => {
                            var t, n;
                            T(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            C(!1)
                        })
                    },
                    children: [(0, s.jsx)(A, {
                        subtitle: g,
                        onClose: d
                    }), (0, s.jsx)(S, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, s.jsxs)("div", {
                                className: h.smsInputContainer,
                                children: [(0, s.jsx)(i.TextInput, {
                                    className: h.smsInput,
                                    inputRef: v,
                                    onChange: y,
                                    placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                    maxLength: 10,
                                    value: R,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: N
                                }), (0, s.jsx)(i.Button, {
                                    size: i.Button.Sizes.MEDIUM,
                                    submitting: u,
                                    onClick: () => {
                                        a.default.post({
                                            url: p.Endpoints.LOGIN_SMS_SEND,
                                            body: {
                                                ticket: t.ticket
                                            },
                                            oldFormErrors: !0
                                        }).then(e => {
                                            _(e.body.phone)
                                        }).catch(e => {
                                            var t;
                                            T(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                        })
                                    },
                                    children: f.default.Messages.MFA_SMS_RESEND
                                })]
                            }), (0, s.jsx)(O, {
                                error: m
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === R.length,
                        submitting: N
                    })]
                })
            }

            function y(e) {
                let {
                    request: t,
                    finish: n,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: d
                } = e, [r, u] = o.useState(!1), [c, E] = o.useState(null), [_, p] = o.useState(""), h = o.useRef(null);
                return o.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [d]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), n({
                            mfaType: "password",
                            data: _
                        }).catch(e => {
                            var t, n;
                            E(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(A, {
                        onClose: a
                    }), (0, s.jsx)(S, {
                        children: (0, s.jsxs)(i.FormItem, {
                            title: f.default.Messages.FORM_LABEL_PASSWORD,
                            children: [(0, s.jsx)(i.TextInput, {
                                inputRef: h,
                                onChange: p,
                                value: _,
                                type: "password",
                                autoComplete: "password",
                                spellCheck: "false",
                                disabled: r
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: r
                    })]
                })
            }

            function v(e) {
                let {
                    transitionState: t,
                    request: n,
                    finish: o,
                    onClose: l
                } = e;
                return (0, s.jsx)(i.ModalRoot, {
                    transitionState: t,
                    size: i.ModalSize.SMALL,
                    "aria-label": f.default.Messages.MFA_V2_HEADER,
                    children: (0, s.jsx)(g, {
                        request: n,
                        mfaFinish: o,
                        onClose: l,
                        onEarlyClose: l
                    })
                })
            }

            function g(e) {
                var t, n;
                let {
                    request: l,
                    mfaFinish: a,
                    onEarlyClose: d,
                    onClose: r,
                    width: u = 440
                } = e, [c, E] = o.useState(null !== (n = null === (t = l.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : "select"), [_, p] = o.useState(c), f = async e => {
                    let {
                        mfaType: t,
                        data: n
                    } = e;
                    await a({
                        mfaType: t,
                        data: n,
                        ticket: l.ticket
                    }), null != r && r()
                }, h = {
                    request: l,
                    finish: f,
                    setSlide: E,
                    onClose: d
                };
                return (0, s.jsxs)(i.Slides, {
                    activeSlide: c,
                    width: u,
                    onSlideReady: p,
                    children: [(0, s.jsx)(i.Slide, {
                        id: "select",
                        children: (0, s.jsx)(N, {
                            ...h
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "webauthn",
                        children: (0, s.jsx)(C, {
                            ...h
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "totp",
                        children: (0, s.jsx)(T, {
                            ...h,
                            isSlideReady: "totp" === _
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "sms",
                        children: (0, s.jsx)(R, {
                            ...h,
                            isSlideReady: "sms" === _
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "backup",
                        children: (0, s.jsx)(m, {
                            ...h,
                            isSlideReady: "backup" === _
                        })
                    }), (0, s.jsx)(i.Slide, {
                        id: "password",
                        children: (0, s.jsx)(y, {
                            ...h,
                            isSlideReady: "password" === _
                        })
                    })]
                })
            }

            function M(e, t, n) {
                (0, i.openModal)(n => (0, s.jsx)(v, {
                    finish: t,
                    request: e,
                    ...n
                }), {
                    onCloseCallback: () => {
                        n(Error(f.default.Messages.MFA_V2_CANCELED))
                    }
                })
            }