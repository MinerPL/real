"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("397056"),
  n = s("782340"),
  l = {
    getStatusErrorText: function(e) {
      switch (e) {
        case a.PayoutStatuses.CANCELED:
        case a.PayoutStatuses.DEFERRED:
          return n.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED;
        case a.PayoutStatuses.DEFERRED_INTERNAL:
          return n.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED;
        case a.PayoutStatuses.ERROR:
          return n.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_ERROR;
        case a.PayoutStatuses.REJECTED:
          return n.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_REJECTED;
        case a.PayoutStatuses.RISK_REVIEW:
          return n.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_RISK_REVIEW
      }
    }
  }