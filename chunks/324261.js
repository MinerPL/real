"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("446674"),
  i = n("913144"),
  a = n("692038"),
  s = n("42203"),
  r = n("697218"),
  u = n("449008"),
  o = n("299039");
let d = {};

function c(e) {
  var t;
  let n = s.default.getChannel(null == e ? void 0 : e.channel_id);
  if (null == n || !n.isForumPost()) return !1;
  let l = d[n.id];
  return o.default.compare(null == e ? void 0 : e.id, null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.id) > -1
}

function f(e, t) {
  let n = null == t ? null : (0, a.createMessageRecord)(t);
  return d[e] = {
    loaded: !0,
    message: n
  }, !0
}

function m(e) {
  return d[e]
}

function g(e) {
  var t;
  return null === (t = d[e]) || void 0 === t ? void 0 : t.message
}

function h(e) {
  let {
    threads: t,
    mostRecentMessages: n
  } = e;
  t.forEach(e => f(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
    f(e.channel_id, e)
  })
}
class _ extends l.default.Store {
  initialize() {
    this.waitFor(s.default, r.default)
  }
  getMessageState(e) {
    return !(e in d) && (d[e] = {
      loaded: !1,
      message: null
    }), d[e]
  }
}
_.displayName = "ForumPostRecentMessageStore";
var p = new _(i.default, {
  CONNECTION_OPEN: function() {
    d = {}
  },
  MESSAGE_CREATE: function(e) {
    if (e.isPushNotification || !c(e.message)) return !1;
    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
  },
  MESSAGE_UPDATE: function(e) {
    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
    ! function(e, t) {
      let n = function(e) {
          return d[e]
        }(e),
        l = g(e);
      null != n && null != l && (d[e] = {
        ...n,
        message: (0, a.updateMessageRecord)(l, t)
      })
    }(e.message.channel_id, e.message)
  },
  MESSAGE_DELETE: function(e) {
    return function(e, t) {
      let n = g(e);
      return (null == n ? void 0 : n.id) === t && (delete d[e], !0)
    }(e.channelId, e.id)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    for (let e in t) f(e, t[e].most_recent_message)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: h,
  LOAD_THREADS_SUCCESS: h
})