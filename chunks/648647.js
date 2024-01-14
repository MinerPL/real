"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("195812"),
  i = n("966270"),
  r = n("782340");
let o = "DOWNLOAD_APPS";

function u() {
  let e = (0, a.useModalsStore)(e => (0, a.hasModalOpenSelector)(e, o));
  return (0, l.jsx)(i.default, {
    id: "app-download-button",
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("649486").then(n.bind(n, "649486"));
        return t => (0, l.jsx)(e, {
          source: "Guilds",
          ...t
        })
      }, {
        modalKey: o
      })
    },
    selected: e,
    tooltip: r.default.Messages.DOWNLOAD_APPS,
    icon: s.default
  })
}