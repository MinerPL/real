"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007"), n("808653");
var a = n("917351"),
  s = n.n(a),
  i = n("446674"),
  l = n("913144"),
  r = n("258516"),
  o = n("766274"),
  u = n("697218"),
  d = n("390790");
let c = {},
  E = 0,
  f = !1,
  _ = !1,
  h = new Set,
  C = new Set;

function T(e, t) {
  var n;
  return {
    key: e.suggested_user.id,
    name: null === (n = s.first(e.reasons)) || void 0 === n ? void 0 : n.name,
    user: new o.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    isUnseen: !t && !e.is_viewed
  }
}(0, a.debounce)(e => d.default.viewSuggestions(e), 15e3);
class I extends i.default.Store {
  initialize() {
    this.waitFor(u.default)
  }
  getSuggestionCount() {
    return E
  }
  getSuggestions() {
    return Object.entries(c).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return c[e]
  }
}
I.displayName = "FriendSuggestionStore";
var S = new I(l.default, {
  CONNECTION_OPEN: function(e) {
    c = {}, (E = e.friendSuggestionCount) > 0 && (_ = !0, f || !_ || (f = !0, _ = !1, d.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = T(e.suggestion);
    if (null != c[t.key]) return !1;
    E++, c = {
      ...c,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    E = Math.max(0, --E), delete c[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    f = !1, c = function(e) {
      let t = e.reduce((e, t) => e + (t.is_viewed ? 0 : 1), 0) === e.length,
        n = !(0, r.isInFriendSuggestionSeenStateExperiment)() || t;
      return s.chain(e).map(e => T(e, n)).keyBy(e => e.key).value()
    }(e.suggestions), E = s.keys(c).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    f = !1, c = {}
  },
  VIEWED_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    e.userIds.forEach(e => {
      h.add(e), C.delete(e)
    })
  }
})