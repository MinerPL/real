"use strict";
a.r(t), a.d(t, {
  useShowAnimation: function() {
    return l
  }
}), a("222007");
var s = a("884691"),
  n = a("907002");

function l(e) {
  let [t, a] = s.useState(!0), l = (0, n.useTransition)(t, {
    keys: e => e ? "shown" : "hidden",
    config: r,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    unique: !0,
    immediate: e
  });
  return {
    transitions: l,
    setVisible: a
  }
}
let r = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: !0
}