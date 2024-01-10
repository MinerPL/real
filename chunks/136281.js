            "use strict";
            n.r(t), n.d(t, {
                USER_MOD_ICON_SIZE_PX: function() {
                    return u
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
                o = n("558595");
            let u = 16;

            function d(e) {
                let {
                    description: t,
                    name: n,
                    icon: l,
                    onNavigate: d
                } = e;
                return (0, a.jsxs)(r.Clickable, {
                    onClick: d,
                    className: s(o.modInfoItem, null != d && o.modInfoAction),
                    children: [null != l && (0, a.jsx)("div", {
                        className: s(o.modInfoItemIcon),
                        children: l
                    }), null != n && (0, a.jsx)("div", {
                        className: s(o.modInfoItemName),
                        children: n
                    }), (0, a.jsx)("div", {
                        className: s(o.modInfoItemDescription),
                        children: t
                    }), null != d && (0, a.jsx)("div", {
                        className: s(o.modInfoItemActionIcon),
                        children: (0, a.jsx)(i.ChevronLargeRightIcon, {
                            width: u,
                            height: u
                        })
                    })]
                })
            }

            function c(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)("div", {
                    className: s(o.modInfoItemContainer),
                    children: t
                })
            }