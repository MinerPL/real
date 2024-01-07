            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return d
                }
            });
            var a = A("37983");
            A("884691");
            var l = A("509043"),
                n = A("77078"),
                r = A("191814"),
                s = A("45029"),
                o = A("782340"),
                i = A("411531");

            function d(e) {
                let {
                    locked: t,
                    role: A,
                    textVariant: d = "text-xs/medium"
                } = e, u = (0, n.useToken)(n.tokens.colors.INTERACTIVE_NORMAL).hex();
                return (0, a.jsx)("div", {
                    className: i.roleTagContainer,
                    children: (0, a.jsxs)("div", {
                        className: i.roleTag,
                        children: [(0, a.jsx)("div", {
                            className: i.roleColor,
                            style: {
                                backgroundColor: (0, l.int2hex)(A.color)
                            }
                        }), (0, a.jsx)(r.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, a.jsxs)(n.Text, {
                            variant: d,
                            color: "text-normal",
                            children: [(0, a.jsx)(n.HiddenVisually, {
                                children: o.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
                            }), A.name]
                        }), !0 === t && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, a.jsx)(s.default, {
                                color: u
                            })]
                        })]
                    })
                })
            }