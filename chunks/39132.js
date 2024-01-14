"use strict";
n.r(t), n.d(t, {
  useLink: function() {
    return i
  }
});
var r = n("290895"),
  o = n("780095"),
  a = n("495912");

function i(e, t) {
  let {
    elementType: n = "a",
    onPress: i,
    onPressStart: s,
    onPressEnd: c,
    onClick: l,
    isDisabled: u,
    ...d
  } = e, p = {};
  "a" !== n && (p = {
    role: "link",
    tabIndex: u ? void 0 : 0
  });
  let {
    focusableProps: f
  } = (0, o.useFocusable)(e, t), {
    pressProps: m,
    isPressed: h
  } = (0, a.usePress)({
    onPress: i,
    onPressStart: s,
    onPressEnd: c,
    isDisabled: u,
    ref: t
  }), g = (0, r.filterDOMProps)(d, {
    labelable: !0
  }), v = (0, r.mergeProps)(f, m);
  return {
    isPressed: h,
    linkProps: (0, r.mergeProps)(g, {
      ...v,
      ...p,
      "aria-disabled": u || void 0,
      "aria-current": e["aria-current"],
      onClick: e => {
        var t;
        null === (t = m.onClick) || void 0 === t || t.call(m, e), l && (l(e), console.warn("onClick is deprecated, please use onPress"))
      }
    })
  }
}