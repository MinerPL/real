"use strict";
n.r(t), n.d(t, {
  useActionsForDisplayType: function() {
    return l
  },
  useActionTotalsForDisplayType: function() {
    return r
  },
  useHasActionForAnyDisplayType: function() {
    return o
  }
});
var a = n("65597"),
  s = n("822825"),
  i = n("922832");

function l(e) {
  let t = (0, a.useStateFromStoresArray)([s.default], () => s.default.getActionsForDisplayType(e));
  return t
}

function r(e) {
  return (0, a.default)([s.default], () => s.default.getTotalForDisplayType(e))
}

function o() {
  return (0, a.default)([s.default], () => Object.values(i.TeenActionDisplayType).some(e => {
    let t = s.default.getTotalForDisplayType(e);
    return t > 0
  }))
}