"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  s = n("292381");
let u = new s.default(196606),
  o = 0,
  i = new s.default(196606),
  r = new s.default(196606);

function d(e) {
  return e.join("-")
}

function c(e, t, n) {
  var l;
  let a = d(t),
    s = null !== (l = u.get(e)) && void 0 !== l ? l : new Map;
  s.set(a, n), u.set(e, s), o++
}

function m(e) {
  let t = i.get(e);
  null != t && r.delete(t), i.delete(e), u.delete(e), o++
}
class p extends l.default.Store {
  getInteractionComponentStates() {
    return u
  }
  getInteractionComponentStateVersion() {
    return o
  }
  getInteractionComponentState(e, t) {
    var n;
    let l = u.get(e);
    if (null == l) return null;
    let a = d(t);
    return null !== (n = l.get(a)) && void 0 !== n ? n : null
  }
}
p.displayName = "LocalInteractionComponentStateStore";
var f = new p(a.default, {
  LOGOUT: function() {
    u.clear(), i.clear(), r.clear(), o++
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      messageId: t,
      nonce: n,
      indices: l,
      state: a
    } = e;
    i.set(t, n), r.set(n, {
      messageId: t,
      indices: l
    }), c(t, l, a)
  },
  SET_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      id: t,
      indices: n,
      state: l
    } = e;
    c(t, n, l)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t
    } = e;
    if (!u.has(t)) return !1;
    m(t)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    if (null == t.id || !u.has(t.id)) return !1;
    m(t.id)
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = r.get(t);
    if (null == n) return !1;
    i.delete(n.messageId), r.delete(t), o++
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = r.get(t);
    if (null == n) return !1;
    ! function(e) {
      let {
        indices: t,
        messageId: n
      } = e, l = d(t), a = u.get(n);
      if (null == a || !a.has(l)) return;
      a.delete(l), 0 === a.size && u.delete(n), o++
    }(n)
  },
  CLEAR_INTERACTION_MODAL_STATE: function(e) {
    let {
      id: t
    } = e;
    u.delete(t), o++
  }
})