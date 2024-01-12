            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("888400"),
                s = n("333805"),
                a = n("782340");
            class o extends s.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, 1e3 * t);
                    return (0, r.unitsAsStrings)(n, {
                        days: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var l = o