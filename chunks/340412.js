"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
}), r("222007");
var l = r("446674"),
  i = r("913144"),
  n = r("697218"),
  u = r("719923"),
  s = r("521012"),
  f = r("646718");
let a = {
    userOffersLastFetchedAtDate: void 0,
    userTrialOffers: {},
    userDiscountOffers: {},
    userDiscounts: void 0
  },
  E = a;

function _() {
  E.userTrialOffers = {}, E.userDiscountOffers = {}, E.userOffersLastFetchedAtDate = void 0
}
let R = () => !0;

function d() {
  let e = s.default.getPremiumTypeSubscription();
  return null != e && (E.userTrialOffers = {}, E.userDiscountOffers = {}, !0)
}
class c extends l.default.PersistedStore {
  initialize(e) {
    E = null != e ? e : a, this.waitFor(n.default), this.syncWith([n.default], R), this.syncWith([s.default], d)
  }
  getUserTrialOffer(e) {
    if (null !== e) return E.userTrialOffers[e]
  }
  getUserDiscountOffer(e) {
    if (null !== e) return E.userDiscountOffers[e]
  }
  getAnyOfUserTrialOfferId(e) {
    for (let t of e)
      if (null != E.userTrialOffers[t]) return t;
    return null
  }
  hasFetchedOffer() {
    return null != E.userOffersLastFetchedAtDate
  }
  shouldFetchOffer() {
    let e = E.userOffersLastFetchedAtDate;
    return null == e || Date.now() - 1728e5 > e
  }
  getAlmostExpiringTrialOffers(e) {
    let t = Object.values(f.SubscriptionTrials).map(e => e.id),
      r = n.default.getCurrentUser();
    return (0, u.isPremium)(r) ? [] : Object.values(E.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + f.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
  }
  getAcknowledgedOffers(e) {
    let t = n.default.getCurrentUser();
    return (0, u.isPremium)(t) ? [] : Object.values(E.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
  }
  getUnacknowledgedDiscountOffers() {
    var e;
    let t = n.default.getCurrentUser();
    return (0, u.isPremium)(t) ? [] : Object.values(null !== (e = E.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at)
  }
  getUnacknowledgedOffers(e) {
    let t = n.default.getCurrentUser();
    return (0, u.isPremium)(t) ? [] : Object.values(E.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
  }
  hasAnyUnexpiredOffer() {
    return Object.values(E.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  getState() {
    return E
  }
  forceReset() {
    _()
  }
}
c.displayName = "UserOfferStore", c.persistKey = "UserOfferStore", c.migrations = [e => {
  let t = null == e ? void 0 : e.userDiscounts;
  if (null != t) return {
    ...e,
    userDiscountOffers: t
  }
}];
var o = new c(i.default, {
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t ? E.userTrialOffers[t.trial_id] = t : _(), E.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t ? E.userTrialOffers[t.trial_id] = t : E.userTrialOffers = {}, E.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userTrialOffer: t,
      userDiscount: r,
      userDiscountOffer: l
    } = e;
    null == t && null == r && null == l && _(), null != t ? (E.userTrialOffers[t.trial_id] = t, E.userDiscountOffers = {}) : null != r ? (E.userDiscountOffers[r.discount_id] = r, E.userTrialOffers = {}) : null != l && (E.userDiscountOffers[l.discount_id] = l, E.userTrialOffers = {}), E.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
    let {
      userTrialOffer: t,
      userDiscount: r,
      userDiscountOffer: l
    } = e;
    null != t ? E.userTrialOffers[t.trial_id] = t : E.userTrialOffers = {}, null != r ? E.userDiscountOffers[r.discount_id] = r : null != l ? E.userDiscountOffers[l.discount_id] = l : E.userDiscountOffers = {}, E.userOffersLastFetchedAtDate = Date.now()
  },
  LOGOUT: _
})