            "use strict";
            s.r(t), s.d(t, {
                speedTestRate: function() {
                    return i
                },
                speedTestDuration: function() {
                    return r
                },
                speedTestDirection: function() {
                    return o
                },
                speedTestFps: function() {
                    return d
                },
                speedTestPingInfo: function() {
                    return u
                },
                speedTestSummary: function() {
                    return c
                }
            }), s("222007"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("492311");
            var a = s("24815"),
                n = s("226445"),
                l = s("84908");

            function i(e) {
                return 8 * e.clusterSize * 1e3 / e.clusterIntervalMs
            }

            function r(e) {
                return e.clusterIntervalMs * e.numClusters / 1e3
            }

            function o(e) {
                return e.direction === l.SpeedTestDirections.CLIENT_TO_SERVER ? "Client -> Server" : e.direction === l.SpeedTestDirections.SERVER_TO_CLIENT ? "Server -> Client" : e.direction
            }

            function d(e) {
                return 1e3 / e.clusterIntervalMs
            }

            function u(e) {
                let t = [...e];
                t.sort((e, t) => e - t);
                let s = t.length;
                return {
                    count: s,
                    min: t[0],
                    p50: t[Math.floor(s / 2)],
                    max: t[s - 1]
                }
            }

            function c(e, t, s) {
                let l = Uint8Array.from(a.toByteArray(e)),
                    i = new DataView(l.buffer),
                    r = 16,
                    o = Math.ceil(t.clusterSize / 1200),
                    d = t.numClusters * o,
                    u = 0,
                    c = 0,
                    S = 0,
                    E = null,
                    f = null,
                    T = null,
                    m = null,
                    _ = null;
                for (let e = 0; e < i.byteLength / r; e++) {
                    let t = i.getUint32(4 * (4 * e + 0)),
                        a = i.getUint32(4 * (4 * e + 1)),
                        n = i.getUint32(4 * (4 * e + 2)),
                        l = i.getUint32(4 * (4 * e + 3));
                    u++, c += a, S += a + s, null == f && (f = l), T = l, null == E && (E = n), null == m && (m = t);
                    let r = l - (n - E);
                    null == _ && (_ = r), r < _ && (_ = r)
                }
                let g = new n.Histogram,
                    h = null;
                for (let e = 0; e < i.byteLength / r; e++) {
                    let t = i.getUint32(4 * (4 * e + 2)),
                        s = i.getUint32(4 * (4 * e + 3)),
                        a = (s - (t - E) - _) / 1e3;
                    g.addSample(a), null == h && (h = a), a > h && (h = a)
                }
                let I = null != f && null != T ? (T - f) / 1e3 : 0,
                    N = 1 - u / d,
                    p = 8 * c / I,
                    C = 8 * S / I,
                    A = g.getReport([50, 95, 99]);
                return {
                    payloadBandwidth: p,
                    networkBandwidth: C,
                    loss: N,
                    iatP50: A.percentiles[50],
                    iatP95: A.percentiles[95],
                    iatP99: A.percentiles[99],
                    iatMax: null != h ? h : 0
                }
            }