            "use strict";
            n.r(t), n.d(t, {
                USER_MOD_ICON_SIZE_PX: function() {
                    return o
                },
                UserModInfoItem: function() {
                    return d
                },
                UserModInfoItemContainer: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("426383"),
                r = n("77078"),
                u = n("558595");
            let o = 16;

            function d(e) {
                let {
                    description: t,
                    name: n,
                    icon: l,
                    onNavigate: d
                } = e;
                return (0, a.jsxs)(r.Clickable, {
                    onClick: d,
                    className: s(u.modInfoItem, null != d && u.modInfoAction),
                    children: [null != l && (0, a.jsx)("div", {
                        className: s(u.modInfoItemIcon),
                        children: l
                    }), null != n && (0, a.jsx)("div", {
                        className: s(u.modInfoItemName),
                        children: n
                    }), (0, a.jsx)("div", {
                        className: s(u.modInfoItemDescription),
                        children: t
                    }), null != d && (0, a.jsx)("div", {
                        className: s(u.modInfoItemActionIcon),
                        children: (0, a.jsx)(i.ChevronLargeRightIcon, {
                            width: o,
                            height: o
                        })
                    })]
                })
            }

            function c(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: s(u.modInfoItemContainer),
                    children: t
                })
            }