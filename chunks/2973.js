"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("446674"),
  i = n("913144");
let s = !1,
  l = new Map,
  r = 0,
  u = new Set;

function o(e, t) {
  l = new Map(l);
  let n = l.get(e);
  null != n && l.set(e, {
    ...n,
    ...t
  })
}

function d(e) {
  let t = new Set(u);
  t.delete(e), u = t
}
class c extends a.default.Store {
  get quests() {
    return l
  }
  get isFetchingCurrentQuests() {
    return s
  }
  get lastFetchedCurrentQuests() {
    return r
  }
  isEnrolling(e) {
    return u.has(e)
  }
}
c.displayName = "QuestsStore";
var f = new c(i.default, {
  LOGOUT: function() {
    s = !1, l = new Map, r = 0, u = new Set
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    r = Date.now(), s = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: t
    } = e;
    for (let e of (s = !1, l = new Map, t)) l.set(e.id, e)
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    r = 0, s = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: t,
      userStatus: n
    } = e;
    o(t, {
      userStatus: n
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(u);
    n.add(t), u = n
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: t
    } = e;
    o(t.questId, {
      userStatus: t
    }), d(t.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    d(t)
  }
})