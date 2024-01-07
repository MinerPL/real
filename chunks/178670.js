            "use strict";
            var i = r("145095"),
                n = r("346931"),
                o = r("550511"),
                a = o.assert,
                s = o.parseBytes,
                f = r("392308"),
                h = r("999419");

            function c(t) {
                if (a("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof c)) return new c(t);
                t = n[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = i.sha512
            }
            t.exports = c, c.prototype.sign = function(t, e) {
                t = s(t);
                var r = this.keyFromSecret(e),
                    i = this.hashInt(r.messagePrefix(), t),
                    n = this.g.mul(i),
                    o = this.encodePoint(n),
                    a = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
                    f = i.add(a).umod(this.curve.n);
                return this.makeSignature({
                    R: n,
                    S: f,
                    Rencoded: o
                })
            }, c.prototype.verify = function(t, e, r) {
                t = s(t), e = this.makeSignature(e);
                var i = this.keyFromPublic(r),
                    n = this.hashInt(e.Rencoded(), i.pubBytes(), t),
                    o = this.g.mul(e.S());
                return e.R().add(i.pub().mul(n)).eq(o)
            }, c.prototype.hashInt = function() {
                for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
                return o.intFromLE(t.digest()).umod(this.curve.n)
            }, c.prototype.keyFromPublic = function(t) {
                return f.fromPublic(this, t)
            }, c.prototype.keyFromSecret = function(t) {
                return f.fromSecret(this, t)
            }, c.prototype.makeSignature = function(t) {
                return t instanceof h ? t : new h(this, t)
            }, c.prototype.encodePoint = function(t) {
                var e = t.getY().toArray("le", this.encodingLength);
                return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e
            }, c.prototype.decodePoint = function(t) {
                var e = (t = o.parseBytes(t)).length - 1,
                    r = t.slice(0, e).concat(-129 & t[e]),
                    i = (128 & t[e]) != 0,
                    n = o.intFromLE(r);
                return this.curve.pointFromY(n, i)
            }, c.prototype.encodeInt = function(t) {
                return t.toArray("le", this.encodingLength)
            }, c.prototype.decodeInt = function(t) {
                return o.intFromLE(t)
            }, c.prototype.isPoint = function(t) {
                return t instanceof this.pointClass
            }