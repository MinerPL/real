"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("884691"),
  n = s("599417"),
  l = s("197509"),
  i = s("396076");

function r(e) {
  let [t, s] = a.useState(null != e), [r, o] = a.useState(), [d, u] = a.useState(), c = a.useCallback(async e => {
    s(!0), o(void 0);
    try {
      var t, a, r, d, c;
      let s = await l.getCreatorMonetizationEligibility(e);
      u({
        isEligibleForMonetization: s.sufficient,
        hasSufficientMembers: s.size,
        hasEnabled2FA: s.mfa,
        meetsServerAgeRequirement: s.age,
        meetsOwnerAgeRequirement: s.owner_age,
        noRecentViolations: s.safe_environment,
        weeklyCommunicators: s.engagement_healthy,
        hasMemberRetention: s.retention_healthy,
        notNSFW: 0 === Object.keys(s.nsfw_properties).length,
        canApply: s.can_apply,
        isApplicationPending: (null === (t = s.latest_request) || void 0 === t ? void 0 : t.state) === i.CreatorMonetizationApplicationState.OPEN,
        actionRequired: (null === (a = s.latest_request) || void 0 === a ? void 0 : a.state) === i.CreatorMonetizationApplicationState.ACTION_REQUIRED,
        minimumAgeInDays: s.minimum_age_in_days,
        minimumOwnerAgeInYears: s.minimum_owner_age_in_years,
        minimumSize: s.minimum_size,
        latestRequest: s.latest_request,
        rejection: s.rejection,
        guildMemberCount: null === (r = s.health_score) || void 0 === r ? void 0 : r.guild_size,
        communicatorCount: null === (d = s.health_score) || void 0 === d ? void 0 : d.communicators,
        retentionScore: null === (c = s.health_score) || void 0 === c ? void 0 : c.perc_ret_w1
      })
    } catch (e) {
      o(new n.default(e))
    } finally {
      s(!1)
    }
  }, []), E = a.useCallback(() => {
    null != e && c(e)
  }, [e, c]);
  return {
    error: r,
    loading: t,
    eligibility: d,
    refresh: E
  }
}