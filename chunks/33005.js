            "use strict";
            var i = r("555671"),
                n = r("943753");

            function a() {
                if (!(this instanceof a)) return new a;
                n.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            i.inherits(a, n), t.exports = a, a.blockSize = 1024, a.outSize = 384, a.hmacStrength = 192, a.padLength = 128, a.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
            }