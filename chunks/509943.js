"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  r = n("446674"),
  l = n("77078"),
  a = n("599417"),
  i = n("734990"),
  u = n("697218"),
  d = n("258078"),
  E = n("782340"),
  _ = n("679012");

function c(e) {
  let {
    onNext: t,
    onClose: n
  } = e, [c, T] = o.useState(!1), S = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), N = async e => {
    e.preventDefault(), T(!0);
    try {
      await (0, i.sendConfirmationCode)(), t()
    } catch (n) {
      let e = new a.default(n),
        t = e.getAnyErrorMessage();
      null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
    } finally {
      T(!1)
    }
  };
  return (0, s.jsxs)("form", {
    onSubmit: N,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: _.confirmStartHeader,
      children: [(0, s.jsx)(d.default, {
        color: d.default.Colors.HEADER_PRIMARY,
        size: d.default.Sizes.SIZE_24,
        className: _.title,
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }), (0, s.jsx)(l.Text, {
        className: _.description,
        variant: "text-md/normal",
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
          oldEmail: null == S ? void 0 : S.email
        })
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n,
        className: _.modalCloseButton
      })]
    }), (0, s.jsx)(l.ModalContent, {
      className: _.content,
      children: (0, s.jsxs)("div", {
        className: _.buttons,
        children: [(0, s.jsx)(l.Button, {
          type: "submit",
          color: l.Button.Colors.BRAND,
          size: l.Button.Sizes.MEDIUM,
          submitting: c,
          className: _.submit,
          children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
        }), (0, s.jsx)(l.Button, {
          className: _.cancel,
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.PRIMARY,
          onClick: n,
          children: E.default.Messages.CANCEL
        })]
      })
    })]
  })
}