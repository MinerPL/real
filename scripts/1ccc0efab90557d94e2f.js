(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75408"], {
        230670: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return _
                }
            }), t("222007");
            var a = t("37983"),
                i = t("884691"),
                n = t("151426"),
                l = t("685698"),
                o = t("605451"),
                d = t("577776"),
                r = t("77078"),
                c = t("10641"),
                u = t("782340"),
                h = t("803089");

            function _(e) {
                let {
                    transitionState: s,
                    onClose: t,
                    onConfirm: _
                } = e, E = i.useId(), [R, C] = i.useState(!1);
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: s,
                    className: h.container,
                    "aria-labelledby": E,
                    children: [(0, a.jsx)(r.ModalHeader, {
                        separator: !1,
                        className: h.header,
                        children: (0, a.jsx)(o.Heading, {
                            id: E,
                            variant: "heading-lg/bold",
                            children: u.default.Messages.BURST_REACTIONS_REMOVE_MODAL_TITLE
                        })
                    }), (0, a.jsxs)(r.ModalContent, {
                        children: [(0, a.jsx)(d.Text, {
                            className: h.description,
                            variant: "text-sm/medium",
                            children: u.default.Messages.BURST_REACTIONS_REMOVE_MODAL_DESCRIPTION
                        }), (0, a.jsxs)("div", {
                            className: h.buttons,
                            children: [(0, a.jsx)(r.Button, {
                                color: r.Button.Colors.RED,
                                fullWidth: !0,
                                onClick: function() {
                                    R && (0, c.markDismissibleContentAsDismissed)(n.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), _(), t()
                                },
                                children: u.default.Messages.BURST_REACTIONS_REMOVE_MODAL_CONFIRM
                            }), (0, a.jsx)(r.Button, {
                                color: r.Button.Colors.TRANSPARENT,
                                fullWidth: !0,
                                onClick: t,
                                children: u.default.Messages.BURST_REACTIONS_REMOVE_MODAL_CANCEL
                            })]
                        })]
                    }), (0, a.jsx)(r.ModalFooter, {
                        children: (0, a.jsx)(l.Checkbox, {
                            type: l.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: () => C(!R),
                            children: (0, a.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: u.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        }
    }
]);