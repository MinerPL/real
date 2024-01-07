            "use strict";
            var i = r("390493");
            r("70102");
            var n = r("912065").Buffer,
                o = r.g.crypto || r.g.msCrypto;
            o && o.getRandomValues ? t.exports = function(t, e) {
                if (t > 4294967295) throw RangeError("requested too many random bytes");
                var r = n.allocUnsafe(t);
                if (t > 0) {
                    if (t > 65536)
                        for (var a = 0; a < t; a += 65536) o.getRandomValues(r.slice(a, a + 65536));
                    else o.getRandomValues(r)
                }
                return "function" == typeof e ? i.nextTick(function() {
                    e(null, r)
                }) : r
            } : t.exports = function() {
                throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }