            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("697309"),
                a = n("986257"),
                o = n("320959"),
                i = n("837052"),
                s = n("593882"),
                u = n("195548"),
                l = n("794230"),
                c = n("757367"),
                d = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function f(e) {
                var t, n, u, l, f, p, m, h = e.popper,
                    _ = e.popperRect,
                    y = e.placement,
                    g = e.variation,
                    v = e.offsets,
                    b = e.position,
                    M = e.gpuAcceleration,
                    w = e.adaptive,
                    k = e.roundOffsets,
                    L = e.isFixed,
                    D = v.x,
                    T = void 0 === D ? 0 : D,
                    S = v.y,
                    Y = void 0 === S ? 0 : S,
                    x = "function" == typeof k ? k({
                        x: T,
                        y: Y
                    }) : {
                        x: T,
                        y: Y
                    };
                T = x.x, Y = x.y;
                var O = v.hasOwnProperty("x"),
                    E = v.hasOwnProperty("y"),
                    P = r.left,
                    j = r.top,
                    C = window;
                if (w) {
                    var H = (0, a.default)(h),
                        F = "clientHeight",
                        N = "clientWidth";
                    H === (0, o.default)(h) && (H = (0, i.default)(h), "static" !== (0, s.default)(H).position && "absolute" === b && (F = "scrollHeight", N = "scrollWidth")), (y === r.top || (y === r.left || y === r.right) && g === r.end) && (j = r.bottom, Y -= (L && H === C && C.visualViewport ? C.visualViewport.height : H[F]) - _.height, Y *= M ? 1 : -1), (y === r.left || (y === r.top || y === r.bottom) && g === r.end) && (P = r.right, T -= (L && H === C && C.visualViewport ? C.visualViewport.width : H[N]) - _.width, T *= M ? 1 : -1)
                }
                var I = Object.assign({
                    position: b
                }, w && d);
                var A = !0 === k ? (t = {
                    x: T,
                    y: Y
                }, n = (0, o.default)(h), u = t.x, l = t.y, f = n.devicePixelRatio || 1, {
                    x: (0, c.round)(u * f) / f || 0,
                    y: (0, c.round)(l * f) / f || 0
                }) : {
                    x: T,
                    y: Y
                };
                return (T = A.x, Y = A.y, M) ? Object.assign({}, I, ((m = {})[j] = E ? "0" : "", m[P] = O ? "0" : "", m.transform = 1 >= (C.devicePixelRatio || 1) ? "translate(" + T + "px, " + Y + "px)" : "translate3d(" + T + "px, " + Y + "px, 0)", m)) : Object.assign({}, I, ((p = {})[j] = E ? Y + "px" : "", p[P] = O ? T + "px" : "", p.transform = "", p))
            }
            var p = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = n.gpuAcceleration,
                        a = n.adaptive,
                        o = n.roundOffsets,
                        i = void 0 === o || o,
                        s = {
                            placement: (0, u.default)(t.placement),
                            variation: (0, l.default)(t.placement),
                            popper: t.elements.popper,
                            popperRect: t.rects.popper,
                            gpuAcceleration: void 0 === r || r,
                            isFixed: "fixed" === t.options.strategy
                        };
                    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, f(Object.assign({}, s, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === a || a,
                        roundOffsets: i
                    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, f(Object.assign({}, s, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: i
                    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
                },
                data: {}
            }