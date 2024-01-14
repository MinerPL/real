"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("265586"),
  s = n("446674"),
  a = n("77078"),
  o = n("812204"),
  c = n("685665"),
  u = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  C = n("635956"),
  E = n("906932"),
  p = n("217513"),
  v = n("790618"),
  I = n("697218"),
  g = n("599110"),
  _ = n("719923"),
  m = n("717262"),
  L = n("598854"),
  N = n("49111"),
  S = n("646718"),
  A = n("782340"),
  T = n("811855");

function x(e) {
  let {
    user: t,
    product: n,
    purchase: r,
    onApply: s,
    onClose: c,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: E,
    selectedProfileEffectItem: p,
    analyticsLocations: v
  } = e, I = i.useCallback(() => {
    c(), (0, u.openCollectiblesShop)({
      analyticsLocations: v,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [c, v, p]);
  return (0, l.jsx)(a.ModalFooter, {
    className: T.modalFooter,
    children: (0, l.jsxs)("div", {
      className: T.buttonsRight,
      children: [(0, l.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: c,
        children: A.default.Messages.CANCEL
      }), (() => {
        let e = null != r && (!(0, d.isPremiumCollectiblesPurchase)(r) || h);
        if (e || null === E) return (0, l.jsx)(a.Button, {
          onClick: s,
          disabled: f,
          children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let i = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return i ? (0, l.jsx)(a.Button, {
          className: T.modalFooterShopButton,
          onClick: I,
          children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, l.jsx)(C.default, {
          subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
          buttonText: _.default.isPremium(t) ? A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function P(e) {
  let {
    user: t,
    categories: n,
    purchases: r,
    onClose: o,
    initialSelectedProfileEffectId: c,
    currentSavedEffectId: u,
    analyticsLocations: h
  } = e, C = (0, s.useStateFromStores)([v.default], () => v.default.getPendingProfileEffectId()), [p, I] = i.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, r);
    return [e.purchased, e.shopPreviews]
  }, [n, r]), [g, N] = i.useState(() => null != c ? c : void 0 !== C ? C : null == u ? null : null != u ? u : null), [S, P] = i.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === g),
      n = null != t || null === g,
      l = null !== (e = null != t ? t : I.find(e => (null == e ? void 0 : e.id) === g)) && void 0 !== e ? e : null;
    return [l, n]
  }, [g, p, I]), {
    product: O,
    purchase: R
  } = (0, f.default)(null == S ? void 0 : S.skuId), M = i.useRef(null), F = _.default.canUseCollectibles(t), w = g === (void 0 === C ? null != u ? u : null : C), H = i.useCallback(e => {
    N(e)
  }, [N]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(a.ModalHeader, {
      separator: !1,
      className: T.modalHeader,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: A.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, l.jsx)(a.ModalCloseButton, {
        className: T.modalCloseButton,
        onClick: o
      })]
    }), (0, l.jsxs)(a.ModalContent, {
      className: T.modalContent,
      children: [(0, l.jsx)(L.default, {
        user: t,
        pendingProfileEffect: g,
        selectedProfileEffectRef: M,
        onSelect: H,
        onClose: o
      }), (0, l.jsx)(m.default, {
        user: t,
        canApplySelectedChange: P,
        pendingProfileEffectRecord: S,
        product: O,
        purchase: R
      })]
    }), (0, l.jsx)(x, {
      user: t,
      onApply: () => {
        (0, E.setNewPendingProfileEffectId)(g, u), o()
      },
      onClose: o,
      product: O,
      purchase: R,
      canUseCollectibles: F,
      selectedProfileEffectId: g,
      selectedProfileEffectItem: S,
      disableApplyButton: w,
      analyticsLocations: h
    })]
  })
}

function O(e) {
  var t;
  let {
    transitionState: n,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: C
  } = e, {
    isFetching: E,
    categories: v,
    purchases: _
  } = (0, h.default)(), m = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
    AnalyticsLocationProvider: L,
    analyticsLocations: S
  } = (0, c.default)(d, o.default.EDIT_PROFILE_EFFECT_MODAL), A = (0, p.default)(null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : ""), x = null == A ? void 0 : A.profileEffectId;
  return i.useEffect(() => {
    g.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: N.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: S
    })
  }, [S]), i.useEffect(() => () => {
    (0, u.setCollectiblesCategoryItemsViewed)({
      categories: [...v.values()],
      itemTypes: [r.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [v]), null == m ? null : (0, l.jsx)(L, {
    children: (0, l.jsx)(a.ModalRoot, {
      transitionState: n,
      size: a.ModalSize.DYNAMIC,
      className: T.modal,
      children: E ? (0, l.jsx)(a.Spinner, {
        className: T.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(P, {
        user: m,
        categories: v,
        purchases: _,
        initialSelectedProfileEffectId: f,
        currentSavedEffectId: x,
        onClose: C,
        analyticsLocations: S
      })
    })
  })
}