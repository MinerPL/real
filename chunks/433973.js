"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  s = n("151426"),
  i = n("913144"),
  l = n("179803"),
  r = n("957255");

function o() {
  return !0
}
class u extends a.default.Store {
  initialize() {
    this.waitFor(r.default), this.syncWith([r.default], o)
  }
  channelNoticePredicate(e) {
    return (0, l.shouldShowGuildOnboardingUpsell)(e.id, s.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }
}
u.displayName = "GuildOnboardingUpsellNoticeStore";
var d = new u(i.default)