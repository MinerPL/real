(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1639"], {
        620635: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("292508"),
                i = a("500664"),
                l = a("782340");

            function s(e) {
                let {
                    windowKey: t
                } = e;
                return (0, n.jsx)(r.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: l.default.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
                    children: (0, n.jsx)(i.default, {})
                })
            }
        },
        500664: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("917351"),
                l = a.n(i),
                s = a("446674"),
                o = a("77078"),
                d = a("673777"),
                u = a("800751"),
                c = a("534291"),
                m = a("161778"),
                f = a("42203"),
                p = a("26989"),
                h = a("945956"),
                g = a("661919"),
                C = a("697218"),
                S = a("145131"),
                v = a("158998"),
                R = a("701964"),
                y = a("831963"),
                E = a("129324"),
                D = a("48445"),
                T = a("990455"),
                x = a("252260"),
                F = a("49111"),
                N = a("353927"),
                b = a("782340"),
                P = a("361430");
            let j = (e, t, a) => (0, n.jsx)(S.default, {
                    align: S.default.Align.CENTER,
                    children: (0, n.jsx)(S.default.Child, {
                        children: (0, n.jsxs)(S.default, {
                            align: S.default.Align.CENTER,
                            children: [(0, n.jsx)(o.Avatar, {
                                size: o.AvatarSizes.SIZE_24,
                                src: e.getAvatarURL(a, 24),
                                "aria-label": e.username,
                                className: P.avatar
                            }), (0, n.jsx)("span", {
                                className: P.username,
                                children: null != t ? t : v.default.getName(e)
                            })]
                        })
                    })
                }),
                I = e => (0, n.jsx)(S.default, {
                    align: S.default.Align.CENTER,
                    children: (0, n.jsx)(S.default.Child, {
                        children: (0, n.jsx)(S.default, {
                            align: S.default.Align.CENTER,
                            children: (0, n.jsx)("span", {
                                className: P.username,
                                children: e
                            })
                        })
                    })
                });

            function B(e, t, a, n, r) {
                let i = [];
                if (null == t) return i;
                let {
                    transport: s,
                    rtp: {
                        inbound: o,
                        outbound: u
                    },
                    camera: m
                } = t;
                return i.push({
                    section: c.SectionTypes.HEADER,
                    label: b.default.Messages.RTC_DEBUG_CONTEXT.format({
                        context: e
                    })
                }), null != s && i.push({
                    section: (0, g.keySection)(e, F.RTCDebugSections.TRANSPORT, a),
                    label: b.default.Messages.RTC_DEBUG_TRANSPORT,
                    element: x.default,
                    elementProps: {
                        context: e,
                        index: a
                    }
                }), null != u && i.push({
                    section: (0, g.keySection)(e, F.RTCDebugSections.OUTBOUND, a),
                    label: b.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
                    element: D.default,
                    elementProps: {
                        context: e,
                        index: a
                    }
                }), null != m && i.push({
                    section: (0, g.keySection)(e, F.RTCDebugSections.CAMERA, a),
                    label: b.default.Messages.RTC_DEBUG_CAMERA,
                    element: R.default,
                    elementProps: {
                        context: e,
                        index: a,
                        camera: m
                    }
                }), null != o && !l.isEmpty(o) && (i.push({
                    section: c.SectionTypes.HEADER,
                    label: b.default.Messages.RTC_DEBUG_RTP_INBOUND
                }), Object.keys(o).forEach(t => {
                    let l = C.default.getUser(t),
                        s = p.default.getNick(r, t),
                        o = (0, g.keySection)(e, t, a);
                    i.push({
                        section: o,
                        label: null != l ? j(l, s, r) : I(null != s ? s : t),
                        ariaLabel: null != l ? l.tag : t,
                        onClick: () => {
                            d.setSection(o)
                        },
                        element: E.default,
                        elementProps: {
                            context: e,
                            index: a,
                            videoStreams: n
                        }
                    })
                })), i
            }

            function A() {
                var e, t;
                let {
                    defaultStats: a,
                    streamStats: i
                } = (0, s.useStateFromStores)([g.default], () => ({
                    defaultStats: g.default.getAllStats(N.MediaEngineContextTypes.DEFAULT),
                    streamStats: g.default.getAllStats(N.MediaEngineContextTypes.STREAM)
                }), [], s.statesWillNeverBeEqual), l = (0, s.useStateFromStores)([h.default, f.default], () => f.default.getChannel(h.default.getChannelId())), p = null === (e = a.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, C = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, S = (0, s.useStateFromStores)([m.default], () => m.default.theme), v = (0, s.useStateFromStores)([m.default], () => m.default.darkSidebar ? F.ThemeTypes.DARK : void 0), R = (0, s.useStateFromStores)([g.default], () => g.default.getSection()), E = (0, s.useStateFromStores)([g.default], () => g.default.getVideoStreams()), D = function(e) {
                    let {
                        defaultStats: t,
                        streamStats: a,
                        videoStreams: r,
                        screenshare: i,
                        clips: l,
                        channel: s
                    } = e, d = t.flatMap((e, t) => B(N.MediaEngineContextTypes.DEFAULT, e, t, r, null == s ? void 0 : s.getGuildId())), u = a.flatMap((e, t) => B(N.MediaEngineContextTypes.STREAM, e, t, r, null == s ? void 0 : s.getGuildId())), m = [], f = [], p = {
                        section: c.SectionTypes.DIVIDER
                    };
                    null != i && (m.push(p), m.push({
                        section: F.RTCDebugSections.SCREENSHARE,
                        label: b.default.Messages.RTC_DEBUG_SCREENSHARE,
                        element: T.default,
                        elementProps: {
                            screenshare: i
                        }
                    })), null != l && (f.push(p), f.push({
                        section: F.RTCDebugSections.CLIPS,
                        label: b.default.Messages.RTC_DEBUG_CLIPS,
                        element: y.default,
                        elementProps: {
                            clips: l
                        }
                    })), u.length > 0 && u.unshift(p);
                    let h = null != s ? [{
                        section: c.SectionTypes.CUSTOM,
                        label: "Channel Name",
                        element: () => (0, n.jsx)(o.Heading, {
                            className: P.channelName,
                            variant: "heading-lg/semibold",
                            children: s.name
                        })
                    }] : [];
                    return [...h, ...d, ...u, ...m, ...f]
                }({
                    defaultStats: a,
                    streamStats: i,
                    videoStreams: E,
                    screenshare: p,
                    clips: C,
                    channel: l
                });
                return r.useEffect(() => () => {
                    d.close()
                }, []), (0, n.jsx)(u.default, {
                    theme: S,
                    sidebarTheme: v,
                    section: R,
                    onSetSection: d.setSection,
                    sections: D
                })
            }
        },
        701964: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("917351"),
                i = a.n(r),
                l = a("77078"),
                s = a("245622"),
                o = a("266331"),
                d = a("782340");

            function u(e) {
                let {
                    camera: t
                } = e;
                if (null == t) return (0, n.jsx)(l.Spinner, {
                    type: l.Spinner.Type.SPINNING_CIRCLE
                });
                let a = i.map(t, (e, t) => {
                    if (!(o.hidden[t] || void 0 === e)) return (0, n.jsx)(o.Item, {
                        label: t,
                        value: e
                    }, t)
                });
                return (0, n.jsx)(l.FormSection, {
                    tag: l.FormTitleTags.H2,
                    title: d.default.Messages.RTC_DEBUG_CAMERA,
                    children: (0, s.renderTwoColumns)(a)
                })
            }
        },
        831963: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("917351"),
                i = a.n(r),
                l = a("77078"),
                s = a("245622"),
                o = a("266331"),
                d = a("782340");

            function u(e) {
                let {
                    clips: t
                } = e;
                if (null == t) return (0, n.jsx)(l.Spinner, {
                    type: l.Spinner.Type.SPINNING_CIRCLE
                });
                let a = i.map(t, (e, t) => {
                    if (void 0 !== e) return (0, n.jsx)(o.Item, {
                        label: t,
                        value: e
                    }, t)
                });
                return a.push((0, n.jsx)(o.Item, {
                    label: "Frames Per Second",
                    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
                }, "framerate")), (0, n.jsx)(l.FormSection, {
                    tag: l.FormTitleTags.H2,
                    title: d.default.Messages.RTC_DEBUG_CLIPS,
                    children: (0, s.renderTwoColumns)(a)
                })
            }
        },
        245622: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                renderTwoColumns: function() {
                    return h
                },
                renderStreams: function() {
                    return C
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("414456"),
                i = a.n(r),
                l = a("77078"),
                s = a("103723"),
                o = a("42887"),
                d = a("661919"),
                u = a("145131"),
                c = a("512264"),
                m = a("266331"),
                f = a("361430"),
                p = a("926622");

            function h(e) {
                let t = [],
                    a = 0;
                for (e.length % 2 != 0 && e.push((0, n.jsx)(u.default, {
                        basis: "50%",
                        grow: 0
                    }, a++)); e.length > 0;) t.push((0, n.jsx)(u.default, {
                    basis: "50%",
                    grow: 0,
                    children: e.splice(0, 2)
                }, a++));
                return t
            }
            let g = {
                ssrc: 1,
                codec: 2
            };

            function C(e, t, a, r) {
                return e.map(e => {
                    let u = [];
                    for (let t of Object.keys(e).sort((e, t) => {
                            let a = g[e],
                                n = g[t];
                            if (a !== n) return void 0 === a ? 1 : void 0 === n ? -1 : a - n;
                            return d.graphs[e] !== d.graphs[t] ? d.graphs[e] ? 1 : -1 : e > t ? 1 : -1
                        })) {
                        let r = e[t];
                        !m.hidden[t] && void 0 !== r && u.push((0, n.jsx)(m.Item, {
                            section: a,
                            label: t,
                            value: r
                        }, t))
                    }
                    return (0, n.jsxs)(l.FormSection, {
                        className: p.marginBottom40,
                        title: e.type,
                        titleClassName: f.sectionHeader,
                        children: ["video" === e.type && null != t && null != a && null != r && function(e, t, a, r) {
                            let l = r.get(t, a, e.ssrc);
                            return null != l ? (0, n.jsx)("div", {
                                className: i(f.videoWrapper, p.marginBottom40),
                                children: (0, n.jsx)(c.default, {
                                    streamId: l,
                                    videoComponent: o.default.getMediaEngine().Video,
                                    paused: !1,
                                    videoSpinnerContext: s.VideoSpinnerContext.REPLAY_VIDEO_STREAM,
                                    userId: a
                                })
                            }) : null
                        }(e, t, a, r), h(u)]
                    }, "".concat(e.type, " + ").concat(e.ssrc))
                })
            }
        },
        129324: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("446674"),
                l = a("77078"),
                s = a("26989"),
                o = a("945956"),
                d = a("661919"),
                u = a("697218"),
                c = a("158998"),
                m = a("245622"),
                f = a("782340");
            class p extends r.PureComponent {
                render() {
                    let {
                        streams: e,
                        userId: t,
                        mediaEngineConnectionId: a,
                        videoStreams: r
                    } = this.props;
                    if (null == t || null == e || 0 === e.length) return (0, n.jsx)(l.Spinner, {
                        type: l.Spinner.Type.SPINNING_CIRCLE
                    });
                    let i = o.default.getGuildId(),
                        d = u.default.getUser(t),
                        p = s.default.getNick(i, t),
                        h = null == d ? f.default.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(f.default.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != p ? p : c.default.getName(d));
                    return (0, n.jsx)(l.FormSection, {
                        tag: l.FormTitleTags.H2,
                        title: h,
                        children: (0, m.renderStreams)(e, a, t, r)
                    })
                }
            }
            var h = i.default.connectStores([d.default], e => {
                var t;
                let {
                    context: a,
                    index: n,
                    videoStreams: r
                } = e, i = d.default.getAllStats(a)[n], {
                    section: l
                } = (0, d.parseSection)(d.default.getSection());
                if (null == l) throw Error("Unrecognized section format");
                let s = null;
                return null != i && null != i.rtp.inbound && (s = null !== (t = i.rtp.inbound[l]) && void 0 !== t ? t : []), {
                    mediaEngineConnectionId: null == i ? void 0 : i.mediaEngineConnectionId,
                    userId: l,
                    streams: s,
                    videoStreams: r
                }
            })(p)
        },
        601615: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("414456"),
                l = a.n(i),
                s = a("669491"),
                o = a("77078"),
                d = a("145131"),
                u = a("315585"),
                c = a("361430");
            let m = ["firCount", "nackCount"];
            class f extends r.PureComponent {
                renderValueIcon() {
                    let {
                        label: e
                    } = this.props, t = m.includes(e);
                    return t ? (0, n.jsx)(u.default, {
                        color: s.default.unsafe_rawColors.YELLOW_300.css,
                        className: c.valueIcon
                    }) : null
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        valueRendered: a,
                        section: r,
                        label: i,
                        renderGraph: s
                    } = this.props;
                    return (0, n.jsxs)(d.default, {
                        className: l(c.item, t),
                        direction: d.default.Direction.VERTICAL,
                        basis: "50%",
                        children: [(0, n.jsxs)(d.default, {
                            className: c.kvContainer,
                            align: d.default.Align.START,
                            children: [(0, n.jsx)(d.default.Child, {
                                children: (0, n.jsx)(o.H, {
                                    className: c.title,
                                    children: e
                                })
                            }), Array.isArray(a) ? (0, n.jsx)(d.default.Child, {
                                grow: 1,
                                children: a
                            }) : (0, n.jsxs)(d.default.Child, {
                                grow: 0,
                                shrink: 0,
                                children: [this.renderValueIcon(), (0, n.jsx)("span", {
                                    className: c.itemValue,
                                    title: a,
                                    children: a
                                })]
                            })]
                        }), null !== s && (0, n.jsx)(d.default.Child, {
                            className: c.graph,
                            children: (0, n.jsx)(o.FormText, {
                                type: o.FormTextTypes.DESCRIPTION,
                                children: s
                            })
                        }, null != r ? "".concat(r, "-").concat(i) : i), (0, n.jsx)(o.FormDivider, {
                            className: c.divider
                        })]
                    })
                }
            }
        },
        266331: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                hidden: function() {
                    return v
                },
                Item: function() {
                    return D
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("477850"),
                l = a.n(i),
                s = a("661919"),
                o = a("222871"),
                d = a("601615");
            let u = {
                accelerateRate: "Accelerate Rate",
                audioDetected: "Audio Detected",
                audioLevel: "Audio Level",
                availableOutgoingBitrate: "Available Outgoing Bitrate",
                averageDecodeTime: "Average Decode Time",
                averageEncodeTime: "Average Encode Time",
                bandwidthLimitedResolution: "Bandwidth Limited Resolution",
                bitrate: "Bitrate",
                bitrateTarget: "Bitrate (Target)",
                bytesReceived: "Bytes Received",
                bytesSent: "Bytes Sent",
                capturedFramesCount: "Captured Frames per Second",
                capturedFramesDropped: "Captured Frames Dropped",
                capturedFramesMean: "Captured Frames Mean (ms)",
                capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
                codec: "Codec",
                cpuLimitedResolution: "CPU Limited Resolution",
                currentDelay: "Current Delay",
                decoderImplementationName: "Decoder",
                decodingCNG: "Decoding CNG",
                decodingMutedOutput: "Decoding Muted Output",
                decodingNormal: "Decoding Normal",
                decodingPLC: "Decoding PLC",
                decodingPLCCNG: "Decoding PLC CNG",
                decryptionFailures: "Decryption Failures",
                delayEstimate: "Delay Estimate",
                encoderImplementationName: "Encoder",
                encoderQualityPsnr: "Encoder PSNR (dB)",
                encoderQualityVmaf: "Encoder VMAF",
                encodeUsage: "Encode Usage",
                expandRate: "Expand Rate",
                filter: "Filter",
                firCount: "FIR",
                fractionLost: "Packet Loss",
                frameRateDecode: "Frame Rate (Decode)",
                frameRateEncode: "Frame Rate (Encode)",
                frameRateInput: "Frame Rate (Input)",
                frameRateNetwork: "Frame Rate (Network)",
                frameRateRender: "Frame Rate (Render)",
                framesDecoded: "Frames Decoded",
                framesDropped: "Frames Dropped",
                framesEncoded: "Frames Encoded",
                framesReceived: "Frames Received",
                framesSent: "Frames Sent",
                freezeCount: "Freeze Count",
                hostname: "Hostname",
                hybridDxgiFrames: "Hybrid DXGI Frames",
                hybridGdiFrames: "Hybrid GDI Frames",
                hybridVideohookFrames: "Hybrid Videohook Frames",
                hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
                hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
                inboundBitrateEstimate: "Inbound Bitrate Estimate",
                jitter: "Jitter",
                jitterBuffer: "Jitter Buffer",
                jitterBufferPreferred: "Jitter Buffer (Preferred)",
                keyFrameInterval: "Key Frame Interval",
                keyFramesDecoded: "Key Frames Decoded",
                keyFramesEncoded: "Key Frames Encoded",
                localAddress: "Local Address",
                minPlayoutDelay: "Minimum Playout Delay",
                nackCount: "NACK",
                networkFramesDropped: "Frames Dropped By Network",
                opAccelerate: "Accelerated Frames",
                opCNG: "CNG Frames",
                opExpand: "Expand Frames",
                opMerge: "Merge Frames",
                opNormal: "Normal Frames",
                opPreemptiveExpand: "Preemptive Expand Frames",
                opSilence: "Silent Frames",
                outboundBitrateEstimate: "Outbound Bitrate Estimate",
                pacerDelay: "Pacer Delay",
                packetsLost: "Packets Lost",
                packetsReceived: "Packets Received",
                packetsSent: "Packets Sent",
                pauseCount: "Pause Count",
                ping: "Ping",
                pliCount: "PLI",
                preemptiveExpandRate: "Pre-emptive Expand Rate",
                qpSum: "QP Sum",
                quartzFrames: "Quartz Frames",
                screenCaptureKitFrames: "ScreenCaptureKit frames",
                receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
                relativePlayoutDelay: "Relative Playout Delay",
                relativeReceptionDelay: "Relative Reception Delay",
                renderDelay: "Render Delay",
                resolution: "Resolution",
                routingFailures: "Routing Failures",
                screenshareFrames: "WebRTC Frames",
                secondaryDecodedRate: "Secondary Decode Rate",
                sinkWant: "Sink Quality Level (Remote)",
                sinkWantLocal: "Sink Quality Level (Local)",
                speechExpandRate: "Speech Expand Rate",
                ssrc: "SSRC",
                sumOfSquaredFramesDurations: "Sum of Squared Frames Duration (ms?)",
                targetDelay: "Target Delay",
                totalFramesDuration: "Frames Duration (ms)",
                totalFreezesDuration: "Freezes Duration (ms)",
                totalPausesDuration: "Pauses Duration (ms)",
                videohookBackend: "Videohook Backend",
                videohookFrames: "Videohook Frames"
            };

            function c(e) {
                return "".concat((e / 1e3).toFixed(2), " Kbps")
            }

            function m(e) {
                return l.filesize(e)
            }

            function f(e) {
                return e
            }

            function p(e) {
                return "".concat(e, " ms")
            }

            function h(e) {
                return "".concat(e.toFixed(0), "%")
            }

            function g(e) {
                return e ? "Yes" : "No"
            }

            function C(e) {
                return "".concat(Math.max(e, 0).toFixed(2), " dB")
            }

            function S(e) {
                let {
                    last: t
                } = e;
                return "".concat(t, " ms")
            }
            let v = {
                    audioJitterBuffer: !0,
                    audioJitterDelay: !0,
                    audioJitterTarget: !0,
                    audioPlayoutUnderruns: !0,
                    fractionLost: !0,
                    framesCaptured: !0,
                    framesRendered: !0,
                    noiseCancellerProcessTime: !0,
                    sinkWantAsInt: !0,
                    timestamp: !0,
                    type: !0,
                    videoJitterBuffer: !0,
                    videoJitterDelay: !0,
                    videoJitterTarget: !0,
                    voiceActivityDetectorProcessTime: !0
                },
                R = {
                    accelerateRate: h,
                    audioDetected: g,
                    audioLevel: C,
                    availableOutgoingBitrate: c,
                    averageDecodeTime: p,
                    averageEncodeTime: p,
                    bandwidthLimitedResolution: g,
                    bitrate: c,
                    bitrateTarget: c,
                    bytesReceived: m,
                    bytesSent: m,
                    codec: function(e) {
                        let {
                            id: t,
                            name: a
                        } = e;
                        return a = null != (a = "" === a ? "unknown" : a) ? a : "unknown", "".concat(a[0].toUpperCase()).concat(a.slice(1), " (").concat(t, ")")
                    },
                    cpuLimitedResolution: g,
                    currentDelay: p,
                    decoderImplementationName: f,
                    delayEstimate: p,
                    encoderImplementationName: f,
                    encoderQualityPsnr: C,
                    encoderQualityVmaf: e => "".concat(e.toFixed(2)),
                    encodeUsage: h,
                    expandRate: h,
                    filter: f,
                    fractionLost: h,
                    inboundBitrateEstimate: c,
                    jitter: p,
                    jitterBuffer: p,
                    jitterBufferPreferred: p,
                    keyFrameInterval: p,
                    minPlayoutDelay: p,
                    outboundBitrateEstimate: c,
                    pacerDelay: p,
                    ping: p,
                    preemptiveExpandRate: h,
                    receiverBitrateEstimate: c,
                    relativePlayoutDelay: S,
                    relativeReceptionDelay: S,
                    renderDelay: p,
                    resolution: e => {
                        let {
                            width: t,
                            height: a
                        } = e;
                        return "".concat(t, "x").concat(a)
                    },
                    secondaryDecodedRate: h,
                    speechExpandRate: h,
                    targetDelay: p,
                    videohookBackend: function(e) {
                        let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
                        return e < t.length ? t[e] : "Unknown"
                    }
                },
                y = e => e,
                E = e => {
                    let [t] = r.useState([]);
                    return t.push({
                        value: e.value,
                        time: Date.now()
                    }), t.length > 600 && t.shift(), (0, n.jsx)(o.default, {
                        dataPoints: t,
                        width: e.width,
                        height: e.height
                    })
                };

            function D(e) {
                var t, a, r, i;
                let {
                    label: l,
                    value: c,
                    section: m
                } = e, f = null !== (a = R[l]) && void 0 !== a ? a : y;
                let p = s.graphs[l] && (Array.isArray(i = c) && i.length > 0 && "number" == typeof i[0].value ? (0, n.jsx)(o.default, {
                        dataPoints: i,
                        width: 300,
                        height: 100
                    }) : "number" == typeof i ? (0, n.jsx)(E, {
                        value: i,
                        width: 300,
                        height: 100
                    }) : void 0),
                    h = Array.isArray(c) ? null === (t = c.at(-1)) || void 0 === t ? void 0 : t.value : c;
                return (0, n.jsx)(d.default, {
                    label: l,
                    valueRendered: f(h),
                    section: m,
                    renderGraph: p,
                    children: null !== (r = u[l]) && void 0 !== r ? r : l
                })
            }
        },
        48445: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("446674"),
                l = a("77078"),
                s = a("661919"),
                o = a("245622"),
                d = a("782340");
            class u extends r.PureComponent {
                render() {
                    let {
                        outbound: e
                    } = this.props;
                    return null == e ? (0, n.jsx)(l.Spinner, {
                        type: l.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, n.jsx)(l.FormSection, {
                        tag: l.FormTitleTags.H2,
                        title: d.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
                        children: (0, o.renderStreams)(e)
                    })
                }
            }
            var c = i.default.connectStores([s.default], e => {
                let {
                    context: t,
                    index: a
                } = e, n = s.default.getAllStats(t)[a];
                return {
                    outbound: null != n ? n.rtp.outbound : null
                }
            })(u)
        },
        990455: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("917351"),
                l = a.n(i),
                s = a("77078"),
                o = a("245622"),
                d = a("266331"),
                u = a("782340");
            class c extends r.PureComponent {
                render() {
                    let {
                        screenshare: e
                    } = this.props;
                    if (null == e) return (0, n.jsx)(s.Spinner, {
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    });
                    let t = l.map(e, (e, t) => {
                        if (!(d.hidden[t] || void 0 === e)) return (0, n.jsx)(d.Item, {
                            label: t,
                            value: e
                        }, t)
                    });
                    return (0, n.jsx)(s.FormSection, {
                        tag: s.FormTitleTags.H2,
                        title: u.default.Messages.RTC_DEBUG_SCREENSHARE,
                        children: (0, o.renderTwoColumns)(t)
                    })
                }
            }
            var m = c
        },
        252260: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return F
                }
            });
            var n = a("37983"),
                r = a("884691"),
                i = a("917351"),
                l = a.n(i),
                s = a("446674"),
                o = a("77078"),
                d = a("945956"),
                u = a("661919"),
                c = a("162771"),
                m = a("205817"),
                f = a("102985"),
                p = a("697218"),
                h = a("145131"),
                g = a("387111"),
                C = a("687609"),
                S = a("245622"),
                v = a("601615"),
                R = a("266331"),
                y = a("353927"),
                E = a("782340"),
                D = a("361430"),
                T = a("926622");
            class x extends r.PureComponent {
                render() {
                    let {
                        transport: e,
                        mediaSessionId: t,
                        hidePersonalInformation: a,
                        hostname: r
                    } = this.props;
                    if (null == e) return (0, n.jsx)(o.Spinner, {
                        type: o.Spinner.Type.SPINNING_CIRCLE
                    });
                    let i = {
                            ...e,
                            hostname: r
                        },
                        s = l.map(i, (e, t) => {
                            if ("receiverReports" !== t && (!a || "localAddress" !== t)) return (0, n.jsx)(R.Item, {
                                label: t,
                                value: e
                            }, t)
                        }),
                        d = l.map(i.receiverReports, e => {
                            let t = (0, n.jsxs)(h.default, {
                                    id: "bitrate-".concat(e.id),
                                    justify: h.default.Justify.BETWEEN,
                                    children: [(0, n.jsx)("span", {
                                        children: "Bitrate:"
                                    }), (0, n.jsxs)("span", {
                                        children: [(e.bitrate / 1e3).toFixed(2), " Kbps"]
                                    })]
                                }),
                                a = (0, n.jsxs)(h.default, {
                                    id: "lost-".concat(e.id),
                                    justify: h.default.Justify.BETWEEN,
                                    children: [(0, n.jsx)("span", {
                                        children: "Packet Loss:"
                                    }), (0, n.jsxs)("span", {
                                        children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
                                    })]
                                }),
                                r = p.default.getUser(e.id);
                            var i = g.default.getNickname(c.default.getGuildId(), void 0, r);
                            return null == i && (i = null != r ? r.username : e.id), (0, n.jsx)(v.default, {
                                label: e.id,
                                valueRendered: [t, a],
                                children: i
                            }, e.id)
                        });
                    return (0, n.jsxs)(o.FormSection, {
                        tag: o.FormTitleTags.H2,
                        title: E.default.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
                        className: D.allowSelection,
                        children: [(0, S.renderTwoColumns)(s), 0 === d.length ? null : (0, n.jsx)(o.FormDivider, {
                            className: T.marginBottom20
                        }), (0, S.renderTwoColumns)(d)]
                    })
                }
            }
            var F = s.default.connectStores([u.default, d.default, f.default, m.default], e => {
                let {
                    context: t,
                    index: a
                } = e, n = u.default.getAllStats(t)[a], r = t === y.MediaEngineContextTypes.STREAM ? m.default.getHostname(m.default.getActiveStreamKey()) : d.default.getHostname();
                return {
                    hidePersonalInformation: f.default.hidePersonalInformation,
                    transport: null != n ? n.transport : null,
                    mediaSessionId: d.default.getMediaSessionId(),
                    hostname: C.default.getShortHostname(r)
                }
            })(x)
        },
        315585: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("75196");

            function i(e) {
                let {
                    width: t = 14,
                    height: a = 14,
                    color: i = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: t,
                    height: a,
                    viewBox: "0 0 14 14",
                    children: (0, n.jsx)("path", {
                        className: l,
                        fill: i,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        }
    }
]);