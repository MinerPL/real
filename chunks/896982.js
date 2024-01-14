"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("37983");
l("884691");
var n = l("446674"),
  u = l("77078"),
  d = l("272030"),
  i = l("851387"),
  s = l("383173"),
  o = l("677099"),
  r = l("542827"),
  c = l("734134"),
  f = l("49111"),
  m = l("782340");

function E(e) {
  var t;
  let {
    folderId: E,
    folderName: _,
    folderColor: M,
    unread: b,
    onSelect: p
  } = e, S = (0, n.useStateFromStores)([o.default], () => o.default.getGuildFolderById(E), [E]), L = (0, c.default)(null !== (t = null == S ? void 0 : S.guildIds) && void 0 !== t ? t : []), g = (0, n.useStateFromStores)([s.default], () => s.default.getExpandedFolders().size > 0);
  return (0, a.jsxs)(u.Menu, {
    navId: "guild-context",
    "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onClose: d.closeContextMenu,
    onSelect: p,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "mark-folder-read",
        label: m.default.Messages.SERVER_FOLDER_MARK_AS_READ,
        action: function() {
          if (null == S) return;
          let {
            guildIds: e
          } = S;
          (0, r.default)(e, f.AnalyticsSections.GUILD_LIST)
        },
        disabled: !b
      })
    }), null != L ? (0, a.jsx)(u.MenuGroup, {
      children: L
    }) : null, (0, a.jsxs)(u.MenuGroup, {
      children: [(0, a.jsx)(u.MenuItem, {
        id: "folder-settings",
        label: m.default.Messages.SERVER_FOLDER_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await l.el("892262").then(l.bind(l, "892262"));
          return t => (0, a.jsx)(e, {
            ...t,
            folderId: E,
            folderName: _,
            folderColor: M
          })
        })
      }), g && (0, a.jsx)(u.MenuItem, {
        id: "folder-collapse",
        label: m.default.Messages.SERVER_FOLDER_COLLAPSE_ALL,
        action: () => i.default.collapseAllFolders()
      })]
    })]
  })
}