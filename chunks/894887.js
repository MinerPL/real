"use strict";
n.r(t), n.d(t, {
  isMidjourneyOnboardingFlow: function() {
    return o
  },
  isEligibleForMidjourneyRedirect: function() {
    return d
  },
  hasRedirectedToGuild: function() {
    return u
  }
}), n("446674");
var s = n("305961"),
  i = n("162771"),
  r = n("256896"),
  a = n("760797");

function o(e) {
  let {
    guildStore: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : s.default;
  return 1 === n.getGuildCount() && null != n.getGuild(a.MIDJOURNEY_GUILD_ID) && (0, r.isEligibleForMidjourneyOnboarding)(e)
}

function d(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.MIDJOURNEY_BOT_ID && o("app")
}

function u(e) {
  return new Promise((t, n) => {
    if (i.default.getGuildId() === e) {
      t();
      return
    }
    let s = setTimeout(() => {
        a(), n()
      }, 3e3),
      r = () => {
        i.default.getGuildId() === e && (a(), t())
      },
      a = () => {
        i.default.removeChangeListener(r), clearTimeout(s)
      };
    i.default.addChangeListener(r)
  })
}