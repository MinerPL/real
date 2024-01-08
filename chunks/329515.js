            "use strict";
            n.r(t), n.d(t, {
                PARTICIPANTS_HEIGHT: function() {
                    return f
                },
                useVisibleParticipants: function() {
                    return m
                },
                default: function() {
                    return E
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("917351"),
                i = n("246846"),
                r = n("271938"),
                o = n("449008"),
                u = n("679243"),
                d = n("99795"),
                c = n("987162");
            let f = 112,
                h = 16 / 9 * f + 8;

            function p(e) {
                var t;
                let n = r.default.getId();
                return e.type === d.ParticipantTypes.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
            }

            function m(e, t) {
                let [n, a] = l.useState(Date.now());
                l.useEffect(() => {
                    let e = setTimeout(() => {
                        a(Date.now())
                    }, 1e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, [t]);
                let r = l.useRef({}),
                    {
                        visibleParticipants: u,
                        participantTileWidth: c
                    } = l.useMemo(() => {
                        let n = Date.now(),
                            a = (0, s.sortBy)(t, e => (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                                switch (e.type) {
                                    case d.ParticipantTypes.ACTIVITY:
                                        return "\x00".concat(e.sortKey);
                                    case d.ParticipantTypes.HIDDEN_STREAM:
                                    case d.ParticipantTypes.STREAM:
                                        return "\x01".concat((0, i.default)(e.userNick, e.user));
                                    case d.ParticipantTypes.USER:
                                        var n;
                                        let a = "\x05";
                                        return e.speaking ? a = "\x02" : t - e.lastSpoke < 1e4 ? a = "\x03" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (a = "\x04"), "".concat(a).concat(function(e) {
                                            let t = String(864e13).length;
                                            return String(864e13 - e).padStart(t, "0")
                                        }(e.lastSpoke)).concat((0, i.default)(e.userNick, e.user))
                                }
                            })(e, n)),
                            [l, u] = (0, s.partition)(a, d.isStreamParticipant),
                            c = u.findIndex(p),
                            f = null; - 1 !== c && (f = u[c], u.splice(c, 1));
                        let m = null != f ? e - h - 8 : e,
                            E = Math.max(0, Math.min(Math.floor((m - 8) / 132), 12, t.length)),
                            C = Math.min((m - 8) / E - 8, h),
                            g = Math.max(0, E - l.length),
                            S = l.slice(0, E),
                            _ = u.slice(0, g),
                            I = Array(g);
                        if (g > 0) {
                            let e = [];
                            for (let t of _) {
                                let n = r.current[t.id];
                                null != n && n < g ? I[n] = t : e.push(t)
                            }
                            for (let t = 0; t < I.length; t++) {
                                if (null != I[t]) continue;
                                let n = e.shift();
                                if (null == n) break;
                                I[t] = n
                            }
                        }
                        let T = I.filter(o.isNotNullish),
                            v = (0, s.keyBy)((0, s.range)(T.length), e => T[e].id);
                        r.current = v;
                        let x = [...S, ...T];
                        return null != f && x.push(f), {
                            visibleParticipants: x,
                            participantTileWidth: C
                        }
                    }, [e, t, n]);
                return {
                    visibleParticipants: u,
                    participantTileWidth: c
                }
            }

            function E(e) {
                let {
                    participants: t,
                    participantTileWidth: n,
                    selectedParticipantId: l,
                    onDoubleClick: s,
                    onContextMenu: i,
                    onClick: r,
                    channel: o,
                    inCall: d,
                    popoutWindow: f,
                    paused: m = !1
                } = e, E = null != f;
                return (0, a.jsx)("div", {
                    className: c.root,
                    children: t.map(e => {
                        if (null == e) return null;
                        let t = p(e);
                        return (0, a.jsx)("div", {
                            className: c.tileSizer,
                            style: t ? {
                                flexShrink: 0
                            } : void 0,
                            children: (0, a.jsx)(u.default, {
                                participant: e,
                                selected: l === e.id,
                                channel: o,
                                className: c.tile,
                                fit: u.CallTileFit.COVER,
                                onClick: r,
                                onDoubleClick: s,
                                onContextMenu: i,
                                width: t ? h : n,
                                inCall: d,
                                paused: m,
                                inPopout: E
                            })
                        }, e.id)
                    })
                })
            }