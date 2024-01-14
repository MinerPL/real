"use strict";
a.r(t), a.d(t, {
  UserCodeInput: function() {
    return h
  }
}), a("222007");
var n = a("37983"),
  r = a("884691"),
  s = a("414456"),
  o = a.n(s),
  i = a("730290"),
  u = a("90915"),
  l = a("77078"),
  c = a("8222"),
  d = a("841263"),
  A = a("555520"),
  C = a("782340"),
  f = a("125577");

function h(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: a
  } = e, [s, h] = r.useState(() => {
    let {
      user_code: e
    } = i.parse(window.location.search);
    return a && null != e ? e : ""
  }), E = (0, u.useLocation)(), T = r.useCallback(() => {
    (0, c.logoutWithRedirect)(E)
  }, [E]), {
    manualSubmit: I,
    error: p,
    submitting: _
  } = (0, d.useUserCodeSubmit)(s, t, T);
  return (0, n.jsxs)("div", {
    className: f.content,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xl/extrabold",
      className: f.text,
      children: C.default.Messages.ACTIVATE_DEVICE_TITLE
    }), (0, n.jsx)(l.Text, {
      tag: "p",
      variant: "text-md/medium",
      color: "header-secondary",
      className: f.text,
      children: C.default.Messages.ACTIVATE_DEVICE_BODY
    }), (0, n.jsx)(l.TextInput, {
      placeholder: C.default.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
        number: A.OAuthConstants.USER_CODE_LENGTH
      }),
      maxLength: A.OAuthConstants.USER_CODE_LENGTH,
      className: f.textInputContainer,
      inputClassName: o(f.textInput, {
        [f.textInputError]: null != p
      }),
      autoComplete: "off",
      autoFocus: !0,
      value: s,
      onChange: h,
      error: p
    }), (0, n.jsx)(l.Button, {
      fullWidth: !0,
      color: l.Button.Colors.BRAND,
      onClick: I,
      submitting: _,
      disabled: s.length !== A.OAuthConstants.USER_CODE_LENGTH,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        children: C.default.Messages.SUBMIT
      })
    })]
  })
}