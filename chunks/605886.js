"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return S
  }
}), n("70102"), n("222007");
var s = n("627445"),
  r = n.n(s),
  a = n("913144"),
  l = n("850068"),
  i = n("112679"),
  u = n("596523"),
  c = n("465527"),
  o = n("388290"),
  d = n("599110"),
  f = n("745279"),
  m = n("659632"),
  _ = n("719923"),
  E = n("286350"),
  I = n("49111"),
  p = n("646718"),
  N = n("782340");
async function S(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: s,
    setPurchaseError: S,
    hasRedirectURL: T,
    setHasRedirectURL: P,
    isGift: C,
    giftStyle: A,
    baseAnalyticsData: O,
    analyticsLocation: h,
    analyticsLocations: R,
    flowStartTime: g,
    subscriptionPlan: M,
    planGroup: v,
    trialId: x,
    priceOptions: L,
    paymentSource: y,
    isPrepaidPaymentPastDue: b,
    openInvoiceId: j,
    premiumSubscription: G,
    onNext: D,
    metadata: U,
    sku: B,
    skuPricePreview: F,
    purchaseType: k,
    referralCode: w,
    loadId: H,
    giftRecipient: Y,
    customMessage: W,
    emojiConfetti: Z,
    soundEffect: K
  } = e;
  t(E.PurchaseState.PURCHASING), n(!0), s(!0), a.default.wait(i.clearError), S(null);
  try {
    let e, n, s;
    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...O,
        duration_ms: Date.now() - g
      }), T) return;
    let a = (0, m.getGiftExperience)(Y),
      i = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(a),
      S = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(a);
    if (k === I.PurchaseTypes.ONE_TIME) r(null != B, "SKU must exist and be fetched."), r(null != F, "SKUPricePreview must exist."), e = await (0, c.purchaseSKU)(B.applicationId, B.id, {
      expectedAmount: F.amount,
      expectedCurrency: F.currency,
      isGift: C,
      paymentSource: y,
      loadId: H,
      giftStyle: A,
      recipientId: a !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
      customMessage: i ? W : void 0,
      emojiConfetti: S ? Z : void 0,
      soundEffect: S ? K : void 0
    });
    else if (r(null != M, "Missing subscriptionPlan"), C) {
      let t = (0, _.getPrice)(M.id, !1, !0, L);
      if ("usd" === t.currency && (null == y ? void 0 : y.type) === I.PaymentSourceTypes.GCASH) {
        var V;
        let e = Error("Invalid USD currency for GCash");
        (0, f.captureBillingException)(e, {
          tags: {
            paymentSourceId: null !== (V = null == y ? void 0 : y.id) && void 0 !== V ? V : "",
            subscriptionPlanId: M.id,
            priceOptions: JSON.stringify(L)
          }
        })
      }
      e = await (0, c.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, M.skuId, {
        expectedAmount: t.amount,
        expectedCurrency: t.currency,
        paymentSource: y,
        subscriptionPlanId: M.id,
        isGift: !0,
        giftStyle: A,
        loadId: H,
        recipientId: a !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
        customMessage: i ? W : void 0,
        emojiConfetti: S ? Z : void 0,
        soundEffect: S ? K : void 0
      })
    } else e = b && null != j && null != y && null != G ? I.PREPAID_PAYMENT_SOURCES.has(y.type) ? await (0, l.payInvoiceManually)(G, j, y, L.currency) : await (0, l.updateSubscription)(G, {
      paymentSource: y,
      currency: L.currency
    }, R, h) : null != G ? await (0, l.updateSubscription)(G, {
      items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, M.id, 1, new Set(v)),
      paymentSource: y,
      currency: L.currency
    }, R, h) : await (0, u.subscribe)({
      planId: M.id,
      currency: L.currency,
      paymentSource: y,
      trialId: x,
      metadata: U,
      referralCode: w,
      loadId: H
    });
    if (e.redirectConfirmation) {
      P(null != e.redirectURL);
      return
    }
    let z = {
      ...O,
      duration_ms: Date.now() - g,
      payment_source_type: null == y ? void 0 : y.type
    };
    C && (i && (z.is_custom_message_edited = W !== N.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), S && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? o.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), D(n, s)
  } catch (e) {
    t(E.PurchaseState.FAIL), S(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...O,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == y ? void 0 : y.id,
      payment_source_type: null == y ? void 0 : y.type,
      duration_ms: Date.now() - g
    })
  } finally {
    !T && s(!1)
  }
}