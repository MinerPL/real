"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("917351"),
  l = n("410328"),
  a = (0, s.memoize)(function(e) {
    let {
      theme: t,
      layoutType: n
    } = e;
    return (0, l.buildPlatformPollResources)(t, n)
  }, e => {
    let {
      theme: t,
      layoutType: n
    } = e;
    return "".concat(t, ":").concat(n)
  })