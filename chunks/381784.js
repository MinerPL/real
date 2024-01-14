"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("808653");
var l = n("884691"),
  i = n("369010"),
  r = n("342564"),
  o = n("938767");

function s(e) {
  let {
    channel: t,
    commands: n,
    limit: s = n.length
  } = e, a = (0, o.useCommandContext)(t), u = (0, i.useTopCommands)(a), d = l.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]), c = l.useMemo(() => u.map(e => d[e]).filter(e => null != e).sort((e, t) => {
    let n = r.default.getScoreWithoutLoadingLatest(a, e),
      l = r.default.getScoreWithoutLoadingLatest(a, t);
    return l - n
  }).slice(0, s), [u, d, a, s]);
  return c
}