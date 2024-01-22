"use strict";
let i;
n.r(t), n.d(t, {
  NO_ACTIVITIES: function() {
    return v
  },
  default: function() {
    return x
  }
}), n("222007"), n("424973"), n("581081");
var s = n("446674"),
  r = n("913144"),
  a = n("798609"),
  o = n("271938"),
  l = n("42203"),
  u = n("957255"),
  d = n("18494"),
  c = n("697218"),
  f = n("773336"),
  _ = n("711562"),
  h = n("334368"),
  g = n("420444"),
  m = n("272505"),
  E = n("49111");
let p = {
    seenActivities: new Set,
    seenNewActivities: {},
    seenUpdatedActivities: {},
    shouldShowNewActivityIndicator: !1,
    usersHavePlayedByApp: new Map
  },
  v = [],
  S = new Map,
  T = new Map,
  I = new Map,
  C = !1,
  A = new Map,
  y = new Map,
  N = new Map,
  R = new Map,
  O = new Map,
  D = new Map,
  P = new Map;
let b = m.ActivityPanelModes.ACTION_BAR,
  L = m.FocusedActivityLayouts.RESIZABLE;

function M(e) {
  return null != e ? e : "0"
}

function U(e) {
  var t, n;
  let {
    guildId: i,
    channelId: s,
    applicationId: a,
    instanceId: d,
    userIds: c,
    activitySessionId: f
  } = e, h = (0, _.default)(a);
  if (null == h) return;
  let g = l.default.getBasicChannel(s),
    m = null != g && u.default.canBasicChannel(E.BasicPermissions.CONNECT, g) || (null == g ? void 0 : g.type) === E.ChannelTypes.DM || (null == g ? void 0 : g.type) === E.ChannelTypes.GROUP_DM;
  if (function(e, t) {
      var n;
      p.usersHavePlayedByApp.set(e, new Set([...null !== (n = p.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : [], ...t]))
    }(a, c), !m) return;
  let v = {
      activitySessionId: null != f ? f : d,
      applicationId: a,
      channelId: s,
      guildId: i,
      instanceId: d,
      url: h,
      userIds: new Set(c)
    },
    C = o.default.getId(),
    A = S.get(v.applicationId);
  c.some(e => e === C) && null != A && (S.set(A.applicationId, {
    ...A,
    ...v
  }), r.default.dispatch({
    type: "EMBEDDED_ACTIVITY_INSTANCE_CHANGE",
    channelId: s,
    instanceId: d
  }));
  let y = null !== (t = I.get(s)) && void 0 !== t ? t : [],
    N = y.filter(e => e.applicationId !== a),
    R = M(i),
    O = null !== (n = T.get(R)) && void 0 !== n ? n : [],
    D = O.filter(e => !(e.applicationId === a && e.channelId === s));
  0 !== c.length && (N.push(v), D.push(v)), I.set(s, N), T.set(R, D)
}

function k(e) {
  let t = e.embedded_activities;
  t.forEach(t => {
    let {
      channel_id: n,
      embedded_activity: i,
      connections: s
    } = t;
    U({
      guildId: e.id,
      channelId: n,
      applicationId: i.application_id,
      instanceId: i.activity_id,
      userIds: s.map(e => e.user_id)
    })
  })
}

function w() {
  C = !1
}

function V(e, t) {
  return "".concat(e, ":").concat(t)
}
class G extends s.default.PersistedStore {
  initialize(e) {
    var t;
    let n = new Map;
    Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach(e => {
      if (Array.isArray(e)) {
        let [t, i] = e;
        "string" == typeof t && Array.isArray(i) && n.set(t, new Set(i))
      }
    }));
    let i = new Set(null !== (t = null == e ? void 0 : e.seenActivities) && void 0 !== t ? t : []);
    null != e && (p = {
      ...e,
      seenActivities: i,
      usersHavePlayedByApp: n
    })
  }
  getState() {
    return p
  }
  getSelfEmbeddedActivityForChannel(e) {
    var t;
    return null !== (t = Array.from(S.values()).find(t => {
      let {
        channelId: n
      } = t;
      return e === n
    })) && void 0 !== t ? t : null
  }
  getSelfEmbeddedActivities() {
    return S
  }
  getEmbeddedActivitiesForGuild(e) {
    var t;
    return null !== (t = T.get(e)) && void 0 !== t ? t : v
  }
  getEmbeddedActivitiesForChannel(e) {
    var t;
    return null !== (t = I.get(e)) && void 0 !== t ? t : v
  }
  getEmbeddedActivitiesByChannel() {
    return I
  }
  getEmbeddedActivityDurationMs(e, t) {
    let n = P.get(V(e, t));
    return null == n ? null : Date.now() - n
  }
  isLaunchingActivity() {
    return C
  }
  getShelfActivities(e) {
    var t;
    let n = M(e);
    return null !== (t = A.get(n)) && void 0 !== t ? t : []
  }
  getShelfFetchStatus(e) {
    let t = M(e);
    return y.get(t)
  }
  shouldFetchShelf(e) {
    var t, n;
    let i = M(e),
      s = null !== (t = y.get(i)) && void 0 !== t ? t : {
        isFetching: !1
      },
      r = Date.now(),
      a = r - (null !== (n = null == s ? void 0 : s.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
    return !(null == s ? void 0 : s.isFetching) && a
  }
  getOrientationLockStateForApp(e) {
    var t;
    return null !== (t = N.get(e)) && void 0 !== t ? t : null
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null !== (t = R.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
  }
  getGridOrientationLockStateForApp(e) {
    var t, n;
    return null !== (n = null !== (t = O.get(e)) && void 0 !== t ? t : R.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
  }
  getLayoutModeForApp(e) {
    return D.get(e)
  }
  getUsersHavePlayedByApp(e) {
    var t;
    return [...null !== (t = p.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : []]
  }
  getConnectedActivityChannelId() {
    return i
  }
  getActivityPanelMode() {
    return b
  }
  getFocusedLayout() {
    return L
  }
  getCurrentEmbeddedActivity() {
    var e;
    let t = this.getConnectedActivityChannelId();
    if (null != t) return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0
  }
}
G.displayName = "EmbeddedActivitiesStore", G.persistKey = "EmbeddedActivities", G.migrations = [e => ({
  ...e,
  seenFeaturedActivities: [],
  shouldShowNewActivityIndicator: !1
}), e => (delete e.seenFeaturedActivities, {
  ...e,
  seenActivities: []
}), e => ({
  ...e
}), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
  ...e
}), e => {
  var t;
  let n = new Set(null !== (t = e.seenActivities) && void 0 !== t ? t : []);
  return {
    ...e,
    seenActivities: n,
    seenNewActivities: {},
    seenUpdatedActivities: {}
  }
}];
let F = new G(r.default, {
  ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    D.set(t, n)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t
    } = e;
    I.clear(), T.clear(), t.forEach(e => k(e))
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    k(t)
  },
  CALL_CREATE: function(e) {
    let {
      channelId: t,
      embeddedActivities: n
    } = e;
    ! function(e, t) {
      t.forEach(e => {
        let {
          channel_id: t,
          embedded_activity: n,
          connections: i
        } = e;
        U({
          guildId: null,
          channelId: t,
          applicationId: n.application_id,
          instanceId: n.activity_id,
          userIds: i.map(e => e.user_id)
        })
      })
    }(0, n)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    I.set(t.id, []);
    let n = t.guild_id;
    if (null != n) {
      var i;
      let e = M(n),
        s = null !== (i = T.get(e)) && void 0 !== i ? i : [],
        r = s.filter(e => e.channelId !== t.id);
      T.set(e, r)
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function() {
    C = !0
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: w,
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: w,
  EMBEDDED_ACTIVITY_OPEN: function(e) {
    var t, n;
    let {
      channelId: s,
      applicationId: r
    } = e, a = (0, _.default)(r), u = o.default.getSessionId();
    if (null == a || null == u || (null === (t = S.get(r)) || void 0 === t ? void 0 : t.channelId) === s) return !1;
    let f = l.default.getChannel(s),
      h = null == f ? void 0 : f.getGuildId(),
      E = c.default.getCurrentUser();
    if (null == h && !(null !== (n = null == f ? void 0 : f.isPrivate()) && void 0 !== n && n) || null == E) return !1;
    i = s, S.set(r, {
      guildId: h,
      channelId: s,
      applicationId: r,
      url: a,
      userIds: new Set([E.id]),
      connectedSince: Date.now()
    }), b = i !== d.default.getChannelId() || (0, g.default)(s) ? m.ActivityPanelModes.PIP : m.ActivityPanelModes.PANEL, P.set(V(s, r), Date.now())
  },
  EMBEDDED_ACTIVITY_CLOSE: function(e) {
    let {
      applicationId: t
    } = e, n = S.get(t);
    S.delete(t), (null == n ? void 0 : n.channelId) === i && (i = void 0)
  },
  EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      embeddedActivity: i,
      connections: s
    } = e;
    U({
      guildId: t,
      channelId: n,
      applicationId: i.application_id,
      instanceId: i.activity_id,
      userIds: s.map(e => e.user_id)
    })
  },
  EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: function(e) {
    let {
      activitySessionId: t,
      applicationId: n,
      channelId: i,
      guildId: s,
      instanceId: r,
      userIds: a
    } = e;
    U({
      guildId: s,
      channelId: i,
      applicationId: n,
      instanceId: r,
      userIds: a,
      activitySessionId: t
    })
  },
  LOCAL_ACTIVITY_UPDATE: function(e) {
    var t;
    let {
      activity: n
    } = e;
    if (null == n) return !1;
    let i = S.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
    if (null == i) return !1;
    S.set(i.applicationId, {
      ...i
    })
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
    let {
      applicationId: t,
      config: n
    } = e, i = S.get(t);
    null != i && S.set(i.applicationId, {
      ...i,
      config: n
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
    let {
      guildId: t
    } = e, n = M(t), i = y.get(n);
    y.set(n, {
      isFetching: !0,
      lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
    let {
      guildId: t,
      activities: n
    } = e, i = M(t);
    A.set(i, n);
    let s = Date.now();
    ! function(e) {
      let {
        activities: t,
        now: n
      } = e;
      t.forEach(e => {
        let t = e.application_id,
          i = e.client_platform_config[(0, h.default)((0, f.getOS)())];
        if (!p.seenActivities.has(t) && (p.shouldShowNewActivityIndicator = !0, p.seenActivities.add(t)), null == i.label_until) return;
        let s = new Date(i.label_until).getTime();
        if (s < n) return;
        let r = p.seenNewActivities[t],
          o = Object.hasOwn(p.seenNewActivities, t),
          l = new Date(r).getTime() < s;
        i.label_type === a.EmbeddedActivityLabelTypes.NEW && (!o || l) && (p.shouldShowNewActivityIndicator = !0, p.seenNewActivities[t] = i.label_until);
        let u = p.seenUpdatedActivities[t],
          d = Object.hasOwn(p.seenUpdatedActivities, t),
          c = new Date(u).getTime() < s;
        i.label_type === a.EmbeddedActivityLabelTypes.UPDATED && (!d || c) && (p.shouldShowNewActivityIndicator = !0, p.seenUpdatedActivities[t] = i.label_until)
      })
    }({
      activities: n,
      now: s
    }), y.set(i, {
      isFetching: !1,
      lastFetchTimestampMs: s
    })
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
    let {
      guildId: t
    } = e, n = M(t), i = y.get(n);
    y.set(n, {
      isFetching: !1,
      lastFetchTimestampMs: null == i ? void 0 : i.lastFetchTimestampMs
    })
  },
  EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
    p.shouldShowNewActivityIndicator = !1
  },
  EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
    let {
      applicationId: t,
      lockState: n,
      pictureInPictureLockState: i,
      gridLockState: s
    } = e;
    null == n ? N.delete(t) : N.set(t, n), null === i ? R.delete(t) : void 0 !== i && R.set(t, i), null === s ? O.delete(t) : void 0 !== s && O.set(t, s)
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
    let {
      activityPanelMode: t
    } = e;
    b = t
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
    let {
      focusedActivityLayout: t
    } = e;
    L = t
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    i !== t && b === m.ActivityPanelModes.PANEL && (b = m.ActivityPanelModes.PIP)
  }
});
var x = F