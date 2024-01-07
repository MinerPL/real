            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("888400"),
                r = n("333805"),
                s = n("782340");
            class l extends r.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, i.diffAsUnits)(0, 1e3 * t);
                    return (0, i.unitsAsStrings)(n, {
                        days: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var o = l