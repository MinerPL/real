            "use strict";
            n.r(e), n.d(e, {
                onFID: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var r = n("446461"),
                i = n("810843"),
                a = n("34682"),
                s = n("885405"),
                o = n("906617");
            let c = t => {
                let e;
                let n = (0, i.getVisibilityWatcher)(),
                    c = (0, a.initMetric)("FID"),
                    l = t => {
                        t.startTime < n.firstHiddenTime && (c.value = t.processingStart - t.startTime, c.entries.push(t), e(!0))
                    },
                    u = t => {
                        t.forEach(l)
                    },
                    d = (0, s.observe)("first-input", u);
                e = (0, r.bindReporter)(t, c), d && (0, o.onHidden)(() => {
                    u(d.takeRecords()), d.disconnect()
                }, !0)
            }