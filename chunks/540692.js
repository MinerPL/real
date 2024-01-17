"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("637612"),
  r = n("446674"),
  i = n("913144"),
  s = n("697218"),
  a = n("179935"),
  o = n("49111");
let u = null,
  c = {},
  d = [],
  f = new Set,
  h = !1,
  E = new Set,
  p = new Set,
  C = {},
  _ = 0,
  m = null,
  v = () => !0;

function I(e) {
  E.add(e)
}

function g(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => S(e))
}

function S(e) {
  let t = e.type === l.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) return !1;
  if (!p.has(t) && !E.has(t)) {
    var n;
    n = t, E.add(n), i.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
  }
}
class R extends r.default.Store {
  initialize() {
    this.waitFor(s.default), this.syncWith([s.default], v)
  }
  checkAndFetchReferralsRemaining() {
    null == u && !h && _ < 5 && (null == m || m < Date.now()) && (0, a.fetchReferralsRemaining)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), u
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), null == d ? [] : d
  }
  isFetchingReferralsRemaining() {
    return h
  }
  isFetchingRecipientEligibility(e) {
    return f.has(e)
  }
  getRecipientEligibility(e) {
    return void 0 === c[e] && !f.has(e) && (0, a.checkRecipientEligibility)(e), c[e]
  }
  getRelevantUserTrialOffer(e) {
    return C[e]
  }
  isResolving(e) {
    return E.has(e)
  }
}
R.displayName = "ReferralTrialStore";
var N = new R(i.default, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
    let {
      userTrialOfferId: t,
      recipientId: n
    } = e;
    if (!h && (0, a.fetchReferralsRemaining)(), !f.has(n) && (0, a.checkRecipientEligibility)(n), !E.has(t)) {
      var l;
      l = t, E.add(l), i.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
    let {} = e;
    h = !0
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
    let {
      referrals_remaining: t,
      sent_user_ids: n
    } = e;
    h = !1, u = t, d = n
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
    let {} = e;
    h = !1, _ += 1, m = Date.now() + 1e3 * Math.pow(2, _)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
    let {
      recipientId: t
    } = e;
    f.add(t)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
    let {
      recipientId: t,
      is_eligible: n
    } = e;
    c[t] = n, f.delete(t)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
    let {
      recipientId: t
    } = e;
    c[t] = !1, f.delete(t)
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    (0, a.fetchReferralsRemaining)(), C[t.id] = t, d = [...d, t.user_id]
  },
  BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t && (E.delete(t.id), p.add(t.id), C[t.id] = t)
  },
  BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
    let {
      userTrialOfferId: t
    } = e;
    E.delete(t), p.add(t)
  },
  LOAD_MESSAGES_SUCCESS: g,
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    S(t)
  },
  LOAD_MESSAGES_AROUND_SUCCESS: g,
  LOGOUT: function() {
    u = null, c = {}, d = [], f = new Set, h = !1, E = new Set, p = new Set, C = {}, _ = 0, m = null
  }
})