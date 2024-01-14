"use strict";
n.r(t), n.d(t, {
  useFirstForumPostMessage: function() {
    return x
  },
  useMostRecentForumMessage: function() {
    return M
  },
  preloadForumThreads: function() {
    return S
  }
}), n("222007");
var l = n("917351"),
  i = n.n(l),
  a = n("446674"),
  s = n("872717"),
  r = n("913144"),
  u = n("42203"),
  o = n("670902"),
  d = n("349778"),
  c = n("430475"),
  f = n("324261"),
  m = n("49111");
class g {
  get(e) {
    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
  }
  delete(e) {
    delete this._set[e]
  }
  hasNext() {
    return !i.isEmpty(this._set)
  }
  next() {
    return Object.keys(this._set)[0]
  }
  constructor(e) {
    this._set = {}, this._defaultValueFunc = e
  }
}
let _ = new class e {
    request(e, t) {
      this.requested.get(e).add(t)
    }
    hasRequested(e, t) {
      return this.requested.get(e).has(t)
    }
    finishRequesting(e, t) {
      let n = this.requested.get(e);
      t.forEach(e => n.delete(e)), _.compact(e)
    }
    getRequested(e) {
      return this.requested.get(e)
    }
    getNextBatch(e, t) {
      return Array.from(this.requested.get(e)).slice(0, t)
    }
    hasNext() {
      return this.requested.hasNext()
    }
    next() {
      return this.requested.next()
    }
    compact(e) {
      0 === this.requested.get(e).size && this.requested.delete(e)
    }
    constructor() {
      this.requested = new g(() => new Set)
    }
  },
  h = null;

function p(e, t) {
  let n = (0, d.isForumActivityExperimentEnabled)(e);
  if (n) {
    let {
      loaded: e,
      message: n
    } = f.default.getMessageState(t);
    return !e && null == n
  }
  return !1
}

function E(e, t) {
  return !e && null == t
}

function x(e) {
  var t, n;
  let {
    loaded: l,
    firstMessage: i
  } = (0, a.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), s = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
  if (null != s && (t = l, n = i, !t && null == n)) T(s, e.id);
  return {
    loaded: l,
    firstMessage: i
  }
}

function M(e, t) {
  let {
    loaded: n,
    message: l
  } = (0, a.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
  return null != e && p(t.guild_id, t.id) && T(e, t.id), {
    loaded: n,
    mostRecentMessage: l
  }
}

function A(e, t) {
  let n = !1;
  t.forEach(t => {
    var l, i;
    let {
      loaded: a,
      firstMessage: s
    } = c.default.getMessage(t);
    if (l = a, i = s, !l && null == i || p(e.guild_id, t)) _.request(e.id, t), n = !0
  }), n && null == h && (h = setTimeout(v, 0))
}

function S(e) {
  A(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
}

function T(e, t) {
  if (_.hasRequested(e.id, t)) return;
  let n = (0, o.computeThreadIdsSnapshot)(e.id),
    l = n.findIndex(e => e === t),
    i = n.slice(l, l + 5).filter(t => !_.hasRequested(e.id, t));
  A(e, i)
}
async function v() {
  try {
    for (; _.hasNext();) await C(_.next())
  } finally {
    h = null
  }
}
async function C(e) {
  let t = _.getNextBatch(e, 10);
  try {
    var n;
    if (0 === t.length) return;
    let l = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
    if (null == l) return;
    let {
      body: {
        threads: i
      }
    } = await s.default.post({
      url: m.Endpoints.FORUM_POSTS(e),
      body: {
        thread_ids: t
      }
    });
    r.default.dispatch({
      type: "LOAD_FORUM_POSTS",
      guildId: l,
      threads: i
    })
  } catch (e) {} finally {
    _.finishRequesting(e, t)
  }
}