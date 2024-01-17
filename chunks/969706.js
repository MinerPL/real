"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var s = n("884691"),
  l = n("659500"),
  a = n("49111");

function i(e) {
  return Object.keys(e).some(t => e[t])
}

function r(e, t) {
  let [n, r] = s.useState(t), [o, u] = s.useState(i(n)), d = s.useRef(o), c = s.useRef(null), f = s.useCallback(e => {
    r(t => {
      let n = {
          ...t,
          ...e
        },
        s = i(n);
      return s !== d.current && (d.current = s, null != c.current && (cancelAnimationFrame(c.current), c.current = null), s ? u(!0) : c.current = requestAnimationFrame(() => u(!1))), n
    })
  }, []);
  return s.useEffect(() => {
    let t = e => {
      let {
        emojiPicker: t,
        emojiBurstPicker: n
      } = e;
      return f({
        emojiPicker: t,
        emojiBurstPicker: n
      })
    };
    return l.ComponentDispatch.subscribeKeyed(a.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e, t), () => void l.ComponentDispatch.unsubscribeKeyed(a.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e, t)
  }, [e, f]), {
    popouts: n,
    setPopout: f,
    selected: o
  }
}