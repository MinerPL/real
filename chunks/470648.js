"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("37983");
l("884691");
var n = l("627445"),
  r = l.n(n),
  i = l("394846"),
  u = l("446674"),
  s = l("77078"),
  o = l("272030"),
  d = l("980215"),
  c = l("506885"),
  f = l("981601"),
  m = l("42203"),
  h = l("26989"),
  p = l("305961"),
  E = l("27618"),
  v = l("697218"),
  _ = l("666897"),
  x = l("387111"),
  I = l("158998"),
  S = l("680894");

function g(e) {
  let {
    className: t,
    userId: n,
    channelId: g,
    inlinePreview: L = !1
  } = e, M = (0, u.useStateFromStores)([v.default], () => v.default.getUser(n)), C = (0, u.useStateFromStores)([m.default], () => m.default.getChannel(g)), R = null != C ? C.getGuildId() : null, T = L || null == M || null == R || null == g ? void 0 : e => {
    null != C && (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.el("834247").then(l.bind(l, "834247"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: M,
        channel: C,
        guildId: R
      })
    })
  }, N = I.default.useName(M), j = (0, u.useStateFromStores)([m.default, h.default, E.default], () => x.default.getNickname(R, g, M)), A = p.default.getGuild(R), U = (0, d.useClydeEnabled)(A, C), y = U && n === S.CLYDE_AI_USER_ID ? S.CLYDE_AI_MENTION_COLOR : null, P = e => (0, a.jsx)(_.default, {
    className: t,
    onContextMenu: T,
    color: y,
    ...e,
    children: "@".concat(null != j ? j : N)
  });
  return L ? P() : (0, a.jsx)(s.Popout, {
    preload: null == M ? void 0 : () => (0, c.default)(M.id, M.getAvatarURL(R, 80), {
      guildId: null != R ? R : void 0,
      channelId: null != g ? g : void 0
    }),
    renderPopout: e => (r(null != M, "Unexpected missing user"), (0, a.jsx)(f.default, {
      userId: M.id,
      guildId: null != R ? R : void 0,
      channelId: g,
      ...e
    })),
    position: i.isMobile ? "top" : "right",
    children: e => P(e)
  })
}