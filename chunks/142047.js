"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  s = n("272030"),
  l = n("158534"),
  u = n("812204"),
  r = n("861370"),
  o = n("20209"),
  d = n("390008"),
  f = n("47495"),
  c = n("178261"),
  E = n("852275"),
  _ = n("963150"),
  N = n("308798"),
  g = n("47006"),
  C = n("44141"),
  M = n("531674"),
  A = n("619436"),
  S = n("625399"),
  T = n("339876"),
  O = n("295189"),
  L = n("782340");

function h(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, C.default)(t), u = (0, M.default)(t), o = (0, A.default)(t), _ = (0, E.default)(t), N = (0, c.default)(t), g = (0, d.default)(t), T = (0, O.default)(t), h = (0, r.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), p = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), v = (0, S.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: l
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [u, p ? v : o]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [_, N, g]
    }), (0, a.jsx)(i.MenuGroup, {
      children: T
    }), (0, a.jsx)(i.MenuGroup, {
      children: h
    })]
  })
}

function p(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, u = (0, C.default)(t), o = (0, M.default)(t), O = (0, A.default)(t), h = (0, E.default)(t), p = (0, c.default)(t), v = (0, g.default)(t), U = (0, d.default)(t), I = (0, _.default)(t, n), m = (0, N.default)(t), R = (0, r.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), y = (0, T.default)(t), F = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), G = (0, S.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: u
    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
      children: [y, h, p]
    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
      children: [o, F ? G : O]
    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
      children: [v, U, I, m]
    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
      children: R
    }, "developer-actions")]
  })
}
var v = (0, l.default)(function(e) {
  let t = (0, o.default)();
  return t ? (0, a.jsx)(h, {
    ...e
  }) : (0, a.jsx)(p, {
    ...e
  })
}, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])