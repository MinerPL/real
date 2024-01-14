"use strict";
n.r(t), n.d(t, {
  getPromotionImageURL: function() {
    return m
  },
  outboundPromotionFromServer: function() {
    return f
  },
  bogoPromotionFromServer: function() {
    return _
  },
  fetchClaimedOutboundPromotionCodes: function() {
    return T
  },
  claimOutboundPromotion: function() {
    return I
  },
  getOutboundPromotionRedemptionUrl: function() {
    return p
  },
  shouldShowOutboundPromotionNotice: function() {
    return P
  },
  shouldShowOutboundPromotionOnPlatform: function() {
    return S
  },
  isOutboundPromotionRedeemableByTrialUsers: function() {
    return R
  },
  isTrialUserEligibleToSeeOutboundPromotion: function() {
    return C
  }
}), n("702976"), n("781738");
var i = n("872717"),
  r = n("819855"),
  l = n("915639"),
  s = n("521012"),
  a = n("568734"),
  o = n("773336"),
  u = n("78345"),
  d = n("807345"),
  c = n("49111");

function m(e, t) {
  let n = (0, r.isThemeDark)(t) ? "logo-dark" : "logo-light",
    i = window.GLOBAL_ENV.CDN_HOST,
    l = "?size=256";
  return null != i ? "".concat(location.protocol, "//").concat(i, "/promotions/").concat(e, "/").concat(n).concat(l) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(l)
}

function f(e) {
  return {
    id: e.id,
    startDate: e.start_date,
    endDate: e.end_date,
    outboundTitle: e.outbound_title,
    outboundRedemptionModalBody: e.outbound_redemption_modal_body,
    outboundRedemptionPageLink: e.outbound_redemption_page_link,
    outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
    outboundTermsAndConditions: e.outbound_terms_and_conditions,
    flags: e.flags
  }
}

function _(e) {
  return {
    id: e.id,
    startDate: e.start_date,
    endDate: e.end_date
  }
}

function E(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: f(e.promotion)
  }
}
async function T() {
  let e = await i.default.get({
      url: c.Endpoints.CLAIMED_OUTBOUND_PROMOTION_CODES,
      query: {
        locale: l.default.locale
      },
      oldFormErrors: !0
    }),
    t = e.body;
  return t.map(E)
}
async function I(e) {
  let t = await i.default.post({
      url: c.Endpoints.CLAIM_OUTBOUND_PROMOTION_CODE(e)
    }),
    n = t.body;
  return E(n)
}

function p(e, t) {
  return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
}

function P() {
  let e = d.default.lastSeenOutboundPromotionStartDate,
    t = d.default.outboundPromotions,
    n = d.default.consumedInboundPromotionId,
    i = t.filter(e => {
      let {
        id: t,
        flags: i
      } = e;
      return t !== n && !(0, a.hasFlag)(i, u.PromotionFlags.SUPPRESS_NOTIFICATION)
    }),
    r = null == e ? i : i.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    }),
    l = d.default.lastDismissedOutboundPromotionStartDate,
    o = s.default.getPremiumTypeSubscription(),
    c = (null == o ? void 0 : o.trialId) != null,
    m = c ? r.filter(e => R(e)) : r;
  return 0 !== m.length && (null == l || m.some(e => {
    let {
      startDate: t
    } = e;
    return new Date(t) > new Date(l)
  }))
}

function S(e) {
  return !(0, o.isIOS)() || !(0, a.hasFlag)(e.flags, u.PromotionFlags.IS_BLOCKED_IOS)
}

function R(e) {
  return (0, a.hasFlag)(e.flags, u.PromotionFlags.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
}

function C(e, t) {
  return null != t[e.id] || R(e)
}