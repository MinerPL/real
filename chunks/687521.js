"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  i = l("77078"),
  u = l("503021"),
  d = l("757414"),
  r = l("246060");

function o(e) {
  let {
    guildId: t,
    channelId: l,
    messageId: o,
    ...c
  } = e, {
    unavailable: f,
    guild: h
  } = (0, s.useStateFromStoresObject)([d.default], () => ({
    guild: d.default.getGuild(t),
    unavailable: d.default.hasFetchFailed(t)
  }), [t]), g = null != h, m = a.useCallback(async () => {
    try {
      !g && await (0, u.fetchGuildForPopout)(t)
    } catch {}
  }, [g, t]);
  return f ? (0, n.jsx)(i.Popout, {
    position: "right",
    renderPopout: e => (0, n.jsx)(r.GuildUnavilableDialog, {}),
    ...c
  }) : (0, n.jsx)(i.Popout, {
    position: "right",
    preload: m,
    renderPopout: e => null == h ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsx)(r.GuildDialog, {
      ...e,
      guild: h,
      channelId: l,
      messageId: o
    }),
    ...c
  })
}