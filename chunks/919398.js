            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("491401"),
                i = n("782340"),
                r = n("241379");

            function o(e) {
                let {
                    onClose: t,
                    guildName: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: r.container,
                    children: [(0, s.jsx)("div", {
                        className: r.iconContainer,
                        children: (0, s.jsx)(l.default, {
                            className: r.icon,
                            width: 20,
                            height: 20
                        })
                    }), (0, s.jsxs)("div", {
                        className: r.header,
                        children: [(0, s.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: r.headerText,
                            children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
                                guildName: n
                            })
                        }), (0, s.jsx)(a.Button, {
                            onClick: t,
                            className: r.button,
                            children: i.default.Messages.OKAY
                        })]
                    })]
                })
            }