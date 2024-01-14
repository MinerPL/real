"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("272030"),
  u = n("667771"),
  d = n("42203"),
  c = n("923959"),
  f = n("957255"),
  h = n("783735"),
  C = n("41594"),
  p = n("49111"),
  m = n("133335"),
  E = n("708995");
let g = (0, u.makeChannelSortable)(function(e) {
  let {
    guild: t,
    selectedChannelId: s,
    position: u,
    disableManageChannels: g,
    sorting: I,
    sortingType: S,
    sortingPosition: _,
    connectChannelDragSource: N,
    connectChannelDropTarget: T,
    tabIndex: A
  } = e, L = (0, r.useStateFromStores)([d.default, c.default], () => {
    let e = c.default.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : d.default.getChannel(e[0])
  }), v = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(null == L ? void 0 : L.parent_id)), x = s === (null == L ? void 0 : L.id), R = (0, r.useStateFromStores)([f.default], () => null != v ? f.default.can(p.Permissions.MANAGE_CHANNELS, v) : null != t && f.default.can(p.Permissions.MANAGE_CHANNELS, t)), M = a.useCallback(e => {
    null != L && (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("425630").then(n.bind(n, "425630"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: L
      })
    })
  }, [L]);
  if (null == L) return null;
  let O = (0, h.getChannelItemClassName)(u, _),
    y = (0, h.isChannelItemDisabled)(L, I, S),
    D = (0, l.jsx)("div", {
      className: i(O, {
        [E.disabled]: y,
        [E.selected]: x
      }),
      "data-dnd-name": L.name,
      children: (0, l.jsxs)(C.default, {
        className: E.iconVisibility,
        channel: L,
        guild: t,
        selected: x,
        onContextMenu: M,
        forceInteractable: !0,
        unreadMode: m.UnreadMode.NONE,
        children: [(0, l.jsx)(h.ChannelItemInviteButton, {
          channel: L,
          tabIndex: A
        }), (0, l.jsx)(h.ChannelItemEditButton, {
          channel: L,
          disableManageChannels: g,
          tabIndex: A
        })]
      })
    });
  return R && (D = T(N(D))), D
});
var I = g