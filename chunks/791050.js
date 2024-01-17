"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("265586"),
  s = r("446674"),
  u = r("77078"),
  l = r("812204"),
  o = r("685665"),
  c = r("21526"),
  d = r("491232"),
  E = r("984002"),
  _ = r("235898"),
  f = r("170313"),
  A = r("635956"),
  m = r("91653"),
  I = r("697218"),
  h = r("599110"),
  T = r("719923"),
  R = r("234251"),
  S = r("659117"),
  C = r("765221"),
  v = r("49111"),
  g = r("646718"),
  N = r("782340"),
  p = r("705057");

function O(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: i,
    onClose: s,
    initialSelectedDecoration: o,
    isTryItOutFlow: _
  } = e, {
    pendingAvatarDecoration: I,
    setPendingAvatarDecoration: h
  } = (0, m.default)({
    analyticsLocations: i,
    isTryItOut: _
  }), [v, O] = n.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== I) return I;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let a = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = a.find(e => (0, R.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: D
  } = (0, E.default)(null == v ? void 0 : v.skuId), x = T.default.canUseCollectibles(t), H = n.useRef(null), P = (0, f.default)(i), L = (0, R.isEqualAvatarDecoration)(v, void 0 === I ? null == t ? void 0 : t.avatarDecoration : I), U = () => {
    h(v), s()
  }, j = n.useCallback(() => {
    s(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != v ? v.skuId : void 0
    })
  }, [i, s, v]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.ModalHeader, {
      separator: !1,
      className: p.modalHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: N.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(u.ModalCloseButton, {
        className: p.modalCloseButton,
        onClick: s
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: p.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(C.default, {
        user: t,
        pendingAvatarDecoration: v,
        selectedAvatarDecorationRef: H,
        onSelect: e => {
          O(e), null != e && P(e)
        },
        onOpenShop: j
      }), (0, a.jsx)(S.default, {
        className: p.modalPreview,
        user: t,
        avatarDecorationOverride: v
      })]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: p.modalFooter,
      children: [(() => {
        let e = null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || x);
        if (e || null === v) return (0, a.jsx)(u.Button, {
          onClick: U,
          disabled: L,
          children: N.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = x || !(0, d.isPremiumCollectiblesProduct)(M);
        return r ? (0, a.jsx)(u.Button, {
          className: p.modalFooterShopButton,
          onClick: j,
          children: N.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(A.default, {
          subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
          buttonText: T.default.isPremium(t) ? N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: s,
        children: N.default.Messages.CANCEL
      })]
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: E,
    isTryItOutFlow: f
  } = e, A = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
    AnalyticsLocationProvider: m,
    analyticsLocations: T
  } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: R,
    purchases: S,
    isFetchingCategories: C,
    isFetchingPurchases: g
  } = (0, _.default)(), N = C || g && 0 === S.size;
  return n.useEffect(() => {
    h.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: T
    })
  }, [T]), n.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...R.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [R]), null == A ? null : (0, a.jsx)(m, {
    children: (0, a.jsx)(u.ModalRoot, {
      transitionState: t,
      className: p.modal,
      size: N ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: N ? (0, a.jsx)(u.Spinner, {
        className: p.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(O, {
        user: A,
        categories: R,
        analyticsLocations: T,
        initialSelectedDecoration: E,
        onClose: d,
        isTryItOutFlow: f
      })
    })
  })
}