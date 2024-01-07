            "use strict";
            n("70102"), n("424973");
            var r = Array.prototype.slice,
                o = Object.prototype.toString;
            e.exports = function(e) {
                var t, n = this;
                if ("function" != typeof n || "[object Function]" !== o.call(n)) throw TypeError("Function.prototype.bind called on incompatible " + n);
                for (var a = r.call(arguments, 1), i = Math.max(0, n.length - a.length), s = [], c = 0; c < i; c++) s.push("$" + c);
                if (t = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                        if (!(this instanceof t)) return n.apply(e, a.concat(r.call(arguments)));
                        var o = n.apply(this, a.concat(r.call(arguments)));
                        return Object(o) === o ? o : this
                    }), n.prototype) {
                    var l = function() {};
                    l.prototype = n.prototype, t.prototype = new l, l.prototype = null
                }
                return t
            }