            "use strict";
            n.r(t), n.d(t, {
                Host: function() {
                    return s
                }
            });
            var i = n("350798"),
                r = n("30773");
            class s {
                static open(e, t) {
                    return r.Runtime.executeAsync("database_open", n => {
                        var r;
                        return i.KV_RAW.databaseOpen(n, {
                            database: e,
                            invalidateDisabledHandles: null !== (r = null == t ? void 0 : t.invalidateDisabledHandles) && void 0 !== r && r
                        })
                    })
                }
                static openSyncUnsafe(e, t) {
                    var n;
                    return i.KV_RAW.databaseOpen(null, {
                        database: e,
                        invalidateDisabledHandles: null !== (n = null == t ? void 0 : t.invalidateDisabledHandles) && void 0 !== n && n
                    }, {
                        synchronous: !0
                    })
                }
                static delete(e) {
                    return r.Runtime.executeAsync("database_delete", t => i.KV_RAW.databaseDelete(t, {
                        database: e
                    }))
                }
                static async list() {
                    let e = await r.Runtime.executeAsync("database_list", e => i.KV_RAW.databaseList(e));
                    return e.map(e => e.data)
                }
                static optimize(e) {
                    return r.Runtime.executeAsync("database_optimize", t => i.KV_RAW.databaseOptimize(t, {
                        aggressive: e
                    }))
                }
                static raise(e) {
                    i.KV_RAW.raise(e)
                }
            }