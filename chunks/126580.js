            var i = r("27556");
            t.exports = function(t, e) {
                if (t !== e) {
                    var r = void 0 !== t,
                        n = null === t,
                        a = t == t,
                        o = i(t),
                        s = void 0 !== e,
                        f = null === e,
                        h = e == e,
                        c = i(e);
                    if (!f && !c && !o && t > e || o && s && h && !f && !c || n && s && h || !r && h || !a) return 1;
                    if (!n && !o && !c && t < e || c && r && a && !n && !o || f && r && a || !s && a || !h) return -1
                }
                return 0
            }