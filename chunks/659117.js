"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("794252");
var a = r("37983");
r("884691");
var n = r("414456"),
  i = r.n(n),
  s = r("506838"),
  u = r("446674"),
  l = r("77078"),
  o = r("491232"),
  c = r("984002"),
  d = r("716120"),
  E = r("915639"),
  _ = r("824563"),
  f = r("719923"),
  A = r("795158"),
  m = r("782340"),
  I = r("632000");
let h = [{
    avatarSize: l.AvatarSizes.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: l.AvatarSizes.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: l.AvatarSizes.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: l.AvatarSizes.SIZE_32,
    showStatus: !0
  }],
  T = e => {
    let {
      purchase: t
    } = e, r = (0, u.useStateFromStores)([E.default], () => E.default.locale), n = (0, o.isPremiumCollectiblesPurchase)(t);
    return (0, a.jsxs)("div", {
      className: I.purchaseInfo,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: t.name
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), (0, a.jsxs)(l.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [m.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
          date: t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
          })
        }), n && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("br", {}), m.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
        })]
      })]
    })
  };
var R = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    className: n
  } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
    category: R,
    product: S,
    purchase: C
  } = (0, c.default)(null == r ? void 0 : r.skuId), v = f.default.canUseCollectibles(t), g = (0, o.isPremiumCollectiblesPurchase)(C), N = (0, o.isPremiumCollectiblesProduct)(S), p = !v && g;
  return null != S && (null == C || p) ? (0, a.jsxs)("div", {
    className: i(I.modalPreview, I.shopPreviewContainer, n),
    children: [(0, a.jsx)(d.default, {
      asset: null == R ? void 0 : R.banner,
      className: I.shopPreviewBanner,
      children: (0, a.jsx)(A.default, {
        user: t,
        avatarDecorationOverride: r
      })
    }), (0, a.jsxs)("div", {
      className: I.shopPreviewTextContainer,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: S.name
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: p ? m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.match)([N, v]).with([!0, !0], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
      })]
    })]
  }) : (0, a.jsxs)("div", {
    className: i(I.modalPreview, n),
    children: [(0, a.jsxs)("div", {
      className: I.previewSections,
      children: [(0, a.jsx)("div", {
        className: I.decorationPreview,
        children: (0, a.jsx)(A.default, {
          user: t,
          avatarDecorationOverride: r
        })
      }), (0, a.jsx)("div", {
        className: I.smallDecorationPreviewsContainer,
        children: h.map(e => {
          let {
            avatarSize: n,
            showStatus: i
          } = e;
          return (0, a.jsx)("div", {
            className: I.smallDecorationPreview,
            children: (0, a.jsx)(A.default, {
              user: t,
              avatarSize: n,
              avatarDecorationOverride: r,
              status: i ? E : void 0,
              "aria-hidden": !0
            })
          }, "".concat(n).concat(i))
        })
      })]
    }), null != C && (0, a.jsx)(T, {
      purchase: C
    })]
  })
}