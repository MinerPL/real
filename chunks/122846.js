"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
});
var r = n("37983"),
  i = n("884691"),
  u = n("414456"),
  l = n.n(u),
  a = n("446674"),
  o = n("77078"),
  s = n("913144"),
  c = n("850068"),
  d = n("775433"),
  _ = n("308592"),
  E = n("642906"),
  f = n("85336"),
  T = n("552917"),
  S = n("843647"),
  I = n("154889"),
  p = n("917247"),
  A = n("956597"),
  R = n("635956"),
  N = n("273619"),
  C = n("674158"),
  P = n("915639"),
  O = n("357957"),
  U = n("326880"),
  m = n("46829"),
  h = n("595086"),
  L = n("719923"),
  M = n("153160"),
  v = n("49111"),
  y = n("646718"),
  D = n("782340"),
  g = n("643076");
let G = e => {
  let {
    locale: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.default, {
      icon: h.default,
      iconClassName: g.iconColorPurple,
      description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(C.default, {
      icon: U.default,
      iconClassName: g.iconColorPink,
      description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: y.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, M.formatPercent)(t, y.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, r.jsx)(C.default, {
      icon: m.default,
      iconClassName: g.iconColorYellow,
      description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function b() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.default, {
      icon: h.default,
      iconClassName: g.iconColorPurple,
      description: D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(C.default, {
      icon: m.default,
      iconClassName: g.iconColorYellow,
      description: D.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let B = e => {
    let {
      trialOffer: t,
      discountOffer: i,
      isTier0Upsell: u,
      isLoading: s,
      price: c,
      onClose: d
    } = e, _ = (0, a.useStateFromStores)([P.default], () => P.default.locale), E = null != t || null != i;
    return (0, r.jsxs)("div", {
      className: g.wrapper,
      children: [(0, r.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: g.closeButton
      }), E && (0, r.jsx)(A.PremiumTrialGradientBadge, {
        className: g.premiumTrialBadge
      }), (0, r.jsx)("img", {
        className: l(g.heroImage, {
          [g.heroImageWithTrialOffer]: E
        }),
        src: n("190389"),
        alt: ""
      }), s ? (0, r.jsx)(o.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: g.heading,
          children: null == c ? (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS
          }) : u ? D.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, L.getTierDisplayName)(y.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
          }) : D.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: g.perks,
          children: u ? (0, r.jsx)(b, {}) : (0, r.jsx)(G, {
            locale: _
          })
        })]
      })]
    })
  },
  x = e => {
    let {
      trialOffer: t,
      discountOffer: n,
      isTier0Upsell: i,
      onClose: u
    } = e, l = {
      section: v.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(o.ModalFooter, {
      className: g.footer,
      children: [(0, r.jsx)(o.Button, {
        onClick: u,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: D.default.Messages.CLOSE
      }), (0, r.jsx)(R.default, {
        buttonText: null != t || null != n ? i ? D.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : D.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: l,
        subscriptionTier: i ? y.PremiumSubscriptionSKUs.TIER_0 : y.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          u()
        }
      })]
    })
  };

function H(e) {
  let {
    onClose: t,
    ...n
  } = e, u = (0, _.useSubscriptionPlansLoaded)(), l = (0, a.useStateFromStores)([O.default], () => O.default.hasFetchedPaymentSources), A = u && l, R = (0, p.usePremiumTrialOffer)(), C = (0, I.usePremiumDiscountOffer)(), {
    isLoading: P,
    suggestedPremiumType: U
  } = (0, S.default)({
    autoTrackExposure: A,
    experiment: T.default,
    location: "stickers_upsell"
  });
  i.useEffect(() => {
    s.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, v.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let m = U === y.PremiumTypes.TIER_0 && null == C,
    h = A ? L.default.getDefaultPrice(m ? y.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : y.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(E.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(o.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(N.default, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(B, {
          trialOffer: R,
          discountOffer: C,
          isTier0Upsell: m,
          isLoading: !A || P,
          price: h,
          onClose: t
        }),
        footer: (0, r.jsx)(x, {
          trialOffer: R,
          discountOffer: C,
          isTier0Upsell: m,
          onClose: t
        }),
        steps: [f.Step.PREMIUM_UPSELL],
        currentStep: f.Step.PREMIUM_UPSELL
      })
    })
  })
}