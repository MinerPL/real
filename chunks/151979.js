            "use strict";
            r("70102");
            var i = r("839309"),
                n = r("840069"),
                o = r("550511"),
                a = r("346931"),
                s = r("125807"),
                f = o.assert,
                h = r("410680"),
                c = r("925572");

            function u(t) {
                if (!(this instanceof u)) return new u(t);
                "string" == typeof t && (f(Object.prototype.hasOwnProperty.call(a, t), "Unknown curve " + t), t = a[t]), t instanceof a.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            t.exports = u, u.prototype.keyPair = function(t) {
                return new h(this, t)
            }, u.prototype.keyFromPrivate = function(t, e) {
                return h.fromPrivate(this, t, e)
            }, u.prototype.keyFromPublic = function(t, e) {
                return h.fromPublic(this, t, e)
            }, u.prototype.genKeyPair = function(t) {
                !t && (t = {});
                for (var e = new n({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || s(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), o = this.n.sub(new i(2));;) {
                    var a = new i(e.generate(r));
                    if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a)
                }
            }, u.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return (r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0) ? t.sub(this.n) : t
            }, u.prototype.sign = function(t, e, r, o) {
                "object" == typeof r && (o = r, r = null), !o && (o = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new i(t, 16));
                for (var a = this.n.byteLength(), s = e.getPrivate().toArray("be", a), f = t.toArray("be", a), h = new n({
                        hash: this.hash,
                        entropy: s,
                        nonce: f,
                        pers: o.pers,
                        persEnc: o.persEnc || "utf8"
                    }), u = this.n.sub(new i(1)), d = 0;; d++) {
                    var l = o.k ? o.k(d) : new i(h.generate(this.n.byteLength()));
                    if (0 >= (l = this._truncateToN(l, !0)).cmpn(1) || l.cmp(u) >= 0) continue;
                    var p = this.g.mul(l);
                    if (p.isInfinity()) continue;
                    var b = p.getX(),
                        m = b.umod(this.n);
                    if (0 !== m.cmpn(0)) {
                        var g = l.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                        if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                            var y = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                            return o.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), y ^= 1), new c({
                                r: m,
                                s: g,
                                recoveryParam: y
                            })
                        }
                    }
                }
            }, u.prototype.verify = function(t, e, r, n) {
                t = this._truncateToN(new i(t, 16)), r = this.keyFromPublic(r, n);
                var o, a = (e = new c(e, "hex")).r,
                    s = e.s;
                if (0 > a.cmpn(1) || a.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
                var f = s.invm(this.n),
                    h = f.mul(t).umod(this.n),
                    u = f.mul(a).umod(this.n);
                if (!this.curve._maxwellTrick) return !(o = this.g.mulAdd(h, r.getPublic(), u)).isInfinity() && 0 === o.getX().umod(this.n).cmp(a);
                return !(o = this.g.jmulAdd(h, r.getPublic(), u)).isInfinity() && o.eqXToP(a)
            }, u.prototype.recoverPubKey = function(t, e, r, n) {
                f((3 & r) === r, "The recovery param is more than two bits"), e = new c(e, n);
                var o = this.n,
                    a = new i(t),
                    s = e.r,
                    h = e.s,
                    u = 1 & r,
                    d = r >> 1;
                if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw Error("Unable to find sencond key candinate");
                s = d ? this.curve.pointFromX(s.add(this.curve.n), u) : this.curve.pointFromX(s, u);
                var l = e.r.invm(o),
                    p = o.sub(a).mul(l).umod(o),
                    b = h.mul(l).umod(o);
                return this.g.mulAdd(p, s, b)
            }, u.prototype.getKeyRecoveryParam = function(t, e, r, i) {
                if (null !== (e = new c(e, i)).recoveryParam) return e.recoveryParam;
                for (var n, o = 0; o < 4; o++) {
                    try {
                        n = this.recoverPubKey(t, e, o)
                    } catch (t) {
                        continue
                    }
                    if (n.eq(r)) return o
                }
                throw Error("Unable to find valid recovery factor")
            }