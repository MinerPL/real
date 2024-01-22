"use strict";
a.r(t), a.d(t, {
  default: function() {
    return V
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("65597"),
  o = a("77078"),
  c = a("265586"),
  u = a("54239"),
  d = a("252744"),
  f = a("812204"),
  m = a("685665"),
  C = a("606292"),
  p = a("688318"),
  g = a("946964"),
  E = a("635956"),
  h = a("38766"),
  b = a("601095"),
  T = a("493390"),
  x = a("697218"),
  L = a("944441"),
  S = a("462579"),
  v = a("216422"),
  I = a("956089"),
  N = a("50885"),
  _ = a("21526"),
  y = a("775416"),
  O = a("491232"),
  k = a("342676"),
  A = a("450492"),
  j = a("920580"),
  R = a("54809"),
  P = a("408381"),
  B = a("264579"),
  F = a("177586"),
  D = a("646718"),
  M = a("782340"),
  w = a("395535");
let H = N.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar,
  U = o.AvatarSizes.SIZE_120,
  W = (0, C.getDecorationSizeForAvatarSize)(U),
  G = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(o.Button, {
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  z = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(o.Button, {
      color: o.ButtonColors.CUSTOM,
      look: o.Button.Looks.FILLED,
      size: o.ButtonSizes.ICON,
      className: n(w.previewButton, t),
      innerClassName: w.previewButtonInner,
      "aria-label": M.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(S.default, {
        width: 24,
        height: 24
      })
    })
  };
var V = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: S = !1,
    isGiftEasterEggEnabled: N
  } = e, {
    analyticsLocations: V
  } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), K = s.useRef(null), Y = (0, d.default)(K), [X, Z] = s.useState(!1), q = Y || X, $ = (0, i.default)([x.default], () => x.default.getCurrentUser()), [J] = t.items, {
    avatarDecorationSrc: Q,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, p.default)({
    user: $,
    avatarDecorationOverride: (null == J ? void 0 : J.type) === c.CollectiblesItemType.AVATAR_DECORATION ? J : void 0,
    size: W,
    animateOnHover: !q
  }), {
    buttonColors: ea,
    backgroundColors: el
  } = (0, F.default)(t.styles), es = (0, O.getFormattedPriceForCollectiblesProduct)(t, S), er = (0, O.isPremiumCollectiblesProduct)(t), en = (0, O.isFreeCollectiblesProduct)(t), [ei, eo, ec] = (0, i.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), eu = s.useRef(null);
  s.useEffect(() => {
    let {
      current: e
    } = K;
    if (null == e) return;
    let t = () => Z(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let ed = (0, h.default)({
      analyticsLocations: V
    }),
    ef = () => {
      if ((0, u.popLayer)(), ed(), (null == J ? void 0 : J.type) === c.CollectiblesItemType.AVATAR_DECORATION) {
        (0, C.openAvatarDecorationModal)({
          initialSelectedDecoration: J,
          analyticsLocations: V
        });
        return
      }(null == J ? void 0 : J.type) === c.CollectiblesItemType.PROFILE_EFFECT && (0, T.openProfileEffectModal)({
        initialSelectedEffectId: J.id,
        analyticsLocations: V
      })
    },
    em = e => l => {
      eu.current = l.currentTarget, (0, R.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: V,
        analyticsSource: e,
        returnRef: eu
      })
    },
    eC = em(f.default.COLLECTIBLES_SHOP_CARD),
    ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eg = () => (0, l.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, l.jsx)(E.default, {
        fullWidth: !0,
        className: w.premiumSubscribeButton,
        disabled: ec,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(K)
  }, [r]);
  let eE = () => null != ei ? (0, l.jsx)(o.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : er ? (0, l.jsx)(o.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(j.default, {
      product: t,
      className: w.priceTag,
      disableTooltipPointerEvents: !0
    }),
    eh = () => er ? null : en ? (0, l.jsx)(z, {
      style: null != ea ? {
        background: ea.secondary.toHslString(),
        color: ea.text.toHslString()
      } : void 0,
      className: w.defaultPreviewButtonColor,
      onClick: ep
    }) : (0, l.jsx)(A.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: N,
      tooltipDelay: 250
    }),
    eb = () => {
      if (er && !S && !en) return eg();
      let e = null != ea ? {
          background: (0, P.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = er ? {
          submitting: eo,
          submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, _.claimPremiumCollectiblesProduct)(t.skuId), (0, B.default)({
              product: t,
              analyticsLocations: V
            })
          }
        } : {
          onClick: () => (0, g.default)({
            skuId: t.skuId,
            analyticsLocations: V,
            returnRef: K
          })
        };
      return (0, l.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == ei ? (0, l.jsx)(G, {
          style: e,
          disabled: ec,
          className: w.purchaseButton,
          ...a,
          children: er ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }) : (0, l.jsx)(G, {
          style: e,
          disabled: ec,
          onClick: ef,
          children: M.default.Messages.COLLECTIBLES_USE_NOW
        }), eh()]
      })
    },
    eT = null != el ? {
      background: "".concat((0, P.getBackgroundGradient)(el), " border-box border-box"),
      borderColor: el.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
    } : void 0;
  return (0, l.jsx)(o.FocusRing, {
    children: (0, l.jsxs)(o.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: eC,
      style: eT,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, l.jsx)(o.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: o.Tooltip.Colors.PRIMARY,
        text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(I.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, l.jsx)(v.default, {
            className: w.premiumWheel
          })
        })
      }), (null == J ? void 0 : J.type) === c.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, l.jsx)(b.default, {
          isHovering: q,
          profileEffectId: J.id,
          isPurchased: null != ei
        })
      }), (null == J ? void 0 : J.type) === c.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(H, {
        ...ee,
        avatarDecoration: Q,
        src: et,
        className: n(w.avatar, {
          [w.avatarPurchased]: null != ei
        }),
        size: U,
        "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
      }), null != ei ? (0, l.jsx)("div", {
        className: (null == J ? void 0 : J.type) === c.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, l.jsx)(L.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(w.cardText, {
          [w.cardTextProfileEffect]: (null == J ? void 0 : J.type) === c.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)(o.Text, {
          color: "always-white",
          variant: "text-lg/bold",
          className: w.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, l.jsxs)("div", {
            className: w.innerBlur,
            children: [(0, l.jsx)(o.Text, {
              color: "always-white",
              className: w.description,
              variant: "text-md/normal",
              children: t.summary
            }), eE()]
          }), (0, l.jsx)("div", {
            className: w.innerHover,
            children: eb()
          })]
        })]
      }), (0, l.jsx)(k.default, {
        category: a,
        className: w.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}