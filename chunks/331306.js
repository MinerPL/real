            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n.n(a),
                i = n("414456"),
                r = n.n(i),
                o = n("773364"),
                u = n("77078"),
                d = n("673777"),
                c = n("222871"),
                f = n("845579"),
                h = n("42887"),
                C = n("413709"),
                p = n("758710"),
                m = n("45029"),
                E = n("599110"),
                g = n("306160"),
                I = n("701909"),
                S = n("687609"),
                _ = n("49111"),
                N = n("353927"),
                T = n("782340"),
                A = n("126657");
            let L = () => {
                h.default.getMediaEngine().once(o.MediaEngineEvent.ConnectionStats, e => {
                    let t = Object.values(N.MediaEngineContextTypes).map(t => {
                        let n = e.filter(e => {
                            let {
                                connection: n
                            } = e;
                            return n.context === t
                        }).map((e, n) => {
                            let l = e.stats;
                            return l.context = t, l.index = n, l
                        });
                        for (let e of n) {
                            var l;
                            (null == e ? void 0 : null === (l = e.transport) || void 0 === l ? void 0 : l.localAddress) != null && (e.transport.localAddress = "(redacted)")
                        }
                        return n
                    }).filter(e => e.length > 0);
                    (0, g.copy)(JSON.stringify(t, null, 2)), (0, u.showToast)((0, u.createToast)(T.default.Messages.COPIED, u.ToastType.SUCCESS))
                })
            };
            var v = function(e) {
                (0, a.useEffect)(() => {
                    E.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                        type: "RTC Connection"
                    })
                }, []);
                let t = (0, a.useCallback)(() => {
                        let {
                            closePopout: t
                        } = e;
                        null != t && t(), d.open()
                    }, [e]),
                    n = (0, a.useCallback)(() => {
                        let {
                            hostname: t,
                            averagePing: n,
                            lastPing: a,
                            outboundLossRate: i
                        } = e, o = f.DeveloperMode.getSetting();
                        return (0, l.jsxs)(s.Fragment, {
                            children: [o && (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("div", {
                                    className: A.graphContainer,
                                    children: (0, l.jsx)(c.default, {
                                        dataPoints: e.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }), (0, l.jsx)("div", {
                                    className: A.popoutText,
                                    children: (0, l.jsx)("strong", {
                                        children: S.default.getShortHostname(t)
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: A.popoutText,
                                children: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format({
                                    averagePing: n.toFixed(0)
                                })
                            }), null != a ? (0, l.jsx)("div", {
                                className: A.popoutText,
                                children: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format({
                                    lastPing: a.toFixed(0)
                                })
                            }) : null, null != i ? (0, l.jsx)("div", {
                                className: A.popoutText,
                                children: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format({
                                    outboundLossRate: i.toFixed(1)
                                })
                            }) : null, (0, l.jsxs)("div", {
                                className: r(A.popoutText, A.popoutTextDetails),
                                children: [null == i ? T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format({
                                    badPing: 250
                                }) : null, null != i ? T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format({
                                    badPing: 250,
                                    badLossRate: 10
                                }) : null]
                            })]
                        })
                    }, [e]),
                    {
                        connectionState: i
                    } = e,
                    o = f.DeveloperMode.getSetting(),
                    g = {
                        [_.RTCConnectionStates.AWAITING_ENDPOINT]: T.default.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({
                            url: _.Links.STATUS
                        }),
                        [_.RTCConnectionStates.CONNECTING]: T.default.Messages.RTC_CONNECTION_STATE_CONNECTING,
                        [_.RTCConnectionStates.AUTHENTICATING]: T.default.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
                        [_.RTCConnectionStates.DISCONNECTED]: T.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
                        [_.RTCConnectionStates.RTC_CONNECTING]: T.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
                        [_.RTCConnectionStates.ICE_CHECKING]: T.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                            url: I.default.getArticleURL(_.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
                        }),
                        [_.RTCConnectionStates.DTLS_CONNECTING]: T.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                            url: I.default.getArticleURL(_.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
                        }),
                        [_.RTCConnectionStates.RTC_CONNECTED]: n,
                        [_.RTCConnectionStates.NO_ROUTE]: T.default.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format({
                            url: I.default.getArticleURL(_.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
                        }),
                        [_.RTCConnectionStates.RTC_DISCONNECTED]: T.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED
                    } [i];
                return (0, l.jsx)("div", {
                    className: A.container,
                    children: (0, l.jsxs)("section", {
                        className: A.section,
                        children: ["function" == typeof g ? g() : (0, l.jsx)("p", {
                            className: r(A.popoutText, A.popoutTextDetails),
                            children: g
                        }), (0, l.jsx)("hr", {
                            className: A.separator
                        }), (0, l.jsxs)("div", {
                            className: A.popoutBottom,
                            children: [(0, l.jsxs)("span", {
                                className: r(A.secured, A.textWithIcon),
                                children: [(0, l.jsx)(m.default, {
                                    width: 12,
                                    height: 12,
                                    color: u.tokens.colors.TEXT_POSITIVE.css,
                                    className: A.icon
                                }), T.default.Messages.SECURE_CONNECTION]
                            }), o && h.default.supports(N.Features.DIAGNOSTICS) && !__OVERLAY__ && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)(u.Anchor, {
                                    className: r(A.debugButton, A.textWithIcon),
                                    onClick: t,
                                    children: [T.default.Messages.DEBUG, (0, l.jsx)(p.default, {
                                        className: A.icon,
                                        width: 12,
                                        height: 12
                                    })]
                                }), (0, l.jsxs)(u.Anchor, {
                                    className: r(A.copyStatsButton, A.textWithIcon),
                                    onClick: L,
                                    title: "Copy to clipboard",
                                    children: [T.default.Messages.COPY_STATS, (0, l.jsx)(C.default, {
                                        className: A.icon,
                                        width: 12,
                                        height: 12
                                    })]
                                })]
                            }), !o && !__OVERLAY__ && (0, l.jsx)(u.Anchor, {
                                className: A.debugButton,
                                href: I.default.getArticleURL(_.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING),
                                children: T.default.Messages.LEARN_MORE
                            })]
                        })]
                    })
                })
            }