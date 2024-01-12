            "use strict";
            n.r(t), n.d(t, {
                useAudioBufferData: function() {
                    return d
                },
                useAudioWaveformData: function() {
                    return f
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("884691"),
                l = n("748820"),
                s = n("129722"),
                r = n("89050");
            let a = new Worker(new URL(n.p + n.u("21401"), n.b)),
                o = new AudioContext;
            async function u(e) {
                let t = await e.arrayBuffer(),
                    n = await o.decodeAudioData(t);
                return n.getChannelData(0)
            }

            function d(e) {
                let [t, n] = i.useState(null), [l, s] = i.useState(null);
                return i.useEffect(() => {
                    if (null == e) return;
                    let t = (0, r.getAudioFileId)(e);
                    t !== l && (s(t), n(null), u(e).then(n))
                }, [l, e]), t
            }
            let c = {
                ...r.defaultWaveformConfig
            };

            function f(e, t, n) {
                let [o, u] = i.useState(null), [d, f] = i.useState(null), [m, h] = i.useState(1), {
                    setMaxVolume: g
                } = (0, s.useAudioTrimmerStore)(), E = i.useCallback((e, t) => {
                    var i, s, r, o, u;
                    f(null), (i = e, s = t.offsetWidth, r = n, o = c, u = h, new Promise(e => {
                        let t = (0, l.v4)(),
                            n = i => {
                                let {
                                    data: {
                                        waveform: l,
                                        id: s,
                                        normalizedVolumeMultipler: r
                                    }
                                } = i;
                                t === s && (e(l), u(r)), null == a || a.removeEventListener("message", n)
                            };
                        null == a || a.addEventListener("message", n), null == a || a.postMessage({
                            id: t,
                            options: r,
                            config: o,
                            width: s,
                            rawBufferData: i
                        })
                    })).then(f)
                }, [n]);
                return i.useEffect(() => {
                    if (null == e || null == t) return;
                    let i = (0, r.getWaveformId)(e, n);
                    o !== i && (u(i), E(e, t))
                }, [e, E, t, n, o]), i.useEffect(() => {
                    g(m)
                }, [m, g]), d
            }