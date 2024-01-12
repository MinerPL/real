            "use strict";
            n.r(t), n.d(t, {
                initialState: function() {
                    return o
                },
                persist: function() {
                    return d
                },
                clear: function() {
                    return u
                }
            });
            var s = n("95410"),
                i = n("548578");
            let r = "ClientStateStore",
                a = (0, i.getDefaultState)();
            a.version === i.CACHE_VERSION && null != a.cacheCreationDate && a.cacheCreationDate + i.MAX_CACHE_AGE_MS > Date.now() || (a = (0, i.getDefaultState)());
            let o = a;

            function d(e, t) {
                s.default.set(r, t)
            }

            function u() {
                s.default.remove(r)
            }