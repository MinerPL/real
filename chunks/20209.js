            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("162771"),
                s = n("49111");

            function r() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getGuildId());
                return e === s.FAVORITES
            }