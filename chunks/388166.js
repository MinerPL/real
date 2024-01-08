            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
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
                return (0, s.jsxs)(a.ModalRoot, {
                    ...e,
                    transitionState: e.transitionState,
                    "aria-labelledby": t,
                    children: [(0, s.jsx)("div", {
                        className: o.animationContainer,
                        children: (0, s.jsx)(l.default, {
                            importData: u,
                            className: o.animationMiddle
                        })
                    }), (0, s.jsx)(a.ModalContent, {
                        children: (0, s.jsxs)("div", {
                            className: o.container,
                            children: [(0, s.jsx)(a.Heading, {
                                variant: "heading-xl/semibold",
                                className: o.header,
                                id: t,
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
                                    guildName: e.guildName
                                })
                            }), (0, s.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
                            }), (0, s.jsx)(a.Button, {
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