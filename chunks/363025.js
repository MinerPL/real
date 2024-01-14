"use strict";
n.r(t), n.d(t, {
  hidePremiumGuildGracePeriodNotice: function() {
    return s
  },
  hideEnablePublicGuildUpsellNotice: function() {
    return i
  },
  hideMaxMemberCountChannelNotice: function() {
    return l
  }
});
var a = n("913144");

function s(e) {
  a.default.dispatch({
    type: "BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS",
    guildId: e
  })
}

function i(e) {
  a.default.dispatch({
    type: "PUBLIC_UPSELL_NOTICE_DISMISS",
    guildId: e
  })
}

function l(e) {
  a.default.dispatch({
    type: "MAX_MEMBER_COUNT_NOTICE_DISMISS",
    guildId: e
  })
}