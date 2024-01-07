            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("627445"),
                a = n.n(l);

            function s(e, t) {
                if (a(e.length >= t, "Waveform smaller than samples"), e.length === t) return e;
                let n = e.length / t,
                    l = [],
                    s = 0;
                for (; l.length < t;) {
                    let t = Math.round((l.length + 1) * n),
                        a = 0,
                        i = 0;
                    for (let n = s; n < t && n < e.length; n++) a += e[n], i++;
                    l[l.length] = a / i, s = t
                }
                return l
            }