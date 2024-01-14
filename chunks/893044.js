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
  u = n("790618"),
  d = n("258078"),
  E = n("782340"),
  _ = n("679012");

function c(e) {
  var t;
  let {
    isSlideReady: n,
    error: c,
    setEmailToken: T,
    setError: S,
    onNext: N,
    onClose: C
  } = e, [f, A] = o.useState(!1), [I, R] = o.useState(""), [h, p] = o.useState(!1), U = (0, r.useStateFromStores)([u.default], () => u.default.getErrors()), O = o.useRef(null);
  o.useEffect(() => {
    if (n) {
      var e;
      null === (e = O.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let m = async e => {
    e.preventDefault(), S(null), A(!0);
    try {
      let {
        token: e
      } = await (0, i.confirmEmailChange)(I);
      T(e), N()
    } catch (t) {
      let e = new a.default(t);
      S(e.getAnyErrorMessage())
    } finally {
      A(!1)
    }
  }, v = async () => {
    if (!h) {
      p(!0);
      try {
        await (0, i.sendConfirmationCode)(!0), (0, l.showToast)((0, l.createToast)(E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, l.ToastType.SUCCESS))
      } catch (n) {
        let e = new a.default(n),
          t = e.getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        p(!1)
      }
    }
  };
  return (0, s.jsxs)("form", {
    onSubmit: m,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: _.header,
      children: [(0, s.jsx)(d.default, {
        color: d.default.Colors.HEADER_PRIMARY,
        size: d.default.Sizes.SIZE_24,
        className: _.title,
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: _.subtitle,
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: C,
        className: _.modalCloseButton
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: _.content,
      children: [(0, s.jsx)(l.FormItem, {
        title: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != c ? c : null == U ? void 0 : null === (t = U.email_token) || void 0 === t ? void 0 : t[0],
        children: (0, s.jsx)(l.TextInput, {
          value: I,
          onChange: R,
          inputRef: O
        })
      }), (0, s.jsx)(l.Text, {
        className: _.help,
        variant: "text-sm/normal",
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: v
        })
      })]
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: f,
        children: E.default.Messages.NEXT
      })
    })]
  })
}