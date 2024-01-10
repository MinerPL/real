            r("70102");
            var i = r("446825"),
                n = i.Buffer;

            function o(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function a(t, e, r) {
                return n(t, e, r)
            }
            n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = i : (o(i, e), e.Buffer = a), a.prototype = Object.create(n.prototype), o(n, a), a.from = function(t, e, r) {
                if ("number" == typeof t) throw TypeError("Argument must not be a number");
                return n(t, e, r)
            }, a.alloc = function(t, e, r) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                var i = n(t);
                return void 0 !== e ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0), i
            }, a.allocUnsafe = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return n(t)
            }, a.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return i.SlowBuffer(t)
            }