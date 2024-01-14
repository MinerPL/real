"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("697218"),
  l = n("49111");
let u = {},
  c = {},
  d = {},
  f = 0,
  E = 0,
  h = 0,
  p = 0;

function _() {
  let e = Object.values(u);
  p = e.length;
  let {
    [l.RelationshipTypes.PENDING_INCOMING]: t = 0, [l.RelationshipTypes.PENDING_OUTGOING]: n = 0, [l.RelationshipTypes.FRIEND]: i = 0
  } = r.countBy(Object.values(u), e => e);
  f = t, E = n, h = i
}
class S extends s.default.Store {
  initialize() {
    this.waitFor(o.default)
  }
  isFriend(e) {
    return u[e] === l.RelationshipTypes.FRIEND
  }
  isBlocked(e) {
    return u[e] === l.RelationshipTypes.BLOCKED
  }
  getPendingCount() {
    return f
  }
  getOutgoingCount() {
    return E
  }
  getFriendCount() {
    return h
  }
  getRelationshipCount() {
    return p
  }
  getRelationships() {
    return u
  }
  getRelationshipType(e) {
    let t = u[e];
    return null != t ? t : l.RelationshipTypes.NONE
  }
  getNickname(e) {
    let t = c[e];
    return t
  }
  getSince(e) {
    return d[e]
  }
  getSinces() {
    return d
  }
  getFriendIDs() {
    return Object.keys(u).filter(e => u[e] === l.RelationshipTypes.FRIEND)
  }
}
S.displayName = "RelationshipStore";
var m = new S(a.default, {
  CONNECTION_OPEN: function(e) {
    u = {}, c = {}, d = {}, e.relationships.forEach(e => {
      u[e.id] = e.type, null != e.nickname && (c[e.id] = e.nickname), null != e.since && (d[e.id] = e.since)
    }), _()
  },
  OVERLAY_INITIALIZE: function(e) {
    u = {
      ...e.relationships
    }, _()
  },
  RELATIONSHIP_ADD: function(e) {
    let t = u[e.relationship.id];
    u = {
      ...u,
      [e.relationship.id]: e.relationship.type
    }, null != e.relationship.nickname && (c = {
      ...c,
      [e.relationship.id]: e.relationship.nickname
    }), null != e.relationship.since && (d = {
      ...d,
      [e.relationship.id]: e.relationship.since
    }), _(), e.relationship.type === l.RelationshipTypes.FRIEND && t === l.RelationshipTypes.PENDING_OUTGOING && a.default.dispatch({
      type: "FRIEND_REQUEST_ACCEPTED",
      user: e.relationship.user
    })
  },
  RELATIONSHIP_REMOVE: function(e) {
    u = {
      ...u
    }, delete u[e.relationship.id], null != c[e.relationship.id] && (c = {
      ...c
    }, delete c[e.relationship.id]), null != d[e.relationship.id] && (d = {
      ...d
    }, delete d[e.relationship.id]), _()
  },
  RELATIONSHIP_UPDATE: function(e) {
    null == e.relationship.since ? delete d[e.relationship.id] : d[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete c[e.relationship.id] : c[e.relationship.id] = e.relationship.nickname
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
    Object.keys(u = {
      ...u
    }).forEach(e => {
      u[e] === l.RelationshipTypes.PENDING_INCOMING && delete u[e]
    }), _()
  }
})