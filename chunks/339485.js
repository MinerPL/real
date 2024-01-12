            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("819855"),
                s = n("77078"),
                a = n("272091"),
                u = n("782340");

            function o(e) {
                let {
                    guildId: t,
                    maxAge: n,
                    onConfirm: o,
                    onDismiss: d,
                    theme: c
                } = e, f = (0, a.default)(t, 0 === n);
                return (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(s.Button, {
                        onClick: o,
                        disabled: f,
                        children: u.default.Messages.GENERATE_A_NEW_LINK
                    }), (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: (0, r.isThemeLight)(c) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
                        onClick: d,
                        children: u.default.Messages.CANCEL
                    })]
                })
            }