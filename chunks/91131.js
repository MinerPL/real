            "use strict";
            n.r(t), n.d(t, {
                initialState: function() {
                    return r
                },
                persist: function() {
                    return u
                },
                clear: function() {
                    return o
                }
            });
            var i = n("95410"),
                a = n("548578");
            let l = "ClientStateStore",
                s = (0, a.getDefaultState)();
            s.version === a.CACHE_VERSION && null != s.cacheCreationDate && s.cacheCreationDate + a.MAX_CACHE_AGE_MS > Date.now() || (s = (0, a.getDefaultState)());
            let r = s;

            function u(e, t) {
                i.default.set(l, t)
            }

            function o() {
                i.default.remove(l)
            }