"use strict";
n.r(t), n.d(t, {
  useRegisterAccessibilityChecks: function() {
    return d
  },
  useUniqueAccessibilityViolations: function() {
    return f
  }
}), n("222007"), n("424973");
var r = n("884691"),
  i = n("308503"),
  a = n("260018"),
  l = n("599110"),
  s = n("696316"),
  u = n("49111");
let o = new a.default("a11y_violations"),
  c = (0, i.default)(() => ({
    check: null
  }));

function d(e) {
  let t = (0, r.useCallback)(e => {
    var t;
    e.hash !== (null === (t = c.getState().check) || void 0 === t ? void 0 : t.hash) && (c.setState({
      check: e
    }), ! function(e) {
      for (let [t, n] of e.entries())
        for (let e of n.instances.values())
          for (let {
              trace: n,
              hash: r
            }
            of e) {
            let e = JSON.stringify(r);
            o.has(e) || (o.add(e), l.default.track(u.AnalyticEvents.A11Y_RUNTIME_VIOLATION, {
              rule_id: t,
              trace: n.join("\n"),
              hash: r
            }))
          }
    }(e.violations))
  }, []);
  (0, s.useAccessibilityChecker)(e, t)
}

function f() {
  let e = c(e => {
    var t, n;
    return null !== (n = null === (t = e.check) || void 0 === t ? void 0 : t.violations) && void 0 !== n ? n : null
  });
  return function(e) {
    if (null == e) return [];
    let t = [];
    for (let {
        instances: n,
        rule: r
      }
      of e.values())
      for (let [e, i] of n.entries()) {
        let n = i.map(e => e.element),
          a = i[0].message;
        t.push({
          key: e,
          title: r.metadata.description,
          description: r.metadata.help,
          id: r.id,
          tags: r.tags,
          elements: n,
          message: a
        })
      }
    return t
  }(e)
}