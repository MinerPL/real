"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("913144"),
  i = n("316272"),
  r = n("493814"),
  o = n("218484");
let u = "INVITE_MODAL_KEY";
class d extends i.default {
  _initialize() {
    s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, a.closeModal)(u), s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal() {
    o.default.isOpen() && !(0, a.hasModalOpen)(u) && (0, a.openModal)(e => (0, l.jsx)(r.default, {
      ...e
    }), {
      modalKey: u,
      onCloseRequest: () => s.default.dispatch({
        type: "INVITE_MODAL_CLOSE"
      })
    })
  }
  handleCloseModal() {
    (0, a.closeModal)(u)
  }
}
var c = new d