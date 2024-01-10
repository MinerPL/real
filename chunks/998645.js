            "use strict";
            var i = r("812095"),
                n = r("37549"),
                o = r("179056"),
                a = i("RegExp.prototype.exec"),
                s = n("%TypeError%");
            t.exports = function(t) {
                if (!o(t)) throw new s("`regex` must be a RegExp");
                return function(e) {
                    return null !== a(t, e)
                }
            }