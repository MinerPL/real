"use strict";
o.r(t), o.d(t, {
  CollectiblesCollectedModalInner: function() {
    return h
  },
  default: function() {
    return L
  }
}), o("222007");
var r = o("37983"),
  n = o("884691"),
  a = o("414456"),
  l = o.n(a),
  s = o("516555"),
  i = o("627445"),
  u = o.n(i),
  c = o("65597"),
  d = o("77078"),
  C = o("265586"),
  f = o("54239"),
  E = o("206230"),
  p = o("812204"),
  g = o("685665"),
  F = o("606292"),
  b = o("688318"),
  T = o("38766"),
  S = o("601095"),
  I = o("493390"),
  A = o("697218"),
  _ = o("923702"),
  O = o("716120"),
  v = o("408381"),
  m = o("57940"),
  x = o("782340"),
  y = o("99242"),
  N = o("53708");
let h = e => {
  let {
    product: t,
    onClose: o,
    confettiTarget: a,
    confettiCanvas: s,
    analyticsLocations: i
  } = e, {
    confettiColors: h,
    confettiSprites: L,
    backgroundColors: B,
    buttonColors: R
  } = (0, m.default)(t.categorySkuId), D = null != R ? {
    background: (0, v.getBackgroundGradient)(R, 90),
    color: R.text.toHslString()
  } : void 0, k = null != B ? {
    background: (0, v.getBackgroundGradient)(B, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, M = (0, c.default)([A.default], () => {
    let e = A.default.getCurrentUser();
    return u(null != e, "User cannot be undefined"), e
  }), j = (0, c.default)([E.default], () => E.default.useReducedMotion), [P] = t.items, {
    avatarDecorationSrc: w
  } = (0, b.default)({
    user: M,
    avatarDecorationOverride: (null == P ? void 0 : P.type) === C.CollectiblesItemType.AVATAR_DECORATION ? P : null,
    size: (0, F.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
  }), H = n.useRef(null), {
    analyticsLocations: z,
    AnalyticsLocationProvider: U
  } = (0, g.default)([...i, p.default.COLLECTIBLES_COLLECTED_MODAL]), V = (0, T.default)({
    analyticsLocations: z
  });
  return (0, r.jsxs)(U, {
    children: [(0, r.jsxs)("div", {
      className: y.modalInner,
      ref: H,
      style: k,
      children: [(0, r.jsxs)("div", {
        className: l(y.bannerContainer, {
          [y.bannerBackgroundFallback]: null == B
        }),
        children: [(0, r.jsx)(O.default, {
          asset: t.banner,
          size: (0, v.getAssetSizeByHeight)(440),
          className: y.decorationBanner
        }), (null == P ? void 0 : P.type) === C.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_120,
          src: N,
          avatarDecoration: w,
          className: y.avatarDecoration,
          "aria-label": t.name
        }), (null == P ? void 0 : P.type) === C.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
          className: y.profileEffectShopPreview,
          children: (0, r.jsx)(S.default, {
            forCollectedModal: !0,
            profileEffectId: P.id
          })
        })]
      }), (0, r.jsxs)("div", {
        className: l(y.collectedInfoContainer, {
          [y.default]: null == B
        }),
        children: [(0, r.jsxs)("div", {
          className: y.collectedTextContainer,
          children: [(0, r.jsx)(d.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: x.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: t.name
            })
          }), (0, r.jsx)(d.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: (null == P ? void 0 : P.type) === C.CollectiblesItemType.PROFILE_EFFECT ? x.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : x.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, r.jsx)(d.Button, {
          onClick: () => {
            if (o(), (0, f.popLayer)(), V(), (null == P ? void 0 : P.type) === C.CollectiblesItemType.AVATAR_DECORATION) {
              (0, F.openAvatarDecorationModal)({
                initialSelectedDecoration: P,
                analyticsLocations: z
              });
              return
            }(null == P ? void 0 : P.type) === C.CollectiblesItemType.PROFILE_EFFECT && (0, I.openProfileEffectModal)({
              initialSelectedEffectId: P.id,
              analyticsLocations: z
            })
          },
          style: D,
          children: x.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(d.ModalCloseButton, {
        onClick: o,
        className: y.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !j && (0, r.jsx)(_.default, {
      confettiTarget: null != a ? a : H.current,
      confettiCanvas: s,
      sprites: null != L ? L : m.DEFAULT_CONFETTI_SPRITES,
      colors: null != h ? h : m.DEFAULT_CONFETTI_COLORS
    })]
  })
};
var L = e => {
  let {
    transitionState: t,
    product: o,
    onClose: a,
    analyticsLocations: l
  } = e, i = n.useRef(new s.Environment), [u, c] = n.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ConfettiCanvas, {
      ref: c,
      className: y.confettiCanvas,
      environment: i.current
    }), (0, r.jsx)(d.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: d.ModalSize.DYNAMIC,
      className: y.modalRoot,
      children: (0, r.jsx)(d.ModalContent, {
        className: y.modalContent,
        children: (0, r.jsx)(h, {
          product: o,
          onClose: a,
          confettiCanvas: u,
          analyticsLocations: l
        })
      })
    })]
  })
}