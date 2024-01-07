            "use strict";
            n.r(t), n.d(t, {
                useDropTarget: function() {
                    return a
                }
            });
            var r = n("884691"),
                o = n("598085");

            function a(e, t) {
                var n = (0, r.useMemo)(function() {
                    return new o.DropTargetImpl(e, t)
                }, [t]);
                return (0, r.useEffect)(function() {
                    n.spec = e
                }, [e]), n
            }