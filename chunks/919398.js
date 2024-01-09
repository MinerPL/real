            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("491401"),
                i = n("782340"),
                r = n("241379");

            function o(e) {
                let {
                    onClose: t,
                    guildName: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)("div", {
                        className: r.iconContainer,
                        children: (0, a.jsx)(l.default, {
                            className: r.icon,
                            width: 20,
                            height: 20
                        })
                    }), (0, a.jsxs)("div", {
                        className: r.header,
                        children: [(0, a.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            className: r.headerText,
                            children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
                                guildName: n
                            })
                        }), (0, a.jsx)(s.Button, {
                            onClick: t,
                            className: r.button,
                            children: i.default.Messages.OKAY
                        })]
                    })]
                })
            }