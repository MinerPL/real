            var r = s("839309"),
                i = s("912065").Buffer;
            t.exports = function(t, e) {
                return i.from(t.toRed(r.mont(e.modulus)).redPow(new r(e.publicExponent)).fromRed().toArray())
            }