            var i = r("446825").Buffer;
            r("222007");
            var n = r("814548"),
                o = r("839309");
            t.exports = function(t) {
                return new s(t)
            };
            var a = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };

            function s(t) {
                this.curveType = a[t], !this.curveType && (this.curveType = {
                    name: t
                }), this.curve = new n.ec(this.curveType.name), this.keys = void 0
            }

            function f(t, e, r) {
                !Array.isArray(t) && (t = t.toArray());
                var n = new i(t);
                if (r && n.length < r) {
                    var o = new i(r - n.length);
                    o.fill(0), n = i.concat([o, n])
                }
                return e ? n.toString(e) : n
            }
            a.p224 = a.secp224r1, a.p256 = a.secp256r1 = a.prime256v1, a.p192 = a.secp192r1 = a.prime192v1, a.p384 = a.secp384r1, a.p521 = a.secp521r1, s.prototype.generateKeys = function(t, e) {
                return this.keys = this.curve.genKeyPair(), this.getPublicKey(t, e)
            }, s.prototype.computeSecret = function(t, e, r) {
                return e = e || "utf8", !i.isBuffer(t) && (t = new i(t, e)), f(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(), r, this.curveType.byteLength)
            }, s.prototype.getPublicKey = function(t, e) {
                var r = this.keys.getPublic("compressed" === e, !0);
                return "hybrid" === e && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6), f(r, t)
            }, s.prototype.getPrivateKey = function(t) {
                return f(this.keys.getPrivate(), t)
            }, s.prototype.setPublicKey = function(t, e) {
                return e = e || "utf8", !i.isBuffer(t) && (t = new i(t, e)), this.keys._importPublic(t), this
            }, s.prototype.setPrivateKey = function(t, e) {
                e = e || "utf8", !i.isBuffer(t) && (t = new i(t, e));
                var r = new o(t);
                return r = r.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(r), this
            }