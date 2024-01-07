            var e = r("523119"),
                o = Array.prototype.splice;
            t.exports = function(t) {
                var n = this.__data__,
                    r = e(n, t);
                return !(r < 0) && (r == n.length - 1 ? n.pop() : o.call(n, r, 1), --this.size, !0)
            }