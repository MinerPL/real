            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("605250"),
                a = n("802493"),
                l = n("723939");
            let s = "version",
                r = new i.default("KvCacheVersion");
            var u = new class e {
                async okAsync(e) {
                    let t = await a.default.cache(e).get(s);
                    return null == t ? null : 3 === t
                }
                okSync(e) {
                    try {
                        let t = a.default.cache(e).getSyncUnsafe(s);
                        return null == t ? null : 3 === t
                    } catch (e) {
                        return r.log("couldn't read version from database: ".concat(e.message)), !1
                    }
                }
                handleClearGuildCache(e) {
                    a.default.cacheTransaction(e).delete(s), a.default.cacheTransaction(e).delete("CacheStore.Nonce"), l.default.replaceDisableAllDatabases("CLEAR_GUILD_CACHE (via KvCacheVersion)")
                }
                handleWrite(e) {
                    a.default.cacheTransaction(e).put("hello", "\uD83D\uDC4B"), a.default.cacheTransaction(e).put(s, 3)
                }
                handleReset() {}
                constructor() {
                    this.actions = {
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleWrite(t),
                        WRITE_CACHES: (e, t) => this.handleWrite(t)
                    }
                }
            }