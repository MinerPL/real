"use strict";
A.r(t), A.d(t, {
  default: function() {
    return m
  }
});
var a = A("37983");
A("884691");
var l = A("414456"),
  n = A.n(l),
  r = A("77078"),
  s = A("17692"),
  o = A("944371"),
  i = A("191814"),
  u = A("476765"),
  d = A("538137"),
  c = A("600785"),
  f = A("246421"),
  C = A("782340"),
  g = A("767165");

function h(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: A,
    className: l,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: n(g.productThumbnailContainer, l),
    children: [s, !t && (0, a.jsxs)("div", {
      className: g.purchaseToUnlockBadge,
      children: [(0, a.jsx)(c.default, {
        className: g.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: g.unlockText,
        children: C.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    }), A && (0, a.jsx)("div", {
      className: g.draftBadge,
      children: (0, a.jsx)(o.MonetizationListingDraftBadge, {})
    })]
  })
}

function T(e) {
  let {
    onShowFullDescription: t,
    variant: A
  } = e, l = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Text, {
      variant: A,
      color: null != t ? "text-link" : "interactive-hover",
      children: C.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      className: g.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == t ? (0, a.jsx)("div", {
    className: g.showMoreButton,
    children: l
  }) : (0, a.jsx)(r.Clickable, {
    className: n(g.showMoreButton, g.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: l
  })
}

function m(e) {
  let {
    imageUrl: t,
    name: A,
    description: l,
    formattedPrice: o,
    role: d,
    ctaComponent: c,
    shouldShowFullDescriptionButton: m = !0,
    onShowFullDescription: p,
    productType: I,
    onTapCard: U,
    actionMenu: v,
    showOpaqueBackground: E = !1,
    hideRoleTag: x = !1,
    lineClamp: N = 1,
    cardWidth: q = 332,
    cardHeight: O,
    thumbnailHeight: R = 187,
    descriptionTextVariant: L = "text-sm/normal",
    isDraft: D = !1
  } = e, P = (0, u.uid)(), V = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h, {
      showDraftBadge: D,
      hidePurchaseToUnlockBadge: !0,
      children: (0, a.jsx)("img", {
        alt: "",
        src: t,
        className: g.productThumbnail,
        style: {
          height: R
        }
      })
    }), (0, a.jsxs)("div", {
      className: g.productDetails,
      children: [(0, a.jsxs)("div", {
        className: g.productDetailContent,
        children: [(0, a.jsx)(r.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: g.productName,
          id: P,
          children: A
        }), (0, a.jsx)(r.FocusBlock, {
          children: (0, a.jsx)(s.default, {
            variant: L,
            color: "text-muted",
            lineClamp: N,
            text: l
          })
        }), m && (0, a.jsx)(T, {
          onShowFullDescription: p,
          variant: L
        }), x || null == d || "" === d.name ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(i.default, {
            size: 16
          }), (0, a.jsx)(f.default, {
            role: d
          })]
        })]
      }), v]
    }), (0, a.jsxs)("div", {
      className: g.purchaseDetails,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: g.productPrice,
        children: null != o ? o : C.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, a.jsx)(r.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: g.productType,
        children: I
      }), (0, a.jsx)("div", {
        className: g.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: c
      })]
    })]
  });
  return null == U ? (0, a.jsx)("article", {
    className: n(g.productCard, E ? g.opaqueBackground : g.solidBackground),
    "aria-labelledby": P,
    children: V
  }) : (0, a.jsx)("div", {
    style: {
      width: q,
      height: O
    },
    children: (0, a.jsx)(r.ClickableContainer, {
      tag: "article",
      "aria-label": C.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: A
      }),
      className: n(g.productCard, E ? g.opaqueBackground : g.solidBackground, g.cardClickableContainer),
      onClick: U,
      children: V
    })
  })
}