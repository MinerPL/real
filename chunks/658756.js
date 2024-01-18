"use strict";
n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
    return L
  },
  default: function() {
    return M
  }
}), n("222007");
var r = n("37983"),
  o = n("884691"),
  a = n("414456"),
  l = n.n(a),
  i = n("516555"),
  s = n("627445"),
  c = n.n(s),
  u = n("65597"),
  d = n("77078"),
  f = n("265586"),
  C = n("54239"),
  p = n("206230"),
  g = n("812204"),
  b = n("685665"),
  E = n("606292"),
  v = n("688318"),
  m = n("38766"),
  y = n("601095"),
  T = n("493390"),
  x = n("697218"),
  I = n("923702"),
  S = n("716120"),
  O = n("408381"),
  h = n("177586"),
  N = n("782340"),
  _ = n("99242"),
  A = n("53708");
let L = e => {
  let {
    product: t,
    onClose: n,
    confettiTarget: a,
    confettiCanvas: i,
    analyticsLocations: s
  } = e, {
    confettiColors: L,
    backgroundColors: M,
    buttonColors: k
  } = (0, h.default)(t.styles), R = null != k ? {
    background: (0, O.getBackgroundGradient)(k, 90),
    color: k.text.toHslString()
  } : void 0, F = null != M ? {
    background: (0, O.getBackgroundGradient)(M, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, j = (0, u.default)([x.default], () => {
    let e = x.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), B = (0, u.default)([p.default], () => p.default.useReducedMotion), [w] = t.items, {
    avatarDecorationSrc: H
  } = (0, v.default)({
    user: j,
    avatarDecorationOverride: (null == w ? void 0 : w.type) === f.CollectiblesItemType.AVATAR_DECORATION ? w : null,
    size: (0, E.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
  }), D = o.useRef(null), {
    analyticsLocations: z,
    AnalyticsLocationProvider: P
  } = (0, b.default)([...s, g.default.COLLECTIBLES_COLLECTED_MODAL]), V = (0, m.default)({
    analyticsLocations: z
  });
  return (0, r.jsxs)(P, {
    children: [(0, r.jsxs)("div", {
      className: _.modalInner,
      ref: D,
      style: F,
      children: [(0, r.jsxs)("div", {
        className: l(_.bannerContainer, {
          [_.bannerBackgroundFallback]: null == M
        }),
        children: [(0, r.jsx)(S.default, {
          asset: t.banner,
          size: (0, O.getAssetSizeByHeight)(440),
          className: _.decorationBanner
        }), (null == w ? void 0 : w.type) === f.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_120,
          src: A,
          avatarDecoration: H,
          className: _.avatarDecoration,
          "aria-label": t.name
        }), (null == w ? void 0 : w.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
          className: _.profileEffectShopPreview,
          children: (0, r.jsx)(y.default, {
            forCollectedModal: !0,
            profileEffectId: w.id
          })
        })]
      }), (0, r.jsxs)("div", {
        className: l(_.collectedInfoContainer, {
          [_.default]: null == M
        }),
        children: [(0, r.jsxs)("div", {
          className: _.collectedTextContainer,
          children: [(0, r.jsx)(d.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: t.name
            })
          }), (0, r.jsx)(d.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: (null == w ? void 0 : w.type) === f.CollectiblesItemType.PROFILE_EFFECT ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, r.jsx)(d.Button, {
          onClick: () => {
            if (n(), (0, C.popLayer)(), V(), (null == w ? void 0 : w.type) === f.CollectiblesItemType.AVATAR_DECORATION) {
              (0, E.openAvatarDecorationModal)({
                initialSelectedDecoration: w,
                analyticsLocations: z
              });
              return
            }(null == w ? void 0 : w.type) === f.CollectiblesItemType.PROFILE_EFFECT && (0, T.openProfileEffectModal)({
              initialSelectedEffectId: w.id,
              analyticsLocations: z
            })
          },
          style: R,
          children: N.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(d.ModalCloseButton, {
        onClick: n,
        className: _.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !B && (0, r.jsx)(I.default, {
      confettiTarget: null != a ? a : D.current,
      confettiCanvas: i,
      sprites: (0, O.getConfettiSprites)(t.categorySkuId),
      colors: null == L ? void 0 : L.map(e => e.toHexString())
    })]
  })
};
var M = e => {
  let {
    transitionState: t,
    product: n,
    onClose: a,
    analyticsLocations: l
  } = e, s = o.useRef(new i.Environment), [c, u] = o.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.ConfettiCanvas, {
      ref: u,
      className: _.confettiCanvas,
      environment: s.current
    }), (0, r.jsx)(d.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: d.ModalSize.DYNAMIC,
      className: _.modalRoot,
      children: (0, r.jsx)(d.ModalContent, {
        className: _.modalContent,
        children: (0, r.jsx)(L, {
          product: n,
          onClose: a,
          confettiCanvas: c,
          analyticsLocations: l
        })
      })
    })]
  })
}