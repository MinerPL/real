"use strict";
s.r(t), s.d(t, {
  TierMarkerPositions: function() {
    return g
  },
  default: function() {
    return m
  }
}), s("70102");
var i = s("37983");
s("884691");
var r = s("414456"),
  a = s.n(r),
  l = s("907002"),
  o = s("65597"),
  n = s("77078"),
  d = s("206230"),
  u = s("685665"),
  c = s("206453"),
  E = s("36694"),
  _ = s("427459"),
  T = s("954296"),
  I = s("651971"),
  N = s("49111"),
  f = s("782340"),
  R = s("633640");
let g = {
  [N.BoostedGuildTiers.NONE]: 0,
  [N.BoostedGuildTiers.TIER_1]: 1 / 3,
  [N.BoostedGuildTiers.TIER_2]: 2 / 3,
  [N.BoostedGuildTiers.TIER_3]: 1
};
var m = function(e) {
  let {
    children: t,
    confettiTriggerRef: s,
    guild: r,
    isProgressBarAnimationComplete: m,
    setConfettiCount: M,
    setShouldFireConfetti: S,
    tier: G,
    tierMarkerAnimationPosition: h
  } = e, p = (0, o.default)([d.default], () => d.default.useReducedMotion), {
    analyticsLocations: B
  } = (0, u.default)(), O = N.AppliedGuildBoostsRequiredForBoostedGuildTier[G], x = O - r.premiumSubscriberCount, A = G <= h || m, v = A && G <= r.premiumTier, C = A && G < r.premiumTier, P = A && G === r.premiumTier, {
    scaleFactor: L
  } = (0, l.useSpring)({
    from: {
      scaleFactor: 0
    },
    to: {
      scaleFactor: h >= G || m && h + 1 === G || m && -1 === h && G === N.BoostedGuildTiers.NONE ? 1 : 0
    },
    config: {
      tension: 360,
      friction: 12
    },
    immediate: p
  }), j = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.animated.div, {
      className: R.progressBarMarkerIndicator,
      style: {
        transform: L.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
      }
    }), G !== N.BoostedGuildTiers.NONE && (0, i.jsx)(c.default, {
      tier: G,
      className: R.boostedTierIcon
    })]
  }), D = v ? "div" : n.Clickable, w = v ? {} : {
    onClick: function() {
      A && (0, T.addAppliedGuildBoosts)({
        analyticsLocations: B,
        analyticsLocation: {
          page: N.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
          section: N.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
          object: N.AnalyticsObjects.SUBSCRIBE_TO_TIER_BUTTON,
          objectType: function(e) {
            switch (e) {
              case N.BoostedGuildTiers.TIER_3:
                return N.AnalyticsObjectTypes.TIER_3;
              case N.BoostedGuildTiers.TIER_2:
                return N.AnalyticsObjectTypes.TIER_2;
              case N.BoostedGuildTiers.TIER_1:
                return N.AnalyticsObjectTypes.TIER_1;
              default:
                throw Error("Unsupported Boosting tier: ".concat(e))
            }
          }(G)
        },
        numberOfBoostsToAdd: x,
        guild: r
      })
    }
  };
  return (0, i.jsx)(n.Tooltip, {
    text: v ? f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
      tierName: (0, _.getTierName)(G, {
        useLevels: !1
      })
    }) : f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
      numBoostsRequired: x,
      tierName: (0, _.getTierName)(G, {
        useLevels: !1
      })
    }),
    shouldShow: G !== N.BoostedGuildTiers.NONE,
    children: e => (0, i.jsxs)(D, {
      className: a(R.progressBarMarker, {
        [R.progressBarMarkerUnlocked]: v,
        [R.progressBarMarkerLocked]: !v,
        [R.progressBarMarkerLower]: C,
        [R.progressBarMarkerCurrent]: P
      }),
      style: {
        left: "".concat(100 * g[G], "%")
      },
      ...e,
      ...w,
      children: [!v && (0, i.jsx)("div", {
        className: R.boostedTierIconBackground
      }), v && G === N.BoostedGuildTiers.TIER_3 ? (0, i.jsx)(I.ProgressBarConfettiTrigger, {
        confettiTriggerRef: s,
        setConfettiCount: M,
        setShouldFireConfetti: S,
        children: j
      }) : j, (0, i.jsxs)(n.Text, {
        className: R.progressBarMarkerLabel,
        variant: "text-md/normal",
        children: [v && G !== N.BoostedGuildTiers.NONE && (0, i.jsx)(E.default, {
          className: R.progressBarMarkerUnlockedIcon
        }), t]
      })]
    })
  })
}