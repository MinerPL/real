            "use strict";
            var i = r("37549"),
                n = i("%Object.preventExtensions%", !0),
                o = i("%Object.isExtensible%", !0),
                a = r("121638");
            t.exports = n ? function(t) {
                return !a(t) && o(t)
            } : function(t) {
                return !a(t)
            }