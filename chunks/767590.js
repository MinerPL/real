            var a = n("890022"),
                i = n("566040"),
                r = n("846165"),
                l = Math.ceil,
                u = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? i(e, t, n) : void 0 === t) ? 1 : u(r(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(o / t)); s < o;) c[d++] = a(e, s, s += t);
                return c
            }