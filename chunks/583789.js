"use strict";
t.r(l), t.d(l, {
  default: function() {
    return d
  }
}), t("222007");
var n = t("37983"),
  a = t("884691"),
  s = t("414456"),
  r = t.n(s),
  i = t("77078"),
  o = t("476765"),
  u = t("782340"),
  c = t("876197");

function d(e) {
  let {
    errorText: l,
    title: t,
    description: s,
    transitionState: d,
    onCancel: E,
    onConfirm: I,
    children: C
  } = e, h = (0, o.useUID)(), [m, M] = a.useState(!1), _ = a.useCallback(async () => {
    M(!0);
    try {
      await I()
    } catch (e) {
      throw e
    } finally {
      M(!1)
    }
  }, [I]);
  return (0, n.jsxs)(i.ModalRoot, {
    className: c.modal,
    transitionState: d,
    "aria-labelledby": h,
    size: i.ModalSize.SMALL,
    children: [(0, n.jsxs)(i.ModalContent, {
      className: c.modalContent,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        id: h,
        children: t
      }), null != s && "" !== s ? (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: c.description,
        children: s
      }) : null, (0, n.jsx)("div", {
        className: c.body,
        children: C
      }), null != l && "" !== l ? (0, n.jsx)(i.Text, {
        className: c.errorText,
        variant: "text-xs/normal",
        color: "text-danger",
        children: l
      }) : null]
    }), (0, n.jsxs)(i.ModalFooter, {
      children: [(0, n.jsx)(i.Button, {
        submitting: m,
        className: c.button,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.BRAND,
        onClick: _,
        children: u.default.Messages.SAVE
      }), (0, n.jsx)(i.Button, {
        className: r(c.cancelButton, c.button),
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        onClick: E,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}