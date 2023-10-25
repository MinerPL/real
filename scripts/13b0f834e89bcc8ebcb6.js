(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37364"], {
        92201: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useChangeUsernameLivecheckEnabled: function() {
                    return l
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-06_unique_username_live_check_in_settings",
                    label: "Username Livecheck in Settings",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Livecheck enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = () => {
                    let {
                        enabled: e
                    } = n.useExperiment({
                        location: "7e1108_1"
                    }, {
                        autoTrackExposure: !0
                    });
                    return e
                }
        },
        385559: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                o = s.n(l),
                r = s("161179"),
                i = s.n(r),
                u = s("858434"),
                d = s.n(u),
                c = s("505143"),
                m = s("498225"),
                E = s("77078"),
                S = s("152584"),
                h = s("644417"),
                x = s("92201"),
                N = s("79345"),
                _ = s("447997"),
                f = s("790618"),
                R = s("697218"),
                M = s("258078"),
                v = s("719923"),
                p = s("49111"),
                C = s("782340"),
                I = s("695134"),
                T = s("254180");
            let g = e => {
                let {
                    usernameStatus: t,
                    showHint: s
                } = e;
                return (0, c.match)(t).with({
                    type: h.NameValidationState.ERROR,
                    message: c.P.select()
                }, e => (0, a.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: e
                })).with({
                    type: h.NameValidationState.AVAILABLE,
                    message: c.P.select()
                }, e => (0, a.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-positive",
                    children: e
                })).otherwise(() => s ? (0, a.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: C.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                }) : null)
            };

            function A(e) {
                var t, s;
                let {
                    transitionState: l,
                    onClose: r
                } = e, u = (0, m.useStateFromStores)([R.default], () => {
                    let e = R.default.getCurrentUser();
                    return i(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
                }), c = n.useMemo(() => v.default.canEditDiscriminator(u) && !u.isPomelo(), [u]), [A, L] = n.useState(!1), [j, U] = n.useState(u.username), [b, P] = n.useState(u.discriminator), [k, B] = n.useState(""), [O, D] = n.useState(!1), w = (0, m.useStateFromStores)([f.default], () => f.default.getErrors()), F = (0, x.useChangeUsernameLivecheckEnabled)(), G = u.isPomelo() && F, y = (0, N.useUsernameStatus)(j, G, !1, u.username), H = n.useRef(null), V = n.useMemo(() => {
                    var e, t;
                    return null !== (s = null == w ? void 0 : null === (e = w.username) || void 0 === e ? void 0 : e[0]) && void 0 !== s ? s : null == w ? void 0 : null === (t = w.discriminator) || void 0 === t ? void 0 : t[0]
                }, [w]);
                n.useEffect(() => {
                    if (l === E.ModalTransitionState.ENTERED) {
                        var e;
                        null === (e = H.current) || void 0 === e || e.focus()
                    }
                }, [l]);
                let z = b !== u.discriminator;
                async function W(e) {
                    e.preventDefault(), D(!0);
                    let t = await (0, S.saveAccountChanges)({
                        username: j,
                        discriminator: c ? b : void 0,
                        password: k
                    });
                    D(!1), (null == t ? void 0 : t.ok) && r()
                }
                let K = n.useMemo(() => d(L, 50), []);
                return (0, a.jsxs)(E.ModalRoot, {
                    transitionState: l,
                    children: [(0, a.jsxs)(E.ModalHeader, {
                        separator: !1,
                        className: I.header,
                        children: [(0, a.jsx)(M.default, {
                            color: M.default.Colors.HEADER_PRIMARY,
                            size: M.default.Sizes.SIZE_24,
                            className: I.title,
                            children: C.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP
                        }), (0, a.jsx)(E.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: I.subtitle,
                            children: C.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP
                        }), (0, a.jsx)(E.ModalCloseButton, {
                            onClick: r,
                            className: I.modalCloseButton
                        })]
                    }), (0, a.jsxs)("form", {
                        onSubmit: W,
                        children: [(0, a.jsxs)(E.ModalContent, {
                            className: I.content,
                            children: [(0, a.jsx)(E.FormItem, {
                                title: C.default.Messages.FORM_LABEL_USERNAME,
                                error: V,
                                children: (0, a.jsxs)("div", {
                                    className: o(T.input, I.multiInput, {
                                        [T.error]: null != V,
                                        [T.focused]: A
                                    }),
                                    children: [(0, a.jsx)(E.TextInput, {
                                        name: "username",
                                        "aria-label": C.default.Messages.USER_SETTINGS_LABEL_USERNAME,
                                        value: j,
                                        maxLength: p.USERNAME_MAX_LENGTH,
                                        onChange: U,
                                        onFocus: () => K(!0),
                                        onBlur: () => K(!1),
                                        inputRef: H,
                                        className: I.multiInputFirst,
                                        inputClassName: o(I.multiInputField, {
                                            [I.lowercase]: u.isPomelo()
                                        })
                                    }), !u.isPomelo() && (0, a.jsx)(E.TextInput, {
                                        name: "discriminator",
                                        "aria-label": C.default.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
                                        maxLength: 4,
                                        value: b,
                                        onChange: P,
                                        onFocus: () => K(!0),
                                        onBlur: () => K(!1),
                                        inputPrefix: "#",
                                        disabled: !c,
                                        className: I.multiInputLast,
                                        inputClassName: I.multiInputField
                                    })]
                                })
                            }), z ? (0, a.jsx)(E.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: I.discriminatorChangeWarning,
                                children: C.default.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
                            }) : null, G ? (0, a.jsx)(_.default, {
                                show: (null == y ? void 0 : y.type) === h.NameValidationState.ERROR || A,
                                top: 8,
                                bottom: 4,
                                children: (0, a.jsx)(g, {
                                    usernameStatus: y,
                                    showHint: u.isPomelo()
                                })
                            }) : null, (0, a.jsx)(E.FormItem, {
                                className: I.password,
                                title: C.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                                error: null == w ? void 0 : null === (t = w.password) || void 0 === t ? void 0 : t[0],
                                children: (0, a.jsx)(E.TextInput, {
                                    type: "password",
                                    value: k,
                                    onChange: B
                                })
                            })]
                        }), (0, a.jsxs)(E.ModalFooter, {
                            children: [(0, a.jsx)(E.Button, {
                                type: "submit",
                                color: E.Button.Colors.BRAND,
                                size: E.Button.Sizes.MEDIUM,
                                submitting: O,
                                children: C.default.Messages.DONE
                            }), (0, a.jsx)(E.Button, {
                                className: I.cancel,
                                look: E.Button.Looks.LINK,
                                color: E.Button.Colors.PRIMARY,
                                onClick: r,
                                children: C.default.Messages.CANCEL
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);