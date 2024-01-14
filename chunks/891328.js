"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var u = n("414456"),
  s = n.n(u),
  l = n("77078"),
  i = n("750482"),
  o = n("945330"),
  a = n("516864");

function c(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(l.Clickable, {
    className: s(a.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(o.default, {
      width: 16,
      height: 16,
      className: a.closeButtonIcon
    })
  })
}

function d(e) {
  let {
    guildProductListing: t,
    onClose: n,
    className: u
  } = e;
  return (0, r.jsxs)(l.ModalHeader, {
    className: s(a.header, u),
    separator: !1,
    children: [(0, r.jsx)(i.default, {
      className: a.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(c, {
      className: a.closeButton,
      onClose: n
    })]
  })
}