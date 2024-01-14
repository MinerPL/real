"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("424973");
var a = s("884691"),
  n = s("545158"),
  l = s("238498"),
  i = s("701909"),
  r = s("799357"),
  o = s("323877"),
  d = s("49111"),
  u = s("782340");

function c(e) {
  let {
    onEligibilityBecameStale: t,
    actions: s,
    sortedByIneligible: c
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
    isUserMFAEnabled: E,
    isModerationMFAEnabled: _
  } = (0, o.useIsMFAEnabled)(), T = a.useCallback(async () => {
    var e, a;
    E ? !_ && await (null == s ? void 0 : null === (a = s.onRequireModeratorMFAClick) || void 0 === a ? void 0 : a.call(s)) : await (null == s ? void 0 : null === (e = s.onEnableMFAClick) || void 0 === e ? void 0 : e.call(s)), null == t || t()
  }, [E, _, t, s]), I = (0, r.useEnableMFAHook)({
    onEnableMFAClick: T
  });
  return a.useMemo(() => {
    if (null == e) return null;
    let {
      minimumOwnerAgeInYears: t,
      minimumSize: a
    } = e, r = !e.noRecentViolations, o = async () => (0, n.default)(await i.default.getSubmitRequestURLAuthenticated()), S = [{
      key: "no_violations_requirement",
      checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_ELIGIBLE,
      uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_NOT_ELIGIBLE,
      description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_VIOLATIONS_DESCRIPTION.format({
        communityGuidelinesUrl: i.default.getArticleURL(d.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
      }),
      checked: e.noRecentViolations,
      actionLabel: r ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_RECENT_VIOLATION_ELIGIBILITY_CTA : void 0,
      actionHandler: r ? o : void 0
    }];
    if (null != t && null != e.meetsOwnerAgeRequirement && S.push({
        key: "owner_age_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_OWNER_AGE_DESCRIPTION.format({
          minimumOwnerAgeInYears: t
        }),
        checked: e.meetsOwnerAgeRequirement
      }), null != a && null != e.hasSufficientMembers && S.push({
        key: "member_count_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_MEMBERS_DESCRIPTION.format({
          minimumSize: a
        }),
        checked: e.hasSufficientMembers
      }), null != e.minimumAgeInDays && null != e.meetsServerAgeRequirement && S.push({
        key: "server_age_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_AGE_DESCRIPTION.format({
          minimumAge: (0, l.default)(e.minimumAgeInDays)
        }),
        checked: e.meetsServerAgeRequirement
      }), null != e.weeklyCommunicators && S.push({
        key: "weekly_communicator_count_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_COMMUNICATORS_DESCRIPTION,
        checked: e.weeklyCommunicators
      }), null != e.hasMemberRetention && S.push({
        key: "member_retention_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_RETENTION_DESCRIPTION,
        checked: e.hasMemberRetention
      }), S.push({
        key: "nsfw_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_NSFW_CONTENT_DESCRIPTION,
        checked: e.notNSFW
      }), null != e.hasEnabled2FA) {
      let t = !e.hasEnabled2FA && !E && (null == s ? void 0 : s.onEnableMFAClick) != null,
        a = !e.hasEnabled2FA && !_ && (null == s ? void 0 : s.onRequireModeratorMFAClick) != null,
        n = t || a;
      S.push({
        key: "2fa_requirement",
        checkedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_ELIGIBLE,
        uncheckedLabel: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_NOT_ELIGIBLE,
        description: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ELIGIBILITY_REQUIREMENT_2FA_DESCRIPTION.format({
          enableMFAHook: I
        }),
        checked: e.hasEnabled2FA,
        actionLabel: n ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_2MFA_ELIGIBILITY_CTA : void 0,
        actionHandler: n ? T : void 0
      })
    }
    return !0 === c && S.sort(e => e.checked ? 0 : -1), S
  }, [e, c, E, s, _, I, T])
}