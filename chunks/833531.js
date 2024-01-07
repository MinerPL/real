            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                l = n("42203");

            function r(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => e.filter(e => l.default.hasChannel(e.ref_id)), [e]);
                return t
            }