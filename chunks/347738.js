            "use strict";
            let l, a, s, i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("834022"), n("222007"), n("424973"), n("808653");
            var o, u, d = n("917351"),
                c = n.n(d),
                m = n("446674"),
                f = n("913144"),
                h = n("734575"),
                p = n("123225"),
                g = n("789563"),
                E = n("116460"),
                v = n("42203"),
                C = n("305961"),
                I = n("660478"),
                x = n("18494"),
                _ = n("282109"),
                S = n("697218"),
                N = n("718517"),
                M = n("299039"),
                T = n("18730"),
                A = n("204653");
            (u = o || (o = {})).FETCHING = "fetching", u.OK = "ok", u.ERROR = "error";
            let j = {},
                y = {},
                R = [],
                L = {},
                b = {
                    status: "ok",
                    lastRequest: null,
                    lastResponse: null
                },
                O = [],
                D = A.SummarySources.SOURCE_0,
                P = null;

            function w() {
                O = E.default.getProps().results.filter(e => e.type === p.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
            }

            function U(e) {
                let {
                    source: t
                } = T.ChannelSummarizationModelSwapExperiment.getCurrentConfig({
                    location: "93448c_1"
                });
                D = t, e.emitChange()
            }
            class k extends m.default.PersistedStore {
                getState() {
                    return {
                        summariesByChannel: j,
                        shouldShowTopicsBar: l,
                        summaryFetchStatusByChannel: y,
                        highlightedSummary: a,
                        visibleSummaryIndex: s,
                        selectedSummary: i,
                        summariesFeedback: r,
                        channelAffinities: R,
                        channelAffinitiesById: L,
                        channelAffinitiesStatus: b
                    }
                }
                initialize(e) {
                    var t, n, o, u, d, c;
                    j = null !== (t = null == e ? void 0 : e.summariesByChannel) && void 0 !== t ? t : {}, l = null === (n = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === n || n, y = {}, a = null !== (o = null == e ? void 0 : e.highlightedSummary) && void 0 !== o ? o : null, s = null !== (u = null == e ? void 0 : e.visibleSummaryIndex) && void 0 !== u ? u : null, i = null !== (d = null == e ? void 0 : e.selectedSummary) && void 0 !== d ? d : null, r = null !== (c = null == e ? void 0 : e.summariesFeedback) && void 0 !== c ? c : {}, this.waitFor(v.default, S.default, x.default, C.default, g.default), this.syncWith([E.default], w), this.syncWith([g.default], () => U(this)), T.ChannelSummarizationModelSwapExperiment.subscribe({
                        location: "1"
                    }, () => U(this))
                }
                allSummaries() {
                    return j
                }
                topSummaries() {
                    let e = Object.values(j).flat().filter(e => e.people.length > 1 && M.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * N.default.Millis.HOUR).sort((e, t) => M.default.extractTimestamp(t.endId) - M.default.extractTimestamp(e.endId));
                    return e
                }
                summaries(e) {
                    var t, n;
                    let l = null !== (t = j[e]) && void 0 !== t ? t : [],
                        a = v.default.getChannel(e),
                        s = C.default.getGuild(null == a ? void 0 : a.guild_id),
                        {
                            source: i
                        } = T.ChannelSummarizationModelSwapGuildExperiment.getCurrentConfig({
                            guildId: null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : "",
                            location: "93448c_2"
                        }, {
                            autoTrackExposure: !1
                        }),
                        r = i !== D ? A.SummarySources.SOURCE_0 : D;
                    return l.filter(e => e.source === r)
                }
                shouldShowTopicsBar() {
                    return l
                }
                findSummary(e, t) {
                    var n;
                    return null !== (n = this.summaries(e).find(e => e.id === t)) && void 0 !== n ? n : null
                }
                selectedSummary(e) {
                    return null != i && i.channelId === e && null != i.summaryId ? this.findSummary(e, null == i ? void 0 : i.summaryId) : null
                }
                summaryFeedback(e) {
                    return null == e ? null : r[e.id]
                }
                topicForRange(e, t, n) {
                    var l, s, i, r, o, u;
                    let d = null === (l = j[e]) || void 0 === l ? void 0 : l.filter(e => e.source === D);
                    if (null == d) return null;
                    if (null != a && a.channelId === e && null != a.summaryId) return null !== (o = null == d ? void 0 : null === (r = d.find(e => e.id === (null == a ? void 0 : a.summaryId))) || void 0 === r ? void 0 : r.topic) && void 0 !== o ? o : null;
                    if (null == t && (null === (s = d[0]) || void 0 === s ? void 0 : s.topic) != null) return d[0].topic;
                    if (null == t && null == n) return null;
                    let m = null != t ? M.default.extractTimestamp(t) : 0,
                        f = null != n ? M.default.extractTimestamp(n) : 0,
                        h = f - (f - m) * .5;
                    if (0 === m) return null;
                    let p = c.sortBy(d, e => {
                        let t = 0,
                            l = M.default.extractTimestamp(e.startId);
                        return t = null != n ? Math.abs(h - l) : Date.now() - M.default.extractTimestamp(e.startId)
                    });
                    return null !== (u = null === (i = c.first(p)) || void 0 === i ? void 0 : i.topic) && void 0 !== u ? u : null
                }
                isFetching(e, t) {
                    var n, l;
                    return null != t ? (null === (l = y[e]) || void 0 === l ? void 0 : l.summaryId) === t : (null === (n = y[e]) || void 0 === n ? void 0 : n.fetching) === !0
                }
                status(e) {
                    return y[e]
                }
                shouldFetch(e, t) {
                    var n, l, a;
                    let s = j[e],
                        i = y[e],
                        r = v.default.getChannel(e);
                    if (!(0, h.canSeeChannelSummaries)(r)) return !1;
                    if (null != t) {
                        let e = null !== (l = null == i ? void 0 : i.summaryIdLastRequestedAt) && void 0 !== l ? l : 0,
                            n = Date.now() - e;
                        return t !== (null == i ? void 0 : i.summaryId) || n > 5e3
                    }
                    let o = null !== (a = null == i ? void 0 : i.lastRequestedAt) && void 0 !== a ? a : 0,
                        u = Date.now() - o;
                    return (null === (n = y[e]) || void 0 === n ? void 0 : n.fetching) !== !0 && ((null == s ? void 0 : s.length) < 1 || u >= 5e3)
                }
                channelAffinities() {
                    return R
                }
                channelAffinitiesById(e) {
                    return null == e ? L : L[e]
                }
                channelAffinitiesStatus() {
                    return b
                }
                shouldFetchChannelAffinities() {
                    return !("fetching" === b.status || null != b.lastResponse && Date.now() - b.lastResponse < 3e4) && !0
                }
                defaultChannelIds(e) {
                    let {
                        withQuickSwitcher: t,
                        withChannelAffinities: n,
                        withUnreads: l,
                        numChannels: a = 25
                    } = e, s = [];
                    return t && (s = s.concat(O)), n && (s = s.concat(R.map(e => e.channel_id))), l && (s = s.filter(e => {
                        let t = v.default.getChannel(e);
                        return null != t && !_.default.isChannelMuted(t.guild_id, e) && I.default.hasUnread(e)
                    })), (s = s.filter(e => {
                        let t = v.default.getChannel(e);
                        return (0, h.canSeeChannelSummaries)(t, !1, !1)
                    })).slice(0, a)
                }
                visibleSummaryIndex() {
                    return s
                }
            }
            k.persistKey = "SummaryStore";
            let V = new k(f.default, {
                CONNECTION_OPEN() {
                    let {
                        source: e
                    } = T.ChannelSummarizationModelSwapExperiment.getCurrentConfig({
                        location: "93448c_3"
                    });
                    return D = e, !1
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t,
                        guildId: n
                    } = e;
                    (null == i ? void 0 : i.channelId) !== t && (i = null), c.isFunction(P) && (P(), P = null), null != n && (T.ChannelSummarizationModelSwapGuildExperiment.getCurrentConfig({
                        guildId: n,
                        location: "93448c_4"
                    }), P = T.ChannelSummarizationModelSwapGuildExperiment.subscribe({
                        guildId: n,
                        location: "2"
                    }, () => {
                        U(V)
                    }))
                },
                TOGGLE_TOPICS_BAR() {
                    l = !l
                },
                RECEIVE_CHANNEL_SUMMARY(e) {
                    var t, n;
                    let {
                        summary: l,
                        channelId: a,
                        error: s,
                        receivedAt: i
                    } = e;
                    if (null != l && Object.keys(l).length > 0) {
                        let e = (0, A.createSummaryFromServer)(l, a),
                            n = [...null !== (t = j[a]) && void 0 !== t ? t : []],
                            s = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
                        s > -1 ? n[s] = e : n.push(e), j[a] = n
                    }
                    let r = {
                        ...null !== (n = y[a]) && void 0 !== n ? n : {
                            fetching: !1
                        },
                        summaryId: void 0,
                        summaryIdLastReceivedAt: i,
                        summaryIdError: s
                    };
                    y[a] = r
                },
                REQUEST_CHANNEL_SUMMARY(e) {
                    var t;
                    let {
                        channelId: n,
                        summaryId: l,
                        requestedAt: a
                    } = e;
                    y[n] = {
                        ...null !== (t = y[n]) && void 0 !== t ? t : {
                            fetching: !1
                        },
                        summaryId: l,
                        summaryIdLastRequestedAt: a
                    }
                },
                RECEIVE_CHANNEL_SUMMARIES(e) {
                    let {
                        summaries: t,
                        channelId: n,
                        error: l,
                        receivedAt: a
                    } = e, s = t.filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, n));
                    if (null != i && i.channelId === n && !s.some(e => e.id === (null == i ? void 0 : i.summaryId))) {
                        var r;
                        let e = null !== (r = j[n]) && void 0 !== r ? r : [],
                            t = e.find(e => e.id === (null == i ? void 0 : i.summaryId));
                        null != t && s.push(t)
                    }
                    j[n] = (0, d.sortBy)(s, e => M.default.extractTimestamp(e.startId)).reverse();
                    let o = {
                        ...y[n],
                        fetching: !1,
                        error: void 0,
                        lastReceivedAt: a
                    };
                    null != l && (o.error = l), y[n] = o
                },
                REQUEST_CHANNEL_SUMMARIES(e) {
                    var t;
                    y[e.channelId] = {
                        ...null !== (t = y[e.channelId]) && void 0 !== t ? t : {},
                        fetching: !0,
                        lastRequestedAt: e.requestedAt
                    }
                },
                SET_HIGHLIGHTED_SUMMARY(e) {
                    var t;
                    if (null == a && null == e.channelId || e.channelId === (null == a ? void 0 : a.channelId) && e.summaryId === (null == a ? void 0 : a.summaryId)) return !1;
                    if (null != (a = null != e.channelId ? {
                            channelId: e.channelId,
                            summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                        } : null) && a.channelId === e.channelId && null != a.summaryId) {
                        let e = j[a.channelId];
                        s = null == e ? void 0 : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId))
                    }
                },
                UPDATE_VISIBLE_MESSAGES(e) {
                    let t = x.default.getChannelId();
                    if (null != t) {
                        if (null != a && a.channelId === t && null != a.summaryId) {
                            let e = j[a.channelId];
                            s = null == e ? void 0 : e.findIndex(e => e.id === (null == a ? void 0 : a.summaryId))
                        } else {
                            var n;
                            s = null === (n = j[t]) || void 0 === n ? void 0 : n.findIndex(t => {
                                var n, l, a, s;
                                return n = e.topVisibleMessage, l = e.bottomVisibleMessage, a = t.startId, s = t.endId, !(null == n || n > s) && !(null == l || l < a)
                            })
                        }
                    }
                },
                SET_SELECTED_SUMMARY(e) {
                    var t;
                    let n = e.channelId;
                    return null == n ? null : (n !== (null == i ? void 0 : i.channelId) || e.summaryId !== (null == i ? void 0 : i.summaryId)) && void(i = {
                        channelId: n,
                        summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                    })
                },
                SET_SUMMARY_FEEDBACK(e) {
                    let {
                        summary: t,
                        rating: n
                    } = e;
                    null != n ? r[t.id] = n : delete r[t.id]
                },
                REQUEST_CHANNEL_AFFINITIES() {
                    b = {
                        ...b,
                        status: "fetching",
                        lastRequest: Date.now()
                    }
                },
                RECEIVE_CHANNEL_AFFINITIES(e) {
                    var t;
                    let {
                        affinities: n,
                        error: l
                    } = e;
                    if (null != l) {
                        R = [], L = {}, b = {
                            ...b,
                            status: "error",
                            lastResponse: Date.now()
                        };
                        return
                    }
                    R = null != n ? n : [], L = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, b = {
                        ...b,
                        status: "ok",
                        lastResponse: Date.now()
                    }
                },
                REQUEST_CHANNEL_SUMMARIES_BULK(e) {
                    let {
                        channelIds: t,
                        requestedAt: n
                    } = e, l = t.reduce((e, t) => {
                        var l;
                        let a = null !== (l = y[t]) && void 0 !== l ? l : {};
                        return e[t] = {
                            ...a,
                            fetching: !0,
                            lastRequestedAt: n,
                            error: void 0
                        }, e
                    }, {});
                    y = {
                        ...y,
                        ...l
                    }
                },
                RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
                    let {
                        summaries: t,
                        receivedAt: n,
                        error: l,
                        requestArgs: {
                            channelIds: a
                        }
                    } = e, s = c.toPairs(t).reduce((e, t) => {
                        let [n, l] = t, a = c.chain(l.map(e => (0, A.createSummaryFromServer)(e, n))).sortBy(e => M.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
                        return e[n] = a, e
                    }, {}), i = a.reduce((e, t) => {
                        var a;
                        let i = null !== (a = y[t]) && void 0 !== a ? a : {},
                            r = s[t];
                        return null != r && (e.summariesByChannel[t] = r), e.summaryFetchStatusByChannel[t] = {
                            ...i,
                            fetching: !1,
                            error: l,
                            lastReceivedAt: n
                        }, e
                    }, {
                        summariesByChannel: {},
                        summaryFetchStatusByChannel: {}
                    });
                    j = {
                        ...j,
                        ...i.summariesByChannel
                    }, y = {
                        ...y,
                        ...i.summaryFetchStatusByChannel
                    }
                },
                CONVERSATION_SUMMARY_UPDATE(e) {
                    var t, n, l;
                    let {
                        channel_id: a,
                        summaries: s,
                        guild_id: i
                    } = e, r = Date.now(), o = c.chain(s).sortBy(e => M.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, a)).reverse().value(), u = null !== (n = j[a]) && void 0 !== n ? n : [], d = c.chain(o).concat(u).sortBy(e => M.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
                    j[a] = d, y[a] = {
                        ...y[a],
                        error: void 0,
                        fetching: null !== (l = null === (t = y[a]) || void 0 === t ? void 0 : t.fetching) && void 0 !== l && l,
                        lastReceivedAt: r
                    }
                },
                CLEAR_CONVERSATION_SUMMARIES() {
                    j = {}, y = {}
                },
                DELETE_SUMMARY(e) {
                    var t;
                    let n = e.summary.channelId,
                        l = null !== (t = j[n]) && void 0 !== t ? t : [],
                        a = l.indexOf(e.summary); - 1 !== a && j[n].splice(a, 1)
                }
            });
            var F = V