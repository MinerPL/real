            "use strict";
            n.r(e), n.d(e, {
                supportsHistory: function() {
                    return a
                }
            });
            var r = n("232945");
            let i = (0, r.getGlobalObject)();

            function a() {
                let t = i.chrome,
                    e = t && t.app && t.app.runtime,
                    n = "history" in i && !!i.history.pushState && !!i.history.replaceState;
                return !e && n
            }