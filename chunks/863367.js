            "use strict";
            var r = n("503486"),
                i = n("718530"),
                o = n("125359"),
                a = n("210506"),
                s = n("602178"),
                c = n("174669"),
                u = n("459149"),
                d = n("719756"),
                l = n("140925"),
                p = n("693523"),
                _ = i && i.prototype,
                E = c("species"),
                h = !1,
                m = o(r.PromiseRejectionEvent),
                f = a("Promise", function() {
                    var e = s(i),
                        t = e !== String(i);
                    if (!t && 66 === p || l && !(_.catch && _.finally)) return !0;
                    if (!p || p < 51 || !/native code/.test(e)) {
                        var n = new i(function(e) {
                                e(1)
                            }),
                            r = function(e) {
                                e(function() {}, function() {})
                            };
                        if ((n.constructor = {})[E] = r, !(h = n.then(function() {}) instanceof r)) return !0
                    }
                    return !t && (u || d) && !m
                });
            e.exports = {
                CONSTRUCTOR: f,
                REJECTION_EVENT: m,
                SUBCLASSING: h
            }