            "use strict";
            s.r(t), s.d(t, {
                showMFASuccessModal: function() {
                    return E
                },
                default: function() {
                    return f
                }
            }), s("70102"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("627929"),
                i = s("77078"),
                r = s("430713"),
                o = s("663657"),
                d = s("49111"),
                u = s("782340");

            function c(e) {
                let {
                    onError: t,
                    onSuccess: s,
                    PasswordConfirm: i,
                    ...o
                } = e, [c, S] = n.useState("");
                return (0, a.jsx)(i, {
                    ...o,
                    handleSubmit: e => r.default.enableMFAStart(e),
                    onError: e => {
                        var a;
                        if (("object" == typeof(a = e) && null != a && (0, l.hasOwnProperty)(a, "code") && "number" == typeof a.code ? a.code : 0) === d.AbortCodes.MFA_INVALID_SECRET) s(c), o.onClose();
                        else t(e)
                    },
                    onPasswordChange: S,
                    title: u.default.Messages.TWO_FA_ENABLE,
                    actionText: u.default.Messages.CONTINUE,
                    skipErrorMsgAbortCode: d.AbortCodes.MFA_INVALID_SECRET
                })
            }

            function S(e, t) {
                return new Promise(n => {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await s.el("936380").then(s.bind(s, "936380"));
                        return s => (0, a.jsx)(l, {
                            ...s,
                            password: e,
                            emailToken: t,
                            handleEnableMFASuccess: n
                        })
                    })
                })
            }

            function E() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return new Promise(t => {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await s.el("184504").then(s.bind(s, "184504"));
                        return s => (0, a.jsx)(t, {
                            ...s,
                            isTotp: e
                        })
                    }, {
                        onCloseCallback: t,
                        onCloseRequest: d.NOOP_NULL
                    })
                })
            }
            var f = {
                enableMFA: async function e() {
                    let e = await new Promise((e, t) => {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await s.el("583227").then(s.bind(s, "583227"));
                            return s => (0, a.jsx)(c, {
                                ...s,
                                onSuccess: e,
                                onError: t,
                                PasswordConfirm: n
                            })
                        })
                    });
                    if ((0, o.isMfaEmailVerificationEnabled)()) {
                        var t;
                        let n = await (t = e, new Promise(e => {
                            (0, i.openModalLazy)(async () => {
                                let {
                                    default: n
                                } = await s.el("644512").then(s.bind(s, "644512"));
                                return s => (0, a.jsx)(n, {
                                    ...s,
                                    onFormSubmit: async e => await r.default.verifyEmailCode(e),
                                    onResend: async () => {
                                        await r.default.resendEmailCode(t)
                                    },
                                    onSuccess: e,
                                    headerText: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                                    confirmButtonText: u.default.Messages.NEXT
                                })
                            })
                        }));
                        await S(e, null == n ? void 0 : n.token)
                    } else await S(e);
                    await E()
                }
            }