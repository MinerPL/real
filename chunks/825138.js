"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  r = n("79112"),
  a = n("792105"),
  o = n("573240"),
  s = n("170213"),
  u = n("49111"),
  c = n("782340"),
  d = n("581935"),
  f = n("49155"),
  E = e => {
    let {
      transitionState: t,
      onClose: n,
      classificationId: E,
      source: _
    } = e, p = (0, a.default)(), I = () => {
      n(), r.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY, s.SafetyHubView.ACCOUNT_STANDING)
    };
    return (0, i.jsxs)(l.ModalRoot, {
      className: d.modalRoot,
      transitionState: t,
      children: [(0, i.jsxs)("div", {
        className: d.modalHeader,
        children: [(0, i.jsx)("img", {
          className: d.image,
          src: f,
          alt: ""
        }), (0, i.jsx)(l.ModalCloseButton, {
          className: d.modalClose,
          onClick: n
        })]
      }), (0, i.jsx)(l.ModalContent, {
        className: d.modalContent,
        children: p ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsx)(o.default, {
          classificationId: E,
          source: _,
          onError: I
        })
      }), (0, i.jsx)(l.ModalFooter, {
        children: (0, i.jsx)(l.Button, {
          className: d.button,
          type: "button",
          color: l.Button.Colors.BRAND,
          onClick: I,
          children: c.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
        })
      })]
    })
  }