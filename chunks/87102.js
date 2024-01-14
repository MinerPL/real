"use strict";
t.r(l), t.d(l, {
  default: function() {
    return x
  }
});
var s = t("37983");
t("884691");
var a = t("77078"),
  n = t("446674"),
  i = t("272030"),
  r = t("817963"),
  o = t("305961"),
  c = t("957255"),
  d = t("677099"),
  u = t("697218"),
  f = t("195812"),
  h = t("754576"),
  v = t("228220"),
  p = t("782340");

function x(e) {
  let {
    onExportToFile: l,
    onExportToSoundboard: t,
    onDelete: x
  } = e, g = (0, n.useStateFromStores)([d.default, c.default, u.default, o.default], () => d.default.getFlattenedGuildIds().some(e => {
    let l = o.default.getGuild(e);
    if (null == l) return !1;
    let t = (0, r.getManageResourcePermissions)(l, c.default, u.default);
    return t.canCreateExpressions
  }));
  return (0, s.jsxs)(a.Menu, {
    navId: "clips-more-options",
    "aria-label": p.default.Messages.MORE_OPTIONS,
    onClose: i.closeContextMenu,
    onSelect: i.closeContextMenu,
    children: [g ? (0, s.jsx)(a.MenuItem, {
      icon: h.default,
      id: "clips-export-soundboard",
      label: p.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
      action: t
    }) : null, (0, s.jsx)(a.MenuItem, {
      icon: f.default,
      id: "clips-export-file",
      label: p.default.Messages.CLIPS_EXPORT_TO_FILE,
      action: l
    }), (0, s.jsx)(a.MenuItem, {
      icon: v.default,
      id: "clips-delete",
      label: p.default.Messages.DELETE,
      color: "danger",
      action: x
    })]
  })
}