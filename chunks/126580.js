            var r = s("27556");
            t.exports = function(t, e) {
                if (t !== e) {
                    var s = void 0 !== t,
                        i = null === t,
                        n = t == t,
                        c = r(t),
                        o = void 0 !== e,
                        f = null === e,
                        u = e == e,
                        a = r(e);
                    if (!f && !a && !c && t > e || c && o && u && !f && !a || i && o && u || !s && u || !n) return 1;
                    if (!i && !c && !a && t < e || a && s && n && !i && !c || f && s && n || !o && n || !u) return -1
                }
                return 0
            }