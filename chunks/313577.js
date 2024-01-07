            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("54239"),
                i = s("393414"),
                r = s("49111"),
                o = s("782340"),
                d = s("536914"),
                u = s("156465");

            function c() {
                return (0, a.jsxs)("div", {
                    className: d.wrapper,
                    children: [(0, a.jsx)("img", {
                        className: d.icon,
                        alt: "",
                        src: u
                    }), (0, a.jsxs)("div", {
                        className: d.info,
                        children: [(0, a.jsx)(n.Text, {
                            variant: "text-lg/bold",
                            children: o.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_TITLE
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: o.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_SUBTITLE
                        })]
                    }), (0, a.jsx)(n.Button, {
                        color: n.Button.Colors.PRIMARY,
                        onClick: () => {
                            (0, i.transitionTo)(r.Routes.GUILD_DISCOVERY), (0, l.popLayer)()
                        },
                        size: n.Button.Sizes.LARGE,
                        children: o.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_CTA
                    })]
                })
            }