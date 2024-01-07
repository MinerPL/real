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
                } = e, T = (0, o.default)(), I = (0, i.useRef)(l), [A] = (0, i.useState)(() => new r.default), v = _(), {
                    offsetWidth: N
                } = v, {
                    dirty: C,
                    chunkStart: R,
                    chunkEnd: O,
                    forceUpdateOnChunkChange: L
                } = (0, s.default)({
                    chunkSize: d,
                    getScrollerState: _,
                    forceUpdate: T
                });
                return I.current = (0, i.useMemo)(() => C > 0 ? I.current : (A.mergeProps({
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
                }), A.computeVisibleSections(Math.max(0, R * d), O * d), A.getState()), [C, A, t, n, a, u, c, R, O, d, f, E, S, g, h, m, N, p]), {
                    ...I.current,
                    masonryComputer: A,
                    forceUpdateOnChunkChange: L,
                    forceUpdate: T
                }
            }