            "use strict";
            n.r(t), n.d(t, {
                setHighlightedSummary: function() {
                    return I
                },
                toggleTopicsBar: function() {
                    return x
                },
                setSelectedSummary: function() {
                    return _
                },
                updateVisibleMessages: function() {
                    return S
                },
                useSummaryPolling: function() {
                    return M
                },
                setSummaryFeedback: function() {
                    return T
                },
                deleteSummary: function() {
                    return y
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var l = n("884691"),
                a = n("917351"),
                s = n.n(a),
                i = n("394846"),
                r = n("65597"),
                o = n("872717"),
                u = n("913144"),
                d = n("448993"),
                c = n("734575"),
                m = n("104589"),
                f = n("116460"),
                h = n("42203"),
                p = n("347738");
            let g = {},
                E = {};
            async function v(e, t) {
                let n, l;
                if (!p.default.shouldFetch(e, t)) return;
                let a = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARY",
                    channelId: e,
                    summaryId: t,
                    requestedAt: a
                });
                try {
                    let n = await o.default.get("/channels/".concat(e, "/summaries/").concat(t));
                    l = null == n ? void 0 : n.body
                } catch (e) {
                    n = new d.APIError(e)
                }
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARY",
                    channelId: e,
                    summary: l,
                    error: n,
                    requestedAt: a,
                    receivedAt: Date.now()
                })
            }
            async function C(e) {
                var t, n;
                let l, a;
                if (!p.default.shouldFetch(e)) return;
                let i = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARIES",
                    channelId: e,
                    requestedAt: i
                });
                try {
                    a = await o.default.get("/channels/".concat(e, "/summaries"))
                } catch (e) {
                    l = new d.APIError(e)
                }
                let r = (null == a ? void 0 : null === (t = a.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? a.body.summaries : null !== (n = null == a ? void 0 : a.body) && void 0 !== n ? n : [];
                r = s.takeRight(r, 75), u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARIES",
                    channelId: e,
                    summaries: r,
                    error: null != l ? l : void 0,
                    requestedAt: i,
                    receivedAt: Date.now()
                })
            }

            function I(e, t) {
                u.default.dispatch({
                    type: "SET_HIGHLIGHTED_SUMMARY",
                    channelId: e,
                    summaryId: null != t ? t : null
                })
            }

            function x() {
                u.default.dispatch({
                    type: "TOGGLE_TOPICS_BAR"
                })
            }

            function _(e, t) {
                null != e && null != t && v(e, t), u.default.dispatch({
                    type: "SET_SELECTED_SUMMARY",
                    channelId: e,
                    summaryId: null != t ? t : null
                })
            }

            function S(e, t) {
                u.default.dispatch({
                    type: "UPDATE_VISIBLE_MESSAGES",
                    topVisibleMessage: null != e ? e : null,
                    bottomVisibleMessage: null != t ? t : null
                })
            }

            function N(e, t) {
                return null == g[e] && (g[e] = 0), null === t ? g[e] = 0 : g[e] += t, g[e]
            }

            function M(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, r.default)([h.default], () => h.default.getChannel(e), [e]),
                    [a, s] = l.useState(null),
                    o = (0, c.useChannelSummariesExperiment)(n) && !i.isMobile;
                l.useEffect(() => {
                    if (o) return s(e), () => {
                        s(null)
                    }
                }, [e, o]), l.useEffect(() => {
                    if (a !== e && null != a && R.stopPolling(e), o && null != a) return (t || null != e && a !== e) && R.fetchSummaries(e), R.startPolling(e), () => {
                        null != a && R.stopPolling(e)
                    }
                }, [e, t, a, o])
            }

            function T(e, t) {
                u.default.dispatch({
                    type: "SET_SUMMARY_FEEDBACK",
                    summary: e,
                    rating: t
                })
            }
            async function A() {
                var e;
                let t, n;
                if (!p.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
                let l = Date.now();
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_AFFINITIES",
                    requestedAt: l
                });
                try {
                    n = await o.default.get("/users/@me/affinities/channels")
                } catch (e) {
                    t = new d.APIError(e)
                }
                let a = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_AFFINITIES",
                    affinities: a,
                    error: null != t ? t : void 0,
                    requestedAt: l,
                    receivedAt: Date.now()
                })
            }
            async function j(e) {
                let t, n, {
                    useQuickSwitcher: l = !0,
                    useChannelAffinities: a = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e = null != e ? e : [];
                let s = Date.now();
                if (0 === (e = e.concat(p.default.defaultChannelIds({
                        withQuickSwitcher: l,
                        withChannelAffinities: a
                    })).filter(e => {
                        let t = h.default.getChannel(e);
                        return (0, c.canSeeChannelSummaries)(t, !1, !0)
                    }).filter(e => {
                        let t = Date.now(),
                            n = p.default.status(e);
                        if (null == n ? void 0 : n.fetching) return !1;
                        let l = null == n ? void 0 : n.lastReceivedAt;
                        return null == l || t - l > 3e4
                    }).slice(0, 50)).length) return Promise.resolve(null);
                u.default.dispatch({
                    type: "REQUEST_CHANNEL_SUMMARIES_BULK",
                    channelIds: e,
                    requestedAt: s
                });
                try {
                    n = await o.default.post({
                        url: "/users/@me/summaries",
                        body: {
                            channel_ids: e
                        }
                    })
                } catch (e) {
                    t = new d.APIError(e)
                }
                let i = null == n ? void 0 : n.body.summaries;
                u.default.dispatch({
                    type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
                    requestedAt: s,
                    receivedAt: Date.now(),
                    summaries: i,
                    requestArgs: {
                        channelIds: e
                    },
                    error: t
                })
            }
            async function y(e) {
                try {
                    await o.default.delete("/channels/".concat(e.channelId, "/summaries/").concat(e.id)), u.default.dispatch({
                        type: "DELETE_SUMMARY",
                        summary: e
                    })
                } catch (e) {
                    throw new d.APIError(e)
                }
            }
            let R = {
                startPolling: function(e) {
                    let t = N(e, 1);
                    t - 1 == 0 && (E[e] = setInterval(async () => {
                        await R.fetchSummaries(e)
                    }, 5e3))
                },
                stopPolling: function(e) {
                    let t = N(e, -1);
                    t <= 0 && (N(e, 0), clearInterval(E[e]))
                },
                setSummaryFeedback: T,
                useSummaryPolling: M,
                updateVisibleMessages: S,
                setSelectedSummary: _,
                setHighlightedSummary: I,
                fetchSummaries: C,
                fetchSummariesBulk: j,
                useChannelSummaries: function(e) {
                    let {
                        channelIds: t = []
                    } = e;
                    return ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = l.useMemo(() => e.join(","), [e]);
                        l.useEffect(() => {
                            (async function e() {
                                try {
                                    await A()
                                } catch (e) {}
                                try {
                                    var e, n;
                                    (null === (e = f.default.getProps().results) || void 0 === e ? void 0 : e.length) === 0 && (0, m.search)(null !== (n = f.default.getProps().query) && void 0 !== n ? n : "")
                                } catch (e) {}
                                await j(t.split(","))
                            })()
                        }, [t])
                    }(t), (0, r.useStateFromStoresArray)([p.default], () => p.default.topSummaries(), [])
                },
                deleteSummary: y
            };
            var L = R