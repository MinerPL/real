"use strict";
n.r(e), n.d(e, {
  createUserFeedbackEnvelope: function() {
    return i
  }
});
var r = n("103787");

function i(t, e) {
  let {
    metadata: n,
    tunnel: i,
    dsn: a
  } = e, s = {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...n && n.sdk && {
      sdk: {
        name: n.sdk.name,
        version: n.sdk.version
      }
    },
    ...!!i && !!a && {
      dsn: (0, r.dsnToString)(a)
    }
  }, o = function(t) {
    return [{
      type: "user_report"
    }, t]
  }(t);
  return (0, r.createEnvelope)(s, [o])
}