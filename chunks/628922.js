"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var a = n("884691"),
  r = n("244201"),
  s = n("49111");
let i = ["Shift", "Alt", "Meta", "Control"];

function l(e, t) {
  let [n, l] = a.useState(0), u = (0, r.useWindowDispatch)();
  a.useEffect(() => {
    let e = () => l(e => e + 1),
      t = () => l(e => Math.max(0, e - 1));
    return u.subscribe(s.ComponentActions.POPOUT_SHOW, e), u.subscribe(s.ComponentActions.POPOUT_HIDE, t), () => {
      u.unsubscribe(s.ComponentActions.POPOUT_SHOW, e), u.unsubscribe(s.ComponentActions.POPOUT_HIDE, t)
    }
  }, [u]);
  let [o, d] = a.useState(!1);
  return a.useLayoutEffect(() => {
    let a = e => {
        if ((!t || n > 0) && o) {
          d(!1);
          return
        }!(!o && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || i.indexOf(e.key) >= 0)) && d(e => !e)
      },
      r = o ? "keyup" : "mousemove";
    return t && e.addEventListener(r, a), () => null == e ? void 0 : e.removeEventListener(r, a)
  }, [e, o, n, t]), t && 0 === n && o
}