            var i = r("27556");
            t.exports = function(t, e) {
                if (t !== e) {
                    var r = void 0 !== t,
                        n = null === t,
                        o = t == t,
                        a = i(t),
                        s = void 0 !== e,
                        f = null === e,
                        h = e == e,
                        c = i(e);
                    if (!f && !c && !a && t > e || a && s && h && !f && !c || n && s && h || !r && h || !o) return 1;
                    if (!n && !a && !c && t < e || c && r && o && !n && !a || f && r && o || !s && o || !h) return -1
                }
                return 0
            }