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
  o = a("65597"),
  i = a("77078"),
  u = a("265586"),
  c = a("54239"),
  d = a("252744"),
  f = a("812204"),
  C = a("685665"),
  E = a("606292"),
  m = a("688318"),
  p = a("946964"),
  g = a("635956"),
  h = a("38766"),
  T = a("601095"),
  b = a("493390"),
  x = a("697218"),
  L = a("944441"),
  S = a("462579"),
  I = a("216422"),
  v = a("956089"),
  _ = a("50885"),
  N = a("21526"),
  A = a("775416"),
  k = a("491232"),
  F = a("342676"),
  O = a("450492"),
  y = a("920580"),
  R = a("54809"),
  j = a("408381"),
  B = a("264579"),
  P = a("57940"),
  D = a("646718"),
  M = a("782340"),
  w = a("395535");
let H = _.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  U = i.AvatarSizes.SIZE_120,
  W = (0, E.getDecorationSizeForAvatarSize)(U),
  G = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(i.Button, {
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
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
    return (0, l.jsx)(i.Button, {
      color: i.ButtonColors.CUSTOM,
      look: i.Button.Looks.FILLED,
      size: i.ButtonSizes.ICON,
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
    isGiftEasterEggEnabled: _
  } = e, {
    analyticsLocations: V
  } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), K = s.useRef(null), Y = (0, d.default)(K), [X, Z] = s.useState(!1), q = Y || X, $ = (0, o.default)([x.default], () => x.default.getCurrentUser()), [J] = t.items, {
    avatarDecorationSrc: Q,
    eventHandlers: ee,
    avatarPlaceholderSrc: et
  } = (0, m.default)({
    user: $,
    avatarDecorationOverride: (null == J ? void 0 : J.type) === u.CollectiblesItemType.AVATAR_DECORATION ? J : void 0,
    size: W,
    animateOnHover: !q
  }), {
    buttonColors: ea,
    backgroundColors: el
  } = (0, P.default)(t.categorySkuId), es = (0, k.getFormattedPriceForCollectiblesProduct)(t, S), er = (0, k.isPremiumCollectiblesProduct)(t), en = (0, k.isFreeCollectiblesProduct)(t), [eo, ei, eu] = (0, o.useStateFromStoresArray)([A.default], () => [A.default.getPurchase(t.skuId), A.default.isClaiming === t.skuId, null != A.default.isClaiming && A.default.isClaiming !== t.skuId]), ec = s.useRef(null);
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
      if ((0, c.popLayer)(), ed(), (null == J ? void 0 : J.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
        (0, E.openAvatarDecorationModal)({
          initialSelectedDecoration: J,
          analyticsLocations: V
        });
        return
      }(null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, b.openProfileEffectModal)({
        initialSelectedEffectId: J.id,
        analyticsLocations: V
      })
    },
    eC = e => l => {
      ec.current = l.currentTarget, (0, R.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: V,
        analyticsSource: e,
        returnRef: ec
      })
    },
    eE = eC(f.default.COLLECTIBLES_SHOP_CARD),
    em = eC(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    ep = () => (0, l.jsx)("div", {
      className: w.hoverUpsellContainer,
      children: (0, l.jsx)(g.default, {
        fullWidth: !0,
        className: w.premiumSubscribeButton,
        disabled: eu,
        onClick: e => e.stopPropagation(),
        buttonText: M.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(K)
  }, [r]);
  let eg = () => null != eo ? (0, l.jsx)(i.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : er ? (0, l.jsx)(i.Text, {
      color: "always-white",
      variant: "text-md/semibold",
      className: w.priceTag,
      children: M.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(y.default, {
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
      onClick: em
    }) : (0, l.jsx)(O.default, {
      product: t,
      returnRef: K,
      isGiftEasterEggEnabled: _,
      tooltipDelay: 250
    }),
    eT = () => {
      if (er && !S && !en) return ep();
      let e = null != ea ? {
          background: (0, j.getBackgroundGradient)(ea, 90),
          color: ea.text.toHslString()
        } : void 0,
        a = er ? {
          submitting: ei,
          submittingStartedLabel: M.default.Messages.COLLECTIBLES_COLLECTING,
          submittingFinishedLabel: M.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
          onClick: async () => {
            await (0, N.claimPremiumCollectiblesProduct)(t.skuId), (0, B.default)({
              product: t,
              analyticsLocations: V
            })
          }
        } : {
          onClick: () => (0, p.default)({
            skuId: t.skuId,
            analyticsLocations: V,
            returnRef: K
          })
        };
      return (0, l.jsxs)("div", {
        className: w.buttonsContainer,
        children: [null == eo ? (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          className: w.purchaseButton,
          ...a,
          children: er ? M.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : M.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: es
          })
        }) : (0, l.jsx)(G, {
          style: e,
          disabled: eu,
          onClick: ef,
          children: M.default.Messages.COLLECTIBLES_USE_NOW
        }), eh()]
      })
    },
    eb = null != el ? {
      background: "".concat((0, j.getBackgroundGradient)(el), " border-box border-box"),
      borderColor: el.border.toHslString(),
      boxShadow: q ? "0 0 25px 1px ".concat(el.primary.toHslString()) : "none"
    } : void 0;
  return (0, l.jsx)(i.FocusRing, {
    children: (0, l.jsxs)(i.Clickable, {
      innerRef: K,
      className: w.shopCard,
      onBlur: () => Z(!1),
      onClick: eE,
      style: eb,
      id: "shop-item-".concat(t.skuId),
      children: [er && (0, l.jsx)(i.Tooltip, {
        tooltipContentClassName: w.premiumWheelTooltipContent,
        color: i.Tooltip.Colors.PRIMARY,
        text: M.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(v.TextBadge, {
          ...e,
          className: w.premiumWheelBadge,
          text: (0, l.jsx)(I.default, {
            className: w.premiumWheel
          })
        })
      }), (null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: w.profileEffectShopPreview,
        children: (0, l.jsx)(T.default, {
          isHovering: q,
          profileEffectId: J.id,
          isPurchased: null != eo
        })
      }), (null == J ? void 0 : J.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(H, {
        ...ee,
        avatarDecoration: Q,
        src: et,
        className: n(w.avatar, {
          [w.avatarPurchased]: null != eo
        }),
        size: U,
        "aria-label": M.default.Messages.USER_SETTINGS_AVATAR
      }), null != eo ? (0, l.jsx)("div", {
        className: (null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT ? w.profileEffectCheckmarkWrapper : w.checkmarkWrapper,
        children: (0, l.jsx)(L.default, {
          width: 38,
          height: 38,
          className: w.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n(w.cardText, {
          [w.cardTextProfileEffect]: (null == J ? void 0 : J.type) === u.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: w.productName,
          children: S && (0, l.jsx)(i.Text, {
            color: "always-white",
            variant: "text-lg/bold",
            children: t.name
          })
        }), (0, l.jsxs)("div", {
          className: w.detailsWrapper,
          children: [(0, l.jsxs)("div", {
            className: w.innerBlur,
            children: [(0, l.jsx)(i.Text, {
              color: "always-white",
              className: w.description,
              variant: "text-md/normal",
              children: t.summary
            }), eg()]
          }), (0, l.jsx)("div", {
            className: w.innerHover,
            children: eT()
          })]
        })]
      }), (0, l.jsx)(F.default, {
        category: a,
        className: w.limitedTimeBadge,
        display: "card"
      })]
    })
  })
}