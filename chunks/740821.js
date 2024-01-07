            "use strict";
            r("781738");
            var n = /([A-Z])/g;
            t.exports = function(t) {
                return t.replace(n, "-$1").toLowerCase()
            }