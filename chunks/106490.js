            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionCommandSearch: function() {
                    return o
                }
            }), l("222007");
            var n = l("884691"),
                a = l("446674"),
                s = l("798609"),
                i = l("978900"),
                r = l("683830");

            function o() {
                let e = (0, a.useStateFromStoresObject)([r.default], () => {
                        var e;
                        return Object.values(null !== (e = r.default.getCommands()) && void 0 !== e ? e : {})
                    }),
                    [t, l] = n.useState(""),
                    o = n.useMemo(() => [...e].sort((e, t) => {
                        let l = s.ApplicationCommandType.CHAT + 1,
                            n = t.type > l ? l : t.type,
                            a = e.type > l ? l : e.type,
                            i = n - a;
                        return 0 !== i ? i : e.name.localeCompare(t.name)
                    }), [e]),
                    u = n.useMemo(() => t.startsWith("/") ? o.filter(e => e.type === s.ApplicationCommandType.CHAT) : o, [t, o]),
                    c = n.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]),
                    f = n.useMemo(() => (0, i.filterPermissionSearchItems)(u, d, c), [u, c]);
                return {
                    query: t,
                    results: f,
                    setQuery: l,
                    unfilteredCount: e.length
                }
            }

            function d(e) {
                return {
                    id: e.id,
                    names: [e.displayName]
                }
            }