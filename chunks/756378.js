            "use strict";
            n.r(e), n.d(e, {
                hasSkippedObservations: function() {
                    return i
                }
            });
            var r = n("234643"),
                i = function() {
                    return r.resizeObservers.some(function(t) {
                        return t.skippedTargets.length > 0
                    })
                }