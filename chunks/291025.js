            "use strict";
            var i = r("37549")("%Array%"),
                n = !i.isArray && r("812095")("Object.prototype.toString");
            t.exports = i.isArray || function(t) {
                return "[object Array]" === n(t)
            }