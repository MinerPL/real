"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  l = n("635357"),
  i = n("742926"),
  u = n("659632"),
  c = n("210721"),
  o = n("78345"),
  d = n("53253"),
  f = n("65324"),
  m = n("563613"),
  _ = n("64798"),
  E = n("646718"),
  I = n("782340"),
  p = n("734203");
let N = [o.PremiumGiftStyles.STANDARD_BOX, o.PremiumGiftStyles.CAKE, o.PremiumGiftStyles.COFFEE, o.PremiumGiftStyles.CHEST],
  S = () => {
    let {
      giftRecipient: e,
      selectedGiftStyle: t,
      setSelectedGiftStyle: n,
      emojiConfetti: o,
      soundEffect: S,
      setEmojiConfetti: T,
      setSoundEffect: P
    } = (0, l.useGiftContext)(), [C, A] = r.useState(!1), O = r.useRef(null), h = (0, a.useRadioGroup)({
      orientation: "horizontal"
    }), R = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(R), M = R !== u.GiftExperience.DEFAULT, v = (0, d.useIsSeasonalGiftingActive)(), {
      enabled: x
    } = d.default.useExperiment({
      location: "premiumGiftSelect_GiftAnimationOptions"
    }, {
      autoTrackExposure: v
    }), L = null;
    return M && (L = v && x ? E.SeasonalGiftStyles2023 : N), (0, s.jsxs)("div", {
      children: [M && (0, s.jsxs)("div", {
        className: p.giftMainAnimation,
        children: [null != t ? (0, s.jsx)(f.default, {
          giftStyle: t,
          defaultAnimationState: c.AnimationState.ACTION,
          idleAnimationState: c.AnimationState.LOOP,
          shouldAnimate: !0,
          className: p.animation
        }) : (0, s.jsx)(a.Spinner, {
          className: p.spinner
        }), g && (0, s.jsxs)("div", {
          className: p.soundEmojiContainer,
          children: [(0, s.jsx)("div", {
            className: p.sound,
            children: (0, s.jsx)(i.default, {
              sound: S,
              onSelect: e => {
                null != P && P(null == e ? void 0 : e)
              }
            })
          }), (0, s.jsx)("div", {
            className: p.emoji,
            children: (0, s.jsx)(m.default, {
              setEmojiConfetti: T,
              emojiConfetti: null == o ? void 0 : o
            })
          })]
        })]
      }), (0, s.jsx)("div", {
        tabIndex: null != t || C ? void 0 : 0,
        onFocus: e => {
          var t;
          e.target === e.currentTarget && (null === (t = O.current) || void 0 === t || t.focus())
        },
        className: p.giftBoxOptionContainer,
        "aria-label": I.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
        ...h,
        children: null != L && L.map((e, r) => (0, s.jsx)(_.GiftStaticOption, {
          isSelected: t === e,
          giftStyle: e,
          setSelectedGiftStyle: n,
          ref: 0 === r ? O : null,
          onFocus: () => A(!0),
          onBlur: () => A(!1)
        }, e))
      }), (0, s.jsx)("div", {
        className: p.selectPlanDivider
      })]
    })
  }