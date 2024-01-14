"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("65597"),
  l = s("77078"),
  i = s("305961"),
  r = s("697218"),
  o = s("191814"),
  d = s("757715"),
  u = s("782340");

function c(e) {
  let {
    guildId: t,
    application: c
  } = e, E = (0, n.default)([i.default], () => i.default.getGuild(t)), _ = (0, n.default)([r.default], () => r.default.getCurrentUser()), T = (0, d.useRoleSubscriptionSettingsDisabled)();
  if (null == E) return null;
  let I = E.isOwner(_);
  if (!I) return null;
  let S = c.team;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      disabled: T,
      children: null != S ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_DESCRIPTION.format({
        teamName: S.name
      }) : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_NO_TEAM_DESCRIPTION
    }), (0, a.jsx)(o.default, {
      size: 16
    }), (0, a.jsx)(l.Button, {
      look: l.Button.Looks.FILLED,
      color: null != S ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND_NEW,
      onClick: () => {
        var e;
        return e = c, void(0, l.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("996220").then(s.bind(s, "996220"));
          return s => (0, a.jsx)(t, {
            ...s,
            application: e
          })
        })
      },
      disabled: T,
      children: null != S ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_CHANGE_TEAM_CTA : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_SELECT_TEAM_CTA
    })]
  })
}