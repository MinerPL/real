            "use strict";
            n.r(t), n.d(t, {
                useKeyboardNavigation: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("880317"),
                r = n("997289"),
                o = n("246511"),
                s = n("45961");
            let a = e => {
                let {
                    columnCounts: t,
                    stickersGrid: n,
                    stickersListRef: a,
                    store: u,
                    gridNavigatorId: d,
                    setInspectedStickerPosition: c,
                    onGridItemSelect: f
                } = e, p = (0, r.useAnalyticsContext)(), m = l.useCallback(e => {
                    f(e, p)
                }, [f, p]), h = l.useCallback((e, t) => {
                    c(e, t, o.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
                }, [c]), {
                    gridDispatch: E,
                    getItemProps: S,
                    getRowProps: g,
                    gridContainerProps: C,
                    handleGridContainerKeyDown: T,
                    isUsingKeyboardNavigation: v
                } = (0, s.useExpressionPickerGridKeyboardNavigation)({
                    columnCounts: t,
                    gridNavigatorId: d,
                    itemGrid: n,
                    itemList: a,
                    onGridNavigatorItemSelect: m,
                    onGridNavigatorPositionChange: h
                });
                return l.useEffect(() => u.useStore.subscribe(e => {
                    if (null == e) return;
                    let {
                        columnIndex: t,
                        rowIndex: n,
                        source: l
                    } = e;
                    l !== o.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && E({
                        type: i.GridActionType.SET_FOCUSED_POSITION,
                        x: t,
                        y: n
                    })
                }, e => e.inspectedExpressionPosition), [E, u]), {
                    getItemProps: S,
                    getRowProps: g,
                    gridContainerProps: C,
                    handleGridContainerKeyDown: T,
                    isUsingKeyboardNavigation: v
                }
            }