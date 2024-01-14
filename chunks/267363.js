"use strict";
n.r(t), n.d(t, {
  ack: function() {
    return c
  },
  ackChannel: function() {
    return E
  },
  bulkAck: function() {
    return C
  },
  localAck: function() {
    return f
  },
  enableAutomaticAck: function() {
    return _
  },
  disableAutomaticAck: function() {
    return A
  },
  ackGuildFeature: function() {
    return T
  },
  ackUserFeature: function() {
    return S
  }
}), n("222007"), n("424973");
var l = n("249654"),
  i = n("913144"),
  a = n("401690"),
  u = n("233069"),
  r = n("42203"),
  d = n("245997"),
  o = n("697218"),
  s = n("49111");

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = arguments.length > 3 ? arguments[3] : void 0,
    a = arguments.length > 4 ? arguments[4] : void 0;
  i.default.dispatch({
    type: "CHANNEL_ACK",
    channelId: e,
    messageId: l,
    immediate: t,
    force: n,
    context: s.CURRENT_APP_CONTEXT,
    location: a
  })
}

function E(e) {
  e.isCategory() ? ! function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      l = r.default.getChannel(e);
    if (null == l || null == l.guild_id) return;
    let i = d.default.getCategories(l.guild_id);
    if (null == i[e]) return;
    let o = i[e].filter(e => {
        let {
          channel: t
        } = e;
        return (0, u.isGuildReadableType)(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }),
      s = [...o];
    for (let e of (o.forEach(e => {
        let t = a.default.getActiveJoinedThreadsForParent(l.guild_id, e);
        for (let e in t) s.push(e)
      }), s)) c(e, t, n)
  }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
}

function C(e, t) {
  i.default.dispatch({
    type: "BULK_ACK",
    channels: e,
    context: s.CURRENT_APP_CONTEXT,
    onFinished: t
  })
}

function f(e) {
  i.default.dispatch({
    type: "CHANNEL_LOCAL_ACK",
    channelId: e
  })
}

function _(e, t) {
  i.default.dispatch({
    type: "ENABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function A(e, t) {
  i.default.dispatch({
    type: "DISABLE_AUTOMATIC_ACK",
    channelId: e,
    windowId: t
  })
}

function T(e, t, n) {
  i.default.dispatch({
    type: "GUILD_FEATURE_ACK",
    id: e,
    ackType: t,
    ackedId: n,
    local: !1
  })
}

function S(e, t) {
  var n;
  let l = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  null != l && i.default.dispatch({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e,
    ackedId: t,
    local: !1
  })
}