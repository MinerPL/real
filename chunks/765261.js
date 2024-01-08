            "use strict";
            r("70102"), r("424973");
            var i = r("839309"),
                n = r("599235"),
                a = r("275201"),
                o = r("550511");

            function s(t) {
                a.call(this, "mont", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function f(t, e, r) {
                a.BasePoint.call(this, t, "projective"), null === e && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(e, 16), this.z = new i(r, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)))
            }
            n(s, a), t.exports = s, s.prototype.validate = function(t) {
                var e = t.normalize().x,
                    r = e.redSqr(),
                    i = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                return 0 === i.redSqrt().redSqr().cmp(i)
            }, n(f, a.BasePoint), s.prototype.decodePoint = function(t, e) {
                return this.point(o.toArray(t, e), 1)
            }, s.prototype.point = function(t, e) {
                return new f(this, t, e)
            }, s.prototype.pointFromJSON = function(t) {
                return f.fromJSON(this, t)
            }, f.prototype.precompute = function() {}, f.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, f.fromJSON = function(t, e) {
                return new f(t, e[0], e[1] || t.one)
            }, f.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, f.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, f.prototype.dbl = function() {
                var t = this.x.redAdd(this.z).redSqr(),
                    e = this.x.redSub(this.z).redSqr(),
                    r = t.redSub(e),
                    i = t.redMul(e),
                    n = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(i, n)
            }, f.prototype.add = function() {
                throw Error("Not supported on Montgomery curve")
            }, f.prototype.diffAdd = function(t, e) {
                var r = this.x.redAdd(this.z),
                    i = this.x.redSub(this.z),
                    n = t.x.redAdd(t.z),
                    a = t.x.redSub(t.z).redMul(r),
                    o = n.redMul(i),
                    s = e.z.redMul(a.redAdd(o).redSqr()),
                    f = e.x.redMul(a.redISub(o).redSqr());
                return this.curve.point(s, f)
            }, f.prototype.mul = function(t) {
                for (var e = t.clone(), r = this, i = this.curve.point(null, null), n = []; 0 !== e.cmpn(0); e.iushrn(1)) n.push(e.andln(1));
                for (var a = n.length - 1; a >= 0; a--) 0 === n[a] ? (r = r.diffAdd(i, this), i = i.dbl()) : (i = r.diffAdd(i, this), r = r.dbl());
                return i
            }, f.prototype.mulAdd = function() {
                throw Error("Not supported on Montgomery curve")
            }, f.prototype.jumlAdd = function() {
                throw Error("Not supported on Montgomery curve")
            }, f.prototype.eq = function(t) {
                return 0 === this.getX().cmp(t.getX())
            }, f.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, f.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }