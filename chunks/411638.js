            "use strict";
            s.r(a), s.d(a, {
                ConfirmNoSharedServerSubscribeWarningModal: function() {
                    return d
                }
            });
            var t = s("37983");
            s("884691");
            var n = s("77078"),
                o = s("782340"),
                i = s("865589"),
                r = s("387877");

            function d(e) {
                let {
                    application: a,
                    onConfirm: s,
                    onClose: d,
                    onCancel: l,
                    ...c
                } = e;
                return (0, t.jsxs)(n.ModalRoot, {
                    ...c,
                    children: [(0, t.jsxs)(n.ModalContent, {
                        className: i.body,
                        children: [(0, t.jsx)("img", {
                            alt: "",
                            src: r,
                            className: i.img,
                            "aria-hidden": !0
                        }), (0, t.jsx)(n.Heading, {
                            variant: "heading-xl/extrabold",
                            className: i.title,
                            children: o.default.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_TITLE.format({
                                applicationName: a.name
                            })
                        }), (0, t.jsx)(n.Text, {
                            variant: "text-md/medium",
                            children: o.default.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_BODY
                        })]
                    }), (0, t.jsxs)(n.ModalFooter, {
                        children: [(0, t.jsx)(n.Button, {
                            onClick: () => {
                                s(), d()
                            },
                            children: o.default.Messages.CONTINUE
                        }), (0, t.jsx)(n.Button, {
                            className: i.cancel,
                            onClick: () => {
                                l(), d()
                            },
                            look: n.Button.Looks.LINK,
                            color: n.Button.Colors.PRIMARY,
                            children: o.default.Messages.CANCEL
                        })]
                    })]
                })
            }