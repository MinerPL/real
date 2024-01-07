            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("781738");
            var a = n("37983");
            n("884691");
            var o = n("77078"),
                s = n("476765"),
                r = n("474539"),
                l = n("782340"),
                u = n("659896");

            function i(t) {
                let {
                    url: e,
                    trustUrl: n,
                    isProtocol: i,
                    onConfirm: c,
                    onClose: d,
                    transitionState: _
                } = t, x = (0, s.useUID)(), {
                    protocol: m,
                    hostname: M,
                    theRestOfTheUrl: E,
                    shouldTrustUrl: f,
                    setShouldTrustUrl: h,
                    handleConfirm: T
                } = (0, r.useModalState)({
                    url: e,
                    trustUrl: n,
                    onConfirm: c,
                    onClose: d
                });
                return (0, a.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.DYNAMIC,
                    transitionState: _,
                    "aria-labelledby": x,
                    children: [(0, a.jsxs)(o.ModalContent, {
                        children: [(0, a.jsx)(o.Heading, {
                            id: x,
                            variant: "heading-xl/bold",
                            className: u.title,
                            children: l.default.Messages.MASKED_LINK_ALERT_V2_HEADER
                        }), (0, a.jsx)(o.Text, {
                            className: u.warningText,
                            variant: "text-md/normal",
                            children: i ? l.default.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : l.default.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
                        }), (0, a.jsxs)(o.Scroller, {
                            className: u.linkCalloutContainer,
                            children: [(0, a.jsxs)(o.Text, {
                                tag: "span",
                                variant: i ? "text-md/semibold" : "text-md/normal",
                                color: i ? "text-normal" : "text-muted",
                                children: [m, "//"]
                            }), (0, a.jsx)(o.Text, {
                                tag: "span",
                                variant: i ? "text-md/normal" : "text-md/semibold",
                                color: i ? "text-muted" : "text-normal",
                                children: M
                            }), (0, a.jsx)(o.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: E
                            })]
                        }), (0, a.jsx)(o.Checkbox, {
                            className: u.checkbox,
                            type: o.Checkbox.Types.INVERTED,
                            value: f,
                            onChange: (t, e) => h(e),
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: i ? l.default.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
                                    protocol: m.replace(":", "")
                                }) : l.default.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
                                    domain: M
                                })
                            })
                        })]
                    }), (0, a.jsxs)(o.ModalFooter, {
                        children: [(0, a.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: T,
                            children: i ? l.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : l.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
                        }), (0, a.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.PRIMARY,
                            onClick: d,
                            look: o.ButtonLooks.LINK,
                            children: l.default.Messages.GO_BACK
                        })]
                    })]
                })
            }