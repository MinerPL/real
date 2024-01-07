            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("79112"),
                n = a("49111"),
                r = a("782340"),
                o = a("341923");

            function d(e) {
                let {
                    onClose: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: o.infoContainer,
                    children: [(0, s.jsx)(l.Heading, {
                        className: o.finishTitle,
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
                    }), (0, s.jsx)(l.Text, {
                        className: o.subtitleFinish,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
                    }), (0, s.jsx)(l.Text, {
                        className: o.promptFinish,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                            onClick: () => {
                                t(), i.default.open(n.UserSettingsSections.ACCOUNT)
                            }
                        })
                    }), (0, s.jsx)(l.Button, {
                        className: o.button,
                        type: "button",
                        size: l.Button.Sizes.SMALL,
                        onClick: t,
                        children: r.default.Messages.INVITES_DISABLED_CONFIRMATION
                    })]
                })
            }