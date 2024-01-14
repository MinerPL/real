"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("450911"),
  d = n("272030"),
  u = n("838446"),
  s = n("158534"),
  o = n("846883"),
  r = n("812204"),
  c = n("861370"),
  f = n("972701"),
  I = n("390008"),
  p = n("936947"),
  _ = n("271938"),
  A = n("136207"),
  v = n("44141"),
  E = n("531674"),
  T = n("49111"),
  M = n("782340"),
  y = (0, s.default)((0, u.default)(function(e) {
    let {
      channel: t,
      selected: u,
      onSelect: s
    } = e, r = t.isOwner(_.default.getId()), T = (0, v.default)(t), y = (0, E.default)(t), h = (0, A.default)(t, u), m = (0, c.default)({
      id: t.id,
      label: M.default.Messages.COPY_ID_CHANNEL
    }), S = (0, o.default)(t), C = (0, f.useAddToFavoritesItem)(t), N = (0, f.useRemoveFromFavoritesItem)(t), g = (0, I.default)(t), O = (0, p.default)(t);
    return null == t || t.isManaged() ? null : (0, a.jsxs)(l.Menu, {
      navId: "gdm-context",
      "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
      onClose: d.closeContextMenu,
      onSelect: s,
      children: [(0, a.jsx)(l.MenuGroup, {
        children: T
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [C, g, O]
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [r ? (0, a.jsx)(l.MenuItem, {
          id: "instant-invites",
          label: M.default.Messages.INSTANT_INVITES,
          action: () => (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("84279").then(n.bind(n, "84279"));
            return n => (0, a.jsx)(e, {
              channelId: t.id,
              ...n
            })
          })
        }) : null, (0, a.jsx)(l.MenuControlItem, {
          id: "change-icon",
          showDefaultFocus: !0,
          control: (e, n) => (0, a.jsx)(l.MenuImageUploadControl, {
            onChange: n => {
              var a;
              i.default.setIcon(t.id, n), null === (a = e.onClose) || void 0 === a || a.call(e)
            },
            multiple: !1,
            "aria-label": M.default.Messages.CHANGE_ICON,
            ...e,
            ref: n
          }),
          label: M.default.Messages.CHANGE_ICON
        }), null != t.icon ? (0, a.jsx)(l.MenuItem, {
          id: "remove-icon",
          label: M.default.Messages.REMOVE_ICON,
          action: () => i.default.setIcon(t.id, null)
        }) : null]
      }), (0, a.jsx)(l.MenuGroup, {
        children: S
      }), (0, a.jsx)(l.MenuGroup, {
        children: y
      }), (0, a.jsx)(l.MenuGroup, {
        children: h
      }), (0, a.jsx)(l.MenuGroup, {
        children: N
      }), (0, a.jsx)(l.MenuGroup, {
        children: m
      })]
    })
  }, {
    object: T.AnalyticsObjects.CONTEXT_MENU
  }), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])