"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
}), i("808653"), i("424973");
var n = i("446674"),
  l = i("42203"),
  s = i("957255"),
  a = i("449008"),
  r = i("923510"),
  o = i("834052");

function u(e) {
  let t = (0, n.useStateFromStoresArray)([o.default], () => Object.keys(o.default.getStageInstancesByGuild(e)), [e]);
  return function(e) {
    let t = (0, n.useStateFromStoresArray)([l.default], () => e.map(e => l.default.getChannel(e)).filter(a.isNotNullish), [e]);
    return (0, n.useStateFromStoresArray)([s.default], () => t.filter(e => s.default.can(r.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)), [t])
  }(t)
}