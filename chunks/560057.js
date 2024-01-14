"use strict";
a.r(e), a.d(e, {
  default: function() {
    return L
  }
});
var n = a("37983");
a("884691");
var s = a("627445"),
  l = a.n(s),
  i = a("617258"),
  r = a("446674"),
  u = a("769846"),
  o = a("77078"),
  c = a("750482"),
  d = a("305961"),
  f = a("191814"),
  m = a("195812"),
  h = a("565559"),
  x = a("911029"),
  g = a("898998"),
  v = a("782340"),
  j = a("681685");
let N = (0, i.cssValueToNumber)(u.default.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function I(t) {
  let {
    guildProductListing: e,
    guildId: a,
    onClose: s
  } = t, l = (0, r.useStateFromStores)([d.default], () => {
    var t;
    return null === (t = d.default.getGuild(a)) || void 0 === t ? void 0 : t.name
  });
  return (0, n.jsxs)(o.ModalHeader, {
    className: j.header,
    children: [(0, n.jsx)(c.default, {
      className: j.headerImage,
      listing: e,
      imageSize: N,
      alt: ""
    }), (0, n.jsx)(f.default, {
      size: 16,
      horizontal: !0
    }), (0, n.jsxs)("div", {
      className: j.headerTextColumn,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: e.name
      }), (0, n.jsx)(f.default, {
        size: 8
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.description,
        children: l
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: j.description,
        children: v.default.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: e.attachments_count
        })
      })]
    }), (0, n.jsx)(o.ModalCloseButton, {
      className: j.closeButton,
      onClick: s
    })]
  })
}

function p(t) {
  let {
    attachment: e,
    guildId: a,
    productId: s
  } = t;
  return (0, n.jsxs)("li", {
    className: j.attachmentRow,
    children: [(0, n.jsx)(x.default, {
      attachment: e
    }), (0, n.jsx)(g.default, {
      className: j.attachmentDownloadButton,
      guildId: a,
      productId: s,
      attachmentId: e.id,
      children: (0, n.jsx)(m.default, {})
    })]
  })
}

function L(t) {
  var e;
  let {
    guildId: a,
    productId: s,
    onClose: i,
    transitionState: u
  } = t, c = (0, r.useStateFromStores)([h.default], () => h.default.getGuildProduct(s));
  l(null != c, "guildProductListing cannot be null");
  let d = null !== (e = c.attachments) && void 0 !== e ? e : [];
  return (0, n.jsxs)(o.ModalRoot, {
    className: j.modal,
    size: o.ModalSize.MEDIUM,
    transitionState: u,
    "aria-label": v.default.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
    children: [(0, n.jsx)(I, {
      guildId: a,
      guildProductListing: c,
      onClose: i
    }), (0, n.jsx)(o.ModalContent, {
      children: (0, n.jsx)("ul", {
        className: j.attachmentsList,
        children: d.map(t => (0, n.jsx)(p, {
          guildId: a,
          productId: c.id,
          attachment: t
        }, t.id))
      })
    })]
  })
}