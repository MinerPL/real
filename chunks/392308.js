            "use strict";
            var i = r("550511"),
                n = i.assert,
                a = i.parseBytes,
                o = i.cachedProperty;

            function s(t, e) {
                this.eddsa = t, this._secret = a(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = a(e.pub)
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
            }, o(s, "pubBytes", function() {
                return this.eddsa.encodePoint(this.pub())
            }), o(s, "pub", function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            }), o(s, "privBytes", function() {
                var t = this.eddsa,
                    e = this.hash(),
                    r = t.encodingLength - 1,
                    i = e.slice(0, t.encodingLength);
                return i[0] &= 248, i[r] &= 127, i[r] |= 64, i
            }), o(s, "priv", function() {
                return this.eddsa.decodeInt(this.privBytes())
            }), o(s, "hash", function() {
                return this.eddsa.hash().update(this.secret()).digest()
            }), o(s, "messagePrefix", function() {
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