"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("446674"),
  l = n("913144"),
  r = n("267567"),
  i = n("875978"),
  o = n("166257"),
  s = n("766274"),
  u = n("42203"),
  c = n("697218");
let d = {};
class f {
  static ensure(e, t, n) {
    var a, l;
    let r = "".concat(e, ":").concat(t.name, ":").concat(null !== (a = t.id) && void 0 !== a ? a : "", ":").concat(n);
    return d[r] = null !== (l = d[r]) && void 0 !== l ? l : new f
  }
  constructor() {
    this.fetched = !1, this.users = {}
  }
}

function R(e) {
  let {
    type: t,
    messageId: n,
    userId: a,
    emoji: l,
    burst: r,
    reactionType: o
  } = e, s = null != o ? o : r ? i.ReactionTypes.BURST : i.ReactionTypes.NORMAL, u = f.ensure(n, l, s);
  if ("MESSAGE_REACTION_ADD" === t) {
    let e = c.default.getUser(a);
    null != e && (u.users[a] = e)
  } else delete u.users[a]
}
class m extends a.default.Store {
  getReactions(e, t, n, a, l) {
    let i = f.ensure(t, n, l);
    if (!i.fetched) {
      let s = u.default.getChannel(e),
        c = null != s ? s.getGuildId() : null;
      if (null != c && r.default.isLurking(c)) return;
      o.getReactors({
        channelId: e,
        messageId: t,
        emoji: n,
        limit: a,
        type: l
      }), i.fetched = !0
    }
    return i.users
  }
}
m.displayName = "MessageReactionsStore";
var E = new m(l.default, {
  CONNECTION_OPEN: function() {
    d = {}
  },
  MESSAGE_REACTION_ADD: R,
  MESSAGE_REACTION_REMOVE: R,
  MESSAGE_REACTION_ADD_USERS: function(e) {
    let {
      messageId: t,
      users: n,
      emoji: a,
      reactionType: l
    } = e, r = f.ensure(t, a, l);
    n.forEach(e => r.users[e.id] = new s.default(e))
  }
})