"use strict";
n.r(t), n.d(t, {
  SETTINGS_LAYERS_LAYOUT: function() {
    return d
  }
});
var l = n("118810"),
  a = n("77078"),
  s = n("244201"),
  i = n("144747"),
  r = n("659500"),
  o = n("202035"),
  u = n("49111");
let d = {
  POP_LAYER: {
    binds: ["esc"],
    comboKeysBindGlobal: !0,
    action(e) {
      if ((0, a.isInDndMode)()) return !1;
      if (r.ComponentDispatch.hasSubscribers(u.ComponentActions.CALL_DECLINE)) return r.ComponentDispatch.dispatch(u.ComponentActions.CALL_DECLINE), !1;
      if (i.default.close()) return !1;
      if ((0, l.isElement)(e.target)) {
        let t = (0, s.getWindowDispatchForElement)(e.target);
        if (null == t ? void 0 : t.hasSubscribers(u.ComponentActions.POPOUT_CLOSE)) return t.dispatch(u.ComponentActions.POPOUT_CLOSE), !1
      }
      if (r.ComponentDispatch.hasSubscribers(u.ComponentActions.MODAL_CLOSE)) return r.ComponentDispatch.dispatch(u.ComponentActions.MODAL_CLOSE), !1;
      r.ComponentDispatch.dispatch(u.ComponentActions.LAYER_POP_ESCAPE_KEY)
    }
  },
  ...o.default
}