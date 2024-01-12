            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("605250"),
                i = n("802493"),
                r = n("723939");
            let a = "version",
                o = new s.default("KvCacheVersion");
            var d = new class e {
                async okAsync(e) {
                    let t = await i.default.cache(e).get(a);
                    return null == t ? null : 3 === t
                }
                okSync(e) {
                    try {
                        let t = i.default.cache(e).getSyncUnsafe(a);
                        return null == t ? null : 3 === t
                    } catch (e) {
                        return o.log("couldn't read version from database: ".concat(e.message)), !1
                    }
                }
                handleClearGuildCache(e) {
                    i.default.cacheTransaction(e).delete(a), i.default.cacheTransaction(e).delete("CacheStore.Nonce"), r.default.replaceDisableAllDatabases("CLEAR_GUILD_CACHE (via KvCacheVersion)")
                }
                handleWrite(e) {
                    i.default.cacheTransaction(e).put("hello", "\uD83D\uDC4B"), i.default.cacheTransaction(e).put(a, 3)
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