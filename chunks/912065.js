            r("70102");
            var i = r("446825"),
                n = i.Buffer;

            function a(t, e) {
                for (var r in t) e[r] = t[r]
            }

            function o(t, e, r) {
                return n(t, e, r)
            }
            n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = i : (a(i, e), e.Buffer = o), o.prototype = Object.create(n.prototype), a(n, o), o.from = function(t, e, r) {
                if ("number" == typeof t) throw TypeError("Argument must not be a number");
                return n(t, e, r)
            }, o.alloc = function(t, e, r) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                var i = n(t);
                return void 0 !== e ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0), i
            }, o.allocUnsafe = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return n(t)
            }, o.allocUnsafeSlow = function(t) {
                if ("number" != typeof t) throw TypeError("Argument must be a number");
                return i.SlowBuffer(t)
            }