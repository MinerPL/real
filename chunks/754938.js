"use strict";
t.r(n), t.d(n, {
  default: function() {
    return I
  }
});
var a = t("37983");
t("884691");
var u = t("77078"),
  l = t("272030"),
  s = t("158534"),
  r = t("812204"),
  i = t("861370"),
  d = t("715243"),
  c = t("963150"),
  o = t("308798"),
  f = t("47006"),
  E = t("878526"),
  _ = t("782340"),
  I = (0, s.default)(function(e) {
    let {
      channel: n,
      guild: t,
      onSelect: s
    } = e, r = (0, f.default)(n), I = (0, E.default)(n, t), N = (0, d.default)(n, t), M = (0, c.default)(n, t), C = (0, o.default)(n), A = (0, i.default)({
      id: n.id,
      label: _.default.Messages.COPY_ID_CHANNEL
    });
    return (0, a.jsxs)(u.Menu, {
      navId: "channel-context",
      onClose: l.closeContextMenu,
      "aria-label": _.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
      onSelect: s,
      children: [(0, a.jsx)(u.MenuGroup, {
        children: r
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [I, N, M]
      }), (0, a.jsx)(u.MenuGroup, {
        children: C
      }), (0, a.jsx)(u.MenuGroup, {
        children: A
      })]
    })
  }, [r.default.CONTEXT_MENU, r.default.CHANNEL_ACTIVITY_FEED_VOICE_MENU])