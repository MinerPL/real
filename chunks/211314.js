"use strict";
n.r(t), n.d(t, {
  BROWSER_DEVTOOLS: function() {
    return o
  }
});
var i = n("773336");
let o = {
  binds: ["mod+alt+i"],
  comboKeysBindGlobal: !0,
  action(e) {
    if ((0, i.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1
  }
}