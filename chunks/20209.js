            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("446674"),
                i = n("162771"),
                s = n("49111");

            function l() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === s.FAVORITES
            }