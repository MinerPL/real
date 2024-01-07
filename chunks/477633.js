            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("917351"),
                o = n("819855"),
                u = n("77078"),
                d = n("841098"),
                c = n("449918"),
                E = n("302185"),
                f = n("89050"),
                _ = n("843455"),
                I = n("353295"),
                h = r.memo(function(e) {
                    let {
                        file: t,
                        audio: n,
                        className: l,
                        waveformSettings: h
                    } = e, [m, A] = r.useState({
                        width: 0,
                        height: 0
                    }), N = r.useRef(null), S = r.useMemo(() => {
                        var e;
                        let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
                        return {
                            fineTuning: -1,
                            fineTuningResolution: t / f.defaultWaveformConfig.fineTuningScale,
                            duration: t,
                            ...null != h ? h : {}
                        }
                    }, [n, h]), g = (0, E.useAudioBufferData)(t), p = (0, E.useAudioWaveformData)(g, N.current, S), T = (0, d.default)(), C = (0, c.useColorValue)((0, o.isThemeDark)(T) ? _.Color.PRIMARY_300 : _.Color.PRIMARY_700), R = null == g || null == p, O = 0 === m.width || 0 === m.height, v = (O || R) && null != t, L = r.useCallback(() => {
                        null != N.current && A({
                            width: N.current.offsetWidth,
                            height: N.current.offsetHeight
                        })
                    }, []);
                    return r.useEffect(() => {
                        if (null != N.current) {
                            let e = new ResizeObserver((0, a.debounce)(L, 50));
                            return e.observe(N.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [L]), r.useEffect(() => {
                        if (null == N.current) return;
                        let e = N.current,
                            t = e.getContext("2d");
                        if (null == t) return;
                        let {
                            width: n,
                            height: i
                        } = e;
                        if (0 !== m.width && 0 !== m.height && null != p && p.length > 0) {
                            let e = n / p.length,
                                r = -(e * (f.defaultWaveformConfig.waveformBarWidth - 1));
                            t.clearRect(0, 0, n, i), t.fillStyle = C.hex;
                            for (let n = 0; n < p.length; n++) {
                                let l = p[n] * i,
                                    s = n * e + r,
                                    a = i / 2 - l / 2;
                                t.fillRect(s, a, e - r, l)
                            }
                        }
                    }, [C, m, T, p]), (0, i.jsxs)("div", {
                        className: s(I.container, l),
                        children: [(0, i.jsx)("canvas", {
                            className: I.waveformCanvas,
                            ref: N,
                            width: 4 * m.width,
                            height: 4 * m.height
                        }), v && (0, i.jsx)("div", {
                            className: I.loading,
                            children: (0, i.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })