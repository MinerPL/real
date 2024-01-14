"use strict";
n.r(t), n.d(t, {
  SCROLL_UP: function() {
    return l
  },
  SCROLL_DOWN: function() {
    return a
  }
});
var i = n("659500"),
  o = n("49111");
let l = {
    binds: ["pageup"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.SCROLL_PAGE_UP), !1)
  },
  a = {
    binds: ["pagedown"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.SCROLL_PAGE_DOWN), !1)
  }