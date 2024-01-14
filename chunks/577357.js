"use strict";
n.r(t), n.d(t, {
  getBenefitKey: function() {
    return s
  },
  formatPlanInterval: function() {
    return a
  },
  formatPlanIntervalDuration: function() {
    return o
  },
  isChannelBenefit: function() {
    return u
  },
  isIntangibleBenefit: function() {
    return d
  }
});
var l = n("677795"),
  i = n("646718"),
  r = n("782340");

function s(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function a(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return (function(e) {
    switch (e) {
      case i.SubscriptionIntervalTypes.DAY:
        return r.default.Messages.DAY;
      case i.SubscriptionIntervalTypes.MONTH:
        return r.default.Messages.MONTH;
      case i.SubscriptionIntervalTypes.YEAR:
        return r.default.Messages.YEAR
    }
  })(t).format({
    count: n
  })
}

function o(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  switch (t) {
    case i.SubscriptionIntervalTypes.DAY:
      if (n > 0 && n % 7 == 0) return r.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      });
      return r.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      });
    case i.SubscriptionIntervalTypes.MONTH:
      return r.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      });
    case i.SubscriptionIntervalTypes.YEAR:
      return r.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      })
  }
}

function u(e) {
  return e.ref_type === l.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function d(e) {
  return e.ref_type === l.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}