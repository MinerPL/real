            "use strict";
            n.r(e), n.d(e, {
                initMetric: function() {
                    return o
                }
            }), n("781738");
            var r = n("307447"),
                i = n("863474"),
                a = n("953556"),
                s = n("900407");
            let o = (t, e) => {
                let n = (0, s.getNavigationEntry)(),
                    o = "navigate";
                return n && (o = r.WINDOW.document.prerendering || (0, a.getActivationStart)() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                    name: t,
                    value: void 0 === e ? -1 : e,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: (0, i.generateUniqueID)(),
                    navigationType: o
                }
            }