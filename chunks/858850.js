            "use strict";
            n.r(t), n.d(t, {
                createAdvancedScroller: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("718776"),
                a = n("462977");

            function u(e, t, n) {
                let o = (0, a.getScrollbarSpecs)(e);
                return r.forwardRef(function(u, c) {
                    let {
                        children: d,
                        className: _,
                        dir: f = "ltr",
                        orientation: E = "vertical",
                        fade: S = !1,
                        customTheme: g = !1,
                        paddingFix: h = !0,
                        style: m,
                        ...p
                    } = u, {
                        scrollerRef: T,
                        getScrollerState: I
                    } = (0, a.useUncachedScrollerState)(), A = (0, a.useScrollSpring)(T, E);
                    r.useImperativeHandle(c, () => ({
                        getScrollerNode: () => T.current,
                        getScrollerState: I,
                        ...(0, a.getAnimatedScrollHelpers)(T, I, A, E)
                    }), [T, I, E, A]);
                    let v = (0, a.usePaddingFixes)({
                        paddingFix: h,
                        orientation: E,
                        dir: f,
                        className: _,
                        scrollerRef: T,
                        specs: o
                    });
                    return (0, i.jsx)("div", {
                        ref: T,
                        className: s(_, {
                            [e]: !0,
                            [t]: S,
                            [n]: g
                        }),
                        style: (0, a.getMergedOrientationStyles)(m, E),
                        dir: f,
                        ...p,
                        children: (0, i.jsxs)(l.FocusRingScope, {
                            containerRef: T,
                            children: [d, v]
                        })
                    })
                })
            }