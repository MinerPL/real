"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("888400"),
  s = n("718517"),
  a = n("333805"),
  o = n("782340");
class l extends a.default {
  _getMessageFromRateLimit(e) {
    let t = e.body.retry_after,
      n = (0, r.diffAsUnits)(0, t * s.default.Millis.SECOND);
    return (0, r.unitsAsStrings)(n, {
      days: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
      hours: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
      minutes: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
    })
  }
  constructor(e, t) {
    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
  }
}
var i = l