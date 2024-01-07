            "use strict";
            var r = n("37549"),
                o = n("648644"),
                a = o(r("String.prototype.indexOf"));
            e.exports = function(e, t) {
                var n = r(e, !!t);
                return "function" == typeof n && a(e, ".prototype.") > -1 ? o(n) : n
            }