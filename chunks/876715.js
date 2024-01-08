            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("95410"),
                u = n("457112"),
                o = n("679243"),
                d = n("49111"),
                c = n("204050"),
                f = n("212029");
            let h = "CameraPreviewPosition";

            function p(e) {
                let {
                    width: t,
                    onContextMenuParticipant: n,
                    height: s,
                    channel: p,
                    participants: m
                } = e, [E, C] = function() {
                    let [e, t] = l.useState(() => r.default.get(h, d.PictureInPicturePositions.BOTTOM_RIGHT));
                    return [e, l.useCallback(e => {
                        r.default.set(h, e), t(e)
                    }, [])]
                }(), S = l.useRef(null), g = null == p.getGuildId() ? 70 : 50;
                return l.useLayoutEffect(() => {
                    var e;
                    null === (e = S.current) || void 0 === e || e.ensureIsInPosition()
                }, [m.length]), (0, a.jsx)("div", {
                    className: c.container,
                    children: (0, a.jsx)(u.PictureInPictureWindow, {
                        position: E,
                        id: 0,
                        ref: S,
                        onMove: (e, t) => C(t),
                        maxX: t,
                        maxY: s,
                        edgeOffsetTop: g,
                        edgeOffsetBottom: 70,
                        edgeOffsetLeft: 16,
                        edgeOffsetRight: 16,
                        children: (0, a.jsx)("div", {
                            className: c.tileContainer,
                            children: m.map(e => (0, a.jsx)(o.default, {
                                participant: e,
                                channel: p,
                                onContextMenu: n,
                                className: i(c.tile, f.elevationHigh),
                                fit: o.CallTileFit.COVER,
                                inCall: !0,
                                inPopout: !1,
                                width: 160
                            }, e.id))
                        })
                    })
                })
            }