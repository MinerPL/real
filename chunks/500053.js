            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("986654"),
                i = s("542578"),
                r = s("918947"),
                o = s("316497");

            function d(e) {
                let {
                    setEditRoleId: t,
                    guild: s,
                    everyoneRole: d,
                    otherRoles: u,
                    setSelectedSection: c
                } = e, [E, _] = n.useState(""), [T, I] = n.useState(o.DEFAULT_HEADER_HEIGHT_PX), S = E.trim(), N = n.useMemo(() => u.filter(e => (0, l.filterRole)(e, S)), [u, S]), g = n.useCallback(() => (0, a.jsx)(r.default, {
                    guild: s,
                    everyoneRole: d,
                    filteredRoles: N,
                    setEditRoleId: t,
                    query: E,
                    setQuery: _,
                    setHeaderHeight: I
                }, "header"), [s, d, N, t, E]);
                return (0, a.jsx)(i.default, {
                    setEditRoleId: t,
                    guild: s,
                    everyoneRole: d,
                    otherRoles: u,
                    setSelectedSection: c,
                    renderHeader: g,
                    headerHeight: T,
                    query: E
                })
            }