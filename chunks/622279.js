            "use strict";
            var n = i("868822"),
                r = i("418855"),
                a = i("125359"),
                s = i("745795"),
                o = i("274198"),
                l = TypeError;
            t.exports = function(t, e) {
                var i = t.exec;
                if (a(i)) {
                    var u = n(i, t, e);
                    return null !== u && r(u), u
                }
                if ("RegExp" === s(t)) return n(o, t, e);
                throw l("RegExp#exec called on incompatible receiver")
            }