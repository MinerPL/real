"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("862337"),
  o = n("913144"),
  l = n("157552"),
  u = n("71313"),
  c = n("190017"),
  d = n("299285"),
  f = n("686470"),
  E = n("535974"),
  h = n("98328"),
  p = n("718517"),
  _ = n("964889"),
  S = n("602043");
let m = new Set,
  T = {},
  g = new Set,
  I = {},
  C = new Set,
  v = {},
  A = 10 * p.default.Millis.MINUTE,
  R = 6 * p.default.Millis.HOUR,
  N = 10 * p.default.Millis.MINUTE,
  O = new a.Timeout;

function D(e) {
  O.start(e + Math.random() * A, l.fetchBranches)
}

function y() {
  if (!(0, S.isSupportedPlatform)()) return !1;
  let e = f.default.entitledBranchIds,
    t = [];
  for (let n of e) !v.hasOwnProperty(n) && (v[n] = null, t.push(n));
  if (0 === t.length) return !1;
  o.default.wait(() => l.fetchBranches(t))
}

function P(e, t) {
  if (null != T[t] && h.default.shouldBeInstalled(e, t)) {
    let n = T[t],
      i = n.manifestIds,
      s = E.default.getState(e, t);
    null != s && s.shouldPatch && (s.buildId !== n.id || !r.isEqual(s.manifestIds, i)) && o.default.wait(() => {
      let r = d.default.getApplication(e);
      null != r ? (C.delete((0, _.getComboId)(e, t)), (0, c.updateApplication)(r, t, n.id, i, !0)) : C.add((0, _.getComboId)(e, t))
    })
  }
}

function L() {
  O.stop()
}
class b extends s.default.Store {
  initialize() {
    this.syncWith([f.default], y), this.waitFor(E.default, f.default, d.default)
  }
  getTargetBuildId(e, t) {
    return null == T[t] ? null : T[t].id
  }
  getTargetManifests(e, t) {
    return null == T[t] ? null : T[t].manifestIds
  }
  hasNoBuild(e, t) {
    return g.has(t)
  }
  isFetching(e, t) {
    return m.has(t)
  }
  needsToFetchBuildSize(e) {
    return !I.hasOwnProperty(e)
  }
  getBuildSize(e) {
    return I[e]
  }
}
b.displayName = "ApplicationBuildStore";
var M = new b(o.default, {
  CONNECTION_OPEN: function() {
    return D(R), y()
  },
  GAMES_DATABASE_UPDATE: function() {
    if (!(0, S.isSupportedPlatform)()) return !1;
    for (let e of C) {
      let {
        applicationId: t,
        branchId: n
      } = (0, _.convertComboId)(e), i = d.default.getApplication(t);
      null != i && (C.delete(e), P(t, n))
    }
  },
  APPLICATION_BUILD_FETCH_START: function(e) {
    let {
      branchId: t
    } = e;
    m.add(t)
  },
  APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branchId: n,
      locale: i,
      build: r
    } = e;
    m.delete(n);
    let s = r.manifests.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      a = r.id;
    g.delete(n), T[n] = {
      id: a,
      applicationId: t,
      branchId: n,
      locale: i,
      manifestIds: s
    }, P(t, n)
  },
  APPLICATION_BUILD_NOT_FOUND: function(e) {
    let {
      branchId: t
    } = e;
    m.delete(t), g.add(t)
  },
  APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
    let {
      buildId: t
    } = e;
    !I.hasOwnProperty(t) && (I[t] = null)
  },
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
    let {
      buildId: t,
      sizeKB: n
    } = e;
    I[t] = n
  },
  APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
    let {
      buildId: t
    } = e;
    null == I[t] && delete I[t]
  },
  APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      branches: t
    } = e, n = {};
    for (let e in f.default.libraryApplications) {
      let t = f.default.libraryApplications[e];
      n[t.branchId] = t
    }
    for (let e of t) {
      let {
        id: t,
        liveBuildId: i
      } = e, r = v[t];
      if (i !== r) {
        let e = n[t];
        null != e && o.default.wait(() => u.fetchLiveBuild(e.id, e.branchId, !0))
      }
      v[t] = i
    }
    D(R)
  },
  APPLICATION_BRANCHES_FETCH_FAIL: function() {
    D(N)
  },
  CONNECTION_CLOSED: L,
  LOGOUT: L,
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    if (!(0, S.isSupportedPlatform)()) return !1;
    let n = new Set;
    for (let e of t) n.add(e.application_id);
    for (let e in f.default.libraryApplications) {
      let t = f.default.libraryApplications[e];
      n.has(t.id) && (0, _.isUserEntitledToLibraryApplication)(t) && o.default.wait(() => u.fetchLiveBuild(t.id, t.branchId))
    }
  }
})