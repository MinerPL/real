"use strict";
n.r(t), n.d(t, {
  useSwitch: function() {
    return o
  }
});
var r = n("814842");

function o(e, t, n) {
  let {
    inputProps: o,
    isSelected: a,
    isPressed: i,
    isDisabled: s,
    isReadOnly: c
  } = (0, r.useToggle)(e, t, n);
  return {
    inputProps: {
      ...o,
      role: "switch",
      checked: a
    },
    isSelected: a,
    isPressed: i,
    isDisabled: s,
    isReadOnly: c
  }
}