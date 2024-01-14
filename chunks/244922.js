"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var a = n("446674"),
  s = n("305961"),
  i = n("49111");

function l() {
  return (0, a.useStateFromStores)([s.default], () => {
    let e = s.default.getGuilds();
    return Object.entries(e).filter(e => {
      let [t, n] = e;
      return n.hasFeature(i.GuildFeatures.HUB)
    }).map(e => {
      let [t, n] = e;
      return n
    })
  })
}