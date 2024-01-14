"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("446674"),
  l = n("913144"),
  s = n("377253");
let i = {},
  r = {},
  d = {};

function u(e) {
  if (null == e) return !1;
  let t = r[e];
  if (null == t) return !1;
  let n = s.default.getMessage(e, t.messageId);
  if (null == n) return !1;
  i[e] = {
    channel: t.channel,
    message: n,
    shouldMention: t.shouldMention,
    showMentionToggle: t.showMentionToggle
  }, delete r[e]
}

function o() {
  i = {}, r = {}, d = {}
}
class c extends a.default.Store {
  initialize() {
    this.waitFor(s.default)
  }
  getPendingReply(e) {
    return i[e]
  }
  getPendingReplyActionSource(e) {
    return d[e]
  }
}
c.displayName = "PendingReplyStore";
var E = new c(l.default, {
  CREATE_PENDING_REPLY: function(e) {
    let {
      channel: t,
      message: n,
      shouldMention: a = !0,
      showMentionToggle: l = !0,
      source: s
    } = e;
    i[t.id] = {
      channel: t,
      message: n,
      shouldMention: a,
      showMentionToggle: l
    }, d[t.id] = s
  },
  CREATE_SHALLOW_PENDING_REPLY: function(e) {
    let {
      channel: t,
      messageId: n,
      shouldMention: a = !0,
      showMentionToggle: l = !0
    } = e;
    r[t.id] = {
      channel: t,
      messageId: n,
      shouldMention: a,
      showMentionToggle: l
    }
  },
  SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
    let {
      channelId: t,
      shouldMention: n
    } = e;
    t in i && (i[t] = {
      ...i[t],
      shouldMention: n
    }), t in r && (r[t] = {
      ...r[t],
      shouldMention: n
    })
  },
  DELETE_PENDING_REPLY: function(e) {
    let {
      channelId: t
    } = e;
    delete i[t], delete r[t]
  },
  CONNECTION_OPEN: o,
  LOGOUT: o,
  MESSAGE_DELETE: function(e) {
    var t, n, a;
    let {
      id: l,
      channelId: s
    } = e;
    if ((null === (n = i[s]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === l) delete i[s], delete d[s];
    else {
      if ((null === (a = r[s]) || void 0 === a ? void 0 : a.messageId) !== l) return !1;
      delete r[s], delete d[s]
    }
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    u(t)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t
    } = e;
    u(t)
  }
})