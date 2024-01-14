"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("446674"),
  a = n("77078"),
  s = n("52289"),
  l = n("102985"),
  i = n("782340");

function o() {
  let e = (0, r.useStateFromStores)([l.default], () => l.default.enabled, []);
  return (0, u.jsx)(a.MenuCheckboxItem, {
    id: "streamer-mode-toggle",
    label: i.default.Messages.ENABLE_STREAMER_MODE_LABEL,
    action: () => {
      s.default.setEnabled(!e)
    },
    checked: e
  })
}