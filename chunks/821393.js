"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("808653"), n("222007"), n("424973");
var i = n("884691"),
  l = n("446674"),
  r = n("398604"),
  s = n("745049");

function a(e, t) {
  let n = (0, l.useStateFromStoresArray)([r.default], () => Object.values(r.default.getUsersForGuildEvent(e, null)), [e]),
    a = (0, l.useStateFromStoresArray)([r.default], () => Object.values(r.default.getUsersForGuildEvent(e, t)), [e, t]),
    o = (0, i.useMemo)(() => {
      let e = a.reduce((e, t) => (e[t.user_id] = t, e), {}),
        t = n.filter(t => {
          let n = e[t.user_id];
          return null == n || n.response === s.GuildScheduledEventUserResponses.INTERESTED
        }),
        i = a.filter(e => e.response === s.GuildScheduledEventUserResponses.INTERESTED),
        l = new Set,
        r = [],
        o = e => {
          !l.has(e.user_id) && (r.push(e), l.add(e.user_id))
        };
      return t.forEach(o), i.forEach(o), r
    }, [n, a]);
  return o
}