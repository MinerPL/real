"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  d = a("627445"),
  s = a.n(d),
  i = a("65597"),
  u = a("77078"),
  r = a("404118"),
  o = a("305961"),
  _ = a("191814"),
  c = a("423487"),
  E = a("359366"),
  f = a("565559"),
  T = a("782340"),
  D = a("49680");

function O(e) {
  var t;
  let {
    guildProductListing: a,
    guildId: n
  } = e, d = (0, i.default)([o.default], () => o.default.getGuild(n)), s = null == d ? void 0 : d.roles[null !== (t = null == a ? void 0 : a.role_id) && void 0 !== t ? t : ""];
  return null == s ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.Heading, {
      className: D.warningSectionHeader,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, l.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, l.jsx)(_.default, {
        horizontal: !0,
        size: 8
      }), T.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING_HEADER]
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      children: T.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING.format({
        roleName: s.name
      })
    })]
  })
}

function m(e) {
  let {
    guildId: t,
    productId: a,
    ...d
  } = e, [i] = n.useState(() => f.default.getGuildProduct(a));
  s(null != i, "guildProductListing cannot be null");
  let [o, _] = n.useState(!1), c = async () => {
    try {
      _(!0), await E.deleteGuildProductListing(t, a)
    } catch (e) {
      r.default.show({
        title: T.default.Messages.GUILD_PRODUCTS_DELETE_ERROR_TITLE,
        body: e.message
      })
    } finally {
      _(!1)
    }
  };
  return (0, l.jsxs)(u.ConfirmModal, {
    ...d,
    className: D.modalContainer,
    header: T.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_HEADER,
    confirmText: T.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BUTTON,
    cancelText: T.default.Messages.CANCEL,
    loading: o,
    onConfirm: c,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      children: T.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY.format({
        productName: i.name
      })
    }), (0, l.jsx)(O, {
      guildProductListing: i,
      guildId: t
    })]
  })
}