"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("627445"),
  n = s.n(a),
  l = s("545158"),
  i = s("592407"),
  r = s("65722"),
  o = s("49111"),
  d = s("782340");

function u(e) {
  let t = (0, r.useGuildRoleSubscriptionSettingsVisibility)(e);
  switch (t) {
    case r.GuildRoleSubscriptionSettingsVisibility.NEEDS_COMMUNITY:
      return {
        visibility: t, noticeText: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_COMMUNITY_REQUIREMENT_NOTICE, ctaLabel: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_COMMUNITY_REQUIREMENT_CTA_LABEL, ctaClickable: null != e, onCtaClicked() {
          var t;
          n(null != e, "Guild must be not null open COMMUNITY settings"), i.default.open(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", o.GuildSettingsSections.COMMUNITY)
        }
      };
    case r.GuildRoleSubscriptionSettingsVisibility.WAITLIST_ONLY:
      return {
        visibility: t, noticeText: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_WAITLIST_NOTICE, ctaLabel: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_WAITLIST_CTA_LABEL, ctaClickable: !0, onCtaClicked() {
          (0, l.default)("https://dis.gd/creators-waitlist")
        }
      };
    default:
      return
  }
}