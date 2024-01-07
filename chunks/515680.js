            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                i = n("77078"),
                o = n("476765"),
                u = n("200008"),
                s = n("782340"),
                l = n("37805");

            function c(e) {
                let {
                    onClose: t,
                    transitionState: n
                } = e, c = (0, o.useUID)(), [d, f] = a.useState("");
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": c,
                    children: [(0, r.jsxs)(i.ModalContent, {
                        children: [(0, r.jsx)(i.Heading, {
                            id: c,
                            className: l.header,
                            variant: "heading-xl/semibold",
                            children: s.default.Messages.CREATE_CATEGORY
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            onClick: t,
                            className: l.closeButton
                        }), (0, r.jsx)(i.FormItem, {
                            title: s.default.Messages.CATEGORY_NAME,
                            className: l.name,
                            children: (0, r.jsx)(i.TextInput, {
                                value: d,
                                onChange: f,
                                maxLength: 100,
                                placeholder: s.default.Messages.CATEGORY_NAME_PLACEHOLDER,
                                className: l.inputWrapper,
                                autoFocus: !0
                            })
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        children: [(0, r.jsx)(i.Button, {
                            onClick: function() {
                                (0, u.addFavoriteCategory)(d), t()
                            },
                            disabled: "" === d,
                            children: s.default.Messages.CREATE_CATEGORY
                        }), (0, r.jsx)(i.Button, {
                            onClick: t,
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            children: s.default.Messages.CANCEL
                        })]
                    })]
                })
            }