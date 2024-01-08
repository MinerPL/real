            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("748820"),
                u = n("469563"),
                o = n("733154"),
                d = n("77078"),
                c = n("996496"),
                f = n("574586");

            function h(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    isBadged: s = !1,
                    isTyping: i = !1
                } = e, [c] = l.useState(() => (0, r.v4)()), f = (0, u.useRedesignIconContext)().enabled;
                return (0, a.jsxs)("svg", {
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("defs", {
                        children: (0, a.jsxs)("mask", {
                            id: c,
                            children: [(0, a.jsx)("rect", {
                                fill: "white",
                                width: "100%",
                                height: "100%"
                            }), i && (0, a.jsx)("g", {
                                fill: "black",
                                transform: "translate(5.5, ".concat(f ? 10.5 : 8.5, ") scale(").concat(11 / 24, ")"),
                                children: (0, a.jsx)(d.AnimatedDots, {
                                    dotRadius: 3.5,
                                    spacing: 3,
                                    fill: "black"
                                })
                            }), s && (0, a.jsx)("circle", {
                                cx: "20",
                                cy: "19",
                                r: "10",
                                fill: "red"
                            })]
                        })
                    }), f ? (0, a.jsx)("g", {
                        mask: "url(#".concat(c, ")"),
                        children: (0, a.jsx)(o.ChatIcon, {
                            width: t,
                            height: n,
                            color: "currentColor"
                        })
                    }) : (0, a.jsx)("path", {
                        fill: "currentColor",
                        d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
                        mask: "url(#".concat(c, ")")
                    })]
                })
            }

            function p(e) {
                var t;
                let {
                    className: n,
                    unreadCount: l,
                    mentionCount: s,
                    isTyping: r,
                    canBadge: u
                } = e, o = null != s && s > 0, d = null !== (t = o ? s : l) && void 0 !== t ? t : 0, p = u && null != l && l > 0;
                return (0, a.jsxs)("div", {
                    className: i(f.chatIcon, n),
                    children: [(0, a.jsx)(h, {
                        isBadged: p,
                        isTyping: r
                    }), p && (0, a.jsx)(c.default, {
                        hasMentions: o,
                        truncatedCount: d > 99 ? "99+" : d,
                        className: f.badge
                    })]
                })
            }