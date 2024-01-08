            "use strict";
            var i = r("145095"),
                n = r("346931"),
                a = r("550511"),
                o = a.assert,
                s = a.parseBytes,
                f = r("392308"),
                h = r("999419");

            function c(t) {
                if (o("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof c)) return new c(t);
                t = n[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = i.sha512
            }
            t.exports = c, c.prototype.sign = function(t, e) {
                t = s(t);
                var r = this.keyFromSecret(e),
                    i = this.hashInt(r.messagePrefix(), t),
                    n = this.g.mul(i),
                    a = this.encodePoint(n),
                    o = this.hashInt(a, r.pubBytes(), t).mul(r.priv()),
                    f = i.add(o).umod(this.curve.n);
                return this.makeSignature({
                    R: n,
                    S: f,
                    Rencoded: a
                })
            }, c.prototype.verify = function(t, e, r) {
                t = s(t), e = this.makeSignature(e);
                var i = this.keyFromPublic(r),
                    n = this.hashInt(e.Rencoded(), i.pubBytes(), t),
                    a = this.g.mul(e.S());
                return e.R().add(i.pub().mul(n)).eq(a)
            }, c.prototype.hashInt = function() {
                for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
                return a.intFromLE(t.digest()).umod(this.curve.n)
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
                var e = (t = a.parseBytes(t)).length - 1,
                    r = t.slice(0, e).concat(-129 & t[e]),
                    i = (128 & t[e]) != 0,
                    n = a.intFromLE(r);
                return this.curve.pointFromY(n, i)
            }, c.prototype.encodeInt = function(t) {
                return t.toArray("le", this.encodingLength)
            }, c.prototype.decodeInt = function(t) {
                return a.intFromLE(t)
            }, c.prototype.isPoint = function(t) {
                return t instanceof this.pointClass
            }