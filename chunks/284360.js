            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("602428"),
                s = n("307311"),
                u = n("417865");

            function o(e) {
                let {
                    components: t,
                    renderComponents: n,
                    ...o
                } = e, {
                    message: i
                } = (0, s.useComponentStateContext)();
                return null == t || 0 === t.length ? null : (0, l.jsxs)("div", {
                    className: u.container,
                    children: [(0, l.jsx)("div", {
                        className: u.children,
                        children: n(t)
                    }), null != i ? (0, l.jsx)(a.default, {
                        className: u.error,
                        message: i,
                        component: o
                    }) : null]
                })
            }