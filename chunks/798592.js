"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("884691"),
  s = n("65597"),
  r = n("526887"),
  l = n("880731");

function a() {
  let {
    createMultipleConfettiAt: e
  } = i.useContext(r.ConfettiCannonContext), t = (0, s.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 7,
      maxValue: e.confettiSize + 7
    }
  }), []), a = i.useMemo(() => ({
    fire: (i, s, r) => {
      var l, a;
      let u = (null == r ? void 0 : r.settings) != null ? {
          ...t,
          ...r.settings
        } : t,
        o = n(u);
      e(i, s, o, (null !== (l = null == r ? void 0 : r.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == r ? void 0 : r.countMultiplier) && void 0 !== a ? a : 1), {
        sprite: null == r ? void 0 : r.sprite
      })
    }
  }), [e, n, t]);
  return a
}