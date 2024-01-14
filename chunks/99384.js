"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var l = a("65597"),
  n = a("42203"),
  s = a("698882");

function i(e) {
  return (0, l.useStateFromStoresArray)([s.default, n.default], () => {
    let t = s.default.getResourceChannels(e);
    return t.filter(e => null != n.default.getChannel(e.channelId))
  })
}