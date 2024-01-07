            "use strict";
            n.r(t), n.d(t, {
                useDragDropManager: function() {
                    return i
                }
            });
            var r = n("884691"),
                o = n("900255"),
                a = n("388588");

            function i() {
                var e = (0, r.useContext)(a.DndContext).dragDropManager;
                return (0, o.invariant)(null != e, "Expected drag drop context"), e
            }