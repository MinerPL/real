(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3383"], {
        650672: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983"),
                s = l("884691"),
                o = l("759843"),
                a = l("77078"),
                r = l("599417"),
                u = l("428958"),
                i = l("782340"),
                d = l("125589");

            function c(e) {
                let {
                    transitionState: t,
                    onFormSubmit: l,
                    onSuccess: c,
                    onClose: h,
                    headerText: p,
                    confirmButtonText: f,
                    confirmButtonColor: m,
                    impressionName: M
                } = e, [x, C] = s.useState(!1), [j, g] = s.useState(""), [B, k] = s.useState(null), y = s.useRef(null);
                (0, u.default)({
                    type: o.ImpressionTypes.MODAL,
                    name: M
                });
                let I = async e => {
                    e.preventDefault(), k(null), C(!0);
                    try {
                        let e = null != l ? await l(j) : void 0;
                        null != c && (null != e ? c({
                            response: e,
                            email: j
                        }) : c(j)), h()
                    } catch (t) {
                        let e = new r.default(t);
                        k(e.getAnyErrorMessage())
                    } finally {
                        C(!1)
                    }
                };
                return (0, n.jsx)(a.ModalRoot, {
                    transitionState: t,
                    children: (0, n.jsxs)("form", {
                        onSubmit: I,
                        children: [(0, n.jsxs)(a.ModalHeader, {
                            separator: !1,
                            className: d.header,
                            children: [(0, n.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                className: d.title,
                                children: p
                            }), (0, n.jsx)(a.ModalCloseButton, {
                                onClick: h,
                                className: d.modalCloseButton
                            })]
                        }), (0, n.jsx)(a.ModalContent, {
                            children: (0, n.jsx)(a.FormItem, {
                                title: i.default.Messages.EMAIL,
                                error: B,
                                children: (0, n.jsx)(a.TextInput, {
                                    value: j,
                                    onChange: g,
                                    inputRef: y
                                })
                            })
                        }), (0, n.jsxs)(a.ModalFooter, {
                            children: [(0, n.jsx)(a.Button, {
                                type: "submit",
                                color: null != m ? m : a.Button.Colors.BRAND,
                                size: a.Button.Sizes.MEDIUM,
                                submitting: x,
                                children: f
                            }), (0, n.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                onClick: h,
                                children: i.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);