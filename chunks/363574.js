            "use strict";

            function r(e, t, n) {
                var r = n.getRegistry(),
                    o = r.addTarget(e, t);
                return [o, function() {
                    return r.removeTarget(o)
                }]
            }

            function o(e, t, n) {
                var r = n.getRegistry(),
                    o = r.addSource(e, t);
                return [o, function() {
                    return r.removeSource(o)
                }]
            }
            n.r(t), n.d(t, {
                registerTarget: function() {
                    return r
                },
                registerSource: function() {
                    return o
                }
            })