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
            }), s("794252"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                o = s.n(l),
                r = s("627445"),
                i = s.n(r),
                u = s("483366"),
                d = s.n(u),
                c = s("506838"),
                m = s("446674"),
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
                I = s("387280"),
                T = s("905518");
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
                var t;
                let {
                    transitionState: s,
                    onClose: l
                } = e, r = (0, m.useStateFromStores)([R.default], () => {
                    let e = R.default.getCurrentUser();
                    return i(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
                }), u = n.useMemo(() => v.default.canEditDiscriminator(r) && !r.isPomelo(), [r]), [c, A] = n.useState(!1), [L, j] = n.useState(r.username), [U, b] = n.useState(r.discriminator), [P, k] = n.useState(""), [B, O] = n.useState(!1), D = (0, m.useStateFromStores)([f.default], () => f.default.getErrors()), w = (0, x.useChangeUsernameLivecheckEnabled)(), F = r.isPomelo() && w, G = (0, N.useUsernameStatus)(L, F, !1, r.username), y = n.useRef(null), H = n.useMemo(() => {
                    var e, t, s;
                    return null !== (s = null == D ? void 0 : null === (e = D.username) || void 0 === e ? void 0 : e[0]) && void 0 !== s ? s : null == D ? void 0 : null === (t = D.discriminator) || void 0 === t ? void 0 : t[0]
                }, [D]);
                n.useEffect(() => {
                    if (s === E.ModalTransitionState.ENTERED) {
                        var e;
                        null === (e = y.current) || void 0 === e || e.focus()
                    }
                }, [s]);
                let V = U !== r.discriminator;
                async function z(e) {
                    e.preventDefault(), O(!0);
                    let t = await (0, S.saveAccountChanges)({
                        username: L,
                        discriminator: u ? U : void 0,
                        password: P
                    });
                    O(!1), (null == t ? void 0 : t.ok) && l()
                }
                let W = n.useMemo(() => d(A, 50), []);
                return (0, a.jsxs)(E.ModalRoot, {
                    transitionState: s,
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
                            onClick: l,
                            className: I.modalCloseButton
                        })]
                    }), (0, a.jsxs)("form", {
                        onSubmit: z,
                        children: [(0, a.jsxs)(E.ModalContent, {
                            className: I.content,
                            children: [(0, a.jsx)(E.FormItem, {
                                title: C.default.Messages.FORM_LABEL_USERNAME,
                                error: H,
                                children: (0, a.jsxs)("div", {
                                    className: o(T.input, I.multiInput, {
                                        [T.error]: null != H,
                                        [T.focused]: c
                                    }),
                                    children: [(0, a.jsx)(E.TextInput, {
                                        name: "username",
                                        "aria-label": C.default.Messages.USER_SETTINGS_LABEL_USERNAME,
                                        value: L,
                                        maxLength: p.USERNAME_MAX_LENGTH,
                                        onChange: j,
                                        onFocus: () => W(!0),
                                        onBlur: () => W(!1),
                                        inputRef: y,
                                        className: I.multiInputFirst,
                                        inputClassName: o(I.multiInputField, {
                                            [I.lowercase]: r.isPomelo()
                                        })
                                    }), !r.isPomelo() && (0, a.jsx)(E.TextInput, {
                                        name: "discriminator",
                                        "aria-label": C.default.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
                                        maxLength: 4,
                                        value: U,
                                        onChange: b,
                                        onFocus: () => W(!0),
                                        onBlur: () => W(!1),
                                        inputPrefix: "#",
                                        disabled: !u,
                                        className: I.multiInputLast,
                                        inputClassName: I.multiInputField
                                    })]
                                })
                            }), V ? (0, a.jsx)(E.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: I.discriminatorChangeWarning,
                                children: C.default.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
                            }) : null, F ? (0, a.jsx)(_.default, {
                                show: (null == G ? void 0 : G.type) === h.NameValidationState.ERROR || c,
                                top: 8,
                                bottom: 4,
                                children: (0, a.jsx)(g, {
                                    usernameStatus: G,
                                    showHint: r.isPomelo()
                                })
                            }) : null, (0, a.jsx)(E.FormItem, {
                                className: I.password,
                                title: C.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                                error: null == D ? void 0 : null === (t = D.password) || void 0 === t ? void 0 : t[0],
                                children: (0, a.jsx)(E.TextInput, {
                                    type: "password",
                                    value: P,
                                    onChange: k
                                })
                            })]
                        }), (0, a.jsxs)(E.ModalFooter, {
                            children: [(0, a.jsx)(E.Button, {
                                type: "submit",
                                color: E.Button.Colors.BRAND,
                                size: E.Button.Sizes.MEDIUM,
                                submitting: B,
                                children: C.default.Messages.DONE
                            }), (0, a.jsx)(E.Button, {
                                className: I.cancel,
                                look: E.Button.Looks.LINK,
                                color: E.Button.Colors.PRIMARY,
                                onClick: l,
                                children: C.default.Messages.CANCEL
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);