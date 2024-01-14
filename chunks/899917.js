"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var r = n("37983");
n("884691");
var o = n("446674"),
  i = n("77078"),
  a = n("387225"),
  u = n("697218"),
  s = n("145131"),
  l = n("782340"),
  c = n("557573");

function d(e) {
  let {
    onClose: t
  } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser());

  function c() {
    null == t || t()
  }

  function d() {
    c(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("867693").then(n.bind(n, "867693"));
      return t => (0, r.jsx)(e, {
        ...t
      })
    })
  }
  return (null == s ? void 0 : s.email) == null ? (0, r.jsx)(i.Button, {
    onClick: d,
    color: i.Button.Colors.BRAND,
    look: i.Button.Looks.FILLED,
    children: l.default.Messages.ADD_EMAIL_SHORT
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Button, {
      onClick: d,
      color: i.Button.Colors.PRIMARY,
      look: i.Button.Looks.LINK,
      children: l.default.Messages.CHANGE_EMAIL_SHORT
    }), (0, r.jsx)(a.default, {
      color: i.Button.Colors.BRAND,
      onClick: c
    })]
  })
}
var f = function(e) {
  let {
    onClose: t,
    transitionState: n
  } = e;
  return (0, r.jsxs)(i.ModalRoot, {
    transitionState: n,
    children: [(0, r.jsx)(i.ModalHeader, {
      children: (0, r.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H4,
        children: l.default.Messages.PREMIUM_NOT_VERIFIED
      })
    }), (0, r.jsxs)(i.ModalContent, {
      children: [(0, r.jsx)("div", {
        className: c.imageUnverified
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        className: c.message,
        children: l.default.Messages.PREMIUM_NOT_VERIFIED_BODY
      })]
    }), (0, r.jsx)(i.ModalFooter, {
      children: (0, r.jsx)(s.default, {
        justify: s.default.Justify.END,
        children: (0, r.jsx)(d, {
          onClose: t
        })
      })
    })]
  })
}