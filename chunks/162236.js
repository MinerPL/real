"use strict";
n.r(t), n.d(t, {
  openBroadcastingPrivacySettingsModal: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var r = n("77078");

function s(e, t, s) {
  (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await n.el("725420").then(n.bind(n, "725420"));
    return n => (0, a.jsx)(r, {
      headerText: e,
      buttonCTA: t,
      onSave: s,
      ...n
    })
  })
}