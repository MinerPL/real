            var i = r("446825").Buffer,
                n = r("839309"),
                o = new(r("925197")),
                a = new n(24),
                s = new n(11),
                f = new n(10),
                h = new n(3),
                c = new n(7),
                u = r("240163"),
                d = r("664813");

            function l(t, e) {
                return e = e || "utf8", !i.isBuffer(t) && (t = new i(t, e)), this._pub = new n(t), this
            }

            function p(t, e) {
                return e = e || "utf8", !i.isBuffer(t) && (t = new i(t, e)), this._priv = new n(t), this
            }
            t.exports = m;
            var b = {};

            function m(t, e, r) {
                this.setGenerator(e), this.__prime = new n(t), this._prime = n.mont(this.__prime), this._primeLen = t.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, r ? (this.setPublicKey = l, this.setPrivateKey = p) : this._primeCode = 8
            }

            function g(t, e) {
                var r = new i(t.toArray());
                return e ? r.toString(e) : r
            }
            Object.defineProperty(m.prototype, "verifyError", {
                enumerable: !0,
                get: function() {
                    return "number" != typeof this._primeCode && (this._primeCode = function(t, e) {
                        var r, i = e.toString("hex"),
                            n = [i, t.toString(16)].join("_");
                        if (n in b) return b[n];
                        var d = 0;
                        if (t.isEven() || !u.simpleSieve || !u.fermatTest(t) || !o.test(t)) return d += 1, "02" === i || "05" === i ? d += 8 : d += 4, b[n] = d, d;
                        switch (!o.test(t.shrn(1)) && (d += 2), i) {
                            case "02":
                                t.mod(a).cmp(s) && (d += 8);
                                break;
                            case "05":
                                (r = t.mod(f)).cmp(h) && r.cmp(c) && (d += 8);
                                break;
                            default:
                                d += 4
                        }
                        return b[n] = d, d
                    }(this.__prime, this.__gen)), this._primeCode
                }
            }), m.prototype.generateKeys = function() {
                return !this._priv && (this._priv = new n(d(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
            }, m.prototype.computeSecret = function(t) {
                var e = new i((t = (t = new n(t)).toRed(this._prime)).redPow(this._priv).fromRed().toArray()),
                    r = this.getPrime();
                if (e.length < r.length) {
                    var o = new i(r.length - e.length);
                    o.fill(0), e = i.concat([o, e])
                }
                return e
            }, m.prototype.getPublicKey = function(t) {
                return g(this._pub, t)
            }, m.prototype.getPrivateKey = function(t) {
                return g(this._priv, t)
            }, m.prototype.getPrime = function(t) {
                return g(this.__prime, t)
            }, m.prototype.getGenerator = function(t) {
                return g(this._gen, t)
            }, m.prototype.setGenerator = function(t, e) {
                return e = e || "utf8", !i.isBuffer(t) && (t = new i(t, e)), this.__gen = t, this._gen = new n(t), this
            }