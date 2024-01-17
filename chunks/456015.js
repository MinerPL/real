"use strict";
n.r(t), n.d(t, {
  fetchUserOffer: function() {
    return u
  },
  acknowledgeUserOffer: function() {
    return d
  }
});
var s = n("872717"),
  l = n("151426"),
  a = n("913144"),
  i = n("10641"),
  r = n("872173"),
  o = n("49111");
async function u() {
  a.default.dispatch({
    type: "BILLING_USER_OFFER_FETCH_START"
  });
  try {
    var e, t, n;
    let u = await s.default.post({
        url: o.Endpoints.USER_OFFER
      }),
      d = null !== (e = u.body.user_trial_offer) && void 0 !== e ? e : null,
      c = null !== (t = u.body.user_discount) && void 0 !== t ? t : null,
      f = null !== (n = u.body.user_discount_offer) && void 0 !== n ? n : null;
    return null == d && (0, i.isDismissibleContentDismissed)(l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, r.removeDismissedContent)(l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_SUCCESS",
      userTrialOffer: d,
      userDiscount: c,
      userDiscountOffer: f
    }), {
      userTrialOffer: d,
      userDiscount: c,
      userDiscountOffer: f
    }
  } catch (e) {
    a.default.dispatch({
      type: "BILLING_USER_OFFER_FETCH_FAIL"
    })
  }
}

function d(e, t) {
  let n = null != e && null == e.expires_at ? e.id : void 0,
    l = null != t && null == t.expires_at ? t.id : void 0;
  if (void 0 !== n || void 0 !== l) return s.default.post({
    url: o.Endpoints.USER_OFFER_ACKNOWLEDGED,
    body: {
      user_trial_offer_id: n,
      user_discount_offer_id: l
    },
    oldFormErrors: !0
  }).then(e => {
    var t, n, s;
    a.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
      userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
      userDiscountOffer: null !== (s = e.body.user_discount_offer) && void 0 !== s ? s : null
    })
  }).catch(e => {
    404 === e.status && a.default.dispatch({
      type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
      userTrialOffer: null,
      userDiscount: null,
      userDiscountOffer: null
    })
  })
}