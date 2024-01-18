"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("884691"),
  s = n("65597"),
  l = n("526887"),
  r = n("880731");

function a() {
  let {
    createMultipleConfettiAt: e
  } = i.useContext(l.ConfettiCannonContext), t = (0, s.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 7,
      maxValue: e.confettiSize + 7
    }
  }), []), a = i.useMemo(() => ({
    fire: (i, s, l) => {
      var r, a;
      let u = (null == l ? void 0 : l.settings) != null ? {
          ...t,
          ...l.settings
        } : t,
        o = n(u);
      e(i, s, o, (null !== (r = null == l ? void 0 : l.count) && void 0 !== r ? r : u.confettiCount) * (null !== (a = null == l ? void 0 : l.countMultiplier) && void 0 !== a ? a : 1), {
        sprite: null == l ? void 0 : l.sprite
      })
    }
  }), [e, n, t]);
  return a
}