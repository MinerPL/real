"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("884691"),
  n = s("65597"),
  l = s("465869"),
  i = s("697218"),
  r = s("701909"),
  o = s("7331"),
  d = s("616622"),
  u = s("299732"),
  c = s("365721"),
  E = s("782914"),
  _ = s("49111"),
  T = s("782340");

function I(e) {
  let t;
  let s = (0, o.useIsExpeditedOnboardingGuild)(e),
    I = null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    S = null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE),
    N = (0, n.default)([i.default], () => {
      let t = i.default.getCurrentUser();
      return (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    {
      error: g,
      loading: f,
      createEnableRequest: A,
      submittedRequest: L
    } = (0, d.default)(null == e ? void 0 : e.id),
    {
      loading: m,
      error: C,
      refresh: O,
      eligibility: h
    } = (0, u.default)(null == e ? void 0 : e.id),
    {
      isApplicationRejected: R,
      requestCooldownDuration: D
    } = (0, c.default)(h),
    M = (null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
    {
      isMonetizationReapplicationDisabled: G
    } = (0, l.useIsMonetizationReapplicationDisabled)(null == e ? void 0 : e.id),
    x = L || (null == h ? void 0 : h.isApplicationPending) === !0,
    p = (null == h ? void 0 : h.canApply) === !0,
    U = T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUIREMENTS_DESCRIPTION.format({
      faqUrl: r.default.getArticleURL(_.HelpdeskArticles.CREATOR_FAQ)
    });
  R && G ? t = !0 === I ? T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM.format({
    communityGuidelineUrl: _.MarketingURLs.GUIDELINES
  }) : T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM_ALT.format({
    communityGuidelineUrl: _.MarketingURLs.GUIDELINES
  }) : R && null != D && (t = T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_V2.format({
    requestCooldownDuration: D,
    creatorRevenuePolicyUrl: r.default.getArticleURL(_.HelpdeskArticles.CREATOR_POLICY)
  }));
  let v = s && N && !1 === S,
    j = s && !1 === I,
    P = (0, E.getCreatorMonetizationAcceptTermsCheckboxText)(),
    y = R && p && N ? T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RESUBMIT_V2.format() : void 0;
  return a.useEffect(() => {
    v && O()
  }, [O, v]), {
    resubmittingEnableRequest: f,
    resubmissionError: g,
    isGuildOwner: N,
    createEnableRequest: A,
    resubmittedRequest: L,
    eligibilityLoading: m,
    eligibilityError: C,
    refreshEligibility: O,
    eligibility: h,
    eligibleForMonetization: p,
    isApplicationPending: x,
    hasPreviousApplicationRejection: R,
    requestRejectedNoticeText: t,
    reapplyNoticeText: y,
    showAcceptTermsFlow: j,
    wasRejectedInV1: j && (M || R),
    requirementsFinePrintText: U,
    acceptTermsCheckboxText: P
  }
}