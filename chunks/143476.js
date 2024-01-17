"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  u = s("290381"),
  o = s("77078"),
  d = s("875212"),
  c = s("812204"),
  _ = s("685665"),
  E = s("521012"),
  I = s("594098"),
  T = s("599110"),
  f = s("719923"),
  S = s("182650"),
  R = s("300962"),
  m = s("959905"),
  p = s("154889"),
  N = s("917247"),
  A = s("460680"),
  g = s("411205"),
  P = s("934570"),
  C = s("641078"),
  O = s("400307"),
  M = s("159646"),
  h = s("379521"),
  L = s("958966"),
  x = s("830648"),
  v = s("627474"),
  U = s("904871"),
  b = s("360776"),
  j = s("525505"),
  D = s("881155"),
  G = s("646718"),
  B = s("49111"),
  y = s("880552"),
  k = s("679324"),
  K = s("905498"),
  H = s("452637"),
  F = e => {
    var t;
    let {
      isFullscreen: s
    } = e, l = n.useRef(null), [F, W] = n.useState(!1), [w, V] = n.useState(!1), [Y, z] = n.useState(!1), [X, Q] = n.useState(!1), Z = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), J = null != Z ? (0, f.getPremiumPlanItem)(Z) : null, q = null != J ? f.default.getSkuIdForPlan(J.planId) : null, $ = null !== q && q !== G.PremiumSubscriptionSKUs.TIER_2 ? G.PremiumSubscriptionSKUs.TIER_2 : null, ee = (0, m.useLocalizedPromoQuery)(), et = null != ee, es = (0, p.usePremiumDiscountOffer)(), ea = (0, N.usePremiumTrialOffer)(), en = null == ea ? void 0 : null === (t = ea.subscription_trial) || void 0 === t ? void 0 : t.sku_id, el = (0, S.useIsInPremiumOfferExperience)(), ei = (0, C.useIsEligibleForBogoPromotion)(), {
      enabled: er
    } = (0, R.default)(), {
      analyticsLocations: eu
    } = (0, _.default)(c.default.PREMIUM_MARKETING), eo = "PremiumMarketingHome";
    (0, d.useTriggerDebuggingAA)({
      location: eo + " auto on",
      autoTrackExposure: !0
    }), (0, d.useTriggerDebuggingAA)({
      location: eo + " auto off",
      autoTrackExposure: !1
    }), n.useEffect(() => {
      Q(!0)
    }, []);
    let ed = (0, a.jsxs)("div", {
      className: i(y.container, {
        [y.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(M.default, {
        premiumSubscription: Z,
        className: i(s ? y.fullscreenExistingSubscriberSpacing : y.existingSubscriberSpacing, {
          [y.zIndex1]: el
        }),
        isFullscreen: s
      }), s || el ? (0, a.jsx)(h.default, {
        lifted: !s && el
      }) : null, !s && et ? (0, a.jsx)(P.default, {
        localizedPricingPromo: ee,
        smallGap: !0
      }) : (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => W(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(L.default, {
          subscriptionTier: $,
          isFullscreen: s || el,
          className: i({
            [y.fullscreenHero]: s,
            [y.settingsHeroNoBackground]: !s && el,
            [y.trialMarketingMargin]: el,
            [y.settingsHeroBogoHeight]: !s && ei,
            [y.settingsHeroBogoMarginFullscreen]: s && ei,
            [y.noTopPaddingOverride]: null != Z
          })
        })
      }), (0, a.jsxs)("div", {
        className: s ? y.premiumTierCardsContainerFullscreen : y.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(A.default, {
          isFullscreen: s
        }), s && et && (0, a.jsx)(g.default, {
          localizedPricingPromo: ee
        }), (0, a.jsx)(u.VisibilitySensor, {
          onChange: e => V(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(O.default, {
            showWumpus: !0,
            tier0CTAButton: en === G.PremiumSubscriptionSKUs.TIER_2 || ei || null != es ? (0, a.jsx)(D.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: G.PremiumSubscriptionSKUs.TIER_0,
              className: y.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(D.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: G.PremiumSubscriptionSKUs.TIER_0,
              className: y.marginTopForButtons
            }),
            tier2CTAButton: en === G.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(D.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
              className: y.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(D.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
              className: y.marginTopForButtons,
              isEligibleForBogoPromotion: ei
            })
          })
        })]
      }), s && !er ? (0, a.jsxs)("div", {
        className: y.whatsNewSection,
        children: [(0, a.jsx)(v.default, {
          variant: v.PerksDiscoverabilityVariants.WHATS_NEW
        }), (0, a.jsx)(v.default, {}), el ? (0, a.jsx)(U.default, {
          className: y.pdSparklesTop,
          variant: U.SparkleVariants.TOP
        }) : null, el ? (0, a.jsx)(U.default, {
          className: y.pdSparklesBottom,
          variant: U.SparkleVariants.BOTTOM
        }) : null]
      }) : null, (0, a.jsx)(x.default, {
        className: s ? y.perkCardsContainerSpacingFullscreen : y.perkCardsContainerSpacingSettings
      }), (0, a.jsxs)("div", {
        className: y.planComparisonTableContainer,
        children: [(0, a.jsx)(j.default, {
          className: y.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: K,
            className: y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: H,
            className: y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? y.footerSpacingFullscreen : y.footerSpacing
      }), (0, a.jsx)(b.default, {
        isVisible: !F && !w && X,
        isFullscreen: s,
        subscriptionTier: $
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !Y && (T.default.track(B.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eu
          }), z(!0))
        },
        children: (0, a.jsx)("div", {
          className: y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: k,
        className: y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
    return s ? (0, a.jsx)(o.AdvancedScrollerAuto, {
      className: y.scroller,
      ref: l,
      children: ed
    }) : ed
  }