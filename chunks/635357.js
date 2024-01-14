"use strict";
n.r(t), n.d(t, {
  GiftContextProvider: function() {
    return _
  },
  useGiftContext: function() {
    return S
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("210721"),
  a = n("78345"),
  s = n("53253"),
  u = n("105097"),
  o = n("659632"),
  d = n("642906"),
  c = n("782340");
let f = a.PremiumGiftStyles.STANDARD_BOX,
  p = void 0,
  [h, S, m] = (0, u.default)();

function _(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: u,
    children: S
  } = e, {
    selectedSkuId: m
  } = (0, d.usePaymentContext)(), [_, I] = r.useState(n), [E, C] = r.useState(), [T, g] = r.useState(!1), A = (0, o.shouldShowCustomGiftExperience)(_), N = (0, s.useIsSeasonalGiftingActive)(), {
    enabled: v
  } = s.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: A && N
  }), [b, L] = r.useState(A ? v && N ? a.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [P, O] = r.useState(t && o.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has((0, o.getGiftExperience)(_)) ? c.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : u), [F, x] = r.useState(void 0), [R, y] = r.useState(void 0), k = (0, o.useGetGiftCode)(m, t), [G, H] = r.useState(!1), [M, w] = r.useState(!1), [D, U] = r.useState(), j = r.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return w(!0), (0, l.sendGiftMessage)(_, k).then(() => {
      w(!1), null == t || t(), H(!0)
    }).catch(e => {
      w(!1), U(e), H(!0)
    })
  }, [_, k, w, H, U]);
  return (0, i.jsx)(h.Provider, {
    value: {
      isGift: t,
      giftCode: k,
      giftMessage: u,
      giftRecipient: _,
      setGiftRecipient: I,
      giftRecipientError: E,
      setGiftRecipientError: C,
      validatingGiftRecipient: T,
      setValidatingGiftRecipient: g,
      soundEffect: F,
      setSoundEffect: x,
      emojiConfetti: R,
      setEmojiConfetti: y,
      customGiftMessage: P,
      setCustomGiftMessage: O,
      selectedGiftStyle: b,
      setSelectedGiftStyle: L,
      sendGiftMessage: j,
      hasSentMessage: G,
      isSendingMessage: M,
      giftMessageError: D
    },
    children: S
  })
}