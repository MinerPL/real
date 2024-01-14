"use strict";
n.r(e), n.d(e, {
  default: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var o = n("77078"),
  r = n("145131"),
  s = n("476765"),
  u = n("769791"),
  l = n("782340"),
  a = n("823197");

function d(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, d = (0, s.useUID)();
  return (0, i.jsxs)(o.ModalRoot, {
    "aria-labelledby": d,
    transitionState: e,
    size: o.ModalSize.SMALL,
    children: [(0, i.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(o.Heading, {
        id: d,
        variant: "heading-lg/semibold",
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
      })
    }), (0, i.jsxs)(o.ModalContent, {
      children: [(0, i.jsx)(r.default, {
        justify: r.default.Justify.CENTER,
        children: (0, i.jsx)("div", {
          className: a.image
        })
      }), (0, i.jsx)(o.Text, {
        className: a.text,
        variant: "text-sm/normal",
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
      })]
    }), (0, i.jsxs)(o.ModalFooter, {
      children: [(0, i.jsx)(o.Button, {
        onClick: function() {
          (0, u.openPremiumSite)(), n()
        },
        children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
      }), (0, i.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: n,
        children: l.default.Messages.CANCEL
      })]
    })]
  })
}