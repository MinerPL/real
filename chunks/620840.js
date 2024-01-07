            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("884691"),
                n = a("65597"),
                s = a("697218"),
                i = a("685911"),
                d = a("994428");
            let r = new Date(Date.UTC(2022, 7, 6));

            function u(e, t) {
                let a = (0, n.default)([i.default], () => 2 >= i.default.getTotalNumCleanLoads()),
                    u = (0, n.default)([s.default], () => {
                        let e = s.default.getCurrentUser();
                        return null == e || e.createdAt.getTime() < r.getTime()
                    }),
                    o = l.useMemo(() => (null == e ? void 0 : e.joinedAt) != null && r.getTime() > e.joinedAt.getTime(), [null == e ? void 0 : e.joinedAt]),
                    c = a && u && !o;
                return l.useEffect(() => {
                    !c && t(d.ContentDismissActionType.AUTO)
                }, [c]), c || !0
            }