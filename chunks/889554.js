"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("77078"),
  i = n("635357"),
  a = n("742926"),
  u = n("659632"),
  o = n("210721"),
  c = n("78345"),
  d = n("53253"),
  f = n("65324"),
  m = n("563613"),
  _ = n("64798"),
  E = n("646718"),
  I = n("782340"),
  p = n("734203");
let N = [c.PremiumGiftStyles.STANDARD_BOX, c.PremiumGiftStyles.CAKE, c.PremiumGiftStyles.COFFEE, c.PremiumGiftStyles.CHEST],
  S = () => {
    let {
      giftRecipient: e,
      selectedGiftStyle: t,
      setSelectedGiftStyle: n,
      emojiConfetti: c,
      soundEffect: S,
      setEmojiConfetti: P,
      setSoundEffect: T
    } = (0, i.useGiftContext)(), [C, A] = r.useState(!1), h = r.useRef(null), O = (0, l.useRadioGroup)({
      orientation: "horizontal"
    }), R = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(R), v = R !== u.GiftExperience.DEFAULT, M = (0, d.useIsSeasonalGiftingActive)(), {
      enabled: x
    } = d.default.useExperiment({
      location: "premiumGiftSelect_GiftAnimationOptions"
    }, {
      autoTrackExposure: M
    }), y = null;
    return v && (y = M && x ? E.SeasonalGiftStyles2023 : N), (0, s.jsxs)("div", {
      children: [v && (0, s.jsxs)("div", {
        className: p.giftMainAnimation,
        children: [null != t ? (0, s.jsx)(f.default, {
          giftStyle: t,
          defaultAnimationState: o.AnimationState.ACTION,
          idleAnimationState: o.AnimationState.LOOP,
          shouldAnimate: !0,
          className: p.animation
        }) : (0, s.jsx)(l.Spinner, {
          className: p.spinner
        }), g && (0, s.jsxs)("div", {
          className: p.soundEmojiContainer,
          children: [(0, s.jsx)("div", {
            className: p.sound,
            children: (0, s.jsx)(a.default, {
              sound: S,
              onSelect: e => {
                null != T && T(null == e ? void 0 : e)
              }
            })
          }), (0, s.jsx)("div", {
            className: p.emoji,
            children: (0, s.jsx)(m.default, {
              setEmojiConfetti: P,
              emojiConfetti: null == c ? void 0 : c
            })
          })]
        })]
      }), (0, s.jsx)("div", {
        tabIndex: null != t || C ? void 0 : 0,
        onFocus: e => {
          var t;
          e.target === e.currentTarget && (null === (t = h.current) || void 0 === t || t.focus())
        },
        className: p.giftBoxOptionContainer,
        "aria-label": I.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
        ...O,
        children: null != y && y.map((e, r) => (0, s.jsx)(_.GiftStaticOption, {
          isSelected: t === e,
          giftStyle: e,
          setSelectedGiftStyle: n,
          ref: 0 === r ? h : null,
          onFocus: () => A(!0),
          onBlur: () => A(!1)
        }, e))
      }), (0, s.jsx)("div", {
        className: p.selectPlanDivider
      })]
    })
  }