"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("884691");
let a = !1,
  s = new Set;

function i(e) {
  e !== a && (a = e, s.forEach(e => e(a)))
}

function r() {
  let [e, t] = l.useState(a);
  return l.useEffect(() => {
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