"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  l = n("412707"),
  u = n("646186"),
  r = n("592407"),
  o = n("148475"),
  d = n("725621"),
  c = n("923959"),
  f = n("49111"),
  S = n("782340");

function E(e) {
  function t(t) {
    r.default.open(e.id, t)
  }
  let n = (0, i.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
    E = (0, o.default)(e);
  return __OVERLAY__ || !E ? null : (0, s.jsx)(a.MenuItem, {
    id: "guild-settings",
    label: S.default.Messages.SERVER_SETTINGS,
    action: () => t(),
    children: (0, d.getGuildSettingsSections)(e, n).map(n => {
      let {
        section: i,
        label: r
      } = n;
      if (null == r) return null;
      switch (i) {
        case f.GuildSettingsSections.DELETE:
          return null;
        case f.GuildSettingsSections.COMMUNITY:
          return (0, s.jsx)(a.MenuItem, {
            id: i,
            action: () => t(i),
            label: S.default.Messages.GUILD_SETTINGS_COMMUNITY
          }, i);
        case f.GuildSettingsSections.APP_DIRECTORY:
          return (0, s.jsx)(a.MenuItem, {
            id: i,
            action: () => {
              (0, u.goToAppDirectory)({
                guildId: e.id,
                entrypoint: {
                  name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                }
              })
            },
            label: r
          }, i);
        default:
          return (0, s.jsx)(a.MenuItem, {
            id: i,
            action: () => t(i),
            label: r
          }, i)
      }
    })
  })
}