"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("884691");
let l = !1,
  s = new Set;

function i(e) {
  e !== l && (l = e, s.forEach(e => e(l)))
}

function r() {
  let [e, t] = a.useState(l);
  return a.useEffect(() => {
    let e = e => {
      t(e)
    };
    return s.add(e), () => {
      s.delete(e)
    }
  }, []), e
}
window.addEventListener("keydown", e => {
  i(e.shiftKey)
}), window.addEventListener("keyup", e => {
  i(e.shiftKey)
}), window.addEventListener("mousemove", e => {
  i(e.shiftKey)
}), window.addEventListener("blur", () => {
  i(!1)
})