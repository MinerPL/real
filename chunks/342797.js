            "use strict";
            n.r(t), n.d(t, {
                logReadyPayloadReceived: function() {
                    return u
                },
                getConnectionPath: function() {
                    return o
                },
                getReadyPayloadByteSizeAnalytics: function() {
                    return d
                },
                createResumeAnalytics: function() {
                    return c
                },
                logResumeAnalytics: function() {
                    return _
                }
            }), n("424973");
            var i = n("102053");
            n("704744");
            var a = n("410912"),
                l = n("697218"),
                s = n("599110"),
                r = n("49111");

            function u(e, t, n, l, u) {
                var o, d, c;
                let _ = function(e) {
                    let {
                        _trace: t
                    } = e, n = {};
                    try {
                        let e = JSON.parse(t);
                        null != e[0] && "" !== e[0] && e[0].startsWith("gateway-") && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                            function e(t, n) {
                                if (null != t && t.length > 0)
                                    for (let i = 0; i < t.length; i += 2) {
                                        let a = t[i],
                                            l = t[i + 1];
                                        n(a, l.micros), e(l.calls, n)
                                    }
                            }(e, (e, t) => {
                                "start_session" === e ? n.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3))
                            })
                    } catch (e) {}
                    return n
                }(t);
                i.default.addDetail("payload_size(kb)", Math.round(l.uncompressed_byte_size / 1024)), i.default.addDetail("server_time(ms)", null !== (o = _.identify_total_server_duration_ms) && void 0 !== o ? o : 0);
                let E = {
                    ...l,
                    ..._,
                    ... function(e) {
                        let {
                            guilds: t
                        } = e, n = 0, i = 0;
                        return t.forEach(e => {
                            if (e.unavailable) return;
                            let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                            null != t && null != t.forEach && t.forEach(e => {
                                i++, e.type === r.ChannelTypes.GUILD_CATEGORY && n++
                            })
                        }), {
                            num_guilds: t.length,
                            num_guild_channels: i,
                            num_guild_category_channels: n
                        }
                    }(t),
                    ...u,
                    duration_ms_since_identify_start: n - e.identifyStartTime,
                    duration_ms_since_connection_start: n - e.connectionStartTime,
                    duration_ms_since_emit_start: Date.now() - n,
                    is_reconnect: e.hasConnectedOnce,
                    is_fast_connect: e.isFastConnect,
                    did_force_clear_guild_hashes: e.didForceClearGuildHashes,
                    identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
                    identify_compressed_byte_size: e.identifyCompressedByteSize,
                    had_cache_at_startup: null !== (d = e.analytics.hadCacheAtStartup) && void 0 !== d && d,
                    used_cache_at_startup: null !== (c = e.analytics.usedCacheAtStartup) && void 0 !== c && c
                };
                a.default.attachReadyPayloadProperties(E), s.default.track(r.AnalyticEvents.READY_PAYLOAD_RECEIVED, E, {
                    logEventProperties: !0
                })
            }

            function o(e) {
                try {
                    var t;
                    let n = function(e) {
                        if (null == e) return null;
                        let t = JSON.parse(e);
                        return function e(t, n) {
                            if (null == t) return "";
                            let i = "";
                            for (let a = 0; a < t.length; a += 2) i += "\n".concat(n).concat(t[a], ": ").concat(t[a + 1].micros / 1e3) + e(t[a + 1].calls, n + "|  ");
                            return i
                        }(t, "")
                    }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
                    if (null != n) return n
                } catch (e) {}
                return null != e._trace ? e._trace.join(" -> ") : "???"
            }

            function d(e) {
                var t, n;
                let i = Date.now(),
                    {
                        guilds: a,
                        merged_presences: l,
                        merged_members: s,
                        read_state: r,
                        private_channels: u,
                        user_guild_settings: o,
                        user_settings: d,
                        user_settings_proto: c,
                        experiments: _,
                        guild_experiments: E,
                        relationships: f,
                        users: h,
                        ...p
                    } = e,
                    T = [],
                    C = [],
                    m = [],
                    S = [],
                    I = [],
                    g = [],
                    A = [],
                    N = [];
                return a.forEach(e => {
                    var t;
                    if (e.unavailable) return;
                    let {
                        features: n,
                        ...i
                    } = null !== (t = e.properties) && void 0 !== t ? t : {}, {
                        threads: a,
                        guild_scheduled_events: l,
                        ...s
                    } = e;
                    T.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), C.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), m.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), S.push(a), I.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), g.push(n), A.push(l), N.push(s, i)
                }), {
                    presences_size: JSON.stringify(null !== (t = null == l ? void 0 : l.friends) && void 0 !== t ? t : []).length,
                    users_size: JSON.stringify(h).length,
                    read_states_size: JSON.stringify(r).length,
                    private_channels_size: JSON.stringify(u).length,
                    user_settings_size: JSON.stringify(null != d ? d : "").length + (null != c ? c : "").length,
                    experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != E ? E : []).length,
                    user_guild_settings_size: JSON.stringify(o).length,
                    relationships_size: JSON.stringify(f).length,
                    remaining_data_size: JSON.stringify(null != p ? p : {}).length,
                    guild_channels_size: JSON.stringify(T).length,
                    guild_members_size: JSON.stringify(null != s ? s : []).length,
                    guild_presences_size: JSON.stringify(null !== (n = null == l ? void 0 : l.guilds) && void 0 !== n ? n : []).length,
                    guild_roles_size: JSON.stringify(C).length,
                    guild_emojis_size: JSON.stringify(m).length,
                    guild_threads_size: JSON.stringify(S).length,
                    guild_stickers_size: JSON.stringify(I).length,
                    guild_events_size: JSON.stringify(A).length,
                    guild_features_size: JSON.stringify(g).length,
                    guild_remaining_data_size: JSON.stringify(N).length,
                    size_metrics_duration_ms: Date.now() - i
                }
            }

            function c(e) {
                return {
                    connectTime: null != e ? e : 0,
                    numEvents: 0,
                    largestWaitTime: 0,
                    dispatchTime: 0,
                    totalWaitTime: 0,
                    initialWaitTime: 0,
                    startTime: performance.now(),
                    lastUpdateTime: performance.now()
                }
            }

            function _(e) {
                var t;
                !(!(null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && s.default.track(r.AnalyticEvents.CONNECTION_RESUMED, {
                    connect_time_ms: e.connectTime,
                    resume_time_ms: Math.floor(performance.now() - e.startTime),
                    num_events: e.numEvents,
                    largest_wait_time_ms: Math.floor(e.largestWaitTime),
                    initial_wait_time_ms: Math.floor(e.initialWaitTime),
                    total_wait_time_ms: Math.floor(e.totalWaitTime),
                    total_dispatch_time_ms: Math.floor(e.dispatchTime)
                }, {
                    logEventProperties: !0
                })
            }