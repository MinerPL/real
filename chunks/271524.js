"use strict";
n.r(t), n.d(t, {
  SERVER_NEXT: function() {
    return o
  },
  SERVER_PREV: function() {
    return l
  }
});
var i = n("903147");
let o = {
    binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
    comboKeysBindGlobal: !0,
    action: e => (e.preventDefault(), e.stopPropagation(), (0, i.default)(), !1)
  },
  l = {
    binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
    comboKeysBindGlobal: !0,
    action: e => (e.preventDefault(), e.stopPropagation(), (0, i.default)(-1), !1)
  }