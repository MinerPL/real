"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("168973"),
  l = n("599110"),
  r = n("773336"),
  o = n("50885"),
  u = n("984497"),
  d = n("49111");
let c = "activity-hardware-acceleration-modal";

function E(e) {
  let t = !i.default.disableActivityHardwareAccelerationPrompt;
  t && r.isPlatformEmbedded && !o.default.getEnableHardwareAcceleration() && (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("984497").then(n.bind(n, "984497"));
    return n => (0, a.jsx)(t, {
      applicationId: e,
      ...n
    })
  }, {
    modalKey: c,
    onCloseRequest: () => {
      l.default.track(d.AnalyticEvents.MODAL_DISMISSED, {
        type: u.ACTIVITY_ENCOURAGES_HW_ACCELERATION
      }), (0, s.closeModal)(c)
    }
  })
}