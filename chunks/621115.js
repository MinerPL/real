"use strict";
n.r(t), n.d(t, {
  TextInputFieldBody: function() {
    return c
  },
  DisabledTextInputFormField: function() {
    return d
  },
  TextInputFormField: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  o = n("77078"),
  s = n("272460"),
  a = n("394294"),
  u = n("847121");

function c(e) {
  let {
    value: t,
    placeholder: n,
    onChange: r,
    disabled: s,
    className: c
  } = e;
  return (0, i.jsx)(o.TextInput, {
    inputClassName: l(u.textInputFieldBodyInput, c),
    maxLength: a.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: n,
    onChange: r,
    disabled: s
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(s.QuestionRenderer, {
    title: t.label,
    children: (0, i.jsx)(c, {
      className: u.fieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, i.jsx)(s.QuestionRenderer, {
    title: t.label,
    children: (0, i.jsx)(c, {
      className: u.fieldBackground,
      onChange: n,
      value: t.response
    })
  })
}