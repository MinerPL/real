"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  d = n("393522"),
  f = n("390008"),
  c = n("47495"),
  E = n("178261"),
  _ = n("852275"),
  N = n("963150"),
  g = n("308798"),
  C = n("47006"),
  A = n("44141"),
  M = n("531674"),
  S = n("619436"),
  T = n("625399"),
  O = n("339876"),
  L = n("295189"),
  h = n("782340");

function p(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, A.default)(t), u = (0, M.default)(t), o = (0, S.default)(t), N = (0, _.default)(t), g = (0, E.default)(t), C = (0, f.default)(t), O = (0, d.default)(t), p = (0, L.default)(t), v = (0, r.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_CHANNEL
  }), I = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), U = (0, T.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsxs)(i.MenuGroup, {
      children: [l, O, C]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [u, I ? U : o]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [N, g]
    }), (0, a.jsx)(i.MenuGroup, {
      children: p
    }), (0, a.jsx)(i.MenuGroup, {
      children: v
    })]
  })
}

function v(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, u = (0, A.default)(t), o = (0, M.default)(t), d = (0, S.default)(t), L = (0, _.default)(t), p = (0, E.default)(t), v = (0, C.default)(t), I = (0, f.default)(t), U = (0, N.default)(t, n), m = (0, g.default)(t), R = (0, r.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_CHANNEL
  }), y = (0, O.default)(t), F = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), G = (0, T.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: u
    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
      children: [y, L, p]
    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
      children: [o, F ? G : d]
    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
      children: [v, I, U, m]
    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
      children: R
    }, "developer-actions")]
  })
}
var I = (0, l.default)(function(e) {
  let t = (0, o.default)();
  return t ? (0, a.jsx)(p, {
    ...e
  }) : (0, a.jsx)(v, {
    ...e
  })
}, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])