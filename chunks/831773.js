"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("913144"),
  i = n("316272"),
  r = n("817252"),
  o = n("386867");
class u extends i.default {
  _initialize() {
    s.default.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.default.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  _terminate() {
    s.default.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.default.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  showKeyboardShortcuts() {
    (0, a.openModal)(e => (0, l.jsx)(r.default, {
      ...e
    }), {
      modalKey: o.KEYBOARD_SHORTCUT_MODAL_KEY
    })
  }
  hideKeyboardShortcuts() {
    (0, a.closeModal)(o.KEYBOARD_SHORTCUT_MODAL_KEY)
  }
}
var d = new u