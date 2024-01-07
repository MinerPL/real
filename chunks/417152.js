            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var i = l("884691"),
                a = l("811425"),
                n = l("599110"),
                s = l("412707"),
                r = l("49111");

            function c(e) {
                let {
                    collection: t
                } = e, [l, c] = i.useState(!1), o = (0, s.useApplicationDirectoryHistory)(e => e.guildId), d = (0, a.useIsVisible)(e => {
                    e && c(!0)
                });
                return i.useEffect(() => {
                    l && n.default.track(r.AnalyticEvents.APP_DIRECTORY_COLLECTION_VIEWED, {
                        collection_id: t.id,
                        guild_id: o
                    })
                }, [l, t, o]), d
            }