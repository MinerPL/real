            "use strict";
            n.r(t), n.d(t, {
                getDispatchApplicationStates: function() {
                    return v
                },
                default: function() {
                    return x
                }
            }), n("222007"), n("808653"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("446674"),
                u = n("669491"),
                d = n("266491"),
                c = n("77078"),
                f = n("299285"),
                h = n("393414"),
                C = n("535974"),
                p = n("352326"),
                m = n("280174"),
                E = n("195812"),
                g = n("964889"),
                I = n("318042"),
                S = n("49111"),
                _ = n("782340"),
                N = n("518837");
            let T = {
                [S.LocalDispatchApplicationStates.INSTALLING]: {
                    [m.TimeUnits.NONE]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
                        name: e
                    }),
                    [m.TimeUnits.SECONDS]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.MINUTES]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.HOURS]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
                        name: e,
                        timeRemaining: t
                    })
                },
                [S.LocalDispatchApplicationStates.UPDATING]: {
                    [m.TimeUnits.NONE]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({
                        name: e
                    }),
                    [m.TimeUnits.SECONDS]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.MINUTES]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.HOURS]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format({
                        name: e,
                        timeRemaining: t
                    })
                },
                [S.LocalDispatchApplicationStates.REPAIRING]: {
                    [m.TimeUnits.NONE]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
                        name: e
                    }),
                    [m.TimeUnits.SECONDS]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.MINUTES]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.HOURS]: (e, t) => _.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
                        name: e,
                        timeRemaining: t
                    })
                }
            };
            class A extends a.PureComponent {
                renderText() {
                    let {
                        state: e,
                        isPaused: t
                    } = this.props;
                    if (e.type === S.LocalDispatchApplicationStates.UPDATING || e.type === S.LocalDispatchApplicationStates.REPAIRING || e.type === S.LocalDispatchApplicationStates.INSTALLING) {
                        if (t) return _.default.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
                        if (e.stage === S.DispatchApplicationStages.PATCHING || e.stage === S.DispatchApplicationStages.REPAIRING) return (0, l.jsx)(I.default, {
                            getHistoricalTotalBytes: C.default.getHistoricalTotalBytesWritten,
                            updateInterval: 5e3,
                            children: this.renderProgressBody
                        })
                    }
                    return null
                }
                render() {
                    let e = this.renderText();
                    return null != e ? e : _.default.Messages.LIBRARY
                }
                constructor(...e) {
                    super(...e), this.renderProgressBody = (e, t) => {
                        let {
                            state: n,
                            application: l
                        } = this.props, {
                            stage: a,
                            progress: s,
                            total: i,
                            type: r
                        } = n;
                        if (null == s || null == i || null == a) return null;
                        let o = e[e.length - 1] / t * 1e3,
                            u = 0 !== o ? Math.max(1, (i - s) / o) : null,
                            d = T[r],
                            c = null != d ? Object.keys(d) : [],
                            {
                                unit: f,
                                time: h
                            } = (0, m.getTimeAndUnit)(null != u ? u / 60 : null, c);
                        if (null != d && null != f) {
                            let e = d[f];
                            return null != e ? e(l.name, h) : null
                        }
                        return null
                    }
                }
            }
            class L extends a.PureComponent {
                componentWillAppear(e) {
                    this.state.animationScale.setValue(1), e()
                }
                componentWillEnter(e) {
                    r.default.spring(this.state.animationScale, {
                        toValue: 1,
                        duration: 200
                    }).start(e)
                }
                componentWillLeave(e) {
                    r.default.spring(this.state.animationScale, {
                        toValue: 0,
                        duration: 200
                    }).start(e)
                }
                getTooltipText() {
                    let {
                        firstApplication: e,
                        firstState: t,
                        isPaused: n
                    } = this.props;
                    return null == e || null == t ? _.default.Messages.LIBRARY : (0, l.jsx)(A, {
                        application: e,
                        state: t,
                        isPaused: n
                    })
                }
                render() {
                    let {
                        percent: e,
                        isPaused: t,
                        className: n
                    } = this.props;
                    return (0, l.jsx)(r.default.div, {
                        style: {
                            transform: [{
                                scale: this.state.animationScale
                            }]
                        },
                        className: i(n, N.progressContainer),
                        onClick: this.handleOnClick,
                        children: (0, l.jsx)(c.Tooltip, {
                            text: this.getTooltipText(),
                            position: "right",
                            "aria-label": !1,
                            children: n => (0, l.jsx)("div", {
                                ...n,
                                children: (0, l.jsx)(c.ProgressCircle, {
                                    percent: e,
                                    colorOverride: t ? u.default.unsafe_rawColors.PRIMARY_500.css : null,
                                    children: (0, l.jsx)(E.default, {
                                        className: N.downloadIcon
                                    })
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        animationScale: new r.default.Value(0)
                    }, this.handleOnClick = e => {
                        let {
                            onClick: t
                        } = this.props;
                        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, h.transitionTo)(S.Routes.APPLICATION_LIBRARY)
                    }
                }
            }
            L.defaultProps = {
                strokeSize: c.ProgressCircle.StrokeSizes.MEDIUM
            };

            function v(e, t) {
                return e.reduce((e, n) => {
                    let {
                        applicationId: l,
                        branchId: a
                    } = n, s = t.getState(l, a);
                    return null != s && e.push(s), e
                }, [])
            }
            var x = o.default.connectStores([p.default, C.default, f.default], () => {
                let e = p.default.activeItems,
                    t = v(e, C.default),
                    {
                        total: n,
                        progress: l
                    } = g.getCombinedProgress(t);
                return {
                    percent: g.calculateProgressPercentage(l, n),
                    isPaused: p.default.paused,
                    firstApplication: e.length > 0 ? f.default.getApplication(e[0].applicationId) : null,
                    firstState: t.length > 0 ? t[0] : null
                }
            })(e => {
                let {
                    determineOwnVisibility: t = !0,
                    ...n
                } = e;
                return t ? (0, l.jsx)(d.default, {
                    component: a.Fragment,
                    children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(L, {
                        ...n
                    }) : null
                }) : (0, l.jsx)(L, {
                    ...n
                })
            })