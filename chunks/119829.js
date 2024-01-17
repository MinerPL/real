"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("884691"),
  n = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
      [t, s] = a.useState(!1),
      [n, l] = a.useState(0),
      [i, r] = a.useState(!1),
      [u, o] = a.useState(0);
    return a.useEffect(() => {
      n >= e && (r(!0), o(Math.floor(n / e)));
      let t = setTimeout(() => {
        l(0)
      }, 1e3);
      return () => clearTimeout(t)
    }, [n, e]), a.useEffect(() => {
      if (!t) {
        let e = setTimeout(() => {
          r(!1), o(0)
        }, 1e3);
        return () => clearTimeout(e)
      }
      l(e => e + 1)
    }, [t]), {
      onHover: () => {
        s(!0)
      },
      onUnhover: () => {
        s(!1)
      },
      isEasterEggTriggered: i,
      easterEggLevel: u
    }
  }