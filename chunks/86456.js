"use strict";
n.r(t), n.d(t, {
  PrivateChannelIntegrationAddedSystemMessage: function() {
    return p
  },
  PrivateChannelIntegrationRemovedSystemMessage: function() {
    return S
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("77078"),
  i = n("272030"),
  r = n("574073"),
  o = n("232259"),
  u = n("506885"),
  d = n("981601"),
  c = n("697218"),
  f = n("304198"),
  E = n("315102"),
  _ = n("441823"),
  T = n("140596"),
  I = n("950576"),
  m = n("49111");

function N(e) {
  return l.useCallback(t => (l, r) => {
    var o;
    let f = E.default.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: t.bot,
        botIconFirst: !0
      }),
      I = c.default.getUser(null === (o = t.bot) || void 0 === o ? void 0 : o.id),
      m = T.default.getIntegration(e.id, t.id),
      N = e.isPrivate() && null != m ? t => {
        (0, i.openContextMenuLazy)(t, async () => {
          let {
            default: t
          } = await n.el("348866").then(n.bind(n, "348866"));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e,
            integration: m
          })
        })
      } : null != I ? t => (0, _.openUserContextMenu)(t, I, e) : void 0,
      {
        bot: p
      } = t;
    return null == p ? l : (0, s.jsx)(a.Popout, {
      position: "right",
      preload: () => (0, u.default)(p.id, f, {
        guildId: e.guild_id,
        channelId: e.id
      }),
      renderPopout: t => (0, s.jsx)(d.default, {
        ...t,
        userId: p.id,
        guildId: e.guild_id,
        channelId: e.id
      }),
      children: e => (0, s.jsx)(a.Anchor, {
        ...e,
        onContextMenu: N,
        children: l
      })
    }, r)
  }, [e])
}

function p(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)(t.author, l.id, l.guild_id), c = N(l);
  return (0, s.jsx)(f.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, I.getPrivateChannelIntegrationAddedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}

function S(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)(t.author, l.id, l.guild_id), c = N(l);
  return (0, s.jsx)(f.default, {
    icon: n("226315"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, I.getPrivateChannelIntegrationRemovedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}