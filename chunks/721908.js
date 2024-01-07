            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            }), l("424973"), l("222007");
            var i = l("884691"),
                a = l("446674"),
                n = l("305961"),
                s = l("506061");

            function r(e) {
                let {
                    application: t,
                    showMutualGuilds: l = !0
                } = e, r = (0, a.useStateFromStores)([s.default], () => s.default.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), c = (0, a.useStateFromStores)([n.default], () => n.default.isLoaded());
                return i.useMemo(() => {
                    let e = [];
                    if (!c || !l || null == r || null == t) return e;
                    for (let t of r) {
                        let l = n.default.getGuild(t);
                        null != l && e.push(l)
                    }
                    return e
                }, [c, r, t, l])
            }