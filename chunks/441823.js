"use strict";
n.r(t), n.d(t, {
  openUserContextMenu: function() {
    return l
  },
  openModerateUserContextMenu: function() {
    return u
  },
  openModerateRoleContextMenu: function() {
    return o
  },
  openModerationRaidContextMenu: function() {
    return s
  }
}), n("70102");
var i = n("37983");
n("884691");
var r = n("272030");

function l(e, t, l) {
  l.isGroupDM() ? (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("166452").then(n.bind(n, "166452"));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t,
      channel: l
    })
  }) : l.isDM() ? (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("130074").then(n.bind(n, "130074"));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t,
      channel: l,
      showMute: !1,
      targetIsUser: !0
    })
  }) : null != l.guild_id ? (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("834247").then(n.bind(n, "834247"));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t,
      channel: l,
      guildId: l.guild_id
    })
  }) : (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("406784").then(n.bind(n, "406784"));
    return n => (0, i.jsx)(e, {
      ...n,
      user: t
    })
  })
}

function u(e, t) {
  let {
    user: l,
    channel: u,
    moderationAlertId: o,
    guildId: s,
    analyticsLocations: a,
    onCloseContextMenu: d
  } = t;
  if ((null == u ? void 0 : u.isGroupDM()) || (null == u ? void 0 : u.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let c = null != s ? s : null == u ? void 0 : u.getGuildId();
  null != c && (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("467940").then(n.bind(n, "467940"));
    return t => (0, i.jsx)(e, {
      ...t,
      user: l,
      channelId: null == u ? void 0 : u.id,
      guildId: c,
      moderationAlertId: o,
      analyticsLocations: a,
      onCloseContextMenu: d
    })
  })
}

function o(e, t) {
  let {
    user: l,
    guildId: u,
    analyticsLocations: o,
    onCloseContextMenu: s
  } = t;
  (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("522651").then(n.bind(n, "522651"));
    return t => (0, i.jsx)(e, {
      ...t,
      user: l,
      guildId: u,
      analyticsLocations: o,
      onCloseContextMenu: s
    })
  })
}

function s(e, t, l) {
  null != l && (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("701587").then(n.bind(n, "701587"));
    return t => (0, i.jsx)(e, {
      ...t,
      guildId: l
    })
  })
}