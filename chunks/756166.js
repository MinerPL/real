"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("884691"),
  l = () => {
    let e = a.useRef(!0);
    a.useEffect(() => () => {
      e.current = !1
    }, []);
    let t = a.useCallback(() => e.current, []);
    return t
  }