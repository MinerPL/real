            "use strict";
            var i = r("390493");
            r("70102");
            var n = r("912065").Buffer,
                a = r.g.crypto || r.g.msCrypto;
            a && a.getRandomValues ? t.exports = function(t, e) {
                if (t > 4294967295) throw RangeError("requested too many random bytes");
                var r = n.allocUnsafe(t);
                if (t > 0) {
                    if (t > 65536)
                        for (var o = 0; o < t; o += 65536) a.getRandomValues(r.slice(o, o + 65536));
                    else a.getRandomValues(r)
                }
                return "function" == typeof e ? i.nextTick(function() {
                    e(null, r)
                }) : r
            } : t.exports = function() {
                throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }