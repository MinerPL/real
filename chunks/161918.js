            "use strict";
            n.r(t), n.d(t, {
                useActivityShelfItemData: function() {
                    return a
                }
            });
            var s = n("884691"),
                i = n("865821");

            function a(e, t) {
                let n = (0, i.default)({
                    guildId: e,
                    disableFilter: !0
                });
                return s.useMemo(() => {
                    var e;
                    return null !== (e = n.find(e => e.application.id === t)) && void 0 !== e ? e : null
                }, [n, t])
            }