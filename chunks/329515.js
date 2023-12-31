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
                u = n("449008"),
                o = n("679243"),
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
                        visibleParticipants: o,
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
                            [l, o] = (0, s.partition)(a, d.isStreamParticipant),
                            c = o.findIndex(p),
                            f = null; - 1 !== c && (f = o[c], o.splice(c, 1));
                        let m = null != f ? e - h - 8 : e,
                            E = Math.max(0, Math.min(Math.floor((m - 8) / 132), 12, t.length)),
                            C = Math.min((m - 8) / E - 8, h),
                            S = Math.max(0, E - l.length),
                            g = l.slice(0, E),
                            _ = o.slice(0, S),
                            I = Array(S);
                        if (S > 0) {
                            let e = [];
                            for (let t of _) {
                                let n = r.current[t.id];
                                null != n && n < S ? I[n] = t : e.push(t)
                            }
                            for (let t = 0; t < I.length; t++) {
                                if (null != I[t]) continue;
                                let n = e.shift();
                                if (null == n) break;
                                I[t] = n
                            }
                        }
                        let T = I.filter(u.isNotNullish),
                            v = (0, s.keyBy)((0, s.range)(T.length), e => T[e].id);
                        r.current = v;
                        let x = [...g, ...T];
                        return null != f && x.push(f), {
                            visibleParticipants: x,
                            participantTileWidth: C
                        }
                    }, [e, t, n]);
                return {
                    visibleParticipants: o,
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
                    channel: u,
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
                            children: (0, a.jsx)(o.default, {
                                participant: e,
                                selected: l === e.id,
                                channel: u,
                                className: c.tile,
                                fit: o.CallTileFit.COVER,
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