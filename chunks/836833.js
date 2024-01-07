            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("913144"),
                u = s("456931"),
                c = s("610109"),
                S = s("414074"),
                E = s("84908"),
                f = s("926622");
            class m extends n.Component {
                renderTestCase(e, t, s, n, l) {
                    let r = null == t ? void 0 : t.summary;
                    return (0, a.jsxs)(o.FormText, {
                        className: f.marginBottom20,
                        children: [!0 === n ? "✅" : !0 === l ? "❌" : !0 === s ? "\uD83C\uDFCE️" : "", "speed test, bitrate = ", ((0, S.speedTestRate)(e) / 1e3).toFixed(0), " kbps, framerate =", " ", (0, S.speedTestFps)(e).toFixed(0), " fps, duration = ", (0, S.speedTestDuration)(e).toFixed(1), "s, direction =", " ", (0, S.speedTestDirection)(e), void 0 !== r && (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: i(f.marginTop8, f.marginBottom8),
                                children: ["Loss ", 100 * r.loss.toFixed(2), "%, Payload Bandwidth ", r.payloadBandwidth.toFixed(0), " kbps, Network Bandwidth ", r.networkBandwidth.toFixed(0), " kbps"]
                            }), (0, a.jsxs)("div", {
                                className: i(f.marginTop8, f.marginBottom8),
                                children: ["IAT p50=", r.iatP50.toFixed(2), "ms, p95=", r.iatP95.toFixed(2), "ms, max=", r.iatMax.toFixed(2), "ms"]
                            })]
                        }), !1 === n && !0 === s && !1 === l && (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                                className: i(f.marginTop8, f.marginBottom8),
                                children: "Test in progress. Results will appear when test completes."
                            })
                        }), !1 === n && !0 === l && (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                                className: i(f.marginTop8, f.marginBottom8),
                                children: "Test skipped."
                            })
                        })]
                    })
                }
                renderTestCases(e, t, s, a, n) {
                    if (!1 === e) return;
                    let l = [];
                    for (let [e, i] of s.entries()) {
                        let s = e === n,
                            r = null != n && e < n;
                        l.push(this.renderTestCase(i, a[e], s, r, t))
                    }
                    return l
                }
                renderPing(e, t, s) {
                    if (!1 === e) return;
                    let n = s.length > 0 ? (0, S.speedTestPingInfo)(s) : null;
                    return (0, a.jsxs)(o.FormText, {
                        className: f.marginBottom20,
                        children: [t > E.SpeedTestLifecycles.PINGING ? "✅" : t === E.SpeedTestLifecycles.PINGING ? "\uD83C\uDFCE️" : "", "Ping endpoint", null !== n && (0, a.jsxs)("div", {
                            className: i(f.marginTop8, f.marginBottom8),
                            children: ["Pinged ", n.count, " time(s), min=", n.min, "ms, p50=", n.p50, "ms, max=", n.max, "ms"]
                        })]
                    })
                }
                renderConnect(e, t, s) {
                    if (!1 !== e) return (0, a.jsxs)(o.FormText, {
                        className: f.marginBottom20,
                        children: [t > E.SpeedTestLifecycles.CONNECTING ? "✅" : t === E.SpeedTestLifecycles.CONNECTING ? "\uD83C\uDFCE️" : "", "Connect to ", null != s ? s : "endpoint"]
                    })
                }
                renderNotes() {
                    return (0, a.jsx)(o.TextArea, {
                        className: f.marginBottom20,
                        value: this.state.notes,
                        onChange: e => {
                            c.default.setNotes(e), this.setState({
                                notes: e
                            })
                        },
                        placeholder: "Anything we should know about this test? Enter any relevant information about location, connection strength, or recent call quality here."
                    })
                }
                renderAwaitingEndpoint(e, t) {
                    if (!1 !== e) return (0, a.jsxs)(o.FormText, {
                        className: f.marginBottom20,
                        children: [t > E.SpeedTestLifecycles.AWAITING_ENDPOINT ? "✅" : t === E.SpeedTestLifecycles.AWAITING_ENDPOINT ? "\uD83C\uDFCE️" : "", "Select endpoint"]
                    })
                }
                renderUpload(e, t) {
                    if (!1 !== e) return (0, a.jsxs)(o.FormText, {
                        className: f.marginBottom20,
                        children: [t > E.SpeedTestLifecycles.UPLOADING ? "✅" : t === E.SpeedTestLifecycles.UPLOADING ? "\uD83C\uDFCE️" : "", "Upload results"]
                    })
                }
                renderComplete(e, t) {
                    if (!1 !== e) {
                        if (t === E.SpeedTestLifecycles.COMPLETED) return (0, a.jsx)(o.FormText, {
                            className: f.marginBottom20,
                            children: "Your Speed Test is completed and the results have been uploaded. You may safely close this page."
                        })
                    }
                }
                render() {
                    let e = this.props.available,
                        t = this.props.active,
                        s = this.props.failed,
                        n = this.props.endpoint,
                        l = this.props.lifecycle,
                        i = this.props.testCases,
                        r = this.props.currentTest,
                        d = this.props.testResults,
                        c = this.props.pings,
                        S = t ? u.default.stopSpeedTest : u.default.startSpeedTest,
                        m = l >= E.SpeedTestLifecycles.AWAITING_ENDPOINT;
                    return !1 === e ? (0, a.jsx)(o.FormSection, {
                        tag: o.FormTitleTags.H1,
                        title: "Speed Test",
                        children: (0, a.jsx)(o.FormText, {
                            className: f.marginBottom20,
                            children: "Sorry! The Speed Test is not currently available. Disconnect from any existing calls and try again."
                        })
                    }) : (0, a.jsxs)(o.FormSection, {
                        tag: o.FormTitleTags.H1,
                        title: "Speed Test",
                        children: [this.renderNotes(), (0, a.jsx)(o.FormItem, {
                            className: f.marginBottom20,
                            children: (0, a.jsx)("div", {
                                children: (0, a.jsx)(o.Button, {
                                    onClick: () => S(),
                                    children: t ? "Stop Speed Test" : "Start Speed Test"
                                })
                            })
                        }), this.renderAwaitingEndpoint(m, l), this.renderConnect(m, l, n), this.renderPing(m, l, c), this.renderTestCases(m, s, i, d, r), this.renderUpload(m, l), this.renderComplete(m, l)]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        notes: this.props.notes
                    }
                }
            }

            function T() {
                let e = (0, r.useStateFromStoresObject)([c.default], () => ({
                        available: c.default.getAvailable(),
                        active: c.default.getActive(),
                        failed: c.default.getFailed(),
                        endpoint: c.default.getEndpoint(),
                        lifecycle: c.default.getLifecycle(),
                        testCases: c.default.getTestCases(),
                        testResults: c.default.getTestResults(),
                        currentTest: c.default.getCurrentTest(),
                        pings: c.default.getPings(),
                        notes: c.default.getNotes()
                    })),
                    [t, s] = n.useState(0),
                    l = n.useCallback(e => {
                        let {} = e;
                        s(t + 1)
                    }, [t]);
                return n.useEffect(() => (d.default.subscribe("RTC_SPEED_TEST_STATE_UPDATE", l), () => {
                    d.default.unsubscribe("RTC_SPEED_TEST_STATE_UPDATE", l)
                }), [l]), (0, a.jsx)(m, {
                    ...e
                })
            }