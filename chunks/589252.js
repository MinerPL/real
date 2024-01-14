"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  r = s("414456"),
  o = s.n(r),
  l = s("77078"),
  i = s("476765"),
  u = s("345327"),
  d = s("467413"),
  c = s("713186"),
  h = s("905518");

function f(e) {
  let {
    alpha2: t,
    countryCode: s,
    forceMode: r,
    label: f,
    error: m,
    className: p,
    required: C,
    value: S,
    setRef: g,
    placeholder: T,
    autoFocus: A,
    maxLength: N,
    spellCheck: E,
    autoComplete: _,
    autoCapitalize: M,
    autoCorrect: O,
    onChange: I,
    inputClassName: x
  } = e, R = (0, i.useUID)(), [L, v] = n.useState(!1), j = (0, u.shouldShowCountryCodeSelector)(r, S);
  return (0, a.jsx)(l.FormItem, {
    title: f,
    error: m,
    className: p,
    required: C,
    tag: "label",
    htmlFor: R,
    children: (0, a.jsxs)("div", {
      className: o(h.input, c.input, x, {
        [h.error]: null != m,
        [h.focused]: L
      }),
      children: [(0, a.jsx)(d.default, {
        show: j,
        alpha2: t,
        countryCode: s
      }), (0, a.jsx)(l.TextInput, {
        id: R,
        name: "email",
        type: r === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
        value: S,
        inputRef: g,
        placeholder: T,
        "aria-label": f,
        required: C,
        onChange: function(e) {
          let t = (0, u.shouldShowCountryCodeSelector)(r, e) ? s : "";
          I(e, t)
        },
        autoComplete: _,
        autoCapitalize: M,
        autoCorrect: O,
        autoFocus: A,
        maxLength: N,
        spellCheck: E,
        className: c.inputWrapper,
        inputClassName: c.inputField,
        onFocus: () => v(!0),
        onBlur: () => v(!1)
      })]
    })
  })
}