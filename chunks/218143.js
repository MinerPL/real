"use strict";
n.r(t), n.d(t, {
  FOCUS_SEARCH: function() {
    return l
  }
});
var i = n("659500"),
  o = n("49111");
let l = {
  binds: ["mod+f"],
  comboKeysBindGlobal: !0,
  action(e) {
    e.preventDefault(), e.stopPropagation(), i.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_SEARCH, {
      prefillCurrentChannel: !0
    })
  }
}