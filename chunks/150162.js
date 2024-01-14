"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("969176"),
  i = l.n(s),
  o = l("907002"),
  d = l("458960"),
  C = l("669491"),
  r = l("77078"),
  u = l("84339");
let c = {
    duration: 100,
    easing: d.default.Easing.inOut(d.default.Easing.back()),
    clamp: !0
  },
  f = {
    duration: 2e3,
    easing: d.default.Easing.quad,
    clamp: !0
  };

function m(e) {
  let {
    value: t,
    children: l,
    equalityFn: s = i,
    style: d,
    ...m
  } = e, E = (0, u.default)(t), [{
    spring: M
  }, h] = (0, o.useSpring)(() => ({
    spring: 0
  })), T = (0, r.useToken)(C.default.colors.BACKGROUND_PRIMARY).hex(), x = (0, r.useToken)(C.default.colors.CONTROL_BRAND_FOREGROUND).hex(), H = n.useCallback(() => {
    h({
      spring: 1,
      config: c
    }), h({
      spring: 0,
      config: f,
      delay: 300
    })
  }, [h]);
  n.useEffect(() => {
    if (null != t && null != E) !s(t, E) && H()
  }, [H, t, E, s]);
  let _ = null == M ? void 0 : M.to({
      range: [0, 1],
      output: ["".concat(T, "00"), "".concat(x, "27")]
    }),
    A = null != d ? {
      ...d,
      backgroundColor: _
    } : {
      backgroundColor: _
    };
  return (0, a.jsx)(o.animated.tr, {
    ...m,
    style: A,
    children: l
  })
}