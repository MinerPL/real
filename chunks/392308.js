            "use strict";
            var i = r("550511"),
                n = i.assert,
                o = i.parseBytes,
                a = i.cachedProperty;

            function s(t, e) {
                this.eddsa = t, this._secret = o(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = o(e.pub)
            }
            s.fromPublic = function(t, e) {
                return e instanceof s ? e : new s(t, {
                    pub: e
                })
            }, s.fromSecret = function(t, e) {
                return e instanceof s ? e : new s(t, {
                    secret: e
                })
            }, s.prototype.secret = function() {
                return this._secret
            }, a(s, "pubBytes", function() {
                return this.eddsa.encodePoint(this.pub())
            }), a(s, "pub", function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            }), a(s, "privBytes", function() {
                var t = this.eddsa,
                    e = this.hash(),
                    r = t.encodingLength - 1,
                    i = e.slice(0, t.encodingLength);
                return i[0] &= 248, i[r] &= 127, i[r] |= 64, i
            }), a(s, "priv", function() {
                return this.eddsa.decodeInt(this.privBytes())
            }), a(s, "hash", function() {
                return this.eddsa.hash().update(this.secret()).digest()
            }), a(s, "messagePrefix", function() {
                return this.hash().slice(this.eddsa.encodingLength)
            }), s.prototype.sign = function(t) {
                return n(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
            }, s.prototype.verify = function(t, e) {
                return this.eddsa.verify(t, e, this)
            }, s.prototype.getSecret = function(t) {
                return n(this._secret, "KeyPair is public only"), i.encode(this.secret(), t)
            }, s.prototype.getPublic = function(t) {
                return i.encode(this.pubBytes(), t)
            }, t.exports = s