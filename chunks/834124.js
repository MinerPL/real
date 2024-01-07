            "use strict";
            n.r(t), n.d(t, {
                usePreview: function() {
                    return s
                }
            });
            var r = n("884691"),
                o = n("476042"),
                a = n("947990");
            let i = e => {
                    let t = "translate(".concat(e.x.toFixed(1), "px, ").concat(e.y.toFixed(1), "px)");
                    return {
                        pointerEvents: "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        transform: t,
                        WebkitTransform: t
                    }
                },
                s = () => {
                    let e = (0, r.useRef)(null),
                        t = (0, o.useDragLayer)(t => ({
                            currentOffset: (0, a.calculatePointerPosition)(t, e),
                            isDragging: t.isDragging(),
                            itemType: t.getItemType(),
                            item: t.getItem(),
                            monitor: t
                        }));
                    return t.isDragging && null !== t.currentOffset ? {
                        display: !0,
                        itemType: t.itemType,
                        item: t.item,
                        style: i(t.currentOffset),
                        monitor: t.monitor,
                        ref: e
                    } : {
                        display: !1
                    }
                }