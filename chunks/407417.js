"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var l = n("627445"),
  a = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("191814"),
  u = n("246053"),
  d = n("195812"),
  c = n("565559"),
  f = n("35018"),
  E = n("898998"),
  _ = n("782340"),
  T = n("418530");

function I(e) {
  var t, n, l, I;
  let {
    guildId: m,
    productId: N
  } = e, p = (0, i.default)([c.default], () => c.default.getGuildProduct(N)), S = (null !== (I = null == p ? void 0 : null === (t = p.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== I ? I : 0) > 1, A = null == p ? void 0 : null === (l = p.attachments) || void 0 === l ? void 0 : null === (n = l[0]) || void 0 === n ? void 0 : n.id;
  return S ? (0, s.jsxs)(r.Button, {
    onClick: function() {
      f.default.open({
        guildId: m,
        productId: N
      })
    },
    innerClassName: T.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_MULTIPLE_FILES
    }), (0, s.jsx)(o.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(u.default, {
      width: 16,
      height: 16,
      direction: u.default.Directions.RIGHT
    })]
  }) : (a(null != A, "No attachment"), (0, s.jsxs)(E.default, {
    guildId: m,
    productId: N,
    attachmentId: A,
    innerClassName: T.textWithIcon,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.GUILD_PRODUCT_DOWNLOAD_BUTTON_SINGLE_FILE
    }), (0, s.jsx)(o.default, {
      size: 8,
      horizontal: !0
    }), (0, s.jsx)(d.default, {
      width: 16,
      height: 16
    })]
  }))
}