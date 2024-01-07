            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("808653"), n("222007"), n("424973");
            var r = n("299192"),
                a = n("195548"),
                o = n("521289"),
                i = n("214725"),
                s = n("328679"),
                u = n("697309"),
                l = n("794230"),
                c = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            c = e.name;
                        if (!t.modifiersData[c]._skip) {
                            for (var d = n.mainAxis, f = void 0 === d || d, p = n.altAxis, m = void 0 === p || p, h = n.fallbackPlacements, _ = n.padding, y = n.boundary, g = n.rootBoundary, v = n.altBoundary, b = n.flipVariations, M = void 0 === b || b, w = n.allowedAutoPlacements, k = t.options.placement, L = (0, a.default)(k) === k, D = h || (L || !M ? [(0, r.default)(k)] : function(e) {
                                    if ((0, a.default)(e) === u.auto) return [];
                                    var t = (0, r.default)(e);
                                    return [(0, o.default)(e), t, (0, o.default)(t)]
                                }(k)), T = [k].concat(D).reduce(function(e, n) {
                                    return e.concat((0, a.default)(n) === u.auto ? (0, s.default)(t, {
                                        placement: n,
                                        boundary: y,
                                        rootBoundary: g,
                                        padding: _,
                                        flipVariations: M,
                                        allowedAutoPlacements: w
                                    }) : n)
                                }, []), S = t.rects.reference, Y = t.rects.popper, x = new Map, E = !0, O = T[0], P = 0; P < T.length; P++) {
                                var j = T[P],
                                    C = (0, a.default)(j),
                                    H = (0, l.default)(j) === u.start,
                                    F = [(0, u.top), (0, u.bottom)].indexOf(C) >= 0,
                                    I = F ? "width" : "height",
                                    N = (0, i.default)(t, {
                                        placement: j,
                                        boundary: y,
                                        rootBoundary: g,
                                        altBoundary: v,
                                        padding: _
                                    }),
                                    A = F ? H ? u.right : u.left : H ? u.bottom : u.top;
                                S[I] > Y[I] && (A = (0, r.default)(A));
                                var R = (0, r.default)(A),
                                    W = [];
                                if (f && W.push(N[C] <= 0), m && W.push(N[A] <= 0, N[R] <= 0), W.every(function(e) {
                                        return e
                                    })) {
                                    O = j, E = !1;
                                    break
                                }
                                x.set(j, W)
                            }
                            if (E) {
                                for (var z = M ? 3 : 1, U = function(e) {
                                        var t = T.find(function(t) {
                                            var n = x.get(t);
                                            if (n) return n.slice(0, e).every(function(e) {
                                                return e
                                            })
                                        });
                                        if (t) return O = t, "break"
                                    }, B = z; B > 0 && "break" !== U(B); B--);
                            }
                            t.placement !== O && (t.modifiersData[c]._skip = !0, t.placement = O, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }