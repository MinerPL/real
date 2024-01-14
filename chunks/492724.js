"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("77078"),
  r = n("17692"),
  o = n("191814"),
  u = n("476765"),
  d = n("538137"),
  c = n("600785"),
  f = n("246421"),
  m = n("782340"),
  E = n("767165");

function _(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    className: n,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: l(E.productThumbnailContainer, n),
    children: [s, !t && (0, a.jsxs)("div", {
      className: E.purchaseToUnlockBadge,
      children: [(0, a.jsx)(c.default, {
        className: E.lockIcon,
        width: 16,
        height: 16,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: E.unlockText,
        children: m.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
      })]
    })]
  })
}

function h(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, s = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-hover",
      children: m.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      className: E.arrowIcon,
      backgroundColor: "currentColor",
      width: 16,
      height: 16
    })]
  });
  return null == t ? (0, a.jsx)("div", {
    className: E.showMoreButton,
    children: s
  }) : (0, a.jsx)(i.Clickable, {
    className: l(E.showMoreButton, E.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: s
  })
}

function p(e) {
  let {
    imageUrl: t,
    name: n,
    description: s,
    formattedPrice: d,
    role: c,
    ctaComponent: p,
    shouldShowFullDescriptionButton: I = !0,
    onShowFullDescription: T,
    productType: g,
    onTapCard: C,
    actionMenu: S,
    showOpaqueBackground: A = !1,
    hideRoleTag: N = !1,
    lineClamp: M = 1,
    cardWidth: v = 332,
    cardHeight: x,
    thumbnailHeight: O = 187,
    descriptionTextVariant: L = "text-sm/normal"
  } = e, R = (0, u.uid)(), y = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_, {
      hidePurchaseToUnlockBadge: !0,
      children: (0, a.jsx)("img", {
        alt: "",
        src: t,
        className: E.productThumbnail,
        style: {
          height: O
        }
      })
    }), (0, a.jsxs)("div", {
      className: E.productDetails,
      children: [(0, a.jsxs)("div", {
        className: E.productDetailContent,
        children: [(0, a.jsx)(i.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: E.productName,
          id: R,
          children: n
        }), (0, a.jsx)(i.FocusBlock, {
          children: (0, a.jsx)(r.default, {
            variant: L,
            color: "text-muted",
            lineClamp: M,
            text: s
          })
        }), I && (0, a.jsx)(h, {
          onShowFullDescription: T,
          variant: L
        }), N || null == c || "" === c.name ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.default, {
            size: 16
          }), (0, a.jsx)(f.default, {
            role: c
          })]
        })]
      }), S]
    }), (0, a.jsxs)("div", {
      className: E.purchaseDetails,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: E.productPrice,
        children: null != d ? d : m.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
      }), (0, a.jsx)(i.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: E.productType,
        children: g
      }), (0, a.jsx)("div", {
        className: E.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: p
      })]
    })]
  });
  return null == C ? (0, a.jsx)("article", {
    className: l(E.productCard, A ? E.opaqueBackground : E.solidBackground),
    "aria-labelledby": R,
    children: y
  }) : (0, a.jsx)("div", {
    style: {
      width: v,
      height: x
    },
    children: (0, a.jsx)(i.ClickableContainer, {
      tag: "article",
      "aria-label": m.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
        productName: n
      }),
      className: l(E.productCard, A ? E.opaqueBackground : E.solidBackground, E.cardClickableContainer),
      onClick: C,
      children: y
    })
  })
}