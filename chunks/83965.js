            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                o = n("77078"),
                r = n("476765"),
                l = n("143460"),
                i = n("782340"),
                u = n("280930");

            function d(e) {
                let {
                    initialCustomMessage: t,
                    onSubmit: n,
                    onClose: d,
                    transitionState: c
                } = e, _ = (0, r.useUID)(), [M, A] = a.useState(t);
                return (0, s.jsxs)(o.ModalRoot, {
                    transitionState: c,
                    "aria-labelledby": _,
                    size: o.ModalSize.SMALL,
                    children: [(0, s.jsxs)(o.ModalContent, {
                        className: u.actionContentContainer,
                        children: [(0, s.jsx)(o.Heading, {
                            id: _,
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: u.header,
                            children: i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
                        }), (0, s.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
                        }), (0, s.jsx)(o.TextArea, {
                            className: u.customMessageTextArea,
                            placeholder: i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
                            value: M,
                            onChange: A,
                            maxLength: l.MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH
                        })]
                    }), (0, s.jsxs)(o.ModalFooter, {
                        children: [(0, s.jsx)(o.Button, {
                            onClick: () => {
                                n(M)
                            },
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.SMALL,
                            children: i.default.Messages.EDIT
                        }), (0, s.jsx)(o.Button, {
                            onClick: () => {
                                d()
                            },
                            color: o.Button.Colors.TRANSPARENT,
                            look: o.Button.Looks.LINK,
                            children: i.default.Messages.CANCEL
                        })]
                    })]
                })
            }