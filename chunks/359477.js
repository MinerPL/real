"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("913144"),
  i = n("316272"),
  r = n("104589"),
  o = n("116460"),
  u = n("567593");
let d = "QUICK_SWITCHER_MODAL_KEY";
class c extends i.default {
  _initialize() {
    s.default.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.default.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  _terminate() {
    s.default.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.default.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  handleShow() {
    o.default.isOpen() && !(0, a.hasModalOpen)(d) && (0, a.openModal)(e => (0, l.jsx)(u.default, {
      ...e
    }), {
      modalKey: d,
      instant: !0,
      onCloseCallback: r.hide
    })
  }
  handleHide() {
    (0, a.closeModal)(d)
  }
}
var f = new c