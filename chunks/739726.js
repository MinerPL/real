"use strict";
n.r(t), n.d(t, {
  GuildProductListingPopout: function() {
    return m
  },
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  u = n("77078"),
  o = n("272030"),
  s = n("801765"),
  a = n("191814"),
  d = n("195812"),
  c = n("83900"),
  f = n("663745"),
  S = n("153160"),
  E = n("928576"),
  h = n("516770"),
  g = n("843455"),
  p = n("782340"),
  _ = n("49738");

function C(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: r,
    showTestDownload: l,
    showDeleteProduct: o,
    showReportProduct: s,
    onEditProduct: a,
    onUnpublishProduct: f,
    onDeleteProduct: S,
    onCopyLink: E,
    onTestDownload: h,
    onReportProduct: g,
    closePopout: C,
    onSelect: m
  } = e;
  return (0, i.jsx)("div", {
    className: _.menuContainer,
    children: (0, i.jsxs)(u.Menu, {
      navId: "guild-product-context",
      onClose: C,
      "aria-label": p.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
      onSelect: m,
      children: [(0, i.jsxs)(u.MenuGroup, {
        children: [t && (0, i.jsx)(u.MenuItem, {
          id: "guild-product-edit",
          label: p.default.Messages.GUILD_PRODUCT_EDIT,
          action: a
        }), r && (0, i.jsx)(u.MenuItem, {
          id: "guild-product-copy-link",
          label: p.default.Messages.GUILD_PRODUCT_COPY_LINK,
          icon: c.default,
          action: E
        }), l && (0, i.jsx)(u.MenuItem, {
          id: "guild-product-test-download",
          label: p.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
          icon: d.default,
          action: h
        })]
      }), (0, i.jsxs)(u.MenuGroup, {
        children: [n && (0, i.jsx)(u.MenuItem, {
          id: "guild-product-unpublish",
          label: p.default.Messages.GUILD_PRODUCT_UNPUBLISH,
          action: f
        }), o && (0, i.jsx)(u.MenuItem, {
          id: "guild-product-delete",
          label: p.default.Messages.GUILD_PRODUCT_DELETE,
          color: "danger",
          action: S
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: s && (0, i.jsx)(u.MenuItem, {
          id: "guild-product-report",
          label: p.default.Messages.GUILD_PRODUCT_REPORT,
          color: "danger",
          action: g
        })
      })]
    })
  })
}

function m(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: r,
    showUnpublishProduct: l,
    showTestDownload: o,
    showCopyLink: s,
    showDeleteProduct: a,
    showReportProduct: d,
    onEditProduct: c,
    onUnpublishProduct: S,
    onDeleteProduct: E,
    onCopyProductLink: h,
    onTestDownload: g,
    onReportProduct: m
  } = e;
  return (0, i.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, i.jsx)(u.Popout, {
      position: "right",
      align: "top",
      spacing: -8,
      animation: u.Popout.Animation.FADE,
      renderPopout: e => (0, i.jsx)(C, {
        ...e,
        guildId: n,
        productId: t.id,
        showEditProduct: r,
        showUnpublishProduct: l,
        showCopyLink: s,
        showTestDownload: o,
        showReportProduct: d,
        showDeleteProduct: a,
        onEditProduct: c,
        onUnpublishProduct: S,
        onDeleteProduct: E,
        onCopyLink: h,
        onTestDownload: g,
        onReportProduct: m
      }),
      children: (e, n) => {
        let {
          isShown: r
        } = n;
        return (0, i.jsx)(u.Clickable, {
          ...e,
          "aria-label": p.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": r,
          className: _.productActionMenuButton,
          children: (0, i.jsx)(f.default, {
            className: _.productActionMenuIcon,
            "aria-hidden": !0
          })
        })
      }
    })
  })
}

function I(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: r,
    onUnpublishProduct: d,
    onDeleteProduct: c,
    onCopyProductLink: f,
    onTestDownload: I,
    disabled: T = !1
  } = e, v = (0, s.useListingThumbnailUrl)(t, 600), N = null !== t.price_tier ? (0, S.formatPrice)(t.price_tier, g.CurrencyCodes.USD) : void 0, R = (0, E.useProductType)(t);
  return (0, i.jsxs)(u.ClickableContainer, {
    tag: "article",
    className: l(_.productCardClickable, _.productCard, {
      [_.disabled]: T
    }),
    onClick: T ? void 0 : r,
    onContextMenu: function(e) {
      (0, o.openContextMenuLazy)(e, () => Promise.resolve(e => (0, i.jsx)(C, {
        ...e,
        closePopout: o.closeContextMenu,
        guildId: n,
        productId: t.id,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyLink: f,
        onTestDownload: I,
        onReportProduct: () => {}
      })))
    },
    "aria-label": p.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
      productName: t.name
    }),
    children: [(0, i.jsx)("img", {
      alt: "",
      src: v,
      className: _.productThumbnail
    }), (0, i.jsxs)("div", {
      className: _.productInfo,
      children: [(0, i.jsxs)("div", {
        className: _.productInfoContent,
        children: [(0, i.jsx)(u.Heading, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: _.productName,
          children: t.name
        }), (0, i.jsx)(a.default, {
          size: 8
        }), (0, i.jsxs)("div", {
          className: _.productDetails,
          children: [(0, i.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: N
          }), null != R ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: _.dotSeparator
            }), (0, i.jsx)(u.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: R
            })]
          }) : null]
        }), (0, i.jsx)(a.default, {
          size: 16
        }), t.published ? (0, i.jsx)(h.PublishedBadge, {}) : (0, i.jsx)(h.DraftBadge, {})]
      }), !T && (0, i.jsx)(m, {
        product: t,
        guildId: n,
        showEditProduct: !0,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: !0,
        showReportProduct: !1,
        onEditProduct: r,
        onUnpublishProduct: d,
        onDeleteProduct: c,
        onCopyProductLink: f,
        onTestDownload: I,
        onReportProduct: () => {}
      })]
    })]
  })
}