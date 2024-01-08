            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var a = n("984519");
            let s = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

            function r(e) {
                return a.HIGH_FIVE_EMOJIS.has(e.replace(s, ""))
            }