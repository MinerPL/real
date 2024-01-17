"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("446674"),
  l = n("913144"),
  a = n("692038"),
  s = n("10802"),
  r = n("697218");
let u = {};

function d(e) {
  let {
    threads: t,
    firstMessages: n
  } = e;
  if (null == n) return !1;
  for (let e of t) u[e.id] = {
    loaded: !0,
    firstMessage: null
  };
  for (let e of n) o(e.channel_id, e)
}

function o(e, t) {
  let n = null == t ? null : (0, a.createMessageRecord)(t);
  u[e] = {
    loaded: !0,
    firstMessage: n
  }
}

function c(e) {
  let {
    type: t,
    channelId: n,
    messageId: i,
    userId: l,
    emoji: a,
    optimistic: s,
    burst: d,
    reactionType: o
  } = e, c = u[n];
  if (null == c || null == c.firstMessage || i !== c.firstMessage.id) return !1;
  let _ = r.default.getCurrentUser(),
    f = null != _ && _.id === l;
  if (s && !f) return !1;
  if (u[n] = {
      ...c
    }, "MESSAGE_REACTION_ADD" === t) {
    let {
      colors: t
    } = e;
    u[n].firstMessage = c.firstMessage.addReaction(a, f, t, d, o)
  } else u[n].firstMessage = c.firstMessage.removeReaction(a, f, d, o)
}
class _ extends i.default.Store {
  initialize() {
    this.waitFor(s.default, r.default)
  }
  isLoading(e) {
    var t;
    return (null === (t = u[e]) || void 0 === t ? void 0 : t.loaded) !== !0
  }
  getMessage(e) {
    return !(e in u) && (u[e] = {
      loaded: !1,
      firstMessage: null
    }), u[e]
  }
}
_.displayName = "ForumPostMessagesStore";
var f = new _(l.default, {
  CONNECTION_OPEN: function() {
    u = {}
  },
  MESSAGE_CREATE: function(e) {
    if (e.isPushNotification || e.message.id !== e.message.channel_id) return !1;
    o(e.message.channel_id, e.message)
  },
  MESSAGE_UPDATE: function(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let t = u[e.message.id];
    if (null == t || null == t.firstMessage) return !1;
    u[e.message.id] = {
      ...t,
      firstMessage: (0, a.updateMessageRecord)(t.firstMessage, e.message)
    }
  },
  MESSAGE_DELETE: function(e) {
    if (e.id !== e.channelId) return !1;
    u[e.channelId] = {
      loaded: !0,
      firstMessage: null
    }
  },
  THREAD_CREATE: function(e) {
    let t = u[e.channel.id];
    if (null != t || !s.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
    u[e.channel.id] = {
      loaded: !0,
      firstMessage: null
    }
  },
  MESSAGE_REACTION_ADD: c,
  MESSAGE_REACTION_REMOVE: c,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = u[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    u[t] = {
      ...i,
      firstMessage: i.firstMessage.set("reactions", [])
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
    let {
      channelId: t,
      messageId: n,
      emoji: i
    } = e, l = u[t];
    if (null == l || null == l.firstMessage || n !== l.firstMessage.id) return !1;
    u[t] = {
      ...l,
      firstMessage: l.firstMessage.removeReactionsForEmoji(i)
    }
  },
  MESSAGE_REACTION_ADD_MANY: function(e) {
    let {
      channelId: t,
      messageId: n,
      reactions: i
    } = e, l = u[t];
    if (null == l || null == l.firstMessage || n !== l.firstMessage.id) return !1;
    let a = r.default.getCurrentUser(),
      s = l.firstMessage.addReactionBatch(i, null == a ? void 0 : a.id);
    u[t] = {
      ...l,
      firstMessage: s
    }
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    for (let e in t) o(e, t[e].first_message)
  },
  LOAD_THREADS_SUCCESS: d,
  LOAD_ARCHIVED_THREADS_SUCCESS: d,
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      messages: n
    } = e, i = n[n.length - 1];
    null != i && i.id === t && (u[t] = {
      loaded: !0,
      firstMessage: (0, a.createMessageRecord)(i)
    })
  }
})