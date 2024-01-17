"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973");
var a = n("917351"),
  s = n.n(a),
  i = n("446674"),
  l = n("913144"),
  r = n("736964"),
  o = n("666038"),
  u = n("449004"),
  d = n("373469"),
  c = n("26989"),
  f = n("305961"),
  E = n("824563"),
  _ = n("27618"),
  h = n("697218"),
  C = n("49111");

function I(e) {
  let t = h.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function T(e) {
  return {
    status: E.default.getStatus(e),
    isMobile: E.default.isMobileOnline(e),
    activities: E.default.getActivities(e),
    applicationStream: d.default.getAnyStreamForUser(e)
  }
}

function S(e) {
  let t = [];
  return s(c.default.memberOf(e)).map(f.default.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class m extends o.default {
  get comparator() {
    var e, t, n, a, s;
    return [this.type, null !== (s = null !== (a = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== a ? a : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : this.usernameLower]
  }
  constructor(e) {
    super(), this.key = e.key, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname
  }
}
class p {
  reset() {
    let e = s.map(_.default.getRelationships(), (e, t) => new m({
        key: t,
        type: e,
        nickname: _.default.getNickname(t),
        ...I(t),
        ...T(t),
        ...S(t)
      })),
      t = s.map(u.default.getSuggestions(), e => new m({
        key: e.key,
        type: 99,
        nickname: e.name,
        ...I(e.key),
        ...T(e.key),
        ...S(e.key)
      }));
    return new p(s.concat(e, t))
  }
  clone() {
    return new p(this._rows)
  }
  update(e) {
    let t = !1;
    for (let n = 0; n < this._rows.length; n++) {
      let a = this._rows[n],
        s = a.merge(e(a.key));
      t = t || s !== a, this._rows[n] = s
    }
    return t
  }
  filter(e, t) {
    let n = s(this._rows).filter(e => {
      if (null == e.user) return !1;
      if (null != t && "" !== t) {
        let n = t.toLowerCase(),
          a = [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? void 0 : e.toLowerCase());
        return a.some(e => null == e ? void 0 : e.includes(n))
      }
      return !0
    }).filter(t => {
      switch (e) {
        case C.FriendsSections.ONLINE:
          return t.type === C.RelationshipTypes.FRIEND && t.status !== C.StatusTypes.OFFLINE;
        case C.FriendsSections.PENDING:
          return t.type === C.RelationshipTypes.PENDING_INCOMING || t.type === C.RelationshipTypes.PENDING_OUTGOING;
        case C.FriendsSections.SUGGESTIONS:
          return 99 === t.type;
        case C.FriendsSections.BLOCKED:
          return t.type === C.RelationshipTypes.BLOCKED;
        case C.FriendsSections.ALL:
        default:
          return t.type === C.RelationshipTypes.FRIEND
      }
    }).sortBy(e => e.comparator).value();
    return n
  }
  getRelationshipCounts() {
    let e = {
      [C.RelationshipTypes.FRIEND]: 0,
      [C.RelationshipTypes.PENDING_INCOMING]: 0,
      [C.RelationshipTypes.PENDING_OUTGOING]: 0,
      99: 0,
      [C.RelationshipTypes.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    this._rows = e
  }
}
let A = !0,
  g = !1,
  N = C.FriendsSections.ONLINE,
  R = new p,
  O = !0,
  L = !1;

function v() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  A && (e || N !== C.FriendsSections.ONLINE && N !== C.FriendsSections.ADD_FRIEND) && !g && (A = !1, g = !0, r.default.fetchRelationships())
}

function M() {
  if (A = !0, O ? g = !1 : v(), R = R.reset(), L) return;
  let e = R.getRelationshipCounts();
  N = 0 === e[C.RelationshipTypes.FRIEND] ? 0 !== e[C.RelationshipTypes.PENDING_INCOMING] ? C.FriendsSections.PENDING : C.FriendsSections.ADD_FRIEND : C.FriendsSections.ONLINE
}

function P() {
  R = O ? new p : R.reset()
}

function D(e) {
  return function() {
    return !O && !!R.update(e) && (R = R.clone(), !0)
  }
}
class y extends i.default.Store {
  initialize() {
    this.waitFor(_.default, E.default, h.default, f.default, c.default, d.default, u.default), this.syncWith([_.default], P), this.syncWith([u.default], P), this.syncWith([h.default], D(I)), this.syncWith([E.default, d.default], D(T)), M()
  }
  getState() {
    return {
      fetching: g,
      section: N,
      pendingCount: _.default.getPendingCount(),
      rows: R
    }
  }
}
y.displayName = "FriendsStore";
var x = new y(l.default, {
  CONNECTION_OPEN: function() {
    M()
  },
  FRIENDS_SET_SECTION: function(e) {
    N = e.section, v()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return O = null != t, P(), !O
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    g = !1
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    A = !0, g = !0
  },
  DRAWER_SELECT_TAB: function(e) {
    let {
      tab: t
    } = e;
    return O = t !== C.DrawerTabTypes.FRIENDS, P(), !O
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    N = e.section, L = !0
  }
})