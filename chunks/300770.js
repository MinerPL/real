            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                i = n("884691"),
                o = n("77078"),
                r = n("197509"),
                s = n("782914"),
                l = n("191814"),
                u = n("423487"),
                c = n("782340"),
                d = n("620610");

            function T(t) {
                let {
                    guildId: e,
                    transitionState: n,
                    onClose: T
                } = t, [E, _] = i.useState(!1), [C, R] = i.useState(!1), O = async () => {
                    _(!0);
                    try {
                        await (0, r.acceptCreatorMonetizationTermsV2)(e), T()
                    } finally {
                        _(!1)
                    }
                }, f = c.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
                return (0, a.jsxs)(o.ModalRoot, {
                    className: d.container,
                    size: o.ModalSize.DYNAMIC,
                    transitionState: n,
                    "aria-label": f,
                    children: [(0, a.jsxs)(o.ModalContent, {
                        className: d.content,
                        children: [(0, a.jsxs)("div", {
                            className: d.header,
                            children: [(0, a.jsx)(u.default, {
                                width: 20,
                                height: 20,
                                className: d.warningIcon
                            }), (0, a.jsx)(l.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, a.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: f
                            })]
                        }), (0, a.jsx)(l.default, {
                            size: 12
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            className: d.body,
                            children: c.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY
                        }), (0, a.jsx)(l.default, {
                            size: 28
                        }), (0, a.jsx)(o.Checkbox, {
                            onChange: () => {
                                R(t => !t)
                            },
                            size: 20,
                            type: o.Checkbox.Types.INVERTED,
                            value: C,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: (0, s.getCreatorMonetizationAcceptTermsCheckboxText)()
                            })
                        })]
                    }), (0, a.jsxs)(o.ModalFooter, {
                        children: [(0, a.jsx)(o.Button, {
                            color: o.Button.Colors.BRAND,
                            disabled: !C,
                            onClick: O,
                            submitting: E,
                            children: c.default.Messages.CONFIRM
                        }), (0, a.jsx)(l.default, {
                            size: 12,
                            horizontal: !0
                        }), (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.OUTLINED,
                            onClick: T,
                            children: c.default.Messages.CANCEL
                        })]
                    })]
                })
            }