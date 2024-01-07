            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("587904"),
                o = n("933470");

            function u(e) {
                let {
                    icon: t,
                    iconNode: n,
                    timestamp: s,
                    className: i,
                    children: u,
                    contentClassName: d,
                    iconClassName: c,
                    iconContainerClassName: f,
                    compact: m = !1
                } = e;
                return (0, a.jsxs)("div", {
                    className: l(i, {
                        [o.container]: !0,
                        [o.compact]: m,
                        [o.cozy]: !m
                    }),
                    children: [null != n && (0, a.jsx)("div", {
                        className: l(o.iconContainer, f),
                        children: n
                    }), null != t && (0, a.jsx)("div", {
                        className: o.iconContainer,
                        children: (0, a.jsx)("div", {
                            "data-accessibility": "desaturate",
                            className: l(o.icon, o.iconSize, c),
                            style: {
                                backgroundImage: "url('".concat(t, "')")
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: l(d, o.content),
                        children: [u, null != s && (0, a.jsx)(r.default, {
                            timestamp: s
                        })]
                    })]
                })
            }
            u.Action = e => {
                let {
                    onClick: t,
                    children: n
                } = e;
                return (0, a.jsxs)("span", {
                    className: o.action,
                    children: ["—", (0, a.jsx)(i.Anchor, {
                        onClick: t,
                        className: o.actionAnchor,
                        children: n
                    })]
                })
            };
            var d = u