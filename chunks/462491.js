"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("49671"),
  r = s("386045"),
  o = s("803725"),
  d = s("119052"),
  u = s("49111"),
  c = s("782340"),
  S = s("180437");

function E() {
  let e = (0, n.useStateFromStores)([r.default], () => r.default.getSettings().storageLocation);
  return (0, a.jsx)(l.FormSection, {
    children: (0, a.jsx)(d.TextInputItem, {
      className: S.formItem,
      title: c.default.Messages.CLIPS_SETTINGS_STORAGE_LOCATION,
      note: c.default.Messages.CLIPS_SETTINGS_STORAGE_LOCATION_HELP,
      value: e,
      editable: !1,
      onClick: async () => {
        let e = await i.default.fileManager.showOpenDialog({
          properties: ["openDirectory", "createDirectory"]
        });
        e.length > 0 && o.updateClipsStorageLocation(e[0])
      },
      onChange: u.NOOP_NULL
    })
  })
}