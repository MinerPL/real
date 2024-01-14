"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
});
var r = n("37983"),
  u = n("884691"),
  i = n("414456"),
  l = n.n(i),
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
  A = n("154889"),
  p = n("917247"),
  I = n("956597"),
  R = n("635956"),
  C = n("273619"),
  N = n("674158"),
  P = n("915639"),
  O = n("357957"),
  U = n("326880"),
  h = n("46829"),
  L = n("595086"),
  m = n("719923"),
  M = n("153160"),
  D = n("49111"),
  v = n("646718"),
  y = n("782340"),
  g = n("643076");
let G = e => {
  let {
    locale: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.default, {
      icon: L.default,
      iconClassName: g.iconColorPurple,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(N.default, {
      icon: U.default,
      iconClassName: g.iconColorPink,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
        numGuildSubscriptions: v.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
        discountPercent: (0, M.formatPercent)(t, v.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
      })
    }), (0, r.jsx)(N.default, {
      icon: h.default,
      iconClassName: g.iconColorYellow,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
};

function B() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.default, {
      icon: L.default,
      iconClassName: g.iconColorPurple,
      description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
    }), (0, r.jsx)(N.default, {
      icon: h.default,
      iconClassName: g.iconColorYellow,
      description: y.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
    })]
  })
}
let b = e => {
    let {
      trialOffer: t,
      discountOffer: u,
      isTier0Upsell: i,
      isLoading: s,
      price: c,
      onClose: d
    } = e, _ = (0, a.useStateFromStores)([P.default], () => P.default.locale), E = null != t || null != u;
    return (0, r.jsxs)("div", {
      className: g.wrapper,
      children: [(0, r.jsx)(o.ModalCloseButton, {
        onClick: d,
        className: g.closeButton
      }), E && (0, r.jsx)(I.PremiumTrialGradientBadge, {
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
          }) : i ? y.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
            planName: (0, m.getTierDisplayName)(v.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
          }) : y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
            monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
          })
        }), (0, r.jsx)("div", {
          className: g.perks,
          children: i ? (0, r.jsx)(B, {}) : (0, r.jsx)(G, {
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
      isTier0Upsell: u,
      onClose: i
    } = e, l = {
      section: D.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, r.jsxs)(o.ModalFooter, {
      className: g.footer,
      children: [(0, r.jsx)(o.Button, {
        onClick: i,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: y.default.Messages.CLOSE
      }), (0, r.jsx)(R.default, {
        buttonText: null != t || null != n ? u ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
        premiumModalAnalyticsLocation: l,
        subscriptionTier: u ? v.PremiumSubscriptionSKUs.TIER_0 : v.PremiumSubscriptionSKUs.TIER_2,
        size: o.Button.Sizes.SMALL,
        color: o.Button.Colors.GREEN,
        onClick: () => {
          i()
        }
      })]
    })
  };

function H(e) {
  let {
    onClose: t,
    ...n
  } = e, i = (0, _.useSubscriptionPlansLoaded)(), l = (0, a.useStateFromStores)([O.default], () => O.default.hasFetchedPaymentSources), I = i && l, R = (0, p.usePremiumTrialOffer)(), N = (0, A.usePremiumDiscountOffer)(), {
    isLoading: P,
    suggestedPremiumType: U
  } = (0, S.default)({
    autoTrackExposure: I,
    experiment: T.default,
    location: "stickers_upsell"
  });
  u.useEffect(() => {
    s.default.wait(() => {
      (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, D.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let h = U === v.PremiumTypes.TIER_0 && null == N,
    L = I ? m.default.getDefaultPrice(h ? v.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : v.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
  return (0, r.jsx)(E.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(o.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      children: (0, r.jsx)(C.default, {
        hideBreadcrumbs: !0,
        body: (0, r.jsx)(b, {
          trialOffer: R,
          discountOffer: N,
          isTier0Upsell: h,
          isLoading: !I || P,
          price: L,
          onClose: t
        }),
        footer: (0, r.jsx)(x, {
          trialOffer: R,
          discountOffer: N,
          isTier0Upsell: h,
          onClose: t
        }),
        steps: [f.Step.PREMIUM_UPSELL],
        currentStep: f.Step.PREMIUM_UPSELL
      })
    })
  })
}