"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var r = n("37983");
n("884691");
var a = n("77078"),
  i = n("272030"),
  l = n("838446"),
  o = n("158534"),
  u = n("846883"),
  s = n("812204"),
  d = n("861370"),
  c = n("20209"),
  p = n("972701"),
  f = n("390008"),
  h = n("41205"),
  E = n("936947"),
  _ = n("47495"),
  m = n("715243"),
  g = n("458574"),
  I = n("963150"),
  v = n("308798"),
  C = n("47006"),
  x = n("878526"),
  S = n("44141"),
  N = n("531674"),
  y = n("619436"),
  b = n("625399"),
  O = n("731390"),
  A = n("339876"),
  T = n("49111"),
  P = n("782340");

function M(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, S.default)(t), o = (0, g.default)(t), s = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), m = (0, f.default)(t), I = (0, h.default)(t), v = (0, E.default)(t), x = (0, N.default)(t), O = (0, y.default)(t), A = (0, C.default)(t), T = (0, d.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), M = (0, u.default)(t), R = (0, b.default)(t), L = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, r.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: i.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, r.jsx)(a.MenuGroup, {
      children: l
    }), (0, r.jsxs)(a.MenuGroup, {
      children: [I, v, m, s]
    }), (0, r.jsxs)(a.MenuGroup, {
      children: [x, L ? R : O]
    }), (0, r.jsx)(a.MenuGroup, {
      children: A
    }), (0, r.jsx)(a.MenuGroup, {
      children: M
    }), (0, r.jsx)(a.MenuGroup, {
      children: c
    }), (0, r.jsx)(a.MenuGroup, {
      children: o
    }), (0, r.jsx)(a.MenuGroup, {
      children: T
    })]
  })
}

function R(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, o = (0, S.default)(t), u = (0, g.default)(t), s = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), f = (0, A.default)(t), h = (0, N.default)(t), E = (0, C.default)(t), T = (0, x.default)(t, n), M = (0, m.default)(t, n), R = (0, I.default)(t, n), L = (0, v.default)(t), D = (0, d.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_CHANNEL
  }), U = (0, O.default)(t, "list_text_channel_context_menu"), F = (0, y.default)(t), w = (0, b.default)(t), H = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, r.jsxs)(a.Menu, {
    navId: "channel-context",
    onClose: i.closeContextMenu,
    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, r.jsxs)(a.MenuGroup, {
      children: [o, s]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(a.MenuGroup, {
      children: [T, f, u, U]
    }, "channel-actions"), (0, r.jsxs)(a.MenuGroup, {
      children: [h, H ? w : F]
    }, "notifications"), (0, r.jsxs)(a.MenuGroup, {
      children: [E, M, R, L]
    }, "admin-actions"), (0, r.jsx)(a.MenuGroup, {
      children: c
    }), (0, r.jsx)(a.MenuGroup, {
      children: D
    }, "developer-actions")]
  })
}
var L = (0, o.default)((0, l.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, r.jsx)(M, {
    ...e
  }) : (0, r.jsx)(R, {
    ...e
  })
}, {
  object: T.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])