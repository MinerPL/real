            "use strict";
            n.r(e), n.d(e, {
                broadcastActiveObservations: function() {
                    return u
                }
            }), n("424973");
            var r = n("234643"),
                i = n("904352"),
                o = n("418694"),
                a = n("170601"),
                u = function() {
                    var t = 1 / 0,
                        e = [];
                    r.resizeObservers.forEach(function(n) {
                        if (0 !== n.activeTargets.length) {
                            var r = [];
                            n.activeTargets.forEach(function(e) {
                                var n = new i.ResizeObserverEntry(e.target),
                                    u = (0, o.calculateDepthForNode)(e.target);
                                r.push(n), e.lastReportedSize = (0, a.calculateBoxSize)(e.target, e.observedBox), u < t && (t = u)
                            }), e.push(function() {
                                n.callback.call(n.observer, r, n.observer)
                            }), n.activeTargets.splice(0, n.activeTargets.length)
                        }
                    });
                    for (var n = 0; n < e.length; n++)(0, e[n])();
                    return t
                }