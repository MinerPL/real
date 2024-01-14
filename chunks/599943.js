"use strict";
t.r(n), t.d(n, {
  default: function() {
    return E
  }
});
var a = t("37983");
t("884691");
var u = t("77078"),
  l = t("272030"),
  s = t("158534"),
  r = t("812204"),
  i = t("861370"),
  d = t("308798"),
  o = t("47006"),
  c = t("878526"),
  f = t("782340"),
  E = (0, s.default)(function(e) {
    let {
      channel: n,
      guild: t,
      onSelect: s
    } = e, r = (0, o.default)(n), E = (0, c.default)(n, t), _ = (0, d.default)(n), I = (0, i.default)({
      id: n.id,
      label: f.default.Messages.COPY_ID_CHANNEL
    });
    return (0, a.jsxs)(u.Menu, {
      navId: "channel-context",
      onClose: l.closeContextMenu,
      "aria-label": f.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
      onSelect: s,
      children: [(0, a.jsx)(u.MenuGroup, {
        children: r
      }), (0, a.jsx)(u.MenuGroup, {
        children: E
      }), (0, a.jsx)(u.MenuGroup, {
        children: _
      }), (0, a.jsx)(u.MenuGroup, {
        children: I
      })]
    })
  }, [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_STORE_CHANNEL_MENU])