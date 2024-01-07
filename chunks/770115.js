            "use strict";
            i.r(t), i.d(t, {
                splitQuery: function() {
                    return n
                }
            }), i("424973");
            var r = i("389153");

            function n(e) {
                let t = e.split(",").map(e => e.trim()),
                    i = [],
                    n = [];
                return t.forEach(e => {
                    (0, r.isSnowflake)(e) ? i.push(e): n.push(e)
                }), [n, i]
            }