"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var n = l("448105"),
  a = l.n(n),
  r = l("917351"),
  i = l.n(r),
  u = l("866227"),
  o = l.n(u),
  s = l("446674"),
  c = l("913144"),
  d = l("299285"),
  f = l("860285"),
  p = l("915639"),
  E = l("86878"),
  h = l("546463"),
  g = l("686470"),
  m = l("568307"),
  A = l("102985"),
  L = l("251013"),
  y = l("946749"),
  C = l("535974"),
  S = l("352326"),
  N = l("718517"),
  _ = l("117362"),
  T = l("449008"),
  I = l("964889"),
  R = l("773336"),
  v = l("50885"),
  b = l("602043"),
  U = l("9377"),
  M = l("49111");
let O = o().subtract(1, "week"),
  G = [],
  D = "",
  w = !1;

function P(e, t) {
  return e.application.name.localeCompare(t.application.name, p.default.locale, {
    sensitivity: "base"
  })
}
let x = {
    [M.GameTableListKeys.NAME]: P,
    [M.GameTableListKeys.PLATFORM]: (e, t, l) => {
      let n = e.libraryApplication.getDistributor(),
        a = t.libraryApplication.getDistributor();
      return n === a ? (l === M.TableSortDirections.DESCENDING ? -1 : 1) * P(e, t) : null == n ? 1 : null == a ? -1 : n.localeCompare(a)
    },
    [M.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
    [M.GameTableListKeys.ACTIONS]: null
  },
  k = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
  F = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && C.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
  H = (0, _.cachedFunction)((e, t) => e.filter(e => a(t.toLowerCase(), e.application.name.toLowerCase()))),
  q = (0, _.cachedFunction)((e, t, l, n) => {
    let a = x[t];
    if (null == a) return e;
    let r = [...e],
      i = r.sort(a);
    return l === M.TableSortDirections.DESCENDING ? i.reverse() : i
  }),
  B = (0, _.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

function V(e, t) {
  let l = L.default.getCurrentUserStatisticsForApplication(e.id);
  if (null != l) return new Date(l.last_played_at).getTime();
  let n = t[e.id];
  return null != n ? n : 0
}

function K() {
  let e = new Set(m.default.getRunningVerifiedApplicationIds()),
    t = {},
    l = new Set,
    n = m.default.getGamesSeen(!1, !1).map(e => {
      let l = h.default.getGameByGameData(e);
      return null != l ? (t[l.id] = e.lastFocused * N.default.Millis.SECOND, l.id) : null
    }),
    a = Object.values(g.default.getAllLibraryApplications()),
    r = a.map(n => (function(e, t, l, n, a) {
      var r, i;
      if (!a && t.has(e.id)) return null;
      let u = d.default.getApplication(e.id);
      if (null == u) return null;
      let s = V(u, l);
      if (t.add(e.id), !(0, I.isUserEntitledToLibraryApplication)(e) && !C.default.isInstalled(e.id, e.branchId)) return null;
      return {
        key: "".concat(e.id, "-").concat(e.branchId),
        application: u,
        libraryApplication: e,
        lastPlayed: s,
        supportsCloudSync: null != e && C.default.supportsCloudSync(e.id, e.branchId),
        isNew: (r = e, i = s, null != r && o(r.createdAt).isAfter(O) && 0 === i),
        isLaunching: f.default.launchingGames.has(e.id),
        isRunning: n.has(e.id),
        isLaunchable: (0, b.isLaunchable)({
          LibraryApplicationStore: g.default,
          LaunchableGameStore: f.default,
          DispatchApplicationStore: C.default,
          ConnectedAppsStore: E.default,
          applicationId: e.id,
          branchId: e.branchId
        }),
        isUpdatingFlags: g.default.isUpdatingFlags(e.id, e.branchId),
        shouldShowInLibrary: (0, I.shouldShowGameInLibrary)(u, e, A.default),
        defaultAction: (0, U.getDefaultLibraryApplicationAction)(e, C.default, S.default)
      }
    })(n, l, t, e, !0)).filter(T.isNotNullish),
    u = n.map(n => (function(e, t, l, n) {
      let a = null != e ? d.default.getApplication(e) : null;
      if (null == a || null == e || t.has(e)) return null;
      let r = V(a, l);
      return t.add(e), {
        key: e,
        application: a,
        lastPlayed: r,
        supportsCloudSync: !1,
        isNew: !1,
        isLaunching: f.default.launchingGames.has(e),
        isRunning: n.has(e),
        isLaunchable: (0, b.isLaunchable)({
          LibraryApplicationStore: g.default,
          LaunchableGameStore: f.default,
          DispatchApplicationStore: C.default,
          ConnectedAppsStore: E.default,
          applicationId: e,
          branchId: null
        }),
        isUpdatingFlags: !1,
        shouldShowInLibrary: !1,
        libraryApplication: null,
        defaultAction: null
      }
    })(n, l, t, e)).filter(T.isNotNullish),
    s = [...u, ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
  return w = null != h.default.lastFetched && g.default.fetched, !i.isEqual(s, G) && (G = s, R.isPlatformEmbedded && v.default.setSystemTrayApplications(F(G).map(e => e.application).slice(0, 5)), !0)
}
class Y extends s.default.Store {
  initialize() {
    this.syncWith([d.default, h.default, f.default, m.default, C.default, S.default, g.default, L.default, A.default, E.default], K, 200), this.syncWith([y.default, p.default], () => !0)
  }
  get applicationFilterQuery() {
    return D
  }
  get applicationViewItems() {
    return G
  }
  get launchableApplicationViewItems() {
    return F(G)
  }
  get libraryApplicationViewItems() {
    return k(G)
  }
  get filteredLibraryApplicationViewItems() {
    return H(this.libraryApplicationViewItems, D)
  }
  get sortedFilteredLibraryApplicationViewItems() {
    return q(this.filteredLibraryApplicationViewItems, y.default.sortKey, y.default.sortDirection, p.default.locale)
  }
  get hiddenLibraryApplicationViewItems() {
    return B(G)
  }
  get hasFetchedApplications() {
    return w
  }
}
Y.displayName = "ApplicationViewStore";
var j = new Y(c.default, {
  LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
    let {
      query: t
    } = e;
    D = t
  }
})