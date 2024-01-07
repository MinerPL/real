            "use strict";
            n.r(t), n.d(t, {
                useAudioBufferData: function() {
                    return d
                },
                useAudioWaveformData: function() {
                    return E
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("884691"),
                r = n("748820"),
                l = n("129722"),
                s = n("89050");
            let a = new Worker(new URL(n.p + n.u("21401"), n.b)),
                o = new AudioContext;
            async function u(e) {
                let t = await e.arrayBuffer(),
                    n = await o.decodeAudioData(t);
                return n.getChannelData(0)
            }

            function d(e) {
                let [t, n] = i.useState(null), [r, l] = i.useState(null);
                return i.useEffect(() => {
                    if (null == e) return;
                    let t = (0, s.getAudioFileId)(e);
                    t !== r && (l(t), n(null), u(e).then(n))
                }, [r, e]), t
            }
            let c = {
                ...s.defaultWaveformConfig
            };

            function E(e, t, n) {
                let [o, u] = i.useState(null), [d, E] = i.useState(null), [f, _] = i.useState(1), {
                    setMaxVolume: I
                } = (0, l.useAudioTrimmerStore)(), h = i.useCallback((e, t) => {
                    var i, l, s, o, u;
                    E(null), (i = e, l = t.offsetWidth, s = n, o = c, u = _, new Promise(e => {
                        let t = (0, r.v4)(),
                            n = i => {
                                let {
                                    data: {
                                        waveform: r,
                                        id: l,
                                        normalizedVolumeMultipler: s
                                    }
                                } = i;
                                t === l && (e(r), u(s)), null == a || a.removeEventListener("message", n)
                            };
                        null == a || a.addEventListener("message", n), null == a || a.postMessage({
                            id: t,
                            options: s,
                            config: o,
                            width: l,
                            rawBufferData: i
                        })
                    })).then(E)
                }, [n]);
                return i.useEffect(() => {
                    if (null == e || null == t) return;
                    let i = (0, s.getWaveformId)(e, n);
                    o !== i && (u(i), h(e, t))
                }, [e, h, t, n, o]), i.useEffect(() => {
                    I(f)
                }, [f, I]), d
            }