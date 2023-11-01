(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81835"], {
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                u = n("745510"),
                a = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");

            function u() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let u = {};

            function a(t) {
                let e = (0, r.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                u = n("48174");
            let a = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(a);
                return o.current === a ? (n.current = t(), o.current = e) : !(0, u.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        474539: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useUrlParts: function() {
                    return a
                },
                useModalState: function() {
                    return o
                }
            });
            var r = n("884691"),
                u = n("48703");

            function a(t) {
                let {
                    protocol: e,
                    hostname: n
                } = r.useMemo(() => ({
                    protocol: (0, u.getProtocol)(t),
                    hostname: (0, u.getHostname)(t)
                }), [t]), a = "".concat(e, "//").concat(n), o = t.replace(a, "");
                return {
                    protocol: e,
                    hostname: n,
                    theRestOfTheUrl: o
                }
            }

            function o(t) {
                let {
                    url: e,
                    trustUrl: n,
                    onConfirm: u,
                    onClose: o
                } = t, [s, l] = r.useState(!1), {
                    protocol: c,
                    hostname: i,
                    theRestOfTheUrl: d
                } = a(e), f = r.useCallback(() => {
                    s && n(e), null == o || o(), u()
                }, [e, s, n, u, o]);
                return {
                    protocol: c,
                    hostname: i,
                    theRestOfTheUrl: d,
                    shouldTrustUrl: s,
                    setShouldTrustUrl: l,
                    handleConfirm: f
                }
            }
        },
        153128: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("476765"),
                o = n("474539"),
                s = n("782340"),
                l = n("659896");

            function c(t) {
                let {
                    url: e,
                    trustUrl: n,
                    isProtocol: c,
                    onConfirm: i,
                    onClose: d,
                    transitionState: f
                } = t, _ = (0, a.useUID)(), {
                    protocol: x,
                    hostname: m,
                    theRestOfTheUrl: M,
                    shouldTrustUrl: h,
                    setShouldTrustUrl: E,
                    handleConfirm: R
                } = (0, o.useModalState)({
                    url: e,
                    trustUrl: n,
                    onConfirm: i,
                    onClose: d
                });
                return (0, r.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.DYNAMIC,
                    transitionState: f,
                    "aria-labelledby": _,
                    children: [(0, r.jsxs)(u.ModalContent, {
                        children: [(0, r.jsx)(u.Heading, {
                            id: _,
                            variant: "heading-xl/bold",
                            className: l.title,
                            children: s.default.Messages.MASKED_LINK_ALERT_V2_HEADER
                        }), (0, r.jsx)(u.Text, {
                            className: l.warningText,
                            variant: "text-md/normal",
                            children: c ? s.default.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : s.default.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
                        }), (0, r.jsxs)(u.Scroller, {
                            className: l.linkCalloutContainer,
                            children: [(0, r.jsxs)(u.Text, {
                                tag: "span",
                                variant: c ? "text-md/semibold" : "text-md/normal",
                                color: c ? "text-normal" : "text-muted",
                                children: [x, "//"]
                            }), (0, r.jsx)(u.Text, {
                                tag: "span",
                                variant: c ? "text-md/normal" : "text-md/semibold",
                                color: c ? "text-muted" : "text-normal",
                                children: m
                            }), (0, r.jsx)(u.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: M
                            })]
                        }), (0, r.jsx)(u.Checkbox, {
                            className: l.checkbox,
                            type: u.Checkbox.Types.INVERTED,
                            value: h,
                            onChange: (t, e) => E(e),
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: c ? s.default.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
                                    protocol: x.replace(":", "")
                                }) : s.default.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
                                    domain: m
                                })
                            })
                        })]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.BRAND,
                            onClick: R,
                            children: c ? s.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : s.default.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
                        }), (0, r.jsx)(u.Button, {
                            type: "button",
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.PRIMARY,
                            onClick: d,
                            look: u.ButtonLooks.LINK,
                            children: s.default.Messages.GO_BACK
                        })]
                    })]
                })
            }
        }
    }
]);