            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                i = n("42203");

            function r(e) {
                let t = (0, l.useStateFromStoresArray)([i.default], () => e.filter(e => i.default.hasChannel(e.ref_id)), [e]);
                return t
            }