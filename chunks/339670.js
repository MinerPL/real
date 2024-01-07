            "use strict";
            n.r(t), n.d(t, {
                getUnreadTopicsCount: function() {
                    return l
                }
            }), n("222007");
            var s = n("249654"),
                a = n("347738");

            function l(e, t) {
                var n;
                let l = null !== (n = a.default.summaries(e)) && void 0 !== n ? n : [],
                    i = 0;
                for (let e of l) s.default.compare(e.endId, t) > 0 && (i += 1);
                return i
            }