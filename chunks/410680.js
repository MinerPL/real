            "use strict";
            var i = r("839309"),
                n = r("550511").assert;

            function o(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            t.exports = o, o.fromPublic = function(t, e, r) {
                return e instanceof o ? e : new o(t, {
                    pub: e,
                    pubEnc: r
                })
            }, o.fromPrivate = function(t, e, r) {
                return e instanceof o ? e : new o(t, {
                    priv: e,
                    privEnc: r
                })
            }, o.prototype.validate = function() {
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
            }, o.prototype.getPublic = function(t, e) {
                return ("string" == typeof t && (e = t, t = null), !this.pub && (this.pub = this.ec.g.mul(this.priv)), e) ? this.pub.encode(e, t) : this.pub
            }, o.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, o.prototype._importPrivate = function(t, e) {
                this.priv = new i(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, o.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? n(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && n(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, o.prototype.derive = function(t) {
                return !t.validate() && n(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, o.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, o.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, o.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }