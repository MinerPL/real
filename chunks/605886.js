            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return S
                }
            }), n("70102"), n("222007");
            var s = n("627445"),
                r = n.n(s),
                l = n("913144"),
                i = n("850068"),
                a = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("388290"),
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
                    hasRedirectURL: P,
                    setHasRedirectURL: T,
                    isGift: C,
                    giftStyle: A,
                    baseAnalyticsData: h,
                    analyticsLocation: O,
                    analyticsLocations: R,
                    flowStartTime: g,
                    subscriptionPlan: v,
                    planGroup: M,
                    trialId: x,
                    priceOptions: y,
                    paymentSource: L,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: j,
                    premiumSubscription: G,
                    onNext: D,
                    metadata: U,
                    sku: B,
                    skuPricePreview: F,
                    purchaseType: w,
                    referralCode: k,
                    loadId: H,
                    giftRecipient: Y,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: K
                } = e;
                t(E.PurchaseState.PURCHASING), n(!0), s(!0), l.default.wait(a.clearError), S(null);
                try {
                    let e, n, s;
                    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...h,
                            duration_ms: Date.now() - g
                        }), P) return;
                    let l = (0, m.getGiftExperience)(Y),
                        a = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(l),
                        S = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(l);
                    if (w === I.PurchaseTypes.ONE_TIME) r(null != B, "SKU must exist and be fetched."), r(null != F, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: F.amount,
                        expectedCurrency: F.currency,
                        isGift: C,
                        paymentSource: L,
                        loadId: H,
                        giftStyle: A,
                        recipientId: l !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                        customMessage: a ? W : void 0,
                        emojiConfetti: S ? Z : void 0,
                        soundEffect: S ? K : void 0
                    });
                    else if (r(null != v, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(v.id, !1, !0, y);
                        if ("usd" === t.currency && (null == L ? void 0 : L.type) === I.PaymentSourceTypes.GCASH) {
                            var V;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (V = null == L ? void 0 : L.id) && void 0 !== V ? V : "",
                                    subscriptionPlanId: v.id,
                                    priceOptions: JSON.stringify(y)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, v.skuId, {
                            expectedAmount: t.amount,
                            expectedCurrency: t.currency,
                            paymentSource: L,
                            subscriptionPlanId: v.id,
                            isGift: !0,
                            giftStyle: A,
                            loadId: H,
                            recipientId: l !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                            customMessage: a ? W : void 0,
                            emojiConfetti: S ? Z : void 0,
                            soundEffect: S ? K : void 0
                        })
                    } else e = b && null != j && null != L && null != G ? I.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, i.payInvoiceManually)(G, j, L, y.currency) : await (0, i.updateSubscription)(G, {
                        paymentSource: L,
                        currency: y.currency
                    }, R, O) : null != G ? await (0, i.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, v.id, 1, new Set(M)),
                        paymentSource: L,
                        currency: y.currency
                    }, R, O) : await (0, u.subscribe)({
                        planId: v.id,
                        currency: y.currency,
                        paymentSource: L,
                        trialId: x,
                        metadata: U,
                        referralCode: k,
                        loadId: H
                    });
                    if (e.redirectConfirmation) {
                        T(null != e.redirectURL);
                        return
                    }
                    let z = {
                        ...h,
                        duration_ms: Date.now() - g,
                        payment_source_type: null == L ? void 0 : L.type
                    };
                    C && (a && (z.is_custom_message_edited = W !== N.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), S && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), D(n, s)
                } catch (e) {
                    t(E.PurchaseState.FAIL), S(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...h,
                        payment_error_code: null == e ? void 0 : e.code,
                        payment_source_id: null == L ? void 0 : L.id,
                        payment_source_type: null == L ? void 0 : L.type,
                        duration_ms: Date.now() - g
                    })
                } finally {
                    !P && s(!1)
                }
            }