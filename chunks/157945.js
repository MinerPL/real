"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("884691"),
  a = n("917351"),
  u = n("446674"),
  i = n("827560"),
  o = n("244201"),
  s = n("206230"),
  r = n("659500"),
  d = n("49111");
let c = (0, a.debounce)(e => {
  setTimeout(() => {
    var t;
    null === (t = e.current) || void 0 === t || t.focus()
  }, 0)
}, 50);

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
    a = (0, u.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
    f = (0, i.default)(),
    [E, p] = l.useState(!1),
    m = (0, o.useWindowDispatch)();
  return l.useEffect(() => {
    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

    function e() {
      f && (m.dispatch(d.ComponentActions.POPOUT_CLOSE), r.ComponentDispatch.dispatch(d.ComponentActions.CONTEXT_MENU_CLOSE))
    }
  }, [n, f, t, m]), l.useEffect(() => {
    var l, u, i;
    if (a || !E || !t) return;
    let o = f;

    function s(t) {
      let n = t.relatedTarget;
      setTimeout(() => {
        (null == n || "BUTTON" === n.tagName) && !o && c(e)
      }, 100)
    }
    return null === (l = e.current) || void 0 === l || l.addEventListener("focusout", s), (null === (u = n.document.activeElement) || void 0 === u ? void 0 : u.tagName) !== "IFRAME" && !o && (null === (i = e.current) || void 0 === i || i.focus()), () => {
      var t;
      null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", s), o = !0
    }
  }, [t, E, a, e, n, f]), p
}