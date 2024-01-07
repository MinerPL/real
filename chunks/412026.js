            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("984444"),
                u = n("456799"),
                d = n("15318"),
                c = n("146782"),
                f = n("77078"),
                h = n("161778"),
                C = n("945956"),
                p = n("704926"),
                m = n("687609"),
                E = n("331306"),
                g = n("49111"),
                I = n("115022");
            let S = {
                    [g.RTCConnectionQuality.UNKNOWN]: f.Tooltip.Colors.BLACK,
                    [g.RTCConnectionQuality.BAD]: f.Tooltip.Colors.RED,
                    [g.RTCConnectionQuality.AVERAGE]: f.Tooltip.Colors.YELLOW,
                    [g.RTCConnectionQuality.FINE]: f.Tooltip.Colors.GREEN
                },
                _ = {
                    [g.ConnectionStatus.CONNECTED]: I.rtcConnectionStatusConnected,
                    [g.ConnectionStatus.CONNECTING]: I.rtcConnectionStatusConnecting,
                    [g.ConnectionStatus.ERROR]: I.rtcConnectionStatusError
                },
                N = {
                    [g.RTCConnectionQuality.FINE]: I.rtcConnectionQualityFine,
                    [g.RTCConnectionQuality.AVERAGE]: I.rtcConnectionQualityAverage,
                    [g.RTCConnectionQuality.BAD]: I.rtcConnectionQualityBad,
                    [g.RTCConnectionQuality.UNKNOWN]: null
                },
                T = r.default.connectStores([C.default, h.default], () => ({
                    theme: h.default.theme,
                    connectionState: C.default.getState(),
                    hostname: C.default.getHostname(),
                    averagePing: C.default.getAveragePing(),
                    lastPing: C.default.getLastPing(),
                    outboundLossRate: C.default.getOutboundLossRate(),
                    pings: C.default.getPings()
                }))(E.default);
            class A extends a.PureComponent {
                renderPopoutTarget(e) {
                    return (0, l.jsx)(f.Popout, {
                        renderPopout: this.renderPopout,
                        position: "top",
                        children: e
                    })
                }
                renderStatus() {
                    let {
                        statusTextClassName: e,
                        hasVideo: t,
                        state: n
                    } = this.props, {
                        connectionStatus: a,
                        connectionStatusText: s
                    } = m.default.getStatus(n, t);
                    return this.renderPopoutTarget(t => {
                        let {
                            onClick: n
                        } = t;
                        return (0, l.jsx)(f.Button, {
                            look: f.Button.Looks.BLANK,
                            size: f.Button.Sizes.NONE,
                            className: i(e, _[a]),
                            onClick: n,
                            children: s
                        })
                    })
                }
                render() {
                    let e;
                    let {
                        quality: t,
                        smallPing: n,
                        lastPing: a,
                        state: s,
                        className: r,
                        children: o
                    } = this.props;
                    return s === g.RTCConnectionStates.RTC_CONNECTED && (e = (0, l.jsx)(f.Tooltip, {
                        text: t !== g.RTCConnectionQuality.UNKNOWN && null != a ? "".concat(a.toFixed(0), " ms") : null,
                        color: S[t],
                        children: e => (0, l.jsx)(L, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                    })), (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: i(I.rtcConnectionStatus, N[t], r),
                            children: [e, (0, l.jsx)("div", {
                                className: I.labelWrapper,
                                children: this.renderStatus()
                            })]
                        }), o]
                    })
                }
                constructor(...e) {
                    super(...e), this.renderPopout = e => (0, l.jsx)(T, {
                        ...e
                    })
                }
            }

            function L(e) {
                let {
                    quality: t,
                    smallPing: n,
                    ...a
                } = e, s = (0, f.useRedesignIconContext)().enabled;
                if (!s) return (0, l.jsx)(p.default, {
                    className: i(I.ping, {
                        [I.smallPing]: n
                    }),
                    foreground: I.pingForeground
                });
                {
                    let e = {
                        [g.RTCConnectionQuality.FINE]: d.ConnectionFineIcon,
                        [g.RTCConnectionQuality.AVERAGE]: o.ConnectionAverageIcon,
                        [g.RTCConnectionQuality.BAD]: u.ConnectionBadIcon,
                        [g.RTCConnectionQuality.UNKNOWN]: c.ConnectionUnknownIcon
                    } [t];
                    return (0, l.jsx)(e, {
                        className: i(I.ping, {
                            [I.smallPing]: n
                        }),
                        ...a
                    })
                }
            }
            var v = A