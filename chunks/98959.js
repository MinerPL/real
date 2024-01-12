            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("697309"),
                a = n("195548"),
                o = n("774728"),
                i = n("632840"),
                s = n("903751"),
                u = n("31644"),
                l = n("986257"),
                c = n("214725"),
                d = n("794230"),
                f = n("576955"),
                p = n("757367"),
                m = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            m = e.name,
                            h = n.mainAxis,
                            _ = n.altAxis,
                            y = n.boundary,
                            g = n.rootBoundary,
                            v = n.altBoundary,
                            b = n.padding,
                            M = n.tether,
                            w = void 0 === M || M,
                            k = n.tetherOffset,
                            L = void 0 === k ? 0 : k,
                            D = (0, c.default)(t, {
                                boundary: y,
                                rootBoundary: g,
                                padding: b,
                                altBoundary: v
                            }),
                            T = (0, a.default)(t.placement),
                            S = (0, d.default)(t.placement),
                            Y = !S,
                            x = (0, o.default)(T),
                            O = (0, i.default)(x),
                            E = t.modifiersData.popperOffsets,
                            P = t.rects.reference,
                            j = t.rects.popper,
                            C = "function" == typeof L ? L(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : L,
                            H = "number" == typeof C ? {
                                mainAxis: C,
                                altAxis: C
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, C),
                            F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            N = {
                                x: 0,
                                y: 0
                            };
                        if (E) {
                            if (void 0 === h || h) {
                                var I, A = "y" === x ? r.top : r.left,
                                    R = "y" === x ? r.bottom : r.right,
                                    z = "y" === x ? "height" : "width",
                                    W = E[x],
                                    B = W + D[A],
                                    U = W - D[R],
                                    K = w ? -j[z] / 2 : 0,
                                    V = S === r.start ? P[z] : j[z],
                                    J = S === r.start ? -j[z] : -P[z],
                                    G = t.elements.arrow,
                                    q = w && G ? (0, u.default)(G) : {
                                        width: 0,
                                        height: 0
                                    },
                                    $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.default)(),
                                    Q = $[A],
                                    X = $[R],
                                    Z = (0, s.within)(0, P[z], q[z]),
                                    ee = Y ? P[z] / 2 - K - Z - Q - H.mainAxis : V - Z - Q - H.mainAxis,
                                    et = Y ? -P[z] / 2 + K + Z + X + H.mainAxis : J + Z + X + H.mainAxis,
                                    en = t.elements.arrow && (0, l.default)(t.elements.arrow),
                                    er = en ? "y" === x ? en.clientTop || 0 : en.clientLeft || 0 : 0,
                                    ea = null != (I = null == F ? void 0 : F[x]) ? I : 0,
                                    eo = (0, s.within)(w ? (0, p.min)(B, W + ee - ea - er) : B, W, w ? (0, p.max)(U, W + et - ea) : U);
                                E[x] = eo, N[x] = eo - W
                            }
                            if (void 0 !== _ && _) {
                                var ei, es = "x" === x ? r.top : r.left,
                                    eu = "x" === x ? r.bottom : r.right,
                                    el = E[O],
                                    ec = "y" === O ? "height" : "width",
                                    ed = el + D[es],
                                    ef = el - D[eu],
                                    ep = -1 !== [(0, r.top), (0, r.left)].indexOf(T),
                                    em = null != (ei = null == F ? void 0 : F[O]) ? ei : 0,
                                    eh = ep ? ed : el - P[ec] - j[ec] - em + H.altAxis,
                                    e_ = ep ? el + P[ec] + j[ec] - em - H.altAxis : ef,
                                    ey = w && ep ? (0, s.withinMaxClamp)(eh, el, e_) : (0, s.within)(w ? eh : ed, el, w ? e_ : ef);
                                E[O] = ey, N[O] = ey - el
                            }
                            t.modifiersData[m] = N
                        }
                    },
                    requiresIfExists: ["offset"]
                }