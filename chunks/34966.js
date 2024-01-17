"use strict";
E.r(_), E.d(_, {
  default: function() {
    return u
  }
}), E("222007");
var t = E("446674"),
  o = E("95410"),
  n = E("913144"),
  r = E("915639"),
  i = E("234222");
let a = {},
  I = {},
  s = null,
  T = null,
  S = null,
  N = "lastChangeLogId",
  O = "lastChangeLogDate",
  A = null,
  R = null,
  l = new Set;
class L extends t.default.Store {
  initialize() {
    var e;
    this.waitFor(r.default), this.syncWith([r.default], () => !0), A = null !== (e = o.default.get(N)) && void 0 !== e ? e : null;
    let _ = o.default.get(O);
    if (null != _) try {
      R = new Date(_)
    } catch {
      o.default.remove(O)
    }
  }
  getChangelog(e, _) {
    var E, t;
    return null !== (t = null === (E = a[e]) || void 0 === E ? void 0 : E[_]) && void 0 !== t ? t : null
  }
  latestChangelogId() {
    return s
  }
  getChangelogLoadStatus(e, _) {
    var E, t;
    return null !== (t = null === (E = I[e]) || void 0 === E ? void 0 : E[_]) && void 0 !== t ? t : i.ChangelogLoadState.NOT_LOADED
  }
  hasLoadedConfig() {
    return null != S
  }
  getConfig() {
    return S
  }
  overrideId() {
    return T
  }
  lastSeenChangelogId() {
    return A
  }
  lastSeenChangelogDate() {
    return R
  }
  getStateForDebugging() {
    return {
      changelogConfig: S,
      loadedChangelogs: I,
      lastSeenChangelogId: A,
      lastSeenChangelogDate: R
    }
  }
  isLocked() {
    return l.size > 0
  }
}
L.displayName = "ChangelogStore";
var u = new L(n.default, {
  CHANGE_LOG_LOCK: function(e) {
    let {
      key: _
    } = e;
    if (l.has(_)) return !1;
    (l = new Set(l)).add(_)
  },
  CHANGE_LOG_UNLOCK: function(e) {
    let {
      key: _
    } = e;
    if (!l.has(_)) return !1;
    (l = new Set(l)).delete(_)
  },
  CHANGE_LOG_SET_CONFIG: function(e) {
    let {
      config: _,
      latestChangelogId: E
    } = e;
    s = E, S = _
  },
  CHANGE_LOG_FETCH_SUCCESS: function(e) {
    let {
      id: _,
      changelog: E
    } = e;
    null == a[_] && (a[_] = {}), a[_][E.locale] = {
      id: _,
      date: E.date,
      body: E.content,
      revision: 1,
      locale: E.locale,
      [E.asset_type === i.AssetType.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: E.asset
    }, null == I[_] && (I[_] = {}), I[_][E.locale] = i.ChangelogLoadState.LOADED_SUCCESS
  },
  CHANGE_LOG_FETCH_FAILED: function(e) {
    let {
      id: _,
      locale: E
    } = e;
    if (null != a[_] && null != a[_][E]) return !1;
    null == I[_] && (I[_] = {}), I[_][E] = i.ChangelogLoadState.LOADED_FAILURE
  },
  CHANGE_LOG_SET_OVERRIDE: function(e) {
    let {
      id: _
    } = e;
    T = _
  },
  CHANGE_LOG_MARK_SEEN: function(e) {
    let {
      changelogId: _,
      changelogDate: E
    } = e;
    A = null != _ ? _ : null, R = new Date(E), o.default.set(N, _), o.default.set(O, E)
  }
})