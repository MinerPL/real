"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("42887"),
  i = n("353927"),
  l = n("782340");

function u(e) {
  s.default.supports(i.Features.VIDEO) ? (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("861054").then(n.bind(n, "861054"));
    return n => (0, a.jsx)(t, {
      ...n,
      header: l.default.Messages.CAMERA_UNAVAILABLE,
      body: l.default.Messages.CAMERA_NO_DEVICE,
      confirmText: l.default.Messages.OKAY,
      onConfirm: e
    })
  }) : (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("861054").then(n.bind(n, "861054"));
    return s => (0, a.jsx)(t, {
      ...s,
      header: l.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
      body: l.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
      confirmText: l.default.Messages.DOWNLOAD_APP,
      onConfirm: () => {
        null == e || e(), (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("649486").then(n.bind(n, "649486"));
          return t => (0, a.jsx)(e, {
            source: "Video unsupported browser",
            ...t
          })
        })
      }
    })
  })
}