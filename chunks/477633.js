            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
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
                f = n("302185"),
                E = n("89050"),
                _ = n("843455"),
                h = n("353295"),
                m = r.memo(function(e) {
                    let {
                        file: t,
                        audio: n,
                        className: l,
                        waveformSettings: m
                    } = e, [g, p] = r.useState({
                        width: 0,
                        height: 0
                    }), I = r.useRef(null), S = r.useMemo(() => {
                        var e;
                        let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
                        return {
                            fineTuning: -1,
                            fineTuningResolution: t / E.defaultWaveformConfig.fineTuningScale,
                            duration: t,
                            ...null != m ? m : {}
                        }
                    }, [n, m]), A = (0, f.useAudioBufferData)(t), N = (0, f.useAudioWaveformData)(A, I.current, S), v = (0, d.default)(), R = (0, c.useColorValue)((0, o.isThemeDark)(v) ? _.Color.PRIMARY_300 : _.Color.PRIMARY_700), C = null == A || null == N, T = 0 === g.width || 0 === g.height, O = (T || C) && null != t, L = r.useCallback(() => {
                        null != I.current && p({
                            width: I.current.offsetWidth,
                            height: I.current.offsetHeight
                        })
                    }, []);
                    return r.useEffect(() => {
                        if (null != I.current) {
                            let e = new ResizeObserver((0, a.debounce)(L, 50));
                            return e.observe(I.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [L]), r.useEffect(() => {
                        if (null == I.current) return;
                        let e = I.current,
                            t = e.getContext("2d");
                        if (null == t) return;
                        let {
                            width: n,
                            height: i
                        } = e;
                        if (0 !== g.width && 0 !== g.height && null != N && N.length > 0) {
                            let e = n / N.length,
                                r = -(e * (E.defaultWaveformConfig.waveformBarWidth - 1));
                            t.clearRect(0, 0, n, i), t.fillStyle = R.hex;
                            for (let n = 0; n < N.length; n++) {
                                let l = N[n] * i,
                                    s = n * e + r,
                                    a = i / 2 - l / 2;
                                t.fillRect(s, a, e - r, l)
                            }
                        }
                    }, [R, g, v, N]), (0, i.jsxs)("div", {
                        className: s(h.container, l),
                        children: [(0, i.jsx)("canvas", {
                            className: h.waveformCanvas,
                            ref: I,
                            width: 4 * g.width,
                            height: 4 * g.height
                        }), O && (0, i.jsx)("div", {
                            className: h.loading,
                            children: (0, i.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })