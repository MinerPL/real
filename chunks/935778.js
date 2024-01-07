            "use strict";
            n("70102");
            var r = Object.prototype.toString,
                o = Math.max,
                a = function(e, t) {
                    for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
                    for (var o = 0; o < t.length; o += 1) n[o + e.length] = t[o];
                    return n
                },
                i = function(e, t) {
                    for (var n = [], r = t || 0, o = 0; r < e.length; r += 1, o += 1) n[o] = e[r];
                    return n
                },
                s = function(e, t) {
                    for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
                    return n
                };
            e.exports = function(e) {
                var t, n = this;
                if ("function" != typeof n || "[object Function]" !== r.apply(n)) throw TypeError("Function.prototype.bind called on incompatible " + n);
                for (var c = i(arguments, 1), l = o(0, n.length - c.length), u = [], d = 0; d < l; d++) u[d] = "$" + d;
                if (t = Function("binder", "return function (" + s(u, ",") + "){ return binder.apply(this,arguments); }")(function() {
                        if (this instanceof t) {
                            var r = n.apply(this, a(c, arguments));
                            return Object(r) === r ? r : this
                        }
                        return n.apply(e, a(c, arguments))
                    }), n.prototype) {
                    var p = function() {};
                    p.prototype = n.prototype, t.prototype = new p, p.prototype = null
                }
                return t
            }