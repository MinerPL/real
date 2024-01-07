            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var r = n("37983"),
                u = n("884691"),
                s = n("77078"),
                a = n("476765"),
                o = n("143460"),
                c = n("782340"),
                i = n("280930");

            function l(e) {
                let {
                    initialCustomMessage: t,
                    onSubmit: n,
                    onClose: l,
                    transitionState: d
                } = e, f = (0, a.useUID)(), [_, M] = u.useState(t);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": f,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalContent, {
                        className: i.actionContentContainer,
                        children: [(0, r.jsx)(s.Heading, {
                            id: f,
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: i.header,
                            children: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
                        }), (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
                        }), (0, r.jsx)(s.TextArea, {
                            className: i.customMessageTextArea,
                            placeholder: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
                            value: _,
                            onChange: M,
                            maxLength: o.MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH
                        })]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            onClick: () => {
                                n(_)
                            },
                            color: s.Button.Colors.BRAND,
                            size: s.Button.Sizes.SMALL,
                            children: c.default.Messages.EDIT
                        }), (0, r.jsx)(s.Button, {
                            onClick: () => {
                                l()
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            look: s.Button.Looks.LINK,
                            children: c.default.Messages.CANCEL
                        })]
                    })]
                })
            }