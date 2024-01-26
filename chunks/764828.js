"use strict";
n.r(t), n.d(t, {
  SafetyWarningTypes: function() {
    return l
  },
  SafetyWarningFeedbackTypes: function() {
    return d
  },
  default: function() {
    return p
  }
});
var a, i, l, d, u = n("446674"),
  s = n("913144"),
  r = n("42203");
(a = l || (l = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", a[a.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", a[a.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (i = d || (d = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
let o = [],
  c = {};

function f(e) {
  let {
    safetyWarnings: t
  } = e;
  null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
}

function g() {
  c = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
    f(e)
  })
}
class E extends u.default.Store {
  initialize() {
    this.waitFor(r.default)
  }
  getChannelSafetyWarning(e, t) {
    var n;
    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
  }
  getChannelSafetyWarnings(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : o
  }
}
var p = new E(s.default, {
  CHANNEL_CREATE: function(e) {
    f(e.channel)
  },
  CHANNEL_DELETE: function(e) {
    null != c[e.channel.id] && delete c[e.channel.id]
  },
  CHANNEL_UPDATES: function(e) {
    e.channels.forEach(e => {
      f(e)
    })
  },
  CONNECTION_OPEN: g,
  CONNECTION_OPEN_SUPPLEMENTAL: g,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
    let {
      channelId: t,
      warningId: n,
      feedbackType: a
    } = e, i = c[t];
    null != i && (c[t] = i.map(e => e.id === n ? {
      ...e,
      feedback_type: a
    } : e))
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t
    } = e, n = c[t];
    null != n && (c[t] = n.map(e => ({
      ...e,
      dismiss_timestamp: void 0
    })))
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
    let {
      channelId: t,
      warningIds: n
    } = e, a = c[t];
    if (null == a) return;
    let i = Date.now().toString();
    c[t] = a.map(e => n.includes(e.id) ? {
      ...e,
      dismiss_timestamp: i
    } : e)
  }
})