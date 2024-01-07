            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n, l, a = s("37983");
            s("884691");
            var r = s("77078"),
                o = s("145131"),
                u = s("165320");
            (n = l || (l = {})).UPGRADE = "UPGRADE", n.CANCEL = "CANCEL", n.UNVERIFIED = "UNVERIFIED", n.UNCLAIMED = "UNCLAIMED", n.GRANDFATHERED = "GRANDFATHERED";
            let i = {
                    UPGRADE: "imageUpgrade",
                    CANCEL: "imageCancel",
                    UNVERIFIED: "imageUnverified",
                    UNCLAIMED: "imageUnclaimed",
                    GRANDFATHERED: "imageCancel"
                },
                c = e => {
                    let {
                        children: t,
                        ...s
                    } = e;
                    return (0, a.jsx)(r.ModalRoot, {
                        ...s,
                        children: t
                    })
                };
            c.Header = e => {
                let {
                    children: t,
                    onClose: s
                } = e;
                return (0, a.jsxs)(r.ModalHeader, {
                    justify: o.default.Justify.BETWEEN,
                    separator: !1,
                    children: [(0, a.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H4,
                        children: t
                    }), null != s ? (0, a.jsx)(r.ModalCloseButton, {
                        className: u.closeIcon,
                        onClick: s
                    }) : null]
                })
            }, c.Content = e => {
                let {
                    children: t,
                    type: s
                } = e;
                return (0, a.jsxs)(r.ModalContent, {
                    children: [(0, a.jsx)("div", {
                        className: u[i[s]]
                    }), (0, a.jsx)("div", {
                        className: u.message,
                        children: t
                    })]
                })
            }, c.Footer = e => {
                let {
                    primary: t,
                    primaryRenderer: s,
                    secondary: n
                } = e;
                return (0, a.jsx)(r.ModalFooter, {
                    children: (0, a.jsxs)(o.default, {
                        justify: o.default.Justify.END,
                        children: [null != n ? (0, a.jsx)(r.Button, {
                            onClick: n.onClick,
                            look: r.Button.Looks.LINK,
                            innerClassName: u.secondaryButton,
                            children: n.label
                        }) : null, null != t ? (0, a.jsx)(r.Button, {
                            onClick: t.onClick,
                            color: r.Button.Colors.BRAND,
                            children: t.label
                        }) : s]
                    })
                })
            }, c.Types = l;
            var d = c