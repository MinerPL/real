(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50549"], {
        474539: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useUrlParts: function() {
                    return n
                },
                useModalState: function() {
                    return l
                }
            });
            var o = a("884691"),
                s = a("48703");

            function n(t) {
                let {
                    protocol: e,
                    hostname: a
                } = o.useMemo(() => ({
                    protocol: (0, s.getProtocol)(t),
                    hostname: (0, s.getHostname)(t)
                }), [t]), n = "".concat(e, "//").concat(a), l = t.replace(n, "");
                return {
                    protocol: e,
                    hostname: a,
                    theRestOfTheUrl: l
                }
            }

            function l(t) {
                let {
                    url: e,
                    trustUrl: a,
                    onConfirm: s,
                    onClose: l
                } = t, [r, i] = o.useState(!1), {
                    protocol: c,
                    hostname: d,
                    theRestOfTheUrl: u
                } = n(e), _ = o.useCallback(() => {
                    r && a(e), null == l || l(), s()
                }, [e, r, a, s, l]);
                return {
                    protocol: c,
                    hostname: d,
                    theRestOfTheUrl: u,
                    shouldTrustUrl: r,
                    setShouldTrustUrl: i,
                    handleConfirm: _
                }
            }
        },
        153128: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return c
                }
            });
            var o = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("476765"),
                l = a("474539"),
                r = a("782340"),
                i = a("659896");

            function c(t) {
                let {
                    url: e,
                    trustUrl: a,
                    isProtocol: c,
                    onConfirm: d,
                    onClose: u,
                    transitionState: _
                } = t, x = (0, n.useUID)(), {
                    protocol: m,
                    hostname: M,
                    theRestOfTheUrl: E,
                    shouldTrustUrl: T,
                    setShouldTrustUrl: h,
                    handleConfirm: R
                } = (0, l.useModalState)({
                    url: e,
                    trustUrl: a,
                    onConfirm: d,
                    onClose: u
                });
                return (0, o.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.DYNAMIC,
                    transitionState: _,
                    "aria-labelledby": x,
                    children: [(0, o.jsxs)(s.ModalContent, {
                        children: [(0, o.jsx)(s.Heading, {
                            id: x,
                            variant: "heading-xl/bold",
                            className: i.title,
                            children: r.default.Messages.MASKED_LINK_ALERT_V2_HEADER
                        }), (0, o.jsx)(s.Text, {
                            className: i.warningText,
                            variant: "text-md/normal",
                            children: c ? r.default.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : r.default.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
                        }), (0, o.jsxs)(s.Scroller, {
                            className: i.linkCalloutContainer,
                            children: [(0, o.jsxs)(s.Text, {
                                tag: "span",
                                variant: c ? "text-md/semibold" : "text-md/normal",
                                color: c ? "text-normal" : "text-muted",
                                children: [m, "//"]
                            }), (0, o.jsx)(s.Text, {
                                tag: "span",
                                variant: c ? "text-md/normal" : "text-md/semibold",
                                color: c ? "text-muted" : "text-normal",
                                children: M
                            }), (0, o.jsx)(s.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: E
                            })]
                        }), (0, o.jsx)(s.Checkbox, {
                            className: i.checkbox,
                            type: s.Checkbox.Types.INVERTED,
                            value: T,
                            onChange: (t, e) => h(e),
                            children: (0, o.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: c ? r.default.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
                                    protocol: m.replace(":", "")
                                }) : r.default.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
                                    domain: M
                                })
                            })
                        })]
                    }), (0, o.jsxs)(s.ModalFooter, {
                        children: [(0, o.jsx)(s.Button, {
                            type: "button",
                            size: s.Button.Sizes.MEDIUM,
                            color: s.Button.Colors.BRAND,
                            onClick: R,
                            children: c ? r.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : r.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
                        }), (0, o.jsx)(s.Button, {
                            type: "button",
                            size: s.Button.Sizes.MEDIUM,
                            color: s.Button.Colors.PRIMARY,
                            onClick: u,
                            look: s.ButtonLooks.LINK,
                            children: r.default.Messages.GO_BACK
                        })]
                    })]
                })
            }
        }
    }
]);