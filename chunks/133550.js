            "use strict";
            n.r(t), n.d(t, {
                useDragSourceMonitor: function() {
                    return i
                }
            });
            var r = n("884691"),
                o = n("29150"),
                a = n("119076");

            function i() {
                var e = (0, a.useDragDropManager)();
                return (0, r.useMemo)(function() {
                    return new o.DragSourceMonitorImpl(e)
                }, [e])
            }