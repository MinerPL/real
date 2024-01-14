"use strict";
n.r(t), n.d(t, {
  KvMessage: function() {
    return s
  }
}), n("222007"), n("424973");
var a = n("26989"),
  l = n("697218");
class s {
  static fromMessage(e, t, n, a) {
    let [l, i] = s.deriveMemberUsers(e, n);
    return {
      id: n.id,
      channelId: t,
      message: n,
      members: l,
      users: i,
      connectionId: a
    }
  }
  static deriveMemberUsers(e, t) {
    var n, s, i, r;
    let d = new Set([null === (n = t.author) || void 0 === n ? void 0 : n.id, null === (s = t.interaction) || void 0 === s ? void 0 : s.user.id, ...null !== (r = null === (i = t.mentions) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== r ? r : []]),
      u = [],
      o = [];
    for (let t of d) {
      if (null == t) continue;
      let n = l.default.getUser(t),
        s = a.default.getTrueMember(null != e ? e : "", t);
      null != n && o.push(n), null != s && u.push(s)
    }
    return [u, o]
  }
}