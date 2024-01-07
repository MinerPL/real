            "use strict";
            r("70102");
            var i = r("550511"),
                n = r("839309"),
                o = r("599235"),
                a = r("275201"),
                s = i.assert;

            function f(t) {
                this.twisted = (0 | t.a) != 1, this.mOneA = this.twisted && (0 | t.a) == -1, this.extended = this.mOneA, a.call(this, "edwards", t), this.a = new n(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new n(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new n(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | t.c) == 1
            }

            function h(t, e, r, i, o) {
                a.BasePoint.call(this, t, "projective"), null === e && null === r && null === i ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new n(e, 16), this.y = new n(r, 16), this.z = i ? new n(i, 16) : this.curve.one, this.t = o && new n(o, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))))
            }
            o(f, a), t.exports = f, f.prototype._mulA = function(t) {
                return this.mOneA ? t.redNeg() : this.a.redMul(t)
            }, f.prototype._mulC = function(t) {
                return this.oneC ? t : this.c.redMul(t)
            }, f.prototype.jpoint = function(t, e, r, i) {
                return this.point(t, e, r, i)
            }, f.prototype.pointFromX = function(t, e) {
                !(t = new n(t, 16)).red && (t = t.toRed(this.red));
                var r = t.redSqr(),
                    i = this.c2.redSub(this.a.redMul(r)),
                    o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    a = i.redMul(o.redInvm()),
                    s = a.redSqrt();
                if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw Error("invalid point");
                var f = s.fromRed().isOdd();
                return (e && !f || !e && f) && (s = s.redNeg()), this.point(t, s)
            }, f.prototype.pointFromY = function(t, e) {
                !(t = new n(t, 16)).red && (t = t.toRed(this.red));
                var r = t.redSqr(),
                    i = r.redSub(this.c2),
                    o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    a = i.redMul(o.redInvm());
                if (0 === a.cmp(this.zero)) {
                    if (!e) return this.point(this.zero, t);
                    throw Error("invalid point")
                }
                var s = a.redSqrt();
                if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw Error("invalid point");
                return s.fromRed().isOdd() !== e && (s = s.redNeg()), this.point(s, t)
            }, f.prototype.validate = function(t) {
                if (t.isInfinity()) return !0;
                t.normalize();
                var e = t.x.redSqr(),
                    r = t.y.redSqr(),
                    i = e.redMul(this.a).redAdd(r),
                    n = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
                return 0 === i.cmp(n)
            }, o(h, a.BasePoint), f.prototype.pointFromJSON = function(t) {
                return h.fromJSON(this, t)
            }, f.prototype.point = function(t, e, r, i) {
                return new h(this, t, e, r, i)
            }, h.fromJSON = function(t, e) {
                return new h(t, e[0], e[1], e[2])
            }, h.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, h.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, h.prototype._extDbl = function() {
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var i = this.curve._mulA(t),
                    n = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
                    o = i.redAdd(e),
                    a = o.redSub(r),
                    s = i.redSub(e),
                    f = n.redMul(a),
                    h = o.redMul(s),
                    c = n.redMul(s),
                    u = a.redMul(o);
                return this.curve.point(f, h, u, c)
            }, h.prototype._projDbl = function() {
                var t, e, r, i, n, o, a = this.x.redAdd(this.y).redSqr(),
                    s = this.x.redSqr(),
                    f = this.y.redSqr();
                if (this.curve.twisted) {
                    var h = (i = this.curve._mulA(s)).redAdd(f);
                    this.zOne ? (t = a.redSub(s).redSub(f).redMul(h.redSub(this.curve.two)), e = h.redMul(i.redSub(f)), r = h.redSqr().redSub(h).redSub(h)) : (n = this.z.redSqr(), o = h.redSub(n).redISub(n), t = a.redSub(s).redISub(f).redMul(o), e = h.redMul(i.redSub(f)), r = h.redMul(o))
                } else i = s.redAdd(f), n = this.curve._mulC(this.z).redSqr(), o = i.redSub(n).redSub(n), t = this.curve._mulC(a.redISub(i)).redMul(o), e = this.curve._mulC(i).redMul(s.redISub(f)), r = i.redMul(o);
                return this.curve.point(t, e, r)
            }, h.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, h.prototype._extAdd = function(t) {
                var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                    r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
                    i = this.t.redMul(this.curve.dd).redMul(t.t),
                    n = this.z.redMul(t.z.redAdd(t.z)),
                    o = r.redSub(e),
                    a = n.redSub(i),
                    s = n.redAdd(i),
                    f = r.redAdd(e),
                    h = o.redMul(a),
                    c = s.redMul(f),
                    u = o.redMul(f),
                    d = a.redMul(s);
                return this.curve.point(h, c, d, u)
            }, h.prototype._projAdd = function(t) {
                var e, r, i = this.z.redMul(t.z),
                    n = i.redSqr(),
                    o = this.x.redMul(t.x),
                    a = this.y.redMul(t.y),
                    s = this.curve.d.redMul(o).redMul(a),
                    f = n.redSub(s),
                    h = n.redAdd(s),
                    c = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a),
                    u = i.redMul(f).redMul(c);
                return this.curve.twisted ? (e = i.redMul(h).redMul(a.redSub(this.curve._mulA(o))), r = f.redMul(h)) : (e = i.redMul(h).redMul(a.redSub(o)), r = this.curve._mulC(f).redMul(h)), this.curve.point(u, e, r)
            }, h.prototype.add = function(t) {
                return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
            }, h.prototype.mul = function(t) {
                return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
            }, h.prototype.mulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
            }, h.prototype.jmulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
            }, h.prototype.normalize = function() {
                if (this.zOne) return this;
                var t = this.z.redInvm();
                return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this
            }, h.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, h.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, h.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, h.prototype.eq = function(t) {
                return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
            }, h.prototype.eqXToP = function(t) {
                var e = t.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(e)) return !0;
                for (var r = t.clone(), i = this.curve.redN.redMul(this.z);;) {
                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                    if (e.redIAdd(i), 0 === this.x.cmp(e)) return !0
                }
            }, h.prototype.toP = h.prototype.normalize, h.prototype.mixedAdd = h.prototype.add