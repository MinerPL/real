            var i = r("839309"),
                n = r("912065").Buffer;
            t.exports = function(t, e) {
                return n.from(t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed().toArray())
            }