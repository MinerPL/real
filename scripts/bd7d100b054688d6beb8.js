(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26567"], {
        997588: function(t, e, s) {
            "use strict";
            t.exports = s.p + "991ecc3f2fc892c5494e.svg"
        },
        536071: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var o = s("77078"),
                n = s("545158"),
                l = s("476765"),
                i = s("782340"),
                d = s("237284");

            function r(t) {
                let {
                    href: e,
                    onClose: r,
                    transitionState: c
                } = t, u = (0, l.useUID)();
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: c,
                    "aria-labelledby": u,
                    children: [(0, a.jsx)("img", {
                        className: d.art,
                        src: s("997588"),
                        alt: ""
                    }), (0, a.jsx)(o.ModalContent, {
                        children: (0, a.jsxs)("div", {
                            className: d.modalContent,
                            children: [(0, a.jsx)(o.Heading, {
                                id: u,
                                variant: "heading-lg/semibold",
                                className: d.title,
                                children: i.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_TITLE
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: d.body,
                                children: i.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_BODY
                            })]
                        })
                    }), (0, a.jsxs)(o.ModalFooter, {
                        children: [(0, a.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: r,
                            children: i.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_CANCEL
                        }), (0, a.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.TRANSPARENT,
                            look: o.Button.Looks.LINK,
                            onClick: () => {
                                r(), (0, n.default)(e, !0)
                            },
                            children: i.default.Messages.SUSPICIOUS_DOWNLOAD_WARNING_DOWNLOAD
                        })]
                    })]
                })
            }
        }
    }
]);