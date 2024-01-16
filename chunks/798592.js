"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("884691"),
  r = n("65597"),
  s = n("526887"),
  l = n("880731");

function a() {
  let {
    createMultipleConfettiAt: e
  } = i.useContext(s.ConfettiCannonContext), t = (0, r.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 7,
      maxValue: e.confettiSize + 7
    }
  }), []), a = i.useMemo(() => ({
    fire: (i, r, s) => {
      var l, a;
      let u = (null == s ? void 0 : s.settings) != null ? {
          ...t,
          ...s.settings
        } : t,
        o = n(u);
      e(i, r, o, (null !== (l = null == s ? void 0 : s.count) && void 0 !== l ? l : u.confettiCount) * (null !== (a = null == s ? void 0 : s.countMultiplier) && void 0 !== a ? a : 1), {
        sprite: null == s ? void 0 : s.sprite
      })
    }
  }), [e, n, t]);
  return a
}