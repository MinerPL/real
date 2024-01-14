"use strict";
s.r(t), s.d(t, {
  useGuildFeedHideItem: function() {
    return C
  },
  useGuildFeedRemoveItem: function() {
    return G
  },
  targetToContext: function() {
    return p
  },
  default: function() {
    return S
  }
});
var n = s("37983");
s("884691");
var l = s("118810"),
  a = s("65597"),
  r = s("77078"),
  u = s("272030"),
  o = s("861370"),
  d = s("126423"),
  i = s("518155"),
  c = s("447651"),
  f = s("26051"),
  E = s("271938"),
  M = s("957255"),
  m = s("867544"),
  h = s("399699"),
  g = s("713810"),
  I = s("49111"),
  _ = s("782340");

function C(e, t) {
  return (0, n.jsx)(r.MenuItem, {
    id: "hide-feed-message",
    label: _.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
    action: s => (s.stopPropagation(), (0, g.hideItemFromGuildFeed)(e, t)),
    icon: m.default,
    iconProps: {
      foregroundColor: "currentColor"
    }
  })
}

function G(e, t, s) {
  let l = (0, a.default)([E.default], () => E.default.getId()),
    u = (0, a.default)([M.default], () => M.default.can(I.Permissions.MANAGE_MESSAGES, s), [s]),
    o = t.author.id === l || u;
  return o ? (0, n.jsx)(r.MenuItem, {
    id: "remove-feed-message",
    label: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
    action: t => {
      t.stopPropagation();
      let s = !0;
      return t.shiftKey && (s = !1),
        function(e, t) {
          if (!t) {
            (0, g.removeItemFromGuildFeed)(e);
            return
          }(0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
            header: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
            confirmText: _.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
            cancelText: _.default.Messages.CANCEL,
            onConfirm: () => (0, g.removeItemFromGuildFeed)(e),
            ...t,
            children: (0, n.jsx)(r.Text, {
              variant: "text-md/normal",
              children: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
            })
          }))
        }(e, s)
    },
    icon: h.default,
    iconProps: {
      foregroundColor: "currentColor"
    }
  }) : null
}

function p(e) {
  let t, s, n, a = e;
  for (;
    (0, l.isElement)(a, Node);)(0, l.isElement)(a, HTMLImageElement) && null != a.src && (s = a.src), (0, l.isElement)(a, HTMLAnchorElement) && null != a.href && (t = a.href, n = a.textContent), a = a.parentNode;
  return {
    href: t,
    src: s,
    textContent: n
  }
}

function S(e) {
  let {
    channel: t,
    message: s,
    messageItem: l,
    target: a,
    onSelect: E
  } = e, {
    href: M,
    src: m,
    textContent: h
  } = p(a), g = (0, i.default)(s, t), I = (0, f.default)(null != M ? M : m, h), S = (0, c.default)(m), x = (0, o.default)({
    id: s.id,
    label: _.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(s.channel_id, "-").concat(s.id)
  }), v = C(l, t.guild_id), L = G(l, l.message, t), A = (0, d.default)(s, t, {
    hoist: !1
  });
  return (0, n.jsxs)(r.Menu, {
    navId: "message",
    onClose: u.closeContextMenu,
    "aria-label": _.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: E,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [v, L, A]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [g, S, I, x]
    })]
  })
}