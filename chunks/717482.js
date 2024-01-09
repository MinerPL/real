            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("424973");
            var a = n("52477"),
                l = n("357304"),
                s = n("827520");

            function i(e) {
                let {
                    line: t,
                    context: n,
                    canvasWidth: i,
                    canvasHeight: r,
                    fallbackColor: u,
                    outlineColorDark: o,
                    outlineColorLight: d,
                    linesDrawnAt: c,
                    deadDrawables: f
                } = e;
                null == c.current[t.id] && (c.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
                let h = t.points.map(e => (0, a.normalizeCoordinates)(e, i, r)),
                    p = c.current[t.id],
                    m = e => p + e.deltaTime,
                    E = e => m(e) + 1500 >= Date.now(),
                    C = e => m(e) <= Date.now() && E(e),
                    g = h.find(C);
                if (null == g) {
                    !E(t.points[t.points.length - 1]) && f.push(t);
                    return
                }
                let S = (e, t) => {
                        let a = null;
                        n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(g.x, g.y);
                        for (let e = 1; e < h.length; e++) {
                            let t = h[e];
                            C(t) && (n.lineTo(t.x, t.y), a = t)
                        }
                        return n.stroke(), a
                    },
                    {
                        fillColor: _,
                        outlineColor: I
                    } = (0, a.getUserColors)(t.userId, o, d, u),
                    T = S(I, 6 + s.OUTLINE_WIDTH),
                    v = null != T && C(T);
                v && (0, l.renderAvatarCursorOutline)(n, T.x, T.y, I, s.OUTLINE_WIDTH), S(_, 6), v && (0, l.renderAvatarCursor)(n, T.x, T.y, t.userId)
            }