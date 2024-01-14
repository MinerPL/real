"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("77078"),
  i = l("716241"),
  r = l("240249"),
  o = l("781423"),
  u = l("252063"),
  d = l("599110"),
  c = l("777003"),
  f = l("49111"),
  m = l("782340"),
  p = l("640329"),
  E = l("814076");

function T(e) {
  let {
    applicationId: t,
    commandIds: l,
    channel: T,
    guildId: _,
    onClick: S
  } = e;
  (0, u.usePrivateChannelIntegrationState)({
    channelId: T.id
  });
  let {
    commands: h
  } = r.useCommandsForApplication(T, t, l), I = a.useMemo(() => null == h ? void 0 : h.filter(e => !0 !== e.nsfw), [h]), A = a.useCallback(e => {
    null == S || S(), d.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
      application_id: t,
      command_id: e,
      guild_id: _,
      ...(0, i.collectChannelAnalyticsMetadataFromId)(T.id)
    })
  }, [t, T.id, _, S]);
  return null == I || 0 === I.length ? null : (0, n.jsxs)(c.default, {
    children: [(0, n.jsx)(s.Heading, {
      variant: "eyebrow",
      className: E.title,
      children: m.default.Messages.BOT_PROFILE_SLASH_COMMANDS
    }), (0, n.jsx)("ul", {
      className: p.popularApplicationCommandsList,
      children: I.map(e => (0, n.jsx)("li", {
        children: (0, n.jsx)(o.CommandClickable, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: A,
          guildId: _,
          channelId: T.id
        })
      }, e.id))
    })]
  })
}