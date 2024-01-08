            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("491605"),
                i = n("476765"),
                r = n("782340"),
                o = n("526073");
            let u = () => n.el("672332").then(n.t.bind(n, "672332", 19)).then(e => {
                let {
                    default: t
                } = e;
                return t
            });
            var d = e => {
                let t = (0, i.useUID)();
                return (0, a.jsxs)(s.ModalRoot, {
                    ...e,
                    transitionState: e.transitionState,
                    "aria-labelledby": t,
                    children: [(0, a.jsx)("div", {
                        className: o.animationContainer,
                        children: (0, a.jsx)(l.default, {
                            importData: u,
                            className: o.animationMiddle
                        })
                    }), (0, a.jsx)(s.ModalContent, {
                        children: (0, a.jsxs)("div", {
                            className: o.container,
                            children: [(0, a.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: o.header,
                                id: t,
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
                                    guildName: e.guildName
                                })
                            }), (0, a.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
                            }), (0, a.jsx)(s.Button, {
                                className: o.button,
                                onClick: () => {
                                    e.onAccept(), e.onClose()
                                },
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
                            })]
                        })
                    })]
                })
            }