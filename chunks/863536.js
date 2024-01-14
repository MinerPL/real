"use strict";
n.r(t), n.d(t, {
  CREATE_DM_GROUP: function() {
    return u
  }
});
var i = n("722525"),
  o = n("162771"),
  l = n("659500"),
  a = n("49111");
let u = {
  binds: ["mod+shift+t"],
  comboKeysBindGlobal: !0,
  action: () => (null != o.default.getGuildId() && (0, i.transitionToChannel)(a.ME), l.ComponentDispatch.safeDispatch(a.ComponentActions.TOGGLE_DM_CREATE), !1)
}