"use strict";
n.r(t), n.d(t, {
  isMidjourneyOnboardingFlow: function() {
    return a
  },
  shouldRedirectToMidjourneyDM: function() {
    return o
  }
}), n("446674");
var s = n("305961"),
  i = n("256896"),
  r = n("760797");

function a(e) {
  let {
    guildStore: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : s.default;
  return 1 === n.getGuildCount() && null != n.getGuild(r.MIDJOURNEY_GUILD_ID) && (0, i.isEligibleForMidjourneyOnboarding)(e)
}

function o(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === r.MIDJOURNEY_BOT_ID && a("app")
}