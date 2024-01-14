"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var i = n("446674"),
  r = n("913144"),
  l = n("374363");

function s() {
  return {
    hasFetchedConsumedInboundPromotionId: !1,
    consumedInboundPromotionId: null,
    lastSeenOutboundPromotionStartDate: null,
    bogoPromotion: null
  }
}
let a = s(),
  o = !1,
  u = null,
  d = !1,
  c = null,
  m = [],
  f = null;

function _() {
  let e = null;
  for (let t of m)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
  return e
}

function E() {
  var e, t, n;
  f = null !== (n = null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
}
class T extends i.default.PersistedStore {
  initialize(e) {
    null != e && (a = e), this.waitFor(l.default), this.syncWith([l.default], E)
  }
  get outboundPromotions() {
    return m
  }
  get lastSeenOutboundPromotionStartDate() {
    return a.lastSeenOutboundPromotionStartDate
  }
  get lastDismissedOutboundPromotionStartDate() {
    return f
  }
  get lastFetchedActivePromotions() {
    return c
  }
  get isFetchingActiveOutboundPromotions() {
    return d
  }
  get hasFetchedConsumedInboundPromotionId() {
    return a.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return a.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return a.bogoPromotion
  }
  get isFetchingActiveBogoPromotion() {
    return o
  }
  get lastFetchedActiveBogoPromotion() {
    return u
  }
  getState() {
    return a
  }
}
T.displayName = "PromotionsStore", T.persistKey = "PromotionsPersistedStore";
var I = new T(r.default, {
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
    let {
      activeOutboundPromotions: t,
      consumedInboundPromotionId: n
    } = e;
    m = t, c = Date.now(), d = !1, !a.hasFetchedConsumedInboundPromotionId && (a.hasFetchedConsumedInboundPromotionId = !0, a.consumedInboundPromotionId = n)
  },
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
    d = !0
  },
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
    m = [], d = !1
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
    let {
      activePromotion: t
    } = e;
    a.bogoPromotion = t, u = Date.now(), o = !1
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function() {
    o = !0
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
    a.bogoPromotion = null, o = !1
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
    if (0 === m.length) return !1;
    let e = _();
    null != e && (f = e)
  },
  OUTBOUND_PROMOTIONS_SEEN: function() {
    if (0 === m.length) return !1;
    let e = _();
    null != e && (f = e, a.lastSeenOutboundPromotionStartDate = e)
  },
  LOGOUT: function() {
    a = s(), d = !1, c = null, o = !1, u = null, m = []
  }
})