            "use strict";
            n.r(e), n.d(e, {
                observe: function() {
                    return r
                }
            });
            let r = (t, e, n) => {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        let r = new PerformanceObserver(t => {
                            e(t.getEntries())
                        });
                        return r.observe(Object.assign({
                            type: t,
                            buffered: !0
                        }, n || {})), r
                    }
                } catch (t) {}
            }