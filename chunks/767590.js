            var a = n("890022"),
                r = n("566040"),
                i = n("846165"),
                l = Math.ceil,
                o = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? r(e, t, n) : void 0 === t) ? 1 : o(i(t), 0);
                var u = null == e ? 0 : e.length;
                if (!u || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(u / t)); s < u;) c[d++] = a(e, s, s += t);
                return c
            }