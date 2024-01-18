"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("272030"),
  s = n("838446"),
  d = n("158534"),
  o = n("846883"),
  r = n("812204"),
  c = n("861370"),
  f = n("20209"),
  _ = n("972701"),
  E = n("390008"),
  S = n("41205"),
  N = n("936947"),
  g = n("379304"),
  T = n("534222"),
  M = n("601131"),
  A = n("47495"),
  C = n("834052"),
  v = n("715243"),
  O = n("458574"),
  h = n("963150"),
  p = n("308798"),
  I = n("47006"),
  L = n("809259"),
  m = n("878526"),
  U = n("44141"),
  R = n("531674"),
  x = n("619436"),
  y = n("625399"),
  G = n("339876"),
  b = n("702741"),
  V = n("782000"),
  F = n("45593"),
  D = n("604887"),
  P = n("958936"),
  H = n("49111"),
  j = n("782340");

function w(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([C.default], () => d ? C.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, O.default)(t), g = (0, T.useActiveEvent)(t.id), v = (0, M.default)(null == g ? void 0 : g.id, n, t), h = (0, V.default)(t, r), p = (0, _.useAddToFavoritesItem)(t), m = (0, _.useRemoveFromFavoritesItem)(t), U = (0, E.default)(t), R = (0, S.default)(t), G = (0, N.default)(t), F = (0, L.default)(t), D = (0, x.default)(t), H = (0, I.default)(t), w = (0, P.default)(t, n), B = (0, c.default)({
    id: t.id,
    label: j.default.Messages.COPY_ID_CHANNEL
  }), Y = (0, b.default)(t), k = (0, o.default)(t), q = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), W = (0, y.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != g ? v : h
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [R, G, U, p]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [F, q ? W : D, H]
    }), (0, a.jsx)(l.MenuGroup, {
      children: k
    }), (0, a.jsx)(l.MenuGroup, {
      children: m
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [w, f]
    }), (0, a.jsx)(l.MenuGroup, {
      children: Y
    }), (0, a.jsx)(l.MenuGroup, {
      children: B
    })]
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([C.default], () => d ? C.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, U.default)(t), E = (0, O.default)(t), S = (0, T.useActiveEvent)(t.id), N = (0, M.default)(null == S ? void 0 : S.id, n, t), H = (0, V.default)(t, r), w = (0, _.useAddToFavoritesItem)(t), B = (0, _.useRemoveFromFavoritesItem)(t), Y = (0, L.default)(t), k = (0, x.default)(t), q = (0, I.default)(t), W = (0, m.default)(t, n, r), Z = (0, P.default)(t, n), K = (0, F.default)(t, n), X = (0, D.default)(t, n.id), z = (0, v.default)(t, n), J = (0, h.default)(t, n), Q = (0, p.default)(t), $ = (0, c.default)({
    id: t.id,
    label: j.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, b.default)(t), et = (0, o.default)(t), en = (0, G.default)(t), ea = (0, g.default)(t), ei = (0, R.default)(t), el = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, y.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != S ? N : H
    }), (0, a.jsx)(l.MenuGroup, {
      children: f
    }, "mark-as-read"), (0, a.jsxs)(l.MenuGroup, {
      children: [W, et, en, w, E]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [X, Z, K, Y, ea, ee]
    }, "voice-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [ei, el ? eu : k]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: B
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [q, z, J, Q]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
var Y = (0, d.default)((0, s.default)(function(e) {
  let t = (0, f.default)();
  return t ? (0, a.jsx)(w, {
    ...e
  }) : (0, a.jsx)(B, {
    ...e
  })
}, {
  object: H.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])