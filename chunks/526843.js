"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  i = n("65597"),
  l = n("428958"),
  r = n("592407"),
  o = n("5667"),
  u = n("305961"),
  d = n("697218"),
  c = n("49111"),
  E = n("782340"),
  f = n("123685"),
  _ = n("936775");

function h(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e, h = (0, i.default)([u.default, d.default], () => {
    let e = d.default.getCurrentUser(),
      n = u.default.getGuild(t);
    return (null == n ? void 0 : n.isOwner(e)) === !0
  });
  return (0, l.default)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: h
    }
  }), (0, a.jsx)("div", {
    className: f.container,
    children: (0, a.jsx)(o.default, {
      header: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_HEADER,
      content: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_BODY,
      asset: (0, a.jsx)("div", {
        className: f.image,
        children: (0, a.jsx)("img", {
          alt: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_IMG_ALT,
          src: _,
          className: f.image
        })
      }),
      buttonCTA: E.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_UPSELL_CTA,
      onClick: () => {
        r.default.open(t, c.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
      },
      secondaryButtonCTA: E.default.Messages.DISMISS,
      markAsDismissed: n
    })
  })
}