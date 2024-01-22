"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("617258"),
  l = n("446674"),
  a = n("769846"),
  u = n("77078"),
  o = n("598981"),
  c = n("682777"),
  d = n("577357"),
  f = n("393414"),
  h = n("160299"),
  p = n("153160"),
  I = n("271560"),
  v = n("650509"),
  E = n("910861"),
  C = n("899604"),
  _ = n("153335"),
  T = n("49111"),
  m = n("782340"),
  S = n("208961");
let A = (0, r.cssValueToNumber)(a.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  g = "start_application_subscription",
  R = e => {
    let {
      listing: t
    } = e, n = t.image_asset;
    if (null == n) return null;
    let s = (0, I.getAssetURL)(t.application_id, n, A);
    return (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        src: s,
        alt: "",
        className: S.listingImage
      })
    })
  },
  N = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.PRIMARY,
      disabled: !0,
      size: u.Button.Sizes.SMALL,
      children: t
    })
  };

function x(e) {
  let {
    listing: t,
    groupListingId: n,
    guildId: r,
    analyticsLocation: a,
    onComplete: I,
    forcesTransitionToGuild: A
  } = e, x = (0, l.useStateFromStores)([h.default], () => h.default.isSyncing), {
    activeSubscription: L,
    activeSubscriptionListing: P
  } = (0, v.useActiveSubscriptionListingForApplication)(t.application_id, r), {
    openModal: y,
    canOpenModal: M,
    cannotOpenReason: O
  } = (0, _.default)({
    listing: t,
    guildId: r,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: a,
    onComplete: I,
    forcesTransitionToGuild: A
  }), w = t.subscription_plans[0], j = 0 === w.price, U = (null == P ? void 0 : P.id) === t.id, b = (0, o.default)(), D = b && !M || x, V = () => {
    b ? y() : (0, c.redirectToLogin)({
      [g]: "true"
    })
  };
  return s.useEffect(() => {
    let e = new URL(location.href);
    if (b && !D && "true" === e.searchParams.get(g)) {
      e.searchParams.delete(g);
      let t = e.pathname + e.search;
      (0, f.replaceWith)(t), y()
    }
  }, [b, y, t, D]), (0, i.jsxs)("div", {
    className: S.container,
    children: [(0, i.jsxs)("div", {
      className: S.cardHeader,
      children: [(0, i.jsx)(R, {
        listing: t
      }), (0, i.jsx)(u.Text, {
        variant: "text-lg/medium",
        color: "interactive-active",
        children: t.name
      }), (0, i.jsxs)("div", {
        className: S.priceAndButtonContainer,
        children: [(0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          children: j ? m.default.Messages.APPLICATION_SUBSCRIPTION_FREE : m.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            amount: (0, p.formatPrice)(w.price, w.currency),
            period: (0, d.formatPlanInterval)(w)
          })
        }), (() => {
          var e;
          if (U) return (0, i.jsx)(N, {
            children: (null == L ? void 0 : L.status) === T.SubscriptionStatusTypes.CANCELED ? m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          });
          if (j) return null == P ? (0, i.jsx)(N, {
            children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          }) : null;
          return (0, i.jsx)(u.Tooltip, {
            tooltipClassName: S.subscribeButtonTooltip,
            text: M || !b ? null : O,
            "aria-label": null !== (e = !M && O) && void 0 !== e && e,
            children: e => (0, i.jsx)(E.default, {
              ...e,
              disabled: D,
              submitting: !1,
              onClick: V,
              children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          })
        })()]
      })]
    }), (0, i.jsx)(C.SubscriptionListingBenefits, {
      applicationId: t.application_id,
      storeListingBenefits: t.store_listing_benefits,
      skuBenefits: t.sku_benefits.benefits
    })]
  })
}