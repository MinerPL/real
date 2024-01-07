            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("817963"),
                a = n("151185"),
                u = n("569717"),
                d = n("782340"),
                c = n("231641");

            function f(e) {
                let {
                    guild: t,
                    focused: n,
                    ...i
                } = e, {
                    canCreateExpressions: f
                } = (0, s.useManageResourcePermissions)(t);
                return (0, l.jsx)(o.Tooltip, {
                    text: d.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
                    shouldShow: !f,
                    children: e => (0, l.jsx)("li", {
                        className: c.soundButtonWrapper,
                        ...e,
                        children: (0, l.jsxs)(o.ClickableContainer, {
                            ...i,
                            "aria-label": d.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                                guildName: t.name
                            }),
                            className: r(c.soundAddButton, {
                                [c.focused]: n,
                                [c.disabled]: !f
                            }),
                            onClick: () => (0, u.default)(t.id),
                            children: [(0, l.jsx)(a.default, {
                                className: c.soundAddIcon
                            }), (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: f ? "header-primary" : "text-muted",
                                children: d.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                            })]
                        })
                    })
                })
            }