            "use strict";
            n.r(t), n.d(t, {
                process: function() {
                    return u
                }
            });
            var r = n("885376"),
                a = n("896874"),
                o = n("341455"),
                i = n("47837"),
                s = n("819839"),
                u = function() {
                    var e = 0;
                    for ((0, s.gatherActiveObservationsAtDepth)(e);
                        (0, r.hasActiveObservations)();) e = (0, i.broadcastActiveObservations)(), (0, s.gatherActiveObservationsAtDepth)(e);
                    return (0, a.hasSkippedObservations)() && (0, o.deliverResizeLoopError)(), e > 0
                }