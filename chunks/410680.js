            "use strict";
            var i = r("839309"),
                n = r("550511").assert;

            function a(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            t.exports = a, a.fromPublic = function(t, e, r) {
                return e instanceof a ? e : new a(t, {
                    pub: e,
                    pubEnc: r
                })
            }, a.fromPrivate = function(t, e, r) {
                return e instanceof a ? e : new a(t, {
                    priv: e,
                    privEnc: r
                })
            }, a.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, a.prototype.getPublic = function(t, e) {
                return ("string" == typeof t && (e = t, t = null), !this.pub && (this.pub = this.ec.g.mul(this.priv)), e) ? this.pub.encode(e, t) : this.pub
            }, a.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, a.prototype._importPrivate = function(t, e) {
                this.priv = new i(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, a.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? n(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && n(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, a.prototype.derive = function(t) {
                return !t.validate() && n(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, a.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, a.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, a.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }