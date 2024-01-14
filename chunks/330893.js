"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  },
  openInventoryDisablePublishEmojiModal: function() {
    return u
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("577776"),
  i = s("77078"),
  r = s("782340"),
  o = s("687387");

function d(e) {
  let {
    collectedCount: t,
    transitionState: s,
    onClose: d,
    onConfirm: u
  } = e, c = n.useId();
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: s,
    "aria-labelledby": c,
    children: [(0, a.jsxs)(i.ModalHeader, {
      separator: !1,
      className: o.header,
      children: [(0, a.jsx)(l.Text, {
        id: c,
        variant: "text-md/semibold",
        children: r.default.Messages.INVENTORY_DISABLE_SETTING_TITLE_V2
      }), (0, a.jsx)(i.ModalCloseButton, {
        className: o.closeButton,
        onClick: d
      })]
    }), (0, a.jsx)(i.ModalContent, {
      children: (0, a.jsx)(l.Text, {
        className: o.description,
        variant: "text-sm/medium",
        children: r.default.Messages.INVENTORY_DISABLE_SETTING_DESCRIPTION.format({
          collectedCount: t
        })
      })
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsxs)("div", {
        className: o.buttons,
        children: [(0, a.jsx)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          look: i.Button.Looks.LINK,
          onClick: d,
          children: r.default.Messages.CANCEL
        }), (0, a.jsx)(i.Button, {
          color: i.Button.Colors.RED,
          onClick: function() {
            u(), d()
          },
          children: r.default.Messages.CONFIRM
        })]
      })
    })]
  })
}

function u(e) {
  let {
    collectedCount: t,
    onConfirm: n
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await s.el("330893").then(s.bind(s, "330893"));
    return s => (0, a.jsx)(e, {
      ...s,
      onConfirm: n,
      collectedCount: t
    })
  })
}