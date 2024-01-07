            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("745633"),
                l = n("782340"),
                r = n("672639"),
                o = e => {
                    let {
                        hasHub: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r.container,
                        children: [(0, a.jsx)("div", {
                            className: r.iconContainer,
                            children: (0, a.jsx)(i.default, {
                                color: s.tokens.colors.WHITE.css
                            })
                        }), (0, a.jsx)(s.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: r.header,
                            children: t ? l.default.Messages.HUB_EMAIL_CONNECTION_ADD_HEADER : l.default.Messages.HUB_EMAIL_CONNECTION_JOIN_HEADER
                        }), (0, a.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: r.description,
                            children: t ? l.default.Messages.HUB_EMAIL_CONNECTION_ADD_DESCRIPTION : l.default.Messages.HUB_EMAIL_CONNECTION_JOIN_CARD_DESCRIPTION
                        }), (0, a.jsx)("div", {
                            className: r.gap
                        }), (0, a.jsx)(s.Button, {
                            size: s.Button.Sizes.LARGE,
                            color: t ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            onClick: () => (0, s.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("927475").then(n.bind(n, "927475"));
                                return t => (0, a.jsx)(e, {
                                    ...t
                                })
                            }),
                            children: (0, a.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                className: r.addButton,
                                color: "none",
                                children: t ? l.default.Messages.HUB_EMAIL_CONNECTION_JOIN_ANOTHER : l.default.Messages.HUB_EMAIL_CONNECTION_JOIN_MY_SCHOOOL
                            })
                        })]
                    })
                }