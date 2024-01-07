            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                l = a("759843"),
                r = a("77078"),
                o = a("599417"),
                i = a("428958"),
                u = a("782340"),
                d = a("277012"),
                c = a("92693");

            function f(e) {
                let {
                    transitionState: t,
                    onFormSubmit: a,
                    onResend: f,
                    onSuccess: C,
                    onClose: T,
                    headerText: E,
                    confirmButtonText: _,
                    confirmButtonColor: g,
                    impressionName: I
                } = e, [h, p] = s.useState(!1), [M, R] = s.useState(""), [m, S] = s.useState(!1), [A, N] = s.useState(null), v = s.useRef(null);
                (0, i.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: I
                });
                let x = async e => {
                    e.preventDefault(), N(null), p(!0);
                    try {
                        let e = await a(M);
                        null != C && C(e), T()
                    } catch (t) {
                        let e = new o.default(t);
                        N(e.getAnyErrorMessage())
                    } finally {
                        p(!1)
                    }
                }, y = async () => {
                    if (!m) {
                        S(!0);
                        try {
                            await f(), (0, r.showToast)((0, r.createToast)(u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, r.ToastType.SUCCESS))
                        } catch (a) {
                            let e = new o.default(a),
                                t = e.getAnyErrorMessage();
                            null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
                        } finally {
                            S(!1)
                        }
                    }
                };
                return (0, n.jsx)(r.ModalRoot, {
                    transitionState: t,
                    children: (0, n.jsxs)("form", {
                        onSubmit: x,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            className: d.headerImage,
                            src: c
                        }), (0, n.jsxs)(r.ModalHeader, {
                            separator: !1,
                            className: d.header,
                            children: [(0, n.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                className: d.title,
                                children: E
                            }), (0, n.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                className: d.subtitle,
                                children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
                            }), (0, n.jsx)(r.ModalCloseButton, {
                                onClick: T,
                                className: d.modalCloseButton
                            })]
                        }), (0, n.jsxs)(r.ModalContent, {
                            children: [(0, n.jsx)(r.FormItem, {
                                title: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                                error: A,
                                children: (0, n.jsx)(r.TextInput, {
                                    value: M,
                                    onChange: R,
                                    inputRef: v
                                })
                            }), (0, n.jsx)(r.Text, {
                                className: d.help,
                                variant: "text-sm/normal",
                                children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
                                    onResend: y
                                })
                            })]
                        }), (0, n.jsxs)(r.ModalFooter, {
                            children: [(0, n.jsx)(r.Button, {
                                type: "submit",
                                color: null != g ? g : r.Button.Colors.BRAND,
                                size: r.Button.Sizes.MEDIUM,
                                submitting: h,
                                children: _
                            }), (0, n.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: T,
                                children: u.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }