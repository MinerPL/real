"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("884691");

function u(e, t) {
  let n = r.useRef(e);
  return r.useEffect(() => {
    function e(e) {
      null != n.current && !n.current.contains(e.target) && t()
    }
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [n, t]), n
}