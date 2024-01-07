            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("424973");
            var i, r = n("917351"),
                s = n.n(r),
                a = n("773364"),
                o = n("398183"),
                l = n("497407");
            i = class {
                start() {
                    this.connection.on(a.BaseConnectionEvent.Stats, this.sampleStats)
                }
                stop() {
                    this.connection.off(a.BaseConnectionEvent.Stats, this.sampleStats)
                }
                getMosStats() {
                    let e = s.reduce(this.inboundStats, (e, t) => {
                        e.mosSum += t.mosSum, e.mosCount += t.mosCount;
                        for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                        return e
                    }, {
                        mosSum: 0,
                        mosCount: 0,
                        mosBuckets: [0, 0, 0, 0, 0]
                    });
                    return {
                        mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
                        mos_1: e.mosBuckets[1],
                        mos_2: e.mosBuckets[2],
                        mos_3: e.mosBuckets[3],
                        mos_4: e.mosBuckets[4]
                    }
                }
                getPacketStats() {
                    let e = s.reduce(this.inboundStats, (e, t) => (e.packetsReceived += t.packetsReceived, e.packetsReceivedLost += t.packetsLost, null != e.fecPacketsReceived && (e.fecPacketsReceived += t.fecPacketsReceived), null != e.fecPacketsDiscarded && (e.fecPacketsDiscarded += t.fecPacketsDiscarded), e), {
                        packetsReceived: 0,
                        packetsReceivedLost: 0,
                        fecPacketsReceived: 0,
                        fecPacketsDiscarded: 0
                    });
                    return {
                        packets_sent: this.outboundStats.packetsSent,
                        packets_sent_lost: this.outboundStats.packetsLost,
                        packets_received: e.packetsReceived,
                        packets_received_lost: e.packetsReceivedLost,
                        fec_packets_received: e.fecPacketsReceived,
                        fec_packets_discarded: e.fecPacketsDiscarded
                    }
                }
                getBytesStats() {
                    let e = s.reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0);
                    return {
                        bytes_sent: this.outboundStats.bytesSent,
                        bytes_received: e
                    }
                }
                getNetworkStats() {
                    return this.networkQuality.getStats()
                }
                getBufferStats() {
                    let e = s.reduce(this.inboundStats, (e, t) => ((null == e || null != t.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75) && (e = t.bufferStats), e), null);
                    return {
                        ... function(e) {
                            let t = {};
                            for (let n in e) {
                                let i = e[n];
                                t[n + "_mean"] = null != i ? i.mean : 0, t[n + "_p75"] = null != i ? i.p75 : 0, t[n + "_p95"] = null != i ? i.p95 : 0, t[n + "_p99"] = null != i ? i.p99 : 0, t[n + "_max"] = null != i ? i.max : 0
                            }
                            return t
                        }({
                            audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                            audio_jitter_target: null != e ? e.audioJitterTarget : null,
                            audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                            relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                            relative_playout_delay: null != e ? e.relativePlayoutDelay : null
                        })
                    }
                }
                getFrameOpStats() {
                    let e = s.reduce(this.inboundStats, (e, t) => (null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent), null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal), null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged), null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded), null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated), null != t.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded), null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng), e), {
                        silent: 0,
                        normal: 0,
                        merged: 0,
                        expanded: 0,
                        accelerated: 0,
                        preemptiveExpanded: 0,
                        cng: 0
                    });
                    return {
                        frame_op_silent: e.silent,
                        frame_op_normal: e.normal,
                        frame_op_merged: e.merged,
                        frame_op_expanded: e.expanded,
                        frame_op_accelerated: e.accelerated,
                        frame_op_preemptive_expanded: e.preemptiveExpanded,
                        frame_op_cng: e.cng
                    }
                }
                getDurationStats() {
                    return {
                        duration_listening: this.duration.listening,
                        duration_speaking: this.duration.speaking,
                        duration_participation: this.duration.participation,
                        duration_connected: this.duration.connected
                    }
                }
                getTransportStats() {
                    return {
                        decryption_failures: this.decryptionFailures,
                        routing_failures: this.routingFailures
                    }
                }
                getPeriodicStats() {
                    let e = [];
                    for (let [p, _] of Object.entries(this.periodicInboundStats)) {
                        let {
                            previous: S,
                            current: m,
                            currentTimestampMs: T,
                            previousTimestampMs: g,
                            numRateSamples: I
                        } = _;
                        if (void 0 !== g && T > g) {
                            var t, n, i, r, s, a, o, l, u, c, d, f, E, h;
                            let C = T - g,
                                v = {
                                    userId: p,
                                    silent: null !== (n = m.silent) && void 0 !== n ? n : 0 - (null !== (t = S.silent) && void 0 !== t ? t : 0),
                                    normal: null !== (r = m.normal) && void 0 !== r ? r : 0 - (null !== (i = S.normal) && void 0 !== i ? i : 0),
                                    merged: null !== (a = m.merged) && void 0 !== a ? a : 0 - (null !== (s = S.merged) && void 0 !== s ? s : 0),
                                    expanded: null !== (l = m.expanded) && void 0 !== l ? l : 0 - (null !== (o = S.expanded) && void 0 !== o ? o : 0),
                                    accelerated: null !== (c = m.accelerated) && void 0 !== c ? c : 0 - (null !== (u = S.accelerated) && void 0 !== u ? u : 0),
                                    preemptiveExpanded: null !== (f = m.preemptiveExpanded) && void 0 !== f ? f : 0 - (null !== (d = S.preemptiveExpanded) && void 0 !== d ? d : 0),
                                    cng: null !== (h = m.cng) && void 0 !== h ? h : 0 - (null !== (E = S.cng) && void 0 !== E ? E : 0),
                                    accelerateRate: _.accelerateRateSum / I,
                                    expandRate: _.expandRateSum / I,
                                    preemptiveExpandRate: _.preemptiveExpandRateSum / I,
                                    speechExpandRate: _.speechExpandRateSum / I,
                                    durationMs: C
                                };
                            v.normal + v.merged + v.expanded + v.accelerated + v.preemptiveExpanded > 0 && e.push(v)
                        }
                        this.periodicInboundStats[p].accelerateRateSum = 0, this.periodicInboundStats[p].expandRateSum = 0, this.periodicInboundStats[p].preemptiveExpandRateSum = 0, this.periodicInboundStats[p].speechExpandRateSum = 0, this.periodicInboundStats[p].numRateSamples = 0, this.periodicInboundStats[p].previous = m, this.periodicInboundStats[p].previousTimestampMs = T
                    }
                    return e
                }
                calculateMos(e, t) {
                    let n = this.calculateR(e, t);
                    return n < 0 ? 1 : n > 100 ? 4.5 : 1 + .035 * n + 71e-7 * n * (n - 60) * (100 - n)
                }
                calculateR(e, t) {
                    return 93.4 - (.024 * e + (e > 177.3 ? .11 * (e - 177.3) : 0)) - (10 + 122 * t / (t + 10))
                }
                constructor(e) {
                    this.connection = e, this.sampleStats = e => {
                        if (null == e) return;
                        this.networkQuality.incrementNetworkStats((0, o.now)()), this.decryptionFailures = e.transport.decryptionFailures, this.routingFailures = e.transport.routingFailures, this.duration.connected++;
                        let t = this.outboundStats.packetsSent,
                            n = s.reduce(this.inboundStats, (e, t) => (e.packetsReceived += t.packetsReceived, e), {
                                packetsReceived: 0
                            });
                        s.forEach(e.rtp.outbound, e => {
                            if ("audio" === e.type) {
                                var t;
                                this.outboundStats = {
                                    packetsSent: e.packetsSent,
                                    bytesSent: e.bytesSent,
                                    packetsLost: null !== (t = e.packetsLost) && void 0 !== t ? t : 0
                                }
                            }
                        }), s.forEach(e.rtp.inbound, (t, n) => {
                            s.forEach(t, t => {
                                if ("audio" === t.type) {
                                    var i, r, a, o, l, u, c, d, f, E, h, p;
                                    let _ = null !== (i = e.transport.ping) && void 0 !== i ? i : 0,
                                        S = t.packetsReceived,
                                        m = t.packetsLost,
                                        T = t.bytesReceived,
                                        g = null !== (r = t.fecPacketsReceived) && void 0 !== r ? r : 0,
                                        I = null !== (a = t.fecPacketsDiscarded) && void 0 !== a ? a : 0,
                                        C = null !== (o = t.jitterBuffer) && void 0 !== o ? o : 0,
                                        v = {
                                            audioJitterBuffer: t.audioJitterBuffer,
                                            audioJitterTarget: t.audioJitterTarget,
                                            audioJitterDelay: t.audioJitterDelay,
                                            relativeReceptionDelay: t.relativeReceptionDelay,
                                            relativePlayoutDelay: t.relativePlayoutDelay
                                        },
                                        A = {
                                            silent: t.opSilence,
                                            normal: t.opNormal,
                                            merged: t.opMerge,
                                            expanded: t.opExpand,
                                            accelerated: t.opAccelerate,
                                            preemptiveExpanded: t.opPreemptiveExpand,
                                            cng: t.opCNG
                                        };
                                    if (null != this.inboundStats[n]) {
                                        let e = S - this.inboundStats[n].packetsReceived,
                                            i = m - this.inboundStats[n].packetsLost,
                                            r = 0,
                                            a = this.inboundStats[n].mosBuckets;
                                        e > 0 && i >= 0 && (r = this.calculateMos(_ + C, s.clamp(i / (e + i), 0, 1)), a[Math.floor(r)]++), this.inboundStats[n] = {
                                            packetsReceived: S,
                                            bytesReceived: T,
                                            packetsLost: m,
                                            fecPacketsReceived: g,
                                            fecPacketsDiscarded: I,
                                            mos: r,
                                            mosSum: this.inboundStats[n].mosSum + r,
                                            mosCount: this.inboundStats[n].mosCount + (r > 0 ? 1 : 0),
                                            mosBuckets: a,
                                            bufferStats: v,
                                            frameOpStats: A
                                        }, this.periodicInboundStats[n] = {
                                            previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                            previous: this.periodicInboundStats[n].previous,
                                            currentTimestampMs: Date.now(),
                                            current: A,
                                            accelerateRateSum: this.periodicInboundStats[n].accelerateRateSum + (null !== (l = t.accelerateRate) && void 0 !== l ? l : 0),
                                            expandRateSum: this.periodicInboundStats[n].expandRateSum + (null !== (u = t.expandRate) && void 0 !== u ? u : 0),
                                            preemptiveExpandRateSum: this.periodicInboundStats[n].preemptiveExpandRateSum + (null !== (c = t.preemptiveExpandRate) && void 0 !== c ? c : 0),
                                            speechExpandRateSum: this.periodicInboundStats[n].speechExpandRateSum + (null !== (d = t.speechExpandRate) && void 0 !== d ? d : 0),
                                            numRateSamples: this.periodicInboundStats[n].numRateSamples + 1
                                        }
                                    } else this.inboundStats[n] = {
                                        packetsReceived: S,
                                        bytesReceived: T,
                                        packetsLost: m,
                                        fecPacketsReceived: g,
                                        fecPacketsDiscarded: I,
                                        mos: 0,
                                        mosSum: 0,
                                        mosCount: 0,
                                        mosBuckets: [0, 0, 0, 0, 0],
                                        bufferStats: v,
                                        frameOpStats: A
                                    }, this.periodicInboundStats[n] = {
                                        previousTimestampMs: Date.now(),
                                        previous: A,
                                        currentTimestampMs: Date.now(),
                                        current: A,
                                        accelerateRateSum: null !== (f = t.accelerateRate) && void 0 !== f ? f : 0,
                                        expandRateSum: null !== (E = t.expandRate) && void 0 !== E ? E : 0,
                                        preemptiveExpandRateSum: null !== (h = t.preemptiveExpandRate) && void 0 !== h ? h : 0,
                                        speechExpandRateSum: null !== (p = t.speechExpandRate) && void 0 !== p ? p : 0,
                                        numRateSamples: 1
                                    }
                                }
                            })
                        });
                        let i = !1,
                            r = !1;
                        this.outboundStats.packetsSent > t && (i = !0, this.duration.speaking++);
                        let a = s.reduce(this.inboundStats, (e, t) => (e.packetsReceived += t.packetsReceived, e), {
                            packetsReceived: 0
                        });
                        a.packetsReceived > n.packetsReceived && (r = !0, this.duration.listening++), (i || r) && this.duration.participation++
                    }, this.networkQuality = new l.default, this.inboundStats = {}, this.outboundStats = {
                        packetsSent: 0,
                        bytesSent: 0,
                        packetsLost: 0
                    }, this.duration = {
                        listening: 0,
                        speaking: 0,
                        participation: 0,
                        connected: 0
                    }, this.periodicInboundStats = {}
                }
            }