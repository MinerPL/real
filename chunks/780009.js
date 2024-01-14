"use strict";
l.r(e), l.d(e, {
  playApplication: function() {
    return a.playApplication
  },
  installApplication: function() {
    return p
  },
  updateApplication: function() {
    return f
  },
  repairApplication: function() {
    return C
  },
  performDefaultLibraryApplicationAction: function() {
    return h
  }
});
var n = l("190017"),
  a = l("596169"),
  i = l("299285"),
  s = l("677225"),
  o = l("9377"),
  u = l("535974"),
  c = l("352326"),
  r = l("551994"),
  d = l("49111");

function p(t, e, l) {
  let n = i.default.getApplication(t);
  if (null == n) return;
  let a = s.default.getTargetBuildId(n.id, e),
    o = s.default.getTargetManifests(n.id, e);
  null != a && null != o && null != r.installApplication && (0, r.installApplication)(n, e, a, o, l)
}

function f(t, e) {
  let l = i.default.getApplication(t);
  if (null != l) return n.updateApplication(l, e, s.default.getTargetBuildId(l.id, e), s.default.getTargetManifests(l.id, e))
}

function C(t, e, l) {
  let a = i.default.getApplication(t);
  if (null != a) return n.repairApplication(a, e, l)
}

function h(t, e) {
  let l = (0, o.getDefaultLibraryApplicationAction)(t, u.default, c.default),
    {
      analyticsParams: n
    } = e;
  switch (l) {
    case d.LibraryApplicationActions.PLAY:
      return (0, a.playApplication)(t.id, t, {
        analyticsParams: n
      });
    case d.LibraryApplicationActions.INSTALL:
      return p(t.id, t.branchId, n.source);
    case d.LibraryApplicationActions.UPDATE:
      return f(t.id, t.branchId)
  }
}