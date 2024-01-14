"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144"),
  i = n("427459"),
  l = n("49111");
let r = {};
r = {
  lastDismissedGracePeriods: {},
  isVisible: {}
};
class o extends a.default.PersistedStore {
  initialize(e) {
    null != e && (r = e)
  }
  getLastDismissedGracePeriodForGuild(e) {
    return null != r.lastDismissedGracePeriods[e] ? r.lastDismissedGracePeriods[e] : null
  }
  isVisible(e) {
    return null != e && null != r.isVisible[e] && r.isVisible[e]
  }
  getState() {
    return r
  }
}
o.displayName = "GuildBoostingGracePeriodNoticeStore", o.persistKey = "PremiumGuildGracePeriodNoticeStore", o.migrations = [e => ({
  ...e,
  lastDismissedGracePeriods: null != e ? {
    ...e.lastDismissedGracePeriods
  } : {},
  isVisible: {}
})];
var u = new o(s.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e, a = null != r.lastDismissedGracePeriods[t] ? r.lastDismissedGracePeriods[t] : null, s = null != a && Date.now() - a <= l.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY, o = null != n && !s && (0, i.isInGracePeriod)(n, t);
    r = {
      ...r,
      isVisible: {
        ...r.isVisible,
        [t]: o
      }
    }
  },
  BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    r = {
      ...r,
      lastDismissedGracePeriods: {
        ...r.lastDismissedGracePeriods,
        [t]: Date.now()
      },
      isVisible: {
        ...r.isVisible,
        [t]: !1
      }
    }
  }
})