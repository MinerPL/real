"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("592407"),
  i = n("479756"),
  r = n("432153"),
  o = n("49111"),
  u = n("782340"),
  d = n("573431"),
  c = n("408426");

function f(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)("div", {
    className: d.upsellPage,
    children: (0, a.jsxs)("div", {
      className: d.upsellContainer,
      children: [(0, a.jsx)("img", {
        src: c,
        alt: ""
      }), (0, a.jsxs)("div", {
        className: d.upsellContent,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_HEADER
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          className: d.bodyText,
          children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BODY
        }), (0, a.jsx)(l.Button, {
          size: l.Button.Sizes.MEDIUM,
          onClick: () => {
            (0, i.stopImpersonating)(t), s.default.open(t, o.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, o.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIERS), (0, r.announceDeleteTemplateChannels)(t)
          },
          className: d.button,
          children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BUTTON
        })]
      })]
    })
  })
}