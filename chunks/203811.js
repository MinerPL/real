            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var u = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("987317"),
                d = n("119184"),
                r = n("476765"),
                a = n("943232"),
                s = n("322224"),
                c = n("534222"),
                o = n("782340"),
                E = n("947448");

            function f(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: f
                } = e, v = (0, r.useUID)(), _ = (0, c.useActiveEvent)(t.id);
                if (null == _) return null;
                let N = () => {
                    i.default.selectVoiceChannel(null), f()
                };
                return (0, u.jsxs)(l.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": v,
                    size: l.ModalSize.SMALL,
                    children: [(0, u.jsxs)(l.ModalContent, {
                        className: E.content,
                        children: [(0, u.jsx)(d.default, {
                            children: (0, u.jsx)("div", {
                                className: E.iconBackground,
                                children: (0, u.jsx)(a.default, {
                                    height: 40,
                                    width: 40,
                                    className: E.icon
                                })
                            })
                        }), (0, u.jsx)(l.Heading, {
                            id: v,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: E.title,
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_TITLE
                        }), (0, u.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: E.subtitle,
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_BODY
                        })]
                    }), (0, u.jsxs)(l.ModalFooter, {
                        children: [(0, u.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: () => {
                                s.default.endEvent(_.id, _.guild_id), N()
                            },
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
                        }), (0, u.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: E.cancelButton,
                            onClick: N,
                            children: o.default.Messages.GUILD_EVENT_END_PROMPT_CANCEL
                        })]
                    })]
                })
            }