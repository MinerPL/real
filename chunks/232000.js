            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var i = n("884691"),
                r = n("87430"),
                o = n("644141"),
                s = n("17182");
            let l = Object.freeze({
                coordsMap: {},
                visibleSections: {},
                totalHeight: 0,
                gridData: {
                    boundaries: [],
                    coordinates: {}
                }
            });

            function a(e) {
                let {
                    sections: t,
                    columns: n,
                    getItemKey: a,
                    getItemHeight: u,
                    getSectionHeight: c,
                    chunkSize: d = 250,
                    getScrollerState: _,
                    itemGutter: f,
                    removeEdgeItemGutters: E,
                    sectionGutter: S,
                    padding: g,
                    paddingVertical: h,
                    paddingHorizontal: m,
                    dir: p
                } = e, I = (0, o.default)(), T = (0, i.useRef)(l), [v] = (0, i.useState)(() => new r.default), A = _(), {
                    offsetWidth: N
                } = A, {
                    dirty: C,
                    chunkStart: R,
                    chunkEnd: O,
                    forceUpdateOnChunkChange: L
                } = (0, s.default)({
                    chunkSize: d,
                    getScrollerState: _,
                    forceUpdate: I
                });
                return T.current = (0, i.useMemo)(() => C > 0 ? T.current : (v.mergeProps({
                    sections: t,
                    columns: n,
                    getItemKey: a,
                    getItemHeight: u,
                    getSectionHeight: c,
                    bufferWidth: N,
                    itemGutter: f,
                    removeEdgeItemGutters: E,
                    sectionGutter: S,
                    padding: g,
                    paddingVertical: h,
                    paddingHorizontal: m,
                    dir: p
                }), v.computeVisibleSections(Math.max(0, R * d), O * d), v.getState()), [C, v, t, n, a, u, c, R, O, d, f, E, S, g, h, m, N, p]), {
                    ...T.current,
                    masonryComputer: v,
                    forceUpdateOnChunkChange: L,
                    forceUpdate: I
                }
            }