"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var n = s("281071"),
  l = s("77078"),
  i = s("763838"),
  r = s("465869"),
  o = s("191814"),
  d = s("151185"),
  u = s("359366"),
  c = s("442379"),
  E = s("757515"),
  _ = s("727411"),
  T = s("35018"),
  I = s("739726"),
  S = s("782340"),
  N = s("540583");
let g = "guild-product-listings-header";

function f(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: o
  } = e, d = (0, c.useGuildProductsForGuild)(t, {
    publishedOnly: !1
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: _
  } = (0, r.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), f = e => {
    (0, u.updateGuildProductListing)(t, e, {
      published: !1
    })
  }, A = (e, n) => {
    (0, l.openModalLazy)(async () => {
      let {
        default: l
      } = await s.el("757949").then(s.bind(s, "757949"));
      return s => (0, a.jsx)(l, {
        guildId: t,
        productId: e,
        productName: n,
        ...s
      })
    })
  }, L = (e, t) => {
    (0, n.copy)((0, E.getGuildProductListingUrl)(e, t))
  }, m = d.length > 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.FormTitle, {
      className: N.productListingsHeader,
      id: g,
      children: m ? S.default.Messages.GUILD_PRODUCTS_YOUR_PRODUCTS_HEADER : S.default.Messages.GUILD_PRODUCTS_NO_PRODUCTS_HEADER
    }), m ? (0, a.jsx)("ul", {
      className: N.productListings,
      "aria-labelledby": g,
      children: d.map(e => (0, a.jsx)("li", {
        children: (0, a.jsx)(I.default, {
          guildId: t,
          product: e,
          onEditProduct: () => o(e.id),
          onUnpublishProduct: () => f(e.id),
          onDeleteProduct: () => A(e.id, e.name),
          onCopyProductLink: () => L(t, e.id),
          onTestDownload: () => T.default.open({
            guildId: t,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: _
        })
      }, e.id))
    }) : (0, a.jsx)(i.default, {
      guildId: t,
      showCTA: !1,
      responsive: !1
    })]
  })
}

function A(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: s
  } = (0, r.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), n = e => {
    _.openModal(t, e)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.Button, {
      className: N.addButton,
      innerClassName: N.addButtonInner,
      onClick: () => n(null),
      disabled: s,
      children: [(0, a.jsx)(d.default, {
        width: 20,
        height: 20,
        "aria-hidden": !0
      }), (0, a.jsx)(o.default, {
        size: 6,
        horizontal: !0
      }), S.default.Messages.GUILD_PRODUCTS_CREATE_PRODUCT_BUTTON]
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsx)(f, {
      guildId: t,
      handleCreateOrEditProduct: n
    })]
  })
}