(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77132"], {
        997588: function(t, e, a) {
            "use strict";
            t.exports = a.p + "991ecc3f2fc892c5494e.svg"
        },
        745705: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                r = a("474539"),
                l = a("145131"),
                o = a("476765"),
                i = a("782340"),
                c = a("496673");

            function u(t) {
                let {
                    url: e,
                    onClose: u,
                    transitionState: d
                } = t, x = (0, o.useUID)(), {
                    protocol: m,
                    hostname: f,
                    theRestOfTheUrl: h
                } = (0, r.useUrlParts)(e);
                return (0, n.jsxs)(s.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": x,
                    children: [(0, n.jsx)("img", {
                        className: c.art,
                        src: a("997588"),
                        alt: ""
                    }), (0, n.jsx)(s.ModalContent, {
                        children: (0, n.jsxs)(l.default, {
                            direction: l.default.Direction.VERTICAL,
                            justify: l.default.Justify.CENTER,
                            children: [(0, n.jsx)(s.Heading, {
                                id: x,
                                variant: "heading-lg/semibold",
                                className: c.title,
                                children: i.default.Messages.BAD_LINK_WARNING_TITLE_V2
                            }), (0, n.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: c.body,
                                children: i.default.Messages.BAD_LINK_WARNING_BODY_V2.format()
                            }), (0, n.jsxs)(s.Scroller, {
                                className: c.linkCalloutContainer,
                                children: [(0, n.jsxs)(s.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: [m, "//"]
                                }), (0, n.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-md/semibold",
                                    color: "text-normal",
                                    children: f
                                }), (0, n.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: h
                                })]
                            })]
                        })
                    }), (0, n.jsx)(s.ModalFooter, {
                        children: (0, n.jsx)(s.Button, {
                            type: "button",
                            size: s.Button.Sizes.MEDIUM,
                            color: s.Button.Colors.BRAND,
                            onClick: u,
                            children: i.default.Messages.GO_BACK
                        })
                    })]
                })
            }
        },
        474539: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                useUrlParts: function() {
                    return r
                },
                useModalState: function() {
                    return l
                }
            });
            var n = a("884691"),
                s = a("48703");

            function r(t) {
                let {
                    protocol: e,
                    hostname: a
                } = n.useMemo(() => ({
                    protocol: (0, s.getProtocol)(t),
                    hostname: (0, s.getHostname)(t)
                }), [t]), r = "".concat(e, "//").concat(a), l = t.replace(r, "");
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
                } = t, [o, i] = n.useState(!1), {
                    protocol: c,
                    hostname: u,
                    theRestOfTheUrl: d
                } = r(e), x = n.useCallback(() => {
                    o && a(e), null == l || l(), s()
                }, [e, o, a, s, l]);
                return {
                    protocol: c,
                    hostname: u,
                    theRestOfTheUrl: d,
                    shouldTrustUrl: o,
                    setShouldTrustUrl: i,
                    handleConfirm: x
                }
            }
        }
    }
]);