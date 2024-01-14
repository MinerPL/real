"use strict";
n.r(t), n.d(t, {
  TOGGLE_INBOX_UNREADS_TAB: function() {
    return u
  },
  MARK_TOP_INBOX_CHANNEL_READ: function() {
    return d
  }
});
var i = n("917351"),
  o = n.n(i),
  l = n("659500"),
  a = n("49111");
let u = {
    binds: ["mod+i"],
    comboKeysBindGlobal: !0,
    action: () => (l.ComponentDispatch.dispatch(a.ComponentActions.TOGGLE_INBOX_UNREADS_TAB), !1)
  },
  d = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o.debounce(() => {
      if (l.ComponentDispatch.hasSubscribers(a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ)) return l.ComponentDispatch.dispatch(a.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ), !1
    }, 100, {
      leading: !0
    })
  }