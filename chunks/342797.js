"use strict";
n.r(t), n.d(t, {
  logReadyPayloadReceived: function() {
    return d
  },
  getConnectionPath: function() {
    return u
  },
  getReadyPayloadByteSizeAnalytics: function() {
    return l
  },
  createResumeAnalytics: function() {
    return f
  },
  logResumeAnalytics: function() {
    return _
  }
}), n("424973");
var s = n("102053");
n("704744");
var i = n("410912"),
  r = n("697218"),
  a = n("599110"),
  o = n("49111");

function d(e, t, n, r, d) {
  var u, l, f;
  let _ = function(e) {
    let {
      _trace: t
    } = e, n = {};
    try {
      let e = JSON.parse(t);
      null != e[0] && "" !== e[0] && e[0].startsWith("gateway-") && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
        function e(t, n) {
          if (null != t && t.length > 0)
            for (let s = 0; s < t.length; s += 2) {
              let i = t[s],
                r = t[s + 1];
              n(i, r.micros), e(r.calls, n)
            }
        }(e, (e, t) => {
          "start_session" === e ? n.identify_api_duration_ms = Math.floor(t / 1e3) : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3))
        })
    } catch (e) {}
    return n
  }(t);
  s.default.addDetail("payload_size(kb)", Math.round(r.uncompressed_byte_size / 1024)), s.default.addDetail("server_time(ms)", null !== (u = _.identify_total_server_duration_ms) && void 0 !== u ? u : 0);
  let c = {
    ...r,
    ..._,
    ... function(e) {
      let {
        guilds: t
      } = e, n = 0, s = 0;
      return t.forEach(e => {
        if (e.unavailable) return;
        let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
        null != t && null != t.forEach && t.forEach(e => {
          s++, e.type === o.ChannelTypes.GUILD_CATEGORY && n++
        })
      }), {
        num_guilds: t.length,
        num_guild_channels: s,
        num_guild_category_channels: n
      }
    }(t),
    ...d,
    duration_ms_since_identify_start: n - e.identifyStartTime,
    duration_ms_since_connection_start: n - e.connectionStartTime,
    duration_ms_since_emit_start: Date.now() - n,
    is_reconnect: e.hasConnectedOnce,
    is_fast_connect: e.isFastConnect,
    did_force_clear_guild_hashes: e.didForceClearGuildHashes,
    identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
    identify_compressed_byte_size: e.identifyCompressedByteSize,
    had_cache_at_startup: null !== (l = e.analytics.hadCacheAtStartup) && void 0 !== l && l,
    used_cache_at_startup: null !== (f = e.analytics.usedCacheAtStartup) && void 0 !== f && f
  };
  i.default.attachReadyPayloadProperties(c), a.default.track(o.AnalyticEvents.READY_PAYLOAD_RECEIVED, c, {
    logEventProperties: !0
  })
}

function u(e) {
  try {
    var t;
    let n = function(e) {
      if (null == e) return null;
      let t = JSON.parse(e);
      return function e(t, n) {
        if (null == t) return "";
        let s = "";
        for (let i = 0; i < t.length; i += 2) s += "\n".concat(n).concat(t[i], ": ").concat(t[i + 1].micros / 1e3) + e(t[i + 1].calls, n + "|  ");
        return s
      }(t, "")
    }(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
    if (null != n) return n
  } catch (e) {}
  return null != e._trace ? e._trace.join(" -> ") : "???"
}

function l(e) {
  var t, n;
  let s = Date.now(),
    {
      guilds: i,
      merged_presences: r,
      merged_members: a,
      read_state: o,
      private_channels: d,
      user_guild_settings: u,
      user_settings: l,
      user_settings_proto: f,
      experiments: _,
      guild_experiments: c,
      relationships: g,
      users: m,
      ...h
    } = e,
    v = [],
    E = [],
    p = [],
    y = [],
    C = [],
    T = [],
    S = [],
    I = [];
  return i.forEach(e => {
    var t;
    if (e.unavailable) return;
    let {
      features: n,
      ...s
    } = null !== (t = e.properties) && void 0 !== t ? t : {}, {
      threads: i,
      guild_scheduled_events: r,
      ...a
    } = e;
    v.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels), E.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles), p.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis), y.push(i), C.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers), T.push(n), S.push(r), I.push(a, s)
  }), {
    presences_size: JSON.stringify(null !== (t = null == r ? void 0 : r.friends) && void 0 !== t ? t : []).length,
    users_size: JSON.stringify(m).length,
    read_states_size: JSON.stringify(o).length,
    private_channels_size: JSON.stringify(d).length,
    user_settings_size: JSON.stringify(null != l ? l : "").length + (null != f ? f : "").length,
    experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != c ? c : []).length,
    user_guild_settings_size: JSON.stringify(u).length,
    relationships_size: JSON.stringify(g).length,
    remaining_data_size: JSON.stringify(null != h ? h : {}).length,
    guild_channels_size: JSON.stringify(v).length,
    guild_members_size: JSON.stringify(null != a ? a : []).length,
    guild_presences_size: JSON.stringify(null !== (n = null == r ? void 0 : r.guilds) && void 0 !== n ? n : []).length,
    guild_roles_size: JSON.stringify(E).length,
    guild_emojis_size: JSON.stringify(p).length,
    guild_threads_size: JSON.stringify(y).length,
    guild_stickers_size: JSON.stringify(C).length,
    guild_events_size: JSON.stringify(S).length,
    guild_features_size: JSON.stringify(T).length,
    guild_remaining_data_size: JSON.stringify(I).length,
    size_metrics_duration_ms: Date.now() - s
  }
}

function f(e) {
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
  !(!(null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && .5 > Math.random()) && a.default.track(o.AnalyticEvents.CONNECTION_RESUMED, {
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