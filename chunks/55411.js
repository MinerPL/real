"use strict";
l.r(t), l.d(t, {
  default: function() {
    return G
  }
}), l("222007");
var n = l("917351"),
  i = l.n(n),
  s = l("866227"),
  r = l.n(s),
  a = l("446674"),
  u = l("862337"),
  d = l("913144"),
  o = l("569272"),
  c = l("560208"),
  E = l("671484"),
  f = l("659632"),
  _ = l("49111");
let S = {},
  h = {},
  p = [],
  C = [],
  m = [],
  I = new Set,
  g = {},
  v = {},
  T = new Set;

function O(e) {
  let t = E.default.createFromServer(e),
    l = t.code;
  if (null != h[l]) h[l] = h[l].merge(t);
  else if (h[l] = t, null != t.expiresAt) {
    let e = new u.Timeout;
    S[l] = e,
      function e(t) {
        let l = h[t];
        if (null == l || null == l.expiresAt) return;
        let n = l.expiresAt.valueOf() - r().valueOf();
        if (n <= 0) delete h[t], delete S[t], F.emitChange();
        else {
          let l = S[t];
          if (null == l) return;
          l.start(Math.min(2147483647, n), () => e(t))
        }
      }(l)
  }
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (t && !T.has(e.channel_id)) return !1;
  let l = (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.findGiftCodes)(e.content);
  return 0 !== l.length && (l.forEach(e => {
    !p.includes(e) && !m.includes(e) && (D({
      code: e
    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(_.NOOP_NULL)))
  }), !1)
}

function D(e) {
  let {
    code: t
  } = e;
  !p.includes(t) && (p = [...p, t])
}

function x(e) {
  let {
    message: t
  } = e;
  return A(t, !0)
}

function R(e) {
  let {
    channelId: t,
    messages: l
  } = e;
  T.add(t), l.forEach(e => A(e, !0))
}

function N(e) {
  let {
    firstMessages: t
  } = e;
  if (null == t) return !1;
  null == t || t.forEach(e => A(e))
}
class b extends a.default.Store {
  get(e) {
    let t = h[e];
    return null == t || t.isExpired() ? null : t
  }
  getError(e) {
    return null != e ? v[e] : null
  }
  getForGifterSKUAndPlan(e, t, l) {
    return i.values(h).filter(n => n.userId === e && n.skuId === t && (null == l || n.subscriptionPlanId === l) && !n.isExpired())
  }
  getIsResolving(e) {
    return p.includes(e)
  }
  getIsResolved(e) {
    return m.includes(e)
  }
  getIsAccepting(e) {
    return C.includes(e)
  }
  getUserGiftCodesFetchingForSKUAndPlan(e, t) {
    return I.has((0, f.makeComboId)(e, t))
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
    return g[(0, f.makeComboId)(e, t)]
  }
  getResolvingCodes() {
    return p
  }
  getResolvedCodes() {
    return m
  }
  getAcceptingCodes() {
    return C
  }
}
b.displayName = "GiftCodeStore";
let F = new b(d.default, {
  CONNECTION_OPEN: function() {
    return T.clear(), !1
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && T.add(t), !1
  },
  GIFT_CODE_RESOLVE: D,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    return p = p.filter(e => e !== t.code), !m.includes(t.code) && (m = [...m, t.code]), O(t)
  },
  GIFT_CODE_RESOLVE_FAILURE: function(e) {
    let {
      code: t
    } = e;
    p = p.filter(e => e !== t), !m.includes(t) && (m = [...m, t])
  },
  GIFT_CODE_REDEEM: function(e) {
    let {
      code: t
    } = e;
    !C.includes(t) && (C = [...C, t])
  },
  GIFT_CODE_REDEEM_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    C = C.filter(e => e !== t);
    let l = h[t];
    null != l && (h[t] = l.merge({
      redeemed: !0,
      uses: l.uses + 1
    }))
  },
  GIFT_CODE_REDEEM_FAILURE: function(e) {
    let {
      code: t,
      error: l
    } = e;
    C = C.filter(e => e !== t);
    let n = h[t];
    if (v[t] = l, null != n) switch (l.code) {
      case _.AbortCodes.UNKNOWN_GIFT_CODE:
        h[t] = n.set("revoked", !0);
        break;
      case _.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        h[t] = n.set("uses", n.maxUses)
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function(e) {
    let {
      code: t
    } = e;
    delete h[t];
    let l = S[t];
    null != l && (l.stop(), delete S[t]), !m.includes(t) && (m = [...m, t])
  },
  GIFT_CODE_CREATE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    O(t)
  },
  GIFT_CODES_FETCH: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: l
    } = e;
    I.add((0, f.makeComboId)(t, l))
  },
  GIFT_CODES_FETCH_SUCCESS: function(e) {
    let {
      giftCodes: t,
      skuId: l,
      subscriptionPlanId: n
    } = e;
    t.forEach(O);
    let i = (0, f.makeComboId)(l, n);
    g[i] = Date.now(), I.delete(i)
  },
  GIFT_CODES_FETCH_FAILURE: function(e) {
    let {
      skuId: t,
      subscriptionPlanId: l
    } = e;
    I.delete((0, f.makeComboId)(t, l))
  },
  MESSAGE_CREATE: x,
  MESSAGE_UPDATE: x,
  LOCAL_MESSAGES_LOADED: R,
  LOAD_MESSAGES_SUCCESS: R,
  LOAD_MESSAGES_AROUND_SUCCESS: R,
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => A(e))
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => A(e))
  },
  SEARCH_FINISH: function(e) {
    e.messages.forEach(e => {
      e.forEach(e => A(e))
    })
  },
  GIFT_CODE_UPDATE: function(e) {
    let {
      uses: t,
      code: l
    } = e, n = h[l];
    null != n && (h[l] = n.set("uses", Math.max(n.uses, t)))
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e))
  },
  LOAD_THREADS_SUCCESS: N,
  LOAD_ARCHIVED_THREADS_SUCCESS: N,
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    Object.values(t).map(e => {
      let {
        first_message: t
      } = e;
      return null != t && A(t)
    })
  }
});
var G = F