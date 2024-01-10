            "use strict";
            r("70102");
            var i = r("145095"),
                n = r("789294"),
                o = r("463483");

            function a(t) {
                if (!(this instanceof a)) return new a(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = n.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = n.toArray(t.nonce, t.nonceEnc || "hex"),
                    i = n.toArray(t.pers, t.persEnc || "hex");
                o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i)
            }
            t.exports = a, a.prototype._init = function(t, e, r) {
                var i = t.concat(e).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
            }, a.prototype._hmac = function() {
                return new i.hmac(this.hash, this.K)
            }, a.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, a.prototype.reseed = function(t, e, r, i) {
                "string" != typeof e && (i = r, r = e, e = null), t = n.toArray(t, e), r = n.toArray(r, i), o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, a.prototype.generate = function(t, e, r, i) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof e && (i = r, r = e, e = null), r && (r = n.toArray(r, i || "hex"), this._update(r));
                for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
                var a = o.slice(0, t);
                return this._update(r), this._reseed++, n.encode(a, e)
            }