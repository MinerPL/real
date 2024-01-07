            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var n = l("884691"),
                a = l("476042");

            function s(e) {
                let {
                    type: t,
                    index: l,
                    optionId: s,
                    onDragStart: i,
                    onDragComplete: r,
                    onDragReset: o
                } = e, [d, u] = n.useState(!1), [, c] = (0, a.useDrag)({
                    type: t,
                    item: () => (i(s), {
                        id: s,
                        position: l
                    }),
                    canDrag: () => d,
                    collect: e => ({
                        isDragging: e.isDragging()
                    }),
                    end: (e, t) => {
                        let l = t.getDropResult();
                        if (null == l) {
                            o();
                            return
                        }
                        r(l.optionId)
                    }
                }), [{
                    dragSourcePosition: f
                }, m] = (0, a.useDrop)({
                    accept: t,
                    canDrop: () => !0,
                    collect: e => {
                        let t = e.getItem();
                        return null != t && e.isOver() && e.canDrop() ? {
                            dragSourcePosition: t.position
                        } : {
                            dragSourcePosition: null
                        }
                    },
                    drop: () => ({
                        optionId: s
                    })
                });
                return {
                    drag: c,
                    dragSourcePosition: f,
                    drop: m,
                    setIsDraggable: u
                }
            }