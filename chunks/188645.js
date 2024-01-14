"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("884691"),
  i = r("890503"),
  u = r("784410"),
  l = (e, t) => {
    let r = (0, i.default)("profile_effect_debug_controls"),
      {
        id: l,
        preset: o,
        increment: a,
        decrement: s
      } = (0, u.default)(e);
    return n.useEffect(() => {
      if (!r) return;
      let e = e => {
        "ArrowUp" === e.key && (a(), e.preventDefault()), "ArrowDown" === e.key && (s(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
      };
      return window.addEventListener("keydown", e), () => {
        window.removeEventListener("keydown", e)
      }
    }, []), {
      id: null != l ? l : null,
      preset: o
    }
  }