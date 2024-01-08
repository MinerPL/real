            "use strict";
            var i = r("555671"),
                n = r("201442");

            function a() {
                if (!(this instanceof a)) return new a;
                n.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            i.inherits(a, n), t.exports = a, a.blockSize = 512, a.outSize = 224, a.hmacStrength = 192, a.padLength = 64, a.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
            }