"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("70102"), n("222007");
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("913144"),
  i = n("316272"),
  r = n("812204"),
  o = n("649844"),
  u = n("697218"),
  d = n("340412"),
  c = n("719923"),
  f = n("540692"),
  E = n("456015"),
  _ = n("982457"),
  T = n("781084"),
  I = n("1607"),
  m = n("646718");
class N extends i.default {
  _initialize() {
    __OVERLAY__ ? a.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (a.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), a.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), a.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), a.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchReferralsRemaining))
  }
  _terminate() {
    __OVERLAY__ ? a.default.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (a.default.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), a.default.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), a.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), a.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchReferralsRemaining))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: a
    } = e;
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("571034").then(n.bind(n, "571034"));
      return n => (0, s.jsx)(e, {
        channel: t,
        content: a,
        ...n
      })
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, o.default)({
        ...e,
        onClose: e => {
          e ? t() : n()
        }
      })
    })
  }
  openPremiumPaymentModalInOverlay(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    let {
      initialPlanId: t,
      subscriptionTier: n,
      followupSKUInfo: s,
      analyticsObject: l
    } = null != e ? e : {};
    return new Promise((e, i) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = i, a.default.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: s,
        analyticsObject: l
      })
    })
  }
  constructor(...e) {
    super(...e), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null, this._maybeFetchPremiumOffer = () => {
      let e = u.default.getCurrentUser();
      if (null != e && e.verified && !(0, c.isPremium)(e) && d.default.shouldFetchOffer()) {
        let {
          enabled: e
        } = T.default.getCurrentConfig({
          location: "PremiumManager"
        }, {
          autoTrackExposure: !1
        });
        e ? (0, E.fetchUserOffer)() : _.default.fetchUserTrialOffer()
      }
    }, this._maybeFetchReferralsRemaining = () => {
      let e = u.default.getCurrentUser(),
        {
          enabled: t
        } = I.default.getCurrentConfig({
          location: "16261f_1"
        }, {
          autoTrackExposure: !1
        });
      t && null != e && e.verified && (0, c.isPremiumExactly)(e, m.PremiumTypes.TIER_2) && f.default.checkAndFetchReferralsRemaining()
    }, this._handlePremiumPaymentModalOpen = e => {
      (0, o.default)({
        ...e,
        analyticsLocations: [r.default.OVERLAY],
        onClose: e => {
          a.default.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      })
    }, this._handlePremiumPaymentModalClose = e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    }
  }
}
var p = new N