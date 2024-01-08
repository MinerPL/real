            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("917351"),
                l = n.n(i),
                r = n("775560"),
                o = n("907002"),
                u = n("446674"),
                d = n("278572"),
                c = n("684581"),
                E = n("488284"),
                f = n("870696"),
                _ = n("385649"),
                h = n("18494"),
                C = n("102985"),
                I = n("31957"),
                T = n("709681"),
                S = n("157246");
            let N = {
                    transform: "scale(0.7)",
                    opacity: 0
                },
                A = {
                    transform: "scale(1)",
                    opacity: 1
                };
            var m = () => {
                let e = (0, u.useStateFromStores)([h.default], () => h.default.getChannelId()),
                    t = (0, u.useStateFromStoresArray)([I.default], () => I.default.getIncomingCalls().filter(t => {
                        let {
                            channel: n
                        } = t;
                        return e !== n.id
                    })),
                    n = (0, u.useStateFromStores)([I.default], () => I.default.hasIncomingCalls()),
                    i = (0, u.useStateFromStores)([_.default], () => _.default.isSoundDisabled("call_ringing")),
                    m = E.default.useIsRingtoneEligible(),
                    p = E.default.useIsRingtoneDisabled(),
                    g = (0, u.useStateFromStores)([C.default], () => C.default.disableSounds),
                    R = (0, u.useStateFromStores)([f.default], () => f.default.getSoundpack()),
                    O = s.useRef(!1),
                    L = (0, r.useStableMemo)(() => {
                        let e = "call_ringing";
                        if (m && !p) return (0, T.createSound)(c.default.ringtone, e);
                        if (R === S.Soundpacks.CLASSIC) {
                            let t = 500 === l.random(1, 1e3) ? "call_ringing_beat" : "call_ringing";
                            return (0, T.createSound)(t, e)
                        }
                        return (0, T.createSoundForPack)("call_ringing", R)
                    }, [R, p, m]);
                s.useEffect(() => () => {
                    L.stop()
                }, [L]), s.useEffect(() => {
                    if (g || i) {
                        O.current && (L.stop(), O.current = !1);
                        return
                    }
                    n && !O.current ? (L.loop(), O.current = !0) : !n && O.current && (L.stop(), O.current = !1)
                }, [i, g, n, L]);
                let v = (0, o.useTransition)(t, {
                    keys: e => {
                        var t;
                        return null === (t = e.channel) || void 0 === t ? void 0 : t.id
                    },
                    enter: {
                        from: N,
                        to: A
                    },
                    leave: N,
                    config: {
                        mass: 1,
                        tension: 500,
                        friction: 18,
                        clamp: !0
                    }
                });
                return v((e, t) => (0, a.jsx)(d.default, {
                    ...t,
                    animatedStyle: e
                }))
            }