"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("446674"),
  a = n("913144"),
  r = n("267567"),
  i = n("875978"),
  o = n("166257"),
  s = n("766274"),
  u = n("42203"),
  c = n("697218");
let d = {};
class f {
  static ensure(e, t, n) {
    var l, a;
    let r = "".concat(e, ":").concat(t.name, ":").concat(null !== (l = t.id) && void 0 !== l ? l : "", ":").concat(n);
    return d[r] = null !== (a = d[r]) && void 0 !== a ? a : new f
  }
  constructor() {
    this.fetched = !1, this.users = {}
  }
}

function R(e) {
  let {
    type: t,
    messageId: n,
    userId: l,
    emoji: a,
    burst: r,
    reactionType: o
  } = e, s = null != o ? o : r ? i.ReactionTypes.BURST : i.ReactionTypes.NORMAL, u = f.ensure(n, a, s);
  if ("MESSAGE_REACTION_ADD" === t) {
    let e = c.default.getUser(l);
    null != e && (u.users[l] = e)
  } else delete u.users[l]
}
class m extends l.default.Store {
  getReactions(e, t, n, l, a) {
    let i = f.ensure(t, n, a);
    if (!i.fetched) {
      let s = u.default.getChannel(e),
        c = null != s ? s.getGuildId() : null;
      if (null != c && r.default.isLurking(c)) return;
      o.getReactors({
        channelId: e,
        messageId: t,
        emoji: n,
        limit: l,
        type: a
      }), i.fetched = !0
    }
    return i.users
  }
}
m.displayName = "MessageReactionsStore";
var E = new m(a.default, {
  CONNECTION_OPEN: function() {
    d = {}
  },
  MESSAGE_REACTION_ADD: R,
  MESSAGE_REACTION_REMOVE: R,
  MESSAGE_REACTION_ADD_USERS: function(e) {
    let {
      messageId: t,
      users: n,
      emoji: l,
      reactionType: a
    } = e, r = f.ensure(t, l, a);
    n.forEach(e => r.users[e.id] = new s.default(e))
  }
})