            "use strict";
            n.r(t), n.d(t, {
                WCAGContrastRatios: function() {
                    return o
                },
                getContrastingColor: function() {
                    return s
                }
            }), n("222007"), n("70102");
            var i = n("10371"),
                r = n.n(i);
            let o = {
                NonText: 3,
                Text: 4.5,
                HighContrastText: 7
            };

            function s(e) {
                var t, n, i;
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = null !== (t = s.contrastRatio) && void 0 !== t ? t : o.NonText,
                    a = null !== (n = s.tolerance) && void 0 !== n ? n : 3,
                    u = r(null !== (i = s.base) && void 0 !== i ? i : e),
                    c = r(e),
                    d = u.luminance(),
                    _ = c,
                    f = l + a,
                    E = r.contrast(u, c),
                    S = 100;
                for (; S-- > 0;) {
                    let e = E < l,
                        t = E > f;
                    if (!e && !t) break;
                    let n = _.luminance(),
                        i = n > d;
                    _ = t && i || e && !i ? _.darken() : _.brighten(), E = r.contrast(u, _)
                }
                return function(e) {
                    let [t, n, i, r] = e.rgba();
                    return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(r, ")")
                }(_)
            }