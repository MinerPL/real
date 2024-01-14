"use strict";
n.r(t), n.d(t, {
  SEARCH_STICKERS: function() {
    return l
  }
});
var i = n("659500"),
  o = n("49111");
let l = {
  binds: ["mod+s"],
  comboKeysBindGlobal: !0,
  action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.TOGGLE_STICKER_PICKER), !1)
}