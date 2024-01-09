            "use strict";
            n.r(t), n.d(t, {
                useEmojiHoseStore: function() {
                    return p
                },
                default: function() {
                    return E
                }
            }), n("424973");
            var a = n("917351"),
                l = n.n(a),
                s = n("748820"),
                i = n("308503"),
                r = n("760679"),
                u = n("242260"),
                o = n("315841"),
                d = n("52477"),
                c = n("357304"),
                f = n("827520");
            let h = {
                    X_OFFSET: 2 * f.EMOJI_HOSE_EMOJI_SIZE,
                    Y_OFFSET: 25,
                    X_SPEED: .5,
                    Y_SPEED_MIN: -1,
                    Y_SPEED_MAX: -5,
                    OPACITY: 1,
                    OPACITY_SPEED_MIN: .01,
                    OPACITY_SPEED_MAX: .05,
                    SIZE_MIN: f.EMOJI_HOSE_EMOJI_SIZE / 2,
                    SIZE_MAX: f.EMOJI_HOSE_EMOJI_SIZE
                },
                p = (0, i.default)(() => ({
                    particles: {},
                    lastSpawned: {}
                }));

            function m(e, t) {
                var n;
                l(null !== (n = p.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t)
            }

            function E(e) {
                var t, n, a, i;
                let {
                    emojiHose: E,
                    context: C,
                    canvasWidth: S,
                    canvasHeight: g,
                    fallbackColor: _,
                    outlineColorDark: I,
                    outlineColorLight: T,
                    streamerId: v,
                    deadDrawables: x
                } = e;
                C.save();
                let N = u.default.getEmojiImage(null !== (n = null !== (t = E.emojiId) && void 0 !== t ? t : E.emojiName) && void 0 !== n ? n : ""),
                    A = (0, d.normalizeCoordinate)(E.x, S),
                    M = (0, d.normalizeCoordinate)(E.y, g),
                    {
                        outlineColor: R
                    } = (0, d.getUserColors)(E.userId, I, T, _);
                if (m(E, e => {
                        var t, n;
                        return t = E, n = e, void(n.x += n.xSpeed * window.devicePixelRatio, n.y += n.ySpeed * window.devicePixelRatio, n.opacity -= n.opacitySpeed, n.opacity <= 0 && p.setState(e => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e)))
                    }), ! function(e, t, n) {
                        var a;
                        let i = null !== (a = p.getState().lastSpawned[e.id]) && void 0 !== a ? a : 0,
                            r = Date.now();
                        if (!(i + 100 > r) && e.state !== o.EmojiHoseState.STOP)(.8 >= Math.random() || i + 300 < r) && p.setState(a => {
                            var i, r, u;
                            let o = null !== (i = a.particles[e.id]) && void 0 !== i ? i : {},
                                d = l.random(1, 2);
                            for (let e = 0; e < d; e++) {
                                ;
                                let e = (r = t, u = n, {
                                    id: (0, s.v4)(),
                                    x: r + l.random(-h.X_OFFSET, h.X_OFFSET),
                                    y: u + l.random(-h.Y_OFFSET, h.Y_OFFSET),
                                    xSpeed: l.random(-h.X_SPEED, h.X_SPEED),
                                    ySpeed: l.random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
                                    opacity: h.OPACITY,
                                    opacitySpeed: l.random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
                                    size: l.random(h.SIZE_MIN, h.SIZE_MAX)
                                });
                                o[e.id] = e
                            }
                            return a.particles[e.id] = o, a.lastSpawned[e.id] = Date.now(), a
                        })
                    }(E, A, M), (0, c.renderAvatarCursorOutline)(C, A, M, R, f.OUTLINE_WIDTH), (0, c.renderAvatarCursor)(C, A, M, E.userId), m(E, e => (function(e, t, n) {
                        if (null == t) return;
                        let a = n.size * window.devicePixelRatio,
                            l = n.x - a / 2 * window.devicePixelRatio,
                            s = n.y - 1.2 * a * window.devicePixelRatio;
                        e.globalAlpha = n.opacity, e.drawImage(t, a / 2 + l, a / 2 + s, a, a)
                    })(C, N, e)), E.lastUpdatedAt + f.EMOJI_HOSE_PING_DELAY < Date.now() && (0, r.stopRenderedEmojiHose)(v, E), E.state === o.EmojiHoseState.STOP && (a = E, !(Object.keys(null !== (i = p.getState().particles[a.id]) && void 0 !== i ? i : {}).length > 0))) x.push(E);
                C.restore()
            }