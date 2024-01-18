"use strict";
l.r(t), l.d(t, {
  default: function() {
    return en
  }
}), l("222007");
var s = l("37983"),
  a = l("884691"),
  i = l("635058"),
  o = l("65597"),
  n = l("77078"),
  r = l("265586"),
  d = l("54239"),
  u = l("152584"),
  c = l("812204"),
  C = l("685665"),
  E = l("606292"),
  m = l("688318"),
  I = l("692038"),
  T = l("815297"),
  L = l("574073"),
  f = l("291655"),
  p = l("946964"),
  A = l("649844"),
  _ = l("635956"),
  h = l("38766"),
  O = l("184900"),
  g = l("493390"),
  v = l("217513"),
  S = l("790618"),
  x = l("697218"),
  N = l("46829"),
  y = l("216422"),
  R = l("351825"),
  b = l("599110"),
  M = l("719923"),
  P = l("21526"),
  D = l("775416"),
  k = l("491232"),
  j = l("716120"),
  w = l("89569"),
  B = l("665484"),
  F = l("342676"),
  U = l("450492"),
  H = l("920580"),
  V = l("791309"),
  z = l("54809"),
  W = l("408381"),
  G = l("264579"),
  Y = l("177586"),
  K = l("49111"),
  X = l("646718"),
  Z = l("843455"),
  q = l("782340"),
  J = l("483622"),
  Q = l("53708");
let $ = n.AvatarSizes.SIZE_152,
  ee = (0, E.getDecorationSizeForAvatarSize)($),
  et = (0, W.getLogoSize)(18),
  el = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, C.default)(), i = a.useRef(null);
    return (0, s.jsx)(n.Clickable, {
      className: J.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, A.default)({
          subscriptionTier: X.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  es = e => {
    let {
      product: t,
      user: l,
      category: c,
      onClose: I,
      returnRef: T
    } = e, {
      analyticsLocations: L
    } = (0, C.default)(), f = M.default.canUseCollectibles(l), [A, O] = (0, o.useStateFromStoresArray)([D.default], () => [D.default.getPurchase(t.skuId), D.default.isClaiming === t.skuId]), v = (0, h.default)({
      analyticsLocations: L
    }), {
      buttonColors: S,
      backgroundColors: x
    } = (0, Y.default)(t.styles), N = null != S ? {
      background: (0, W.getBackgroundGradient)(S, 90),
      color: S.text.toHslString()
    } : void 0, R = null != x ? {
      background: (0, W.getBackgroundGradient)(x, 135)
    } : void 0, b = (0, k.isPremiumCollectiblesProduct)(t), j = (0, k.extractPriceByPurchaseTypes)(t, K.PriceSetAssignmentPurchaseTypes.DEFAULT), w = (null == j ? void 0 : j.amount) === 0, [es] = t.items;
    a.useEffect(() => {
      if ((null == es ? void 0 : es.type) === r.CollectiblesItemType.AVATAR_DECORATION) return (0, u.setPendingAvatarDecoration)(es), () => (0, u.setPendingAvatarDecoration)(void 0)
    }, [es]);
    let ea = e => (0, s.jsx)(_.default, {
        subscriptionTier: X.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: z.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, z.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: c,
            returnRef: T,
            analyticsLocations: L
          })
        }
      }),
      {
        avatarDecorationSrc: ei,
        eventHandlers: eo
      } = (0, m.default)({
        user: l,
        avatarDecorationOverride: (null == es ? void 0 : es.type) === r.CollectiblesItemType.AVATAR_DECORATION ? es : null,
        size: ee
      });
    return (0, s.jsxs)("div", {
      className: J.collectibleInfoContainer,
      style: R,
      children: [(0, s.jsxs)("div", {
        className: J.titleContainer,
        children: [(0, s.jsx)("div", {
          children: (0, s.jsx)("img", {
            className: t.categorySkuId === i.CollectiblesCategorySkuId.WINTER ? J.winterTitleImage : J.titleImage,
            src: (0, k.getCollectiblesAssetURL)(c.logo, {
              size: et
            }),
            alt: c.name
          })
        }), (0, s.jsx)(F.default, {
          category: c,
          display: "modal"
        })]
      }), (null == es ? void 0 : es.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)("div", {
        className: J.avatarPreviewContainer,
        children: (0, s.jsx)(n.Avatar, {
          ...eo,
          "aria-label": q.default.Messages.USER_SETTINGS_AVATAR,
          size: $,
          avatarDecoration: ei,
          src: Q
        })
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: J.description,
          children: [(0, s.jsx)(B.default, {
            item: es
          }), (0, s.jsx)(n.Heading, {
            color: "always-white",
            variant: "heading-xl/extrabold",
            className: J.headingWithItemTypePill,
            children: t.name
          }), (0, s.jsx)(n.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: t.summary
          }), (() => {
            if (null != A) return (0, s.jsx)(n.Text, {
              color: "always-white",
              variant: "text-md/semibold",
              className: J.priceTag,
              children: q.default.Messages.COLLECTIBLES_ALREADY_OWNED
            });
            if (b) return (0, s.jsx)(n.Text, {
              color: "always-white",
              variant: "text-md/semibold",
              className: J.priceTag,
              children: q.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
            });
            if (f) return (0, s.jsx)(H.default, {
              product: t,
              className: J.priceTag
            });
            if (null == j) return null;
            let e = (0, k.extractPriceByPurchaseTypes)(t, K.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
            return (0, s.jsxs)("div", {
              className: J.priceTagContainer,
              children: [(0, s.jsx)(V.default, {
                price: j
              }), null != e && !w && (0, s.jsx)(V.default, {
                price: e,
                variant: "text-xs/medium",
                className: J.premiumPriceTag,
                renderPrice: e => q.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                  price: e,
                  subscribeNowHook: e => (0, s.jsx)(el, {
                    text: e
                  })
                }),
                icon: (0, s.jsx)(n.Tooltip, {
                  text: q.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": q.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  children: e => {
                    let {
                      ...t
                    } = e;
                    return (0, s.jsx)(y.default, {
                      ...t,
                      className: J.premiumPriceTagIcon,
                      color: "white"
                    })
                  }
                })
              })]
            })
          })()]
        }), (0, s.jsx)("div", {
          className: J.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: J.primaryButtons,
            children: [!b || f || w ? null != A ? (0, s.jsx)(n.Button, {
              className: J.button,
              look: n.Button.Looks.FILLED,
              onClick: () => {
                if (I(), (0, d.popLayer)(), v(), (null == es ? void 0 : es.type) === r.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, E.openAvatarDecorationModal)({
                    initialSelectedDecoration: es,
                    analyticsLocations: L
                  });
                  return
                }(null == es ? void 0 : es.type) === r.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
                  initialSelectedEffectId: es.id,
                  analyticsLocations: L
                })
              },
              children: q.default.Messages.COLLECTIBLES_USE_NOW
            }) : b ? (0, s.jsx)(n.Button, {
              style: N,
              className: J.button,
              look: n.Button.Looks.FILLED,
              submitting: O,
              submittingStartedLabel: q.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, P.claimPremiumCollectiblesProduct)(t.skuId), I(), (0, G.default)({
                  product: t,
                  analyticsLocations: L
                })
              },
              children: q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(n.Button, {
              style: N,
              className: J.button,
              look: n.Button.Looks.FILLED,
              onClick: () => (0, p.default)({
                skuId: t.skuId,
                analyticsLocations: L,
                onClose: e => e ? I() : (0, Z.NOOP)()
              }),
              children: (null == es ? void 0 : es.type) === r.CollectiblesItemType.PROFILE_EFFECT ? q.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : q.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : ea(q.default.Messages.UNLOCK_WITH_NITRO), !b && !w && (0, s.jsx)(U.default, {
              product: t,
              onSuccess: I
            })]
          })
        }), (0, s.jsx)(n.Text, {
          color: "none",
          className: J.disclaimer,
          variant: "text-xxs/normal",
          children: null != A ? null : b ? q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == es ? void 0 : es.type) === r.CollectiblesItemType.PROFILE_EFFECT ? q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ea = e => {
    let {
      product: t,
      user: l
    } = e, a = M.default.canUsePremiumProfileCustomization(l), i = (0, o.useStateFromStoresObject)([S.default], () => S.default.getAllPending()), n = (0, v.default)(l.id), d = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items;
    return (0, s.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION ? J.previewsContainerInner : J.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(O.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: Z.NOOP,
        onBannerChange: Z.NOOP,
        bodyClassName: J.profileCustomizationBody,
        pendingAvatarDecoration: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION ? u : void 0,
        pendingProfileEffectId: (null == u ? void 0 : u.type) === r.CollectiblesItemType.PROFILE_EFFECT ? u.id : void 0,
        forProfileEffectModal: (null == u ? void 0 : u.type) === r.CollectiblesItemType.PROFILE_EFFECT,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION || d,
        hideBioSection: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION,
        hideMemberStatusSection: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION,
        useLargeBanner: !0
      }), (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(eo, {
        user: l
      })]
    })
  },
  ei = e => {
    let {
      author: t
    } = e, l = (0, I.createMessageRecord)({
      ...(0, T.default)({
        author: t,
        channelId: "1337",
        content: q.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: K.MessageStates.SENT,
      id: "0"
    });
    return l
  },
  eo = e => {
    let {
      user: t
    } = e, l = ei({
      author: t
    });
    return (0, s.jsx)(n.FocusBlock, {
      children: (0, s.jsxs)(n.Card, {
        className: J.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(f.default, {
          className: J.mockMessage,
          author: (0, L.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: J.mockInput,
          children: [(0, s.jsx)(R.default, {
            className: J.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(N.default, {
            className: J.mockInputButton,
            width: 24,
            height: 24
          })]
        })]
      })
    })
  };
var en = e => {
  let {
    transitionState: t,
    onClose: l,
    product: i,
    category: d,
    returnRef: u,
    analyticsSource: E,
    analyticsLocations: m
  } = e, I = (0, o.default)([x.default], () => x.default.getCurrentUser()), {
    analyticsLocations: T,
    AnalyticsLocationProvider: L
  } = (0, C.default)([...m, c.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, w.useProductDetailsLinkableRoute)(i);
  let [f] = i.items;
  return (a.useEffect(() => {
    let e = (null == f ? void 0 : f.type) === r.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    b.default.track(K.AnalyticEvents.OPEN_MODAL, {
      type: K.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: E,
      location_stack: T,
      sku_id: i.skuId,
      product_type: e
    }), i.items.map(P.productDetailsOpened)
  }, [E, T, i.skuId, i.items, null == f ? void 0 : f.type]), null == I) ? null : (0, s.jsx)(L, {
    children: (0, s.jsx)(n.ModalRoot, {
      hideShadow: !0,
      className: J.modalRoot,
      returnRef: u,
      transitionState: t,
      size: n.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(n.ModalContent, {
        className: J.modalContent,
        children: [(0, s.jsx)(es, {
          user: I,
          product: i,
          category: d,
          onClose: l
        }), (0, s.jsxs)("div", {
          className: (null == f ? void 0 : f.type) === r.CollectiblesItemType.AVATAR_DECORATION ? J.collectiblePreviewsContainerWithChat : J.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(j.default, {
            asset: i.banner,
            size: (0, W.getAssetSizeByHeight)(540),
            className: J.categoryBanner
          }), (0, s.jsx)(ea, {
            user: I,
            product: i
          })]
        }), (0, s.jsx)(n.ModalCloseButton, {
          onClick: l,
          className: J.modalCloseButton,
          withCircleBackground: !0
        })]
      })
    })
  })
}