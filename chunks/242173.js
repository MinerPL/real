            "use strict";
            var r = {
                current: function(t) {
                    return n.g.cancelAnimationFrame(t)
                },
                inject: function(t) {
                    r.current = t
                }
            };
            t.exports = r