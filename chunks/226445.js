            "use strict";
            n.r(t), n.d(t, {
                Histogram: function() {
                    return r
                }
            }), n("424973"), n("222007");
            var i = n("265042");
            class r {
                addSample(e) {
                    this.digest.push(e)
                }
                getReport() {
                    var e, t, n, i;
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
                        s = {};
                    for (let t of r) s[t] = null !== (e = this.digest.percentile(t / 100)) && void 0 !== e ? e : 0;
                    return {
                        min: null !== (t = this.digest.percentile(0)) && void 0 !== t ? t : 0,
                        max: null !== (n = this.digest.percentile(1)) && void 0 !== n ? n : 0,
                        count: null !== (i = this.digest.size()) && void 0 !== i ? i : 0,
                        percentiles: s
                    }
                }
                constructor() {
                    this.digest = new i.Digest
                }
            }