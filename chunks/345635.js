            "use strict";
            n.r(t), n.d(t, {
                useDragType: function() {
                    return a
                }
            });
            var r = n("900255"),
                o = n("884691");

            function a(e) {
                return (0, o.useMemo)(function() {
                    var t = e.type;
                    return (0, r.invariant)(null != t, "spec.type must be defined"), t
                }, [e])
            }