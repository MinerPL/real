            "use strict";
            var i = r("839309"),
                n = r("550511"),
                a = n.assert,
                o = n.cachedProperty,
                s = n.parseBytes;

            function f(t, e) {
                this.eddsa = t, "object" != typeof e && (e = s(e)), Array.isArray(e) && (e = {
                    R: e.slice(0, t.encodingLength),
                    S: e.slice(t.encodingLength)
                }), a(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof i && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
            }
            o(f, "S", function() {
                return this.eddsa.decodeInt(this.Sencoded())
            }), o(f, "R", function() {
                return this.eddsa.decodePoint(this.Rencoded())
            }), o(f, "Rencoded", function() {
                return this.eddsa.encodePoint(this.R())
            }), o(f, "Sencoded", function() {
                return this.eddsa.encodeInt(this.S())
            }), f.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }, f.prototype.toHex = function() {
                return n.encode(this.toBytes(), "hex").toUpperCase()
            }, t.exports = f