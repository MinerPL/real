            "use strict";
            s("70102");
            var r = s("550511"),
                i = s("839309"),
                n = s("599235"),
                c = s("275201"),
                o = r.assert;

            function f(t) {
                this.twisted = (0 | t.a) != 1, this.mOneA = this.twisted && (0 | t.a) == -1, this.extended = this.mOneA, c.call(this, "edwards", t), this.a = new i(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), o(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | t.c) == 1
            }

            function u(t, e, s, r, n) {
                c.BasePoint.call(this, t, "projective"), null === e && null === s && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(e, 16), this.y = new i(s, 16), this.z = r ? new i(r, 16) : this.curve.one, this.t = n && new i(n, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))))
            }
            n(f, c), t.exports = f, f.prototype._mulA = function(t) {
                return this.mOneA ? t.redNeg() : this.a.redMul(t)
            }, f.prototype._mulC = function(t) {
                return this.oneC ? t : this.c.redMul(t)
            }, f.prototype.jpoint = function(t, e, s, r) {
                return this.point(t, e, s, r)
            }, f.prototype.pointFromX = function(t, e) {
                !(t = new i(t, 16)).red && (t = t.toRed(this.red));
                var s = t.redSqr(),
                    r = this.c2.redSub(this.a.redMul(s)),
                    n = this.one.redSub(this.c2.redMul(this.d).redMul(s)),
                    c = r.redMul(n.redInvm()),
                    o = c.redSqrt();
                if (0 !== o.redSqr().redSub(c).cmp(this.zero)) throw Error("invalid point");
                var f = o.fromRed().isOdd();
                return (e && !f || !e && f) && (o = o.redNeg()), this.point(t, o)
            }, f.prototype.pointFromY = function(t, e) {
                !(t = new i(t, 16)).red && (t = t.toRed(this.red));
                var s = t.redSqr(),
                    r = s.redSub(this.c2),
                    n = s.redMul(this.d).redMul(this.c2).redSub(this.a),
                    c = r.redMul(n.redInvm());
                if (0 === c.cmp(this.zero)) {
                    if (!e) return this.point(this.zero, t);
                    throw Error("invalid point")
                }
                var o = c.redSqrt();
                if (0 !== o.redSqr().redSub(c).cmp(this.zero)) throw Error("invalid point");
                return o.fromRed().isOdd() !== e && (o = o.redNeg()), this.point(o, t)
            }, f.prototype.validate = function(t) {
                if (t.isInfinity()) return !0;
                t.normalize();
                var e = t.x.redSqr(),
                    s = t.y.redSqr(),
                    r = e.redMul(this.a).redAdd(s),
                    i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(s)));
                return 0 === r.cmp(i)
            }, n(u, c.BasePoint), f.prototype.pointFromJSON = function(t) {
                return u.fromJSON(this, t)
            }, f.prototype.point = function(t, e, s, r) {
                return new u(this, t, e, s, r)
            }, u.fromJSON = function(t, e) {
                return new u(t, e[0], e[1], e[2])
            }, u.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, u.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, u.prototype._extDbl = function() {
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    s = this.z.redSqr();
                s = s.redIAdd(s);
                var r = this.curve._mulA(t),
                    i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
                    n = r.redAdd(e),
                    c = n.redSub(s),
                    o = r.redSub(e),
                    f = i.redMul(c),
                    u = n.redMul(o),
                    a = i.redMul(o),
                    d = c.redMul(n);
                return this.curve.point(f, u, d, a)
            }, u.prototype._projDbl = function() {
                var t, e, s, r, i, n, c = this.x.redAdd(this.y).redSqr(),
                    o = this.x.redSqr(),
                    f = this.y.redSqr();
                if (this.curve.twisted) {
                    var u = (r = this.curve._mulA(o)).redAdd(f);
                    this.zOne ? (t = c.redSub(o).redSub(f).redMul(u.redSub(this.curve.two)), e = u.redMul(r.redSub(f)), s = u.redSqr().redSub(u).redSub(u)) : (i = this.z.redSqr(), n = u.redSub(i).redISub(i), t = c.redSub(o).redISub(f).redMul(n), e = u.redMul(r.redSub(f)), s = u.redMul(n))
                } else r = o.redAdd(f), i = this.curve._mulC(this.z).redSqr(), n = r.redSub(i).redSub(i), t = this.curve._mulC(c.redISub(r)).redMul(n), e = this.curve._mulC(r).redMul(o.redISub(f)), s = r.redMul(n);
                return this.curve.point(t, e, s)
            }, u.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, u.prototype._extAdd = function(t) {
                var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                    s = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
                    r = this.t.redMul(this.curve.dd).redMul(t.t),
                    i = this.z.redMul(t.z.redAdd(t.z)),
                    n = s.redSub(e),
                    c = i.redSub(r),
                    o = i.redAdd(r),
                    f = s.redAdd(e),
                    u = n.redMul(c),
                    a = o.redMul(f),
                    d = n.redMul(f),
                    p = c.redMul(o);
                return this.curve.point(u, a, p, d)
            }, u.prototype._projAdd = function(t) {
                var e, s, r = this.z.redMul(t.z),
                    i = r.redSqr(),
                    n = this.x.redMul(t.x),
                    c = this.y.redMul(t.y),
                    o = this.curve.d.redMul(n).redMul(c),
                    f = i.redSub(o),
                    u = i.redAdd(o),
                    a = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(n).redISub(c),
                    d = r.redMul(f).redMul(a);
                return this.curve.twisted ? (e = r.redMul(u).redMul(c.redSub(this.curve._mulA(n))), s = f.redMul(u)) : (e = r.redMul(u).redMul(c.redSub(n)), s = this.curve._mulC(f).redMul(u)), this.curve.point(d, e, s)
            }, u.prototype.add = function(t) {
                return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
            }, u.prototype.mul = function(t) {
                return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
            }, u.prototype.mulAdd = function(t, e, s) {
                return this.curve._wnafMulAdd(1, [this, e], [t, s], 2, !1)
            }, u.prototype.jmulAdd = function(t, e, s) {
                return this.curve._wnafMulAdd(1, [this, e], [t, s], 2, !0)
            }, u.prototype.normalize = function() {
                if (this.zOne) return this;
                var t = this.z.redInvm();
                return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this
            }, u.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, u.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, u.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, u.prototype.eq = function(t) {
                return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
            }, u.prototype.eqXToP = function(t) {
                var e = t.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(e)) return !0;
                for (var s = t.clone(), r = this.curve.redN.redMul(this.z);;) {
                    if (s.iadd(this.curve.n), s.cmp(this.curve.p) >= 0) return !1;
                    if (e.redIAdd(r), 0 === this.x.cmp(e)) return !0
                }
            }, u.prototype.toP = u.prototype.normalize, u.prototype.mixedAdd = u.prototype.add