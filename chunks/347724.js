            "use strict";
            n.r(e), n.d(e, {
                gatherActiveObservationsAtDepth: function() {
                    return a
                }
            }), n("424973");
            var r = n("234643"),
                i = n("418694"),
                o = n("170601"),
                a = function(t) {
                    o.cache.clear(), r.resizeObservers.forEach(function(e) {
                        e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach(function(n) {
                            n.isActive() && ((0, i.calculateDepthForNode)(n.target) > t ? e.activeTargets.push(n) : e.skippedTargets.push(n))
                        })
                    })
                }