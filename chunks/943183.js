            "use strict";
            n.r(t), n.d(t, {
                initSessionHeartbeatScheduler: function() {
                    return m
                }
            }), n("70102");
            var a = n("976255"),
                s = n("95410"),
                i = n("913144"),
                l = n("945956"),
                r = n("599110"),
                o = n("872507"),
                u = n("286235"),
                d = n("49111");
            let c = "LATEST_HEARTBEAST_EVENT_TIMESTAMP",
                E = null,
                f = null,
                _ = null,
                h = !1;
            async function C() {
                if (h) return;
                h = !0, (0, a.setSessionExtendingEnabled)(!0), u.default.addBreadcrumb({
                    message: "Start Analytics Heartbeat"
                });
                let e = await s.default.getAfterRefresh(c).then(a.timestampOrZero);
                if (!h) return;
                let t = Date.now(),
                    n = 9e5 + e - t;
                n > 36e5 && u.default.addBreadcrumb({
                    message: "Received invalid Date.now() when generating a heartbeat. Date.now() = ".concat(t, ", timeUntilNextHeartbeat = ").concat(n, ", latestHeartbeatEventTimestamp = ").concat(e)
                }), e > t && (n = 0), u.default.addBreadcrumb({
                    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(n / 1e3, " seconds. Scheduling Heartbeat")
                }), I(!1), f = setTimeout(() => {
                    T(), E = setInterval(() => {
                        T()
                    }, 9e5)
                }, Math.max(n, 0))
            }

            function I() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                null != f && (clearTimeout(f), f = null), null != E && (clearInterval(E), E = null), null != _ && e && (clearTimeout(_), _ = null)
            }
            async function T() {
                let e = Date.now(),
                    t = await (0, a.getSession)(),
                    n = Date.now();
                if (null == t) {
                    u.default.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
                    return
                }
                if (!h) {
                    u.default.captureException(Error("Heartbeat scheduler not started when tracking session heartbeat.")), I();
                    return
                }
                u.default.addBreadcrumb({
                    message: "Tracking Heartbeat",
                    data: {
                        initialized: t.initialized
                    }
                });
                let i = {
                        client_heartbeat_initialization_timestamp: t.initialized,
                        client_heartbeat_version: 17
                    },
                    l = o.default.getMemoryUsageElectronRenderer();
                null != l && (i.client_heartbeat_renderer_memory = l);
                let E = o.default.getMemoryUsageElectronRendererUsedHeapSize();
                null != E && (i.client_heartbeat_renderer_memory_used_heap = E), r.default.track(d.AnalyticEvents.CLIENT_HEARTBEAT, i), s.default.set(c, Date.now().toString())
            }
            let S = null,
                N = !0;

            function A() {
                if (N || null != S && S !== d.RTCConnectionStates.DISCONNECTED && S !== d.RTCConnectionStates.RTC_DISCONNECTED) try {
                    C()
                } catch (e) {
                    u.default.captureException(e)
                } else !h || (h = !1, u.default.addBreadcrumb({
                    message: "Stopping Analytics Heartbeat"
                }), (0, a.setSessionExtendingEnabled)(!1), I())
            }

            function m() {
                u.default.addBreadcrumb({
                    message: "Initializing SessionHeartbeatScheduler"
                }), l.default.addChangeListener(g), i.default.subscribe("WINDOW_FOCUS", R), i.default.subscribe("APP_STATE_UPDATE", O), i.default.subscribe("LOGIN_SUCCESS", p), A()
            }

            function p() {
                T()
            }

            function g() {
                let e = l.default.getState();
                S !== e && (S = e, A())
            }

            function R(e) {
                let {
                    focused: t
                } = e;
                N = t, A()
            }

            function O(e) {
                let {
                    state: t
                } = e;
                N = t === d.AppStates.ACTIVE, A()
            }