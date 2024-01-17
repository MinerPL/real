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
  f = 0,
  E = !1,
  _ = !1,
  h = new Set,
  C = new Set;

function I(e, t) {
  var n;
  return {
    key: e.suggested_user.id,
    name: null === (n = s.first(e.reasons)) || void 0 === n ? void 0 : n.name,
    user: new o.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    isUnseen: !t && !e.is_viewed
  }
}(0, a.debounce)(e => d.default.viewSuggestions(e), 15e3);
class T extends i.default.Store {
  initialize() {
    this.waitFor(u.default)
  }
  getSuggestionCount() {
    return f
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
T.displayName = "FriendSuggestionStore";
var S = new T(l.default, {
  CONNECTION_OPEN: function(e) {
    c = {}, (f = e.friendSuggestionCount) > 0 && (_ = !0, E || !_ || (E = !0, _ = !1, d.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = I(e.suggestion);
    if (null != c[t.key]) return !1;
    f++, c = {
      ...c,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    f = Math.max(0, --f), delete c[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    E = !1, c = function(e) {
      let t = e.reduce((e, t) => e + (t.is_viewed ? 0 : 1), 0) === e.length,
        n = !(0, r.isInFriendSuggestionSeenStateExperiment)() || t;
      return s.chain(e).map(e => I(e, n)).keyBy(e => e.key).value()
    }(e.suggestions), f = s.keys(c).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    E = !1, c = {}
  },
  VIEWED_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    e.userIds.forEach(e => {
      h.add(e), C.delete(e)
    })
  }
})