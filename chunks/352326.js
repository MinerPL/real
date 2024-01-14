"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007"), n("70102"), n("424973"), n("843762");
var i, r, s, a, o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  c = n("95410"),
  d = n("913144"),
  f = n("190017"),
  E = n("271938"),
  h = n("568307"),
  p = n("677225"),
  _ = n("964889"),
  S = n("152723"),
  m = n("773336"),
  T = n("535974"),
  g = n("49111"),
  I = n("492249");
(s = i || (i = {})).INSTALL = "Install", s.REPAIR = "Repair", (a = r || (r = {})).PATCH = "Patch", a.REPAIR = "Repair";
let C = [I.DispatchErrorCodes.AUTHENTICATION_FAILED, I.DispatchErrorCodes.NOT_ENTITLED],
  v = "DispatchManagerStore",
  A = [],
  R = [],
  N = !1,
  O = null,
  D = null,
  y = !1,
  P = new Map,
  L = !1,
  b = null;

function M() {
  let e = {
    queue: A,
    paused: N,
    userActions: Array.from(P)
  };
  c.default.set(v, e)
}

function U() {
  let e = A[0];
  if (null != e) {
    var t, n;
    let {
      comboId: i,
      action: r
    } = e, {
      applicationId: s,
      branchId: a
    } = (0, _.convertComboId)(i);
    if (t = s, n = a, (null == O || O.applicationId !== t || O.branchId !== n) && (null == D || D.applicationId !== t || D.branchId !== n)) {
      let e = E.default.getToken(),
        t = E.default.getId();
      if (null == e) throw Error("missing user token");
      L = !S.default.setCurrentTask(s, a, r, t, e)
    }
  }
}

function G(e, t) {
  let n = (0, _.getComboId)(e, t);
  return A.findIndex(e => e.comboId === n)
}

function w(e, t, n, i) {
  let r = (0, _.getComboId)(e, t),
    s = {
      comboId: r,
      action: i
    },
    a = R.indexOf(r); - 1 !== a && R.splice(a, 1);
  let o = G(e, t);
  0 !== o && (n ? -1 === o && (A.push(s), U()) : (o > 0 && A.splice(o, 1), A.unshift(s), U())), !n && N && S.default.resume(), M()
}

function k(e, t) {
  let n = (0, _.getComboId)(e, t),
    i = R.indexOf(n); - 1 !== i && R.splice(i, 1);
  let r = G(e, t); - 1 !== r && (A.splice(r, 1), M()), U()
}

function x(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  k(t, n)
}

function F(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, i = (0, _.getComboId)(t, n), r = R.indexOf(i); - 1 !== r && R.splice(r, 1)
}

function V() {
  let e = E.default.getToken(),
    t = E.default.getId();
  null != e && S.default.setCredentials(t, e)
}

function B() {
  for (let e of h.default.getRunningDiscordApplicationIds()) f.cancel(e, e);
  let e = h.default.getVisibleGame();
  return !N && null != e && e.pid !== b && f.pause(), b = null == e ? null : e.pid, !1
}
class H extends u.default.Store {
  initialize() {
    var e;
    let t = null !== (e = c.default.get(v)) && void 0 !== e ? e : {
      queue: null,
      paused: null,
      userActions: null
    };
    if (null != t.queue) A = t.queue.map(e => "string" == typeof e ? {
      comboId: e,
      action: "Patch"
    } : e);
    null != t.paused && (N = t.paused), null != t.userActions && (P = new Map(Array.from(t.userActions))), this.waitFor(T.default, h.default), this.syncWith([h.default], B), this.waitFor(T.default)
  }
  get activeItems() {
    return A.map(e => {
      let {
        comboId: t
      } = e;
      return (0, _.convertComboId)(t)
    })
  }
  get finishedItems() {
    return R.map(_.convertComboId)
  }
  get paused() {
    return N
  }
  getQueuePosition(e, t) {
    return G(e, t)
  }
  isCorruptInstallation() {
    return L
  }
}
H.displayName = "DispatchManagerStore";
var j = new H(d.default, {
  DISPATCH_APPLICATION_INSTALL: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    P.set((0, _.getComboId)(t, n), "Install"), w(t, n, !1, "Patch")
  },
  DISPATCH_APPLICATION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      automatic: i
    } = e;
    w(t, n, i, "Patch")
  },
  DISPATCH_APPLICATION_UNINSTALL: function(e) {
    x(e), F(e)
  },
  DISPATCH_APPLICATION_CANCEL: x,
  DISPATCH_APPLICATION_REPAIR: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    P.set((0, _.getComboId)(t, n), "Repair"), w(t, n, !1, "Repair")
  },
  DISPATCH_APPLICATION_MOVE_UP: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e, i = G(t, n);
    if (i < 1) return !1;
    A.splice(0, 0, A.splice(i, 1)[0]), U(), N && S.default.resume(), M()
  },
  DISPATCH_APPLICATION_REMOVE_FINISHED: F,
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    !y && (y = !0, U(), !N && S.default.resume());
    let n = N;
    N = t.paused, O = t.currentTask, D = t.nextTask;
    let i = !1;
    A = A.filter(e => {
      let {
        comboId: t
      } = e, {
        applicationId: n,
        branchId: r
      } = (0, _.convertComboId)(t), s = T.default.getState(n, r), a = p.default.getTargetBuildId(n, r), o = p.default.getTargetManifests(n, r);
      if (null != s && s.type === g.LocalDispatchApplicationStates.UP_TO_DATE && s.buildId === s.targetBuildId && s.buildId === a && l.isEqual(s.manifestIds, s.targetManifestIds) && l.isEqual(s.manifestIds, o)) {
        if (R.push(t), P.has(t)) {
          let e = P.get(t);
          switch (e) {
            case "Install":
              f.completeInstall(n, s);
              break;
            case "Repair":
              f.completeRepair(n, s)
          }
          P.delete(t)
        }
        return i = !0, !1
      }
      return !0
    }), U(), (i || n !== N) && M()
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e, {
      code: n
    } = t;
    if (null != n) {
      if (C.includes(n)) V();
      else if (n === I.DispatchErrorCodes.APPLICATION_NOT_FOUND) {
        let {
          context: e
        } = t;
        if (null != e) {
          let {
            application_id: t,
            branch_id: n
          } = e;
          k(t, n)
        }
      }
    }
  },
  CONNECTION_OPEN: function() {
    (0, m.isDesktop)() && V()
  },
  LOGOUT: function() {
    c.default.remove(v), (0, m.isDesktop)() && S.default.pause()
  }
})