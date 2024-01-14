"use strict";
n.r(t), n.d(t, {
  showGuildHeaderPopout: function() {
    return l
  },
  useGuildHeaderPopoutStore: function() {
    return r
  }
});
var a = n("308503");
let s = Object.freeze({
    isPopoutOpen: !1
  }),
  i = (0, a.default)(e => s),
  l = e => {
    i.setState(() => ({
      isPopoutOpen: e
    }))
  },
  r = i