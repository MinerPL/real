(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91771"], {
        969927: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return f
                }
            });
            var a = t("920040"),
                o = t("773670"),
                l = t("498225"),
                n = t("77078"),
                r = t("152584"),
                u = t("790618"),
                d = t("258078"),
                i = t("648661"),
                c = t("49111"),
                S = t("782340"),
                E = t("602578");

            function f(e) {
                var s, t, f, R;
                let {
                    transitionState: _,
                    onSuccess: M,
                    onClose: T,
                    requirementsUpdated: m,
                    noSkip: v = !1
                } = e, [h, A] = o.useState(""), [N, C] = o.useState(""), [I, p] = o.useState(""), [x, P] = o.useState(null), [D, O] = o.useState(null), g = (0, l.useStateFromStores)([u.default], () => u.default.getErrors()), j = (0, l.useStateFromStores)([u.default], () => u.default.getFormState()), w = o.useRef(null);
                async function F(e) {
                    var s;
                    e.preventDefault(), (0, r.clearErrors)();
                    let t = !1;
                    if ("" === N ? (P(S.default.Messages.PASSWORD_REQUIREMENTS_EMPTY), t = !0) : P(null), N !== I ? (O(S.default.Messages.FORM_LABEL_NEW_PASSWORD_MISMATCH), t = !0) : O(null), t) return;
                    let a = await (0, r.saveAccountChanges)({
                        password: h,
                        newPassword: N
                    });
                    (null == a ? void 0 : a.ok) ? M(): (null == a ? void 0 : null === (s = a.body) || void 0 === s ? void 0 : s.username) != null && (0, i.showInvalidUsernameToast)()
                }
                return o.useEffect(() => {
                    if (_ === n.ModalTransitionState.ENTERED) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.focus()
                    }
                }, [_]), (0, a.jsxs)(n.ModalRoot, {
                    transitionState: _,
                    children: [(0, a.jsxs)(n.ModalHeader, {
                        separator: !1,
                        className: E.header,
                        children: [(0, a.jsx)(d.default, {
                            color: d.default.Colors.HEADER_PRIMARY,
                            size: d.default.Sizes.SIZE_24,
                            className: E.title,
                            children: S.default.Messages.UPDATE_PASSWORD
                        }), (0, a.jsx)(n.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: E.subtitle,
                            children: m ? S.default.Messages.FORCE_PASSWORD_UPDATE_DESCRIPTION : S.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_PASSWORD_PROMPT_DESKTOP
                        }), !0 !== v && (0, a.jsx)(n.ModalCloseButton, {
                            onClick: T,
                            className: E.modalCloseButton
                        })]
                    }), (0, a.jsxs)("form", {
                        onSubmit: F,
                        children: [(0, a.jsxs)(n.ModalContent, {
                            className: E.content,
                            children: [(0, a.jsx)(n.FormItem, {
                                title: S.default.Messages.FORM_LABEL_CURRENT_PASSWORD,
                                error: null == g ? void 0 : null === (s = g.password) || void 0 === s ? void 0 : s[0],
                                children: (0, a.jsx)(n.TextInput, {
                                    type: "password",
                                    value: h,
                                    onChange: A,
                                    inputRef: w
                                })
                            }), (0, a.jsx)(n.FormItem, {
                                className: E.newPassword,
                                title: S.default.Messages.FORM_LABEL_NEW_PASSWORD,
                                error: null !== (R = null !== (f = null == g ? void 0 : null === (t = g.new_password) || void 0 === t ? void 0 : t[0]) && void 0 !== f ? f : x) && void 0 !== R ? R : void 0,
                                children: (0, a.jsx)(n.TextInput, {
                                    type: "password",
                                    value: N,
                                    onChange: C
                                })
                            }), (0, a.jsx)(n.FormItem, {
                                className: E.newPassword,
                                title: S.default.Messages.FORM_LABEL_CONFIRM_NEW_PASSWORD,
                                error: null != D ? D : void 0,
                                children: (0, a.jsx)(n.TextInput, {
                                    type: "password",
                                    value: I,
                                    onChange: p
                                })
                            })]
                        }), (0, a.jsxs)(n.ModalFooter, {
                            children: [(0, a.jsx)(n.Button, {
                                type: "submit",
                                color: n.Button.Colors.BRAND,
                                size: n.Button.Sizes.MEDIUM,
                                submitting: j === c.FormStates.SUBMITTING,
                                children: S.default.Messages.DONE
                            }), !0 !== v && (0, a.jsx)(n.Button, {
                                className: E.cancel,
                                look: n.Button.Looks.LINK,
                                color: n.Button.Colors.PRIMARY,
                                onClick: T,
                                children: S.default.Messages.CANCEL
                            })]
                        })]
                    })]
                })
            }
        },
        648661: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                showInvalidUsernameToast: function() {
                    return l
                }
            });
            var a = t("77078"),
                o = t("782340");

            function l() {
                (0, a.showToast)((0, a.createToast)(o.default.Messages.USER_SETTINGS_UPDATE_FAILURE, a.ToastType.FAILURE))
            }
        }
    }
]);