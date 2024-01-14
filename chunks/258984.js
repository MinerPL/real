"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("756717"),
  l = s("395905"),
  i = s("264742"),
  r = s("49111"),
  o = s("782340"),
  d = s("99658");

function u(e) {
  let t, {
      guild: s
    } = e,
    {
      resubmittingEnableRequest: u,
      resubmissionError: c,
      createEnableRequest: E,
      resubmittedRequest: _,
      requestRejectedNoticeText: T,
      reapplyNoticeText: I
    } = (0, n.default)(s),
    S = s.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
    N = s.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != c) return (0, a.jsx)(l.default, {
    className: d.noticeContainer,
    children: c.getAnyErrorMessage()
  });
  let g = null;
  return null != T ? g = T : _ ? g = o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_PENDING : null != I ? (g = I, t = o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA) : N ? g = o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_READ_ONLY_FOR_PENDING_NEW_OWNER_PENDING_NOTICE : S && (g = o.default.Messages.CREATOR_MONETIZATION_SETTINGS_RESTRICTED_NOTICE), null != g ? (0, a.jsx)(i.default, {
    className: d.noticeContainer,
    notice: g,
    ctaLabel: t,
    ctaLoading: u,
    onClick: E
  }) : null
}