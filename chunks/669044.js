            "use strict";
            n.r(t), n.d(t, {
                useDropTargetConnector: function() {
                    return s
                }
            });
            var r = n("884691"),
                o = n("29150"),
                a = n("119076"),
                i = n("634115");

            function s(e) {
                var t = (0, a.useDragDropManager)(),
                    n = (0, r.useMemo)(function() {
                        return new o.TargetConnector(t.getBackend())
                    }, [t]);
                return (0, i.useIsomorphicLayoutEffect)(function() {
                    return n.dropTargetOptions = e || null, n.reconnect(),
                        function() {
                            return n.disconnectDropTarget()
                        }
                }, [e]), n
            }