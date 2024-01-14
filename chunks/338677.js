"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("629109"),
  i = n("135230"),
  r = n("723872"),
  o = n("782340");

function u(e, t) {
  if (t && (0, r.isRTCConnectedInHub)()) {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("109253").then(n.bind(n, "109253"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    });
    return
  }
  if (t) {
    (0, l.openModal)(e => (0, a.jsx)(i.default, {
      ...e,
      title: o.default.Messages.SUPPRESSED,
      body: o.default.Messages.SUPPRESSED_PERMISSION_BODY
    }));
    return
  }
  if (e) {
    (0, l.openModal)(e => (0, a.jsx)(i.default, {
      ...e,
      title: o.default.Messages.SERVER_MUTED_DIALOG_TITLE,
      body: o.default.Messages.SERVER_MUTED_DIALOG_BODY
    }));
    return
  }
  s.default.toggleSelfMute()
}