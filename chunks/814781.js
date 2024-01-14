"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var n = s("37983");
s("884691");
var l = s("611221"),
  a = s("77078"),
  r = s("272030"),
  u = s("861370"),
  o = s("518155"),
  d = s("447651"),
  i = s("26051"),
  c = s("449008"),
  f = s("437150"),
  E = s("782340");

function M(e) {
  let {
    channel: t,
    item: s,
    target: M,
    onSelect: m
  } = e, h = function(e) {
    switch (e.type) {
      case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
        return e.messages[0].message;
      case l.GuildFeedItemTypes.CONVERSATION:
        return e.root.messages[0];
      default:
        (0, c.assertNever)(e)
    }
  }(s), g = function(e) {
    switch (e.type) {
      case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
        return e.messages[e.messages.length - 1].message;
      case l.GuildFeedItemTypes.CONVERSATION:
        return e.root.messages[e.root.messages.length - 1];
      default:
        (0, c.assertNever)(e)
    }
  }(s), {
    href: I,
    src: _,
    textContent: C
  } = (0, f.targetToContext)(M), G = (0, o.default)(h, t), p = (0, i.default)(null != I ? I : _, C), S = (0, d.default)(_), x = (0, u.default)({
    id: g.id,
    label: E.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.id, "-").concat(g.id)
  }), v = (0, f.useGuildFeedHideItem)(s, t.guild_id), L = (0, f.useGuildFeedRemoveItem)(s, g, t);
  return (0, n.jsxs)(a.Menu, {
    navId: "message",
    onClose: r.closeContextMenu,
    "aria-label": E.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: m,
    children: [(0, n.jsxs)(a.MenuGroup, {
      children: [v, L]
    }), (0, n.jsxs)(a.MenuGroup, {
      children: [G, S, p, x]
    })]
  })
}