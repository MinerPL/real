"use strict";
n.r(t), n.d(t, {
  getFlattenedChannels: function() {
    return r
  },
  useFlattenedChannels: function() {
    return o
  }
}), n("222007"), n("424973");
var a = n("917351"),
  l = n.n(a),
  i = n("446674"),
  d = n("42203"),
  s = n("449008");

function r(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = l(d.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
    r = l(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(s.isNotNullish).uniq().map(e => d.default.getChannel(e)).filter(s.isNotNullish).sortBy("position").value(),
    o = new Set(r.map(e => e.id)),
    u = n.filter(e => !e.isCategory() && (null == e.parent_id || !o.has(e.parent_id)));
  for (let e of (u = l.sortBy(u, e => e.isGuildVocal() ? e.position + 1e4 : e.position), r)) {
    !a && u.push(e);
    let d = t.has(e.id) ? i[e.id] : n.filter(t => t.parent_id === e.id);
    d = l.sortBy(null != d ? d : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), u.push(...d)
  }
  return u
}

function o(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = (0, i.useStateFromStoresArray)([d.default], () => {
      let a = Array.from(t).map(e => d.default.getChannel(e)).filter(s.isNotNullish);
      return r(e, t, a, n)
    });
  return a
}