"use strict";
n.r(t), n.d(t, {
  JUMP_TO_CURRENT_CALL: function() {
    return a
  }
});
var i = n("722525"),
  o = n("945956"),
  l = n("49111");
let a = {
  binds: ["mod+shift+alt+v"],
  comboKeysBindGlobal: !0,
  action(e) {
    e.preventDefault(), e.stopPropagation();
    let t = o.default.getGuildId(),
      n = o.default.getChannelId();
    return null != n && (0, i.transitionToChannel)(null != t ? t : l.ME, n), !1
  }
}