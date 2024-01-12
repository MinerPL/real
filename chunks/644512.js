            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("759843"),
                r = n("77078"),
                o = n("599417"),
                i = n("428958"),
                u = n("782340"),
                d = n("277012"),
                c = n("92693");

            function C(e) {
                let {
                    transitionState: t,
                    onFormSubmit: n,
                    onResend: C,
                    onSuccess: f,
                    onClose: T,
                    headerText: h,
                    confirmButtonText: _,
                    confirmButtonColor: p,
                    impressionName: E
                } = e, [g, m] = l.useState(!1), [I, M] = l.useState(""), [N, A] = l.useState(!1), [S, v] = l.useState(null), x = l.useRef(null);
                (0, i.default)({
                    type: s.ImpressionTypes.MODAL,
                    name: E
                });
                let R = async e => {
                    e.preventDefault(), v(null), m(!0);
                    try {
                        let e = await n(I);
                        null != f && f(e), T()
                    } catch (t) {
                        let e = new o.default(t);
                        v(e.getAnyErrorMessage())
                    } finally {
                        m(!1)
                    }
                }, y = async () => {
                    if (!N) {
                        A(!0);
                        try {
                            await C(), (0, r.showToast)((0, r.createToast)(u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, r.ToastType.SUCCESS))
                        } catch (n) {
                            let e = new o.default(n),
                                t = e.getAnyErrorMessage();
                            null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
                        } finally {
                            A(!1)
                        }
                    }
                };
                return (0, a.jsx)(r.ModalRoot, {
                    transitionState: t,
                    children: (0, a.jsxs)("form", {
                        onSubmit: R,
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            className: d.headerImage,
                            src: c
                        }), (0, a.jsxs)(r.ModalHeader, {
                            separator: !1,
                            className: d.header,
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                className: d.title,
                                children: h
                            }), (0, a.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                className: d.subtitle,
                                children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
                            }), (0, a.jsx)(r.ModalCloseButton, {
                                onClick: T,
                                className: d.modalCloseButton
                            })]
                        }), (0, a.jsxs)(r.ModalContent, {
                            children: [(0, a.jsx)(r.FormItem, {
                                title: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                                error: S,
                                children: (0, a.jsx)(r.TextInput, {
                                    value: I,
                                    onChange: M,
                                    inputRef: x
                                })
                            }), (0, a.jsx)(r.Text, {
                                className: d.help,
                                variant: "text-sm/normal",
                                children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
                                    onResend: y
                                })
                            })]
                        }), (0, a.jsxs)(r.ModalFooter, {
                            children: [(0, a.jsx)(r.Button, {
                                type: "submit",
                                color: null != p ? p : r.Button.Colors.BRAND,
                                size: r.Button.Sizes.MEDIUM,
                                submitting: g,
                                children: _
                            }), (0, a.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: T,
                                children: u.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }