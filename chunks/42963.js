            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("308503"),
                s = n("95410"),
                o = n("605250"),
                a = n("599110"),
                l = n("149806"),
                i = n("49111");
            let u = "UserFlowAnalyticsStore_current",
                d = "UserFlowAnalyticsStore";

            function c(e) {
                if (e === l.FlowType.UNKNOWN) return null;
                let t = s.default.get("".concat(d, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...r
                } = t;
                return 1 !== n ? null : r
            }
            new o.default("UserFlowAnalytics");
            let _ = (0, r.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : s.default.get(u);
                    if (null == n) return null;
                    let {
                        [n]: r
                    } = t().flows, o = null != r ? r : c(n);
                    return (null == o ? void 0 : o.currentStep) != null ? n : null
                }
            }));

            function E(e, t) {
                let {
                    [e]: n, ...r
                } = _.getState().flows, s = null != n ? n : c(e);
                if ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== t) _.setState({
                    flows: {
                        ...r,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === l.FlowType.ANY) {
                    var s;
                    r = null !== (s = _.getState().activeFlow()) && void 0 !== s ? s : l.FlowType.UNKNOWN
                }
                let {
                    [r]: o, ...a
                } = _.getState().flows, i = null != o ? o : c(r);
                if (null != i && null != i.currentStep) i.currentStep !== t && _.setState({
                    flows: {
                        ...a,
                        [r]: {
                            ...i,
                            lastStep: i.currentStep,
                            lastTimestamp: i.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: r
                })
            }
            _.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === l.FlowType.UNKNOWN) return;
                        let t = "".concat(d, "-").concat(e.type);
                        e.ended ? (s.default.remove(t), s.default.remove(u)) : (s.default.set("".concat(d, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), s.default.set(u, e.type))
                    }(e), a.default.track(i.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ..._.getState().flows
                    };
                    delete t[e.type], _.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function A() {
                return null != _.getState().activeFlow()
            }
            var I = {
                flowStart: E,
                flowStepOrStart: function(e, t) {
                    A() ? f(e, t) : E(e, t)
                },
                flowStep: f,
                hasActiveFlow: A
            }