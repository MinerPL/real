"use strict";
n.r(t), n.d(t, {
  HeadingLevel: function() {
    return o
  },
  H: function() {
    return s
  },
  usePrivateHeadingLevel: function() {
    return a
  }
}), n("222007");
var i = n("37983"),
  r = n("884691");

function o(e) {
  let {
    component: t,
    children: n,
    forceLevel: o
  } = e, s = r.useContext(l), [a, u] = r.useState(null != t), c = 1, d = 1;
  null != o ? null != t ? (c = o, d = o + 1) : d = o : null != t ? (c = s.level, d = s.level + 1) : d = s.level + (a ? 1 : 0);
  let _ = r.useCallback(() => (u(!0), c), [c]),
    f = r.useCallback(() => (u(!0), d), [d]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != t ? (0, i.jsx)(l.Provider, {
      value: {
        level: c,
        getLevelAndMarkUsed: _
      },
      children: t
    }) : null, (0, i.jsx)(l.Provider, {
      value: {
        level: d,
        getLevelAndMarkUsed: f
      },
      children: n
    })]
  })
}

function s(e) {
  let t = a(),
    n = "h".concat(Math.min(t, 6));
  return (0, i.jsx)(n, {
    ...t > 6 ? {
      "data-excessive-heading-level": t
    } : {},
    ...e
  })
}
let l = r.createContext({
  getLevelAndMarkUsed: () => 2,
  level: 2
});

function a() {
  let {
    getLevelAndMarkUsed: e
  } = r.useContext(l);
  return e()
}
l.displayName = "HeadingLevelContext"