"use strict";
n.r(t), n.d(t, {
  ParagraphFieldBody: function() {
    return c
  },
  DisabledParagraphFormField: function() {
    return d
  },
  ParagraphFormField: function() {
    return f
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("77078"),
  a = n("272460"),
  o = n("394294"),
  u = n("847121");

function c(e) {
  let {
    value: t,
    placeholder: n,
    onChange: i,
    disabled: a,
    className: c
  } = e;
  return (0, r.jsx)(l.TextArea, {
    className: s(u.paragraphFieldBody, c),
    maxLength: o.MAX_PARAGRAPH_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: i,
    disabled: a,
    autosize: !0
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(a.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(c, {
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
  return (0, r.jsx)(a.QuestionRenderer, {
    title: t.label,
    children: (0, r.jsx)(c, {
      className: u.fieldBackground,
      value: t.response,
      onChange: n
    })
  })
}