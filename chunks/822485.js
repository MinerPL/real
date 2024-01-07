            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("340626"),
                i = n("393414"),
                r = n("627490"),
                o = n("966270"),
                u = n("49111"),
                d = n("447621"),
                c = n("782340");

            function f() {
                let e = window.location.pathname.startsWith(u.Routes.GUILD_DISCOVERY);
                e && ((0, s.clearSearch)(), (0, s.selectCategory)(d.DISCOVERY_ALL_CATEGORIES_ID, !0));
                let t = (0, i.getHistory)(),
                    n = t.location.search;
                (0, i.transitionTo)(u.Routes.GUILD_DISCOVERY, {
                    search: n
                })
            }
            let h = a.forwardRef(function(e, t) {
                let {
                    selected: n,
                    tooltip: a
                } = e;
                return (0, l.jsx)(o.default, {
                    id: "guild-discover-button",
                    ref: t,
                    onClick: f,
                    selected: n,
                    tooltip: null != a ? a : c.default.Messages.GUILD_DISCOVERY_TOOLTIP,
                    icon: r.default
                })
            });
            var C = h