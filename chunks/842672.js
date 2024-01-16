"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("77078"),
  s = n("244201"),
  a = n("558286"),
  l = n("49111");
let u = "guild-event-modal";
var d = () => {
  let e = (0, s.useAppContext)(),
    t = e === l.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: u,
    contextKey: t,
    onCloseRequest: () => {
      a.useGuildEventModalStore.getState().canCloseModal && (0, i.closeModal)(u, t)
    }
  }
}